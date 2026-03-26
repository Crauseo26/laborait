import React from "react";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

export function FAQSection() {
  const faqs = [
    { 
      question: "\"No tengo plata para pagar un abogado.\"", 
      answer: "No pagás nada por adelantado. Nuestros honorarios son el 20% de lo que se obtenga en el juicio o acuerdo. Si no ganamos, no cobramos absolutamente nada. El riesgo económico es cero de tu lado." 
    },
    { 
      question: "\"Esto va a llevar años y no tengo tiempo.\"", 
      answer: "El proceso dura entre 7 y 18 meses, pero vos no tenés que hacer casi nada durante ese tiempo. Nos das los datos iniciales por WhatsApp, nosotros manejamos todo. Podés buscar otro trabajo tranquilamente mientras el proceso avanza." 
    },
    { 
      question: "\"Seguro no se puede ganar contra esas empresas.\"", 
      answer: "Tenemos más de 70 casos resueltos contra Uber, Cabify y PedidosYa en Uruguay, con 100% de efectividad. La jurisprudencia laboral uruguaya reconoce esta situación. No es una apuesta: es un proceso con precedente." 
    },
    { 
      question: "\"¿Y si me complica más las cosas?\"", 
      answer: "Tu cuenta ya está bloqueada. El proceso legal es completamente independiente de tu situación con la app. No puede empeorar lo que ya pasó. Lo único que puede pasar es que cobres lo que ya te deben." 
    },
    { 
      question: "\"No confío en los abogados.\"", 
      answer: "Razonable. Por eso la consulta inicial es gratis, sin papeles, por WhatsApp. Sin firmar nada, sin comprometerte a nada. Si después de hablar no te convence, no hay ninguna obligación. Empezá por averiguar." 
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
              Las preguntas que todos hacen antes de escribirnos.
            </h2>
          </div>
          
          <div className="mb-12">
            <Accordion items={faqs} />
          </div>
          
          <div className="mt-16 text-center bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-balance">
              Si queda alguna duda, la respondemos en el momento.
            </h3>
            <Link 
              href="https://wa.me/message/XXXX"
              className="group inline-flex items-center text-lg md:text-xl font-bold text-white transition duration-300 bg-primary-900 hover:bg-primary-800 px-6 md:px-8 py-4 rounded-xl shadow-md hover:shadow-lg text-center leading-snug"
            >
              → Escribinos por WhatsApp — sin formularios, sin turnos, sin compromiso.
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
