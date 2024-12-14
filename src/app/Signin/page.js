"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../../../public/firebaseconfig"; // Adjust the path as necessary
import Link from "next/link"; // Import Link from next/link

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password } = formData;

    const auth = getAuth(firebaseApp);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      router.push("/dashboard"); // Redirect to the dashboard or desired page
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h1>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-400"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
          >
            Sign In with Google
          </button>
        </div>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-indigo-600 hover:text-indigo-800">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
