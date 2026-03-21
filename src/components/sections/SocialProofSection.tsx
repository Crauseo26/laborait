import React from "react";
import { Card } from "@/components/ui/Card";

export function SocialProofSection() {
  const testimonials = [1, 2, 3];

  return (
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            [Prueba Social: Qué dicen de nosotros]
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            [Descripción breve sobre casos de éxito reales]
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((i) => (
            <Card key={i} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-neutral-300"></div>
                <div>
                  <div className="h-4 w-24 bg-neutral-300 rounded mb-2"></div>
                  <div className="h-3 w-16 bg-neutral-200 rounded"></div>
                </div>
              </div>
              <p className="text-neutral-600 flex-1">
                "[Testimonial Text Here: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.]"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
