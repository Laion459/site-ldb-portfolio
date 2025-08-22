import { ExchangeRate } from '@/types/conversor-moedas';

const EXCHANGE_RATE_API_BASE = 'https://api.exchangerate-api.com/v4/latest';

export interface ExchangeRateResponse {
  rates: Record<string, number>;
  base: string;
  date: string;
}

export class CurrencyConverterService {
  private static async fetchExchangeRates(
    fromCurrency: string
  ): Promise<ExchangeRateResponse> {
    try {
      const response = await fetch(`${EXCHANGE_RATE_API_BASE}/${fromCurrency}`);

      if (!response.ok) {
        throw new Error(
          `Erro na API: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch {
      throw new Error(
        'Falha ao conectar com o serviço de câmbio. Tente novamente.'
      );
    }
  }

  public static async convertCurrency(
    fromCurrency: string,
    toCurrency: string,
    amount: number
  ): Promise<ExchangeRate> {
    try {
      const response = await this.fetchExchangeRates(fromCurrency);
      const rate = response.rates[toCurrency];

      if (rate === undefined) {
        throw new Error(`Moeda de destino não suportada: ${toCurrency}`);
      }

      const convertedAmount = amount * rate;

      return {
        from: { code: fromCurrency, name: fromCurrency },
        to: { code: toCurrency, name: toCurrency },
        rate,
        amount,
        convertedAmount: Number(convertedAmount.toFixed(2)),
      };
    } catch (error) {
      throw error;
    }
  }

  public static async getExchangeRate(
    fromCurrency: string,
    toCurrency: string
  ): Promise<number> {
    try {
      const response = await this.fetchExchangeRates(fromCurrency);
      const rate = response.rates[toCurrency];

      if (rate === undefined) {
        throw new Error(`Moeda de destino não suportada: ${toCurrency}`);
      }

      return rate;
    } catch (error) {
      throw error;
    }
  }
}
