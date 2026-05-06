import React, { useMemo, useState } from "react";
import { products as all, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Search, Filter, SortAsc, Plus } from "lucide-react";

export default function Products() {
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"" | Product["category"]>("");
  const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

  // Filter + sort logic
  const items = useMemo(() => {
    let data = all.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (cat) data = data.filter((p) => p.category === cat);
    if (sort === "price-asc") data = [...data].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      data = [...data].sort((a, b) => b.price - a.price);
    return data;
  }, [query, cat, sort]);

  // Category list with counts
  const categories = [
    { value: "biryani", label: "🍛 Biryani" },
    { value: "curries", label: "🥘 Curries" },
    { value: "snacks", label: "🍟 Snacks" },
    { value: "breads", label: "🍞 Breads" },
    { value: "desserts", label: "🍰 Desserts" },
    { value: "beverages", label: "🥤 Beverages" },
  ].map((c) => ({
    ...c,
    count: all.filter((p) => p.category === c.value).length,
  }));

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-orange-600">Delicious</span> Menu
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover authentic Indian flavors crafted with traditional recipes
            and fresh ingredients
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-orange-100 p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for dishes..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>

            {/* Category and Sort */}
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {/* Category */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value as any)}
                  className="pl-10 pr-8 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label} ({c.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as any)}
                  className="pl-10 pr-8 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Sort By</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Category Buttons */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <button
              onClick={() => setCat("")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === ""
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-orange-100 text-orange-700 hover:bg-orange-200"
              }`}
            >
              All ({all.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setCat(c.value as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all ${
                  cat === c.value
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                {c.label.split(" ")[0]} ({c.count})
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-center sm:text-left">
          <p className="text-slate-600">
            Showing{" "}
            <span className="font-semibold text-orange-600">
              {items.length}
            </span>{" "}
            of <span className="font-semibold">{all.length}</span> dishes
            {query && (
              <>
                {" "}
                for "<span className="font-semibold">{query}</span>"
              </>
            )}
            {cat && (
              <>
                {" "}
                in <span className="font-semibold capitalize">{cat}</span>
              </>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              No dishes found
            </h3>
            <p className="text-slate-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-orange-100 overflow-hidden transition-all duration-300 hover:scale-105 group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900 line-clamp-1 flex-1 mr-2">
                      {product.name}
                    </h3>
                    <span className="font-bold text-orange-600 text-xl">
                      ₹{product.price}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {product.description}
                  </p>

                  <button
                    onClick={() =>
                      add({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



// import React, { useMemo, useState } from "react";
// import { products as all, type Product } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { Search, Filter, SortAsc, Plus } from "lucide-react";

// export default function Products() {
//   const { add } = useCart();
//   const [query, setQuery] = useState("");
//   const [cat, setCat] = useState<"" | Product["category"]>("");
//   const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

//   const items = useMemo(() => {
//     let data = all.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
//     if (cat) data = data.filter(p => p.category === cat);
//     if (sort === "price-asc") data = [...data].sort((a,b)=>a.price-b.price);
//     if (sort === "price-desc") data = [...data].sort((a,b)=>b.price-a.price);
//     return data;
//   }, [query, cat, sort]);

//   const categories = [
//     { value: "biryani", label: "🍛 Biryani", count: all.filter(p => p.category === "biryani").length },
//     { value: "curries", label: "🥘 Curries", count: all.filter(p => p.category === "curries").length },
//     { value: "snacks", label: "🍟 Snacks", count: all.filter(p => p.category === "snacks").length },
//     { value: "breads", label: "🍞 Breads", count: all.filter(p => p.category === "breads").length },
//     { value: "desserts", label: "🍰 Desserts", count: all.filter(p => p.category === "desserts").length },
//     { value: "beverages", label: "🥤 Beverages", count: all.filter(p => p.category === "beverages").length },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//             Our <span className="text-orange-600">Delicious</span> Menu
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Discover authentic Indian flavors crafted with traditional recipes and fresh ingredients
//           </p>
//         </div>

//         {/* Filters Section */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//             {/* Search Bar */}
//             <div className="relative flex-1 w-full max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//               <input
//                 value={query}
//                 onChange={e => setQuery(e.target.value)}
//                 placeholder="Search for dishes..."
//                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
//               />
//             </div>

//             <div className="flex flex-wrap gap-3 items-center">
//               {/* Category Filter */}
//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 <select
//                   value={cat}
//                   onChange={e => setCat(e.target.value as any)}
//                   className="pl-10 pr-8 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer transition-all"
//                 >
//                   <option value="">All Categories</option>
//                   {categories.map(category => (
//                     <option key={category.value} value={category.value}>
//                       {category.label} ({category.count})
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Sort Filter */}
//               <div className="relative">
//                 <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 <select
//                   value={sort}
//                   onChange={e => setSort(e.target.value as any)}
//                   className="pl-10 pr-8 py-3 rounded-xl border border-orange-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer transition-all"
//                 >
//                   <option value="">Sort By</option>
//                   <option value="price-asc">Price: Low to High</option>
//                   <option value="price-desc">Price: High to Low</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Quick Category Filters */}
//           <div className="flex flex-wrap gap-2 mt-4 justify-center">
//             <button
//               onClick={() => setCat("")}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 cat === "" 
//                   ? "bg-orange-600 text-white shadow-lg" 
//                   : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//               }`}
//             >
//               All ({all.length})
//             </button>
//             {categories.map(category => (
//               <button
//                 key={category.value}
//                 onClick={() => setCat(category.value as any)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
//                   cat === category.value
//                     ? "bg-orange-600 text-white shadow-lg"
//                     : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//                 }`}
//               >
//                 {category.label.split(' ')[0]} ({category.count})
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-slate-600">
//             Showing <span className="font-semibold text-orange-600">{items.length}</span> of <span className="font-semibold">{all.length}</span> dishes
//             {query && <span> for "<span className="font-semibold">{query}</span>"</span>}
//             {cat && <span> in <span className="font-semibold capitalize">{cat}</span></span>}
//           </p>
//         </div>

//         {/* Products Grid */}
//         {items.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="text-6xl mb-4">🍽️</div>
//             <h3 className="text-xl font-semibold text-slate-700 mb-2">No dishes found</h3>
//             <p className="text-slate-500">Try adjusting your search or filter criteria</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {items.map(product => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-orange-100 overflow-hidden transition-all duration-300 hover:scale-105 group"
//               >
//                 {/* Product Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={product.image}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                   <div className="absolute top-3 right-3">
//                     <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
//                       {product.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-5">
//                   <div className="flex items-start justify-between mb-2">
//                     <h3 className="font-bold text-lg text-slate-900 line-clamp-1 flex-1 mr-2">
//                       {product.name}
//                     </h3>
//                     <span className="font-bold text-orange-600 text-xl whitespace-nowrap">
//                       ₹{product.price}
//                     </span>
//                   </div>
                  
//                   <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
//                     {product.description}
//                   </p>

//                   <button
//                     onClick={() => add({
//                       id: product.id,
//                       name: product.name,
//                       price: product.price,
//                       image: product.image
//                     })}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                   >
//                     <Plus className="w-4 h-4" />
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useMemo, useState } from "react";
// import { products as all, type Product } from "@/data/products";
// import { useCart } from "@/context/CartContext";

// export default function Products() {
//   const { add } = useCart();
//   const [query, setQuery] = useState("");
//   const [cat, setCat] = useState<"" | Product["category"]>("");
//   const [sort, setSort] = useState<"" | "price-asc" | "price-desc">("");

//   const items = useMemo(() => {
//     let data = all.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
//     if (cat) data = data.filter(p => p.category === cat);
//     if (sort === "price-asc") data = [...data].sort((a,b)=>a.price-b.price);
//     if (sort === "price-desc") data = [...data].sort((a,b)=>b.price-a.price);
//     return data;
//   }, [query, cat, sort]);

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
//         <h2 className="text-2xl font-bold">Products</h2>
//         <div className="flex flex-wrap gap-2">
//           <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." className="px-3 py-2 rounded-xl border bg-white"/>
//           <select value={cat} onChange={e=>setCat(e.target.value as any)} className="px-3 py-2 rounded-xl border bg-white">
//             <option value="">All Categories</option>
//             <option value="biryani">Biryani</option>
//             <option value="curries">Curries</option>
//             <option value="snacks">Snacks</option>
//             <option value="breads">Breads</option>
//             <option value="desserts">Desserts</option>
//             <option value="beverages">Beverages</option>
//           </select>
//           <select value={sort} onChange={e=>setSort(e.target.value as any)} className="px-3 py-2 rounded-xl border bg-white">
//             <option value="">Sort</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
//         {items.map(p => (
//           <div key={p.id} className="card overflow-hidden">
//             <img src={p.image} className="w-full h-48 object-cover" alt={p.name} loading="lazy" />
//             <div className="p-5">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold">{p.name}</h3>
//                 <span className="font-bold">₹{p.price}</span>
//               </div>
//               <p className="text-sm text-slate-600 mt-2 line-clamp-2">{p.description}</p>
//               <button className="mt-4 w-full px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700" onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image })}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }