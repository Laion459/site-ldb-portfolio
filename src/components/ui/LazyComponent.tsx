'use client';

import { Suspense, lazy, ComponentType } from 'react';
import { LoadingSpinner } from './AdvancedLoading';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  fallback?: React.ReactNode;
  props?: Record<string, unknown>;
}

const LazyComponent = ({
  component,
  fallback = <LoadingSpinner size='lg' />,
  props = {},
}: LazyComponentProps) => {
  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyComponent;
