import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { BrandMarquee } from '@/components/sections/BrandMarquee';
import { ViscoseSection } from '@/components/sections/ViscoseSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ShowreelSection } from '@/components/sections/ShowreelSection';
import { TextRevealSection } from '@/components/sections/TextRevealSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandMarquee />
        <ViscoseSection />
        <BrandMarquee />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ShowreelSection />
        <TextRevealSection />
        <ProcessSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
