'use client';

import React from 'react';
import { CurrencySelectProps } from '@/types/conversor-moedas';
import { cn } from '@/utils/cn';

export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  value,
  onChange,
  currencies,
  label,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn('relative', className)}>
      {label && (
        <label className='block text-sm font-medium text-slate-300 mb-2'>
          {label}
        </label>
      )}
      <div className='relative'>
        <select
          value={value}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-medium text-base appearance-none cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none [&>option]:bg-slate-800 [&>option]:text-white [&>option]:py-2 [&>option]:px-3'
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.flag} {currency.code} - {currency.name}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
          <svg
            className='w-5 h-5 text-slate-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
