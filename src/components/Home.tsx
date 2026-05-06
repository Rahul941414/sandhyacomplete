import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-orange-50">

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
          About <span className="text-red-600">SandhyaRestaurant</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A journey through India’s most loved flavors — where tradition,
          freshness, and passion come together on every plate.
        </p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 pb-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=800&q=60"
            alt="Indian cooking"
            className="rounded-3xl shadow-2xl border border-red-100"
          />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-red-200 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Rooted in <span className="text-red-600">Tradition</span>,<br />
            Served with <span className="text-red-600">Passion</span>
          </h2>

          <p className="text-slate-700 mb-4 leading-relaxed">
            At <strong>SandhyaRestaurant</strong>, food is more than nourishment —
            it’s culture, memory, and emotion. Inspired by India’s bustling
            streets and home kitchens, our dishes are crafted using authentic
            recipes passed down through generations.
          </p>

          <p className="text-slate-700 leading-relaxed">
            From comforting meals to bold, spicy favorites, every dish is
            prepared fresh with carefully sourced ingredients, balanced spices,
            and a whole lot of love ❤️
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Our <span className="text-red-600">Promise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                Fresh Ingredients
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Only the freshest produce and spices make it into our kitchen —
                quality you can taste.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                Authentic Flavors
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Time-honored Indian recipes, prepared the traditional way —
                bold, balanced, and unforgettable.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                Guest Happiness
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Your satisfaction drives everything we do — every dish, every
                order, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-brand-100"></div>
//         <div className="relative container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
//               Welcome to <span className="text-brand-700">Sandhya Restaurant</span>
//             </h1>
//             <p className="mt-4 text-lg text-slate-600">
//               A modern Indian food ordering experience — fast performance, clean UI, and secure checkout.
//             </p>
//             <div className="mt-6 flex gap-3">
//               <Link to="/products" className="px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700">Shop Now</Link>
//               <Link to="/about" className="px-5 py-3 rounded-2xl bg-white border hover:bg-slate-50">Learn More</Link>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-3xl border bg-white shadow-lg"></div>
//             <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-brand-200 rounded-3xl blur-xl opacity-80"></div>
//             <div className="absolute -top-6 -right-6 w-28 h-28 bg-brand-300 rounded-3xl blur-xl opacity-80"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }