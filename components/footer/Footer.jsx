import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000CC] text-[#EDEDED]">
      <div className="mx-[83px] px-[16px] py-[32px]">
        {/* Logo and Developer Info */}
        <a href="/" className="text-[#DA0037] text-[36px] font-bold">
          Next Cart
        </a>
        <p className="mt-[8px] text-[16px] text-[#CBD5E0]">Developed by Saqib Aziz.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-[8px] pt-[16px]">
          <a
            href="https://www.linkedin.com/in/saqib-aziz41/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-white transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.7s.8-1.7 1.8-1.7c1 0 1.8.8 1.8 1.7s-.8 1.7-1.8 1.7zm13.5 11.3h-3v-5.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.5.6-1.8 1.2-.1.2-.1.5-.1.8v5.5h-3v-10h3v1.4c.4-.7 1.2-1.6 2.9-1.6 2.1 0 3.6 1.4 3.6 4.3v5.9z" />
            </svg>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-white transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1 2.9.8.1-.7.4-1 .7-1.2-2.6-.3-5.4-1.3-5.4-5.6 0-1.2.4-2.3 1-3.1-.1-.2-.5-1.6.1-3.4 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.8.2 3.2.1 3.4.6.8 1 1.9 1 3.1 0 4.3-2.8 5.3-5.4 5.6.4.3.7.9.7 1.8v2.6c0 .3.2.6.8.5A12 12 0 0 0 12 0z" />
            </svg>
          </a>
          <a
            href="mailto:saqib.aziz41@gmail.com"
            className="text-[#CBD5E0] hover:text-white transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 8l8 5 8-5v10H4V8zm8 3L4 6h16l-8 5z" />
            </svg>
          </a>
          <a
            href="https://wa.me/+923459084214"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBD5E0] hover:text-white transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.5 3.5a10 10 0 1 0-18 6.3L2 22l12.2-3.2a10 10 0 0 0 6.3-18zM15.3 16.8c-.6.2-1.1.3-1.6.3-2.6 0-5.5-2.1-6.5-4.1-.5-1-.6-1.9-.1-2.5.2-.3.5-.3.9-.3.4 0 .7.1.9.3l.7.8c.3.3.3.6.2.9l-.3.5c-.1.2-.1.4.2.8l.7 1c.5.7 1.1 1.3 2 1.6l.6.3c.4.1.6 0 .9-.2l.4-.5c.3-.4.5-.4.9-.3l.8.3c.2 0 .6.2.8.3.2.3.4.8.3 1.1 0 .1-.3.7-.8 1z" />
            </svg>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center pt-4">
          <p className="text-[14px]">
            Copyright © 2023 All rights reserved. Designed and developed by{" "}
            <span className="text-[#DA0037]">Saqib.</span>
          </p>
          <div className="flex space-x-4 text-[16px]">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/products" className="hover:underline">
              Products
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
