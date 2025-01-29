import React from "react";

const PaginationControls = ({
  currentPage,
  setCurrentPage,
  totalProducts,
  PRODUCTS_PER_PAGE,
}) => {
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3; // Number of pages visible before showing ellipses

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first page
        i === totalPages || // Always show last page
        (i >= currentPage - maxVisiblePages && i <= currentPage + maxVisiblePages)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-10 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md bg-gray-700 text-white disabled:opacity-50"
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-white">
            {page}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-md ${
              currentPage === page ? "bg-red-600 text-white" : "bg-gray-700 text-white"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-gray-700 text-white disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default PaginationControls;

