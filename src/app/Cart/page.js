"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../Store/Cartslice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";  // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the necessary CSS for Toastify

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items || []); // Access 'items' from the cart

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart!");  // Toast notification for remove action
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity from being less than 1
    dispatch(updateQuantity({ id, quantity }));
    toast.info(`Quantity updated to ${quantity}`);  // Toast notification for quantity update
  };

  const handleIncrement = (id, quantity) => {
    const newQuantity = quantity + 1;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
    toast.info(`Quantity increased to ${newQuantity}`); // Toast for increment
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
      toast.info(`Quantity decreased to ${newQuantity}`); // Toast for decrement
    }
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.warning("All items cleared from cart!");  // Toast notification for clear cart action
  };

  // Calculate total price of the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2); // To keep the price to two decimal places

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>

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
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item.id, item.quantity)}
                      className="px-2 py-1 bg-gray-300 text-black rounded-md"
                    >
                      -
                    </button>
                    <p
                      
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border border-gray-300 rounded-md"
                      min="1"
                    />
                    <button
                      onClick={() => handleIncrement(item.id, item.quantity)}
                      className="px-2 py-1 bg-gray-300 text-black rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

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

      {/* Display total price */}
      {cartItems.length > 0 && (
        <div className="mt-4 text-center">
          <p className="text-xl font-semibold text-gray-800">Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
