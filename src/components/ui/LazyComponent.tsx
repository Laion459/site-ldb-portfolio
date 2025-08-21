"use client";

import { Suspense, lazy, ComponentType } from 'react';
import { LoadingSpinner } from './AdvancedLoading';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

const LazyComponent = ({ 
  component, 
  fallback = <LoadingSpinner size="lg" />,
  props = {}
}: LazyComponentProps) => {
  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyComponent; 