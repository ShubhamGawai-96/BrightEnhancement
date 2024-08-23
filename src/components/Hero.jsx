import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: "solar-1",
      header: "Welcome to Think Bright",
      subheader: "Bringing your ideas to life",
    },
    {
      image: "solar-2",
      header: "Innovate with Us",
      subheader: "Shaping the future together",
    },
    {
      image: "solar-6",
      header: "Your Vision, Our Mission",
      subheader: "Turning dreams into reality",
    },
    {
      image: "solar-4",
      header: "Explore the Possibilities",
      subheader: "Endless opportunities await",
    },
    {
      image: "solar-5",
      header: "Harness the Power of Technology",
      subheader: "Leading the way in innovation",
    },
    {
      image: "solar-6",
      header: "Think Bright, Act Bright",
      subheader: "Empowering your ideas",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.4,
      scale: 1.2, // Start with zoomed-in state for all slides
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { scale: { duration: 5, ease: "linear" } }, // Continuous zoom-out effect
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.6,
      scale: 1.2,
    }),
  };

  const textVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "50%" : "-50%",
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-50%" : "50%",
      opacity: 0,
    }),
  };

  const transition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="absolute w-full h-full"
            style={{
              backgroundImage: `url(/assets/${slides[currentIndex].image}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)", // Apply a slight darkening filter to improve text readability
            }}
          ></motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent text-yellow-500 hover:text-yellow-300 p-2 z-10"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-transparent text-yellow-500 hover:text-yellow-300 p-2 z-10"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="relative z-10 text-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-100">
              {slides[currentIndex].header}
            </h2>
            <p className="text-xl md:text-2xl mt-4 text-yellow-200">
              {slides[currentIndex].subheader}
            </p>
          </motion.div>
        </AnimatePresence>
        <a
          href="https://www.thinkbright.mx/cotizar"
          className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
