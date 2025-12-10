"use client";

import { Phone, MessageCircle } from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "+40759614930";
const WHATSAPP_NUMBER = "40759614930"; // WhatsApp format without + and spaces

export function FloatingButtons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <GTMButton
        gtmLabel="floating_whatsapp"
        gtmCategory="Contact"
        gtmAction="whatsapp_click"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center p-0 border-0"
        asChild
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactează-ne pe WhatsApp"
          title="Contactează-ne pe WhatsApp: 0759 614 930"
          className="flex items-center justify-center w-full h-full"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </GTMButton>

      {/* Phone Button */}
      <GTMButton
        gtmLabel="floating_phone"
        gtmCategory="Contact"
        gtmAction="phone_click"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#242f40] hover:bg-[#1a222d] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center p-0 border-0"
        asChild
      >
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Sună-ne"
          title="Sună-ne: 0759 614 930"
          className="flex items-center justify-center w-full h-full"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </GTMButton>
    </div>
  );
}

