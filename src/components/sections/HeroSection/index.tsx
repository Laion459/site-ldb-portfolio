'use client';

import { useAnimation } from '@/store';
import BackgroundAnimation from './BackgroundAnimation';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';

interface HeroSectionProps {
  showParticles?: boolean;
  showMorphing?: boolean;
}

/**
 * 🎯 HeroSection refatorado e otimizado
 * Usa componentes menores e integra com o store global
 */
export default function HeroSection({
  showParticles: externalShowParticles,
  showMorphing: externalShowMorphing,
}: HeroSectionProps) {
  // 🎯 Usar estado global de animações
  const { showParticles, showMorphing } = useAnimation();

  // 🎯 Priorizar props externas, fallback para estado global
  const shouldShowParticles = externalShowParticles ?? showParticles;
  const shouldShowMorphing = externalShowMorphing ?? showMorphing;

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-hero dark:gradient-bg-hero-dark'
    >
      {/* 🎨 Animações de Fundo */}
      <BackgroundAnimation
        showParticles={shouldShowParticles}
        showMorphing={shouldShowMorphing}
      />

      {/* 📝 Conteúdo Principal */}
      <HeroContent />

      {/* 🎯 Botões de Ação */}
      <HeroButtons />
    </section>
  );
}
