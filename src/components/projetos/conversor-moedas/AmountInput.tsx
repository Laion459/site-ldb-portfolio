'use client';

import React, { useState } from 'react';
import { AmountInputProps } from '@/types/conversor-moedas';
import { cn } from '@/utils/cn';
import { formatNumber } from '@/utils/formatNumber';

export const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  label,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(value.toString());
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDisplayValue(newValue);

    const numericValue = parseFloat(newValue);
    if (!isNaN(numericValue) && numericValue >= 0) {
      onChange(numericValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setDisplayValue(value.toString());
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDisplayValue(formatNumber(value));
  };

  return (
    <div className={cn('relative', className)}>
      {label && (
        <label className='block text-sm font-medium text-slate-300 mb-2'>
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          type='number'
          value={isFocused ? displayValue : formatNumber(value)}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          min='0'
          step='0.01'
          className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-medium text-base text-center placeholder-slate-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
          placeholder='0.00'
        />

        {/* Currency Icon */}
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
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
              d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
