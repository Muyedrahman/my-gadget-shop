"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { FaBars, FaTimes, FaUserCircle, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsDropdownOpen(false);
      setIsOpen(false);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // আপনার নতুন ফাইনাল স্ট্রাকচার অনুযায়ী পাথ ম্যাপ করা হয়েছে
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Gadgets", path: "/items" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 border-b border-gray-800 text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* লোগো */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-blue-500 hover:text-blue-400 transition"
            >
              <FaLaptopCode className="text-2xl" />
              <span>TechNest</span>
            </Link>
          </div>

          {/* ডেক্সটপ মেনু লিংক */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-gray-350 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ডেক্সটপ প্রোফাইল ড্রপডাউন / অথেনটিকেশন */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 bg-gray-800/80 p-2 rounded-full border border-gray-700 hover:border-blue-500 focus:outline-none transition"
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
                    {user.displayName || user.email.split("@")[0]}
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50 animate-fade-in">
                    <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-700 font-semibold truncate">
                      {user.email}
                    </div>
                    <Link
                      href="/items/add"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Add Gadget
                    </Link>
                    <Link
                      href="/items/manage"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Manage Gadgets
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-sm text-red-400 hover:bg-gray-700 font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white text-sm font-medium transition"
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

          {/* মোবাইল হ্যামবার্গার মেনু বাটন */}
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

      {/* মোবাইল রেসপনসিভ মেনু */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 transition">
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
                    Add Gadget
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:bg-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Manage Gadgets
                  </Link>
                  <button
                    onClick={handleLogout}
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
