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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>

                  {/* Displaying quantity */}
                  <span className="w-16 text-center font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handleClearCart}
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition duration-300"
          >
            Clear All Items
          </button>

          <div className="text-xl font-semibold text-gray-800">
            <p>Total Price: ${totalPrice}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
