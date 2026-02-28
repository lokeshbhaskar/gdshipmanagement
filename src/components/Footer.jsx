import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Crew Management", to: "/crew-management" },
    { label: "Contact Us", to: "/contact" },
  ];

  const serviceLinks = [
    { label: "Commercial Management", to: "/commercial-management" },
    { label: "Technical Management", to: "/technical-management" },
    { label: "Crew Management", to: "/crew-management" },
    { label: "Consultancy Services", to: "/consultancy-services" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
    { label: "X", href: "https://x.com", icon: FaXTwitter },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
    { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  ];

  return (
    <footer className="w-full bg-[#041426] text-[#C9DBEB]">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-10 lg:px-14">
        <div className="mb-10 grid grid-cols-1 gap-10 border-b border-[#2B4C6B]/60 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-[#F2F7FC]">
            About GD Ship Management Pvt Ltd.
          </h2>
            <p className="text-sm leading-relaxed text-[#AFC5DA]">
            We are headed by a team of senior shipping professionals with vast
            experience, knowledge and skills gathered through many years of
            service in the shipping industry.
          </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full border border-[#436A8F] p-2.5 text-[#D3E5F6] transition hover:border-[#E3B160] hover:bg-[#E3B160] hover:text-[#082340] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B160] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041426]"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="mb-4 text-lg font-semibold text-[#F2F7FC]">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex rounded px-1 text-[#BFD3E7] transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="mb-4 text-lg font-semibold text-[#F2F7FC]">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="inline-flex rounded px-1 text-[#BFD3E7] transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#F2F7FC]">Contact Info</h3>

            <div className="mb-4 flex items-start gap-3 text-sm text-[#B4CBE0]">
              <FiMapPin className="mt-1 text-[#DCEBFA]" />
              <p>
              GDSHIP Management Private Limited, SF 2A, MOTI MANJIL RADHIKA
              VIHAR MATHURA UTTAR PRADESH 281001
              </p>
            </div>

            <div className="mb-4 flex items-center gap-3 text-sm text-[#B4CBE0]">
              <FiPhone className="text-[#DCEBFA]" />
              <a
                href="tel:+919467842122"
                className="rounded px-1 transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
              >
                +91 9467842122
              </a>
            </div>

            <div className="mb-2 flex items-center gap-3 text-sm text-[#B4CBE0]">
              <FiMail className="text-[#DCEBFA]" />
              <a
                href="mailto:info@gdshipmanagement.in"
                className="rounded px-1 transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
              >
                info@gdshipmanagement.in
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#B4CBE0]">
              <FiMail className="text-[#DCEBFA]" />
              <a
                href="mailto:info@gdshipmanagement.com"
                className="rounded px-1 transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
              >
                info@gdshipmanagement.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#8EA9C3] md:flex-row">
          <p>2025 © All Rights Reserved, GD Ship Pvt Ltd</p>

          <div className="flex gap-6">
            <Link
              to="/contact"
              className="rounded px-1 transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
            >
              Terms of Use
            </Link>
            <Link
              to="/contact"
              className="rounded px-1 transition hover:text-[#F6BD62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6BD62]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
