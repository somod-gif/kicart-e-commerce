"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify() {
  const notify = () => toast("Wow so easy!");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        onClick={notify}
      >
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}
