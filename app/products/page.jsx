"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import Header from "@/components/hero/Header";
import Footer from "@/components/footer/Footer";
import PaginationControls from "@/components/pagination/PaginationControls";

const PRODUCTS_PER_PAGE = 10;

const Page = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <>
      <div className="py-5 px-4">
        <Header />

        <section className="mx-[83px]">
          <div className="mt-20">
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
                    <path d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"></path>
                  </svg>
                </span>
                Home
              </button>
            </Link>
          </div>

          <div className="mt-16 px-4">
            <h1 className="text-3xl uppercase mb-16 text-center font-semibold">
              Available <span className="text-[#DA0037]">Items</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            <PaginationControls
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalProducts={totalProducts}
              PRODUCTS_PER_PAGE={PRODUCTS_PER_PAGE}
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;

