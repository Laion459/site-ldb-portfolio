'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Heart,
} from 'lucide-react';
import { contactInfo } from '@/data/flor-de-lis/contact';
import { AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 300); // Mostra o botão após 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-salon-darkPink text-white'>
      <div className='container mx-auto px-6 lg:px-8 py-16 max-w-7xl'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          {/* Logo e Sobre */}
          <div className='lg:col-span-1'>
            <Link href='/projetos/flor-de-lis' className='inline-block mb-6'>
              <Image
                src='/images/flor-de-lis/White and Black Minimalist Salon Logo 1.webp'
                alt='Estética Flor de Lis'
                width={300}
                height={100}
                className='h-20 w-auto rounded-full border-2 border-yellow-400 shadow-lg'
              />
            </Link>
            <h3 className='text-2xl font-playfair font-bold mb-4'>
              Estética Flor de Lis
            </h3>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Transformamos sonhos em realidade através da beleza. Nossa missão
              é elevar sua autoestima com tratamentos personalizados e produtos
              de excelência.
            </p>
            <div className='flex space-x-4'>
              <a
                href={contactInfo.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center hover:bg-white hover:text-salon-pink transition-all duration-300'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href={contactInfo.facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center hover:bg-white hover:text-salon-pink transition-all duration-300'
              >
                <Facebook className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Links Rápidos</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/projetos/flor-de-lis'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/historico'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Nossa História
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/servicos'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/blog'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/contato'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Nossos Serviços</h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/projetos/flor-de-lis/servicos#cortes'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Cortes & Finalizações
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/servicos#coloracao'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Coloração & Tinturas
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/servicos#depilacao'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Depilação Profissional
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/servicos#manicure'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Manicure & Pedicure
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos/flor-de-lis/servicos#massagem'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Massagem Relaxante
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Entre em Contato</h4>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-salon-pink mt-1 flex-shrink-0' />
                <p className='text-gray-300 text-sm leading-relaxed'>
                  {contactInfo.address}
                </p>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-salon-pink flex-shrink-0' />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='w-5 h-5 text-salon-pink flex-shrink-0' />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-sm'
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className='mt-6'>
              <Link
                href='/projetos/flor-de-lis/contato'
                className='inline-flex items-center bg-salon-pink text-white px-6 py-3 rounded-lg hover:bg-white hover:text-salon-pink transition-all duration-300 font-medium'
              >
                Agendar Horário
              </Link>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className='border-t border-salon-pink mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-center md:text-left mb-4 md:mb-0'
            >
              <p className='text-gray-300 text-sm'>
                © {currentYear} Estética Flor de Lis. Todos os direitos
                reservados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='flex items-center space-x-2'
            >
              <p className='text-salon-lightPink text-sm'>
                Feito com <Heart className='inline w-4 h-4 text-red-400' /> para
                você
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Botão Voltar ao Topo - Só aparece após scroll */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 bg-salon-pink text-white p-3 rounded-full shadow-lg hover:bg-salon-darkPink hover:scale-110 transition-all duration-300 z-40'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className='w-6 h-6' />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
