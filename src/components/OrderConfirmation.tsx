// web/src/components/OrderConfirmation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

type ConfirmationState = {
  orderId?: string;
  paymentMethod?: string;
};

export default function OrderConfirmation() {
  const location = useLocation();
  const state = location.state as ConfirmationState | null;

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-extrabold">🎉 Order Confirmed!</h2>
      <p className="mt-3 text-slate-600">
        {state?.orderId ? (
          <>
            Your order <span className="font-semibold">#{state.orderId}</span> has been placed successfully.
            {state.paymentMethod ? ` Payment method: ${state.paymentMethod}.` : ""}
          </>
        ) : (
          <>Thank you for ordering with <span className="text-brand-700">Sandhya Restaurant</span>. Your delicious food is being prepared and will reach you soon!</>
        )}
      </p>
      {state?.paymentMethod ? (
        <p className="mt-2 text-sm text-slate-500">Order type: {state.paymentMethod}</p>
      ) : null}
      <div className="mt-6">
        <Link
          className="px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700"
          to="/products"
        >
          Continue Ordering
        </Link>
      </div>
    </div>
  );
}
