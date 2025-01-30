"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

const images = [
  "/assets/shopping-image.jpg",
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundColor: "#ccc",
          boxShadow: "inset 100px 100px 100px 100px rgba(0,0,0,0)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 backdrop-blur-[3px]"></div>

        <div className="absolute z-50 my-[20px] px-[16px] py-[4px] w-[100%]">
          <Header />
        </div>

        <div className="absolute inset-0 flex items-center justify-start max-w-[1200px] mx-auto">
          <motion.div
            className="px-[16px] py-[16px] max-w-[780px] font-style"
            initial={{ opacity: 0, y: 120 }} // Start from bottom (y: 50)
            animate={{ opacity: 1, y: 0 }} // Animate to normal position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            <h2 className="text-[30px] sm:text-[36px] font-semibold">
              Welcome to <span className="text-[#DA0037] font-extrabold">NEXT</span> cart
            </h2>
            <p className="text-[16px] mt-[6px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              minus velit nisi omnis. Et quibusdam eos eius in sunt cum quis
              beatae dicta voluptas harum?
            </p>
            <div className="mt-[24px] text-[16px]">
              <a href="/products">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#DA0037] text-white font-semibold rounded-md hover:bg-primary-dark"
                >
                  Products
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

