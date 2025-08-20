"use client";

import { useEffect, useState } from 'react';
import { useCleanupExtensions } from '@/hooks/useCleanupExtensions';

interface HydrationBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function HydrationBoundary({ children, fallback }: HydrationBoundaryProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Hook para limpar atributos de extensões
  useCleanupExtensions();

  useEffect(() => {
    // Aguardar a hidratação completa
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 150); // Aumentado para 150ms para dar tempo das extensões
    
    return () => clearTimeout(timer);
  }, []);

  // Renderizar fallback durante hidratação
  if (!isHydrated) {
    return fallback ? <>{fallback}</> : null;
  }

  return <>{children}</>;
} 