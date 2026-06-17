"use client";

import React from "react";
import Link from "next/link";
import { gadgets } from "@/lib/items";
import {
  FaArrowLeft,
  FaStar,
  FaBoxOpen,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const GadgetDetailsPage = ({ params }) => {
   
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;

  
  const gadget = gadgets.find((g) => g.id === id);

 
  if (!gadget) {
    return (
      <div className="bg-gray-950 min-h-screen flex items-center justify-center text-gray-100 px-4">
        <div className="text-center bg-gray-900 border border-gray-800 p-8 rounded-2xl max-w-md shadow-xl">
          <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4 animate-bounce" />
          <h1 className="text-2xl font-bold text-white">Gadget Not Found</h1>
          <p className="mt-2 text-gray-400 text-sm">
            The premium gadget you are looking for does not exist in our
            ecosystem or may have been removed.
          </p>
          <Link
            href="/items"
            className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to All Gadgets</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen py-12 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="mb-8">
          <Link
            href="/items"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-blue-500 transition-colors group"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Collection</span>
          </Link>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-900/20 border border-gray-900 p-6 sm:p-10 rounded-3xl backdrop-blur-md">
          
          <div className="relative aspect-video lg:aspect-square w-full overflow-hidden rounded-2xl bg-gray-950 border border-gray-800 flex items-center justify-center">
            <img
              src={gadget.image}
              alt={gadget.name}
              className="object-cover w-full h-full opacity-95 transition-opacity hover:opacity-100 duration-300"
            />
            <div className="absolute top-4 left-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {gadget.category}
            </div>
          </div>

          
          <div className="flex flex-col justify-between">
            <div>
               
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {gadget.name}
                </h1>
                <div className="flex items-center gap-1.5 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-xl text-amber-500 font-bold text-sm w-fit shrink-0">
                  <FaStar />
                  <span>{gadget.rating} / 5.0</span>
                </div>
              </div>

        
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-black text-white">
                  ${gadget.price}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md ${
                    gadget.stock < 5
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  }`}
                >
                  <FaBoxOpen className="text-xs" />
                  {gadget.stock < 5
                    ? `Urgent: Only ${gadget.stock} Left`
                    : "In Stock & Ready"}
                </span>
              </div>

              <hr className="border-gray-900 my-6" />

              
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Overview
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {gadget.description}
                </p>
              </div>

             
              <div className="mt-8 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Specifications
                </h3>
                <div className="border border-gray-900 rounded-xl overflow-hidden bg-gray-950/50">
                  <div className="flex border-b border-gray-900 p-3 text-xs sm:text-sm">
                    <span className="w-1/3 text-gray-500 font-medium">
                      Model ID
                    </span>
                    <span className="w-2/3 text-gray-300 font-semibold">
                      TN-{gadget.id}09X
                    </span>
                  </div>
                  <div className="flex border-b border-gray-900 p-3 text-xs sm:text-sm">
                    <span className="w-1/3 text-gray-500 font-medium">
                      Category
                    </span>
                    <span className="w-2/3 text-gray-300 font-semibold">
                      {gadget.category}
                    </span>
                  </div>
                  <div className="flex p-3 text-xs sm:text-sm">
                    <span className="w-1/3 text-gray-500 font-medium">
                      Warranty
                    </span>
                    <span className="w-2/3 text-gray-300 font-semibold">
                      2 Years Global Official
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-blue-600/10 hover:-translate-y-0.5 active:translate-y-0">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-950 hover:bg-gray-900 border border-gray-800 text-gray-300 hover:text-white font-semibold py-4 px-6 rounded-xl transition hover:-translate-y-0.5 active:translate-y-0">
                Buy It Now
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-gray-900/10 border border-gray-950 p-4 rounded-xl text-xs text-gray-400">
            <FaCheckCircle className="text-blue-500 text-lg shrink-0" />
            <span>Secure payment checkout with SSL encryption.</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/10 border border-gray-950 p-4 rounded-xl text-xs text-gray-400">
            <FaCheckCircle className="text-blue-500 text-lg shrink-0" />
            <span>100% genuine products directly from official brands.</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/10 border border-gray-950 p-4 rounded-xl text-xs text-gray-400">
            <FaCheckCircle className="text-blue-500 text-lg shrink-0" />
            <span>7-day instant replacement if any defect is found.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetailsPage;
