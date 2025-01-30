"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

function Products() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products data from the API
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=3");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="py-[64px] px-[16px]">
        <h2 className="uppercase text-[#EDEDED] text-[36px] mb-[64px] text-center">
          available <span className="text-[#DA0037]">items</span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-[#EDEDED] text-center w-full">Loading...</p>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          type="button"
          className="bg-[#DA0037] flex gap-2 items-center px-4 py-2 rounded text-[#EDEDED]"
          onClick={() => router.push("/products")}
        >
          All Products
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Products;