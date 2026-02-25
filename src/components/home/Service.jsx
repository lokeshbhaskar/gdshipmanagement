import React from "react";
import ship1 from "/commercial.jpg";
import ship2 from "/technical.jpg";
import ship3 from "/crewpage.jpg";

const Service = () => {
  return (

    <div className="w-full relative py-0 flex flex-col items-end pr-3 md:pr-10">
      <div
        className="
    w-[90%] sm:w-[85%] md:w-[65%] xl:w-[55%]
    h-32 sm:h-40 md:h-38 xl:h-55
    rounded-l-xl
    backdrop-blur-[2px]
    border-t border-l border-b border-gray-300/40

    mt-6 sm:mt-10 md:mt-5 xl:-mt-15

    shadow-[-35px_15px_50px_rgba(0,0,0,0.45)]
  "
      ></div>
      <div className="absolute top-12 md:top-4 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-center md:text-left"> <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-[14rem] text-gray-400 leading-none whitespace-nowrap w-max"> Our Services </h1> <h2 className="text-md sm:text-xl md:text-3xl font-semibold text-gray-700 mt-2"> Provides A Reliable Services </h2> </div>
      <div className="p-5 md:p-13 space-y-10 w-full mt-20"> <div className="grid md:grid-cols-3 gap-8">
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
          <img
            src={ship1}
            alt="Commercial Management"
            className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Commercial Management
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Gd Ship Management Marine Services provides commercial management solutions for a wide array of vessels.
            </p>
          </div>
        </div>

        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
          <img
            src={ship2}
            alt="Technical Management"
            className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Technical Management
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our technical management includes maintenance, inspection, testing, calibration, and operational support.
            </p>
          </div>
        </div>

        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
          <img
            src={ship3}
            alt="Crew Management"
            className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Crew Management
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Professional crew management services ensuring efficient operations and qualified maritime personnel.
            </p>
          </div>
        </div>

      </div>
      </div> </div>);
};

export default Service