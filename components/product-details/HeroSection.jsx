import React from "react";
import Header from "../hero/Header";
import StarRating from "./Rating";

function HeroSection({ product }) {
  return (
    <div>
      <div
        className="min-h-[500px] bg-contain relative bg-center bg-fixed"
        style={{
          backgroundImage: `url(${product.thumbnail})`, // Correctly set the background image
          backgroundColor: "#ccc",
          boxShadow: "inset 100px 100px 100px 100px rgba(0,0,0,0)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8),rgba(218,0,55,0.569))] backdrop-blur-[8px]"></div>

        <div className="absolute inset-0 py-[20px]">
          <Header />
        </div>
        <div className="absolute inset-0 flex flex-col gap-[16px] items-center justify-center">
          <p className="text-[30px] font-semibold">{product.title}</p>{" "}
          <StarRating />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
