import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full pb-20 sm:pb-0 relative">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <FAQSection />
      <FloatingCTA />
    </main>
  );
}
