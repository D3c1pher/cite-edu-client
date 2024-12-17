"use client"

import { useState } from "react";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`inline-block cursor-pointer`}
      onClick={toggleMenu}
    >
      <div className={`w-[35px] h-[5px] bg-white my-[6px] transition-all duration-600 drop-shadow-sm ${isOpen ? "transform translate-y-[11px] rotate-[-45deg]" : ""}`}></div>
      <div className={`w-[35px] h-[5px] bg-white my-[6px] transition-all duration-600 drop-shadow-sm ${isOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-[35px] h-[5px] bg-white my-[6px] transition-all duration-600 drop-shadow-sm ${isOpen ? "transform -translate-y-[11px] rotate-[45deg]" : ""}`}></div>
    </div>
  );
};

export default MenuIcon;
