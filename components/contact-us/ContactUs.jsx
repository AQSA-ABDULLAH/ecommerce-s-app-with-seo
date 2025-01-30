"use client";
import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

function ContactSection() {
  const backgroundImage = "/assets/storebg.jpg";

  return (
    <div className="relative py-32">
      {/* Animated Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden & 50px below
        whileInView={{ opacity: 1, y: 0 }} // Move up and fade in
        viewport={{ once: false, amount: 0.2 }} // Animate every time it enters view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        className="bg-gradient-to-r from-black/50 via-red-700/30 to-black/50 bg-cover bg-center py-[100px] relative"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.5), rgba(218, 0, 55, 0.318)), url(${backgroundImage})`,
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)", // Applying the clip-path here
        }}
      >
        {/* Content Section */}
        <div className="mx-auto px-[16px] text-center relative z-20">
          <div className="text-[#EDEDED] font-style">
            <h2 className="text-[30px] sm:text-[36px] font-bold">
              Contact <span className="text-[#DA0037]">US</span>
            </h2>
            <p className="text-[16px] mt-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatem consectetur eaque.
            </p>
            <a href="/contact" className="mt-[8px]">
              <button
                type="button"
                className="bg-[#DA0037] px-[16px] py-[8px] mt-[32px] rounded-[4px] text-[16px] hover:bg-[#bd2a2a] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Info
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;

