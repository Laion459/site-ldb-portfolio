import Image from 'next/image';
import { brandLogos } from '@/data/projetos/gabriela-n/brands';

export default function BrandsSection() {
  return (
    <section id='productos' className='py-20 bg-white'>
      <div className='container-custom px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'>
            Productos
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Algunas marcas con las que trabajamos. Utilizamos solo productos de
            primera línea para garantizar los mejores resultados en tu cabello.
          </p>
        </div>

        {/* Grid de Logos das Marcas */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {brandLogos.map(brand => (
            <div
              key={brand.id}
              className='group bg-white p-6 rounded-2xl shadow-custom hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100'
            >
              <div className='relative h-24 flex items-center justify-center'>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={80}
                  className='max-h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                />
              </div>

              <div className='text-center mt-4'>
                <h3 className='font-semibold text-salon-darkPink group-hover:text-salon-pink transition-colors duration-300'>
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Informação sobre Produtos */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-salon-lightPink to-white rounded-3xl p-8 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
              ¿Por qué elegir productos de primera línea?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl'>✨</span>
                </div>
                <h4 className='font-semibold text-salon-darkPink mb-2'>
                  Calidad Superior
                </h4>
                <p className='text-gray-600 text-sm'>
                  Productos formulados con ingredientes de alta calidad para
                  resultados excepcionales
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl'>🛡️</span>
                </div>
                <h4 className='font-semibold text-salon-darkPink mb-2'>
                  Seguridad Garantizada
                </h4>
                <p className='text-gray-600 text-sm'>
                  Productos testados dermatológicamente y seguros para todos los
                  tipos de cabello
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl'>💎</span>
                </div>
                <h4 className='font-semibold text-salon-darkPink mb-2'>
                  Resultados Duraderos
                </h4>
                <p className='text-gray-600 text-sm'>
                  Efectos que perduran en el tiempo, manteniendo tu cabello
                  saludable y hermoso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <a
            href='https://wa.me/543755698271'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary text-lg px-8 py-4 hover:bg-salon-darkPink transition-all duration-300 inline-flex items-center justify-center'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
            </svg>
            Consultar Productos
          </a>
        </div>
      </div>
    </section>
  );
}
