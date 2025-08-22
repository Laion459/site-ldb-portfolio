import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/flor-de-lis/blog';

export const metadata: Metadata = {
  title: 'Blog - Estética Flor de Lis | Dicas de Beleza e Tendências',
  description:
    'Descubra as últimas tendências de beleza, dicas de cuidados e novidades da Estética Flor de Lis. Conteúdo exclusivo para você se manter sempre linda e atualizada.',
};

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'>
          <div className='container mx-auto px-6 lg:px-8 max-w-7xl text-center'>
            <h1 className='text-5xl md:text-6xl font-playfair font-bold text-salon-darkPink mb-6'>
              Blog da Flor de Lis
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Dicas de beleza, tendências e novidades para você se manter sempre
              linda e atualizada
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
            <div className='bg-gradient-to-r from-salon-lightPink to-white rounded-3xl overflow-hidden shadow-custom'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                <div className='relative h-96 lg:h-full'>
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-salon-pink/20 to-transparent' />
                </div>
                <div className='p-8 lg:p-12 flex flex-col justify-center'>
                  <div className='mb-4'>
                    <span className='inline-block bg-salon-pink text-white px-4 py-2 rounded-full text-sm font-medium'>
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className='text-3xl lg:text-4xl font-playfair font-bold text-salon-darkPink mb-4'>
                    {blogPosts[0].title}
                  </h2>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {blogPosts[0].excerpt}
                  </p>
                  <div className='flex items-center space-x-4 text-sm text-gray-500 mb-6'>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                    <span>•</span>
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <Link
                    href={`/projetos/flor-de-lis/blog/${blogPosts[0].slug}`}
                    className='btn-primary inline-flex items-center space-x-2'
                  >
                    <span>Ler Artigo Completo</span>
                    <svg
                      className='w-4 h-4'
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
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className='py-20 bg-gradient-to-b from-white to-salon-lightPink'>
          <div className='container mx-auto px-6 lg:px-8 max-w-7xl'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-playfair font-bold text-salon-darkPink mb-6'>
                Artigos Recentes
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                Descubra conteúdo exclusivo sobre beleza, cuidados e tendências
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {blogPosts.slice(1).map(post => (
                <article
                  key={post.id}
                  className='bg-white rounded-2xl overflow-hidden shadow-custom hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='relative h-64'>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='inline-block bg-salon-pink text-white px-3 py-1 rounded-full text-xs font-medium'>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-playfair font-bold text-salon-darkPink mb-3 line-clamp-2'>
                      {post.title}
                    </h3>
                    <p className='text-gray-600 mb-4 leading-relaxed line-clamp-3'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className='text-sm text-gray-500 mb-4'>
                      Por <span className='font-medium'>{post.author}</span>
                    </div>
                    <Link
                      href={`/projetos/flor-de-lis/blog/${post.slug}`}
                      className='text-salon-pink hover:text-salon-darkPink font-medium transition-colors duration-300 inline-flex items-center space-x-1'
                    >
                      <span>Ler mais</span>
                      <svg
                        className='w-4 h-4'
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

            {/* Newsletter Signup */}
            <div className='text-center mt-20'>
              <div className='bg-white rounded-3xl p-8 lg:p-12 shadow-custom max-w-4xl mx-auto'>
                <h3 className='text-3xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Fique por dentro das novidades!
                </h3>
                <p className='text-gray-600 mb-8 text-lg leading-relaxed'>
                  Receba em primeira mão as últimas tendências, dicas exclusivas
                  e ofertas especiais da Flor de Lis
                </p>
                <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                  <input
                    type='email'
                    placeholder='Seu melhor e-mail'
                    className='flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent'
                  />
                  <button className='btn-primary px-8 py-3 whitespace-nowrap'>
                    Inscrever-se
                  </button>
                </div>
                <p className='text-sm text-gray-500 mt-4'>
                  Prometemos não enviar spam. Você pode cancelar a inscrição a
                  qualquer momento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
