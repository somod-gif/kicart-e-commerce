"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Header = () => {
  const cartCount = useSelector((state) => state.cart?.items?.length || 0);
  const favouriteCount = useSelector((state) => state.favourites?.favourites?.length || 0);

  // State to toggle the dropdown menu
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">KitCart</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex justify-center space-x-6 flex-1">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/Contact" className="hover:text-gray-400">Contact Us</Link>
          <Link href="/About" className="hover:text-gray-400">About Us</Link>
        </nav>

        {/* Icons and Account Section */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <div className="relative">
            <Link href="/Cart">
              <FaShoppingCart className="w-6 h-6 text-white hover:text-yellow-500 transition duration-300" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Favourites Icon */}
          <div className="relative">
            <Link href="/Favourites">
              <FaHeart className="w-6 h-6 text-white hover:text-pink-500 transition duration-300" />
            </Link>
            {favouriteCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {favouriteCount}
              </span>
            )}
          </div>

          {/* Account Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
              className="flex items-center"
            >
              <FaUser className="w-6 h-6 text-white hover:text-blue-500 transition duration-300" />
            </button>
            {accountMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 w-40">
                <Link href="/Register" className="block px-4 py-2 hover:bg-gray-200">
                  Register
                </Link>
                <Link href="/Signin" className="block px-4 py-2 hover:bg-gray-200">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
