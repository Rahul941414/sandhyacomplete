import clientPromise from "../../src/lib/db";
import { hashPassword } from "../../src/lib/auth";

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, password, phone } = req.body || {};
        if (!name || !email || !password) {
            return res.status(400).json({ error: "name, email, password required" });
        }

        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || "apnathikana");
        const users = db.collection("users");

        // unique email index (safe to call repeatedly)
        await users.createIndex({ email: 1 }, { unique: true });

        const existing = await users.findOne({ email: String(email).toLowerCase() });
        if (existing) return res.status(409).json({ error: "Email already registered" });

        const passwordHash = await hashPassword(password);
        const doc = {
            name,
            email: String(email).toLowerCase(),
            phone: phone || null,
            passwordHash,
            createdAt: new Date(),
        };

        const result: any = await users.insertOne(doc);
        return res.status(201).json({ ok: true, id: String(result.insertedId) });
    } catch (e: any) {
        // duplicate key
        if (e?.code === 11000) return res.status(409).json({ error: "Email already registered" });
        return res.status(500).json({ error: e.message });
    }
}
