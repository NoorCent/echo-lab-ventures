import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BackgroundMotion } from '@/components/BackgroundMotion';
import { StatsSection } from '@/components/StatsSection';
import { WaveDivider } from '@/components/WaveDivider';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
import { CTABanner } from '@/components/CTABanner';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <BackToTop />
      <BackgroundMotion />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <WaveDivider />
      <div id="main-content" />
      <StatsSection />
      {/* TODO: Implement the detail part here. */}
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <TeamSection />
      <SkillsSection />
      to 
      {/* TODO: Implement the detail part here. */}
      <ProcessSection />
      <CTABanner />
      <div className="min-h-[5rem] bg-[#f5f5f5] md:min-h-[6rem]" aria-hidden />
      <ContactSection />
      <Footer />
      </div>
    </main>
  );
};

export default Index;
