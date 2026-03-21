import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FAQSection() {
  const faqs = [
    { question: "[Pregunta Frecuente 1: Lorem ipsum dolor sit amet?]", answer: "[Respuesta extendida 1: Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]" },
    { question: "[Pregunta Frecuente 2: Ut enim ad minim veniam?]", answer: "[Respuesta extendida 2: Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.]" },
    { question: "[Pregunta Frecuente 3: Duis aute irure dolor in reprehenderit?]", answer: "[Respuesta extendida 3: In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.]" },
    { question: "[Pregunta Frecuente 4: Sunt in culpa qui officia?]", answer: "[Respuesta extendida 4: Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.]" },
  ];

  return (
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
              [Preguntas Frecuentes]
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              [Resolvemos tus dudas más comunes antes de empezar]
            </p>
          </div>
          
          <Accordion items={faqs} />
          
          <div className="mt-12 text-center bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              [¿Todavía tienes dudas?]
            </h3>
            <p className="text-neutral-600 mb-6 max-w-[500px] mx-auto">
              [Escríbenos directamente y un asesor te responderá a la brevedad posible.]
            </p>
            <Button href={getWhatsAppLink()} variant="primary">
              [Contactar por WhatsApp]
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
