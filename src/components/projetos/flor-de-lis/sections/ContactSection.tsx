'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageCircle, Car } from 'lucide-react';
import { contactInfo } from '@/data/flor-de-lis/contact';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ContactSection() {
  return (
    <section className='py-20 bg-salon-lightPink'>
      <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='font-playfair text-4xl md:text-5xl font-bold text-salon-pink mb-4'>
            Entre em Contato
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Estamos aqui para transformar sua experiência de beleza. Entre em
            contato e descubra como podemos cuidar de você
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'
        >
          {/* Mapa */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <h3 className='font-playfair text-2xl font-bold text-salon-pink mb-4'>
              Localização
            </h3>

            <div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5947.351934653607!2d-48.379344155459705!3d-27.445930273121252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95276b59ab8a3075%3A0x1793e6ffe9a9aa97!2sFlor%20De%20Lis%20sal%C3%A3o%20de%20beleza!5e1!3m2!1spt-BR!2sbr!4v1708608906833!5m2!1spt-BR!2sbr'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-2xl'
              />
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-6 h-6 text-salon-pink mt-1 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold text-gray-800 mb-1'>Endereço</h4>
                  <p className='text-gray-600'>{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <h3 className='font-playfair text-2xl font-bold text-salon-pink mb-4'>
              Informações
            </h3>

            {/* Telefones */}
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-6 h-6 text-salon-pink flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold text-gray-800'>Telefones</h4>
                    <div className='space-y-1'>
                      <p className='text-gray-600'>
                        <span className='font-medium'>Celular:</span>{' '}
                        {contactInfo.whatsapp}
                      </p>
                      <p className='text-gray-600'>
                        <span className='font-medium'>Fixo:</span>{' '}
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h4 className='font-semibold text-gray-800 mb-4'>
                Redes Sociais
              </h4>
              <div className='flex space-x-4'>
                <a
                  href={contactInfo.whatsapp}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-300'
                >
                  <MessageCircle className='w-5 h-5' />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={contactInfo.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors duration-300'
                >
                  <span>Instagram</span>
                </a>
                <a
                  href={contactInfo.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300'
                >
                  <span>Facebook</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors duration-300'
                >
                  <Mail className='w-5 h-5' />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Horários */}
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <div className='flex items-start space-x-3'>
                <Clock className='w-6 h-6 text-salon-pink mt-1 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>Horários</h4>
                  <div className='space-y-1 text-gray-600'>
                    <p>
                      <span className='font-medium'>Segunda a Sexta:</span> 8:00
                      - 19:00
                    </p>
                    <p>
                      <span className='font-medium'>Sábado:</span> 8:00 - 17:00
                    </p>
                    <p>
                      <span className='font-medium'>Domingo:</span> Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estacionamento */}
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <div className='flex items-start space-x-3'>
                <Car className='w-6 h-6 text-salon-pink mt-1 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold text-gray-800 mb-1'>
                    Estacionamento
                  </h4>
                  <p className='text-gray-600'>
                    Estacionamento gratuito disponível
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-salon-pink to-salon-darkPink p-8 rounded-2xl text-white'>
            <h3 className='font-playfair text-3xl font-bold mb-4'>
              Agende seu Horário Hoje!
            </h3>
            <p className='text-lg mb-6 opacity-90'>
              Transforme sua aparência com nossos serviços profissionais
            </p>
            <a
              href={contactInfo.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center space-x-2 bg-white text-salon-pink px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl'
            >
              <MessageCircle className='w-5 h-5' />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
