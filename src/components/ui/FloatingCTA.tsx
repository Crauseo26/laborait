"use client";

import React, { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "./Button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const footer = document.querySelector("footer");
      const HEADER_HEIGHT = 64;

      const heroScrolled = hero ? hero.getBoundingClientRect().bottom <= HEADER_HEIGHT : false;
      const footerVisible = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;

      setIsVisible(heroScrolled && !footerVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md border-t border-neutral-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] sm:hidden transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-1 items-center">
        <Button href={getWhatsAppLink()} variant="primary" className="!w-full shadow-lg">
          Contactar por WhatsApp
        </Button>
        <span className="text-[10px] text-neutral-500 font-medium tracking-wide uppercase mt-1">
          ⚡ Respuesta en menos de 5 min
        </span>
      </div>
    </div>
  );
}
