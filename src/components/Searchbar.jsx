import React from "react";
import { HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Searchbar = ({ showSearchBar, setShowSearchBar }) => {

    return (
        <AnimatePresence>
            {showSearchBar && <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full absolute top-0 left-0 z-50 bg-[#1A334E] bg-opacity-95 
                       border-b-4 border-white shadow-lg animate-slideDown"
            >
                {/* Close Button Row */}
                <div className="flex items-center justify-end px-6 py-4">
                    <button
                        onClick={() => setShowSearchBar(false)}
                        className="cursor-pointer text-white text-3xl hover:rotate-90 transition-transform"
                    >
                        <HiX />
                    </button>
                </div>

                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="pb-10 grid grid-cols-12">
                    <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 text-center">

                        {/* Heading */}
                        <h1 className="text-white text-2xl md:text-3xl font-serif font-semibold tracking-wide mb-4">
                            What Are You Looking For?
                        </h1>

                        {/* Search Input */}
                        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg 
                                    w-full max-w-xl mx-auto px-3 py-2">
                            <FiSearch className="text-[#1A334E] text-2xl ml-2" />

                            <input
                                type="text"
                                placeholder="Search ships, services, destinations..."
                                className="w-full px-4 py-2 md:py-3 focus:outline-none text-gray-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    );
};

export default Searchbar;
