import React from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export function HeroSection() {
  return (
    <section id="hero-section" className="w-full bg-primary-900 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center gap-8">
          {/* Text Content */}
          <div className="w-full space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Te bloquearon la cuenta.<br />Podés reclamar hasta USD 50.000.
            </h1>
            <p className="text-lg text-white/80 max-w-[600px] mx-auto">
              Tenés derecho a reclamar aguinaldo, vacaciones y horas extras que nunca te pagaron.{" "}
              <span className="text-primary-600 block sm:inline font-semibold mt-1 sm:mt-0">
                Si no ganamos, no cobramos nada.
              </span>
            </p>
            <div className="pt-4 flex flex-col items-center">
              <Button href={getWhatsAppLink()} variant="primary" className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                Escribinos ahora — es gratis
              </Button>
              
              <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6 text-sm text-white/60 font-medium tracking-wide">
                <span>+70 casos ganados</span>
                <span className="text-white/20 mx-1">•</span>
                <span>100% de efectividad</span>
                <span className="text-white/20 mx-1">•</span>
                <span>Consulta confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
