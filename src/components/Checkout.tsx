import React, { useState } from "react";
import PaymentSecurity from "./PaymentSecurity";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

declare global { interface Window { Razorpay: any } }

export default function Checkout() {
  const nav = useNavigate();
  const { clear, totalPrice } = useCart();
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gateway, setGateway] = useState<"razorpay" | "payu" | "cod">("razorpay");

  const payWithRazorpay = async () => {
    const res = await fetch("/api/orders/razorpay/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice * 100, currency: "INR", notes: { name, phone } })
    });
    if (!res.ok) { alert("Failed to create order"); return; }
    const order = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxx",
      amount: order.amount,
      currency: order.currency,
      name: "Sandhya Restaurant",
      description: "Order Payment",
      order_id: order.id,
      prefill: { name, contact: phone },
      handler: async function (response: any) {
        const verify = await fetch("/api/orders/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response)
        });
        if (!verify.ok) { alert("Payment verification failed"); return; }
        clear();
        nav("/confirmation", { replace: true });
      },
      notes: { address }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const payWithPayU = async () => {
    const res = await fetch("/api/orders/payu/initiate", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice, name, phone, email: `${phone}@example.com` })
    });
    if (!res.ok) { alert("PayU init failed"); return; }
    const data = await res.json();
    // Simplest flow: server returns a URL to redirect (test mode)
    window.location.href = data.redirectUrl;
  };

  const cashOnDelivery = async () => {
    const res = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalPrice,
        currency: "INR",
        notes: { name, phone, address },
        paymentMethod: "cash_on_delivery"
      })
    });
    if (!res.ok) { alert("Failed to create order"); return; }
    clear();
    nav("/confirmation", { replace: true });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || !name || !phone || !address || totalPrice <= 0) {
      alert("Please complete all fields, have items in cart, and accept Terms & Privacy.");
      return;
    }
    if (gateway === "razorpay") await payWithRazorpay();
    else if (gateway === "payu") await payWithPayU();
    else await cashOnDelivery();
  };

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-6">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border px-4 py-2 rounded-xl" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
          <input className="w-full border px-4 py-2 rounded-xl" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
          <textarea className="w-full border px-4 py-2 rounded-xl" placeholder="Address" rows={4} value={address} onChange={e => setAddress(e.target.value)} />
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2"><input type="radio" checked={gateway === 'razorpay'} onChange={() => setGateway('razorpay')} /> Razorpay</label>
            <label className="flex items-center gap-2"><input type="radio" checked={gateway === 'payu'} onChange={() => setGateway('payu')} /> PayU</label>
            <label className="flex items-center gap-2"><input type="radio" checked={gateway === 'cod'} onChange={() => setGateway('cod')} /> Cash on Delivery</label>
          </div>
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <span>I agree to the <a className="underline" href="/terms" target="_blank">Terms & Conditions</a> and <a className="underline" href="/privacy" target="_blank">Privacy Policy</a>.</span>
          </label>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl disabled:opacity-50" disabled={!agree} type="submit">
            {gateway === 'cod' ? 'Place Order' : `Pay ₹${totalPrice} & Place Order`}
          </button>
        </form>
        <PaymentSecurity />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </div>
      <aside className="card p-6 h-fit">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <div className="flex justify-between text-slate-600 mb-2">
          <span>Total</span><span>₹{totalPrice}</span>
        </div>
        <p className="text-xs text-slate-500">Final amount payable will be calculated on the payment page.</p>
      </aside>
    </div>
  );
}