"use client";

import React, { useState, useEffect } from "react";

const QUOTES = [
  "Seguro esto no aplica para mi caso.",
  "Con los abogados siempre terminas perdiendo plata.",
  "Estas empresas tienen plata de sobra para ganar cualquier juicio.",
  "Si fuera tan facil, todo el mundo lo haria.",
];

export function MirrorSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % QUOTES.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (idx: number) => {
    if (activeSlide === idx) {
      return "opacity-100 translate-x-0 z-10";
    }
    // The slide that just left goes to the left (-translate-x)
    if (idx === (activeSlide - 1 + QUOTES.length) % QUOTES.length) {
      return "opacity-0 -translate-x-12 md:-translate-x-24 z-0";
    }
    // All other slides wait on the right (+translate-x)
    return "opacity-0 translate-x-12 md:translate-x-24 z-0";
  };

  return (
    <section className="w-full bg-primary-900 py-16 md:py-24 overflow-hidden shadow-inner">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 md:mb-12 leading-tight text-balance">
            Sabemos exactamente lo que estas pensando ahora mismo.
          </h2>

          {/* Slider Container with fixed height to prevent CLS */}
          <div className="relative w-full h-[120px] sm:h-[140px] md:h-[160px] flex items-center justify-center my-4 md:my-8 bg-primary-800/30 rounded-2xl border border-primary-800/50 p-6 shadow-sm overflow-hidden">
            {QUOTES.map((quote, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out p-4 md:p-8 ${getSlideClass(idx)}`}
              >
                <p className="text-xl md:text-2xl lg:text-3xl italic font-medium text-neutral-400 tracking-wide text-balance">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 max-w-3xl leading-relaxed text-balance">
            <p className="text-[1.1rem] md:text-xl text-neutral-300">
              Esos miedos son razonables y son exactamente los que tenian los mas de 70 choferes que hoy ya cobraron su reclamo.
            </p>
            <p className="text-[1.1rem] md:text-xl text-primary-600 mt-2 md:mt-3">
              La diferencia entre ellos y los que no cobraron nada fue una sola: <span className="font-bold">decidieron averiguar.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
