import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const TopBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 5) {
        setVisible(true); // At very top → show it
      } else if (current > lastScroll) {
        setVisible(false); // Scrolling down → hide
      } else {
        setVisible(true); // Scrolling up → show
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`
        fixed left-0 w-full z-60
        bg-black/40 backdrop-blur-lg
        border-b border-white/10 text-white
        transition-all duration-300 ease-out
        ${visible ? "top-0 opacity-100" : "-top-12 opacity-0"}
      `}
    >
      <div
        className="
          max-w-7xl mx-auto px-4
          py-1.5 text-[11px] md:text-[13px]
          flex flex-col md:flex-row md:items-center md:justify-between
          gap-1 md:gap-0
        "
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">

          {/* Address */}
          <div className="flex items-start md:items-center gap-2 leading-tight">
            <HiOutlineLocationMarker className="text-lg text-white/90" />
            <div>
              <p>SF 2A, MOTI MANJIL RADHIKA VIHAR</p>
              <p>MATHURA, U.P. - 281001</p>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <HiOutlineMail className="text-lg text-white/90" />
            <a
              href="mailto:gdshipmanagement2022@gmail.com"
              className="hover:underline text-white/90"
            >
              gdshipmanagement2022@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-lg mt-1 md:mt-0 justify-center md:justify-end">
          <FaFacebookF className="hover:text-white/70 cursor-pointer" />
          <FaXTwitter className="hover:text-white/70 cursor-pointer" />
          <FaLinkedinIn className="hover:text-white/70 cursor-pointer" />
          <FaInstagram className="hover:text-white/70 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
