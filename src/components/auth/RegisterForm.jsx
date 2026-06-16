"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";

const RegisterForm = () => {
  const { signUp } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // name প্যারামিটারটি আমাদের AuthContext-এর signUp ফাংশনে পাঠানো হচ্ছে
      await signUp(email, password, name);
      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-900/40 border border-gray-800 p-8 rounded-3xl backdrop-blur-md shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          Create Account
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Join TechNest community ecosystem today
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* নাম ইনপুট */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
            <FaUser />
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* ইমেইল ইনপুট */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
            <FaEnvelope />
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* পাসওয়ার্ড ইনপুট */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
            <FaLock />
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create secure password"
            className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* সাবমিট বাটন */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition shadow-lg shadow-blue-600/10 disabled:opacity-50"
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Sign Up"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-500 hover:underline font-semibold"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
