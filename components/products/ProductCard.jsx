import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddToCart from "../button/AddToCart";

function ProductCard({ product }) {
  const cart = useSelector((state) => state.cart.cart) || [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Cart state updated:", cart);
    }
  }, [cart]);

  const isInCart = cart.some((item) => item.title === product.title);

  return (
    <div className="bg-[#444444] rounded-[16px] text-[#FFFFFF] overflow-hidden font-style relative">
      <div className="h-[300px] relative">
        <img alt={product.title} src={product.thumbnail} className="w-full h-full object-cover" />
      </div>

      <div className="mt-[24px] p-[16px]">
        <h2 className="text-[30px] line-clamp-1">{product.title}</h2>
        <p className="pt-[8px] text-[16px] text-[#FFFFFF] line-clamp-2">{product.description}</p>
        <span className="text-[#DA0037] text-[16px] font-semibold cursor-pointer">read more</span>
        <p className="text-[24px] text-[#DA0037] font-bold">${product.price}</p>

        <div className="mt-[12px] pt-[16px]">
          <AddToCart product={product} isInCart={isInCart} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;






