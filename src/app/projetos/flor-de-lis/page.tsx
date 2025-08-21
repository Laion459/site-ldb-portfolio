import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import HeroSection from '@/components/projetos/flor-de-lis/sections/HeroSection';
import ServicesSection from '@/components/projetos/flor-de-lis/sections/ServicesSection';
import ContactSection from '@/components/projetos/flor-de-lis/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Estética Flor de Lis - Beleza & Bem-estar',
  description:
    'Salão de beleza com mais de 25 anos de experiência. Cortes, coloração, depilação, manicure e muito mais em Santinho, SC.',
};

export default function FlorDeLisPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <HeroSection />

        {/* Seção de Destaque */}
        <section className='py-20 bg-gradient-to-b from-salon-cream to-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'>
                Por que escolher a Flor de Lis?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Mais de 25 anos de dedicação à beleza e ao bem-estar de nossos
                clientes
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center p-6'>
                <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-white text-3xl'>✨</span>
                </div>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                  Qualidade Garantida
                </h3>
                <p className='text-gray-600'>
                  Utilizamos apenas produtos de primeira linha e técnicas
                  comprovadas para garantir resultados excepcionais.
                </p>
              </div>

              <div className='text-center p-6'>
                <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-white text-3xl'>💝</span>
                </div>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                  Atendimento Personalizado
                </h3>
                <p className='text-gray-600'>
                  Cada cliente é único. Oferecemos tratamentos personalizados
                  que respeitam suas características individuais.
                </p>
              </div>

              <div className='text-center p-6'>
                <div className='w-20 h-20 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-white text-3xl'>🌟</span>
                </div>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                  Experiência Comprovada
                </h3>
                <p className='text-gray-600'>
                  Nossa equipe possui vasta experiência e está sempre atualizada
                  com as últimas tendências e técnicas.
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
