import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

const Button = ({ onAboutClick, onContactClick  }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex relative">

        {/* About Us (left) */}
        <button
          onClick={onAboutClick}
          className="
            bg-white text-gray-700 
            px-5 py-2.5 md:px-7 md:py-4 lg:px-7 lg:py-3
            xl:py-4
            text-md  lg:text-[18px]
            rounded-l-full rounded-r-md   
            shadow-lg z-10
            transition-all duration-300 
            hover:shadow-xl 
            cursor-pointer
          "
        >
          About Us
        </button>

        {/* Contact Us (right, slightly overlapping) */}
        <button
        onClick={onContactClick}
          className="
            bg-[#1A334E] text-white 
            px-4 md:px-6 py-2.5 md:py-4 lg:px-5 lg:py-3
            xl:py-4
            text-md  lg:text-[18px]
            rounded-full shadow-xl 
            flex items-center gap-2 
            -ml-5 md:-ml-7 z-20
            transition-all duration-300
            hover:shadow-2xl hover:scale-105 
            cursor-pointer
          "
        >
          Contact Us
          <HiChevronDoubleRight className="text-2xl " />
        </button>

      </div>
    </div>
  );
};

export default Button;
