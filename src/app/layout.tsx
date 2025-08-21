import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { HydrationBoundary } from '@/components/ui/HydrationBoundary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leonardo - Backend Engineer | APIs Escaláveis e Seguras',
  description:
    'Desenvolvedor backend sênior especializado em criar APIs escaláveis, seguras e de alta performance. Experiência em Node.js, Laravel, PostgreSQL e arquiteturas distribuídas.',
  keywords: [
    'Backend Engineer',
    'Node.js Developer',
    'Laravel Developer',
    'API Development',
    'PostgreSQL',
    'Microservices',
    'Full Stack Developer',
    'Brazil Developer',
    'Remote Developer',
  ],
  authors: [{ name: 'Leonardo' }],
  creator: 'Leonardo',
  publisher: 'Leonardo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://leonardo-portfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Leonardo - Backend Engineer | APIs Escaláveis e Seguras',
    description:
      'Desenvolvedor backend sênior especializado em criar APIs escaláveis, seguras e de alta performance.',
    url: 'https://leonardo-portfolio.com',
    siteName: 'Leonardo Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Leonardo - Backend Engineer Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonardo - Backend Engineer | APIs Escaláveis e Seguras',
    description:
      'Desenvolvedor backend sênior especializado em criar APIs escaláveis, seguras e de alta performance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/images/icons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/images/icons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/images/icons/favicon.svg'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#2563eb' />
        <meta name='msapplication-TileColor' content='#2563eb' />

        {/* Script para remover atributos de extensões que causam hydration mismatch */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Função para remover atributos problemáticos
                function removeProblematicAttributes() {
                  const body = document.body;
                  if (body) {
                    const problematicAttrs = [
                      'cz-shortcut-listen',
                      'data-extension',
                      'data-browser-extension',
                      'data-colorzilla',
                      'data-color-picker'
                    ];
                    
                    problematicAttrs.forEach(attr => {
                      if (body.hasAttribute(attr)) {
                        body.removeAttribute(attr);
                      }
                    });
                  }
                }
                
                // Remover imediatamente se body já existe
                if (document.body) {
                  removeProblematicAttributes();
                }
                
                // Aguardar body estar disponível
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeProblematicAttributes);
                } else {
                  removeProblematicAttributes();
                }
                
                // Observer para remover atributos que forem adicionados depois
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && 
                        mutation.target === document.body &&
                        mutation.attributeName === 'cz-shortcut-listen') {
                      // Remover imediatamente
                      document.body.removeAttribute('cz-shortcut-listen');
                    }
                  });
                });
                
                // Iniciar observer quando body estiver disponível
                function startObserver() {
                  if (document.body) {
                    observer.observe(document.body, {
                      attributes: true,
                      attributeFilter: ['cz-shortcut-listen']
                    });
                  } else {
                    setTimeout(startObserver, 10);
                  }
                }
                
                startObserver();
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden relative`}
        suppressHydrationWarning
      >
        <HydrationBoundary
          fallback={
            <div className='min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center'>
              <div className='text-center'>
                <div className='w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4' />
                <p className='text-gray-600 dark:text-gray-400'>
                  Carregando...
                </p>
              </div>
            </div>
          }
        >
          {children}
        </HydrationBoundary>
      </body>
    </html>
  );
}
