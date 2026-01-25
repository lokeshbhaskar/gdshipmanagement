import { HiChevronDoubleRight } from "react-icons/hi";
import Button from "./Button";

const HeroSection = ({scrollToAbout,scrollToContact}) => {
  return (
    <div
      className="w-full -mt-5 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/heroSectionShip.png')",
        height: "100dvh",
         backgroundSize: "100% 100%",
         WebkitMaskImage:
                    "linear-gradient(to bottom, black 95%, transparent 100%)",
              }}
    >
      
      <div className="pt-[120px] text-center">

        {/* Bubble Title */}
        <div className="lg:-mt-4 water-bubble md:p-10">
          <h1
            className="
              text-white text-6xl md:text-[11rem] lg:text-[7rem] xl:text-[12rem] font-semibold
              animate-fade-up opacity-0 
            "
            style={{ animationDelay: "0ms" }}
          >
            GDSHIP
          </h1>
        </div>

        {/*  NEW HEADING + DESCRIPTION SECTION WITH ANIMATION */}
        <div className="mt-2 lg:mt-0 xl:mt-4">
          <h2
            className="
              text-white text-lg md:text-3xl lg:text-2xl xl:text-4xl font-semibold
              animate-fade-up opacity-0
            "
            style={{ animationDelay: "300ms" }}
          >
            Navigating the Future of Maritime Excellence
          </h2>

          <p
            className="
              text-white text-xs md:text-lg mt-2 max-w-3xl mx-auto
              animate-fade-up opacity-0
            "
            style={{ animationDelay: "600ms" }}
          >
            We are headed by a team of senior shipping professionals with vast experience,
            knowledge and skills gathered through many years of service in the shipping industry.
          </p>
        </div>

        {/* Button */}
        <Button onAboutClick={scrollToAbout}
  onContactClick={scrollToContact}/>

        {/* ------- rest of your content stays EXACTLY same -------- */}

        {/* content section */}
        <div className="relative bottom-10 xl:mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-35 relative top-20">
            {/* Box 1 */}
            <div className="flex flex-row gap-3">
              <img
                src="/landing1.jpg"
                alt="img1"
                className="w-20 h-16 md:w-25 md:h-18 object-cover rounded-md shadow-sm"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, black 60%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 60%, transparent 100%)",
                }}
              />
              <div className="flex flex-col justify-center leading-tight max-w-[180px] text-left">
                <h3 className="text-white text-xs font-semibold">
                  Rocky Mountain National Park
                </h3>
                <p className="text-gray-300 text-[10px] mt-0.5">
                  Northern Colorado's iconic national park spanning the Divide.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex flex-row gap-3 items-center">
              <img
                src="/landing2.jpg"
                alt="img2"
                className="w-20 h-16 md:w-25 md:h-18 object-cover rounded-md shadow-sm"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to left, black 60%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to left, black 60%, transparent 100%)",
                }}
              />
              <div className="flex flex-col justify-center leading-tight max-w-[180px] text-left">
                <h3 className="text-white text-xs font-semibold">
                  Rocky Mountain National Park
                </h3>
                <p className="text-gray-300 text-[10px] mt-0.5">
                  Northern Colorado's iconic national park spanning the Divide.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="hidden lg:flex flex-row gap-3 items-center">
              <img
                src="/landing3.jpg"
                alt="img3"
                className="w-25 h-18 object-cover rounded-md shadow-sm"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, black 60%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 60%, transparent 100%)",
                }}
              />
              <div className="flex flex-col justify-center leading-tight max-w-[180px] text-left">
                <h3 className="text-white text-xs font-semibold">
                  Rocky Mountain National Park
                </h3>
                <p className="text-gray-300 text-[10px] mt-0.5">
                  Northern Colorado's iconic national park spanning the Divide.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
