'use client';

import React from 'react';
import { ExchangeRateDisplayProps } from '@/types/conversor-moedas';
import { formatNumber } from '@/utils/formatNumber';
import { cn } from '@/utils/cn';

export const ExchangeRateDisplay: React.FC<ExchangeRateDisplayProps> = ({
  exchangeRate,
  className,
}) => {
  if (!exchangeRate) {
    return null;
  }

  const { from, to, rate, amount, convertedAmount } = exchangeRate;

  return (
    <div className={cn('mt-8', className)}>
      {/* Main Rate Card */}
      <div className='relative overflow-hidden bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl border border-emerald-400/30 shadow-2xl'>
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)] opacity-60' />

        <div className='relative z-10 p-8'>
          {/* Header */}
          <div className='text-center mb-8'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-4 shadow-lg'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Taxa de Câmbio Atual
            </h3>
            <p className='text-slate-300'>Conversão em tempo real</p>
          </div>

          {/* Rate Display */}
          <div className='text-center mb-8'>
            <div className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3'>
              1 {from.code} = {formatNumber(rate, 4)} {to.code}
            </div>
            <div className='text-lg text-slate-300 font-medium'>
              Taxa atualizada agora
            </div>
          </div>

          {/* Conversion Details */}
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
              {/* From Amount */}
              <div className='text-center space-y-2'>
                <div className='text-3xl font-bold text-white'>
                  {formatNumber(amount)}
                </div>
                <div className='text-sm text-slate-400 font-medium'>
                  {from.code} - {from.name}
                </div>
                <div className='w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto' />
              </div>

              {/* Conversion Arrow */}
              <div className='flex items-center justify-center'>
                <div className='relative'>
                  <div className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </div>
                  {/* Glow Effect */}
                  <div className='absolute inset-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse' />
                </div>
              </div>

              {/* To Amount */}
              <div className='text-center space-y-2'>
                <div className='text-3xl font-bold text-emerald-400'>
                  {formatNumber(convertedAmount)}
                </div>
                <div className='text-sm text-slate-400 font-medium'>
                  {to.code} - {to.name}
                </div>
                <div className='w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto' />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className='mt-6 text-center'>
            <div className='inline-flex items-center space-x-3 text-slate-400 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10'>
              <svg
                className='w-4 h-4 text-emerald-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>Taxa obtida via API externa de câmbio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
