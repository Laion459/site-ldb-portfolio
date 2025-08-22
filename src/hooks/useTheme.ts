'use client';

import { useEffect } from 'react';
import { useTheme as useStoreTheme, useThemeActions } from '@/store';

/**
 * 🎨 Hook avançado para gerenciamento de tema
 * Integra com o store global e oferece funcionalidades extras
 */
export const useThemeAdvanced = () => {
  const theme = useStoreTheme();
  const { setTheme, toggleTheme, setSystemPreference } = useThemeActions();

  // 🎯 Efeito para sincronizar com preferências do sistema
  useEffect(() => {
    if (theme.systemPreference && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (e: MediaQueryListEvent) => {
        const newMode = e.matches ? 'dark' : 'light';
        setTheme(newMode);
      };

      // Aplicar preferência inicial
      const initialMode = mediaQuery.matches ? 'dark' : 'light';
      setTheme(initialMode);

      // Adicionar listener
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme.systemPreference, setTheme]);

  // 🎯 Efeito para aplicar tema ao DOM
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;

      // Remover classes anteriores
      root.classList.remove('light', 'dark');

      // Adicionar classe atual
      root.classList.add(theme.mode);

      // Aplicar atributos de tema para acessibilidade
      root.setAttribute('data-theme', theme.mode);

      // Salvar no localStorage
      localStorage.setItem('theme', theme.mode);
      localStorage.setItem(
        'theme-system-preference',
        theme.systemPreference.toString()
      );
    }
  }, [theme.mode, theme.systemPreference]);

  // 🎯 Função para alternar entre temas específicos
  const cycleTheme = () => {
    const themes: ('light' | 'dark')[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme.mode);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // 🎯 Função para definir tema baseado em hora do dia
  const setTimeBasedTheme = () => {
    const hour = new Date().getHours();
    const isDaytime = hour >= 6 && hour < 18;
    setTheme(isDaytime ? 'light' : 'dark');
  };

  // 🎯 Função para definir tema baseado em localização
  const setLocationBasedTheme = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude } = position.coords;
          // Lógica simples: hemisfério norte = tema baseado em estação
          const isNorthernHemisphere = latitude > 0;
          const month = new Date().getMonth();

          if (isNorthernHemisphere) {
            // Hemisfério norte: inverno = dark, verão = light
            const isWinter = month >= 11 || month <= 2;
            setTheme(isWinter ? 'dark' : 'light');
          } else {
            // Hemisfério sul: inverno = dark, verão = light
            const isWinter = month >= 5 && month <= 8;
            setTheme(isWinter ? 'dark' : 'light');
          }
        },
        () => {
          // Fallback para tema padrão se geolocalização falhar
          setTheme('dark');
        }
      );
    }
  };

  // 🎯 Função para obter classes CSS baseadas no tema
  const getThemeClasses = (lightClass: string, darkClass: string) => {
    return theme.mode === 'light' ? lightClass : darkClass;
  };

  // 🎯 Função para obter variáveis CSS do tema
  const getThemeVariable = (variable: string) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      return getComputedStyle(root).getPropertyValue(`--${variable}`).trim();
    }
    return '';
  };

  // 🎯 Função para aplicar transição suave entre temas
  const applyThemeTransition = (duration: number = 300) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.style.transition = `all ${duration}ms ease-in-out`;

      // Remover transição após a duração
      setTimeout(() => {
        root.style.transition = '';
      }, duration);
    }
  };

  return {
    // 📱 Estado atual
    ...theme,

    // 🎯 Ações básicas
    setTheme,
    toggleTheme,
    setSystemPreference,

    // 🚀 Ações avançadas
    cycleTheme,
    setTimeBasedTheme,
    setLocationBasedTheme,

    // 🎨 Utilitários
    getThemeClasses,
    getThemeVariable,
    applyThemeTransition,

    // 🔍 Computed values
    isLight: theme.mode === 'light',
    isDark: theme.mode === 'dark',
    isSystem: theme.systemPreference,

    // 📊 Estatísticas
    themeUsage: {
      light: localStorage.getItem('theme-usage-light') || '0',
      dark: localStorage.getItem('theme-usage-dark') || '0',
    },
  };
};

// 🎯 Hook principal para uso
export const useTheme = useThemeAdvanced;

// 🎯 Hook específico para classes de tema
export const useThemeClasses = () => {
  const { getThemeClasses, isLight, isDark } = useThemeAdvanced();

  return {
    getThemeClasses,
    isLight,
    isDark,

    // 🎨 Classes comuns de tema
    background: getThemeClasses('bg-white', 'bg-gray-900'),
    text: getThemeClasses('text-gray-900', 'text-white'),
    border: getThemeClasses('border-gray-200', 'border-gray-700'),
    card: getThemeClasses('bg-white shadow-lg', 'bg-gray-800 shadow-xl'),
    input: getThemeClasses(
      'bg-white border-gray-300',
      'bg-gray-700 border-gray-600'
    ),
  };
};
