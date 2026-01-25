import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'

const Pagesbutton = (props) => {
    const { first, second } = props;
    return (
        <div
            className="absolute bottom-6 left-1/2  -translate-x-1/2
              flex items-center gap-2
              bg-white/10 backdrop-blur-xl
              shadow-lg
              rounded-full px-1 py-1 md:px-3 md:py-2
              border border-white/20
              z-20"
        >
            {/* Left Button → CLICKABLE HOME */}
            <button
                onClick={() => navigate('/')}
                className="
               px-6 py-2.5 
                text-sm md:text-base
                text-gray-900 font-medium
                bg-white
                rounded-full
                shadow-sm
                hover:shadow-md
                hover:bg-gray-100
                transition-all duration-300
                cursor-pointer
              "
            >
                {first}
            </button>

            {/* Icon Divider */}
            <div className="px-2">
                <HiChevronDoubleRight className="text-xl text-white/80" />
            </div>

            {/* Right Button → NON-CLICKABLE ABOUT US */}
            <button
                className="w-20 md:w-29
                md:px-6 py-2.5 
                text-xs md:text-base
                text-white md:font-medium
                rounded-full
                bg-linear-to-r from-[#5ea100] to-[#67873B]
                shadow-sm
                transition-all duration-300
                 cursor-pointer flex justify-center
              "
                disabled
            >
                {second}
            </button>
        </div>)
}

export default Pagesbutton