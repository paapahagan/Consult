"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };
  return (
    <footer className="mt-auto bg-slate-500 text-white">
      <div className="footer container mx-auto w-ful p-10 bg-base-200 text-base-content flex justify-between">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              About Us
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Services
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              FAQ
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Our News
            </a>
          </nav>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Information</h3>
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Legal
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Terms of use
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Privacy policy
            </a>
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              FAQ
            </a>
          </nav>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Subscribe to newsletter</h3>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
              />
              <button
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Always be the first to know, sign up for our weekly newsletter!
          </p>
        </div>
      </div>
      <div className="footer flex justify-center footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
  );
}
