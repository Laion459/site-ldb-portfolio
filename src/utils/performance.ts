/**
 * 🚀 Utilitários para otimização de performance
 * Configurações e funções para melhorar a performance do portfolio
 */

// 📱 Breakpoints para carregamento responsivo
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const;

// 🎯 Configurações de performance
export const PERFORMANCE_CONFIG = {
  // Lazy loading
  lazyLoadThreshold: 0.1, // Intersection Observer threshold
  lazyLoadRootMargin: '50px', // Margem para carregamento antecipado

  // Animações
  animationThreshold: 0.2, // Threshold para animações
  reduceMotion: false, // Respeitar preferência do usuário

  // Imagens
  imageQuality: 85, // Qualidade das imagens (0-100)
  imageFormat: 'webp' as 'webp' | 'avif' | 'jpeg',

  // Cache
  cacheTTL: 30 * 24 * 60 * 60 * 1000, // 30 dias em ms
} as const;

// 🔍 Função para detectar preferência de movimento reduzido
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// 📱 Função para detectar tipo de dispositivo
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;

  if (width < BREAKPOINTS.mobile) return 'mobile';
  if (width < BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
}

// 🚀 Função para carregamento lazy de imagens
export function createImageObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: PERFORMANCE_CONFIG.lazyLoadThreshold,
    rootMargin: PERFORMANCE_CONFIG.lazyLoadRootMargin,
    ...options,
  };

  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
}

// ⚡ Função para debounce de eventos
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 🎯 Função para throttle de eventos
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 📊 Função para medir performance
export function measurePerformance(name: string, fn: () => void): void {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    // eslint-disable-next-line no-console
    console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
}

// 🎨 Função para carregamento condicional de animações
export function shouldLoadAnimation(): boolean {
  const deviceType = getDeviceType();
  const reducedMotion = prefersReducedMotion();

  // Não carregar animações em dispositivos móveis com movimento reduzido
  if (deviceType === 'mobile' && reducedMotion) {
    return false;
  }

  // Carregar animações em desktop e tablet
  return deviceType === 'desktop' || deviceType === 'tablet';
}

// 🔄 Função para preload de recursos críticos
export function preloadResource(href: string, as: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}

// 📱 Função para detectar conexão lenta
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined') return false;

  const connection = (navigator as unknown as Record<string, unknown>)
    .connection;
  if (!connection) return false;

  const connectionObj = connection as Record<string, unknown>;
  return (
    connectionObj.effectiveType === 'slow-2g' ||
    connectionObj.effectiveType === '2g' ||
    connectionObj.effectiveType === '3g'
  );
}

// 🎯 Função para otimizar baseado na conexão
export function getOptimizationLevel(): 'low' | 'medium' | 'high' {
  if (isSlowConnection()) return 'low';

  const deviceType = getDeviceType();
  if (deviceType === 'mobile') return 'medium';

  return 'high';
}
