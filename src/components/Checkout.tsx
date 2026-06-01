import React, { useState } from "react";
import PaymentSecurity from "./PaymentSecurity";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const nav = useNavigate();
  const { clear, items, totalPrice } = useCart();
  const { user } = useAuth();
  
  // States
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [gateway, setGateway] = useState<"payu" | "cod">("cod"); // Razorpay हटाकर डिफ़ॉल्ट 'cod' किया
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || !name || !phone || !address || totalPrice <= 0 || items.length === 0) {
      alert("Please complete all fields, add items to cart, and accept Terms & Privacy.");
      return;
    }
    if (gateway === "payu") await payWithPayU();
    else await cashOnDelivery();
  };

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Checkout</h2>
        
        <form onSubmit={submit} className="space-y-4">
          {successMessage ? (
            <div className="rounded-2xl bg-emerald-100 border border-emerald-200 p-4 text-emerald-900 font-medium animate-pulse">
              {successMessage}
            </div>
          ) : null}
          
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-1 block">Full Name</label>
            <input required className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 transition" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-1 block">Phone Number</label>
            <input required className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 transition" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-1 block">Delivery Address</label>
            <textarea required className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 transition" placeholder="Address" rows={3} value={address} onChange={e => setAddress(e.target.value)} />
          </div>

          {/* पेमेंट गेटवे सेलेक्टर्स */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Select Payment Method</label>
            <div className="flex items-center gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <label className="flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input type="radio" name="gateway" checked={gateway === 'cod'} onChange={() => setGateway('cod')} className="text-red-600 focus:ring-red-500 cursor-pointer" /> 
                Cash on Delivery (COD)
              </label>
              <label className="flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input type="radio" name="gateway" checked={gateway === 'payu'} onChange={() => setGateway('payu')} className="text-red-600 focus:ring-red-500 cursor-pointer" /> 
                PayU Online
              </label>
            </div>
          </div>

          {/* नियम एवं शर्तें */}
          <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer py-2">
            <input type="checkbox" className="mt-1 rounded text-red-600 focus:ring-red-500 cursor-pointer" checked={agree} onChange={e => setAgree(e.target.checked)} />
            <span>I agree to the <a className="underline text-red-600 font-medium" href="/terms" target="_blank" rel="noreferrer">Terms & Conditions</a> and <a className="underline text-red-600 font-medium" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.</span>
          </label>

          {/* सबमिट बटन */}
          <button 
            className="w-full lg:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3.5 rounded-xl font-bold transition disabled:opacity-50 shadow-md" 
            disabled={!agree || loading} 
            type="submit"
          >
            {loading ? "Processing..." : gateway === 'cod' ? 'Place Order' : `Pay ₹${totalPrice} & Place Order`}
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