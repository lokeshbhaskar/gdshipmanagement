import React from "react";
import Pagesbutton from "../components/Pagesbutton";

const Commercial = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      <div
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 80%, 75% 70%, 50% 78%, 25% 65%, 0 75%)",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url('/landing2.jpg')" }}
        />

        {/* LARGE GRAY EDGE TEXT (NOT DARK) */}
        <h1
          className="
            absolute bottom-0 top-0 lg:-right-40
            text-gray-300/40 
            text-[6rem] md:text-[11rem] lg:text-[14rem] 
            font-extrabold 
            select-none 
            z-0
          "
          style={{ transform: "translate(20%, 20%)" }}
        >
          COMMERCIAL
        </h1>

        {/* HERO CONTENT CENTERED LEFT */}
        <div className="relative z-20 w-full flex flex-col gap-2 md:gap-4 px-5 md:px-10 bottom-25 md:bottom-20 lg:bottom-5 ">
          {/* MAIN HEADING */}
          <h1 className="text-white text-2xl md:text-5xl font-semibold ">
            Commercial Management
          </h1>

          {/* SUB TEXT */}
          <p className="text-white/90 text-sm md:text-xl lg:text-xl max-w-2xl drop-shadow-lg">
            Delivering industry-leading commercial expertise, cost efficiency,
            and strategic project alignment.
          </p>
        </div>

        {/* BUTTON PLACED IN PERFECT POSITION */}
        <div className="absolute left-40 md:left-140 lg:left-200 xl:left-300  bottom-60 md:bottom-70 xl:bottom-75  h-10 w-10">
          <Pagesbutton first="Services" second="Commercial" />
        </div>

      </div>

      {/* ------------------------------------------------------------
          NEW CONTENT SECTION (transparent water-glass container)
      ------------------------------------------------------------- */}
      <div className=" w-full flex justify-center px-5">
        <div
          className="
            max-w-5xl w-full 
            bg-white/10 
            backdrop-blur-xl 
            rounded-3xl 
            border border-white/30
            p-5 
            lg:p-10 
            shadow-2xl 
            animate-float 
            relative bottom-30
          "
          style={{
            boxShadow:
              "0 0 25px rgba(255,255,255,0.4), inset 0 0 25px rgba(255,255,255,0.3)",
          }}
        >


          <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-gray-700 mb-4">
            Our Commercial Expertise
          </h2>

          <div className="flex flex-col gap-10">
            <p className="text-gray-700 md:text-lg leading-relaxed">
              GD Ship Services provides commercial management solutions for a wide range of vessels, including full chartering and marine accounting. </p>
            <p>
              We offer end-to-end commercial management, from vessel fixture to post-fixture operations, along with support in crew management and sales & purchases.
            </p>          </div>


        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes pulseSlow {
            0% { opacity: 0.2; }
            50% { opacity: 0.5; }
            100% { opacity: 0.2; }
          }
          .animate-pulseSlow {
            animation: pulseSlow 3s ease-in-out infinite;
          }
        `}
      </style>

    </div>
  );
};

export default Commercial;
