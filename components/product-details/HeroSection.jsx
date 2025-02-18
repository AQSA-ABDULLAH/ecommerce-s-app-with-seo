import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Header from "../hero/Header";
import StarRating from "./Rating";

function HeroSection({ product }) {
  return (
    <div
      className="min-h-[500px] bg-contain relative bg-center bg-fixed"
      style={{
        backgroundImage: `url(${product.thumbnail})`, // Correctly set the background image
        backgroundColor: "#ccc",
        boxShadow: "inset 100px 100px 100px 100px rgba(0,0,0,0)",
      }}
    >
      <div className="w-full max-w-[1200px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8),rgba(218,0,55,0.569))] backdrop-blur-[8px]"></div>

        <div className="absolute z-50 inset-0 py-[20px]">
          <Header />
        </div>

        {/* Animated Section */}
        <motion.div
          className="absolute px-[16px] inset-0 flex flex-col gap-[16px] items-center text-center justify-center"
          initial={{ opacity: 0, scale: 0.6 }} // Start smaller and transparent
          animate={{ opacity: 1, scale: 1 }} // Zoom in effect
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
          <p className="text-[24px] sm:text-[30px] font-semibold">{product.title}</p>
          <StarRating />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;


