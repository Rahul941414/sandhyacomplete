import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { ChefHat, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      nav("/");
    } catch {
      alert("Invalid credentials. Please check your email and password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

        {/* Left: Login */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-red-100">
          {/* Brand */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                Sandhya<span className="text-red-600">Restaurant</span>
              </span>
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600">
              Sign in to continue your flavor journey 🌶️
            </p>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-red-200 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-red-200 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-red-600 focus:ring-red-500" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-red-600 font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold hover:from-red-700 hover:to-orange-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight />
                </>
              )}
            </button>
          </form>

          {/* Signup */}
          <p className="text-center text-slate-600 mt-8">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-red-600 font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>

        {/* Right: Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 shadow-2xl rotate-2">
            <div className="bg-white rounded-2xl p-6 -rotate-2 text-center">
              <div className="text-6xl mb-4">🍛</div>
              <h3 className="text-2xl font-black mb-2">
                Real Indian Flavors
              </h3>
              <p className="text-slate-600">
                Login to discover authentic dishes & exclusive offers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12 max-w-md">
            {[
              { icon: "🚚", text: "Fast Delivery" },
              { icon: "🌶️", text: "Bold Flavors" },
              { icon: "👑", text: "Premium Quality" },
              { icon: "🍽️", text: "50+ Dishes" }
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-red-100"
              >
                <span className="text-xl">{f.icon}</span>
                <span className="text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try { await login(email, password); nav("/"); }
//     catch { alert("Invalid credentials"); }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
//       <div className="card p-6">
//         <h2 className="text-xl font-semibold mb-4">Login</h2>
//         <form onSubmit={submit} className="space-y-3">
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Login</button>
//         </form>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="text-2xl font-bold">Welcome back to Sandhya Restaurant</h3>
//         <p className="text-slate-600 mt-2">Secure access to your account and a better shopping experience.</p>
//       </div>
//     </div>
//   );
// }