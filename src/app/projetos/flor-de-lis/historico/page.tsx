import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Histórico e Valores - Estética Flor de Lis',
  description: 'Conheça a história, missão e valores da Estética Flor de Lis',
};

export default function HistoricoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'>
          <div className='container-custom text-center'>
            <h1 className='text-5xl md:text-6xl font-playfair font-bold text-salon-darkPink mb-6'>
              Nossa História
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Mais de 15 anos de dedicação à beleza e ao bem-estar das nossas
              clientes
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className='py-20 bg-white'>
          <div className='container-custom'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                  Uma Jornada de Amor pela Beleza
                </h2>
                <div className='space-y-6 text-gray-600 leading-relaxed'>
                  <p>
                    A Estética Flor de Lis nasceu do sonho de criar um espaço
                    onde cada mulher pudesse se sentir especial e confiante.
                    Fundada em 2008, começamos como um pequeno salão com apenas
                    duas cadeiras e muito amor pelo que fazíamos.
                  </p>
                  <p>
                    Ao longo dos anos, crescemos não apenas em tamanho, mas
                    também em conhecimento e experiência. Investimos
                    constantemente em formação profissional, produtos de
                    qualidade e equipamentos modernos para oferecer sempre o
                    melhor aos nossos clientes.
                  </p>
                  <p>
                    Hoje, somos referência em beleza e estética na região,
                    atendendo mais de 500 clientes mensalmente com carinho,
                    profissionalismo e resultados que superam as expectativas.
                  </p>
                </div>
              </div>

              <div className='relative'>
                <div className='relative h-96 rounded-2xl overflow-hidden shadow-custom'>
                  <Image
                    src='/images/flor-de-lis/historia.webp'
                    alt='História do salão Flor de Lis'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='absolute -bottom-6 -left-6 bg-salon-pink text-white p-6 rounded-2xl shadow-lg'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold'>15+</div>
                    <div className='text-sm'>Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-20 bg-gradient-to-b from-salon-lightPink to-white'>
          <div className='container-custom'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                Nossos Valores
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Princípios que guiam nosso trabalho e relacionamento com cada
                cliente
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white p-8 rounded-2xl shadow-custom text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl text-white'>❤️</span>
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Amor e Dedicação
                </h3>
                <p className='text-gray-600'>
                  Cada cliente é tratada com carinho e atenção especial, como se
                  fosse da nossa família.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl text-white'>✨</span>
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Excelência
                </h3>
                <p className='text-gray-600'>
                  Buscamos sempre a perfeição em cada detalhe, desde o
                  atendimento até o resultado final.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl text-white'>🎓</span>
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Formação Contínua
                </h3>
                <p className='text-gray-600'>
                  Nossa equipe está sempre se atualizando com as últimas
                  técnicas e tendências do mercado.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl text-white'>🤝</span>
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Confiança
                </h3>
                <p className='text-gray-600'>
                  Construímos relacionamentos duradouros baseados na confiança e
                  satisfação dos nossos clientes.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl text-white'>🌱</span>
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Sustentabilidade
                </h3>
                <p className='text-gray-600'>
                  Utilizamos produtos eco-friendly e práticas sustentáveis
                  sempre que possível.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom text-center'>
                <div className='w-16 h-16 bg-salon-pink rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-2xl text-white'>🌟</span>
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-4'>
                  Inovação
                </h3>
                <p className='text-gray-600'>
                  Estamos sempre atentos às novas tendências e tecnologias para
                  oferecer o melhor aos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-20 bg-white'>
          <div className='container-custom'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                Nossa Equipe
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Profissionais qualificados e apaixonados pelo que fazem
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-custom'>
                  <Image
                    src='/images/flor-de-lis/h.webp'
                    alt='Fundadora do salão'
                    fill
                    className='object-cover'
                  />
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-2'>
                  Maria Silva
                </h3>
                <p className='text-salon-pink font-semibold mb-2'>
                  Fundadora e Diretora
                </p>
                <p className='text-gray-600'>
                  Mais de 20 anos de experiência em beleza e estética.
                  Especialista em coloração e tratamentos capilares.
                </p>
              </div>

              <div className='text-center'>
                <div className='relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-custom'>
                  <Image
                    src='/images/flor-de-lis/maos.webp'
                    alt='Especialista em manicure'
                    fill
                    className='object-cover'
                  />
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-2'>
                  Ana Costa
                </h3>
                <p className='text-salon-pink font-semibold mb-2'>
                  Especialista em Unhas
                </p>
                <p className='text-gray-600'>
                  Especialista em nail art e técnicas avançadas de manicure.
                  Formada em estética e cosmetologia.
                </p>
              </div>

              <div className='text-center'>
                <div className='relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-custom'>
                  <Image
                    src='/images/flor-de-lis/make.webp'
                    alt='Maquiadora profissional'
                    fill
                    className='object-cover'
                  />
                </div>
                <h3 className='text-2xl font-playfair font-bold text-salon-darkPink mb-2'>
                  Carla Santos
                </h3>
                <p className='text-salon-pink font-semibold mb-2'>
                  Maquiadora Profissional
                </p>
                <p className='text-gray-600'>
                  Especialista em maquiagem para noivas e eventos especiais.
                  Formada em maquiagem artística e caracterização.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-salon-pink to-salon-darkPink'>
          <div className='container-custom text-center'>
            <h2 className='text-4xl md:text-5xl font-playfair font-bold text-white mb-6'>
              Faça Parte da Nossa História
            </h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Venha conhecer nosso espaço e deixe-nos cuidar da sua beleza com o
              mesmo carinho e dedicação que dedicamos há mais de 15 anos.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/projetos/flor-de-lis/contato'
                className='btn-secondary bg-white text-salon-darkPink hover:bg-gray-100 px-8 py-4 text-lg'
              >
                Agendar Horário
              </a>
              <a
                href='tel:+5511999999999'
                className='btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-salon-darkPink px-8 py-4 text-lg'
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
