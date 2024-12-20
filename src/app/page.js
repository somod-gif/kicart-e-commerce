"use client";

import React from "react";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addToCart } from "./Store/Cartslice";
import { addToFavourites } from "./Store/Favouriteslice";
import products from "./products";

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToFavourites = (product) => {
    dispatch(addToFavourites(product));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to KitCart, Your Ultimate Shopping Destination
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Discover the best products at unbeatable prices, and enjoy fast, reliable shipping with every order.
          </p>
          <Link href="#">
            <span className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
              Shop Now
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <p className="text-xl font-bold text-gray-800">${product.price}</p>

                {/* Add to Cart and Favourites buttons */}
                <div className="mt-6 space-x-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleAddToFavourites(product)}
                    className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-400 transition duration-300 transform hover:scale-105"
                  >
                    Add to Favourites
                  </button>
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
