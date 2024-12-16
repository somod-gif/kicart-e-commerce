"use client";

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../products";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State for cart items
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const categories = ["All", "Sofas", "Chairs", "Phones", "Watches", "Wireless"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add item to cart
    alert("Item added to cart"); // Show alert
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Product Dashboard
      </h1>

      {/* Search Input */}
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">Price: ${product.price}</p>
                <p className="text-sm text-gray-500">
                  Category: {product.category}
                </p>
                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  onClick={() => handleAddToCart(product)} // Handle Add to Cart
                >
                  Add to Cart
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
