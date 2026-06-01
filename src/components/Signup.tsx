import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  ChefHat,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check
} from "lucide-react";

// Field कंपोनेंट के लिए TypeScript Interface
interface FieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  type?: string;
}

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();

  // States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // फॉर्म सबमिट हैंडलर
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return alert("Please accept the terms");
    setIsLoading(true);
    try {
      await signup(fullName, email, phone, password);
      nav("/");
    } catch {
      alert("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // पासवर्ड स्ट्रेंथ के लिए रूल्स
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password)
  };

  // पास हुए रूल्स का स्कोर
  const score = Object.values(rules).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

        {/* फॉर्म वाला हिस्सा */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-red-100">
          
          {/* ब्रांड और लोगो */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                Sandhya<span className="text-red-600">Restaurant</span>
              </span>
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black mb-2">
              Join the SandhyaRestaurant
            </h1>
            <p className="text-slate-600">
              Create your account and start exploring flavors 🌶️
            </p>
          </div>

          <form onSubmit={submit} className="space-y-6">

            {/* Full Name इनपुट */}
            <Field
              icon={<User size={20} />}
              label="Full Name"
              value={fullName}
              onChange={setFullName}
              placeholder="Your full name"
            />

            {/* Email इनपुट */}
            <Field
              icon={<Mail size={20} />}
              label="Email Address"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
              type="email"
            />

            {/* Phone इनपुट */}
            <Field
              icon={<Phone size={20} />}
              label="Phone Number"
              value={phone}
              onChange={setPhone}
              placeholder="Phone number"
              type="tel"
            />

            {/* Password इनपुट और मीटर */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1-2 text-slate-400 w-5 h-5" style={{ transform: 'translateY(-50%)' }} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-red-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1-2 text-slate-400 focus:outline-none"
                  style={{ transform: 'translateY(-50%)' }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* पासवर्ड स्ट्रेंथ यूआई (तभी दिखेगा जब पासवर्ड में कुछ टाइप होगा) */}
              {password && (
                <div className="mt-4 p-4 bg-slate-50 rounded-xl space-y-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Password strength</span>
                    <span
                      className={
                        score >= 4
                          ? "text-green-600"
                          : score >= 3
                            ? "text-yellow-600"
                            : "text-red-600"
                      }
                    >
                      {score >= 4 ? "Strong" : score >= 3 ? "Good" : "Weak"}
                    </span>
                  </div>

                  {/* चेकलिस्ट इंडिकेटर */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      ["At least 8 characters", rules.length],
                      ["Uppercase letter", rules.upper],
                      ["Lowercase letter", rules.lower],
                      ["Number", rules.number],
                      ["Special character", rules.special]
                    ].map(([label, ok], i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center ${ok ? "bg-green-500" : "bg-slate-300"
                            }`}
                        >
                          {ok && <Check className="w-3 h-3 text-white" />}
                        </span>
                        <span className={ok ? "text-green-700" : "text-slate-500"}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* नियम और शर्तें (Checkbox) */}
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={e => setAgreeTerms(e.target.checked)}
                className="mt-1 rounded text-red-600 focus:ring-red-500"
              />
              <span className="text-slate-700">
                I agree to the{" "}
                <Link to="/terms" className="text-red-600 font-medium hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-red-600 font-medium hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* सबमिट बटन */}
            <button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold flex items-center justify-center gap-2 hover:from-red-700 hover:to-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* लॉगिन लिंक */}
          <p className="text-center text-slate-600 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        {/* राइट साइड वाला विजुअल पैनल (बड़ी स्क्रीन के लिए) */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 shadow-2xl -rotate-2">
            <div className="bg-white rounded-2xl p-6 rotate-2 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-black mb-2">Welcome Bonus</h3>
              <p className="text-slate-600">Get 20% off on your first order</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* रीयूजेबल इनपुट फील्ड कंपोनेंट (Reusable Field Component) */
function Field({
  icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text"
}: FieldProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700 block mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" style={{ transform: 'translateY(-50%)' }}>
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-red-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 outline-none transition-all"
          required
        />
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   ChefHat,
//   User,
//   Mail,
//   Phone,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   Check
// } from "lucide-react";

// export default function Signup() {
//   const { signup } = useAuth();
//   const nav = useNavigate();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!agreeTerms) return alert("Please accept the terms");
//     setIsLoading(true);
//     try {
//       await signup(fullName, email, phone, password);
//       nav("/");
//     } catch {
//       alert("Signup failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const rules = {
//     length: password.length >= 8,
//     upper: /[A-Z]/.test(password),
//     lower: /[a-z]/.test(password),
//     number: /\d/.test(password),
//     special: /[^A-Za-z0-9]/.test(password)
//   };

//   const score = Object.values(rules).filter(Boolean).length;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

//         {/* Form */}
//         <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-red-100">
//           {/* Brand */}
//           <div className="text-center mb-8">
//             <Link to="/" className="inline-flex items-center gap-3 mb-6">
//               <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center">
//                 <ChefHat className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-black tracking-tight">
//                 Sandhya<span className="text-red-600">Restaurant</span>
//               </span>
//             </Link>

//             <h1 className="text-3xl lg:text-4xl font-black mb-2">
//               Join the SandhyaRestaurant
//             </h1>
//             <p className="text-slate-600">
//               Create your account and start exploring flavors 🌶️
//             </p>
//           </div>

//           <form onSubmit={submit} className="space-y-6">

//             {/* Full Name */}
//             <Field
//               icon={<User />}
//               label="Full Name"
//               value={fullName}
//               onChange={setFullName}
//               placeholder="Your full name"
//             />

//             {/* Email */}
//             <Field
//               icon={<Mail />}
//               label="Email Address"
//               value={email}
//               onChange={setEmail}
//               placeholder="you@example.com"
//               type="email"
//             />

//             {/* Phone */}
//             <Field
//               icon={<Phone />}
//               label="Phone Number"
//               value={phone}
//               onChange={setPhone}
//               placeholder="Phone number"
//               type="tel"
//             />

//             {/* Password */}
//             <div>
//               <label className="text-sm font-semibold text-slate-700 block mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                   placeholder="Create a strong password"
//                   className="w-full pl-12 pr-12 py-4 rounded-xl border border-red-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 outline-none"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   {showPassword ? <EyeOff /> : <Eye />}
//                 </button>
//               </div>

//               {/* Strength */}
//               {password && (
//                 <div className="mt-4 p-4 bg-slate-50 rounded-xl space-y-3">
//                   <div className="flex justify-between text-sm font-medium">
//                     <span>Password strength</span>
//                     <span
//                       className={
//                         score >= 4
//                           ? "text-green-600"
//                           : score >= 3
//                             ? "text-yellow-600"
//                             : "text-red-600"
//                       }
//                     >
//                       {score >= 4 ? "Strong" : score >= 3 ? "Good" : "Weak"}
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-2 gap-2 text-sm">
//                     {[
//                       ["At least 8 characters", rules.length],
//                       ["Uppercase letter", rules.upper],
//                       ["Lowercase letter", rules.lower],
//                       ["Number", rules.number],
//                       ["Special character", rules.special]
//                     ].map(([label, ok], i) => (
//                       <div key={i} className="flex items-center gap-2">
//                         <span
//                           className={`w-4 h-4 rounded-full flex items-center justify-center ${ok ? "bg-green-500" : "bg-slate-300"
//                             }`}
//                         >
//                           {ok && <Check className="w-3 h-3 text-white" />}
//                         </span>
//                         <span className={ok ? "text-green-700" : "text-slate-500"}>
//                           {label}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Terms */}
//             <label className="flex items-start gap-3 text-sm">
//               <input
//                 type="checkbox"
//                 checked={agreeTerms}
//                 onChange={e => setAgreeTerms(e.target.checked)}
//                 className="mt-1 rounded text-red-600 focus:ring-red-500"
//               />
//               <span className="text-slate-700">
//                 I agree to the{" "}
//                 <Link to="/terms" className="text-red-600 font-medium">
//                   Terms
//                 </Link>{" "}
//                 and{" "}
//                 <Link to="/privacy" className="text-red-600 font-medium">
//                   Privacy Policy
//                 </Link>
//               </span>
//             </label>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isLoading || !agreeTerms}
//               className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold flex items-center justify-center gap-2 hover:from-red-700 hover:to-orange-700 transition disabled:opacity-50"
//             >
//               {isLoading ? (
//                 <>
//                   <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   Creating account...
//                 </>
//               ) : (
//                 <>
//                   Create Account
//                   <ArrowRight />
//                 </>
//               )}
//             </button>
//           </form>

//           <p className="text-center text-slate-600 mt-8">
//             Already have an account?{" "}
//             <Link to="/login" className="text-red-600 font-semibold hover:underline">
//               Sign in
//             </Link>
//           </p>
//         </div>

//         {/* Visual */}
//         <div className="hidden lg:flex flex-col items-center justify-center">
//           <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 shadow-2xl -rotate-2">
//             <div className="bg-white rounded-2xl p-6 rotate-2 text-center">
//               <div className="text-6xl mb-4">🎉</div>
//               <h3 className="text-2xl font-black mb-2">Welcome Bonus</h3>
//               <p className="text-slate-600">Get 20% off on your first order</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* Reusable Field */
// function Field({
//   icon,
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text"
// }: any) {
//   return (
//     <div>
//       <label className="text-sm font-semibold text-slate-700 block mb-1">
//         {label}
//       </label>
//       <div className="relative">
//         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//           {icon}
//         </div>
//         <input
//           type={type}
//           value={value}
//           onChange={e => onChange(e.target.value)}
//           placeholder={placeholder}
//           className="w-full pl-12 pr-4 py-4 rounded-xl border border-red-200 focus:ring-4 focus:ring-red-100 focus:border-red-500 outline-none"
//           required
//         />
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const { signup } = useAuth();
//   const nav = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try { await signup(fullName, email, phone, password); nav("/"); }
//     catch { alert("Signup failed"); }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
//       <div className="card p-6">
//         <h2 className="text-xl font-semibold mb-4">Create Account</h2>
//         <form onSubmit={submit} className="space-y-3">
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
//           <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Sign Up</button>
//         </form>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="text-2xl font-bold">Join Sandhya Restaurant</h3>
//         <p className="text-slate-600 mt-2">Save your details and checkout faster next time.</p>
//       </div>
//     </div>
//   );
// }