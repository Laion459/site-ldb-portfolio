'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getOptimizationLevel } from '@/utils/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  placeholder?: string;
  fallback?: string;
}

/**
 * 🖼️ Componente de imagem otimizada para performance máxima
 * - Lazy loading inteligente
 * - Fallbacks para dispositivos de baixa performance
 * - Otimização baseada no nível de performance
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className,
  placeholder,
  fallback,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const optimizationLevel = getOptimizationLevel();

  // 🚀 Determinar se deve usar lazy loading
  const shouldLazyLoad = !priority && optimizationLevel !== 'high';

  // 🚀 Determinar qualidade da imagem baseada na performance
  const imageQuality =
    optimizationLevel === 'high'
      ? 85
      : optimizationLevel === 'medium'
        ? 75
        : 60;

  // 🚀 Determinar se deve usar formatos avançados
  const shouldUseAdvancedFormats = optimizationLevel !== 'low';

  useEffect(() => {
    // 🚀 Resetar estado quando src mudar
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (fallback && !hasError) {
      setImageSrc(fallback);
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // 🚀 Renderização condicional baseada na performance
  if (optimizationLevel === 'low') {
    // Fallback para dispositivos de baixa performance
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-700 ${className || ''}`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
        }}
      >
        {placeholder && (
          <div className='flex items-center justify-center h-full text-gray-500 text-sm'>
            {placeholder}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className || ''}`}>
      {/* 🖼️ Imagem otimizada */}
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={imageQuality}
        loading={shouldLazyLoad ? 'lazy' : 'eager'}
        onError={handleError}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        placeholder={shouldUseAdvancedFormats ? 'blur' : 'empty'}
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
      />

      {/* 🚀 Loading state */}
      {isLoading && (
        <div className='absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center'>
          <div className='w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin' />
        </div>
      )}

      {/* 🚀 Error state */}
      {hasError && fallback && (
        <div className='absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
          <div className='text-gray-500 text-sm text-center'>
            <div className='w-8 h-8 mx-auto mb-2'>🖼️</div>
            Imagem não disponível
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 🖼️ Componente de imagem responsiva otimizada
 * - Adapta-se automaticamente ao dispositivo
 * - Otimiza baseado na conexão
 */
export function ResponsiveImage(props: OptimizedImageProps) {
  const optimizationLevel = getOptimizationLevel();

  // 🚀 Sizes responsivos baseados na performance
  const responsiveSizes =
    optimizationLevel === 'high'
      ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      : '(max-width: 768px) 100vw, 50vw';

  return (
    <OptimizedImage
      {...props}
      sizes={props.sizes || responsiveSizes}
      priority={props.priority || false}
    />
  );
}
