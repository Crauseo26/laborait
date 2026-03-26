import React from "react";
import { Logo } from "@/components/ui/Logo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = getWhatsAppLink(
    "Hola Laborait, quiero más información sobre la gestión de mis infracciones."
  );

  return (
    <footer className="bg-primary-900 text-white">
      {/* ── Final CTA Band ── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-14 flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            ¿Listo para empezar?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-xl leading-tight">
            Dejá de preocuparte por las multas. <br className="hidden sm:block" />
            Hablá con nosotros hoy.
          </h2>
          <p className="text-white/60 max-w-sm text-base">
            Sin formularios ni esperas. Una respuesta simple y directa por
            WhatsApp.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary-base hover:bg-secondary-hover text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors duration-200 min-h-[56px] shadow-lg shadow-black/30 animate-[cta-pulse_2.5s_infinite]"
          >
            {/* Inline WhatsApp SVG — no library */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.859a.5.5 0 0 0 .6.601l6.093-1.476A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.006-1.371l-.36-.214-3.718.9.939-3.632-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
            </svg>
            Contactar por WhatsApp
          </a>
          <p className="text-white/40 text-xs">⚡ Respuesta en menos de 5 minutos</p>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo className="h-6 w-auto opacity-60" />
        <p className="text-white/30 text-xs text-center order-last sm:order-none">
          © {currentYear} Laborait. Todos los derechos reservados.
        </p>
        <nav
          aria-label="Legal"
          className="flex gap-5 text-xs text-white/40"
        >
          <a href="#" className="hover:text-white/70 transition-colors duration-200">
            Privacidad
          </a>
          <a href="#" className="hover:text-white/70 transition-colors duration-200">
            Términos
          </a>
        </nav>
      </div>
    </footer>
  );
}
