"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const Skeleton = ({ className = "", width = "100%", height = "20px", rounded = "md" }: SkeletonProps) => {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <motion.div
      className={`bg-gray-200 dark:bg-gray-700 ${roundedClasses[rounded]} ${className}`}
      style={{ width, height }}
      animate={{
        background: [
          "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)",
          "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)",
          "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)"
        ]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

interface AdvancedLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  className?: string;
  delay?: number;
  fadeIn?: boolean;
}

const AdvancedLoading = ({ 
  isLoading, 
  children, 
  skeleton,
  className = "",
  delay = 0,
  fadeIn = true
}: AdvancedLoadingProps) => {
  const [showContent, setShowContent] = useState(!isLoading);
  const [showSkeleton, setShowSkeleton] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowContent(false);
      setShowSkeleton(true);
    } else {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
        setShowContent(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, delay]);

  if (showSkeleton) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {skeleton || <DefaultSkeleton />}
      </motion.div>
    );
  }

  if (showContent) {
    return (
      <motion.div
        className={className}
        initial={fadeIn ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    );
  }

  return null;
};

// Skeleton padrão para diferentes tipos de conteúdo
const DefaultSkeleton = () => (
  <div className="space-y-4">
    {/* Header skeleton */}
    <div className="space-y-3">
      <Skeleton width="60%" height="32px" />
      <Skeleton width="80%" height="20px" />
      <Skeleton width="40%" height="20px" />
    </div>
    
    {/* Content skeleton */}
    <div className="space-y-3">
      <Skeleton width="100%" height="16px" />
      <Skeleton width="95%" height="16px" />
      <Skeleton width="90%" height="16px" />
      <Skeleton width="85%" height="16px" />
    </div>
    
    {/* Cards skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Skeleton width="100%" height="120px" rounded="lg" />
          <Skeleton width="70%" height="20px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="60%" height="16px" />
        </div>
      ))}
    </div>
  </div>
);

// Skeleton específico para cards
export const CardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton width="48px" height="48px" rounded="full" />
        <div className="space-y-2 flex-1">
          <Skeleton width="60%" height="20px" />
          <Skeleton width="40%" height="16px" />
        </div>
      </div>
      <Skeleton width="100%" height="16px" />
      <Skeleton width="90%" height="16px" />
      <div className="flex space-x-2">
        <Skeleton width="80px" height="24px" rounded="full" />
        <Skeleton width="100px" height="24px" rounded="full" />
      </div>
    </div>
  </div>
);

// Skeleton para lista
export const ListSkeleton = ({ itemCount = 5 }: { itemCount?: number }) => (
  <div className="space-y-3">
    {Array.from({ length: itemCount }).map((_, i) => (
      <div key={i} className="flex items-center space-x-3 p-3">
        <Skeleton width="40px" height="40px" rounded="full" />
        <div className="space-y-2 flex-1">
          <Skeleton width="70%" height="16px" />
          <Skeleton width="50%" height="14px" />
        </div>
        <Skeleton width="60px" height="20px" />
      </div>
    ))}
  </div>
);

// Skeleton para tabela
export const TableSkeleton = ({ rowCount = 5, columnCount = 4 }: { rowCount?: number; columnCount?: number }) => (
  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
    {/* Header */}
    <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-6">
        {Array.from({ length: columnCount }).map((_, i) => (
          <Skeleton key={i} width="120px" height="20px" />
        ))}
      </div>
    </div>
    
    {/* Rows */}
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {Array.from({ length: rowCount }).map((_, i) => (
        <div key={i} className="px-6 py-4">
          <div className="flex space-x-6">
            {Array.from({ length: columnCount }).map((_, j) => (
              <Skeleton key={j} width="100px" height="16px" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Loading spinner avançado
export const LoadingSpinner = ({ size = "md", color = "blue" }: { size?: "sm" | "md" | "lg"; color?: "blue" | "purple" | "green" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );
};

export default AdvancedLoading;
export { Skeleton }; 