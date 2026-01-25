import React from "react";

const Benefits = () => {
  return (
    <div className="w-full py-45 md:py-20">

      {/* SECTION HEADING */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-600 tracking-wide">
          Benefits of Choosing Us
        </h1>
        <p className="text-gray-500 mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Professional marine services with excellence, precision, and trust.
        </p>
      </div>

      {/* PARENT CONTAINER */}
      <div
        className="relative w-full flex justify-center items-center min-h-[80vh] 
        bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: "url('/benefit.jpg')",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 9%, transparent 100%)",
        }}
      >

        {/* GRADIENT MASK */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/50 pointer-events-none"></div>

        {/* CHILD BLUR BOX */}
        <div
          className="relative border border-white/30 rounded-[30px]
          backdrop-blur-md shadow-2xl
          w-[85vw] md:w-[70vw] min-h-[70vh] overflow-hidden p-8"
        >

          {/* CONTENT OVERLAY (TEXT + LIST) */}
          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              What You Get With Our Best Services
            </h2>
            <p className="text-[#3E642B] font-bold mb-6  md:text-2xl lg:text-4xl max-w-xl">
              You will get the following with our best services.
            </p>

            {/* BENEFITS LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-sm md:text-lg xl:text-xl">

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                Guidelines For Update Seafarer Profile
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                TME/GME Training Guidelines
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                GPR Training Guidelines
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                STCW Training Guidelines
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                SID Card Guidelines
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                Latest Vacancy Update
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                DNS / B.Sc. Nautical Science Training Guidelines
              </p>

              <p className="flex items-start gap-2">
                <span className="text-amber-400">››</span>
                COC Guidelines
              </p>

            </div>
          </div>

          {/* CHILD BACKGROUND WITH MASK */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('/benefit.jpg')",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
          ></div>

        </div>
      </div>

    </div>
  );
};

export default Benefits;
