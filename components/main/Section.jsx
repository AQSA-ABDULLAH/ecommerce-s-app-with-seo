import React from "react";
import ProductDetails from "./ProductDetails";

function Section({ image, title, description, price, reverse }) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 mt-[56px] items-start text-[#EDEDED] font-sans ${
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
    </div>
  );
}

export default Section;
