"use client"; // Next.js App Router-এ Context ব্যবহারের জন্য এটি অবশ্যই দিতে হবে

import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase"; // আমাদের বানানো ফায়ারবেস ফাইল

// ১. কনটেক্সট তৈরি করলাম
const AuthContext = createContext({});

// ২. কাস্টম হুক এক্সপোর্ট (যা ন্যাভবার খুঁজছে এবং এরর দিচ্ছে)
export const useAuth = () => useContext(AuthContext);

// ৩. প্রোভাইডার কম্পোনেন্ট যা পুরো অ্যাপকে মুড়িয়ে রাখবে
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ফায়ারবেস ইউজার অবজার্ভার (লগইন স্টেট চেঞ্জ ট্র্যাক করে)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // সাইন-আপ ফাংশন
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // লগইন ফাংশন
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // গুগল লগইন ফাংশন
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // লগ-আউট ফাংশন
  const logOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signUp, logIn, loginWithGoogle, logOut }}
    >
      {loading ? (
        // অ্যাপ লোড হওয়ার সময় ব্যাকগ্রাউন্ডে একটি সুন্দর মডার্ন লোডার দেখাবে
        <div className="flex h-screen items-center justify-center bg-gray-950 text-white font-semibold">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400 tracking-wider">Loading TechNest...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
