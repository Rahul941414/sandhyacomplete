import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Sandhya<span className="text-red-500">Restaurant</span>
              </h2>
            </Link>

            <p className="text-slate-300 max-w-md leading-relaxed mb-6">
              Discover the true taste of India. SandhyaRestaurant brings authentic,
              freshly prepared meals straight from our kitchen to your table —
              bold flavors, real spices, unforgettable experiences.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "📘" },
                { name: "Instagram", icon: "📷" },
                { name: "Twitter", icon: "🐦" },
                { name: "YouTube", icon: "📺" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110"
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Track Order", path: "/track-order" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-red-400 transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                { name: "Help Center", path: "/help" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact Support", path: "/support" },
                { name: "Feedback", path: "/feedback" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-red-400 transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 mt-12 pt-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">
                Stay in the Loop 🌶️
              </h3>
              <p className="text-slate-400 text-sm">
                New dishes, special offers, and exclusive updates.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
                />
                <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold transition-all hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-slate-400">
            © {currentYear} SandhyaRestaurant. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-slate-400">
            {[
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms", path: "/terms" },
              { name: "Refunds", path: "/refund-cancellation" },
              { name: "Delivery", path: "/shipping-delivery" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-red-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-lg">
            <span title="Card">💳</span>
            <span title="UPI">📱</span>
            <span title="NetBanking">🏦</span>
            <span title="Secure">🔒</span>
          </div>
        </div>
      </div>

      {/* App CTA */}
      <div className="bg-slate-950 py-5 text-center">
        <p className="text-slate-400 text-sm mb-3">
          Get the full SandhyaRestaurant experience on mobile
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm flex items-center gap-2">
            📱 App Store
          </button>
          <button className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm flex items-center gap-2">
            🤖 Play Store
          </button>
        </div>
      </div>
    </footer>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="mt-16 border-t bg-white">
//       <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 items-center">
//         <p className="text-sm text-slate-600">© {new Date().getFullYear()} Sandhya Restaurant. All rights reserved.</p>
//         <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
//           <Link to="/privacy" className="hover:text-brand-700">Privacy</Link>
//           <Link to="/terms" className="hover:text-brand-700">Terms</Link>
//           <Link to="/refund-cancellation" className="hover:text-brand-700">Refund & Cancellation</Link>
//           <Link to="/shipping-delivery" className="hover:text-brand-700">Shipping</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }