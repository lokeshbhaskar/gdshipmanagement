import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ items }) => {
  return (
    <div className="absolute top-7 left-0 bg-white text-black shadow-xl rounded-md py-3 w-56 z-50">
      {items.map((item, index) => {
        const path = `/${item.replace(/\s+/g, "-").toLowerCase()}`;

        return (
          <Link
            key={index}
            to={path}
            className="block px-4 py-2 hover:bg-[#1236036f] transition"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Dropdown;
