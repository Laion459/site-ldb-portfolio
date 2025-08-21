'use client';

import Button from './Button';

const ColorShowcase = () => {
  return (
    <div className='p-8 space-y-12'>
      {/* Título */}
      <div className='text-center'>
        <h1 className='text-5xl font-bold gradient-text mb-4'>
          Paleta de Cores Expandida
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-400'>
          Nova paleta de cores com gradientes, sombras e efeitos especiais
        </p>
      </div>

      {/* Variantes de Botões */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-primary mb-6'>
          Variantes de Botões
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <Button variant='primary' size='lg'>
            Primary
          </Button>
          <Button variant='secondary' size='lg'>
            Secondary
          </Button>
          <Button variant='accent' size='lg'>
            Accent
          </Button>
          <Button variant='brand' size='lg'>
            Brand
          </Button>
          <Button variant='success' size='lg'>
            Success
          </Button>
          <Button variant='warning' size='lg'>
            Warning
          </Button>
          <Button variant='error' size='lg'>
            Error
          </Button>
          <Button variant='rose' size='lg'>
            Rose
          </Button>
          <Button variant='outline' size='lg'>
            Outline
          </Button>
          <Button variant='ghost' size='lg'>
            Ghost
          </Button>
          <Button variant='gradient' size='lg'>
            Gradient
          </Button>
          <Button variant='glass' size='lg'>
            Glass
          </Button>
        </div>
      </section>

      {/* Gradientes de Texto */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-accent mb-6'>
          Gradientes de Texto
        </h2>
        <div className='space-y-4'>
          <h3 className='text-4xl font-bold gradient-text'>
            Gradiente Principal (Azul → Roxo → Ciano)
          </h3>
          <h3 className='text-4xl font-bold gradient-text-primary'>
            Gradiente Azul (Azul 400 → 600 → 800)
          </h3>
          <h3 className='text-4xl font-bold gradient-text-accent'>
            Gradiente Destaque (Roxo 400 → 600 → Rosa 500)
          </h3>
          <h3 className='text-4xl font-bold gradient-text-brand'>
            Gradiente Marca (Ciano 400 → 600 → Azul 500)
          </h3>
        </div>
      </section>

      {/* Gradientes de Fundo */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-brand mb-6'>
          Gradientes de Fundo
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='h-32 gradient-bg-primary rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>
              Gradiente Primário
            </span>
          </div>
          <div className='h-32 gradient-bg-accent rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>
              Gradiente Destaque
            </span>
          </div>
          <div className='h-32 gradient-bg-brand rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>
              Gradiente Marca
            </span>
          </div>
          <div className='h-32 gradient-bg-hero rounded-xl flex items-center justify-center'>
            <span className='text-gray-800 font-bold text-lg'>
              Gradiente Hero
            </span>
          </div>
        </div>
      </section>

      {/* Sombras Coloridas */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-rose mb-6'>
          Sombras Coloridas
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='h-24 bg-white dark:bg-gray-800 rounded-xl shadow-primary flex items-center justify-center'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Sombra Primária
            </span>
          </div>
          <div className='h-24 bg-white dark:bg-gray-800 rounded-xl shadow-accent flex items-center justify-center'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Sombra Destaque
            </span>
          </div>
          <div className='h-24 bg-white dark:bg-gray-800 rounded-xl shadow-brand flex items-center justify-center'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Sombra Marca
            </span>
          </div>
          <div className='h-24 bg-white dark:bg-gray-800 rounded-xl shadow-rose flex items-center justify-center'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Sombra Rosa
            </span>
          </div>
        </div>
      </section>

      {/* Efeitos de Brilho */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-accent mb-6'>
          Efeitos de Brilho
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='h-24 bg-blue-600 rounded-xl hover-glow flex items-center justify-center cursor-pointer transition-all duration-300'>
            <span className='text-white font-bold'>Brilho Primário</span>
          </div>
          <div className='h-24 bg-purple-600 rounded-xl hover-glow-accent flex items-center justify-center cursor-pointer transition-all duration-300'>
            <span className='text-white font-bold'>Brilho Destaque</span>
          </div>
          <div className='h-24 bg-cyan-500 rounded-xl hover-glow-brand flex items-center justify-center cursor-pointer transition-all duration-300'>
            <span className='text-white font-bold'>Brilho Marca</span>
          </div>
          <div className='h-24 bg-rose-500 rounded-xl hover-glow-rose flex items-center justify-center cursor-pointer transition-all duration-300'>
            <span className='text-white font-bold'>Brilho Rosa</span>
          </div>
        </div>
      </section>

      {/* Bordas com Gradiente */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-primary mb-6'>
          Bordas com Gradiente
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='h-32 gradient-border rounded-xl flex items-center justify-center bg-white dark:bg-gray-800'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Borda com Gradiente
            </span>
          </div>
          <div className='h-32 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-border rounded-xl flex items-center justify-center bg-white dark:bg-gray-800'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Borda Roxo → Rosa
            </span>
          </div>
          <div className='h-32 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-border rounded-xl flex items-center justify-center bg-white dark:bg-gray-800'>
            <span className='text-gray-800 dark:text-white font-bold'>
              Borda Ciano → Azul
            </span>
          </div>
        </div>
      </section>

      {/* Animações de Cores */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-brand mb-6'>
          Animações de Cores
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl animate-color-shift flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>Mudança de Cor</span>
          </div>
          <div className='h-32 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-xl animate-pulse flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>Pulsação</span>
          </div>
        </div>
      </section>

      {/* Paleta de Cores */}
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold gradient-text-accent mb-6'>
          Paleta de Cores
        </h2>
        <div className='space-y-8'>
          {/* Primárias */}
          <div>
            <h4 className='text-lg font-semibold mb-3'>Cores Primárias</h4>
            <div className='grid grid-cols-10 gap-2'>
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className='h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white'
                  style={{
                    backgroundColor: `var(--primary-${i === 0 ? '50' : i * 100})`,
                  }}
                >
                  {i === 0 ? '50' : i * 100}
                </div>
              ))}
            </div>
          </div>

          {/* Destaques */}
          <div>
            <h4 className='text-lg font-semibold mb-3'>Cores de Destaque</h4>
            <div className='grid grid-cols-10 gap-2'>
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className='h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white'
                  style={{
                    backgroundColor: `var(--accent-${i === 0 ? '50' : i * 100})`,
                  }}
                >
                  {i === 0 ? '50' : i * 100}
                </div>
              ))}
            </div>
          </div>

          {/* Marca */}
          <div>
            <h4 className='text-lg font-semibold mb-3'>Cores de Marca</h4>
            <div className='grid grid-cols-10 gap-2'>
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className='h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white'
                  style={{
                    backgroundColor: `var(--brand-${i === 0 ? '50' : i * 100})`,
                  }}
                >
                  {i === 0 ? '50' : i * 100}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorShowcase;
