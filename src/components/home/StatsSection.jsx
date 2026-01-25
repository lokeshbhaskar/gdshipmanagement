// StatsSection.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, Anchor, Route } from "lucide-react";

// ---------- STAT CARD ----------
const StatCard = ({ icon, percentage, type, startAnimation }) => {
  const controls = useAnimation();
  const [value, setValue] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (startAnimation) runSequence();
  }, [startAnimation]);

  const runSequence = async () => {
    await controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    });
    animateNumber(percentage, 1500);
    await animateLine(1800);
  };

  const animateNumber = (target, duration) => {
    const start = Date.now();
    const step = () => {
      const progress = Math.min(1, (Date.now() - start) / duration);
      setValue(Math.round(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const animateLine = (duration) => {
    return new Promise((resolve) => {
      const start = Date.now();
      const step = () => {
        const progress = Math.min(1, (Date.now() - start) / duration);
        setLineProgress(progress);
        if (progress < 1) requestAnimationFrame(step);
        else resolve();
      };
      requestAnimationFrame(step);
    });
  };

  const DASH_LEN = 2000;
  const dashOffset = Math.max(0, DASH_LEN - DASH_LEN * lineProgress);

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      className="relative bg-linear-to-br from-gray-900/60 to-gray-700/20 
                 backdrop-blur-xl border border-white/10
                 rounded-3xl p-6 shadow-2xl w-full h-[260px]
                 flex flex-col justify-between z-20"
    >
      <div className="text-gray-300 mb-2">{icon}</div>
      <h2 className="text-[#96b188] text-4xl font-bold tracking-tight">
        +{value}%
      </h2>
      <p className="text-gray-400 text-sm mb-4">{type}</p>

      <svg width="100%" height="80" viewBox="0 0 1100 200" preserveAspectRatio="none">
        <path
          d="M0 180 C 150 70, 300 40, 450 120 S 700 210, 900 100 S 1100 20, 1100 20"
          stroke="url(#grad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={DASH_LEN}
          strokeDashoffset={dashOffset}
        />
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#96b188" />
            <stop offset="100%" stopColor="#96b188" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
        }}
      />
    </motion.div>
  );
};

// ---------- MAIN SECTION ----------
export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [waveProgress, setWaveProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      animateWave(2000);
    }
  }, [isInView]);

  const animateWave = (duration) => {
    const start = Date.now();
    const step = () => {
      const progress = Math.min(1, (Date.now() - start) / duration);
      setWaveProgress(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const WAVE_DASH = 1200;
  const waveOffset = WAVE_DASH - WAVE_DASH * waveProgress;

  return (
    <>
      <div
        ref={ref}
        className="relative w-full flex flex-col items-center justify-center 
                 
                 py-20 px-5 rounded-b-4xl  overflow-hidden"
        style={{

          WebkitMaskImage:
            "linear-gradient(to bottom, black 95%, transparent 100%)",
        }}

      >
        {/* POWERFUL SUNLIGHT BEAM */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[700px] z-10 pointer-events-none">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
              radial-gradient(circle at center top, rgba(255,255,255,0.4) 0%, transparent 60%),
              radial-gradient(circle at center top, rgba(255,255,255,0.3) 0%, transparent 70%),
              radial-gradient(circle at center top, rgba(255,255,255,0.2) 0%, transparent 80%)
            `,
              transform: "scaleX(1) scaleY(1.5)",
              filter: "blur(60px)",
              opacity: 0.9,
            }}
          />
        </div>

        {/* WAVY LINE BACKGROUND */}
        <svg
          className="absolute top-4/9  w-[150%] h-70 -translate-x-1/6 z-10 pointer-events-none"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 C 150 20, 350 80, 600 50 S 900 20, 1200 50"
            stroke="url(#waveGrad)"
            strokeWidth="16" // thicker
            fill="transparent"
            strokeDasharray={WAVE_DASH}
            strokeDashoffset={waveOffset}
            strokeLinecap="round"
            style={{ opacity: 0.2 }} // subtle behind cards
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#aaa" />
              <stop offset="50%" stopColor="#eee" />
              <stop offset="100%" stopColor="#aaa" />
            </linearGradient>
          </defs>
        </svg>

        {/* TEXT ABOVE CARDS */}
        <div className="relative z-20 text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl  text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            Shining Your Stats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#1A334E] mt-4 text-lg md:text-xl font-medium"
          >
            Illuminating your growth in numbers
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          {[
            { icon: <Users className="w-6 h-6 text-[#96b188]" />, percentage: 39, type: "Visitors" },
            { icon: <Anchor className="w-6 h-6 text-[#96b188]" />, percentage: 52, type: "Professional Sailors" },
            { icon: <Route className="w-6 h-6 text-[#96b188]" />, percentage: 68, type: "Sea Routes" },
          ].map((item, i) => (
            <StatCard key={i} {...item} startAnimation={isInView} />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 h-56 w-12 relative flex items-center justify-center z-20">
          <div className="absolute top-0 h-1/2 w-full border-t border-[#3E642B]" />
          <div className="absolute bottom-0 h-1/2 w-full bg-[#3E642B] backdrop-blur-md" />
          <p
            className="absolute font-semibold text-white tracking-[0.25em] text-xs"
            style={{ writingMode: "vertical-rl", rotate: "180deg" }}
          >
            YOUR STATS
          </p>
        </div>
      </div>
      
    </>
  );
}
