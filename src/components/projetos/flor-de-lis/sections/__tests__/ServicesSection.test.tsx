import { render, screen } from '@testing-library/react';
import ServicesSection from '../ServicesSection';

// Mock dos dados
jest.mock('@/data/flor-de-lis/services', () => ({
  services: [
    {
      id: 'cortes',
      title: 'Cortes',
      description: 'Cortes modernos e clássicos',
      image: '/test-image.jpg',
      price: 'R$ 45,00',
      duration: '45 min',
      features: ['Corte personalizado', 'Finalização', 'Dicas de manutenção'],
    },
  ],
}));

describe('ServicesSection', () => {
  it('renders services section correctly', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Nossos Serviços')).toBeInTheDocument();
    expect(screen.getByText('Cortes')).toBeInTheDocument();
    expect(screen.getByText('Cortes modernos e clássicos')).toBeInTheDocument();
  });
});
