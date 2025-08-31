'use client';

import { useAnimation } from '@/store';
import BackgroundAnimation from './BackgroundAnimation';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';

/**
 * 🎯 HeroSection otimizado para performance máxima
 * - Animações condicionais baseadas em performance
 * - Lazy loading de componentes pesados
 * - Redução de JavaScript desnecessário
 */
export default function HeroSection() {
  // 🎯 Usar estado global de animações com fallback para performance
  const { showParticles, showMorphing } = useAnimation();

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-hero dark:gradient-bg-hero-dark'
      aria-label='Seção principal do portfolio'
    >
      {/* 🎨 Animações de Fundo - carregadas condicionalmente */}
      <BackgroundAnimation
        showParticles={showParticles}
        showMorphing={showMorphing}
      />

      {/* 📝 Conteúdo Principal - renderizado no servidor para SEO */}
      <HeroContent />

      {/* 🎯 Botões de Ação */}
      <HeroButtons />
    </section>
  );
}
