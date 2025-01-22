'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';

const images = [
  '/assets/shopping-image.jpg', // Make sure this path is correct
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the background image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundColor: '#ccc',
          boxShadow:
            'inset 100px 100px 100px 100px rgba(0,0,0,0)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 backdrop-blur-[3px]"></div>

        <div className='absolute z-50 py-[20px] w-[100%]'>
        <Header />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          Welcome to Our Store
        </div>
      </div>
    </div>
  );
}

export default Hero;
