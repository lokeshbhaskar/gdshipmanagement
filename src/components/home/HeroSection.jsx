import { HiChevronDoubleRight } from "react-icons/hi";
import Button from "./Button";

const HeroSection = ({ scrollToAbout, scrollToContact }) => {
  return (
    <div
      className="w-full -mt-5 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/heroSectionShip.png')",
        height: "100dvh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 95%, transparent 100%)",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative pt-35 text-center z-10">
        {/* Bubble Title */}
        <div className="mt-4 lg:mt-4 water-bubble md:p-10 ">
          <h1
            className="
              text-white text-5xl md:text-[11rem] lg:text-[5rem] xl:text-[12rem] font-semibold
              animate-fade-up opacity-0
              drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]
            "
            style={{ animationDelay: "0ms" }}
          >
            GDSHIP
          </h1>
        </div>

        {/* NEW HEADING + DESCRIPTION */}
        <div className="mt-6 lg:mt-0 xl:mt-4 max-w-4xl mx-auto">
          <h2
            className="
              text-white text-lg md:text-3xl lg:text-2xl xl:text-4xl font-semibold
              animate-fade-up opacity-0
              drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
            "
            style={{ animationDelay: "300ms" }}
          >
            SO 9001-2015 Certified Ship Management Excellence
          </h2>

          <p
            className="
              text-white text-xl md:text-lg mt-5 lg:mt-2
              animate-fade-up opacity-0
              drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
            "
            style={{ animationDelay: "600ms" }}
          >
            Government-approved maritime solutions delivering efficient vessel
            operations and comprehensive crew management services worldwide.
          </p>
        </div>

        {/* Buttons */}
        <Button onAboutClick={scrollToAbout} onContactClick={scrollToContact} />

        {/* Bottom content boxes */}
        <div className="relative bottom-6 xl:mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-35 relative top-20">
            {/* Boxes remain unchanged, text can also get text-shadow */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
