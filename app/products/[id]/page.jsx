"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head"; // Import Next.js Head component
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

const generateMetadata = async (id) => {
  try {
    const product = await fetchProductDetails(id);
    const imageUrl = product.thumbnail || "https://via.placeholder.com/300";
    return {
      title: product.title || "Product Details",
      description: product.description || "View product details",
      keywords: `ecommerce, fake-store, next-ecommerce, ${product.category || "products"}`,
      openGraph: {
        title: product.title || "Product Details",
        type: "article",
        images: [imageUrl],
      },
      twitter: {
        title: product.title || "Product Details",
        description: product.description || "View product details",
        images: [imageUrl],
        card: "summary_large_image",
      },
    };
  } catch (error) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      keywords: "not found, error",
      openGraph: {
        title: "Product Not Found",
        type: "article",
        images: ["https://via.placeholder.com/300"],
      },
      twitter: {
        title: "Product Not Found",
        description: "The requested product could not be found.",
        images: ["https://via.placeholder.com/300"],
        card: "summary_large_image",
      },
    };
  }
};

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);

  // Unwrap params using React.use
  const { id } = React.use(params); // Correctly unwrapping `params`

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

  useEffect(() => {
    const setMetadata = async () => {
      if (id) {
        const metadata = await generateMetadata(id);
        // Update the page metadata dynamically using Next.js Head component
        document.title = metadata.title;
      }
    };

    setMetadata();
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

