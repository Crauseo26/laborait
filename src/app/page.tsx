import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { MirrorSection } from "@/components/sections/MirrorSection";
import { LegalArgumentSection } from "@/components/sections/LegalArgumentSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { Footer } from "@/components/ui/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full pb-20 sm:pb-0 relative">
      <Header />
      <HeroSection />
      <MirrorSection />
      <LegalArgumentSection />
      <SocialProofSection />
      <BenefitsSection />
      <FAQSection />
      <AuthoritySection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
