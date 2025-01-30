"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/product-details/HeroSection";
import Main from "@/components/product-details/Main";
import Footer from "@/components/footer/Footer";

async function fetchProductDetails(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
}

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  
  // Use React.use() to unwrap the params object before accessing id
  const { id } = React.use(params);  // Using React.use() to unwrap params
  
  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const productData = await fetchProductDetails(id);
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
      {/* Pass the product data as a prop to HeroSection */}
      <HeroSection product={product} />
      <Main product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetail;