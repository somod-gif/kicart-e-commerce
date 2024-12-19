"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Use Redux hooks
import { useRouter } from "next/navigation";
import productData from "../products";
import { addToCart } from "../Store/Cartslice";

const Dashboard = ({ userName }) => {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const categories = ["All", "Furniture", "Electronics", "Accessories"];

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      dispatch(addToCart(product)); // Dispatch addToCart action
    } else {
      alert("Out of stock!");
    }
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Welcome, {userName}!</h2>
        <div
          className="relative cursor-pointer"
          onClick={() => router.push("/Cart")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 text-gray-700 hover:text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.405 2M7 13h10l4-8H5.405M7 13L5.405 5M7 13l-2.595-5M17 13l2.595-5M17 13H7m10 6a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {totalCartItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {totalCartItems}
            </div>
          )}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Product Dashboard
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600">Price: ${product.price}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Category: {product.category}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Rating: ⭐ {product.rating}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Stock: <span className={product.stock > 0 ? "text-green-500" : "text-red-500"}>{product.stock > 0 ? `${product.stock} items` : "Out of stock"}</span>
                </p>
                <button
                  className={`mt-4 w-full py-2 rounded-md ${product.stock > 0 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
