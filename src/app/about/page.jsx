import React from "react";
import Link from "next/link";
import {
  FaRocket,
  FaShieldAlt,
  FaUserCheck,
  FaCode,
  FaServer,
  FaPaintBrush,
} from "react-icons/fa";

export const metadata = {
  title: "About Us | TechNest",
  description:
    "Learn more about TechNest, our mission, core values, and the cutting-edge tech stack driving our futuristic ecosystem.",
};

const AboutPage = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-16 text-gray-100 relative overflow-hidden">
    
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Our Identity
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Hub For Next-Gen Tech Pioneers
          </h1>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Welcome to{" "}
            <span className="text-blue-400 font-semibold">TechNest</span>, a
            conceptual ecosystem crafted to deliver state-of-the-art premium
            gadgets with unmatched performance. We bridge the gap between
            high-end computational power and ultimate consumer convenience.
          </p>
        </div>

         
        <div className="mb-24">
          <div className="text-center sm:text-left mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Core Pillars of TechNest
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              The values that anchor our innovation pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gray-900/30 border border-gray-900 p-6 sm:p-8 rounded-2xl backdrop-blur-md hover:border-gray-800 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-xl mb-5">
                <FaRocket />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Curated Innovation
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We don't just list products; we carefully curate elite tier
                hardware—ranging from custom M3 Max MacBooks to ultra-fast
                mechanical gaming matrices.
              </p>
            </div>

           
            <div className="bg-gray-900/30 border border-gray-900 p-6 sm:p-8 rounded-2xl backdrop-blur-md hover:border-gray-800 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-xl mb-5">
                <FaShieldAlt />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Uncompromised Security
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                By enforcing industry-grade protective route mechanisms and
                authorization guards, your active sessions and purchase data
                remain impenetrable.
              </p>
            </div>

          
            <div className="bg-gray-900/30 border border-gray-900 p-6 sm:p-8 rounded-2xl backdrop-blur-md hover:border-gray-800 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-xl mb-5">
                <FaUserCheck />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Developer Integrity
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Built as a specialized full-stack implementation, this platform
                respects optimal system parameters, giving you ultra-fast
                runtime metrics.
              </p>
            </div>
          </div>
        </div>
 
        <div className="bg-gray-900/20 border border-gray-900 rounded-3xl p-6 sm:p-10 mb-20 backdrop-blur-md">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The Tech Stack Driving TechNest
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              A showcase of modern web engineering and optimization paradigms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        
            <div className="p-5 border border-gray-900/60 rounded-xl bg-gray-950/40">
              <FaCode className="text-blue-500 text-2xl mx-auto mb-3" />
              <h4 className="text-white font-semibold text-sm">
                Next.js 15+ & React 19
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Utilizing advanced dynamic routing, async parameters, and
                optimized bundle sizes.
              </p>
            </div>

           
            <div className="p-5 border border-gray-900/60 rounded-xl bg-gray-950/40">
              <FaServer className="text-blue-500 text-2xl mx-auto mb-3" />
              <h4 className="text-white font-semibold text-sm">
                Firebase Ecosystem
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Powering core authentication pipelines with secure session
                persistence state grids.
              </p>
            </div>

             
            <div className="p-5 border border-gray-900/60 rounded-xl bg-gray-950/40">
              <FaPaintBrush className="text-blue-500 text-2xl mx-auto mb-3" />
              <h4 className="text-white font-semibold text-sm">
                Tailwind CSS v4
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Featuring high-end fluid layout utilities, responsive grids, and
                subtle dark theme aesthetics.
              </p>
            </div>
          </div>
        </div>

 
        <div className="border border-dashed border-gray-800 rounded-2xl p-8 text-center bg-gray-900/10">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to Upgrade Your Tech Ecosystem?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Dive into our live product marketplace to find the ultimate gear
            tailored specifically for your workflow.
          </p>
          <Link
            href="/items"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/10"
          >
            Explore All Gadgets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
