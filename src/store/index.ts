import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';

// 🎨 Interface para o tema
interface ThemeState {
  mode: 'light' | 'dark';
  systemPreference: boolean;
}

// 🌐 Interface para o idioma
interface LanguageState {
  current: 'pt-BR' | 'en' | 'es';
  available: string[];
}

// 📱 Interface para responsividade
interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

// 🎯 Interface para animações
interface AnimationState {
  reducedMotion: boolean;
  showParticles: boolean;
  showMorphing: boolean;
  enableAnimations: boolean;
}

// 🔍 Interface para busca e filtros
interface SearchState {
  query: string;
  filters: {
    category: string[];
    technology: string[];
    featured: boolean;
  };
  sortBy: 'name' | 'date' | 'relevance';
}

// 📊 Interface para analytics
interface AnalyticsState {
  pageViews: Record<string, number>;
  interactions: Array<{
    type: string;
    timestamp: number;
    data: Record<string, unknown>;
  }>;
}

// 🎨 Interface principal do store
interface AppState {
  // Estados
  theme: ThemeState;
  language: LanguageState;
  responsive: ResponsiveState;
  animation: AnimationState;
  search: SearchState;
  analytics: AnalyticsState;

  // Ações do tema
  setTheme: (mode: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setSystemPreference: (enabled: boolean) => void;

  // Ações do idioma
  setLanguage: (lang: 'pt-BR' | 'en' | 'es') => void;

  // Ações responsivas
  updateResponsive: (breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => void;

  // Ações de animação
  setReducedMotion: (reduced: boolean) => void;
  toggleParticles: () => void;
  toggleMorphing: () => void;
  setAnimationsEnabled: (enabled: boolean) => void;

  // Ações de busca
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchState['filters']>) => void;
  setSortBy: (sortBy: SearchState['sortBy']) => void;
  clearFilters: () => void;

  // Ações de analytics
  trackPageView: (page: string) => void;
  trackInteraction: (type: string, data?: Record<string, unknown>) => void;

  // Utilitários
  reset: () => void;
}

// 🚀 Estado inicial
const initialState = {
  theme: {
    mode: 'dark' as const,
    systemPreference: true,
  },
  language: {
    current: 'pt-BR' as const,
    available: ['pt-BR', 'en', 'es'],
  },
  responsive: {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    breakpoint: 'lg' as const,
  },
  animation: {
    reducedMotion: false,
    showParticles: true,
    showMorphing: true,
    enableAnimations: true,
  },
  search: {
    query: '',
    filters: {
      category: [],
      technology: [],
      featured: false,
    },
    sortBy: 'relevance' as const,
  },
  analytics: {
    pageViews: {},
    interactions: [],
  },
};

// 🏗️ Criação do store
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      immer(set => ({
        ...initialState,

        // 🎨 Ações do tema
        setTheme: mode =>
          set(state => {
            state.theme.mode = mode;
            // Aplicar tema ao DOM
            if (typeof window !== 'undefined') {
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(mode);
              localStorage.setItem('theme', mode);
            }
          }),

        toggleTheme: () =>
          set(state => {
            const newMode = state.theme.mode === 'light' ? 'dark' : 'light';
            state.theme.mode = newMode;
            // Aplicar tema ao DOM
            if (typeof window !== 'undefined') {
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(newMode);
              localStorage.setItem('theme', newMode);
            }
          }),

        setSystemPreference: enabled =>
          set(state => {
            state.theme.systemPreference = enabled;
            if (enabled && typeof window !== 'undefined') {
              const mediaQuery = window.matchMedia(
                '(prefers-color-scheme: dark)'
              );
              const newMode = mediaQuery.matches ? 'dark' : 'light';
              state.theme.mode = newMode;
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(newMode);
            }
          }),

        // 🌐 Ações do idioma
        setLanguage: lang =>
          set(state => {
            state.language.current = lang;
            if (typeof window !== 'undefined') {
              localStorage.setItem('language', lang);
            }
          }),

        // 📱 Ações responsivas
        updateResponsive: breakpoint =>
          set(state => {
            state.responsive.breakpoint = breakpoint;
            state.responsive.isMobile = breakpoint === 'sm';
            state.responsive.isTablet = breakpoint === 'md';
            state.responsive.isDesktop = ['lg', 'xl', '2xl'].includes(
              breakpoint
            );
          }),

        // 🎯 Ações de animação
        setReducedMotion: reduced =>
          set(state => {
            state.animation.reducedMotion = reduced;
          }),

        toggleParticles: () =>
          set(state => {
            state.animation.showParticles = !state.animation.showParticles;
          }),

        toggleMorphing: () =>
          set(state => {
            state.animation.showMorphing = !state.animation.showMorphing;
          }),

        setAnimationsEnabled: enabled =>
          set(state => {
            state.animation.enableAnimations = enabled;
          }),

        // 🔍 Ações de busca
        setSearchQuery: query =>
          set(state => {
            state.search.query = query;
          }),

        setFilters: filters =>
          set(state => {
            state.search.filters = { ...state.search.filters, ...filters };
          }),

        setSortBy: sortBy =>
          set(state => {
            state.search.sortBy = sortBy;
          }),

        clearFilters: () =>
          set(state => {
            state.search.filters = initialState.search.filters;
            state.search.query = '';
            state.search.sortBy = 'relevance';
          }),

        // 📊 Ações de analytics
        trackPageView: page =>
          set(state => {
            state.analytics.pageViews[page] =
              (state.analytics.pageViews[page] || 0) + 1;
          }),

        trackInteraction: (type, data = {}) =>
          set(state => {
            state.analytics.interactions.push({
              type,
              timestamp: Date.now(),
              data,
            });
          }),

        // 🔄 Reset do store
        reset: () => set(initialState),
      })),
      {
        name: 'ldb-app-store',
        partialize: state => ({
          theme: state.theme,
          language: state.language,
          animation: state.animation,
        }),
      }
    ),
    {
      name: 'ldb-store',
    }
  )
);

// 🎯 Hooks específicos para facilitar uso
export const useTheme = () => useAppStore(state => state.theme);
export const useLanguage = () => useAppStore(state => state.language);
export const useResponsive = () => useAppStore(state => state.responsive);
export const useAnimation = () => useAppStore(state => state.animation);
export const useSearch = () => useAppStore(state => state.search);
export const useAnalytics = () => useAppStore(state => state.analytics);

// 🚀 Ações específicas
export const useThemeActions = () =>
  useAppStore(state => ({
    setTheme: state.setTheme,
    toggleTheme: state.toggleTheme,
    setSystemPreference: state.setSystemPreference,
  }));

export const useAnimationActions = () =>
  useAppStore(state => ({
    setReducedMotion: state.setReducedMotion,
    toggleParticles: state.toggleParticles,
    toggleMorphing: state.toggleMorphing,
    setAnimationsEnabled: state.setAnimationsEnabled,
  }));

export const useSearchActions = () =>
  useAppStore(state => ({
    setSearchQuery: state.setSearchQuery,
    setFilters: state.setFilters,
    setSortBy: state.setSortBy,
    clearFilters: state.clearFilters,
  }));
