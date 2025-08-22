export interface Currency {
  code: string;
  name: string;
  flag?: string;
}

export interface ExchangeRate {
  from: Currency;
  to: Currency;
  rate: number;
  amount: number;
  convertedAmount: number;
}

export interface CurrencyConverterState {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;
  isLoading: boolean;
  error: string | null;
  exchangeRate: ExchangeRate | null;
}

export interface CurrencyConverterProps {
  className?: string;
}

export interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
  label: string;
  className?: string;
}

export interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

export interface SwapButtonProps {
  onSwap: () => void;
  className?: string;
}

export interface ExchangeRateDisplayProps {
  exchangeRate: ExchangeRate | null;
  className?: string;
}
