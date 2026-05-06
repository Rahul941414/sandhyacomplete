import React from "react";

export default function PaymentSecurity() {
  return (
    <div className="mt-8 p-4 rounded-2xl border bg-white">
      <h3 className="font-semibold mb-2">Secure Payments</h3>
      <p className="text-sm text-slate-600">
        Payments are processed securely via PCI-DSS compliant partners (Razorpay/PayU). We never store your card/UPI credentials.
      </p>
    </div>
  );
}