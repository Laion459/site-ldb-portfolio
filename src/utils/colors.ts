// Utilitários de cores e gradientes personalizados
export const colorPalette = {
  // Cores principais
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Cores de destaque
  accent: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },

  // Cores de marca
  brand: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },

  // Cores de sucesso
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },

  // Cores de aviso
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  // Cores de erro
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Cores rosa
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
};

// Gradientes predefinidos
export const gradients = {
  // Gradientes principais
  primary: 'linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af)',
  accent: 'linear-gradient(135deg, #a855f7, #7c3aed, #6b21a8)',
  brand: 'linear-gradient(135deg, #06b6d4, #0891b2, #0e7490)',

  // Gradientes combinados
  hero: 'linear-gradient(135deg, #eff6ff, #faf5ff, #ecfeff)',
  heroDark: 'linear-gradient(135deg, #0c4a6e, #1a0b2e, #164e63)',
  card: 'linear-gradient(135deg, #f8fafc, #f1f5f9, #eff6ff)',
  cardDark: 'linear-gradient(135deg, #0a0a0a, #0f172a, #0c4a6e)',

  // Gradientes de texto
  textPrimary: 'linear-gradient(135deg, #60a5fa, #2563eb, #1e40af)',
  textAccent: 'linear-gradient(135deg, #c084fc, #9333ea, #7c3aed)',
  textBrand: 'linear-gradient(135deg, #22d3ee, #06b6d4, #0891b2)',

  // Gradientes especiais
  sunset: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
  ocean: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
  fire: 'linear-gradient(135deg, #ef4444, #f59e0b, #fbbf24)',
  forest: 'linear-gradient(135deg, #10b981, #059669, #047857)',
};

// Efeitos de sombra coloridos
export const shadows = {
  primary:
    '0 10px 25px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.1)',
  accent:
    '0 10px 25px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.1)',
  brand:
    '0 10px 25px -3px rgba(6, 182, 212, 0.3), 0 4px 6px -2px rgba(6, 182, 212, 0.1)',
  rose: '0 10px 25px -3px rgba(244, 63, 94, 0.3), 0 4px 6px -2px rgba(244, 63, 94, 0.1)',
  success:
    '0 10px 25px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.1)',
  warning:
    '0 10px 25px -3px rgba(245, 158, 11, 0.3), 0 4px 6px -2px rgba(245, 158, 11, 0.1)',
  error:
    '0 10px 25px -3px rgba(239, 68, 68, 0.3), 0 4px 6px -2px rgba(239, 68, 68, 0.1)',
};

// Efeitos de brilho
export const glows = {
  primary: '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6',
  accent: '0 0 20px #a855f7, 0 0 40px #a855f7, 0 0 60px #a855f7',
  brand: '0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 60px #06b6d4',
  rose: '0 0 20px #f43f5e, 0 0 40px #f43f5e, 0 0 60px #f43f5e',
};

// Funções utilitárias
export const getColorWithOpacity = (color: string, opacity: number) => {
  // Converte hex para rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const getGradientWithOpacity = (gradient: string, opacity: number) => {
  // Aplica opacidade a um gradiente
  return gradient.replace(/rgba?\([^)]+\)/g, match => {
    const rgba = match.match(/rgba?\(([^)]+)\)/);
    if (rgba) {
      const values = rgba[1].split(',').map(v => v.trim());
      if (values.length === 3) {
        return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`;
      }
    }
    return match;
  });
};

// Classes CSS para Tailwind
export const colorClasses = {
  // Texto com gradiente
  gradientText:
    'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent',
  gradientTextPrimary:
    'bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent',
  gradientTextAccent:
    'bg-gradient-to-r from-purple-400 via-purple-600 to-rose-500 bg-clip-text text-transparent',
  gradientTextBrand:
    'bg-gradient-to-r from-cyan-400 via-cyan-600 to-blue-500 bg-clip-text text-transparent',

  // Fundos com gradiente
  gradientBg: 'bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50',
  gradientBgDark: 'bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900',
  gradientBgCard: 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50',
  gradientBgCardDark:
    'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900',

  // Bordas com gradiente
  gradientBorder:
    'border-2 border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-border',
};

const colorUtils = {
  colorPalette,
  gradients,
  shadows,
  glows,
  getColorWithOpacity,
  getGradientWithOpacity,
  colorClasses,
};

export default colorUtils;
