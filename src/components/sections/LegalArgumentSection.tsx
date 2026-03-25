import React from "react";
import Link from "next/link";

export function LegalArgumentSection() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
              La razón por la que esto sí funciona.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start w-full">
            {/* Left Column: Legal Argument */}
            <div className="flex flex-col space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed text-balance">
              <p>
                <strong>Uber, Cabify y PedidosYa operan como si fueran tus jefes:</strong> te dicen cómo trabajar, cuánto cobrar y te pueden suspender cuando quieren.
              </p>
              <div className="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                <p className="font-semibold text-slate-900">
                  Para la ley laboral uruguaya, eso tiene un nombre: <span className="text-emerald-600">relación de dependencia.</span>
                </p>
              </div>
              <p>
                Y si hay relación de dependencia, hay derechos: aguinaldo, vacaciones pagas, horas extras, licencia. Todo lo que nunca te pagaron.
              </p>
              
              <div className="flex items-start space-x-3 text-sm md:text-base bg-slate-100 p-4 rounded-lg mt-4 text-slate-600">
                <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                <p>
                  La justicia laboral uruguaya ya reconoció esta situación en decenas de casos. No es un vacío legal ni una teoría: es <strong>jurisprudencia establecida</strong>.
                </p>
              </div>
            </div>

            {/* Right Column: Amounts */}
            <div className="flex flex-col w-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transform transition duration-500 hover:shadow-xl">
              <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between text-white">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  Montos Referenciales
                </h3>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col space-y-6">
                
                <div className="flex flex-col border-b border-slate-100 pb-4">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Choferes con 2 años en la app</span>
                  <span className="text-2xl md:text-3xl font-bold text-slate-800">desde USD 10.000 <span className="text-lg font-normal text-slate-500">promedio</span></span>
                </div>

                <div className="flex flex-col border-b border-slate-100 pb-4">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Choferes con 3 a 4 años</span>
                  <span className="text-2xl md:text-3xl font-bold text-slate-800">USD 20k a USD 35k</span>
                </div>

                <div className="flex flex-col pb-2">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Choferes con más de 5 años</span>
                  <span className="text-2xl md:text-3xl font-bold text-emerald-600">hasta USD 50.000+</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-100 flex items-start gap-3 mt-2">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <p>Estos montos incluyen el bloqueo como despido. <strong>Si te bloquearon, reclamás más.</strong></p>
                </div>

              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="https://wa.me/message/XXXX" // TODO: Add real WhatsApp link or use the global CTA trigger
              className="group inline-flex items-center text-lg md:text-xl font-medium text-emerald-600 hover:text-emerald-700 transition duration-300"
            >
              <span className="border-b border-emerald-200 group-hover:border-emerald-600 pb-1 transition duration-300">
                ¿Querés saber cuánto podrías reclamar vos? <span className="font-bold">→ Escribinos y lo calculamos gratis.</span>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
