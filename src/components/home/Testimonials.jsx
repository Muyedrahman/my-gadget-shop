"use client";

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "UI Designer",
    body: "The MacBook Pro I ordered arrived perfectly packaged. Excellent customer support!",
    stars: 5,
  },
  {
    name: "David Miller",
    role: "Full Stack Dev",
    body: "TechNest has become my go-to store for mechanical keyboards and desks accessories.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Loved by Builders
          </h2>
          <p className="text-gray-400 mt-2">
            See what our premium community members say about us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-gray-900/30 border border-gray-800 p-6 rounded-2xl relative flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-gray-800 text-3xl absolute top-4 right-4" />
              <div>
                <div className="flex gap-1 mb-3 text-amber-500">
                  {[...Array(rev.stars)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  "{rev.body}"
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-800/60">
                <h4 className="text-white text-sm font-bold">{rev.name}</h4>
                <p className="text-xs text-gray-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
