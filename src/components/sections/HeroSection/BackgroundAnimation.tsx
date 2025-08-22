'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import ParticleSystem from '@/components/ui/ParticleSystem';
import MorphingShapes from '@/components/ui/MorphingShapes';

interface BackgroundAnimationProps {
  showParticles: boolean;
  showMorphing: boolean;
}

/**
 * 🎨 Componente para animações de fundo do HeroSection
 * Gerencia partículas, morphing e elementos decorativos
 */
export default function BackgroundAnimation({
  showParticles,
  showMorphing,
}: BackgroundAnimationProps) {
  // 🎯 Mouse tracking para partículas interativas
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
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 🎯 Sistema de Partículas Interativas */}
      {showParticles && (
        <div className='absolute inset-0 pointer-events-none'>
          <ParticleSystem
            key='particle-system'
            particleCount={80}
            colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B']}
            interactive={true}
          />
        </div>
      )}

      {/* 🎨 Background Animation com cores vibrantes e interatividade */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* 🌀 Sistema de Morphing */}
        {showMorphing && (
          <div className='absolute inset-0 pointer-events-none'>
            <MorphingShapes
              key='morphing-shapes'
              shapeCount={4}
              colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
              morphingSpeed={10000}
            />
          </div>
        )}

        {/* 🌟 Elementos de fundo animados */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            x: useTransform(springX, [-300, 300], [-20, 20]),
            y: useTransform(springY, [-300, 300], [-20, 20]),
          }}
          className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            x: useTransform(springX, [-300, 300], [20, -20]),
            y: useTransform(springY, [-300, 300], [20, -20]),
          }}
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 dark:from-purple-500 dark:via-pink-500 dark:to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            x: useTransform(springX, [-300, 300], [-15, 15]),
            y: useTransform(springY, [-300, 300], [-15, 15]),
          }}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-600 dark:from-rose-500 dark:via-pink-500 dark:to-rose-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />

        {/* 🌈 Novos elementos de fundo com interatividade */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            x: useTransform(springX, [-300, 300], [10, -10]),
            y: useTransform(springY, [-300, 300], [-10, 10]),
          }}
          className='absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-50'
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            x: useTransform(springX, [-300, 300], [-10, 10]),
            y: useTransform(springY, [-300, 300], [10, -10]),
          }}
          className='absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-300 to-pink-400 dark:from-rose-400 dark:to-pink-500 rounded-full mix-blend-multiply filter blur-lg opacity-50'
        />
      </div>

      {/* ✨ Elementos decorativos flutuantes */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60'
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60'
        />

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute bottom-32 left-32 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-60'
        />
      </div>
    </>
  );
}
