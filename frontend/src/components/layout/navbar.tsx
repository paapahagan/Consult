"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Land Consult
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/signup"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/signup"
                className="text-gray-900 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="text-gray-900 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
