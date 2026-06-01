import React, { useState } from "react";
import PaymentSecurity from "./PaymentSecurity";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const nav = useNavigate();
  const { clear, totalPrice } = useCart();
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gateway, setGateway] = useState<"razorpay" | "payu">("razorpay");

  // PayU पेमेंट गेटवे फंक्शन
  const payWithPayU = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders/payu/initiate", {
        method: "POST", 
        headers: { 
          "Content-Type": "application/json",
          "Authorization": user?.token ? `Bearer ${user.token}` : ""
        },
        body: JSON.stringify({ amount: totalPrice, name, phone, email: `${phone}@example.com`, address })
      });
      
      if (!res.ok) { alert("PayU initialization failed"); return; }
      const data = await res.json();
      
      // बैकएंड से मिलने वाले सही यूआरएल पर रीडायरेक्ट करें
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Payment URL not found");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong with PayU");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Cash on Delivery (COD) फंक्शन - बैकएंड के अनुसार सिंक किया गया
  const cashOnDelivery = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": user?.token ? `Bearer ${user.token}` : ""
        },
        body: JSON.stringify({
          // 📝 बैकएंड के अनुसार यहाँ से items हटा दिया गया है ताकि कोई 500 एरर न आए
          user: { name, phone, address },
          payment: {
            method: "cash_on_delivery",
            status: "pending",
            amount: totalPrice,
          },
        }),
      });

      setLoading(false);
      if (!res.ok) { alert("Failed to create order. Please try again."); return; }
      
      const data = await res.json();
      clear(); // कार्ट क्लियर करें
      setSuccessMessage("Order placed successfully! Your order is confirmed. 🎉");
      
      // 1.4 सेकंड बाद कन्फर्मेशन पेज पर भेजें
      setTimeout(() => {
        nav("/confirmation", { replace: true, state: { orderId: data.id, paymentMethod: "Cash on Delivery" } });
      }, 1400);
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Server error while placing order.");
    }
  };

  const cashOnDelivery = async () => {
    setLoading(true);
    const res = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items,
        user: { name, phone, address },
        payment: {
          method: "cash_on_delivery",
          status: "pending",
          amount: totalPrice,
        },
      }),
    });
    setLoading(false);
    if (!res.ok) { alert("Failed to create order"); return; }
    const data = await res.json();
    clear();
    setSuccessMessage(`Order placed successfully! Your order #${data.id} is confirmed.`);
    setTimeout(() => {
      nav("/confirmation", { replace: true, state: { orderId: data.id, paymentMethod: "Cash on Delivery" } });
    }, 1400);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || !name || !phone || !address || totalPrice <= 0) {
      alert("Please complete all fields, have items in cart, and accept Terms & Privacy.");
      return;
    }
    if (gateway === "razorpay") await payWithRazorpay();
    else await payWithPayU();
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
          </div>

          {/* नियम एवं शर्तें */}
          <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer py-2">
            <input type="checkbox" className="mt-1 rounded text-red-600 focus:ring-red-500 cursor-pointer" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <span>I agree to the <a className="underline text-red-600 font-medium" href="/terms" target="_blank" rel="noreferrer">Terms & Conditions</a> and <a className="underline text-red-600 font-medium" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.</span>
          </label>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl disabled:opacity-50" disabled={!agree} type="submit">
            Pay ₹{totalPrice} & Place Order
          </button>
        </form>
        
        <PaymentSecurity />
      </div>

      {/* ऑर्डर समरी पैनल */}
      <aside className="card p-6 h-fit bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Order Summary</h3>
        <div className="flex justify-between font-semibold text-slate-700 text-lg border-b border-slate-200 pb-3 mb-2">
          <span>Total Payable</span><span className="text-red-600">₹{totalPrice}</span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">By placing the order, you agree that your details will be securely processed to manage your dispatch.</p>
      </aside>
    </div>
  );
}