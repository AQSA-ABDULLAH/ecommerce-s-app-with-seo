"use client";

import { useState, useRef } from "react";

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (galleryRef.current?.requestFullscreen) {
        galleryRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div ref={galleryRef} className="relative">
      <button
        type="button"
        className="image-gallery-icon image-gallery-fullscreen-button p-2 rounded-full hover:bg-black/70 transition duration-300 flex justify-center items-center"
        aria-label={isFullscreen ? "Exit Fullscreen" : "Open Fullscreen"}
        onClick={toggleFullscreen}
      >
        {isFullscreen ? (
          // Exit Fullscreen Icon
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18v3H5a2 2 0 0 1-2-2v-4m16 0v4a2 2 0 0 1-2 2h-4m0-16h4a2 2 0 0 1 2 2v4M3 8V5a2 2 0 0 1 2-2h4v3"></path>
          </svg>
        ) : (
          // Open Fullscreen Icon
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default FullscreenButton;
