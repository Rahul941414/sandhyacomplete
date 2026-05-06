import React from "react";
import { ChefHat, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "10K+", label: "Happy Customers", icon: "😊" },
    { number: "50+", label: "Dish Varieties", icon: "🍛" },
    { number: "4.9★", label: "Customer Rating", icon: "⭐" },
    { number: "30min", label: "Avg. Delivery", icon: "⚡" }
  ];

  const values = [
    {
      icon: <ChefHat className="w-10 h-10 text-red-600" />,
      title: "Our Mission",
      description:
        "To deliver authentic Indian flavors through traditional recipes, fresh ingredients, and modern convenience."
    },
    {
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      title: "Our Passion",
      description:
        "Every dish is crafted with heart — inspired by Indian homes, family kitchens, and shared meals."
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: "Our Quality",
      description:
        "Premium spices, strict hygiene, and uncompromised taste — excellence in every bite."
    }
  ];

  const features = [
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Skilled chefs with years of experience in authentic Indian cuisine"
    },
    {
      icon: "🌱",
      title: "Fresh Ingredients",
      description: "Daily sourced vegetables and hand-picked spices"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Hot, fresh meals delivered right to your doorstep"
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      description: "Premium quality food at honest, transparent prices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 py-28 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
              <ChefHat className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            About <span className="text-yellow-300">SandhyaRestaurant</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            A journey through India’s most loved flavors — bold, authentic, and unforgettable
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center hover:scale-105 transition">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-red-600">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Our Flavorful Journey
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10 border border-red-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-red-600">SandhyaRestaurant</span> began with a
            simple idea — to make real Indian home-style food easily accessible without
            losing its soul.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Inspired by generations of culinary tradition, we blend time-honored recipes
            with modern kitchens and efficient delivery.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every plate reflects our love for spices, culture, and hospitality —
            bringing India closer to you, one meal at a time.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            What Drives Us
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition border border-red-100"
            >
              <div className="mb-6">{v.icon}</div>
              <h3 className="text-2xl font-black mb-3">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Why Choose SandhyaRestaurant?
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 text-center border border-red-200 hover:scale-105 transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-red-700 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Explore Real Indian Flavors?
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Thousands trust SandhyaRestaurant for authentic taste, fast delivery, and unforgettable meals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-4 bg-white text-red-600 rounded-xl font-black hover:bg-red-50 transition"
            >
              Explore Menu
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white rounded-xl font-black hover:bg-white hover:text-red-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React from "react";
// import { Users, Target, Heart, Award } from "lucide-react";

// export default function About() {
//   const stats = [
//     { number: "10K+", label: "Happy Customers" },
//     { number: "500+", label: "Products" },
//     { number: "5★", label: "Average Rating" },
//     { number: "24/7", label: "Support" }
//   ];

//   const values = [
//     {
//       icon: <Target className="w-8 h-8 text-blue-600" />,
//       title: "Our Mission",
//       description: "To bring authentic Indian products and experiences to every home, connecting communities through quality and tradition."
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-red-500" />,
//       title: "Our Values",
//       description: "We believe in authenticity, quality, and building lasting relationships with our customers and artisan partners."
//     },
//     {
//       icon: <Award className="w-8 h-8 text-yellow-600" />,
//       title: "Our Promise",
//       description: "Premium quality products, exceptional service, and a seamless shopping experience that exceeds expectations."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               About <span className="text-yellow-300">Sandhya Restaurant</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
//               Where tradition meets innovation in the digital marketplace
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-4 -mt-10 relative z-10">
//         <div className="bg-white rounded-2xl shadow-2xl p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16">
//         {/* Story Section */}
//         <div className="max-w-4xl mx-auto mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Sandhya Restaurant began with a simple vision: to create a modern Indian storefront that bridges
//               the gap between traditional craftsmanship and contemporary digital commerce. Founded on the
//               principles of performance, design, and compliance, we've built more than just an online store.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               We're a community that celebrates the rich heritage of Indian culture while embracing
//               innovative technology to deliver exceptional shopping experiences. Every product in our
//               collection is carefully curated to ensure authenticity, quality, and cultural significance.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Today, Sandhya Restaurant stands as a testament to what's possible when tradition meets
//               innovation, serving customers worldwide while supporting local artisans and businesses
//               across India.
//             </p>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">What Drives Us</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                 <div className="mb-6">{value.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>





//         {/* CTA Section */}
//         <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
//           <p className="text-xl mb-8 text-orange-100">
//             Be part of our mission to celebrate and preserve Indian heritage through commerce
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }
