"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic (e.g., email or API call)
    alert("Form submitted!");
  };

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            We're here to help. Reach out to us for any questions or support.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaWhatsapp size={40} className="text-green-500" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-blue-600">WhatsApp</h3>
                  <p className="text-lg text-gray-700">
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +1234567890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Gmail */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaEnvelope size={40} className="text-red-500" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-blue-600">Gmail</h3>
                  <p className="text-lg text-gray-700">
                    <a
                      href="mailto:support@example.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      support@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Call */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt size={40} className="text-blue-500" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-blue-600">Phone</h3>
                  <p className="text-lg text-gray-700">
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +123-456-7890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-blue-600">Follow Us</h3>
                <div className="flex space-x-6 mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebookF size={30} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaTwitter size={30} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaInstagram size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-4 text-lg"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-100 border border-gray-300 rounded-md p-4 text-lg"
                    required
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-lg font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-300 rounded-md p-4 text-lg"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-100 border border-gray-300 rounded-md p-4 text-lg"
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8 text-center">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* Replace the src with your actual Google Maps embed iframe link */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243615.36471393188!2d-74.00601575845663!3d40.71277577711052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjA0YjYwYzYxOjo5ZDZlMzBkODow!5e0!3m2!1sen!2sus!4v1668834735985!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
