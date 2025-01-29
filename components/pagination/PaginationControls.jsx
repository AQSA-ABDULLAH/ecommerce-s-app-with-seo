import React, { useState } from "react";

const PaginationControls = ({ currentPage, setCurrentPage, totalProducts, PRODUCTS_PER_PAGE }) => {
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <div className="flex justify-center items-center mt-10 space-x-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md bg-gray-700 text-white disabled:opacity-50"
      >
        &lt;
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        if (
          pageNum === 1 ||
          pageNum === totalPages ||
          (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
        ) {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-2 rounded-md ${
                currentPage === pageNum
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {pageNum}
            </button>
          );
        } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
          return <span key={index} className="px-3 py-2 text-white">...</span>;
        }
      })}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md bg-gray-700 text-white disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default PaginationControls;

