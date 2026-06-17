"use client";

import React from "react";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";

const ItemCard = ({ gadget }) => {
  return (
    <div className="group bg-gray-900/30 border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700/80 transition-all duration-300 flex flex-col justify-between shadow-lg">
    
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
              {gadget.stock < 5 ? `Only ${gadget.stock} Left` : "In Stock"}
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
  );
};

export default ItemCard;
