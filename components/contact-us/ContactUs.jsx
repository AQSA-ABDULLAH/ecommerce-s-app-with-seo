import React from 'react';

function ContactSection() {
  return (
    <div className="relative bg-gray-100 py-16">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact <span className="text-primary">US</span>
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem consectetur eaque.
          </p>
          <a href="/contact">
            <button
              type="button"
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark flex items-center space-x-2"
            >
              <span>Info</span>
              <span className="text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  focusable="false"
                  className="h-5 w-5"
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
    </div>
  );
}

export default ContactSection;
