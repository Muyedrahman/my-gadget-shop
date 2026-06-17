"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEnvelope, FaLock, FaGoogle, FaSpinner } from "react-icons/fa";

const LoginForm = () => {
  const { logIn, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await logIn(email, password);
      router.push("/");  
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

 
  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-900/40 border border-gray-800 p-8 rounded-3xl backdrop-blur-md shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Log in to access your TechNest account
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
      
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
            <FaEnvelope />
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

        
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 text-sm">
            <FaLock />
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-xl block pl-10 pr-4 py-3 border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
        </div>

       
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition shadow-lg shadow-blue-600/10 disabled:opacity-50"
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Sign In"}
        </button>
      </form>

    
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-800/80"></div>
        <span className="flex-shrink mx-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">
          Or
        </span>
        <div className="flex-grow border-t border-gray-800/80"></div>
      </div>

    
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 bg-gray-950 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white font-medium py-3 px-4 rounded-xl transition"
      >
        <FaGoogle className="text-sm text-red-400" />
        <span>Continue with Google</span>
      </button>

      <p className="mt-6 text-center text-xs text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-blue-500 hover:underline font-semibold"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
