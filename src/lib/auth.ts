import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function hashPassword(plain: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(plain, salt);
}

export async function comparePassword(plain: string, hash: string) {
    return bcrypt.compare(plain, hash);
}

export function signToken(payload: object) {
    const secret = process.env.JWT_SECRET!;
    if (!secret) throw new Error("JWT_SECRET missing");
    return jwt.sign(payload, secret, { expiresIn: "7d" });
}
