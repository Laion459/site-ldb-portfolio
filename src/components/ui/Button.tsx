'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'brand'
    | 'success'
    | 'warning'
    | 'error'
    | 'rose'
    | 'outline'
    | 'ghost'
    | 'gradient'
    | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', children, ...props },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';

    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:shadow-primary',
      secondary:
        'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl',
      accent:
        'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl hover:shadow-accent',
      brand:
        'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-400 shadow-lg hover:shadow-xl hover:shadow-brand',
      success:
        'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400 shadow-lg hover:shadow-xl',
      warning:
        'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 shadow-lg hover:shadow-xl',
      error:
        'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 shadow-lg hover:shadow-xl',
      rose: 'bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-400 shadow-lg hover:shadow-xl hover:shadow-rose',
      outline:
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 bg-transparent',
      ghost:
        'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 bg-transparent',
      gradient:
        'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 focus:ring-purple-500 shadow-lg hover:shadow-xl hover:shadow-accent',
      glass:
        'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 focus:ring-white/50 shadow-lg hover:shadow-xl',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {/* Efeito de brilho para variantes especiais */}
        {(variant === 'gradient' || variant === 'glass') && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        )}

        {/* Conteúdo do botão */}
        <span className='relative z-10'>{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
