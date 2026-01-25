import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import AboutUs from "../components/home/AboutUs"
import Pagesbutton from '../components/Pagesbutton'

const About = () => {

  const navigate = useNavigate();

  return (
    <>
      <div
        className=" w-full bg-cover h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/Aboutpageimage.jpg')" }}
      >
        {/* White Container */}
        <div
          className="border-4 border-l border-lime-200 mt-10
            relative
            w-[90%] h-[75%]
            md:w-[80%] lg:h-[70%] xl:h-[73%] lg:top-5 
            bg-white  
            rounded-2xl md:rounded-3xl 
            overflow-hidden
            flex flex-col items-center
            py-10"
        >
          {/* TOP TEXT */}
          <div className='flex w-full h-full justify-center items-center'>
            <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[20rem] font-extralight text-gray-800 mb-10 opacity-40 z-0">
              About Us
            </h1>
          </div>

          {/* CENTER IMAGE */}
          <div
            className="flex
              absolute
              top-0 bottom-0
              left-1/2 -translate-x-1/2
              w-[65%] md:w-[60%] lg:w-[40%]
              h-full
              bg-cover bg-center
              shadow-2xl
              z-10
              items-center justify-center
              px-6"
            style={{ backgroundImage: "url('/Aboutpageimage.jpg')" }}
          >
            {/* Dark Mask */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <p className="relative z-20 text-white text-center text-xs md:text-lg lg:text-sm xl:text-lg">
              We bring excellence, innovation, and quality to every project. Our mission
              is to deliver meaningful, long-lasting impact through dedication and
              world-class craftsmanship.
            </p>
          </div>

          {/* NEW PREMIUM BREADCRUMB BUTTONS */}
         <Pagesbutton first={"Home"} second={"About Us"}/>
        </div>
      </div>

      <AboutUs />
    </>
  )
}

export default About
