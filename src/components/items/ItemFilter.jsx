"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

const ItemFilter = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
}) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 mb-8 flex flex-col lg:flex-row items-center justify-between gap-4 backdrop-blur-md">
 
      <div className="relative w-full lg:max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
          <FaSearch />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for premium gadgets..."
          className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
        />
      </div>
 
      <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3">
     
        <div className="relative w-full sm:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-gray-950 text-gray-300 text-sm rounded-xl block px-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        
        <div className="relative w-full sm:w-48">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-gray-950 text-gray-300 text-sm rounded-xl block px-4 py-3 border border-gray-800 focus:border-blue-500 outline-none transition appearance-none cursor-pointer"
          >
            <option value="default">Sort By: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ItemFilter;
