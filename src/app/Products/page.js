"use client";

import React from "react";


const ProductsPage = ({ product }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-500 text-sm">Category: {product.category}</p>
          <p className="text-gray-700 mt-4">Price: ${product.price}</p>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
