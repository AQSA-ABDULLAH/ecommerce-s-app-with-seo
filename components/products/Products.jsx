import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="bg-[#171717]">
      <div className="py-[64px] px-[16px]">
        <h2 className="uppercase text-[#EDEDED] text-[36px] mb-[64px] text-center">
          available <span className="text-[#DA0037]">items</span>
        </h2>
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="w-full flex justify-center">
          <button type="button" className="bg-[#DA0037] flex">
            All Products
            <span className="chakra-button__icon css-1hzyiq5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
    </div>
  );
}

export default Products;
