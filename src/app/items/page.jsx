"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { gadgets } from "@/lib/items";
import { FaSearch, FaSlidersH, FaEye, FaStar } from "react-icons/fa";

const AllItemsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // ক্যাটাগরি লিস্ট ডাইনামিকালি বের করার ট্রিক
  const categories = useMemo(() => {
    return ["All", ...new Set(gadgets.map((g) => g.category))];
  }, []);

  // সার্চ, ফিল্টার এবং সর্টিং লজিক এক সাথে রান করার অপ্টিমাইজড ওয়ে
  const filteredGadgets = useMemo(() => {
    let result = [...gadgets];

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

        {/* ফিল্টার কন্ট্রোল প্যানেল (ইন্ডাস্ট্রি লেভেল ডিজাইন) */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 mb-8 flex flex-col lg:flex-row items-center justify-between gap-4 backdrop-blur-md">
          {/* সার্চ ইনপুট */}
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

          {/* ফিল্টার এবং সর্ট অপশনসমূহ */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3">
            {/* ক্যাটাগরি ফিল্টার */}
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

            {/* সর্ট ফিল্টার */}
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

        {/* গ্যাজেট প্রোডাক্ট গ্রিড */}
        {filteredGadgets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGadgets.map((gadget) => (
              <div
                key={gadget.id}
                className="group bg-gray-900/30 border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700/80 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* ইমেজ কন্টেইনার */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                  <img
                    src={gadget.image}
                    alt={gadget.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/90 text-blue-400 font-semibold text-xs px-2.5 py-1 rounded-md border border-gray-800 tracking-wide">
                    {gadget.category}
                  </div>
                </div>

                {/* কন্টেন্ট বডি */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
                        {gadget.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold shrink-0">
                        <FaStar />
                        <span>{gadget.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed mb-4">
                      {gadget.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-extrabold text-white">
                        ${gadget.price}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${gadget.stock < 5 ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-gray-800 text-gray-400"}`}
                      >
                        {gadget.stock < 5
                          ? `Only ${gadget.stock} Left`
                          : "In Stock"}
                      </span>
                    </div>

                    <Link
                      href={`/items/${gadget.id}`}
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 hover:border-blue-600 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 font-medium py-3 rounded-xl text-sm transition-all shadow-sm"
                    >
                      <FaEye className="text-xs" />
                      <span>View Specifications</span>
                    </Link>
                  </div>
                </div>
              </div>
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
