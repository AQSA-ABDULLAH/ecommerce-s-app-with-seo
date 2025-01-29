'use client';

import React from 'react';

const Main = ({product}) => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col items-center">
          <img 
            src={product.thumbnail} 
            alt="Eyeshadow Palette" 
            className="w-80 h-80 object-cover rounded-lg"
          />
          <div className="mt-4 flex space-x-2">
            <img src={product.thumbnail} alt="Thumbnail" className="w-16 h-16 object-cover active:border-2 active:border-blue-500 rounded-md" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 px-6 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="text-gray-300 mt-2">
          {product.title} 
          </p>

          {/* Tags */}
          <div className="mt-3 flex space-x-2">
            <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">BEAUTY</span>
            <span className="bg-pink-600 text-white px-2 py-1 text-xs rounded">GLAMOUR BEAUTY</span>
          </div>

          {/* Price & Stock */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-red-500">$19.99</span>
            <span className="text-green-500 font-semibold">IN STOCK: 44</span>
          </div>

          {/* Rating */}
          <p className="mt-2 text-sm text-gray-400">Average ratings: <span className="text-green-400">3.28</span></p>

          {/* Add to Cart Button */}
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded text-lg w-full">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Main;