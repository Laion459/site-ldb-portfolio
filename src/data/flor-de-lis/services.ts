export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  duration?: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Cortes',
    description:
      'Cortes modernos e clássicos, personalizados para cada tipo de rosto e cabelo',
    image: '/images/flor-de-lis/corte.webp',
    price: 'A partir de R$ 45',
    duration: '45-60 min',
    features: [
      'Análise do tipo de rosto',
      'Técnicas modernas',
      'Finalização profissional',
    ],
  },
  {
    id: '2',
    title: 'Coloração',
    description:
      'Colorações personalizadas, mechas, reflexos e retoque de raiz',
    image: '/images/flor-de-lis/cor.webp',
    price: 'A partir de R$ 120',
    duration: '2-3 horas',
    features: ['Análise de cor', 'Produtos de qualidade', 'Proteção capilar'],
  },
  {
    id: '3',
    title: 'Depilação',
    description:
      'Depilação com cera quente e linha, para todas as áreas do corpo',
    image: '/images/flor-de-lis/depilacao.webp',
    price: 'A partir de R$ 35',
    duration: '30-60 min',
    features: [
      'Cera hipoalergênica',
      'Técnica da linha',
      'Hidratação pós-depilação',
    ],
  },
  {
    id: '4',
    title: 'Escova',
    description:
      'Escovas, chapinhas e finalizações para todos os tipos de cabelo',
    image: '/images/flor-de-lis/escova.webp',
    price: 'A partir de R$ 40',
    duration: '45-60 min',
    features: [
      'Produtos termoprotetores',
      'Técnicas avançadas',
      'Durabilidade',
    ],
  },
  {
    id: '5',
    title: 'Hidratação',
    description:
      'Tratamentos intensivos de hidratação para cabelos danificados',
    image: '/images/flor-de-lis/hidratacao.webp',
    price: 'A partir de R$ 80',
    duration: '1-2 horas',
    features: [
      'Máscaras profissionais',
      'Tratamento personalizado',
      'Resultado imediato',
    ],
  },
  {
    id: '6',
    title: 'Manicure',
    description: 'Manicure e pedicure com esmaltação tradicional e em gel',
    image: '/images/flor-de-lis/unhas.webp',
    price: 'A partir de R$ 35',
    duration: '45-60 min',
    features: [
      'Hidratação das mãos',
      'Esmaltes de qualidade',
      'Acabamento perfeito',
    ],
  },
  {
    id: '7',
    title: 'Maquiagem',
    description:
      'Maquiagem para eventos especiais, noivas e ensaios fotográficos',
    image: '/images/flor-de-lis/make.webp',
    price: 'A partir de R$ 120',
    duration: '1-2 horas',
    features: ['Produtos profissionais', 'Técnicas modernas', 'Durabilidade'],
  },
  {
    id: '8',
    title: 'Massagem',
    description: 'Massagens relaxantes e terapêuticas para aliviar tensões',
    image: '/images/flor-de-lis/reflexo.webp',
    price: 'A partir de R$ 80',
    duration: '45-90 min',
    features: [
      'Óleos essenciais',
      'Técnicas especializadas',
      'Ambiente relaxante',
    ],
  },
  {
    id: '9',
    title: 'Reflexo',
    description: 'Reflexos e mechas para dar brilho e movimento ao cabelo',
    image: '/images/flor-de-lis/reflexo.webp',
    price: 'A partir de R$ 150',
    duration: '2-3 horas',
    features: ['Técnica precisa', 'Produtos de qualidade', 'Resultado natural'],
  },
  {
    id: '10',
    title: 'Sobrancelhas',
    description: 'Design e correção de sobrancelhas para harmonizar o rosto',
    image: '/images/flor-de-lis/sob.webp',
    price: 'A partir de R$ 25',
    duration: '30-45 min',
    features: ['Análise do rosto', 'Design personalizado', 'Técnica da linha'],
  },
  {
    id: '11',
    title: 'Tonalização',
    description: 'Tonalizações suaves para uniformizar e dar brilho ao cabelo',
    image: '/images/flor-de-lis/ton.webp',
    price: 'A partir de R$ 100',
    duration: '1-2 horas',
    features: ['Cor personalizada', 'Produtos suaves', 'Resultado natural'],
  },
];
