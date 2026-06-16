"use client";

import React from "react";
import Link from "next/link";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 lg:py-32 flex items-center justify-center border-b border-gray-900">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>
      <div className="absolute top-1/3 left-1/3 -z-10 h-[300px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 uppercase tracking-wider animate-pulse">
          Next-Gen Tech Hub
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Equip Your Digital Life with{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Futuristic Gadgets
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Welcome to TechNest. Discover premium gear, high-performance
          electronics, and cutting-edge accessories tailored for elite builders
          and tech enthusiasts.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/items"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaShoppingBag />
            <span>Explore All Gadgets</span>
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Learn More About Us</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
