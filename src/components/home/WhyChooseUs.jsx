"use client";

import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Worldwide Shipping",
    desc: "Fast, secured, and tracked global shipping straight to your doorstep.",
    icon: FaShippingFast,
  },
  {
    title: "Secured Warranty",
    desc: "100% authentic products with standard official brand warranty policy.",
    icon: FaShieldAlt,
  },
  {
    title: "24/7 Expert Support",
    desc: "Our tech support team is always ready to assist you anytime you need.",
    icon: FaHeadset,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-950 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Why TechNest?
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          We don't just sell electronics. We deliver unmatched tech experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-gray-900/20 border border-gray-900 p-8 rounded-2xl hover:bg-gray-950 transition-colors text-center"
              >
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
