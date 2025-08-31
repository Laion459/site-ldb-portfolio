'use client';

import { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: React.ReactNode;
  props?: Record<string, unknown>;
  _ssr?: boolean;
}

/**
 * 🚀 Componente para carregamento lazy otimizado
 * - Carrega componentes apenas quando necessário
 * - Suporte a SSR desabilitado para componentes pesados
 * - Fallback personalizado para melhor UX
 */
export function LazyComponent({
  component: Component,
  fallback,
  props = {},
  _ssr = true,
}: LazyComponentProps) {
  const LazyComponent = lazy(() =>
    import('@/components/ui/LazyComponent').then(() => ({ default: Component }))
  );

  const defaultFallback = (
    <div className='flex items-center justify-center p-8'>
      <div className='w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin' />
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

/**
 * 🎨 Componente para carregamento lazy de animações
 * - Desabilita SSR para componentes de animação
 * - Carrega apenas no cliente para melhor performance
 */
export function LazyAnimation({
  component: Component,
  fallback,
  props = {},
}: Omit<LazyComponentProps, '_ssr'>) {
  return (
    <LazyComponent
      component={Component}
      fallback={fallback}
      props={props}
      _ssr={false}
    />
  );
}

/**
 * 📱 Componente para carregamento lazy responsivo
 * - Carrega componentes baseado no viewport
 * - Otimiza para dispositivos móveis
 */
export function LazyResponsive({
  component: Component,
  fallback,
  props = {},
  mobile = false,
  tablet = false,
  desktop = true,
}: LazyComponentProps & {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
}) {
  // Lógica para determinar se deve carregar baseado no viewport
  const shouldLoad = () => {
    if (typeof window === 'undefined') return desktop;

    const width = window.innerWidth;
    if (width < 768) return mobile;
    if (width < 1024) return tablet;
    return desktop;
  };

  if (!shouldLoad()) {
    return fallback || null;
  }

  return (
    <LazyComponent
      component={Component}
      fallback={fallback}
      props={props}
      _ssr={false}
    />
  );
}
