"use client";

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo/Avatar */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform rotate-6 scale-110 opacity-20"></div>
              
              {/* Main photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={SITE_CONFIG.images.profile}
                  alt="Leonardo - Backend Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback para placeholder se a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 text-6xl font-bold">
                  L
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                🚀
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Olá! Sou Leonardo 👋
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sou um <span className="font-semibold text-blue-600 dark:text-blue-400">Backend Engineer sênior</span> com mais de 8 anos de experiência 
                desenvolvendo soluções escaláveis e seguras para empresas de diversos portes.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Minha especialidade está em criar <span className="font-semibold text-purple-600 dark:text-purple-400">APIs robustas</span>, 
                implementar arquiteturas de microserviços e otimizar sistemas para suportar 
                milhões de usuários simultâneos.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Atualmente, foco em tecnologias como <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, 
                <span className="font-semibold text-green-600 dark:text-green-400"> Laravel</span>, 
                <span className="font-semibold text-green-600 dark:text-green-400"> PostgreSQL</span> e 
                <span className="font-semibold text-green-600 dark:text-green-400"> AWS</span>, 
                sempre buscando as melhores práticas de Clean Code e Clean Architecture.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">1M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Usuários Suportados</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={SITE_CONFIG.cvUrl}
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
              
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
              >
                <ExternalLink className="mr-2" size={20} />
                Ver LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 