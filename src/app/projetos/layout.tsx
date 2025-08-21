import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos | Leonardo Portfolio',
  description:
    'Portfólio de projetos desenvolvidos por Leonardo, incluindo sistemas web, aplicações e refatorações',
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='projetos-layout'>{children}</div>;
}
