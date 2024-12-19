"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem, clearCart } from "../Store/Cartslice"
import { useRouter } from "next/navigation";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Dispatch removeItem action
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity })); // Dispatch updateQuantity action
  };

  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch clearCart action to remove all items
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded-md mr-2"
                    onClick={() => handleRemoveItem(item.id)} // Handle item removal
                  >
                    Remove
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border border-gray-300 rounded-md"
                    min="1"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Clear All Items Button */}
      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handleClearCart}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear All Items
          </button>
          <button
            onClick={handleCheckout}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
