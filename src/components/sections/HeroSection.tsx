"use client";

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import Button from '@/components/ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight, slideInFromTop } from '@/utils/animations';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-hero dark:gradient-bg-hero-dark">
      {/* Background Animation com cores mais vibrantes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 dark:from-purple-500 dark:via-pink-500 dark:to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-600 dark:from-rose-500 dark:via-pink-500 dark:to-rose-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        
        {/* Novos elementos de fundo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-50"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-300 to-pink-400 dark:from-rose-400 dark:to-pink-500 rounded-full mix-blend-multiply filter blur-lg opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={slideInFromTop}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold gradient-text-primary dark:gradient-text mb-6">
            {SITE_CONFIG.name}
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {SITE_CONFIG.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Especialista em <strong className="text-purple-600 dark:text-purple-400">Laravel</strong>, <strong className="text-blue-600 dark:text-blue-400">React</strong> e <strong className="text-green-600 dark:text-green-400">PHP</strong>. 
            Product Manager com visão de dono e capacidade de entrega rápida. 
            Transformo ideias em produtos completos e escaláveis que geram valor real.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            variant="gradient"
            onClick={() => scrollToSection('#projects')}
            className="group hover-glow-accent"
          >
            Ver Projetos
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="group border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-accent"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contato
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-32 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-60"
        />
      </div>
    </section>
  );
};

export default HeroSection; 