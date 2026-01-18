"use client";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";

import { Menu, X, Code, BookOpen, Users, logOut, LogOut } from "lucide-react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token = Cookies.get("authToken");
  console.log(token);
  const handlelogOut = () => {
    Cookies.remove("authToken");
    window.location.href = "/login";
  };

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            <Link href={"/"} className="text-xl font-semibold text-gray-900">
              PathToCode
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            {token ? (
              <p title="LogOut">
                <LogOut
                  onClick={handlelogOut}
                  className="w-8 h-8 cursor-pointer text-black"
                />
              </p>
            ) : (
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4 px-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Header;
