import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='sobre' className='py-20 bg-white'>
      <div className='container-custom px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Conteúdo */}
          <div>
            <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-8'>
              Sobre Gabriela
            </h2>

            <div className='space-y-6 text-gray-600 leading-relaxed'>
              <p className='text-lg'>
                Soy una peluquera profesional especializada en colorimetría, con
                formación en diversos países. Mi trayectoria incluye una amplia
                gama de servicios como cortes, mechas, luces, peinados y
                coloración.
              </p>

              <p className='text-lg'>
                Me destaco por mi dedicación a la excelencia y mi habilidad para
                realzar la belleza natural de cada cliente a través de técnicas
                innovadoras y personalizadas.
              </p>

              <p className='text-lg font-semibold text-salon-pink'>
                ¡Porque cada clienta es única!
              </p>
            </div>

            {/* Especializações */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
              <div className='bg-salon-lightPink p-6 rounded-2xl'>
                <div className='flex items-center space-x-3 mb-3'>
                  <div className='w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center'>
                    <span className='text-white text-lg'>🎨</span>
                  </div>
                  <h3 className='font-semibold text-salon-darkPink'>
                    Colorimetría
                  </h3>
                </div>
                <p className='text-gray-600 text-sm'>
                  Especialista em técnicas avançadas de coloração e correção de
                  cor
                </p>
              </div>

              <div className='bg-salon-lightPink p-6 rounded-2xl'>
                <div className='flex items-center space-x-3 mb-3'>
                  <div className='w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center'>
                    <span className='text-white text-lg'>✂️</span>
                  </div>
                  <h3 className='font-semibold text-salon-darkPink'>Cortes</h3>
                </div>
                <p className='text-gray-600 text-sm'>
                  Cortes modernos e clássicos personalizados para cada tipo de
                  rosto
                </p>
              </div>

              <div className='bg-salon-lightPink p-6 rounded-2xl'>
                <div className='flex items-center space-x-3 mb-3'>
                  <div className='w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center'>
                    <span className='text-white text-lg'>💫</span>
                  </div>
                  <h3 className='font-semibold text-salon-darkPink'>Mechas</h3>
                </div>
                <p className='text-gray-600 text-sm'>
                  Técnicas especializadas para criar volume e movimento natural
                </p>
              </div>

              <div className='bg-salon-lightPink p-6 rounded-2xl'>
                <div className='flex items-center space-x-3 mb-3'>
                  <div className='w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center'>
                    <span className='text-white text-lg'>🌟</span>
                  </div>
                  <h3 className='font-semibold text-salon-darkPink'>
                    Peinados
                  </h3>
                </div>
                <p className='text-gray-600 text-sm'>
                  Peinados para eventos especiales e finalizaciones
                  profissionais
                </p>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className='relative'>
            <div className='relative h-96 rounded-3xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/gabriela-n/pao.webp'
                alt='Gabriela N trabajando'
                fill
                className='object-cover'
              />
            </div>

            {/* Badge de Experiência */}
            <div className='absolute -bottom-6 -right-6 bg-salon-pink text-white p-6 rounded-2xl shadow-lg'>
              <div className='text-center'>
                <div className='text-3xl font-bold'>15+</div>
                <div className='text-sm'>Años de</div>
                <div className='text-sm'>Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
