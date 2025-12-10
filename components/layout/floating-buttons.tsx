"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+40759614930";
const WHATSAPP_NUMBER = "40759614930"; // WhatsApp format without + and spaces

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactează-ne pe WhatsApp"
        title="Contactează-ne pe WhatsApp: 0759 614 930"
        className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:bg-[#20ba5a] transition-all duration-200 active:scale-95 outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        style={{
          minWidth: 64,
          minHeight: 64,
        }}
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Sună-ne"
        title="Sună-ne: 0759 614 930"
        className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#242f40] flex items-center justify-center text-white shadow-lg hover:bg-[#1a222d] transition-all duration-200 active:scale-95 outline-none focus:ring-2 focus:ring-[#242f40] focus:ring-offset-2"
        style={{
          minWidth: 64,
          minHeight: 64,
        }}
      >
        <Phone className="w-8 h-8" />
      </a>
    </div>
  );
}
