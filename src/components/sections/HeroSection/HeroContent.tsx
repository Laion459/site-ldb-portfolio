'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/utils/constants';
import { fadeInUp, slideInFromTop } from '@/utils/animations';

/**
 * 📝 Componente para o conteúdo principal do HeroSection
 * Gerencia texto, títulos e descrições
 */
export default function HeroContent() {
  return (
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
      {/* 🎯 Título Principal */}
      <motion.div
        variants={slideInFromTop}
        initial='initial'
        animate='animate'
        className='mb-8'
      >
        <h1 className='text-6xl md:text-8xl font-bold gradient-text-primary dark:gradient-text mb-6'>
          {SITE_CONFIG.name}
        </h1>
      </motion.div>

      {/* 📖 Subtítulo e Descrição */}
      <motion.div
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        className='mb-8'
      >
        <h2 className='text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6'>
          {SITE_CONFIG.title}
        </h2>

        <motion.p
          className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Especialista em{' '}
          <motion.span
            className='text-purple-600 dark:text-purple-400 font-bold'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Laravel
          </motion.span>
          ,{' '}
          <motion.span
            className='text-blue-600 dark:text-blue-400 font-bold'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            React
          </motion.span>{' '}
          e{' '}
          <motion.span
            className='text-green-600 dark:text-green-400 font-bold'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            PHP
          </motion.span>
          .{' '}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className='inline-block'
          >
            Product Manager com visão de dono e capacidade de entrega
            rápida.{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className='inline-block'
          >
            Transformo ideias em produtos completos e escaláveis que geram valor
            real.
          </motion.span>
        </motion.p>
      </motion.div>

      {/* 🎯 Indicador de Scroll */}
      <motion.div
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        transition={{ delay: 0.4 }}
        className='flex justify-center'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='cursor-pointer'
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <svg
            className='h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
