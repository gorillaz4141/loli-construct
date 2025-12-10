"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { GTMLink } from "@/components/ui/gtm-link";
import { GTMButton } from "@/components/ui/gtm-button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Montaj Acoperișuri", href: "/montaj-acoperisuri" },
  { name: "Reparații Acoperișuri", href: "/reparatii-acoperisuri" },
  { name: "Dulgherie Acoperiș", href: "/dulgherie-acoperis" },
  { name: "Accesorii Acoperiș", href: "/accesorii-acoperis" },
  { name: "Lucrări", href: "/lucrari" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // For SSR hydration mismatch fixes that cause icon glitches
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-[#e5e5e5]"
      )}
    >
      {/* Main nav (no top bar per new style) */}
      <nav className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="hidden sm:block lg:block">
              <span className="text-black font-serif text-xl font-bold">
                Acoperiș la Gata
              </span>
              <p className="text-xs text-black/80">
                Servicii Complete Acoperișuri
              </p>
            </div>
            {/* Show site name on mobile only (below lg) */}
            <div className="block sm:hidden lg:hidden">
              <span className="text-black font-serif text-lg font-bold">
                Acoperiș la Gata
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <GTMLink
                key={item.name}
                href={item.href}
                gtmLabel={item.name}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  "text-black hover:underline underline-offset-4"
                )}
              >
                {item.name}
              </GTMLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <GTMButton
              gtmLabel="header_cta_contact"
              className="bg-[#d1d5db] text-black px-6 py-2 rounded-md shadow hover:shadow-md transition-all duration-300"
              asChild
            >
              <a href="tel:+40759614930">Solicită Ofertă</a>
            </GTMButton>
          </div>

          {/* Mobile menu button */}
          {mounted && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-black hover:bg-black/10 transition-colors"
              aria-label="Toggle menu"
              data-gtm-event="click"
              data-gtm-category="Navigation"
              data-gtm-action="mobile_menu_toggle"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-[#e5e5e5] z-40 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2 pb-8">
              {/* Visible brand/header for mobile menu */}
              <div className="flex items-center justify-center mb-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="block text-black font-serif text-xl font-bold">
                    Acoperiș la Gata
                  </span>
                </Link>
              </div>
              {navigation.map((item) => (
                <GTMLink
                  key={item.name}
                  href={item.href}
                  gtmLabel={`mobile_${item.name}`}
                  className="block px-4 py-4 text-black hover:underline underline-offset-4 rounded-md transition-colors text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </GTMLink>
              ))}
              <div className="pt-6 border-t border-[#d1d5db] mt-4">
                <GTMButton
                  gtmLabel="mobile_cta_contact"
                  className="w-full bg-[#d1d5db] text-black py-4 text-base font-medium"
                  asChild
                >
                  <a href="tel:+40759614930">Sună Acum: +40 759 614 930</a>
                </GTMButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
