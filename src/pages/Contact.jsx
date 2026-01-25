import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  const [text, setText] = useState("");
  const fullText = "Let's stay in touch →";

  // TYPEWRITER EFFECT
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, idx));
      idx++;
      if (idx > fullText.length) clearInterval(interval);
    }, 80);
  }, []);

const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#1A334E] overflow-hidden relative">

        {/* CONTACT BUTTON (MOVED LOWER) */}
        <button
        onClick={scrollToContact}
          className="
            absolute 
            top-[65vh] 
            md:top-[80vh]   
            right-6 
            px-4 py-2 md:py-4
            text-xs sm:text-sm 
            border border-black rounded-full 
            hover:bg-black hover:text-white 
            transition cursor-pointer
          "
        >
          CONTACT US
        </button>

        {/* TOP WHITE CONTAINER */}
        <div
          className="
            absolute top-20 right-0 
            w-[85%] sm:w-1/2 
            h-[28vh] sm:h-[40vh] 
            bg-[#e5e4db] 
            flex flex-col justify-center 
            px-6 sm:px-10 
            z-30
          "
        >
          <p className="text-sm sm:text-base leading-relaxed mb-4 mt-4">
            Follow us on social media for exclusive updates, behind-the-scenes
            features, and more.
          </p>

          <div className="flex gap-4 sm:gap-6 text-sm sm:text-lg font-medium">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>

        {/* SLIDE-IN IMAGE */}
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: text === fullText ? 0 : "-100%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="
            absolute top-0 right-0 
            w-[90%] sm:w-[70%] 
            h-[45vh] sm:h-[65vh] 
            z-20 overflow-hidden
            clip-path-[polygon(30%_0%,100%_0%,100%_100%,0%_100%,0%_30%)]
          "
        >
          <img
            src="/ship1.png"
            alt="contact visual"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TYPEWRITER HEADING */}
        <div className="absolute top-[55vh] md:top-[65vh] sm:top-48 left-6 sm:left-12 ">
          <h1
            className="
              text-[36px] sm:text-[65px] md:text-[90px] xl:text-[110px] lg:mt-5
              leading-tight font-serif text-white drop-shadow
            "
          >
            {text}
          </h1>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative z-2 px-6 sm:px-12 pb-20 pt-10 w-full max-w-3xl mt-[50vh] sm:mt-[20vh] text-[#2f2f2f]">
        </div>
      </div>

      <ContactComponent ref={contactRef}/>
    </>
  );
};

export default Contact;
