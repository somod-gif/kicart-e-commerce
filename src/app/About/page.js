import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            At KitCart, we bring you the best shopping experience by offering
            premium quality products and customer service. We are committed to
            helping you find exactly what you need for all your shopping needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is simple: to provide top-quality products at the best
              prices while ensuring a smooth and secure shopping experience.
              Whether you're looking for everyday essentials or unique finds, we
              have something for everyone.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/path-to-your-image.jpg" // Replace with an actual image path
              alt="About KitCart"
              className="rounded-xl shadow-lg w-80 h-80 object-cover"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 text-blue-500 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 9l3 3-3 3M8 4h8m-8 16h8"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Quality Products</h3>
              <p className="text-gray-600 text-center mt-2">
                We offer only the best, carefully sourced products that meet
                your highest standards.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 text-green-500 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Fast Shipping</h3>
              <p className="text-gray-600 text-center mt-2">
                Get your orders delivered swiftly and reliably with our fast
                shipping service.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 text-yellow-500 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2 2 4-4M6 18l6-6"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
              <p className="text-gray-600 text-center mt-2">
                Our customer service team is always ready to assist you with
                any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
