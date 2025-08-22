import { Metadata } from 'next';
import { CurrencyConverter } from '@/components/projetos/conversor-moedas/CurrencyConverter';
import '@/styles/projetos/conversor-moedas/index.css';

export const metadata: Metadata = {
  title: 'Conversor de Moedas - Leonardo Dev',
  description:
    'Conversor de moedas em tempo real com suporte a mais de 20 moedas internacionais. Interface moderna e responsiva para conversões precisas.',
  keywords: [
    'conversor de moedas',
    'câmbio',
    'taxa de câmbio',
    'conversão monetária',
    'real brasileiro',
    'dólar americano',
    'euro',
    'API de câmbio',
  ],
};

export default function ConversorMoedasPage() {
  return (
    <div className='min-h-screen'>
      <CurrencyConverter />
    </div>
  );
}
