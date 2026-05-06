// api/order.ts
import Razorpay from "razorpay";

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    try {
        const { amount, currency = "INR", receipt = "rcpt_" + Date.now() } = req.body || {};
        if (!amount) return res.status(400).json({ error: "amount (in paise) required" });

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID!,
            key_secret: process.env.RAZORPAY_KEY_SECRET!,
        });

        const order = await razorpay.orders.create({
            amount: Math.round(amount), // paise
            currency,
            receipt,
        });

        res.status(200).json(order);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}
