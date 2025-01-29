import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/lib/features/cart/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart) || []; // Ensure it's always an array

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Cart state updated:", cart);
    }
  }, [cart]);

  const isInCart = cart.some((item) => item.title === product.title);

  const addProduct = (e) => {
    e.preventDefault();
    if (!isInCart) {
      dispatch(addToCart(product));
      toast.info("🛒 Item Added to Cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className="bg-[#444444] rounded-[16px] text-[#FFFFFF] overflow-hidden font-style relative">
      {/* Image Wrapper */}
      <div className="h-[300px] relative">
        <img alt={product.title} src={product.thumbnail} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-[24px] p-[16px]">
        <h2 className="text-[30px] line-clamp-1">{product.title}</h2>
        <p className="pt-[8px] text-[16px] text-[#FFFFFF] line-clamp-2">{product.description}</p>
        <span className="text-[#DA0037] text-[16px] font-semibold cursor-pointer">read more</span>
        <p className="text-[24px] text-[#DA0037] font-bold">${product.price}</p>

        {/* Add to Cart Button */}
        <div className="mt-[12px] pt-[16px]">
          <button
            type="button"
            onClick={addProduct}
            disabled={isInCart}
            className={`w-full px-6 py-2 rounded-md flex justify-center items-center gap-2 bg-[#DA0037] transition-all duration-300 
              ${isInCart ? "opacity-40 cursor-not-allowed" : "hover:bg-[#b0002c"}`}            
          >
            🛒 {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
}

export default ProductCard;




