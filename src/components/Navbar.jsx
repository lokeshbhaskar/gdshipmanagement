import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiSearch } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Searchbar from './Searchbar';
import { CiLocationOn } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";

import Dropdown from "./Dropdown";

const services = ["Commercial Management", "Technical Management", "Crew Management", "Consultancy Services"]
const pages = ["Project ", "Project Details", "Faq", "Request Qoute"];
const news = ["Blog", "Blog Details"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);

  //  Hide topbar on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll) {
        setShowTopbar(false); // scrolling down → hide
      } else {
        setShowTopbar(true); // scrolling up → show
      }
      lastScroll = current <= 0 ? 0 : current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden 
          fixed top-0 left-0 w-full z-50
          bg-black/40 backdrop-blur-xl
          border-b border-white/20
          text-white text-[10px]
          px-4 py-2
          lg:flex justify-evenly items-center
          transition-all duration-500
          ${showTopbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* ADDRESS — visible on all screens */}
        <div className="text-white/90 flex items-center space-x-1">
          {/* icon */}
          <div>
            <CiLocationOn className='text-xl font-bold' />
          </div>
          {/* icon */}
          <div>
            <p>SF 2A, MOTI MANJIL RADHIKA VIHAR</p>
            <span>MATHURA, U.P. - 281001</span>
          </div>
        </div>

        <div className='flex gap-5'>
          <div className='flex items-center font-semibold gap-2 text-sm'>
            <IoMailUnreadOutline />
            <span>gdshipmanagement2022@gmail.com</span>
          </div>

          <div className='flex items-center font-semibold gap-2 text-sm'>
            <IoMailUnreadOutline />
            <span>crewing@gdship.com</span>
          </div>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div
          className="flex items-center space-x-3 text-white/80 text-lg">
          <FaFacebook className="hover:text-[#1A334E] cursor-pointer" />
          <FaInstagram className="hover:text-[#1A334E] cursor-pointer" />
          <FaLinkedin className="hover:text-[#1A334E] cursor-pointer" />
          <FaTwitter className="hover:text-[#1A334E] cursor-pointer" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`
   fixed z-40 left-1/2 -translate-x-1/2
    flex justify-between items-center max-h-18 md:max-h-15 xl:max-h-18
    w-[92%] md:w-[85%] lg:w-[78%] lg:px-5
    text-[#1A334E] font-semibold
    rounded-full
    bg-white/10 backdrop-blur-2xl
    border border-white/30
    ring-1 ring-white/20
    transition-all duration-500 ease-in-out
    ${showTopbar ? "top-5 lg:top-16" : "top-2"}
  `}
        style={{
          boxShadow: "0 15px 25px rgba(255,165,0,0.25)"
        }}
      >

        {/* LEFT MENU */}
        <div className="hidden lg:flex space-x-6 font-semibold text-[#8bbb74] relative">

          {/* HOME */}
          <Link className="hover:text-[#6b7c62] transition-all" to="/">Home</Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            {/* Hover trigger */}
            <span className="inline-block cursor-pointer hover:text-[#6b7c62] transition-all">
              Services+
            </span>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Dropdown items={services} />
            </div>
          </div>
          {/* ABOUT US */}
          <Link className="hover:text-[#6b7c62] transition-all" to="about">About Us</Link>
          <Link className="hover:text-[#6b7c62] transition-all" to="contact">Contact Us</Link>
        </div>

        {/* LOGO */}
        <div className="flex items-center h-full">
          <img
            src="/gdship.jpeg"
            alt="logo"
            className="h-20 md:h-24 xl:h-28 w-auto drop-shadow-[0_0_10px_rgba(255,136,0,0.4)]"
          />
        </div>

        {/* CONTACT + ICONS */}
        <div className="hidden lg:flex items-center space-x-5">
          <span className="text-[#8bbb74] font-semibold tracking-wide">
            +91 9467842122
          </span>

          <button className="text-[#8bbb74]  transition">
            <HiPhone size={22} />
          </button>

          <button
            className="text-[#8bbb74] cursor-pointer transition"
            onClick={() => setShowSearchBar(true)}
          >
            <HiSearch size={22} />
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <HiMenu size={23} className="text-[#3E642B] hover:text-[#6c716a]  cursor-pointer drop-shadow-lg" />
          </button>

          <button
            className="text-[#3E642B] cursor-pointer ml-2 md:ml-2 mr-3 hover:text-[#6c716a] transition"
            onClick={() => setShowSearchBar(true)}
          >
            <HiSearch size={23} />
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <Searchbar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex flex-col items-center justify-center space-y-6 text-white text-xl">
          <button
            className="absolute top-6 cursor-pointer right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX size={34} className="text-white" />
          </button>
          <Link className="hover:text-[#79936d]  transition" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

          {/* SERVICES DROPDOWN FOR MOBILE */}
          <div className="flex flex-col items-center">
            <span className="hover:text-[#79936d]  transition cursor-pointer">
              Services+
            </span>

            {/* NESTED ITEMS */}
            <div className="flex flex-col mt-2 space-y-2 text-sm text-white/90">
              {services.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-[#79936d] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>


          <Link className="hover:text-[#79936d]  transition" to="#" onClick={() => setIsMenuOpen(false)}>Pages+</Link>
          <Link className="hover:text-[#79936d]  transition" to="#" onClick={() => setIsMenuOpen(false)}>News+</Link>
          <Link className="hover:text-[#79936d] transition" to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <span className="hover:text-[#79936d] text-[#3E642B] font-semibold mt-4">+91 8451967013</span>
        </div>
      )}
    </>
  );
};
export default Navbar;