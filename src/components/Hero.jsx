import React, { useRef, useState, useEffect } from "react";
import { assets } from "../assets/assest";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const images = [
  { src: assets.image1, alt: "Delicious food 1", category: "Popular" },
  { src: assets.image2, alt: "Delicious food 2", category: "Trending" },
  { src: assets.image3, alt: "Delicious food 3", category: "New" },
  { src: assets.image4, alt: "Delicious food 4", category: "Featured" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-rotate logic
  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000); // Increased duration for better visibility
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, paused]);

  // Manual navigation
  const goTo = (idx) => setCurrent(idx);

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[85vh] md:min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-white relative overflow-hidden"
    >
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 min-h-[85vh] md:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-8">
        {/* Left Content */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left flex flex-col justify-center md:justify-start md:pt-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-700 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-400">
              Vingets Soda Company
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
              Refreshment Delivered To You
            </span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-xl text-red-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Enjoy the coolest sodas and fizzy drinks from your favorite Soda Shop. 
            <span className="hidden sm:inline"> Fast delivery, exclusive flavors, and refreshment you'll love.</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <NavLink to="/items" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Order Now</span>
                <span className="text-xl">→</span>
              </motion.button>
            </NavLink>
            <NavLink to="/trending" className="w-full sm:w-auto">
              <motion.button 
                className="w-full sm:w-auto bg-white text-red-500 font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out border-2 border-yellow-500 hover:bg-yellow-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View trending
              </motion.button>
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Right: Image Carousel */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="relative max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-2xl bg-white"
              >
                <motion.img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="w-full h-[240px] sm:h-[340px] md:h-[400px] object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-semibold shadow-lg">
                  {images[current].category}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    current === idx 
                      ? "bg-gradient-to-r from-red-500 to-yellow-500 scale-125" 
                      : "bg-gray-300"
                  }`}
                  onClick={() => goTo(idx)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </motion.header>
  );
};

export default Hero;
