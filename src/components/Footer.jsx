import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="-mt-20 w-full bg-[#1A1D2B] text-gray-300 pt-16 pb-8 px-6 md:px-16 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            About GD Ship Management Pvt Ltd.
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We are headed by a team of senior shipping professionals with vast
            experience, knowledge and skills gathered through many years of
            service in the shipping industry.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              <FaFacebookF size={15} />
            </a>
            <a className="p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              <FaXTwitter size={15} />
            </a>
            <a className="p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              <FaLinkedinIn size={15} />
            </a>
            <a className="p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition">
              <FaInstagram size={15} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quik Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">HOME</li>
            <li className="hover:text-white transition cursor-pointer">
              ABOUT US
            </li>
            <li className="hover:text-white transition cursor-pointer">
              OUR CREW TEAM
            </li>
            <li className="hover:text-white transition cursor-pointer">
              CONTACT US
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition">
              COMMERCIAL MANAGEMENT
            </li>
            <li className="hover:text-white transition">
              TECHNICAL MANAGEMENT
            </li>
            <li className="hover:text-white transition">CREW MANAGEMENT</li>
            <li className="hover:text-white transition">
              CONSULTANCY SERVICES
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>

          <div className="flex items-start gap-3 text-sm text-gray-400 mb-4">
            <FiMapPin className="text-white mt-1" />
            <p>
              GDSHIP Management Private Limited, SF 2A, MOTI MANJIL RADHIKA
              VIHAR MATHURA UTTAR PRADESH 281001
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <FiPhone className="text-white" />
            <a
              className="hover:text-white transition cursor-pointer"
            >
              9467842122
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
            <FiMail className="text-white" />
            <a
              href="mailto:info@gdshipmanagement.in"
              className="hover:text-white transition cursor-pointer"
            >
              info@gdshipmanagement.in
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <FiMail className="text-white" />
            <a
              href="mailto:info@gdshipmanagement.com"
              className="hover:text-white transition cursor-pointer"
            >
              info@gdshipmanagement.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-gray-500 text-sm">
        <p>2025 © All Rights Reserved, GD Ship Pvt Ltd</p>

        <div className="flex gap-8 mt-4 md:mt-0">
          <p className="cursor-pointer hover:text-white transition">
            Terms of Use
          </p>
          <p className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
