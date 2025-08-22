import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import HeroSection from '@/components/projetos/flor-de-lis/sections/HeroSection';
import ServicesSection from '@/components/projetos/flor-de-lis/sections/ServicesSection';
import ContactSection from '@/components/projetos/flor-de-lis/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Estética Flor de Lis - Beleza & Bem-estar',
  description:
    'Salão de beleza especializado em tratamentos personalizados. Cortes, coloração, depilação, manicure e muito mais em Santinho, SC.',
};

export default function FlorDeLisPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <HeroSection />

        {/* Seção de Destaque */}
        <section className='py-20 bg-gradient-to-b from-salon-cream to-white'>
          <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'>
                Por que escolher a Flor de Lis?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Descubra o que nos torna únicos no mundo da beleza e bem-estar
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center p-6'>
                <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-white text-3xl'>✨</span>
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
                  <span className='text-white text-3xl'>💝</span>
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
                  <span className='text-white text-3xl'>🌟</span>
                </div>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                  Tradição e Inovação
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  Combinamos anos de experiência com as mais recentes tendências
                  e tecnologias do mercado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
