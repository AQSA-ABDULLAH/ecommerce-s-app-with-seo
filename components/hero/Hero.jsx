"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";

const images = [
  "/assets/shopping-image.jpg", // Make sure this path is correct
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the background image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

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

        <div className="absolute z-50 my-[20px] px-[16px] py-[4px] w-[100%] font-style">
          <Header />
        </div>
        <div className="absolute inset-0 flex items-center justify-start text-[#EDEDED]">
          <div className="px-[99px] py-[16px] max-w-[780px] font-style">
            <h2 className="text-[36px] font-semibold">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
