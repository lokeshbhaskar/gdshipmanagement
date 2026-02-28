import React, { lazy, Suspense, useRef } from "react";
const HeroSection = lazy(() => import("../components/home/HeroSection"));
const AboutUs = lazy(() => import("../components/home/AboutUs"));
const Service = lazy(() => import("../components/home/Service"));
import Banner from "../components/Banner";

const Home = () => {
  const aboutRef = useRef(null);

  return (
    <div className="w-full bg-[#061B33]">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs ref={aboutRef} variant="compact" />
      </Suspense>
      <div className="px-4 pb-12 pt-8 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#2A537A]/60 bg-[#0A2746]/85 px-5 py-8 text-center shadow-[0_24px_70px_rgba(1,8,20,0.55)] backdrop-blur-sm sm:px-8 md:py-10">
          <p className="font-serif text-xl font-semibold leading-tight text-[#E5EEF8] sm:text-2xl md:text-4xl xl:text-5xl">
            GD Ship Management Pvt Ltd is your strategic maritime operations partner.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[#BCD0E3] sm:text-base md:text-lg">
            From commercial planning to technical and crew support, we deliver
            dependable end-to-end solutions that help ship owners run safer,
            smarter, and more efficient vessel operations across global routes.
          </p>
        </div>
      </div>
      <div className="bg-[#061B33]">
        <Suspense fallback={<div>Loading...</div>}>
          <Service />
        </Suspense>
      </div>
      <Banner />
    </div>
  );
};

export default Home;
