// api/orders/list.ts
import clientPromise from "../src/lib/db";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  // simple auth via header
  const token = req.headers["x-admin-token"];
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "apnathikana");
    const orders = await db.collection("orders")
      .find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    res.status(200).json({ orders });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
