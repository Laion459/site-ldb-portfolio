import { Currency } from '@/types/conversor-moedas';

export const currencies: Currency[] = [
  { code: 'ARS', name: 'Peso Argentino', flag: '🇦🇷' },
  { code: 'BRL', name: 'Real Brasileiro', flag: '🇧🇷' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'USD', name: 'Dólar Americano', flag: '🇺🇸' },
  { code: 'JPY', name: 'Iene Japonês', flag: '🇯🇵' },
  { code: 'GBP', name: 'Libra Esterlina', flag: '🇬🇧' },
  { code: 'AUD', name: 'Dólar Australiano', flag: '🇦🇺' },
  { code: 'CAD', name: 'Dólar Canadense', flag: '🇨🇦' },
  { code: 'CHF', name: 'Franco Suíço', flag: '🇨🇭' },
  { code: 'CNY', name: 'Yuan Chinês', flag: '🇨🇳' },
  { code: 'HKD', name: 'Dólar de Hong Kong', flag: '🇭🇰' },
  { code: 'NZD', name: 'Dólar Neozelandês', flag: '🇳🇿' },
  { code: 'SEK', name: 'Coroa Sueca', flag: '🇸🇪' },
  { code: 'KRW', name: 'Won Sul-Coreano', flag: '🇰🇷' },
  { code: 'SGD', name: 'Dólar de Cingapura', flag: '🇸🇬' },
  { code: 'NOK', name: 'Coroa Norueguesa', flag: '🇳🇴' },
  { code: 'MXN', name: 'Peso Mexicano', flag: '🇲🇽' },
  { code: 'INR', name: 'Rupia Indiana', flag: '🇮🇳' },
  { code: 'RUB', name: 'Rublo Russo', flag: '🇷🇺' },
  { code: 'ZAR', name: 'Rand Sul-Africano', flag: '🇿🇦' },
  { code: 'TRY', name: 'Lira Turca', flag: '🇹🇷' },
];

export const defaultFromCurrency = 'BRL';
export const defaultToCurrency = 'USD';
export const defaultAmount = 1;
