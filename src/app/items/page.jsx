// "use client";

// import React, { useState, useMemo } from "react";
// import { gadgets } from "@/lib/items";
// import ItemCard from "@/components/items/ItemCard"; 
// import ItemFilter from "@/components/items/ItemFilter";  

// const AllItemsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("default");

  
//   const categories = useMemo(() => {
//     return ["All", ...new Set(gadgets.map((g) => g.category))];
//   }, []);

 
//   const filteredGadgets = useMemo(() => {
//     let result = [...gadgets];

    
//     if (searchQuery.trim() !== "") {
//       result = result.filter((g) =>
//         g.name.toLowerCase().includes(searchQuery.toLowerCase()),
//       );
//     }

    
//     if (selectedCategory !== "All") {
//       result = result.filter((g) => g.category === selectedCategory);
//     }

     
//     if (sortBy === "price-low") {
//       result.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       result.sort((a, b) => b.price - a.price);
//     } else if (sortBy === "rating") {
//       result.sort((a, b) => b.rating - a.rating);
//     }

//     return result;
//   }, [searchQuery, selectedCategory, sortBy]);

//   return (
//     <div className="bg-gray-950 min-h-screen py-12 text-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* পেজ হেডার */}
//         <div className="text-center sm:text-left mb-10">
//           <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
//             Our Tech Ecosystem
//           </h1>
//           <p className="mt-2 text-gray-400">
//             Browse through our futuristic collection of elite gadgets and gear.
//           </p>
//         </div>

         
//         <ItemFilter
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           sortBy={sortBy}
//           setSortBy={setSortBy}
//           categories={categories}
//         />

        
//         {filteredGadgets.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredGadgets.map((gadget) => (
              
//               <ItemCard key={gadget.id} gadget={gadget} />
//             ))}
//           </div>
//         ) : (
          
//           <div className="text-center py-20 border border-dashed border-gray-800 rounded-2xl bg-gray-900/10">
//             <p className="text-gray-400 text-lg font-medium">
//               No gadgets match your search filters.
//             </p>
//             <button
//               onClick={() => {
//                 setSearchQuery("");
//                 setSelectedCategory("All");
//                 setSortBy("default");
//               }}
//               className="mt-4 text-sm text-blue-500 hover:text-blue-400 underline font-semibold transition"
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllItemsPage;


"use client";

import React, { useState, useMemo, useEffect } from "react";
import { gadgets as staticGadgets } from "@/lib/items"; // ডিফল্ট স্ট্যাটিক ডেটা
import ItemCard from "@/components/items/ItemCard";
import ItemFilter from "@/components/items/ItemFilter";

const AllItemsPage = () => {
  // লোকাল স্টেট শুরুতে খালি অ্যারে থাকবে
  const [allGadgets, setAllGadgets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // অ্যাসাইনমেন্ট শর্ত: পেজ লোড হওয়ার সময় LocalStorage থেকে ডেটা সিঙ্ক করা
  useEffect(() => {
    const storedItems = localStorage.getItem("technest_gadgets");
    if (storedItems) {
      setAllGadgets(JSON.parse(storedItems));
    } else {
      // যদি লোকাল স্টোরেজে কিছু না থাকে, তবে ডিফল্ট স্ট্যাটিক ৬টি প্রোডাক্ট সেট হবে
      localStorage.setItem("technest_gadgets", JSON.stringify(staticGadgets));
      setAllGadgets(staticGadgets);
    }
  }, []);

  // ক্যাটাগরি লিস্ট ডাইনামিকালি বের করার ট্রিক (এখন অল গ্যাজেটস স্টেট থেকে আসবে)
  const categories = useMemo(() => {
    return ["All", ...new Set(allGadgets.map((g) => g.category))];
  }, [allGadgets]);

  // সার্চ, ফিল্টার এবং সর্টিং লজিক এক সাথে রান করার অপ্টিমাইজড ওয়ে
  const filteredGadgets = useMemo(() => {
    let result = [...allGadgets];

    // ১. সার্চবার কন্ডিশন
    if (searchQuery.trim() !== "") {
      result = result.filter((g) =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // ২. ক্যাটাগরি ড্রপডাউন কন্ডিশন
    if (selectedCategory !== "All") {
      result = result.filter((g) => g.category === selectedCategory);
    }

    // ৩. সর্টিং কন্ডিশন
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, allGadgets]);

  return (
    <div className="bg-gray-950 min-h-screen py-12 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* পেজ হেডার */}
        <div className="text-center sm:text-left mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Our Tech Ecosystem
          </h1>
          <p className="mt-2 text-gray-400">
            Browse through our futuristic collection of elite gadgets and gear
            (State Verified).
          </p>
        </div>

        {/* ফিল্টার কন্ট্রোল প্যানেল */}
        <ItemFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
        />

        {/* গ্যাজেট প্রোডাক্ট গ্রিড */}
        {filteredGadgets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGadgets.map((gadget) => (
              <ItemCard key={gadget.id} gadget={gadget} />
            ))}
          </div>
        ) : (
          /* নো প্রোডাক্ট ফাউন্ড এম্পটি স্টেট */
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-2xl bg-gray-900/10">
            <p className="text-gray-400 text-lg font-medium">
              No gadgets match your search filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSortBy("default");
              }}
              className="mt-4 text-sm text-blue-500 hover:text-blue-400 underline font-semibold transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllItemsPage;
