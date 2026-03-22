import React from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "./Button";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-md border-t border-neutral-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] sm:hidden">
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
