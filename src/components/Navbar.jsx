import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiSearch, HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Searchbar from './Searchbar';
import Dropdown from "./Dropdown";

const services = ["Commercial Management", "Technical Management", "Crew Management", "Consultancy Services"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);

  // Hide topbar on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setShowTopbar(current < lastScroll || current < 50);
      lastScroll = current <= 0 ? 0 : current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm text-white text-sm transition-transform duration-500
          ${showTopbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 lg:py-3">
          <div className="flex items-center gap-2">
            <CiLocationOn className='text-xl' />
            <div className="flex flex-col text-xs lg:text-sm">
              <span>SF 2A, MOTI MANJIL RADHIKA VIHAR</span>
              <span>MATHURA, U.P. - 281001</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <HiOutlineMail className="text-lg" />
              <a href="mailto:gdshipmanagement2022@gmail.com" className="hover:underline text-white">
                gdshipmanagement2022@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-white text-lg">
              <FaFacebook className="hover:text-[#1A334E] cursor-pointer" />
              <FaInstagram className="hover:text-[#1A334E] cursor-pointer" />
              <FaLinkedin className="hover:text-[#1A334E] cursor-pointer" />
              <FaTwitter className="hover:text-[#1A334E] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="fixed top-[68px] left-1/2 -translate-x-1/2 z-40 w-[90%] lg:w-[80%] bg-white/20 backdrop-blur-lg border border-white/30 rounded-full shadow-md flex justify-between items-center px-6 text-[#1A334E] font-semibold transition-all duration-500 h-20">

        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-6 text-[#1A334E]">
          <Link to="/" className="hover:text-[#0f1b2b] transition-all font-medium">Home</Link>

          <div className="relative group">
            <span className="cursor-pointer hover:text-[#0f1b2b] transition-all font-medium">Services+</span>
            <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Dropdown items={services} />
            </div>
          </div>

          <Link to="/about" className="hover:text-[#0f1b2b] transition-all font-medium">About Us</Link>
          <Link to="/contact" className="hover:text-[#0f1b2b] transition-all font-medium">Contact Us</Link>
        </div>

        {/* LOGO */}
        <div className="flex items-center h-full">
          <img
            src="/logo.png"
            alt="logo"
            className="max-h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(255,136,0,0.5)]"
          />
        </div>

        {/* RIGHT CONTACT */}
        <div className="hidden lg:flex items-center gap-5 text-[#1A334E] font-medium">
          <span>+91 9467842122</span>
          <HiPhone size={22} className="cursor-pointer" />
          <HiSearch size={22} className="cursor-pointer" onClick={() => setShowSearchBar(true)} />
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden flex items-center gap-3 text-[#1A334E]">
          <HiSearch size={22} className="cursor-pointer" onClick={() => setShowSearchBar(true)} />
          <HiMenu size={24} className="cursor-pointer" onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>

      {/* SEARCH BAR */}
      <Searchbar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-6 text-white text-xl">
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
            <HiX size={34} />
          </button>
          <Link to="/" className="hover:text-[#79936d]" onClick={() => setIsMenuOpen(false)}>Home</Link>

          {/* Mobile Services */}
          <div className="flex flex-col items-center">
            <span className="hover:text-[#79936d] cursor-pointer">Services+</span>
            <div className="flex flex-col mt-2 space-y-2 text-sm text-white/90">
              {services.map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#79936d]" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="hover:text-[#79936d]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-[#79936d]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
