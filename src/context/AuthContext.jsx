"use client"; // Next.js-এ Context এবং state ব্যবহারের জন্য এটি আবশ্যক

import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase"; // আপনার নতুন স্ট্রাকচার অনুযায়ী পাথ

// ১. গ্লোবাল পাইপলাইন (Context) তৈরি করলাম
const AuthContext = createContext({});

// ২. কাস্টম হুক (useAuth) তৈরি করলাম, যা দিয়ে অন্য ফাইলে সহজে ডেটা রিড করা যাবে
export const useAuth = () => useContext(AuthContext);

// ৩. আসল ডেটা প্রোভাইডার কম্পোনেন্ট (AuthContextProvider)
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ইউজারের লগইন স্টেট রাখার জন্য
  const [loading, setLoading] = useState(true); // ফায়ারবেস লোড হওয়া পর্যন্ত অপেক্ষা করতে

  // ফায়ারবেসের আসল ইউজার ট্র্যাক করার অবজারভার
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // কাস্টম সাইন-আপ ফাংশন
  const signUp = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    if (name) {
      await updateProfile(userCredential.user, { displayName: name });
    }
    return userCredential.user;
  };

  // কাস্টম লগইন ফাংশন
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // গুগল সাইন-ইন ফাংশন
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // লগআউট ফাংশন
  const logOut = () => {
    return signOut(auth);
  };

  // এখানে আমরা AuthContext-এর মাধ্যমে সব ডেটা নিচের চিলড্রেনদের পাঠিয়ে দিচ্ছি
  return (
    <AuthContext.Provider
      value={{ user, loading, signUp, logIn, loginWithGoogle, logOut }}
    >
      {loading ? (
        // অ্যাপ চালু হওয়ার সময় একটি মডার্ন ডার্ক লোডার স্ক্রিন
        <div className="flex h-screen items-center justify-center bg-gray-950 text-white font-medium">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400 tracking-wider">Loading TechNest...</p>
          </div>
        </div>
      ) : (
        children // লোডিং শেষ হলে আসল ওয়েবসাইট (Navbar, Footer, Pages) দেখাবে
      )}
    </AuthContext.Provider>
  );
};
