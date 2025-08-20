"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/utils/constants';
import Button from '@/components/ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight, slideInFromTop } from '@/utils/animations';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);

  // Mouse tracking para partículas interativas
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
      setMousePosition({ x: clientX, y: clientY });

      // Criar partículas ao mover o mouse
      if (Math.random() > 0.7) {
        createParticle(clientX, clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const createParticle = (x: number, y: number) => {
    const newParticle = {
      id: Date.now() + Math.random(),
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1
    };
    
    setParticles(prev => [...prev, newParticle]);
    
    // Remover partícula após 2 segundos
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 2000);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-hero dark:gradient-bg-hero-dark">
      {/* Sistema de Partículas Interativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-80"
            initial={{ 
              x: particle.x, 
              y: particle.y, 
              scale: 0,
              opacity: 0.8 
            }}
            animate={{
              x: particle.x + particle.vx * 100,
              y: particle.y + particle.vy * 100,
              scale: [0, 1, 0],
              opacity: [0.8, 0.4, 0]
            }}
            transition={{
              duration: 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Background Animation com cores mais vibrantes e interatividade */}
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
          style={{
            x: useTransform(springX, [-300, 300], [-20, 20]),
            y: useTransform(springY, [-300, 300], [-20, 20])
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
          style={{
            x: useTransform(springX, [-300, 300], [20, -20]),
            y: useTransform(springY, [-300, 300], [20, -20])
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
          style={{
            x: useTransform(springX, [-300, 300], [-15, 15]),
            y: useTransform(springY, [-300, 300], [-15, 15])
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-600 dark:from-rose-500 dark:via-pink-500 dark:to-rose-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        
        {/* Novos elementos de fundo com interatividade */}
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
          style={{
            x: useTransform(springX, [-300, 300], [10, -10]),
            y: useTransform(springY, [-300, 300], [-10, 10])
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
          style={{
            x: useTransform(springX, [-300, 300], [-10, 10]),
            y: useTransform(springY, [-300, 300], [10, -10])
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
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 max-w-4xl mx-auto"
        >
          {/* Botão "Ver Projetos" - Efeito de Partículas e Gradiente Dinâmico */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efeito de Partículas Flutuantes */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <motion.div
                animate={{
                  x: [0, 20, -20, 0],
                  y: [0, -20, 20, 0],
                  rotate: [0, 180, 360, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-2 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-80 blur-sm"
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
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 blur-sm"
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
                  ease: "easeInOut"
                }}
                className="absolute bottom-4 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-70 blur-sm"
              />
            </div>

            {/* Botão Principal com Gradiente Dinâmico */}
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg shadow-2xl overflow-hidden group-hover:shadow-blue-500/25 transition-all duration-500"
              whileHover={{
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1)"
              }}
            >
              {/* Gradiente Animado de Fundo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                    "linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6)",
                    "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)",
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Conteúdo do Botão */}
              <div className="relative z-10 flex items-center justify-center">
                <span className="mr-3">🚀 Ver Projetos</span>
                <motion.div
                  animate={{
                    x: [0, 8, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  →
                </motion.div>
              </div>

              {/* Efeito de Brilho */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>

          {/* Botão "Contato" - Efeito de Ondas e Holograma */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Ondas de Fundo Animadas */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Ondas Circulares */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-purple-400/30 rounded-full"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-pink-400/40 rounded-full"
                animate={{
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Botão Principal com Efeito Holográfico */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="relative px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-purple-400/50 rounded-2xl text-purple-600 font-semibold text-lg shadow-2xl overflow-hidden group-hover:shadow-purple-500/25 transition-all duration-500"
              whileHover={{
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.2)",
                borderColor: "rgba(147, 51, 234, 0.8)"
              }}
            >
              {/* Efeito de Brilho Holográfico */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Conteúdo do Botão */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-3 text-2xl"
                >
                  💬
                </motion.div>
                <span>Contato</span>
              </div>

              {/* Partículas de Energia */}
              <motion.div
                className="absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-2 left-6 w-1 h-1 bg-pink-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>

          {/* Botão "Download CV" - Efeito de Energia e Partículas */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Campo de Energia */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Linhas de Energia */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Botão Principal com Efeito de Energia */}
            <motion.button
              onClick={() => window.open(SITE_CONFIG.cvUrl, '_blank')}
              className="relative px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg shadow-2xl overflow-hidden group-hover:shadow-emerald-500/25 transition-all duration-500"
              whileHover={{
                boxShadow: "0 20px 40px rgba(5, 150, 105, 0.4), 0 0 0 1px rgba(5, 150, 105, 0.1)"
              }}
            >
              {/* Gradiente de Energia Animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
                animate={{
                  background: [
                    "linear-gradient(45deg, #059669, #0d9488, #0891b2)",
                    "linear-gradient(45deg, #0d9488, #0891b2, #059669)",
                    "linear-gradient(45deg, #0891b2, #059669, #0d9488)",
                    "linear-gradient(45deg, #059669, #0d9488, #0891b2)",
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Conteúdo do Botão */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -2, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-3 text-2xl"
                >
                  📄
                </motion.div>
                <span>Download CV</span>
              </div>

              {/* Efeito de Energia Pulsante */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Partículas de Energia Verde */}
              <motion.div
                className="absolute top-3 left-3 w-1.5 h-1.5 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-3 right-3 w-1 h-1 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 1, 0.8],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
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