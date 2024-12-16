"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">KitCart</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-6 flex-1">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {/* <Link href="/Shop" className="hover:text-gray-400">Shop</Link> */}
          {/* <Link href="/Cart" className="hover:text-gray-400">Cart</Link> */}
          <Link href="/Contact" className="hover:text-gray-400">Contact Us</Link>
          <Link href="/About" className="hover:text-gray-400">About Us</Link>
        </nav>

        {/* Account (Desktop) */}
        <div className="relative ml-auto hidden md:block">
          <button onClick={toggleAccountDropdown} className="flex items-center space-x-2 hover:text-gray-400">
            <span>Account</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isAccountDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg">
              <Link href="/Register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
              <Link href="/Signin" className="block px-4 py-2 hover:bg-gray-100">Sign In</Link>
              <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMobileMenu} className="md:hidden hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <nav className="space-y-2 px-4">
            <Link href="/" className="block hover:text-gray-400">Home</Link>
            {/* <Link href="/Shop" className="block hover:text-gray-400">Shop</Link> */}
            <Link href="/About" className="block hover:text-gray-400">About Us</Link>
            {/* <Link href="/Cart" className="block hover:text-gray-400">Cart</Link> */}
            <Link href="/Contact" className="block hover:text-gray-400">Contact Us</Link>

            {/* Account in Mobile Menu */}
            <div className="relative">
              <button onClick={toggleAccountDropdown} className="w-full text-left hover:text-gray-400 flex items-center space-x-2">
                <span>Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAccountDropdownOpen && (
                <div className="mt-2 w-full bg-white text-gray-800 rounded-lg shadow-lg">
                  <Link href="/Register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
                  <Link href="/Signin" className="block px-4 py-2 hover:bg-gray-100">Sign In</Link>
                  <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
