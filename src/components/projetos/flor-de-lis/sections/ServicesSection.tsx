'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/flor-de-lis/services';

export default function ServicesSection() {
  return (
    <section className='py-20 bg-gradient-to-b from-white to-salon-lightPink'>
      <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'>
            Nossos Serviços
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Descubra nossa coleção exclusiva de tratamentos de beleza,
            desenvolvidos para realçar sua beleza natural e elevar sua confiança
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(service => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-white rounded-2xl shadow-custom overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl'>
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={service.image}
                    alt={service.description}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-2xl font-playfair font-bold text-white mb-2'>
                      {service.title}
                    </h3>
                    <div className='flex items-center space-x-4 text-white/90 text-sm'>
                      {service.price && (
                        <span className='bg-salon-pink px-3 py-1 rounded-full font-semibold'>
                          {service.price}
                        </span>
                      )}
                      {service.duration && (
                        <span className='bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm'>
                          ⏱ {service.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {service.description}
                  </p>

                  {service.features && (
                    <div className='mb-4'>
                      <h4 className='font-semibold text-salon-darkPink mb-2'>
                        Inclui:
                      </h4>
                      <ul className='space-y-1'>
                        {service.features.map(feature => (
                          <li
                            key={feature}
                            className='flex items-center text-sm text-gray-600'
                          >
                            <span className='w-2 h-2 bg-salon-pink rounded-full mr-2 flex-shrink-0' />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={`/projetos/flor-de-lis/servicos#${service.id}`}
                    className='btn-primary w-full text-center group-hover:bg-salon-darkPink transition-colors duration-300'
                  >
                    Agendar Horário
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            href='/projetos/flor-de-lis/servicos'
            className='btn-secondary text-lg px-8 py-4 hover:bg-salon-darkPink hover:text-white transition-all duration-300'
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
