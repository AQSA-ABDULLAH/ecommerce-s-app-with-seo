"use client";

import React from "react";
import Link from "next/link";
import PlayPauseButton from "./PlayButton";
import FullscreenButton from "./FullScreenButton";

const Main = ({ product }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-[16px]">
      {/* Back Button */}
      <div className="mt-[48px]">
        <Link href="/">
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
                <path d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"></path>
              </svg>
            </span>
            Back
          </button>
        </Link>
      </div>

      {/* Product Section */}
      <div className="px-[16px] my-[32px] grid gap-4 grid-cols-1 md:grid-cols-[1fr_2fr]">
        {/* Product Image */}
        <div className="flex flex-col items-center">
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
        </div>

        {/* Product Info */}
        <div className="px-[32px] mt-6 md:mt-0">
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
          <div className="mt-[16px] flex justify-between items-center">
            <button
              type="button"
              className="bg-[#DA0037] px-6 py-2 rounded-md flex items-center gap-2 hover:bg-primary-dark"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
              Add to Cart
            </button>
            <span
              className={`font-semibold uppercase ${
                product.stock > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              In Stock:{" "}
              {product.stock}
            </span>
          </div>

          {/* Rating */}
          <p className="mt-[16px] text-sm text-gray-500">
            Average ratings:{" "}
            <span className="text-green-500 font-medium">{product.rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
