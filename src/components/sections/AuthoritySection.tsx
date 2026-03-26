import React from "react";
import Link from "next/link";
import Image from "next/image";

export function AuthoritySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shrink-0 border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Jorge, Abogado Laboralista"
                className="object-cover w-full h-full"
                width={340}
                height={425}
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary-600 rounded-full animate-pulse"></span>
                  <p className="text-sm font-bold text-slate-800 tracking-wide uppercase">Ex-Chofer de Uber</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Quién está del otro lado del WhatsApp.
            </h2>
            
            <div className="flex flex-col space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                Soy Jorge, abogado laboralista. <span className="font-bold text-slate-900 bg-primary-100 px-1 py-0.5 rounded">Pero antes de ser abogado, fui chofer de Uber.</span>
              </p>
              <p>
                Conozco el sistema desde adentro: las reglas arbitrarias, los cambios de comisión sin aviso, la sensación de que no tenés a quién reclamarle. Lo viví.
              </p>
              <p>
                Cuando empecé a especializarme en derecho laboral y vi que la ley uruguaya reconocía exactamente esta situación, decidí enfocarme en esto.
              </p>
              
              <div className="bg-slate-50 border-l-4 border-primary-800 p-5 rounded-r-xl my-2">
                <p className="font-bold text-slate-900 mb-2">Hoy tengo más de 70 casos favorables — acuerdos y sentencias — contra Uber, Cabify y PedidosYa. Ninguno en contra.</p>
                <div className="flex items-start md:items-center gap-2 text-primary-800 mt-3">
                  <svg className="w-6 h-6 shrink-0 mt-0.5 md:mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Cobro el 20% de lo que se obtiene. <strong>Si no ganamos, no cobro nada.</strong> Esa es mi garantía.</span>
                </div>
              </div>

              <p>
                El proceso lo tengo muy bien aceitado: vos me mandás los datos, yo manejo todo y te explico cada paso para que nunca estés perdido.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-2">
              <p className="text-[17px] text-slate-600 mb-4 italic">
                Si querés hablar, escribime directamente. Sin secretarias, sin formularios.
              </p>
              <Link 
                href="https://wa.me/message/XXXX"
                className="group inline-flex items-center text-lg md:text-xl font-bold text-white transition duration-300 bg-primary-900 hover:bg-primary-800 px-6 sm:px-8 py-4 rounded-xl shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                → Escribime por WhatsApp — respondo yo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
