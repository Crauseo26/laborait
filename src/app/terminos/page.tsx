import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: "Términos y Condiciones | Laborait",
  description: "Términos y condiciones legales de uso de los servicios de Laborait.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-neutral-50 relative">
      <Header />
      
      <div className="container mx-auto px-4 md:px-6 py-16 flex-1 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 border-b border-neutral-100 pb-6">
            Términos y Condiciones
          </h1>
          <div className="prose prose-neutral max-w-none text-neutral-600 space-y-4">
            <p className="font-medium text-neutral-800">
              Última actualización: [Fecha actual]
            </p>
            <p>
              [Este es un documento estructurado de ejemplo. Debes rellenar esta sección con el contenido legal formal redactado por un abogado o profesional.]
            </p>
            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">1. Aceptación de los Términos</h3>
            <p>
              [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
