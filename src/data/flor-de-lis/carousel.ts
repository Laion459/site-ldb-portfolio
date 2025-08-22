export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export const carouselImages: CarouselImage[] = [
  {
    id: '1',
    src: '/images/flor-de-lis/corte.webp',
    alt: 'Cortes de cabelo profissionais',
    title: 'Cortes Profissionais',
  },
  {
    id: '2',
    src: '/images/flor-de-lis/coloracao.webp',
    alt: 'Coloração e tinturas',
    title: 'Coloração',
  },
  {
    id: '3',
    src: '/images/flor-de-lis/depilacao.webp',
    alt: 'Depilação profissional',
    title: 'Depilação',
  },
  {
    id: '4',
    src: '/images/flor-de-lis/escova.webp',
    alt: 'Escovas e finalizações',
    title: 'Escovas',
  },
  {
    id: '5',
    src: '/images/flor-de-lis/hidratacao.webp',
    alt: 'Tratamentos de hidratação',
    title: 'Hidratação',
  },
  {
    id: '6',
    src: '/images/flor-de-lis/maquiagem.webp',
    alt: 'Maquiagem profissional',
    title: 'Maquiagem',
  },
];
