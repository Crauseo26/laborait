import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: "Política de Privacidad | Laborait",
  description: "Política de privacidad y protección de datos corporativos de Laborait.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-neutral-50 relative">
      <Header />
      
      <div className="container mx-auto px-4 md:px-6 py-16 flex-1 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 border-b border-neutral-100 pb-6">
            Política de Privacidad
          </h1>
          <div className="prose prose-neutral max-w-none text-neutral-600 space-y-4">
            <p className="font-medium text-neutral-800">
              Última actualización: [Fecha actual]
            </p>
            <p>
              [Este es un documento estructurado de privacidad de datos. Debes rellenar esta sección con las prácticas de retención y manejo de datos de Laborait.]
            </p>
            <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-4">1. Recopilación de Datos</h3>
            <p>
              [Lorem ipsum dolor sit amet, consectetur adipiscing elit. En cumplimiento con la ley de protección de datos personales de Uruguay (Ley N° 18.331).]
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
