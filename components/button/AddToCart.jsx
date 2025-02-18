import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cart/slice";
import { toast } from "react-toastify";  // Import the toast function here

function AddToCart({ product, isInCart }) {
  const dispatch = useDispatch();

  const addProduct = useCallback((e) => {
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
  }, [dispatch, isInCart, product]);

  return (
    <>
      <button
        type="button"
        onClick={addProduct}
        disabled={isInCart}
        className={`w-full px-6 py-2 rounded-md flex justify-center items-center gap-2 bg-[#DA0037] transition-all duration-300 
          ${isInCart ? "opacity-40 cursor-not-allowed" : "hover:bg-[#b0002c]"}`}
      >
        🛒 {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </>
  );
}

export default AddToCart;



