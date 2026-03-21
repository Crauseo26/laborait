import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laborait | Potenciando tu futuro en IT",
  description: "Conectamos el mejor talento IT en Montevideo, Uruguay, con oportunidades globales. Da el siguiente paso en tu carrera tecnológica con Laborait.",
  keywords: ["IT", "Trabajo", "Montevideo", "Uruguay", "Desarrollador", "Programador", "Laborait", "Tecnología"],
  openGraph: {
    title: "Laborait | Potenciando tu futuro en IT",
    description: "Conectamos el mejor talento IT en Montevideo, Uruguay, con oportunidades globales.",
    url: "https://laborait.uy",
    siteName: "Laborait",
    locale: "es_UY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
