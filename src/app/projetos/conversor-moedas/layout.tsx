import { ReactNode } from 'react';

interface ConversorMoedasLayoutProps {
  children: ReactNode;
}

export default function ConversorMoedasLayout({
  children,
}: ConversorMoedasLayoutProps) {
  return <div className='conversor-moedas-layout'>{children}</div>;
}
