"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { LogoMini } from "@/components/ui/LogoMini";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect when scrolled down more than 20 pixels
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize state on first paint
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-500 bg-white/70 backdrop-blur-md ${
        scrolled ? "border-transparent" : "border-b border-neutral-100"
      }`}
    >
      <div className="container mx-auto relative h-16 pointer-events-none">

        {/* Animated Logo Container */}
        <div
          className="absolute flex items-center transition-all duration-500 ease-in-out pointer-events-auto"
          style={{
            top: "50%",
            left: scrolled ? "16px" : "50%",
            transform: scrolled
              ? "translateY(-50%)"
              : "translate(-50%, -50%)"
          }}
        >
          {/* Transition Wrapper */}
          <div className={`relative flex items-center overflow-hidden transition-all duration-500 ease-in-out ${scrolled ? "w-8 h-8" : "w-40 sm:w-40 h-8"
            }`}>

            {/* Isotipo (Mini Logo) - Hidden initially, appears on scroll */}
            <LogoMini
              className={`absolute top-0 left-0 w-8 h-8 shrink-0 transition-opacity duration-500 ease-in-out text-primary-600 ${scrolled ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Logotipo (Full Logo) - Visible initially, disappears on scroll */}
            <Logo
              className={`absolute top-0 left-0 h-8 w-auto shrink-0 transition-opacity duration-500 ease-in-out text-primary-900 ${scrolled ? "opacity-0" : "opacity-100"
                }`}
            />

          </div>
        </div>

      </div>
    </header>
  );
}
