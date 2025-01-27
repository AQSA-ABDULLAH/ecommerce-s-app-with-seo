"use client";

import React, { useState } from "react";
import CartItems from "./CartItems";

const Cart = () => {
  // State to control sidebar visibility
  const [isOpen, setIsOpen] = useState(true);

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Only render the sidebar if isOpen is true */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed top-0 left-0 w-screen h-screen bg-[#0000007A]"></div>

          {/* Cart Container */}
          <div className="fixed right-0 top-0 bottom-0 w-1/4 text-white bg-[#444]">
            {/* Header */}
            <div className="text-[20px] px-6 py-4 font-style flex justify-between">
              <header
                className="chakra-modal__header"
                id="chakra-modal--header"
              >
                Selected items
              </header>

              {/* Close Button */}
              <button
                type="button"
                aria-label="Close"
                className="text-white"
                onClick={closeSidebar}
              >
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-3 h-3"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-2 flex-1 overflow-auto">
              <CartItems />
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-[100%]">
              <div className="px-6 py-4 flex justify-between">
                <h2 className="text-lg font-semibold">Total:</h2>
                <h2 className="text-lg font-semibold">$0</h2>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;