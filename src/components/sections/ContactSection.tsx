'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/utils/constants';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('submitting');

    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
          </svg>
        );
      case 'instagram':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
          </svg>
        );
      case 'mail':
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z' />
          </svg>
        );
      default:
        return (
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16l-4-4 1.414-1.414L10 14.172l7.586-7.586L19 8l-9 8z' />
          </svg>
        );
    }
  };

  return (
    <section id='contact' className='py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Vamos Conversar?
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
            Entre em contato e vamos discutir como posso ajudar!
          </p>
          <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                Informações de Contato
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-8 leading-relaxed'>
                Prefere contato direto? Aqui estão minhas principais formas de
                comunicação. Respondo rapidamente e estou sempre disponível para
                uma conversa.
              </p>
            </div>

            {/* Contact Methods */}
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400'>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
                    Email
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200'
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400'>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
                    Telefone
                  </h4>
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 font-medium'
                  >
                    +55 51 99909-2387
                  </a>
                  <p className='text-gray-600 dark:text-gray-400 text-sm mt-1'>
                    Clique para abrir no WhatsApp
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400'>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-1'>
                    Localização
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Remoto / Florianópolis - SC, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className='font-semibold text-gray-900 dark:text-white mb-4'>
                Redes Sociais
              </h4>
              <div className='flex gap-4'>
                {SOCIAL_LINKS.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200'
                  >
                    <span className='text-xl'>
                      {getSocialIcon(social.icon)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800'>
              <h4 className='font-semibold text-blue-900 dark:text-blue-100 mb-2'>
                🚀 Disponibilidade
              </h4>
              <p className='text-blue-800 dark:text-blue-200 text-sm'>
                Atualmente disponível para novos projetos e oportunidades.
                Resposta garantida em até 24 horas.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            className='bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700'
          >
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Nome Completo *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  placeholder='Seu nome completo'
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  placeholder='seu@email.com'
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  Mensagem *
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  placeholder='Conte-me sobre seu projeto ou oportunidade...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-lg hover:shadow-xl'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className='mr-2' size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200'
                >
                  <CheckCircle size={20} />
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200'
                >
                  <AlertCircle size={20} />
                  Erro ao enviar mensagem. Tente novamente ou entre em contato
                  diretamente.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
