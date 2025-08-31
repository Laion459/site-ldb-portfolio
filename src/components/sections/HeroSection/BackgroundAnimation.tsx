'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import ParticleSystem from '@/components/ui/ParticleSystem';
import MorphingShapes from '@/components/ui/MorphingShapes';
import { shouldLoadAnimation, getOptimizationLevel } from '@/utils/performance';

interface BackgroundAnimationProps {
  showParticles: boolean;
  showMorphing: boolean;
}

/**
 * 🎨 Componente para animações de fundo do HeroSection
 * Otimizado para performance máxima com carregamento condicional
 */
export default function BackgroundAnimation({
  showParticles,
  showMorphing,
}: BackgroundAnimationProps) {
  // 🚀 Detectar nível de otimização para performance
  const optimizationLevel = getOptimizationLevel();
  const shouldAnimate = shouldLoadAnimation();

  // 🎯 Mouse tracking otimizado - apenas se necessário
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: optimizationLevel === 'high' ? 100 : 50,
    damping: optimizationLevel === 'high' ? 30 : 50,
  });
  const springY = useSpring(mouseY, {
    stiffness: optimizationLevel === 'high' ? 100 : 50,
    damping: optimizationLevel === 'high' ? 30 : 50,
  });

  // 🚀 TODOS os useTransform devem estar no topo para evitar problemas de hooks
  const transformX = useTransform(springX, [-300, 300], [-20, 20]);
  const transformY = useTransform(springY, [-300, 300], [-20, 20]);
  const transformX2 = useTransform(springX, [-300, 300], [20, -20]);
  const transformY2 = useTransform(springY, [-300, 300], [20, -20]);
  const transformX3 = useTransform(springX, [-300, 300], [-15, 15]);
  const transformY3 = useTransform(springY, [-300, 300], [-15, 15]);
  const transformX4 = useTransform(springX, [-300, 300], [10, -10]);
  const transformY4 = useTransform(springY, [-300, 300], [-10, 10]);

  useEffect(() => {
    // 🚀 Só adicionar listener se animações estiverem ativas
    if (!shouldAnimate) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    // 🚀 Throttle para melhor performance
    let ticking = false;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [mouseX, mouseY, shouldAnimate]);

  // 🚀 Renderização condicional baseada na performance
  if (!shouldAnimate) {
    return (
      <div className='absolute inset-0 overflow-hidden'>
        {/* Fallback estático para dispositivos de baixa performance */}
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 dark:from-purple-500 dark:via-pink-500 dark:to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70' />
      </div>
    );
  }

  return (
    <>
      {/* 🎯 Sistema de Partículas Interativas - apenas se necessário */}
      {showParticles && optimizationLevel === 'high' && (
        <div className='absolute inset-0 pointer-events-none'>
          <ParticleSystem
            key='particle-system'
            particleCount={optimizationLevel === 'high' ? 80 : 40}
            colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B']}
            interactive={optimizationLevel === 'high'}
          />
        </div>
      )}

      {/* 🎨 Background Animation com cores vibrantes e interatividade */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* 🌀 Sistema de Morphing - apenas se necessário */}
        {showMorphing && optimizationLevel !== 'low' && (
          <div className='absolute inset-0 pointer-events-none'>
            <MorphingShapes
              key='morphing-shapes'
              shapeCount={optimizationLevel === 'high' ? 4 : 2}
              colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
              morphingSpeed={optimizationLevel === 'high' ? 10000 : 15000}
            />
          </div>
        )}

        {/* 🌟 Elementos de fundo animados - otimizados */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: optimizationLevel === 'high' ? 20 : 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            x: transformX,
            y: transformY,
          }}
          className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: optimizationLevel === 'high' ? 25 : 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            x: transformX2,
            y: transformY2,
          }}
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 dark:from-purple-500 dark:via-pink-500 dark:to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'
        />

        {/* 🌈 Elementos adicionais apenas para alta performance */}
        {optimizationLevel === 'high' && (
          <>
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
                x: transformX3,
                y: transformY3,
              }}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-600 dark:from-rose-500 dark:via-pink-500 dark:to-rose-700 rounded-full mix-blend-multiply filter blur-xl opacity-70'
            />

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
                x: transformX4,
                y: transformY4,
              }}
              className='absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-300 to-blue-400 dark:from-cyan-400 dark:to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-50'
            />
          </>
        )}
      </div>

      {/* ✨ Elementos decorativos flutuantes - apenas para alta performance */}
      {optimizationLevel === 'high' && (
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
        </div>
      )}
    </>
  );
}
