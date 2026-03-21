import React from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-900">
              [Headline: Propuesta de Valor Principal]
            </h1>
            <p className="text-lg text-neutral-600 max-w-[600px] mx-auto lg:mx-0">
              [Subtítulo persuasivo: Explicación breve de cómo Laborait resuelve el problema y ayuda al usuario.]
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button href={getWhatsAppLink()} variant="primary">
                [CTA Principal via WhatsApp]
              </Button>
              <Button href="#" variant="secondary">
                [CTA Secundario (Conoce más)]
              </Button>
            </div>
          </div>
          
          {/* LCP Image Placeholder */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-video lg:aspect-square w-full bg-neutral-200 rounded-2xl flex items-center justify-center border border-neutral-300 shadow-sm relative overflow-hidden">
               <span className="text-neutral-500 font-medium">[LCP Image/Video Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
