import React from "react";

function ContactSection() {
  const backgroundImage = "/assets/storebg.jpg";

  return (
    <div className="bg-[#171717] relative py-32">
      {/* Wrapper with the clip-path applied */}
      <div
          className="bg-gradient-to-r from-black/50 via-red-700/30 to-black/50 bg-cover bg-center py-[100px] relative"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.5), rgba(218, 0, 55, 0.318)), url(${backgroundImage})`,
            clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)", // Applying the clip-path here
          }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 backdrop-blur-[3px] z-10"></div>

        {/* Content Section */}
        <div className="max-w-screen-lg mx-auto px-4 text-center relative z-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Contact <span className="text-primary">US</span>
            </h2>
            <p className="text-lg text-white opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatem consectetur eaque.
            </p>
            <a href="/contact">
              <button
                type="button"
                className="bg-primary text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-primary-dark"
              >
                Info
                <span className="flex items-center">
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
      </div>
    </div>
  );
}

export default ContactSection;
