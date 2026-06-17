"use client";

import React from "react";
import Link from "next/link";
import { FaEye, FaArrowRight } from "react-icons/fa";

// মক ডাটা (পরবর্তীতে src/lib/items.js এর সাথে সিঙ্ক হবে 
const featuredGadgets = [
  {
    id: "1",
    name: "Apex Pro Mechanical Keyboard",
    price: 179,
    category: "Gaming Gear",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400",
  },
  {
    id: "2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 348,
    category: "Audio & Sound",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400",
  },
  {
    id: "3",
    name: 'MacBook Pro M3 Max - 16"',
    price: 2499,
    category: "Laptops & PCs",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-950 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Featured Gear
            </h2>
            <p className="text-gray-400 mt-2">
              Handpicked premium tech devices trending this week.
            </p>
          </div>
          <Link
            href="/items"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400 self-center sm:self-auto transition-all"
          >
            <span>View All Products</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGadgets.map((gadget) => (
            <div
              key={gadget.id}
              className="group bg-gray-900/30 border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                <img
                  src={gadget.image}
                  alt={gadget.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-gray-900/90 text-blue-400 font-medium text-xs px-2.5 py-1 rounded-md border border-gray-800">
                  {gadget.category}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {gadget.name}
                  </h3>
                  <p className="text-xl font-extrabold text-white mt-2">
                    ${gadget.price}
                  </p>
                </div>

                <Link
                  href={`/items/${gadget.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-medium py-2.5 rounded-xl text-sm transition-all"
                >
                  <FaEye className="text-xs" />
                  <span>View Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
