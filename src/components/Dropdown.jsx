import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ items }) => {
  return (
    <div className="absolute left-0 top-7 z-50 w-64 overflow-hidden rounded-xl border border-[#8EB0CF]/45 bg-[#f7fbff] py-2 shadow-[0_16px_34px_rgba(5,24,43,0.22)]">
      {items.map((item, index) => {
        const label = typeof item === "string" ? item : item.label;
        const path =
          typeof item === "string"
            ? `/${item.replace(/\s+/g, "-").toLowerCase()}`
            : item.to;
        const tone = typeof item === "string" ? "text-[#11385D]" : item.tone;

        return (
          <Link
            key={index}
            to={path}
            className={`block px-4 py-3 text-sm font-semibold leading-snug tracking-[0.01em] ${tone} transition hover:bg-[#EAF3FB] hover:text-[#0C2E52]`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Dropdown;
