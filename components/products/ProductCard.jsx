import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cart/slice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addProduct = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-[#444444] rounded-[16px] text-[#FFFFFF] overflow-hidden font-style relative">
      {/* Image Wrapper */}
      <div className="h-[300px] relative">
        <img
          alt={product.title}
          src={product.thumbnail}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}

      <div className="mt-[24px] p-[16px]">
        <div >
          <div className="relative">
            <h2 className="text-[30px] line-clamp-1">{product.title}</h2>
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#444] to-transparent"></div>
          </div>

          <p className="pt-[8px] text-[16px] text-[#FFFFFF] line-clamp-2">
            {product.description}
          </p>
          <span className="text-[#DA0037] text-[16px] font-semibold cursor-pointer">
            read more
          </span>
          <p className="text-[24px] text-[#DA0037] font-bold">
            ${product.price}
          </p>

          {/* Add to Cart Button */}
          <div className="mt-[12px] pt-[16px]">
            <button
              type="button"
              onClick={addProduct}
              className="bg-[#DA0037] w-full px-6 py-2 rounded-md flex justify-center items-center gap-2 hover:bg-[#b0002c] transition-all duration-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                className="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
