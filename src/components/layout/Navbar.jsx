"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaLaptopCode,
  FaPlus,
  FaTasks,
  FaSignOutAlt,
  FaInfoCircle,
  FaHome,
  FaMobileAlt,
} from "react-icons/fa";

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

 
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "All Gadgets", path: "/items", icon: <FaMobileAlt /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 border-b border-gray-800 text-white shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
       
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-blue-500 hover:text-blue-400 transition"
            >
              <FaLaptopCode className="text-2xl" />
              <span>TechNest</span>
            </Link>
          </div>

          
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

         
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 bg-gray-800/80 p-2 rounded-full border border-gray-700 hover:border-blue-500 focus:outline-none transition animate-fade-in"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="profile"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-xl text-gray-400" />
                  )}
                  <span className="text-sm max-w-[100px] truncate pr-1">
                    {user.displayName || user.email.split("@")[0]}
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-2 z-50 border-t-2 border-t-blue-500">
                    <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-800 font-semibold truncate mb-1">
                      {user.email}
                    </div>
                    <Link
                      href="/items/add"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    >
                      <FaPlus className="text-xs" />
                      <span>Add Gadget</span>
                    </Link>
                    <Link
                      href="/items/manage"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    >
                      <FaTasks className="text-xs" />
                      <span>Manage Gadgets</span>
                    </Link>
                    <div className="border-t border-gray-800 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-950/30 font-medium transition-colors"
                    >
                      <FaSignOutAlt className="text-xs" />
                      <span>Logout</span>
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

   
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-gray-350 hover:bg-gray-900 hover:text-blue-500 block px-3 py-2.5 rounded-xl text-base font-medium transition"
              >
                <span className="text-gray-500">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}

            <div className="border-t border-gray-900 mt-4 pt-4">
              {user ? (
                <>
                   
                  <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Manager Account
                  </div>
                  <div className="px-3 pb-3 text-sm font-semibold text-blue-400 truncate mb-2">
                    {user.email}
                  </div>

                 
                  <Link
                    href="/items/add"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-gray-350 hover:bg-gray-900 hover:text-blue-400 block px-3 py-2.5 rounded-xl text-base font-medium transition"
                  >
                    <FaPlus className="text-gray-500 text-sm" />
                    <span>Add Gadget</span>
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-gray-350 hover:bg-gray-900 hover:text-blue-400 block px-3 py-2.5 rounded-xl text-base font-medium transition"
                  >
                    <FaTasks className="text-gray-500 text-sm" />
                    <span>Manage Gadgets</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 text-left text-red-400 hover:bg-red-950/20 block px-3 py-2.5 rounded-xl text-base font-medium transition"
                  >
                    <FaSignOutAlt className="text-red-500/70 text-sm" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 p-2">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-center text-gray-300 border border-gray-800 hover:bg-gray-900 py-2.5 rounded-xl text-base font-medium transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-base font-medium transition shadow-lg"
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
