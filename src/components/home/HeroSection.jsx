import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const images = [
    "/shiphome1.jpg",
    "/shiphome2.jpg",
    "/shiphome3.jpg",
    "/shiphome4.jpg",
    "/shiphome5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      },
    }),
  };

  return (
    <section className="w-full min-h-screen bg-[#022346] relative overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-24 lg:pt-28 gap-8 lg:gap-12">

        {/* LEFT SIDE (1/3 WIDTH) */}
        <div className="w-full lg:w-1/3 text-left space-y-3 overflow-hidden">

          {/* Headline */}
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-[#F4EDE8] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-serif drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          >
            GDSHIP
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-white text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide font-serif drop-shadow-md"
          >
            ISO 9001-2015 Certified Ship Management Excellence
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-[#F9F7F4] text-sm md:text-md leading-relaxed font-sans drop-shadow-md"
          >
            Government-approved maritime solutions delivering efficient vessel
            operations and comprehensive crew management services worldwide.
          </motion.p>

        </div>

        {/* RIGHT SIDE (2/3 WIDTH) */}
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.6)]
                          mb-6 sm:mb-8 md:mb-10 lg:mb-0">

            {/* Slides */}
            <div
              className="flex h-full transition-transform duration-900 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div key={index} className="min-w-full h-full">
                  <img
                    src={img}
                    alt={`Ship ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

            {/* Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                ></button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
