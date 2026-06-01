import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  User,
  UtensilsCrossed
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { totalQty } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const nav = useNavigate();

  const baseLink =
    "px-4 py-2 text-sm font-medium transition-all duration-300";

  const active = ({ isActive }: any) =>
    isActive
      ? `${baseLink} text-red-600 border-b-2 border-red-600`
      : `${baseLink} text-slate-700 hover:text-red-600`;

  const handleLogout = () => {
    logout();
    nav("/");
    setUserDropdown(false);
    setOpen(false);
  };

  // ✅ सुरक्षित तरीके से नाम का पहला अक्षर (First Name) निकालना
  // AuthContext में 'name' है, इसलिए 'user?.name' का उपयोग किया गया है
  const firstName = user?.name ? user.name.split(" ")[0] : "User";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-red-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center shadow-md">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Sandhya<span className="text-red-600">Restaurant</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <NavLink key={item.path} to={item.path} className={active} end>
              {item.label}
            </NavLink>
          ))}

          {/* Cart */}
          <NavLink to="/cart" className={active}>
            <div className="relative">
              <ShoppingCart size={18} />
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  {totalQty}
                </span>
              )}
            </div>
          </NavLink>

          {/* User Section - ✅ Optional Chaining के साथ सुरक्षित किया गया */}
          {user ? (
            <div className="relative ml-4">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 transition"
              >
                <User size={18} />
                <span className="text-sm font-medium">
                  {firstName}
                </span>
              </button>

              {userDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-red-100 py-1">
                  <div className="px-4 py-3 border-b text-sm">
                    <p className="font-semibold text-slate-800">{user?.name || "User"}</p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setUserDropdown(false)}
                    className="block px-4 py-2 hover:bg-red-50 text-sm text-slate-700"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setUserDropdown(false)}
                    className="block px-4 py-2 hover:bg-red-50 text-sm text-slate-700"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 text-sm border-t mt-1"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-4">
              <NavLink to="/login" className="text-sm text-slate-700 hover:text-red-600 transition">
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition shadow-sm"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <Link to="/cart" className="relative p-2 text-slate-700">
            <ShoppingCart />
            {totalQty > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 text-[10px] bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                {totalQty}
              </span>
            )}
          </Link>

          <button onClick={() => setOpen(!open)} className="p-2 text-slate-700">
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-red-50 shadow-inner">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Menu" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
            { path: "/cart", label: "Cart" }
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 border-b border-slate-50 text-slate-700 hover:bg-red-50 transition"
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* Mobile User Authentication Menu */}
          <div className="p-4 bg-slate-50">
            {user ? (
              <div className="space-y-2">
                <div className="px-2 pb-2 text-xs text-slate-500">
                  Logged in as: <strong className="text-slate-700">{user?.email}</strong>
                </div>
                <Link 
                  to="/profile" 
                  onClick={() => setOpen(false)}
                  className="block text-center w-full py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 rounded-lg bg-red-50 text-sm font-semibold text-red-600 hover:bg-red-100 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2.5 rounded-lg bg-red-600 text-sm font-semibold text-white shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}


// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import {
//   ShoppingCart,
//   Menu,
//   User,
//   UtensilsCrossed,
//   Utensils
// } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useAuth } from "@/context/AuthContext";

// export default function Header() {
//   const { totalQty } = useCart();
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);
//   const [userDropdown, setUserDropdown] = useState(false);
//   const nav = useNavigate();

//   const baseLink =
//     "px-4 py-2 text-sm font-medium transition-all duration-300";

//   const active = ({ isActive }: any) =>
//     isActive
//       ? `${baseLink} text-red-600 border-b-2 border-red-600`
//       : `${baseLink} text-slate-700 hover:text-red-600`;

//   const handleLogout = () => {
//     logout();
//     nav("/");
//     setUserDropdown(false);
//     setOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-red-100 shadow-sm">
//       <div className="container mx-auto px-4 h-20 flex items-center justify-between">

//         {/* Brand */}
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center shadow-md">
//             <UtensilsCrossed className="w-5 h-5 text-white" />
//           </div>
//           <span className="text-2xl font-extrabold tracking-tight text-slate-900">
//             Sandhya<span className="text-red-600">Restaurant</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-6">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/products", label: "Menu" },
//             { path: "/about", label: "About" },
//             { path: "/contact", label: "Contact" }
//           ].map((item) => (
//             <NavLink key={item.path} to={item.path} className={active} end>
//               {item.label}
//             </NavLink>
//           ))}

//           {/* Cart */}
//           <NavLink to="/cart" className={active}>
//             <div className="relative">
//               <ShoppingCart size={18} />
//               {totalQty > 0 && (
//                 <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
//                   {totalQty}
//                 </span>
//               )}
//             </div>
//           </NavLink>

//           {/* User */}
//           {user ? (
//             <div className="relative ml-4">
//               <button
//                 onClick={() => setUserDropdown(!userDropdown)}
//                 className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50"
//               >
//                 <User size={18} />
//                 <span className="text-sm font-medium">
//                   {user.fullName.split(" ")[0]}
//                 </span>
//               </button>

//               {userDropdown && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-red-100">
//                   <div className="px-4 py-3 border-b text-sm">
//                     <p className="font-semibold">{user.fullName}</p>
//                     <p className="text-slate-500">{user.email}</p>
//                   </div>
//                   <Link
//                     to="/profile"
//                     onClick={() => setUserDropdown(false)}
//                     className="block px-4 py-2 hover:bg-red-50 text-sm"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     to="/orders"
//                     onClick={() => setUserDropdown(false)}
//                     className="block px-4 py-2 hover:bg-red-50 text-sm"
//                   >
//                     My Orders
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 text-sm border-t"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="flex items-center gap-3 ml-4">
//               <NavLink to="/login" className="text-sm text-slate-700 hover:text-red-600">
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/signup"
//                 className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
//               >
//                 Sign Up
//               </NavLink>
//             </div>
//           )}
//         </nav>

//         {/* Mobile */}
//         <div className="lg:hidden flex items-center gap-3">
//           <Link to="/cart" className="relative">
//             <ShoppingCart />
//             {totalQty > 0 && (
//               <span className="absolute -top-2 -right-2 w-4 h-4 text-[10px] bg-red-600 text-white rounded-full flex items-center justify-center">
//                 {totalQty}
//               </span>
//             )}
//           </Link>

//           <button onClick={() => setOpen(!open)}>
//             <Menu />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="lg:hidden bg-white border-t">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/products", label: "Menu" },
//             { path: "/about", label: "About" },
//             { path: "/contact", label: "Contact" },
//             { path: "/cart", label: "Cart" }
//           ].map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className="block px-6 py-3 border-b text-slate-700 hover:bg-red-50"
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }




// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ShoppingCart, Menu, UserRound } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useAuth } from "@/context/AuthContext";

// export default function Header() {
//   const { totalQty } = useCart();
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);
//   const nav = useNavigate();

//   const navLink = "px-3 py-2 rounded-lg hover:bg-slate-100";
//   const active = ({ isActive }: any) => (isActive ? "bg-slate-200 " + navLink : navLink);

//   return (
//     <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link to="/" className="font-extrabold text-xl tracking-tight">
//           <span className="text-brand-700">Apna</span> Thikana
//         </Link>
//         <nav className="hidden md:flex items-center gap-1">
//           <NavLink to="/" className={active} end>Home</NavLink>
//           <NavLink to="/products" className={active}>Products</NavLink>
//           <NavLink to="/about" className={active}>About</NavLink>
//           <NavLink to="/contact" className={active}>Contact</NavLink>
//           <NavLink to="/cart" className={active}>
//             <div className="relative flex items-center gap-2">
//               <ShoppingCart size={18}/>
//               <span>Cart</span>
//               {totalQty > 0 && (
//                 <span className="absolute -right-2 -top-2 text-xs bg-brand-600 text-white rounded-full px-1.5">{totalQty}</span>
//               )}
//             </div>
//           </NavLink>
//           {user ? (
//             <div className="ml-2 flex items-center gap-2">
//               <span className="text-sm text-slate-700 flex items-center gap-1"><UserRound size={16}/> {user.fullName.split(" ")[0]}</span>
//               <button className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm" onClick={()=>{ logout(); nav("/"); }}>Logout</button>
//             </div>
//           ) : (
//             <>
//               <NavLink to="/login" className={active}>Login</NavLink>
//               <NavLink to="/signup" className={active}>Signup</NavLink>
//             </>
//           )}
//         </nav>
//         <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
//           <Menu />
//         </button>
//       </div>
//       {open && (
//         <div className="md:hidden border-t bg-white">
//           <div className="flex flex-col p-2">
//             <NavLink onClick={()=>setOpen(false)} to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100">Home</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/products" className="px-3 py-2 rounded-lg hover:bg-slate-100">Products</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/about" className="px-3 py-2 rounded-lg hover:bg-slate-100">About</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/contact" className="px-3 py-2 rounded-lg hover:bg-slate-100">Contact</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/cart" className="px-3 py-2 rounded-lg hover:bg-slate-100">Cart</NavLink>
//             {user ? <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-100" onClick={()=>{ setOpen(false); logout(); }}>Logout</button> : (<><NavLink onClick={()=>setOpen(false)} to="/login" className="px-3 py-2 rounded-lg hover:bg-slate-100">Login</NavLink><NavLink onClick={()=>setOpen(false)} to="/signup" className="px-3 py-2 rounded-lg hover:bg-slate-100">Signup</NavLink></>)}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }