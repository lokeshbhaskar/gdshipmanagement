import React from 'react'
import { motion } from 'framer-motion'

const cardAnimation = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { type: "spring", stiffness: 80, damping: 12 },
};

const Service = () => {
  return (
    <div className="w-full relative py-20 flex flex-col items-end pr-3 md:pr-10">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        viewport={{ once: false, amount: 0.3 }}
        className="
          w-[90%] sm:w-[85%] md:w-[65%] xl:w-[55%]
          h-32 sm:h-40 md:h-38 xl:h-55
          border-t border-l border-b border-gray-300/40
          rounded-l-xl backdrop-blur-sm
          -mt-8 sm:-mt-10 md:-mt-20 xl:-mt-15
          shadow-[-35px_15px_50px_rgba(0,0,0,0.45)]
        "
      ></motion.div>
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-[14rem] text-gray-400 leading-none">
          Our Services
        </h1>
        <h2 className="text-md sm:text-xl md:text-3xl font-semibold text-gray-700">
          Provides A Reliable Services
        </h2>
      </div>
      <div className="hidden  md:grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-300 mx-auto">
        <div className="h-40 shadow-md border border-gray-700 rounded-2xl"></div>
        <div className="h-65 shadow-md border border-gray-700 rounded-2xl"></div>
        <div className="h-30 shadow-md border border-gray-700 rounded-2xl"></div>
        <div className="h-45 shadow-md border border-gray-700 rounded-2xl"></div>
      </div>
      <div className="p-5 md:p-13 space-y-20 space-x-5 w-full lg:flex">
        <div className="relative min-h-90 md:min-h-105 w-full">
          <div
            className="
              absolute top-10 md:top-0 left-0 
              w-[80%] md:w-[55%] 
              h-auto
              bg-gray-200 
              rounded-2xl shadow-xl border border-gray-200 p-4
            "
          >
            <img
              src="/commercial.jpg"
              alt="service"
              className="w-full h-20 md:h-28 object-cover rounded-xl mb-3 shadow"
            />

            <h3 className="text-[12px] sm:text-xl font-semibold text-gray-800">
              COMMERCIAL MANAGEMENT
            </h3>

            <p className="text-gray-700 text-[13px] sm:text-sm mt-1 leading-snug">
              Gd Ship Management Marine Services provides commercial management solutions for a wide array of vessels, with services including...            </p>
            <button className="mt-1 text-[13px] sm:text-sm font-medium text-blue-700 hover:underline">
              Read More →
            </button>
          </div>
          <motion.div
            {...cardAnimation}
            viewport={{ amount: 0.2 }}
            className="
              absolute -bottom-28 md:bottom-0  right-0 
              w-[85%] md:w-[60%] 
              h-auto  
              bg-[#BB431D]
              rounded-2xl shadow-xl border border-gray-200 p-4
              translate-y-22 translate-x-7
            "
          >
            <img
              src="/technical.jpg"
              alt="service"
              className="w-full h-24 md:h-32 object-cover rounded-xl mb-3 shadow"
            />

            <h3 className="text-[14px] sm:text-xl font-semibold text-gray-800">
              TECHNICAL MANAGEMENT
            </h3>

            <p className="text-gray-700 text-[13px] sm:text-sm mt-1 leading-snug">
              Our Technical Management include maintenance and repair, inspection, testing and calibration, as well as....</p>

            <button className="mt-3 text-[13px] sm:text-sm font-medium text-white hover:underline">
              Read More →
            </button>
          </motion.div>
        </div>
        <div className="relative min-h-90 md:min-h-105 w-full">
          <motion.div
            {...cardAnimation}
            viewport={{ amount: 0.2 }}
            className="
              absolute top-28  md:top-0 right-0 
              w-[78%] md:w-[55%] 
              h-auto 
              bg-[#9AE600] 
              rounded-2xl shadow-xl border border-gray-200 p-3
            "
          >
            <img
              src="/crew.jpg"
              alt="service"
              className="w-full h-20 md:h-28 object-cover rounded-xl mb-3 shadow"
            />

            <h3 className="text-[14px] sm:text-xl font-semibold text-gray-800">
              CREW MANAGEMENT
            </h3>

            <p className="text-gray-700 text-[13px] sm:text-sm mt-1 leading-snug">
              About Gd Ship Management Services provides crew management services to help our clients be more efficient and effective in their operations.            </p>

            <button className=" text-[12px] sm:text-sm font-medium text-gray-900 hover:underline relative left-30 md:left-60">
              Read More →
            </button>
          </motion.div>
          <motion.div
            {...cardAnimation}
            viewport={{ amount: 0.2 }}
            className="
              absolute -bottom-40 md:bottom-0 left-0 
              w-[85%] md:w-[60%] 
              h-auto 
              bg-[#46EDD5] 
              rounded-2xl shadow-xl border border-gray-200 p-3
              translate-y-24 md:translate-y-22 -translate-x-4 lg:translate-x-20
            "
          >
            <img
              src="/CONSULTANCY.jpg"
              alt="service"
              className="w-full h-24 md:h-32 object-cover rounded-xl mb-3 shadow"
            />

            <h3 className="text-[17px] sm:text-xl font-semibold text-gray-800">
              Consultancy Service
            </h3>

            <p className="text-gray-700 text-[13px] sm:text-sm mt-1 leading-snug">
              Consultancy team is comprised of experienced and highly accomplished professionals with many years...            </p>

            <button className="mt-1 text-[13px] sm:text-sm font-medium text-gray-900 hover:underline">
              Read More →
            </button>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Service
