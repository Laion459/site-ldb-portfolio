import { Metadata } from 'next';
import Header from '@/components/projetos/gabriela-n/layout/Header';
import Footer from '@/components/projetos/gabriela-n/layout/Footer';
import HeroSection from '@/components/projetos/gabriela-n/sections/HeroSection';
import AboutSection from '@/components/projetos/gabriela-n/sections/AboutSection';
import PortfolioSection from '@/components/projetos/gabriela-n/sections/PortfolioSection';
import BrandsSection from '@/components/projetos/gabriela-n/sections/BrandsSection';
import ContactSection from '@/components/projetos/gabriela-n/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Gabriela N - Colorist Hair | Especialista en Colorimetría',
  description:
    'Especialista en colorimetría con formación internacional. Transformando cabelos e criando experiências únicas de beleza com técnicas avançadas.',
};

export default function GabrielaNPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <BrandsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
