// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-800">Contact Us</h2>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
