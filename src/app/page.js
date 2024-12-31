"use client";

import React from "react";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addToCart } from "./Store/Cartslice";
import { addToFavourites } from "./Store/Favouriteslice";
import products from "./products";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../app/styles/globals.css"

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToFavourites = (product) => {
    dispatch(addToFavourites(product));
    toast.success(`${product.name} added to favourites!`);
  };

  return (
    <div className="bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-40">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to KitCart
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-80">
            Your Ultimate Shopping Destination for the Best Deals and Fast Shipping.
          </p>
          <Link href="#products">
            <span className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
              Shop Now
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-between flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.category}</p>
                  <p className="text-xl font-bold text-gray-800">${product.price}</p>

                  {/* Buttons Section */}
                  <div className="mt-6 flex justify-between items-center space-x-4">
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-yellow-500 text-black p-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
                    >
                      <FaShoppingCart className="w-5 h-5" />
                    </button>

                    {/* Add to Favourites Button */}
                    <button
                      onClick={() => handleAddToFavourites(product)}
                      className="bg-pink-500 text-white p-3 rounded-full text-lg font-semibold hover:bg-pink-400 transition duration-300 transform hover:scale-105"
                    >
                      <FaHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
