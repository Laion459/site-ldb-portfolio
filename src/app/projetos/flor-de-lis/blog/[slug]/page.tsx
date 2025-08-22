import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import { blogPosts } from '@/data/flor-de-lis/blog';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return {
      title: 'Post não encontrado - Blog Flor de Lis',
      description: 'O post solicitado não foi encontrado.',
    };
  }

  return {
    title: `${post.title} - Blog Flor de Lis`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Encontrar posts relacionados (mesma categoria)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='relative py-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'>
          <div className='container mx-auto px-6 lg:px-8 max-w-4xl'>
            <Link
              href='/projetos/flor-de-lis/blog'
              className='inline-flex items-center text-salon-darkPink hover:text-salon-pink transition-colors duration-300 mb-8'
            >
              <ArrowLeft className='w-4 h-4 mr-2' />
              Voltar ao Blog
            </Link>

            <div className='text-center'>
              <div className='mb-6'>
                <span className='inline-block bg-salon-pink text-white px-4 py-2 rounded-full text-sm font-medium'>
                  {post.category}
                </span>
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-salon-darkPink mb-6 leading-tight'>
                {post.title}
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className='flex flex-wrap items-center justify-center gap-6 text-gray-600'>
                <div className='flex items-center space-x-2'>
                  <Calendar className='w-4 h-4' />
                  <span>{post.date}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Clock className='w-4 h-4' />
                  <span>{post.readTime}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <User className='w-4 h-4' />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className='py-12 bg-white'>
          <div className='container mx-auto px-6 lg:px-8 max-w-4xl'>
            <div className='relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl'>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-6 lg:px-8 max-w-4xl'>
            <article className='prose prose-lg max-w-none'>
              <div
                className='text-gray-700 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tags */}
            <div className='mt-12 pt-8 border-t border-gray-200'>
              <h3 className='text-lg font-semibold text-salon-darkPink mb-4 flex items-center'>
                <Tag className='w-5 h-5 mr-2' />
                Tags relacionadas
              </h3>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className='bg-salon-lightPink text-salon-darkPink px-3 py-1 rounded-full text-sm font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className='py-20 bg-gradient-to-b from-white to-salon-lightPink'>
            <div className='container mx-auto px-6 lg:px-8 max-w-6xl'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Posts Relacionados
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                  Descubra mais conteúdo sobre {post.category.toLowerCase()}
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {relatedPosts.map(relatedPost => (
                  <article
                    key={relatedPost.id}
                    className='bg-white rounded-2xl overflow-hidden shadow-custom hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                  >
                    <div className='relative h-48'>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className='object-cover'
                      />
                      <div className='absolute top-4 left-4'>
                        <span className='inline-block bg-salon-pink text-white px-3 py-1 rounded-full text-xs font-medium'>
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className='p-6'>
                      <h3 className='text-lg font-playfair font-bold text-salon-darkPink mb-3 line-clamp-2'>
                        {relatedPost.title}
                      </h3>
                      <p className='text-gray-600 mb-4 leading-relaxed line-clamp-3'>
                        {relatedPost.excerpt}
                      </p>
                      <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Link
                        href={`/projetos/flor-de-lis/blog/${relatedPost.slug}`}
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
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-salon-pink to-salon-darkPink'>
          <div className='container mx-auto px-6 lg:px-8 max-w-4xl text-center'>
            <h2 className='text-3xl md:text-4xl font-playfair font-bold text-white mb-6'>
              Gostou do conteúdo?
            </h2>
            <p className='text-xl text-white/90 mb-8 leading-relaxed'>
              Agende uma consulta na Flor de Lis e transforme essas dicas em
              realidade
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/projetos/flor-de-lis/contato'
                className='btn-secondary bg-white text-salon-darkPink hover:bg-gray-100 px-8 py-4 text-lg font-semibold'
              >
                Agendar Horário
              </Link>
              <Link
                href='/projetos/flor-de-lis/blog'
                className='btn-secondary border-white text-white hover:bg-white hover:text-salon-darkPink px-8 py-4 text-lg font-semibold'
              >
                Ver Mais Posts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
