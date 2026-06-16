"use client";

import React from "react";
import Link from "next/link";
import { FaLaptopCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ব্র্যান্ড ইনফো */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-blue-500 hover:text-blue-400 transition"
            >
              <FaLaptopCode className="text-2xl" />
              <span className="text-white">TechNest</span>
            </Link>
            <p className="max-w-sm text-gray-400 leading-relaxed">
              Your ultimate destination for premium gadgets, futuristic tech
              gear, and high-performance electronics. Build your tech oasis with
              TechNest.
            </p>
          </div>

          {/* কুইক লিংকস */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/items"
                  className="hover:text-blue-500 transition-colors"
                >
                  Browse Gadgets
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-500 transition-colors"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* সোশ্যাল মিডিয়া ও কন্টাক্ট */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="hover:text-blue-500 transition-colors text-lg"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors text-lg"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors text-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Support: support@technest.com
            </p>
          </div>
        </div>

        {/* নিচের কপিরাইট সেকশন */}
        <div className="border-t border-gray-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} TechNest. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
