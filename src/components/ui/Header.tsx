"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { LogoLight } from "@/components/ui/LogoLight";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-neutral-200/50"
          : "bg-primary-900 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto h-16 flex items-center justify-center">
        {/* Logo — always centered, swaps color variant on scroll */}
        <div className="relative h-8 w-40">
          {/* Light version — visible on dark header */}
          <LogoLight
            className={`absolute inset-0 h-8 w-auto transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Dark version — visible on glassmorphism header */}
          <Logo
            className={`absolute inset-0 h-8 w-auto transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </header>
  );
}
