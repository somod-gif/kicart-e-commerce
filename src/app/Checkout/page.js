"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { clearCart } from "../Store/Cartslice"; // Optional: To clear cart after payment

// Your Stripe publishable key here
const stripePromise = loadStripe("pk_test_51QXgvYEtMg7vGCKCN1v78TkbQVtWxj7IIPlzYmoi9V9ZdeD0biyYbmlgtKG0DtQzIDqZ8bz112zvo54iE9sujh5s00F9IqxJiU");

const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    // Calculate the total amount (in cents) for the order
    const amount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 100;

    // Create a Payment Intent (Client-side setup only)
    const createPaymentIntent = async () => {
      const stripe = await stripePromise;
      const response = await fetch("/api/stripe-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    };

    createPaymentIntent();
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const elements = useElements();
    const cardElement = elements.getElement(CardElement);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      alert(error.message); // Handle error
    } else if (paymentIntent.status === "succeeded") {
      alert("Payment successful!");
      dispatch(clearCart()); // Clear cart after successful payment (optional)
      router.push("/thank-you"); // Redirect to thank you page
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h1>

      {clientSecret ? (
        <Elements stripe={stripePromise}>
          <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
            {/* Order Summary */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">x{item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-gray-800">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mt-4 font-semibold text-gray-800">
              <p>Total</p>
              <p>
                $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>

            {/* Stripe Payment Form */}
            <form onSubmit={handleSubmit} className="mt-6">
              <CardElement className="mb-4 p-2 border border-gray-300 rounded-md" />
              <button
                type="submit"
                disabled={!stripe}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Pay Now
              </button>
            </form>
          </div>
        </Elements>
      ) : (
        <p className="text-center text-gray-600">Loading payment details...</p>
      )}
    </div>
  );
};

export default Checkout;
