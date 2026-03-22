import React from "react";
import { Card } from "@/components/ui/Card";

export function BenefitsSection() {
  const features = [1, 2, 3, 4];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            [Beneficios: Por qué elegirnos]
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            [Detalle de los principales diferenciadores y características]
          </p>
        </div>
        
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {features.map((feature) => (
            <div key={feature} className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto">
              <Card className="p-6 md:p-8 h-full">
                <div className="w-12 h-12 bg-neutral-200 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-neutral-400 text-xs">[Icon]</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  [Beneficio {feature}]
                </h3>
                <p className="text-neutral-600">
                  [Descripción del beneficio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.]
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
