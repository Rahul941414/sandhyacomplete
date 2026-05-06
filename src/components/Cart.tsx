import React from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, inc, dec, remove, totalPrice } = useCart();
  const nav = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {items.length === 0 ? (
          <p className="text-slate-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover"/>
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-slate-600">₹{item.price} each</p>
                  <div className="mt-3 inline-flex items-center gap-2">
                    <button className="px-3 py-1 bg-slate-100 rounded-lg" onClick={() => dec(item.id)}>-</button>
                    <span className="min-w-[2rem] text-center">{item.quantity}</span>
                    <button className="px-3 py-1 bg-slate-100 rounded-lg" onClick={() => inc(item.id)}>+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                  <button className="text-rose-600 mt-2" onClick={() => remove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <aside className="card p-6 h-fit">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <div className="flex justify-between text-slate-600 mb-2">
          <span>Subtotal</span><span>₹{totalPrice}</span>
        </div>
        <div className="flex justify-between text-slate-600 mb-4">
          <span>Delivery</span><span>₹0</span>
        </div>
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span><span>₹{totalPrice}</span>
        </div>
        <button className="w-full bg-brand-600 text-white py-3 rounded-xl hover:bg-brand-700" onClick={() => nav("/checkout")}>
          Proceed to Checkout
        </button>
      </aside>
    </div>
  );
}