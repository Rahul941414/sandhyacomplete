import clientPromise from "../../src/lib/db";
import { comparePassword, signToken } from "../../src/lib/auth";

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { email, password } = req.body || {};
        if (!email || !password) {
            return res.status(400).json({ error: "email, password required" });
        }

        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || "apnathikana");
        const users = db.collection("users");

        const user: any = await users.findOne({ email: String(email).toLowerCase() });
        if (!user) return res.status(401).json({ error: "Invalid credentials" });

        const ok = await comparePassword(password, user.passwordHash);
        if (!ok) return res.status(401).json({ error: "Invalid credentials" });

        const token = signToken({ uid: String(user._id), email: user.email });
        return res.status(200).json({
            ok: true,
            token,
            user: { id: String(user._id), name: user.name, email: user.email, phone: user.phone || null },
        });
    } catch (e: any) {
        return res.status(500).json({ error: e.message });
    }
}
