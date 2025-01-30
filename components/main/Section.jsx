"use client";
import React from "react";
import { motion } from "framer-motion";
import ProductDetails from "./ProductDetails";

function Section({ image, title, description, price, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 100 : -100 }} // Start position (off-screen)
      whileInView={{ opacity: 1, x: 0 }} // Animate when in view
      viewport={{ once: false, amount: 0.2 }} // Repeats animation every time section enters view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className={`flex flex-col lg:flex-row gap-8 mt-[56px] items-start text-[#EDEDED] font-style ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 flex-shrink-0">
        <img
          alt={title}
          src={image}
          className="w-full max-w-md rounded-[0.75rem]"
        />
      </div>

      {/* Content Section */}
      <ProductDetails title={title} description={description} price={price} />
    </motion.div>
  );
}

export default Section;


