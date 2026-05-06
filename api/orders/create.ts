// api/orders/create.ts
import clientPromise from "../src/lib/db";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { items, user, payment } = req.body || {};
    if (!items || !Array.isArray(items)) return res.status(400).json({ error: "items[] required" });

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "apnathikana");

    const result = await db.collection("orders").insertOne({
      items,                     // [{id,name,qty,price}]
      user: user || null,        // {name,phone,address,email}
      payment: payment || null,  // {orderId,paymentId,signature,status}
      createdAt: new Date(),
    });

    res.status(200).json({ ok: true, id: String(result.insertedId) });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
