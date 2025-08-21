'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  floating3D,
  glowPulse,
} from '@/utils/animations';
import Image from 'next/image';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id='about'
      className='py-20 gradient-bg-card dark:gradient-bg-card-dark relative overflow-hidden'
    >
      {/* Background elements com parallax */}
      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl'
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl'
      />
      <motion.div
        style={{ y: y3 }}
        className='absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-rose-500/20 rounded-full blur-xl'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold gradient-text-primary mb-6'>
            Sobre Mim
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full shadow-lg' />
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Photo/Avatar com efeitos 3D avançados */}
          <motion.div
            variants={fadeInLeft}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            className='relative'
          >
            <div className='relative w-80 h-80 mx-auto'>
              {/* Background decoration com morphing */}
              <motion.div
                variants={glowPulse}
                initial='initial'
                animate={isVisible ? 'animate' : 'initial'}
                className='absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-500 rounded-full transform rotate-6 scale-110 opacity-20'
              />

              {/* Main photo com efeito 3D */}
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                transition={{ duration: 0.3 }}
                className='relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl hover:shadow-accent transition-all duration-300'
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <Image
                  src={SITE_CONFIG.images.profile}
                  alt='Leonardo - Backend Engineer'
                  fill
                  className='object-cover'
                />
                {/* Fallback placeholder */}
                <div className='hidden w-full h-full bg-gradient-to-br from-gray-200 via-blue-200 to-purple-200 dark:from-gray-700 dark:via-blue-700 dark:to-purple-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-6xl font-bold'>
                  L
                </div>
              </motion.div>

              {/* Floating elements com animações 3D */}
              <motion.div
                variants={floating3D}
                initial='initial'
                animate={isVisible ? 'animate' : 'initial'}
                className='absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-primary cursor-pointer'
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                🚀
              </motion.div>

              <motion.div
                variants={floating3D}
                initial='initial'
                animate={isVisible ? 'animate' : 'initial'}
                className='absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-accent cursor-pointer'
                whileHover={{ scale: 1.2, rotate: -360 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                ⚡
              </motion.div>

              {/* Additional floating elements com parallax */}
              <motion.div
                style={{ y: y1 }}
                className='absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg'
              >
                💻
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                className='absolute bottom-1/4 -right-6 w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg'
              >
                🔥
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            className='space-y-6'
          >
            <div className='space-y-4'>
              <h3 className='text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white'>
                Olá! Sou{' '}
                <span className='gradient-text-accent'>Leonardo D. Borges</span>{' '}
                👋
              </h3>

              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                Sou um{' '}
                <strong className='text-purple-600 dark:text-purple-400'>
                  Desenvolvedor Full Stack
                </strong>{' '}
                e{' '}
                <strong className='text-blue-600 dark:text-blue-400'>
                  Product Manager
                </strong>{' '}
                apaixonado por criar soluções completas que resolvem problemas
                reais. Com base sólida em{' '}
                <strong className='text-green-600 dark:text-green-400'>
                  C, C++ e Java
                </strong>
                , evolui para{' '}
                <strong className='text-purple-600 dark:text-purple-400'>
                  Laravel
                </strong>{' '}
                e desenvolvimento Full Stack.
              </p>

              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                Minha jornada na tecnologia começou com{' '}
                <strong className='text-cyan-600 dark:text-cyan-400'>
                  Bacharelado em Ciência da Computação
                </strong>{' '}
                na UNIVALI, onde desenvolvi interesse por{' '}
                <strong className='text-rose-600 dark:text-rose-400'>
                  segurança da informação, computação forense e pentest
                </strong>
                . Atualmente, atuo paralelamente como desenvolvedor e Product
                Manager, aplicando visão de dono em cada projeto.
              </p>

              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                Acredito que a excelência técnica deve estar sempre alinhada com{' '}
                <strong className='text-purple-600 dark:text-purple-400'>
                  visão de negócio
                </strong>
                . Por isso, foco em entregar produtos completos, desde o
                conceito até a implementação, sempre com{' '}
                <strong className='text-green-600 dark:text-green-400'>
                  qualidade acima da média e capacidade de entrega rápida
                </strong>
                .
              </p>
            </div>

            {/* Key Points */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
              <div className='flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700'>
                <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white'>
                  🎯
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white'>
                    Visão de Produto
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Product Manager com visão de dono
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700'>
                <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white'>
                  ⚡
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white'>
                    Entrega Rápida
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Capacidade de entrega acima da média
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700'>
                <div className='w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white'>
                  🚀
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white'>
                    Full Stack
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Laravel, React, PHP e muito mais
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-3 p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl border border-rose-200 dark:border-rose-700'>
                <div className='w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center text-white'>
                  🎓
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white'>
                    Formação Sólida
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Ciência da Computação + Especializações
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
              <a
                href={SITE_CONFIG.cvUrl}
                download
                className='inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent'
              >
                <Download className='mr-2 h-5 w-5' />
                Download CV
              </a>

              <a
                href='#contact'
                className='inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent'
              >
                <ExternalLink className='mr-2 h-5 w-5' />
                Vamos Conversar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
