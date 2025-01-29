"use client";
import { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(3); // Default rating

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const index = i + 1;
        return (
          <svg
            key={index}
            onClick={() => setRating(index)}
            className="w-8 h-8 cursor-pointer transition-all"
            viewBox="0 0 1024 1024"
            fill={index <= rating ? "orange" : "transparent"}
            stroke="orange"
            strokeWidth="20"
          >
            <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
