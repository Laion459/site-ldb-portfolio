import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id='principal'
      className='pt-24 pb-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'
    >
      <div className='container-custom px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Imagem Principal */}
          <div className='relative'>
            <div className='relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/gabriela-n/pao-sem-fundo.webp'
                alt='Gabriela N - Colorist Hair'
                fill
                className='object-cover'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            {/* Badge de Especialização */}
            <div className='absolute -bottom-6 -left-6 bg-salon-pink text-white p-4 rounded-2xl shadow-lg'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>🎨</div>
                <div className='text-sm font-semibold'>Colorimetría</div>
                <div className='text-xs opacity-90'>Especialista</div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl lg:text-6xl font-playfair font-bold text-salon-darkPink mb-6'>
              Vivi tu mejor versión!!!
            </h1>

            <div className='space-y-4 mb-8'>
              <p className='text-xl text-gray-600 leading-relaxed'>
                En nuestro salón, encontraras mucho más que un cambio de look, o
                un mantenimiento! Vas a vivir una experiencia genial y completa!
              </p>
              <p className='text-lg text-gray-700 font-medium'>
                No esperes más y agenda tu cita ya mismo.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
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
                Agendar Cita
              </a>

              <Link
                href='/projetos/gabriela-n#portfolio'
                className='btn-secondary text-lg px-8 py-4 hover:bg-salon-darkPink hover:text-white transition-all duration-300'
              >
                Ver Portfólio
              </Link>
            </div>

            {/* Estatísticas */}
            <div className='grid grid-cols-3 gap-6 mt-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-salon-pink'>15+</div>
                <div className='text-sm text-gray-600'>Años de Experiencia</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-salon-pink'>500+</div>
                <div className='text-sm text-gray-600'>
                  Clientes Satisfechas
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-salon-pink'>100%</div>
                <div className='text-sm text-gray-600'>Calidad Garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
