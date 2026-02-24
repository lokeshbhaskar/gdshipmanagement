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
    <div className=' w-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      </Suspense>     
      <div
        >
        <Suspense fallback={<div>Loading...</div>}>
          <Service />
        </Suspense>
      </div>
    </div>
  )
}

export default Home