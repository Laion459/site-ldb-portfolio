import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Estética Flor de Lis',
  description:
    'Dicas de beleza, tendências e novidades da Estética Flor de Lis',
};

const blogPosts = [
  {
    id: '1',
    title: 'Tendências de Cabelo para 2024',
    excerpt: 'Descubra as cores, cortes e técnicas que estão em alta neste ano',
    image: '/images/flor-de-lis/corte.webp',
    category: 'Tendências',
    date: '15 de Janeiro, 2024',
    readTime: '5 min de leitura',
  },
  {
    id: '2',
    title: 'Como Cuidar do Cabelo no Verão',
    excerpt:
      'Dicas essenciais para proteger e manter a saúde dos fios durante a estação mais quente',
    image: '/images/flor-de-lis/hidratacao.webp',
    category: 'Cuidados',
    date: '10 de Janeiro, 2024',
    readTime: '7 min de leitura',
  },
  {
    id: '3',
    title: 'Guia Completo de Depilação',
    excerpt:
      'Tudo que você precisa saber sobre os diferentes tipos de depilação e cuidados pós-procedimento',
    image: '/images/flor-de-lis/depilacao.webp',
    category: 'Depilação',
    date: '5 de Janeiro, 2024',
    readTime: '8 min de leitura',
  },
  {
    id: '4',
    title: 'Maquiagem para Diferentes Tipos de Rosto',
    excerpt:
      'Técnicas e dicas para realçar sua beleza natural de acordo com o formato do seu rosto',
    image: '/images/flor-de-lis/make.webp',
    category: 'Maquiagem',
    date: '1 de Janeiro, 2024',
    readTime: '6 min de leitura',
  },
  {
    id: '5',
    title: 'Tratamentos de Hidratação Profunda',
    excerpt:
      'Conheça os benefícios e tipos de hidratação para diferentes necessidades capilares',
    image: '/images/flor-de-lis/hidratacao.webp',
    category: 'Tratamentos',
    date: '28 de Dezembro, 2023',
    readTime: '9 min de leitura',
  },
  {
    id: '6',
    title: 'Cuidados com as Unhas no Inverno',
    excerpt:
      'Como manter suas unhas bonitas e saudáveis durante a estação mais fria do ano',
    image: '/images/flor-de-lis/unhas.webp',
    category: 'Unhas',
    date: '25 de Dezembro, 2023',
    readTime: '4 min de leitura',
  },
];

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'>
          <div className='container-custom text-center'>
            <h1 className='text-5xl md:text-6xl font-playfair font-bold text-salon-darkPink mb-6'>
              Blog da Flor de Lis
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Dicas de beleza, tendências e novidades para você se manter sempre
              linda e atualizada
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className='py-20 bg-white'>
          <div className='container-custom'>
            <div className='bg-gradient-to-r from-salon-lightPink to-white rounded-3xl overflow-hidden shadow-custom'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                <div className='relative h-96 lg:h-full'>
                  <Image
                    src='/images/flor-de-lis/corte.webp'
                    alt='Tendências de Cabelo para 2024'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-salon-pink text-white px-4 py-2 rounded-full text-sm font-semibold'>
                      Destaque
                    </span>
                  </div>
                </div>
                <div className='p-8 lg:p-12 flex flex-col justify-center'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <span className='text-salon-pink font-semibold'>
                      Tendências
                    </span>
                    <span className='text-gray-500'>•</span>
                    <span className='text-gray-500'>15 de Janeiro, 2024</span>
                  </div>
                  <h2 className='text-3xl lg:text-4xl font-playfair font-bold text-salon-darkPink mb-4'>
                    Tendências de Cabelo para 2024
                  </h2>
                  <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                    O ano de 2024 traz consigo uma revolução no mundo da beleza
                    capilar. Descubra as cores, cortes e técnicas que estão
                    dominando as passarelas e as redes sociais, e saiba como
                    adaptá-las ao seu estilo pessoal.
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-500 text-sm'>
                      8 min de leitura
                    </span>
                    <Link
                      href='#'
                      className='btn-primary hover:bg-salon-darkPink transition-colors duration-300'
                    >
                      Ler Artigo Completo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className='py-20 bg-gradient-to-b from-white to-salon-lightPink'>
          <div className='container-custom'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                Artigos Recentes
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Fique por dentro das últimas novidades e dicas de beleza
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {blogPosts.slice(1).map(post => (
                <article
                  key={post.id}
                  className='bg-white rounded-2xl shadow-custom overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                >
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className='object-cover transition-transform duration-300 hover:scale-110'
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='bg-salon-pink text-white px-3 py-1 rounded-full text-xs font-semibold'>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className='p-6'>
                    <div className='flex items-center space-x-4 text-sm text-gray-500 mb-3'>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className='text-xl font-playfair font-bold text-salon-darkPink mb-3 line-clamp-2'>
                      {post.title}
                    </h3>

                    <p className='text-gray-600 mb-4 line-clamp-3'>
                      {post.excerpt}
                    </p>

                    <Link
                      href='#'
                      className='text-salon-pink font-semibold hover:text-salon-darkPink transition-colors duration-300 inline-flex items-center'
                    >
                      Ler mais
                      <svg
                        className='w-4 h-4 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className='py-20 bg-gradient-to-r from-salon-pink to-salon-darkPink'>
          <div className='container-custom text-center'>
            <h2 className='text-4xl md:text-5xl font-playfair font-bold text-white mb-6'>
              Fique por Dentro das Novidades
            </h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Inscreva-se em nossa newsletter e receba dicas exclusivas de
              beleza, tendências e ofertas especiais diretamente no seu e-mail.
            </p>
            <div className='max-w-md mx-auto'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  type='email'
                  placeholder='Seu melhor e-mail'
                  className='flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white'
                />
                <button className='btn-secondary bg-white text-salon-darkPink hover:bg-gray-100 px-8 py-4 rounded-full font-semibold'>
                  Inscrever
                </button>
              </div>
              <p className='text-white/70 text-sm mt-3'>
                Não enviamos spam. Você pode cancelar a inscrição a qualquer
                momento.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className='py-20 bg-white'>
          <div className='container-custom'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                Categorias
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Navegue por temas específicos e encontre o conteúdo que mais te
                interessa
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                'Tendências',
                'Cuidados',
                'Depilação',
                'Maquiagem',
                'Tratamentos',
                'Unhas',
                'Cabelo',
                'Bem-estar',
              ].map(category => (
                <Link
                  key={category}
                  href='#'
                  className='bg-gradient-to-br from-salon-lightPink to-white p-8 rounded-2xl text-center shadow-custom hover:shadow-2xl transition-all duration-300 hover:scale-105'
                >
                  <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                    {category}
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    {Math.floor(Math.random() * 20) + 5} artigos
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
