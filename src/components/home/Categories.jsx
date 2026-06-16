"use client";

import React from "react";
import { FaLaptop, FaMobileAlt, FaHeadphones, FaGamepad } from "react-icons/fa";

const categories = [
  {
    name: "Laptops & PCs",
    count: "24 Items",
    icon: FaLaptop,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Smartphones",
    count: "18 Items",
    icon: FaMobileAlt,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Audio & Sound",
    count: "32 Items",
    icon: FaHeadphones,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Gaming Gear",
    count: "15 Items",
    icon: FaGamepad,
    color: "from-emerald-500 to-teal-500",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-950 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Browse by Category
          </h2>
          <p className="text-gray-400 mt-2">
            Find exactly what you need through our curated tech segments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${cat.color}`}
                ></div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded-xl border border-gray-800 text-gray-400 group-hover:text-white transition-colors">
                    <Icon className="text-xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
