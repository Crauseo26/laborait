import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-primary-950 text-white pt-16 pb-24 sm:pb-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Brand & Mission */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">Laborait</h3>
            <p className="text-primary-200 text-sm max-w-sm leading-relaxed">
              [Compromiso Legal: Protegemos tus derechos laborales con profesionalismo y estricta confidencialidad. Especialistas en derecho del trabajo en Uruguay.]
            </p>
          </div>

          {/* Institutional Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary-400">
              Contacto Institucional
            </h4>
            <div className="flex flex-col gap-3 text-primary-200 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-lg">📍</span> 
                [Dirección: Ej. 18 de Julio 1234, Of 502, Montevideo]
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">✉️</span> 
                [Email: consultas@laborait.uy]
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">📞</span> 
                [Teléfono: +598 2123 4567]
              </p>
            </div>
          </div>

          {/* Legal Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary-400">
              Legales
            </h4>
            <nav className="flex flex-col gap-3 text-sm text-primary-200">
              <Link href="/terminos" className="hover:text-white transition-colors block">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="hover:text-white transition-colors block">
                Política de Privacidad
              </Link>
            </nav>
          </div>
          
        </div>
        
        <div className="w-full h-px bg-primary-800 my-10"></div>
        
        <div className="flex justify-center md:justify-start items-center text-xs text-primary-400">
          <p>© {new Date().getFullYear()} Laborait. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
