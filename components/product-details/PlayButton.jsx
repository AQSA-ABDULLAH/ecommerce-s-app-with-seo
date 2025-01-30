'use client';

import { useState } from 'react';

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      type="button" 
      className="image-gallery-icon image-gallery-play-button p-2 rounded-full hover:text-[#blue] transition duration-300 flex justify-center items-center"
      aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
      onClick={togglePlayPause}
    >
      {isPlaying ? (
        // Pause Icon
        <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      ) : (
        // Play Icon
        <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      )}
    </button>
  );
};

export default PlayPauseButton;
