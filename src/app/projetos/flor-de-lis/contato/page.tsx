import { Metadata } from 'next';
import Header from '@/components/projetos/flor-de-lis/layout/Header';
import Footer from '@/components/projetos/flor-de-lis/layout/Footer';
import ContactSection from '@/components/projetos/flor-de-lis/sections/ContactSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contato - Estética Flor de Lis',
  description:
    'Entre em contato conosco e agende seu horário na Estética Flor de Lis',
};

export default function ContatoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-salon-pink via-salon-lightPink to-white'>
          <div className='container-custom text-center'>
            <h1 className='text-5xl md:text-6xl font-playfair font-bold text-salon-darkPink mb-6'>
              Entre em Contato
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Estamos aqui para cuidar da sua beleza. Entre em contato e agende
              seu horário!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Location Section */}
        <section className='py-20 bg-white'>
          <div className='container-custom'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                Nossa Localização
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Venha nos visitar em um local de fácil acesso e com
                estacionamento gratuito
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
              <div>
                <div className='space-y-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xl'>📍</span>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                        Endereço
                      </h3>
                      <p className='text-gray-600'>
                        Rua das Flores, 123 - Centro
                        <br />
                        São Paulo - SP, 01234-567
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xl'>🚗</span>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                        Como Chegar
                      </h3>
                      <p className='text-gray-600'>
                        • Metrô: Estação Sé (Linha Azul)
                        <br />
                        • Ônibus: Linhas 8000, 8001, 8002
                        <br />• Carro: Estacionamento gratuito no local
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xl'>🎯</span>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold text-salon-darkPink mb-2'>
                        Ponto de Referência
                      </h3>
                      <p className='text-gray-600'>
                        Próximo ao Shopping Center e ao lado da Farmácia
                        Popular. Fácil localização com fachada rosa
                        característica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='relative h-96 rounded-2xl overflow-hidden shadow-custom'>
                  <Image
                    src='/images/flor-de-lis/agenda.webp'
                    alt='Localização do salão Flor de Lis'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='absolute -bottom-6 -right-6 bg-salon-pink text-white p-6 rounded-2xl shadow-lg'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold'>📍</div>
                    <div className='text-sm'>Fácil Acesso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20 bg-gradient-to-b from-salon-lightPink to-white'>
          <div className='container-custom'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-playfair font-bold text-salon-darkPink mb-6'>
                Perguntas Frequentes
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Tire suas dúvidas sobre nossos serviços e atendimento
              </p>
            </div>

            <div className='max-w-4xl mx-auto space-y-6'>
              <div className='bg-white p-8 rounded-2xl shadow-custom'>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-3'>
                  Como faço para agendar um horário?
                </h3>
                <p className='text-gray-600'>
                  Você pode agendar através do WhatsApp, telefone ou
                  pessoalmente no salão. Recomendamos agendar com antecedência,
                  especialmente para serviços de coloração e maquiagem.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom'>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-3'>
                  Qual o prazo para cancelamento?
                </h3>
                <p className='text-gray-600'>
                  Pedimos que o cancelamento seja feito com pelo menos 24h de
                  antecedência. Isso nos permite oferecer o horário para outras
                  clientes.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom'>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-3'>
                  Vocês aceitam cartões de crédito?
                </h3>
                <p className='text-gray-600'>
                  Sim! Aceitamos todos os cartões de crédito e débito, além de
                  PIX e dinheiro. Também oferecemos parcelamento em até 6x sem
                  juros.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom'>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-3'>
                  Preciso trazer algum produto?
                </h3>
                <p className='text-gray-600'>
                  Não é necessário! Utilizamos produtos de primeira linha que
                  estão incluídos no valor do serviço. Se você preferir usar
                  produtos específicos, pode trazê-los.
                </p>
              </div>

              <div className='bg-white p-8 rounded-2xl shadow-custom'>
                <h3 className='text-xl font-semibold text-salon-darkPink mb-3'>
                  Vocês atendem crianças?
                </h3>
                <p className='text-gray-600'>
                  Sim! Atendemos clientes de todas as idades, incluindo
                  crianças. Para menores de 18 anos, é necessário acompanhamento
                  de um responsável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-salon-pink to-salon-darkPink'>
          <div className='container-custom text-center'>
            <h2 className='text-4xl md:text-5xl font-playfair font-bold text-white mb-6'>
              Pronto para se Transformar?
            </h2>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              Não perca mais tempo! Entre em contato agora mesmo e agende seu
              horário para começar sua transformação.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://wa.me/5511999999999'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-secondary bg-white text-salon-darkPink hover:bg-gray-100 px-8 py-4 text-lg'
              >
                WhatsApp
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
