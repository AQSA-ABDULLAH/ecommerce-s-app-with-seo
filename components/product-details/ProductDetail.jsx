"use client"; // ✅ This is now a client component

import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Main from "./Main";
import Footer from "../footer/Footer";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        const productData = await res.json();
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      loadProductDetails();
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <HeroSection product={product} />
      <Main product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
0