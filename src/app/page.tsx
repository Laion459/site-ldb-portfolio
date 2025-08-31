import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { JsonLd } from '@/components/ui/JsonLd';

// 🚀 Metadados otimizados para SEO
export const metadata: Metadata = {
  title: 'Leonardo - Full Stack Developer | APIs Escaláveis e Seguras',
  description:
    'Portfolio profissional de Leonardo, desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance.',
  keywords: [
    'Full Stack Developer',
    'Backend Engineer',
    'Node.js Developer',
    'Laravel Developer',
    'React Developer',
    'Next.js Developer',
    'API Development',
    'PostgreSQL',
    'Microservices',
    'Web Development',
    'Software Engineer',
    'Brazil Developer',
    'Remote Developer',
  ],
  openGraph: {
    title: 'Leonardo - Full Stack Developer | APIs Escaláveis e Seguras',
    description:
      'Portfolio profissional de Leonardo, desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance.',
    url: 'https://leonardo-portfolio.com',
    siteName: 'Leonardo Portfolio',
    images: [
      {
        url: '/images/profile/leonardo.JPG',
        width: 1200,
        height: 630,
        alt: 'Leonardo - Full Stack Developer Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonardo - Full Stack Developer | APIs Escaláveis e Seguras',
    description:
      'Portfolio profissional de Leonardo, desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance.',
    images: ['/images/profile/leonardo.JPG'],
  },
  alternates: {
    canonical: '/',
  },
};

// 🚀 Dados estruturados para a página principal
const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Leonardo Portfolio - Página Inicial',
  description: 'Portfolio profissional de Leonardo, desenvolvedor Full Stack',
  url: 'https://leonardo-portfolio.com',
  mainEntity: {
    '@type': 'Person',
    name: 'Leonardo',
    jobTitle: 'Full Stack Developer',
    description:
      'Desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance.',
    knowsAbout: [
      'Node.js',
      'Laravel',
      'React',
      'Next.js',
      'PostgreSQL',
      'API Development',
      'Microservices',
      'Full Stack Development',
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://leonardo-portfolio.com',
      },
    ],
  },
};

// 🚀 Configuração para SSG (Static Site Generation)
export const revalidate = 86400; // Revalidar a cada 24 horas

export default function Home() {
  return (
    <>
      {/* 🏷️ Dados estruturados JSON-LD */}
      <JsonLd data={homePageJsonLd} />

      <ThemeProvider>
        <main className='min-h-screen overflow-x-hidden relative'>
          {/* 🧭 Navegação principal */}
          <Navbar />

          {/* 🎯 Seção Hero - H1 principal para SEO */}
          <HeroSection />

          {/* 📖 Seção Sobre - H2 para SEO */}
          <AboutSection />

          {/* 🛠️ Seção Habilidades - H2 para SEO */}
          <SkillsSection />

          {/* 💼 Seção Experiência - H2 para SEO */}
          <ExperienceSection />

          {/* 🚀 Seção Projetos - H2 para SEO */}
          <ProjectsSection />

          {/* 💬 Seção Depoimentos - H2 para SEO */}
          <TestimonialsSection />

          {/* 📞 Seção Contato - H2 para SEO */}
          <ContactSection />

          {/* 🦶 Rodapé com informações de contato */}
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
