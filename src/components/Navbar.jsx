"use client"; // ইন্টারঅ্যাক্টিভিটি (Dropdown, Mobile Menu) এর জন্য এটি আবশ্যক

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; // আমাদের বানানো Auth Context
import { FaBars, FaTimes, FaUserCircle, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth(); // গ্লোবাল স্টেট থেকে ইউজার এবং লগআউট ফাংশন নিলাম
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনুর স্টেট
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // প্রোফাইল ড্রপডাউনের স্টেট

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // ৪+ কমন রুটস বা লিংকসমূহ
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/items" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 text-white shadow-md backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ১. লোগো সেকশন */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-blue-500 hover:text-blue-400 transition"
            >
              <FaLaptopCode className="text-2xl" />
              <span>TechNest</span>
            </Link>
          </div>

          {/* ২. ডেক্সটপ মেনু লিংকসমূহ */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ৩. অথেনটিকেশন / প্রোফাইল ড্রপডাউন (ডেক্সটপ) */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              // লগইন করা থাকলে এই ড্রপডাউনটি দেখাবে
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 bg-gray-850 p-2 rounded-full border border-gray-700 hover:border-blue-500 focus:outline-none transition"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="profile"
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="text-xl text-gray-400" />
                  )}
                  <span className="text-sm max-w-[100px] truncate">
                    {user.displayName || user.email}
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-700 font-semibold truncate">
                      {user.email}
                    </div>
                    <Link
                      href="/items/add"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Add Product
                    </Link>
                    <Link
                      href="/items/manage"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Manage Products
                    </Link>
                    <button
                      onClick={() => {
                        logOut();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left block px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // লগইন না করা থাকলে এই বাটনগুলো দেখাবে
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition shadow-md"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* ৪. মোবাইল হ্যামবার্গার বাটন */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ৫. রেসপনসিভ মোবাইল মেনু লেআউট */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* মোবাইল প্রোফাইল বা লগইন লিঙ্ক */}
            <div className="border-t border-gray-800 mt-4 pt-4">
              {user ? (
                <>
                  <div className="px-3 py-2 text-sm font-semibold text-blue-400 truncate">
                    {user.email}
                  </div>
                  <Link
                    href="/items/add"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:bg-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:bg-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => {
                      logOut();
                      setIsOpen(false);
                    }}
                    className="w-full text-left text-red-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 p-2">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-center text-gray-300 border border-gray-700 hover:bg-gray-800 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-base font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
