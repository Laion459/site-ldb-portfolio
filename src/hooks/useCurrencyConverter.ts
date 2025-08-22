'use client';

import { useState, useCallback, useEffect } from 'react';
import { CurrencyConverterState } from '@/types/conversor-moedas';
import { CurrencyConverterService } from '@/data/projetos/conversor-moedas/api';
import {
  defaultFromCurrency,
  defaultToCurrency,
  defaultAmount,
} from '@/data/projetos/conversor-moedas/currencies';

export const useCurrencyConverter = () => {
  const [state, setState] = useState<CurrencyConverterState>({
    fromCurrency: defaultFromCurrency,
    toCurrency: defaultToCurrency,
    fromAmount: defaultAmount,
    toAmount: defaultAmount,
    isLoading: false,
    error: null,
    exchangeRate: null,
  });

  const updateFromCurrency = useCallback((currency: string) => {
    setState(prev => ({
      ...prev,
      fromCurrency: currency,
      error: null,
    }));
  }, []);

  const updateToCurrency = useCallback((currency: string) => {
    setState(prev => ({
      ...prev,
      toCurrency: currency,
      error: null,
    }));
  }, []);

  const updateFromAmount = useCallback((amount: number) => {
    setState(prev => ({
      ...prev,
      fromAmount: amount,
      error: null,
    }));
  }, []);

  const updateToAmount = useCallback((amount: number) => {
    setState(prev => ({
      ...prev,
      toAmount: amount,
      error: null,
    }));
  }, []);

  const swapCurrencies = useCallback(() => {
    setState(prev => ({
      ...prev,
      fromCurrency: prev.toCurrency,
      toCurrency: prev.fromCurrency,
      fromAmount: prev.toAmount,
      toAmount: prev.fromAmount,
      error: null,
    }));
  }, []);

  const convertCurrency = useCallback(async () => {
    if (state.fromCurrency === state.toCurrency) {
      setState(prev => ({
        ...prev,
        toAmount: prev.fromAmount,
        exchangeRate: {
          from: { code: prev.fromCurrency, name: prev.fromCurrency },
          to: { code: prev.toCurrency, name: prev.toCurrency },
          rate: 1,
          amount: prev.fromAmount,
          convertedAmount: prev.fromAmount,
        },
        error: null,
      }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const exchangeRate = await CurrencyConverterService.convertCurrency(
        state.fromCurrency,
        state.toCurrency,
        state.fromAmount
      );

      setState(prev => ({
        ...prev,
        toAmount: exchangeRate.convertedAmount,
        exchangeRate,
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      }));
    }
  }, [state.fromCurrency, state.toCurrency, state.fromAmount]);

  // Converter automaticamente quando as moedas ou valor mudarem
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      convertCurrency();
    }, 500); // Debounce de 500ms

    return () => clearTimeout(timeoutId);
  }, [convertCurrency]);

  return {
    ...state,
    updateFromCurrency,
    updateToCurrency,
    updateFromAmount,
    updateToAmount,
    swapCurrencies,
    convertCurrency,
  };
};
