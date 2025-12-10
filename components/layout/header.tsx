"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    setMounted(true);
  }, []);

  // Close menu when clicking outside or on a link
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest("nav")) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#e5e5e5] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="hidden sm:block">
              <span className="text-black font-serif text-xl font-bold">
                Acoperiș la Gata
              </span>
              <p className="text-xs text-black/80">
                Servicii Complete Acoperișuri
              </p>
            </div>
            <div className="block sm:hidden">
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
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 text-black hover:underline underline-offset-4"
              >
                {item.name}
              </GTMLink>
            ))}
          </div>

          {/* Desktop CTA Button */}

          {/* Mobile Menu Button */}
          {mounted && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="lg:hidden p-2 rounded-md text-black hover:bg-black/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        {isOpen && mounted && (
          <div
            className="lg:hidden fixed inset-0 top-16 bg-[#e5e5e5] z-40 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto px-4 py-6 min-h-[calc(100vh-4rem)] flex flex-col">
              {/* Mobile Menu Content */}
              <div className="flex-1 space-y-1">
                {/* Brand Header */}
                <div className="flex items-center justify-center mb-6 pb-4 border-b border-[#d1d5db]">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <span className="text-black font-serif text-xl font-bold">
                      Acoperiș la Gata
                    </span>
                  </Link>
                </div>

                {/* Navigation Links */}
                {navigation.map((item) => (
                  <GTMLink
                    key={item.name}
                    href={item.href}
                    gtmLabel={`mobile_${item.name}`}
                    className="block px-4 py-4 text-black hover:bg-black/5 rounded-md transition-colors text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </GTMLink>
                ))}

                {/* CTA Button */}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
