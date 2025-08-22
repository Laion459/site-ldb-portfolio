'use client';

import { useEffect, useCallback } from 'react';
import { useAppStore } from '@/store';

// 🎯 Interface para classes responsivas
interface ResponsiveClasses {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}

/**
 * 🎯 Hook inteligente para gerenciar responsividade
 * Integra com o store global e detecta mudanças de breakpoint automaticamente
 */
export const useResponsive = () => {
  const { responsive, updateResponsive } = useAppStore();

  // 🔍 Função para determinar breakpoint baseado na largura da tela
  const getBreakpoint = useCallback(
    (width: number): 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
      if (width < 640) return 'sm';
      if (width < 768) return 'md';
      if (width < 1024) return 'lg';
      if (width < 1280) return 'xl';
      return '2xl';
    },
    []
  );

  // 📱 Função para atualizar estado responsivo
  const updateResponsiveState = useCallback(
    (width: number) => {
      const breakpoint = getBreakpoint(width);
      updateResponsive(breakpoint);
    },
    [getBreakpoint, updateResponsive]
  );

  // 🎯 Efeito para detectar mudanças de tamanho da tela
  useEffect(() => {
    // Função para atualizar estado
    const handleResize = () => {
      updateResponsiveState(window.innerWidth);
    };

    // Atualizar estado inicial
    updateResponsiveState(window.innerWidth);

    // Adicionar listener de resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [updateResponsiveState]);

  // 🎯 Efeito para detectar mudanças de orientação
  useEffect(() => {
    const handleOrientationChange = () => {
      // Pequeno delay para garantir que as dimensões foram atualizadas
      setTimeout(() => {
        updateResponsiveState(window.innerWidth);
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () =>
      window.removeEventListener('orientationchange', handleOrientationChange);
  }, [updateResponsiveState]);

  // 🎯 Efeito para detectar mudanças de preferência de movimento reduzido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      useAppStore.getState().setReducedMotion(e.matches);
    };

    // Definir estado inicial
    useAppStore.getState().setReducedMotion(mediaQuery.matches);

    // Adicionar listener
    mediaQuery.addEventListener('change', handleReducedMotionChange);

    return () =>
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
  }, []);

  // 🎯 Função para verificar se está em um breakpoint específico
  const isBreakpoint = useCallback(
    (breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
      return responsive.breakpoint === breakpoint;
    },
    [responsive.breakpoint]
  );

  // 🎯 Função para verificar se está em um range de breakpoints
  const isBreakpointRange = useCallback(
    (
      min: 'sm' | 'md' | 'lg' | 'xl' | '2xl',
      max: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    ) => {
      const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
      const currentIndex = breakpoints.indexOf(responsive.breakpoint);
      const minIndex = breakpoints.indexOf(min);
      const maxIndex = breakpoints.indexOf(max);

      return currentIndex >= minIndex && currentIndex <= maxIndex;
    },
    [responsive.breakpoint]
  );

  // 🎯 Função para obter classes responsivas
  const getResponsiveClasses = useCallback(
    (classes: ResponsiveClasses): string => {
      const { breakpoint } = responsive;

      // Retornar classes baseadas no breakpoint atual
      switch (breakpoint) {
        case 'sm':
          return classes.sm || classes.base || '';
        case 'md':
          return classes.md || classes.sm || classes.base || '';
        case 'lg':
          return classes.lg || classes.md || classes.sm || classes.base || '';
        case 'xl':
          return (
            classes.xl ||
            classes.lg ||
            classes.md ||
            classes.sm ||
            classes.base ||
            ''
          );
        case '2xl':
          return (
            classes['2xl'] ||
            classes.xl ||
            classes.lg ||
            classes.md ||
            classes.sm ||
            classes.base ||
            ''
          );
        default:
          return classes.base || '';
      }
    },
    [responsive]
  );

  // 🎯 Função para obter valores responsivos
  const getResponsiveValue = useCallback(
    <T>(values: Record<string, T>): T => {
      const { breakpoint } = responsive;

      // Retornar valor baseado no breakpoint atual
      switch (breakpoint) {
        case 'sm':
          return values.sm ?? values.base;
        case 'md':
          return values.md ?? values.sm ?? values.base;
        case 'lg':
          return values.lg ?? values.md ?? values.sm ?? values.base;
        case 'xl':
          return (
            values.xl ?? values.lg ?? values.md ?? values.sm ?? values.base
          );
        case '2xl':
          return (
            values['2xl'] ??
            values.xl ??
            values.lg ??
            values.md ??
            values.sm ??
            values.base
          );
        default:
          return values.base;
      }
    },
    [responsive]
  );

  return {
    // 📱 Estado atual
    ...responsive,

    // 🎯 Funções utilitárias
    isBreakpoint,
    isBreakpointRange,
    getResponsiveClasses,
    getResponsiveValue,

    // 🔄 Função para forçar atualização
    updateResponsiveState: () => updateResponsiveState(window.innerWidth),
  };
};

// 🎯 Hook específico para breakpoints
export const useBreakpoint = () => {
  const { breakpoint, isBreakpoint, isBreakpointRange } = useResponsive();

  return {
    breakpoint,
    isBreakpoint,
    isBreakpointRange,

    // 🎯 Atalhos para breakpoints específicos
    isMobile: breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: ['lg', 'xl', '2xl'].includes(breakpoint),
    isLarge: ['xl', '2xl'].includes(breakpoint),
  };
};

// 🎯 Hook para classes responsivas
export const useResponsiveClasses = () => {
  const { getResponsiveClasses } = useResponsive();

  return {
    getResponsiveClasses,

    // 🎯 Classes comuns responsivas
    container: getResponsiveClasses({
      base: 'px-4',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
      xl: 'px-12',
      '2xl': 'px-16',
    }),

    text: getResponsiveClasses({
      base: 'text-base',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    }),

    spacing: getResponsiveClasses({
      base: 'py-8',
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-20',
      xl: 'py-24',
      '2xl': 'py-32',
    }),
  };
};
