import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import HeroSection from '@/components/projetos/flor-de-lis/sections/HeroSection';
import ServicesSection from '@/components/projetos/flor-de-lis/sections/ServicesSection';
import ContactSection from '@/components/projetos/flor-de-lis/sections/ContactSection';
import { JsonLd } from '@/components/ui/JsonLd';

// 🚀 Metadados otimizados para SEO
export const metadata: Metadata = {
  title: 'Estética Flor de Lis - Beleza & Bem-estar | Leonardo Portfolio',
  description:
    'Salão de beleza especializado em tratamentos personalizados. Cortes, coloração, depilação, manicure e muito mais em Santinho, SC. Projeto desenvolvido por Leonardo - Full Stack Developer.',
  keywords: [
    'salão de beleza',
    'estética',
    'corte de cabelo',
    'coloração',
    'depilação',
    'manicure',
    'Santinho SC',
    'tratamentos de beleza',
    'salão feminino',
    'beleza e bem-estar',
  ],
  openGraph: {
    title: 'Estética Flor de Lis - Beleza & Bem-estar',
    description:
      'Salão de beleza especializado em tratamentos personalizados. Cortes, coloração, depilação, manicure e muito mais em Santinho, SC.',
    url: 'https://leonardo-portfolio.com/projetos/flor-de-lis',
    siteName: 'Leonardo Portfolio',
    images: [
      {
        url: '/images/flor-de-lis/agenda.webp',
        width: 1200,
        height: 630,
        alt: 'Estética Flor de Lis - Salão de Beleza',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estética Flor de Lis - Beleza & Bem-estar',
    description:
      'Salão de beleza especializado em tratamentos personalizados. Cortes, coloração, depilação, manicure e muito mais em Santinho, SC.',
    images: ['/images/flor-de-lis/agenda.webp'],
  },
  alternates: {
    canonical: '/projetos/flor-de-lis',
  },
};

// 🚀 Dados estruturados para o projeto
const projectJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Estética Flor de Lis',
  description:
    'Website para salão de beleza especializado em tratamentos personalizados',
  url: 'https://leonardo-portfolio.com/projetos/flor-de-lis',
  author: {
    '@type': 'Person',
    name: 'Leonardo',
    jobTitle: 'Full Stack Developer',
    url: 'https://leonardo-portfolio.com',
  },
  creator: {
    '@type': 'Person',
    name: 'Leonardo',
    jobTitle: 'Full Stack Developer',
  },
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  genre: 'Website',
  keywords: 'salão de beleza, estética, website, desenvolvimento web',
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Leonardo Portfolio',
    url: 'https://leonardo-portfolio.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Salão de Beleza',
    description: 'Estética especializada em tratamentos de beleza e bem-estar',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Clientes de salão de beleza',
  },
};

// 🚀 Configuração ISR (Incremental Static Regeneration)
export const revalidate = 2592000; // Revalidar a cada 30 dias

export default function FlorDeLisPage() {
  return (
    <>
      {/* 🏷️ Dados estruturados JSON-LD */}
      <JsonLd data={projectJsonLd} />

      <div className='min-h-screen bg-white'>
        <Header />
        <main>
          {/* 🎯 Seção Hero - H1 principal para SEO */}
          <HeroSection />

          {/* 📖 Seção de Destaque - H2 para hierarquia SEO */}
          <section
            className='py-20 bg-gradient-to-b from-salon-cream to-white'
            aria-labelledby='destaque-title'
          >
            <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
              <div className='text-center mb-16'>
                <h2
                  id='destaque-title'
                  className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'
                >
                  Por que escolher a Flor de Lis?
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                  Descubra o que nos torna únicos no mundo da beleza e bem-estar
                </p>
              </div>

              <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center p-6'>
                  <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                    <span
                      className='text-white text-3xl'
                      role='img'
                      aria-label='Estrela brilhante'
                    >
                      ✨
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                    Excelência Garantida
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Utilizamos apenas produtos premium e técnicas avançadas para
                    resultados que superam expectativas.
                  </p>
                </div>

                <div className='text-center p-6'>
                  <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                    <span
                      className='text-white text-3xl'
                      role='img'
                      aria-label='Coração'
                    >
                      💝
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                    Cuidado Personalizado
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Cada cliente recebe atenção individualizada, com tratamentos
                    adaptados às suas necessidades únicas.
                  </p>
                </div>

                <div className='text-center p-6'>
                  <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                    <span
                      className='text-white text-3xl'
                      role='img'
                      aria-label='Estrela'
                    >
                      🌟
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                    Tradição e Inovação
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    Combinamos anos de experiência com as mais recentes
                    tendências e tecnologias do mercado.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 🛠️ Seção de Serviços - H2 para hierarquia SEO */}
          <ServicesSection />

          {/* 📞 Seção de Contato - H2 para hierarquia SEO */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
