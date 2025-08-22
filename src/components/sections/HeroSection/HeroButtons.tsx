'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/utils/constants';
import { fadeInUp } from '@/utils/animations';

/**
 * 🎯 Componente para os botões de ação do HeroSection
 * Gerencia botões principais com animações e efeitos
 */
export default function HeroButtons() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial='initial'
      animate='animate'
      transition={{ delay: 0.2 }}
      className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 max-w-4xl mx-auto'
    >
      {/* 🚀 Botão "Ver Projetos" - Efeito de Partículas e Gradiente Dinâmico */}
      <motion.div
        className='relative group'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Efeito de Partículas Flutuantes */}
        <div className='absolute inset-0 overflow-hidden rounded-2xl'>
          <motion.div
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0],
              rotate: [0, 180, 360, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-2 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-80 blur-sm'
          />
          <motion.div
            animate={{
              x: [0, -15, 15, 0],
              y: [0, 15, -15, 0],
              rotate: [360, 180, 0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-6 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 blur-sm'
          />
          <motion.div
            animate={{
              x: [0, 25, -25, 0],
              y: [0, -25, 25, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute bottom-4 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-70 blur-sm'
          />
        </div>

        {/* Botão Principal com Gradiente Dinâmico */}
        <motion.button
          onClick={() => scrollToSection('#projects')}
          className='relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg shadow-2xl overflow-hidden group-hover:shadow-blue-500/25 transition-all duration-500'
          whileHover={{
            boxShadow:
              '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1)',
          }}
        >
          {/* Gradiente Animado de Fundo */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600'
            animate={{
              background: [
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                'linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6)',
                'linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)',
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Conteúdo do Botão */}
          <div className='relative z-10 flex items-center justify-center'>
            <span className='mr-3'>🚀 Ver Projetos</span>
            <motion.div
              animate={{
                x: [0, 8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='text-2xl'
            >
              →
            </motion.div>
          </div>

          {/* Efeito de Brilho */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12'
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      </motion.div>

      {/* 💬 Botão "Contato" - Efeito de Ondas e Holograma */}
      <motion.div
        className='relative group'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ondas de Fundo Animadas */}
        <div className='absolute inset-0 rounded-2xl overflow-hidden'>
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-20'
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Ondas Circulares */}
          <motion.div
            className='absolute top-1/2 left-1/2 w-32 h-32 border-2 border-purple-400/30 rounded-full'
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute top-1/2 left-1/2 w-24 h-24 border-2 border-pink-400/40 rounded-full'
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Botão Principal com Efeito Holográfico */}
        <motion.button
          onClick={() => scrollToSection('#contact')}
          className='relative px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-purple-400/50 rounded-2xl text-purple-600 font-semibold text-lg shadow-2xl overflow-hidden group-hover:shadow-purple-500/25 transition-all duration-500'
          whileHover={{
            boxShadow:
              '0 20px 40px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.2)',
            borderColor: 'rgba(147, 51, 234, 0.8)',
          }}
        >
          {/* Efeito de Brilho Holográfico */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent'
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Conteúdo do Botão */}
          <div className='relative z-10 flex items-center justify-center'>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='mr-3 text-2xl'
            >
              💬
            </motion.div>
            <span>Contato</span>
          </div>

          {/* Partículas de Energia */}
          <motion.div
            className='absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full'
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-2 left-6 w-1 h-1 bg-pink-400 rounded-full'
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      </motion.div>

      {/* 📄 Botão "Download CV" - Efeito de Energia e Partículas */}
      <motion.div
        className='relative group'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Campo de Energia */}
        <div className='absolute inset-0 rounded-2xl overflow-hidden'>
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20'
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Linhas de Energia */}
          <motion.div
            className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent'
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent'
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Botão Principal com Efeito de Energia */}
        <motion.button
          onClick={() => window.open(SITE_CONFIG.cvUrl, '_blank')}
          className='relative px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg shadow-2xl overflow-hidden group-hover:shadow-emerald-500/25 transition-all duration-500'
          whileHover={{
            boxShadow:
              '0 20px 40px rgba(5, 150, 105, 0.4), 0 0 0 1px rgba(5, 150, 105, 0.1)',
          }}
        >
          {/* Gradiente de Energia Animado */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600'
            animate={{
              background: [
                'linear-gradient(45deg, #059669, #0d9488, #0891b2)',
                'linear-gradient(45deg, #0d9488, #0891b2, #059669)',
                'linear-gradient(45deg, #0891b2, #059669, #0d9488)',
                'linear-gradient(45deg, #059669, #0d9488, #0891b2)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Conteúdo do Botão */}
          <div className='relative z-10 flex items-center justify-center'>
            <motion.div
              animate={{
                y: [0, -2, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='mr-3 text-2xl'
            >
              📄
            </motion.div>
            <span>Download CV</span>
          </div>

          {/* Efeito de Energia Pulsante */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Partículas de Energia Verde */}
          <motion.div
            className='absolute top-3 left-3 w-1.5 h-1.5 bg-emerald-400 rounded-full'
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-3 right-3 w-1 h-1 bg-teal-400 rounded-full'
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 1, 0.8],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
