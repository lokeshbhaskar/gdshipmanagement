import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="relative bottom-20">

            <h1 className="mt-15  text-[#1A334E] text-center text-xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold">
                GET IN TOUCH WITH US ANYTIME
            </h1>

            {/* Masked Background Image Section */}
            <div
                className="
          relative mt-6
          bg-center bg-cover bg-no-repeat
          p-10 space-y-5
          md:grid grid-cols-1 lg:grid-cols-2
          mask-image-to-radial
        "
                style={{
                    backgroundImage: "url('/banner.jpg')",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}
            >
                <h2 className="text-[#1c4905] md:text-3xl font-semibold lg:p-10">
                    Marine Services Are Often Considered
                </h2>

                {/* contact us buton */}
                <p className="font-serif text-sm md:text-xl text-white">
                    A genuine strategic partner is Navtex Marine Services Pvt Ltd. You can
                    get the full range of end-to-end solutions you need to run your business
                    effectively and efficiently through our global network. Investigate our
                    administration proposing to find more.
                </p>

                <div className="mt-20 cursor-pointer w-45 h-12 xl:w-50 xl:h-16 relative left-7 bottom-10 md:left-60 lg:left-85 xl:left-180 flex items-center justify-center z-20">
                    <div className="absolute left-0 w-1/2 h-full border-5 border-t border-b border-[#1c4905]" />
                    <div className="absolute right-0 w-1/2 h-full bg-[#1c4905] backdrop-blur-md" />
                    <button
                    onClick={()=>navigate("/contact")}
                        className="cursor-pointer
      absolute font-semibold text-white 
      tracking-[0.25em] text-lg xl:text-xl
    "
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
