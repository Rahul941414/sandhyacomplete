// api/orders/razorpay/verify.ts
import crypto from "crypto";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: "Missing payment verification fields" });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET || "";
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      // TODO: persist payment info to DB if needed
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: "Invalid signature" });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
