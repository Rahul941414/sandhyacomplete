import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/components/Home";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import OrderConfirmation from "@/components/OrderConfirmation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Terms from "@/components/Terms";
import Privacy from "@/components/Privacy";
import RefundCancellation from "@/components/RefundCancellation";
import ShippingDelivery from "@/components/ShippingDelivery";
import Login from "@/components/Login";
import Signup from "@/components/Signup";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";

/* 🔁 Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/* 🔒 Protect routes that require authentication */
function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const loc = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-600 border-opacity-80"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }

  return <>{children}</>;
}

/* 🌍 Main App Component */
export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-dvh flex flex-col overflow-x-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          {/* Header */}
          <Header />

          {/* Main content area */}
          <main className="flex-1">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                }
              />
              <Route path="/confirmation" element={<OrderConfirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route
                path="/refund-cancellation"
                element={<RefundCancellation />}
              />
              <Route path="/shipping-delivery" element={<ShippingDelivery />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Footer and Cookie Notice */}
          <Footer />
          <CookieBanner />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}



// import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CookieBanner from "@/components/CookieBanner";
// import Home from "@/components/Home";
// import Products from "@/components/Products";
// import Cart from "@/components/Cart";
// import Checkout from "@/components/Checkout";
// import OrderConfirmation from "@/components/OrderConfirmation";
// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Terms from "@/components/Terms";
// import Privacy from "@/components/Privacy";
// import RefundCancellation from "@/components/RefundCancellation";
// import ShippingDelivery from "@/components/ShippingDelivery";
// import Login from "@/components/Login";
// import Signup from "@/components/Signup";
// import { CartProvider } from "@/context/CartContext";
// import { AuthProvider, useAuth } from "@/context/AuthContext";

// function RequireAuth({ children }: { children: React.ReactNode }) {
//   const { user, isLoading } = useAuth();
//   const loc = useLocation();
//   if (isLoading) return null;
//   if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
//   return <>{children}</>;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <div className="min-h-dvh flex flex-col">
//           <Header />
//           <main className="flex-1">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
//               <Route path="/confirmation" element={<OrderConfirmation />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/privacy" element={<Privacy />} />
//               <Route path="/terms" element={<Terms />} />
//               <Route path="/refund-cancellation" element={<RefundCancellation />} />
//               <Route path="/shipping-delivery" element={<ShippingDelivery />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//           </main>
//           <Footer />
//           <CookieBanner />
//         </div>
//       </CartProvider>
//     </AuthProvider>
//   );
// }