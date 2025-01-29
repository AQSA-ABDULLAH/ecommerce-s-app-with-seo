"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import Header from "@/components/hero/Header";
import Footer from "@/components/footer/Footer";

const PRODUCTS_PER_PAGE = 10;

const Page = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
      );
      const data = await res.json();
      setProducts(data.products);
      setTotalProducts(data.total);
    };
    fetchProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <>
      <div className="py-[20px] px-[16px]">
        <div>
          <Header />
        </div>
        <section className="mx-[83px]">
          <div className="mt-[80px]">
            <a href="/">
              <button
                type="button"
                className="flex items-center gap-2 bg-[#0000005c] text-[14px] font-medium px-[12px] py-[6px] rounded-md"
              >
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
                    <path
                      fillRule="evenodd"
                      d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
                    ></path>
                  </svg>
                </span>
                Home
              </button>
            </a>
          </div>
          <div className="mt-[64px] px-[16px]">
            <h1 className="text-[36px] uppercase mb-[64px] text-center font-semibold">
              Available <span className="text-[#DA0037]">Items</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 ">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${products.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-[60px] space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
