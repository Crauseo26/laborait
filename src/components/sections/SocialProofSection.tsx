import React from "react";
import Link from "next/link";

export function SocialProofSection() {
  const stats = [
    { label: "casos resueltos", value: "+70" },
    { label: "efectividad", value: "100%" },
    { label: "promedio recuperado", value: "USD 22k" },
    { label: "tiempo promedio", value: "< 14 meses" },
  ];

  const cases = [
    {
      platform: "Uber",
      years: "3 años en la plataforma",
      situation: "Cuenta bloqueada sin aviso",
      result: "USD 24.500",
      resolution: "Acuerdo extrajudicial · 10 meses",
      quote: "No creía que fuera posible. Pensé que era una pérdida de tiempo. Me equivoqué.",
    },
    {
      platform: "Cabify",
      years: "2 años y medio",
      situation: "Baja voluntaria",
      result: "USD 15.800",
      resolution: "Sentencia favorable · 13 meses",
      quote: "Nunca había ido a la justicia en mi vida. El proceso fue mucho más simple de lo que esperaba.",
    },
    {
      platform: "Uber",
      years: "5 años en la plataforma",
      situation: "Desactivación repentina",
      result: "USD 41.000",
      resolution: "Acuerdo · 14 meses",
      quote: "Estaba convencido de que iban a ganar ellos. Que no había forma. Estaba equivocado.",
    },
  ];

  return (
    <section className="w-full bg-primary-900 py-16 md:py-24 overflow-hidden text-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-4 border border-primary-800 bg-primary-800/20 rounded-2xl shadow-sm">
              <span className="text-3xl md:text-4xl font-extrabold text-secondary-base mb-1">{stat.value}</span>
              <span className="text-sm md:text-base font-medium text-neutral-300 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance mx-auto max-w-3xl">
            Choferes como vos que ya cobraron lo suyo.
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cases.map((caseItem, idx) => (
            <article key={idx} className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-1">
              
              {/* Header (Situation) */}
              <div className="bg-slate-50 border-b border-slate-100 p-6 flex flex-col space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-100 text-primary-900 text-xs font-bold uppercase tracking-wide">
                    {caseItem.platform}
                  </span>
                  <span className="text-xs font-medium text-slate-500 uppercase">{caseItem.years}</span>
                </div>
                <h3 className="font-semibold text-slate-800 text-lg">{caseItem.situation}</h3>
              </div>

              {/* Body (Result) */}
              <div className="p-6 flex flex-col items-center text-center flex-1 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Resultado</span>
                <span className="text-3xl font-extrabold text-emerald-600 mb-2">{caseItem.result}</span>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <svg className="w-4 h-4 text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {caseItem.resolution}
                </div>
              </div>

              {/* Footer (Quote) */}
              <div className="p-6 bg-slate-50 flex items-start flex-1 gap-3 border-t border-slate-100">
                <svg className="w-8 h-8 text-slate-300 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                <p className="italic text-slate-600 text-[15px] leading-relaxed">
                  "{caseItem.quote}"
                </p>
              </div>

            </article>
          ))}
        </div>

        {/* Post-CTA */}
        <div className="mt-8 text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-xl md:text-2xl font-medium text-white mb-6">
            Tu caso podría ser el siguiente. <span className="text-neutral-300">La consulta es gratis.</span>
          </p>
          <Link 
            href="https://wa.me/message/XXXX"
            className="group inline-flex items-center text-lg md:text-xl font-bold text-secondary-base hover:text-white transition duration-300 bg-primary-800/50 hover:bg-primary-800 border border-primary-700 hover:border-secondary-base px-6 py-4 rounded-xl"
          >
            → Escribinos por WhatsApp y evaluamos tu situación sin compromiso.
          </Link>
        </div>

      </div>
    </section>
  );
}
