// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Statistics from './Statistics';
import about from "../assets/about.webp";

export default function About() {
  // Use the `useInView` hook to trigger animations when elements come into view
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ x: -200, opacity: 0 }}
          animate={imageInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <img src={about} alt="About us" className="w-full h-auto rounded-lg " />
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={textRef}
          initial={{ x: 200, opacity: 0 }}
          animate={textInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="md:w-1/2 mx-8 mt-8 md:mt-0"
        >
          <h2 className="text-3xl mt-24 md:text-4xl font-bold mb-6 text-yellow-800 text-center">
            WHO ARE WE?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            We are pioneers in the adoption of solar energy for homes in Latin America. Today, we are the largest
            distributed generation company in Mexico for homes and businesses.
          </p>
          <div className="text-center mt-8">
            <a
              href="https://www.thinkbright.mx/cotizar"
              className="inline-block px-8 py-3 bg-yellow-600 text-white border border-yellow-700 rounded-lg shadow-md hover:bg-yellow-700 hover:border-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
            >
              More about Us
              <span className="ml-2">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <Statistics />
    </section>
  );
}
