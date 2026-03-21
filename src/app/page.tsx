import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <FAQSection />
    </main>
  );
}
