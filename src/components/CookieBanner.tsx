import React, { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (!localStorage.getItem("cookieConsent")) setVisible(true); }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 bg-white border shadow-xl rounded-2xl p-4 max-w-3xl">
      <p className="text-sm text-slate-700">
        We use cookies to improve your shopping experience. By using our site, you agree to our{" "}
        <a href="/privacy" className="underline" target="_blank">Privacy Policy</a>.
      </p>
      <div className="mt-3 flex gap-2">
        <button className="px-4 py-2 rounded-xl bg-brand-600 text-white" onClick={() => { localStorage.setItem("cookieConsent", "accepted"); setVisible(false); }}>Accept</button>
        <button className="px-4 py-2 rounded-xl bg-slate-200" onClick={() => { localStorage.setItem("cookieConsent", "dismissed"); setVisible(false); }}>Dismiss</button>
      </div>
    </div>
  );
}