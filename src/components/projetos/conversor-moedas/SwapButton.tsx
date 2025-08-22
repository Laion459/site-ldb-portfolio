'use client';

import React from 'react';
import { SwapButtonProps } from '@/types/conversor-moedas';
import { cn } from '@/utils/cn';

export const SwapButton: React.FC<SwapButtonProps> = ({
  onSwap,
  className,
}) => {
  const handleClick = () => {
    onSwap();
  };

  return (
    <div className={cn('flex justify-center', className)}>
      <button
        onClick={handleClick}
        type='button'
        aria-label='Trocar moedas'
        className='w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900'
      >
        {/* Icon */}
        <div className='flex items-center justify-center w-full h-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-white transition-transform duration-300 hover:rotate-180'
          >
            <path d='M7 16V4M7 4L3 8M7 4L11 8' />
            <path d='M17 8V20M17 20L21 16M17 20L13 16' />
          </svg>
        </div>
      </button>
    </div>
  );
};
