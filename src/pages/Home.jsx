import React, { lazy, Suspense, useRef } from 'react'
const HeroSection = lazy(() => import("../components/home/HeroSection"));
const AboutUs = lazy(() => import("../components/home/AboutUs"));
const StatsSection = lazy(() => import("../components/home/StatsSection"));
const Service = lazy(() => import("../components/home/Service"));
const Benefits = lazy(() => import("../components/home/Benefits"));
import ContactComponent from '../components/ContactComponent'

const Home = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='w-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      </Suspense>      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs ref={aboutRef} />
      </Suspense>
      <div className='p-3 text-sm md:p-10 md:text-xl xl:text-2xl xl:p-26  space-x-2 text-center' >
        <p className='text-[#1A334E] [text-shadow:0_4px_8px_rgba(14_165_223/0.5)]  font-serif'> <span className='text-[#1A334E] text-[16px] md:text-4xl xl:text-5xl font-semibold'>A genuine  Strategic Partner is Navtex Marine Services Pvt Ltd Itd.</span> You can get the full range of end-to-end solutions you need to run your business effectively and efficiently through our global network. Investigate our administration proposing to find more.</p>
      </div>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 95%, transparent 100%)",

        }}
        className='mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-linear-to-b  from-[#18262f] via-[#151b20] to-[#12263b]'>
        <Suspense fallback={<div>Loading...</div>}>
          <StatsSection />
          <Service />
          <Benefits />
        </Suspense>


      </div>
      <ContactComponent ref={contactRef} />
    </div>
  )
}

export default Home