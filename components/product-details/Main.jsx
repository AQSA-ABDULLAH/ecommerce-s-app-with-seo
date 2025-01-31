"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Link from "next/link";
import PlayPauseButton from "./PlayButton";
import FullscreenButton from "./FullScreenButton";
import AddToCart from "../button/AddToCart";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux state

const Main = ({ product }) => {
  // Get the cart state from Redux and check if the product is already in the cart
  const cart = useSelector((state) => state.cart.cart) || [];
  const isInCart = cart.some((item) => item.title === product.title);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-[16px]">
      {/* Back Button */}
      <div className="mt-[48px]">
        <Link href="/products">
          <button className="flex items-center gap-2 bg-black/60 text-sm font-medium px-3 py-2 rounded-md">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"></path>
              </svg>
            </span>
            Back
          </button>
        </Link>
      </div>

      {/* Product Section */}
      <div className="px-[16px] my-[32px] grid gap-4 grid-cols-1 md:grid-cols-[1fr_2fr]">
        
        {/* Product Image with Scroll Animation */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} 
          viewport={{ once: true }} 
        >
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-80 h-80 object-cover rounded-lg"
            />
            <div className="flex justify-between">
              <PlayPauseButton />
              <FullscreenButton />
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <img
              src={product.thumbnail}
              alt="Thumbnail"
              className="h-[80px] object-contain border-[4px] border-[#337ab7]"
            />
          </div>
        </motion.div>

        {/* Product Info with Scroll Animation */}
        <motion.div
          className="sm:px-[32px] mt-6 md:mt-0"
          initial={{ opacity: 0, y: 90 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: true }} 
        >
          <h2 className="text-[36px] font-semibold">{product.title}</h2>
          <p className="text-[16px] mt-[8px]">{product.description}</p>

          {/* Tags */}
          <div className="mt-[16px] flex text-[#822727] text-[10px] uppercase font-bold">
            <span className="bg-[#FED7D7] px-[4px] mx-[8px] rounded-[0.5rem]">
              {product.category}
            </span>
            <span className="bg-[#FED7D7] px-[4px] mx-[8px] rounded-[0.5rem]">
              {product.brand}
            </span>
          </div>

          {/* Price & Stock */}
          <div className="mt-[16px] flex items-center justify-between">
            <p className="text-[30px] font-bold">
              ${" "}
              <span className="text-[#DA0037]">{product.price.toFixed(2)}</span>
            </p>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-[16px] flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
            <div className="sm:w-[30%]">
              <AddToCart product={product} isInCart={isInCart} />
            </div>
            <span
              className={`font-semibold uppercase ${
                product.stock > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              In Stock: {product.stock}
            </span>
          </div>

          {/* Rating */}
          <p className="mt-[16px] text-sm text-gray-500">
            Average ratings:{" "}
            <span className="text-green-500 font-medium">{product.rating}</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;




