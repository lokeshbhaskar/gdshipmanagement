import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  const MotionDiv = motion.div;
  const [text, setText] = useState("");
  const fullText = "Let's stay in touch →";

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
      <div className="relative w-full overflow-hidden bg-[#061B33] px-4 pb-14 pt-40 sm:px-6 md:px-10 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(43,118,196,0.25),transparent_32%),radial-gradient(circle_at_88%_10%,rgba(226,177,95,0.18),transparent_30%)]" />

        <div className="relative mx-auto min-h-[72vh] max-w-7xl overflow-hidden rounded-3xl border border-[#4E769B]/70 shadow-[0_24px_70px_rgba(2,10,22,0.58)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#031427]/92 via-[#08233f]/82 to-[#0a3258]/58" />

          <button
            onClick={scrollToContact}
            className="absolute bottom-5 right-5 z-40 rounded-full bg-[#E3B160] px-5 py-2 text-xs font-semibold tracking-wide text-[#08233F] transition hover:bg-[#f1c578] sm:bottom-8 sm:right-8 sm:text-sm"
          >
            CONTACT US
          </button>

          <div className="absolute right-0 top-4 z-30 w-[88%] rounded-l-2xl border border-[#adc6db] bg-[#f0f4f8] px-5 py-5 sm:top-6 sm:w-[58%] sm:px-8 md:top-8 md:py-7">
            <p className="mb-3 text-sm leading-relaxed text-[#1D3652] sm:text-base">
              Follow us for maritime updates, behind-the-scenes operations, and
              service insights from our team.
            </p>

            <div className="flex gap-4 text-sm font-semibold sm:gap-6 sm:text-base">
              <a href="#" className="text-[#0C2F52] hover:underline">
                Facebook
              </a>
              <a href="#" className="text-[#0C2F52] hover:underline">
                Instagram
              </a>
            </div>
          </div>

          <MotionDiv
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: text === fullText ? 0 : "-100%", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute right-0 top-0 z-20 h-[58%] w-[94%] overflow-hidden rounded-bl-[34px] sm:h-[66%] sm:w-[70%]"
          >
            <img
              src="/ship1.png"
              alt="contact visual"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031427]/70 via-transparent to-transparent" />
          </MotionDiv>

          <div className="absolute left-4 top-[57%] z-30 sm:left-8 sm:top-[62%] md:left-10 md:top-[66%]">
            <h1 className="font-serif text-3xl leading-tight text-[#F3F8FD] drop-shadow sm:text-5xl md:text-7xl xl:text-8xl">
              {text}
            </h1>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#C8DBEC] sm:text-sm md:text-base">
              Reach our team for commercial, technical, crew, or consultancy
              requirements and we will get back with the right support path.
            </p>
          </div>

          <div className="relative z-10 mt-[62vh] w-full max-w-3xl px-6 pb-8 pt-6 text-[#d6e6f4] sm:mt-[55vh] sm:px-10 md:mt-[52vh]" />
        </div>
      </div>

      <ContactComponent ref={contactRef} />
    </>
  );
};

export default Contact;
