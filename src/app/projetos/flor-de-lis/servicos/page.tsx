import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';

import { services } from '@/data/flor-de-lis/services';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços - Estética Flor de Lis',
  description:
    'Conheça todos os nossos serviços de beleza e estética com preços e detalhes',
};

export default function ServicosPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'>
          <div className='container-custom text-center'>
            <h1 className='text-5xl md:text-6xl font-playfair font-bold text-salon-darkPink mb-6'>
              Nossos Serviços
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Oferecemos uma ampla gama de serviços de beleza com qualidade
              profissional, produtos de primeira linha e atendimento
              personalizado
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-20 bg-white'>
          <div className='container-custom'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {services.map(service => (
                <div
                  key={service.id}
                  id={service.id}
                  className='bg-white rounded-2xl shadow-custom overflow-hidden'
                >
                  <div className='md:flex'>
                    <div className='md:w-1/2 relative h-64 md:h-auto'>
                      <Image
                        src={service.image}
                        alt={service.description}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='md:w-1/2 p-8'>
                      <h3 className='text-3xl font-playfair font-bold text-salon-darkPink mb-4'>
                        {service.title}
                      </h3>
                      <p className='text-gray-600 mb-6 leading-relaxed'>
                        {service.description}
                      </p>

                      <div className='space-y-4 mb-6'>
                        {service.price && (
                          <div className='flex items-center'>
                            <span className='text-2xl font-bold text-salon-pink mr-3'>
                              {service.price}
                            </span>
                          </div>
                        )}

                        {service.duration && (
                          <div className='flex items-center text-gray-600'>
                            <span className='w-5 h-5 bg-salon-lightPink rounded-full mr-3 flex items-center justify-center'>
                              ⏱
                            </span>
                            <span>Duração: {service.duration}</span>
                          </div>
                        )}
                      </div>

                      {service.features && (
                        <div className='mb-6'>
                          <h4 className='font-semibold text-salon-darkPink mb-3'>
                            O que está incluído:
                          </h4>
                          <ul className='space-y-2'>
                            {service.features.map(feature => (
                              <li
                                key={feature}
                                className='flex items-center text-gray-600'
                              >
                                <span className='w-2 h-2 bg-salon-pink rounded-full mr-3 flex-shrink-0' />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Link
                        href='/projetos/flor-de-lis/contato'
                        className='btn-primary w-full text-center hover:bg-salon-darkPink transition-colors duration-300'
                      >
                        Agendar Horário
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-salon-pink to-salon-darkPink'>
          <div className='container-custom text-center'>
            <h2 className='text-4xl md:text-5xl font-playfair font-bold text-white mb-6'>
              Pronto para se Transformar?
            </h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Entre em contato conosco e agende seu horário. Nossa equipe está
              pronta para cuidar da sua beleza com carinho e profissionalismo.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/projetos/flor-de-lis/contato'
                className='btn-secondary bg-white text-salon-darkPink hover:bg-gray-100 px-8 py-4 text-lg'
              >
                Agendar Horário
              </Link>
              <Link
                href='tel:+5511999999999'
                className='btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-salon-darkPink px-8 py-4 text-lg'
              >
                Ligar Agora
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
