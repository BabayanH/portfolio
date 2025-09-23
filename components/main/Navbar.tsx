// components/main/Navbar.tsx
"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <a
        href="#about-me"
        className="px-4 py-2 hover:opacity-80"
        onClick={onClick}
      >
        About me
      </a>
      <a
        href="#skills"
        className="px-4 py-2 hover:opacity-80"
        onClick={onClick}
      >
        Skills
      </a>
      <a
        href="#projects"
        className="px-4 py-2 hover:opacity-80"
        onClick={onClick}
      >
        Projects
      </a>
    </>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top bar */}
      <div className="w-full h-[65px] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-4 sm:px-6 md:px-10">
        <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: logo/title */}
          <a href="#about-me" className="flex items-center gap-2">
            {/* If you have a logo, uncomment: */}
            {/* <Image src="/NavLogo.png" alt="logo" width={40} height={40} /> */}
            <span className="font-bold text-gray-300">Portfolio</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
            <NavLinks />
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={toggle}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#7042f8]"
          >
            {/* Hamburger / Close (no extra deps) */}
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden transition-all duration-200 ${
          open
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="mx-4 mt-2 rounded-2xl border border-[#7042f861] bg-[#030014cc] backdrop-blur-md text-gray-200 overflow-hidden">
          <div className="flex flex-col divide-y divide-white/10">
            <NavLinks onClick={close} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
