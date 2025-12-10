"use client";

import { useState } from "react";
import Link from "next/link";

// Simple Hamburger Icon as JSX (3 horizontal lines)
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div
      className="flex flex-col justify-center w-8 h-8 cursor-pointer"
      aria-label={open ? "Închide meniul" : "Deschide meniul"}
      tabIndex={0}
      role="button"
    >
      <span
        className={`block h-1 w-8 rounded bg-black transition-all duration-200 ${
          open ? "rotate-45 translate-y-[10px]" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-8 rounded bg-black my-1 transition-all duration-200 ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-8 rounded bg-black transition-all duration-200 ${
          open ? "-rotate-45 -translate-y-[10px]" : ""
        }`}
      ></span>
    </div>
  );
}

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Montaj Acoperișuri", href: "/montaj-acoperisuri" },
  { name: "Reparații Acoperișuri", href: "/reparatii-acoperisuri" },
  { name: "Dulgherie Acoperiș", href: "/dulgherie-acoperis" },
  { name: "Accesorii Acoperiș", href: "/accesorii-acoperis" },
  { name: "Lucrări", href: "/lucrari" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation
  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#e5e5e5] shadow-sm border-b border-[#d1d5db]">
      <nav className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-2 relative">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 py-1 z-10">
          <span className="text-black font-serif text-xl md:text-2xl font-bold">
            Acoperiș la Gata
          </span>
          <span className="hidden sm:inline text-xs text-black/80 pl-2">
            Servicii Complete Acoperișuri
          </span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center ml-auto z-20 focus:outline-none"
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setMenuOpen((v) => !v)}
          type="button"
        >
          <HamburgerIcon open={menuOpen} />
        </button>

        {/* Navigation */}
        <div
          className={`
            flex-col
            md:flex md:flex-row md:static md:mt-0
            fixed top-0 left-0 right-0 bg-[#e5e5e5]
            transition-all duration-300
            ${menuOpen ? "flex" : "hidden"}
            items-center
            justify-center
            gap-2 px-4 py-8 mt-14 shadow-lg
            md:shadow-none md:py-0 md:bg-transparent
            md:relative md:w-auto
            w-full
            z-10
          `}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-black transition-colors hover:bg-black/10 active:bg-black/20 cursor-pointer"
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
