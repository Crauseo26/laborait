"use client";

import React, { useState, useEffect } from "react";

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
      className={`sticky top-0 z-50 w-full transition-colors duration-500 bg-white ${
        scrolled ? "border-transparent" : "border-b border-neutral-100"
      }`}
    >
      <div className="container mx-auto relative h-16 pointer-events-none">
        
        {/* Animated Logo Container */}
        <div 
          className="absolute flex items-center gap-2 transition-all duration-500 ease-in-out pointer-events-auto"
          style={{
            top: "50%",
            left: scrolled ? "16px" : "50%",
            transform: scrolled 
              ? "translateY(-50%)" 
              : "translate(-50%, -50%)"
          }}
        >
          {/* Logo Icon */}
          <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          {/* Logo Text */}
          <span 
            className={`text-xl font-extrabold tracking-tight text-primary-900 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${
              scrolled ? "max-w-0 opacity-0" : "max-w-[150px] opacity-100"
            }`}
          >
            Laborait
          </span>
        </div>

      </div>
    </header>
  );
}
