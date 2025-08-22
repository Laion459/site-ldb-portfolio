'use client';

import React from 'react';
import { CurrencyConverterProps } from '@/types/conversor-moedas';
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { currencies } from '@/data/projetos/conversor-moedas/currencies';
import { CurrencySelect } from './CurrencySelect';
import { AmountInput } from './AmountInput';
import { SwapButton } from './SwapButton';
import { ExchangeRateDisplay } from './ExchangeRateDisplay';
import { cn } from '@/utils/cn';

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  className,
}) => {
  const {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    isLoading,
    error,
    exchangeRate,
    updateFromCurrency,
    updateToCurrency,
    updateFromAmount,
    updateToAmount,
    swapCurrencies,
  } = useCurrencyConverter();

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden',
        className
      )}
    >
      {/* Enhanced Background Pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1)_0%,transparent_50%)]' />

      {/* Floating Elements with Better Positioning */}
      <div className='absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl animate-pulse delay-500' />

      <div className='relative z-10 min-h-screen flex items-center justify-center p-4'>
        <div className='w-full max-w-6xl'>
          {/* Enhanced Header Section */}
          <div className='text-center mb-8 animate-fade-in-up'>
            {/* Title */}
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-3 animate-text-reveal bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent'>
              Conversor de Moedas
            </h1>

            {/* Subtitle */}
            <p className='text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200'>
              Converta valores entre mais de{' '}
              <span className='text-emerald-400 font-semibold'>
                20 moedas internacionais
              </span>{' '}
              com taxas atualizadas em{' '}
              <span className='text-cyan-400 font-semibold'>tempo real</span>
            </p>
          </div>

          {/* Enhanced Main Converter Card */}
          <div className='bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-5 md:p-6 animate-fade-in-up animate-delay-300 relative overflow-hidden'>
            {/* Card Background Pattern */}
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5' />
            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-2xl' />
            <div className='absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl' />

            <div className='relative z-10'>
              <form className='space-y-6' onSubmit={e => e.preventDefault()}>
                {/* Enhanced Conversion Form */}
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 items-center'>
                  {/* From Currency Section */}
                  <div className='space-y-3'>
                    <div className='text-center'>
                      <div className='inline-flex items-center space-x-2 mb-2'>
                        <div className='w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full' />
                        <h3 className='text-base font-bold text-white'>
                          Moeda de Origem
                        </h3>
                      </div>
                      <p className='text-slate-400 text-xs'>
                        Selecione a moeda que deseja converter
                      </p>
                    </div>

                    <CurrencySelect
                      value={fromCurrency}
                      onChange={updateFromCurrency}
                      currencies={currencies}
                      label=''
                      className='animate-fade-in-left'
                    />

                    <AmountInput
                      value={fromAmount}
                      onChange={updateFromAmount}
                      label=''
                      className='animate-fade-in-left animate-delay-100'
                    />
                  </div>

                  {/* Swap Button Section */}
                  <div className='flex justify-center animate-fade-in-up animate-delay-200'>
                    <SwapButton onSwap={swapCurrencies} />
                  </div>

                  {/* To Currency Section */}
                  <div className='space-y-3'>
                    <div className='text-center'>
                      <div className='inline-flex items-center space-x-2 mb-2'>
                        <div className='w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full' />
                        <h3 className='text-base font-bold text-white'>
                          Moeda de Destino
                        </h3>
                      </div>
                      <p className='text-slate-400 text-xs'>
                        Selecione a moeda para conversão
                      </p>
                    </div>

                    <CurrencySelect
                      value={toCurrency}
                      onChange={updateToCurrency}
                      currencies={currencies}
                      label=''
                      className='animate-fade-in-right'
                    />

                    <AmountInput
                      value={toAmount}
                      onChange={updateToAmount}
                      label=''
                      className='animate-fade-in-right animate-delay-100'
                      disabled
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {isLoading && (
                  <div className='flex items-center justify-center space-x-3 text-emerald-400 animate-pulse'>
                    <div className='w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin' />
                    <span className='text-base font-medium'>
                      Convertendo moedas...
                    </span>
                  </div>
                )}

                {error && (
                  <div className='flex items-center justify-center space-x-3 text-red-400 animate-shake'>
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='text-base font-medium'>{error}</span>
                  </div>
                )}

                {/* Exchange Rate Display */}
                {exchangeRate && !isLoading && !error && (
                  <div className='animate-fade-in-up animate-delay-300'>
                    <ExchangeRateDisplay exchangeRate={exchangeRate} />
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className='text-center mt-6 animate-fade-in-up animate-delay-400'>
            <div className='inline-block bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-4 py-3'>
              <p className='text-slate-400 text-xs'>
                💡 <span className='text-emerald-400 font-medium'>Dica:</span>{' '}
                As taxas de câmbio são atualizadas em tempo real através da API
                externa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
