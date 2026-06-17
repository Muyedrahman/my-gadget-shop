"use client";

import React, { useState, useMemo } from "react";
import { gadgets } from "@/lib/items";
import ItemCard from "@/components/items/ItemCard"; 
import ItemFilter from "@/components/items/ItemFilter";  

const AllItemsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  
  const categories = useMemo(() => {
    return ["All", ...new Set(gadgets.map((g) => g.category))];
  }, []);

 
  const filteredGadgets = useMemo(() => {
    let result = [...gadgets];

    
    if (searchQuery.trim() !== "") {
      result = result.filter((g) =>
        g.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    
    if (selectedCategory !== "All") {
      result = result.filter((g) => g.category === selectedCategory);
    }

     
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="bg-gray-950 min-h-screen py-12 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* পেজ হেডার */}
        <div className="text-center sm:text-left mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Our Tech Ecosystem
          </h1>
          <p className="mt-2 text-gray-400">
            Browse through our futuristic collection of elite gadgets and gear.
          </p>
        </div>

         
        <ItemFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
        />

        
        {filteredGadgets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGadgets.map((gadget) => (
              
              <ItemCard key={gadget.id} gadget={gadget} />
            ))}
          </div>
        ) : (
          
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
