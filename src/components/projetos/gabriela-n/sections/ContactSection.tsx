import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { contactInfo } from '@/data/projetos/gabriela-n/contact';

export default function ContactSection() {
  return (
    <section
      id='contato'
      className='py-20 bg-gradient-to-b from-salon-lightPink to-white'
    >
      <div className='container-custom px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'>
            Nuestros Contactos
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Estamos aquí para cuidar de tu belleza. ¡Entre en contacto y agenda
            tu cita!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Informações de Contato */}
          <div className='space-y-8'>
            {/* Endereço */}
            <div className='bg-white p-8 rounded-2xl shadow-custom'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                    Dirección
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Telefone */}
            <div className='bg-white p-8 rounded-2xl shadow-custom'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                    Teléfono
                  </h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className='text-salon-pink hover:text-salon-darkPink transition-colors duration-300 text-lg font-medium'
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className='bg-white p-8 rounded-2xl shadow-custom'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                  <Clock className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                    Horarios de Atención
                  </h3>
                  <div className='space-y-2 text-gray-600'>
                    <div className='flex justify-between'>
                      <span>Lunes - Viernes:</span>
                      <span className='font-medium'>9:00 - 19:00</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Sábados:</span>
                      <span className='font-medium'>9:00 - 17:00</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Domingos:</span>
                      <span className='font-medium'>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className='bg-white p-8 rounded-2xl shadow-custom'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                    Email
                  </h3>
                  <a
                    href='mailto:gabriela@colorist.com'
                    className='text-salon-pink hover:text-salon-darkPink transition-colors duration-300'
                  >
                    gabriela@colorist.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa e CTA */}
          <div className='space-y-8'>
            {/* Mapa */}
            <div className='bg-white p-6 rounded-2xl shadow-custom'>
              <h3 className='text-xl font-semibold text-salon-darkPink mb-4'>
                Ubicación
              </h3>
              <div className='relative h-80 rounded-xl overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5947.351934653607!2d-48.379344155459705!3d-27.445930273121252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f9bf003cdcd253:0x5554339dd76865ff!2sFlor%20De%20Lis%20sal%C3%A3o%20de%20beleza!5e1!3m2!1spt-BR!2sbr!4v1708608906833!5m2!1spt-BR!2sbr'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Ubicación de Gabriela N - Colorist Hair'
                />
              </div>
            </div>

            {/* CTA WhatsApp */}
            <div className='bg-gradient-to-r from-salon-pink to-salon-darkPink p-8 rounded-2xl text-white text-center'>
              <h3 className='text-2xl font-playfair font-bold mb-4'>
                ¿Lista para tu transformación?
              </h3>
              <p className='text-white/90 mb-6'>
                Agenda tu cita ahora mismo y descubre el poder de un cabello
                perfecto
              </p>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white text-salon-darkPink px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                </svg>
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
