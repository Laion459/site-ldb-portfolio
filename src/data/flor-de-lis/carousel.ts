export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export const carouselImages: CarouselImage[] = [
  {
    id: '1',
    src: '/images/flor-de-lis/corte.webp',
    alt: 'Cortes de cabelo profissionais',
    title: 'Cortes Profissionais',
    subtitle:
      'Transforme seu visual com técnicas exclusivas e tendências atuais',
  },
  {
    id: '2',
    src: '/images/flor-de-lis/coloracao.webp',
    alt: 'Coloração e tinturas',
    title: 'Coloração',
    subtitle: 'Descubra a cor que realça sua beleza natural e personalidade',
  },
  {
    id: '3',
    src: '/images/flor-de-lis/depilacao.webp',
    alt: 'Depilação profissional',
    title: 'Depilação',
    subtitle: 'Pele suave e sedosa com tratamentos especializados e duradouros',
  },
  {
    id: '4',
    src: '/images/flor-de-lis/escova.webp',
    alt: 'Escovas e finalizações',
    title: 'Escovas',
    subtitle: 'Finalizações perfeitas para cada ocasião e estilo de cabelo',
  },
  {
    id: '5',
    src: '/images/flor-de-lis/hidratacao.webp',
    alt: 'Tratamentos de hidratação',
    title: 'Hidratação',
    subtitle:
      'Revitalize seu cabelo com tratamentos intensivos e resultados visíveis',
  },
  {
    id: '6',
    src: '/images/flor-de-lis/maquiagem.webp',
    alt: 'Maquiagem profissional',
    title: 'Maquiagem',
    subtitle:
      'Realce sua beleza com técnicas profissionais e produtos de qualidade',
  },
];
