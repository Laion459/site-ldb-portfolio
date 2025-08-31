import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { HydrationBoundary } from '@/components/ui/HydrationBoundary';
import { JsonLd } from '@/components/ui/JsonLd';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leonardo-portfolio.com'),
  title: {
    default: 'Leonardo - Full Stack Developer | APIs Escaláveis e Seguras',
    template: '%s | Leonardo Portfolio',
  },
  description:
    'Desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance. Experiência em Node.js, Laravel, PostgreSQL e arquiteturas distribuídas.',
  keywords: [
    'Full Stack Developer',
    'Backend Engineer',
    'Node.js Developer',
    'Laravel Developer',
    'API Development',
    'PostgreSQL',
    'Microservices',
    'React Developer',
    'Next.js Developer',
    'Brazil Developer',
    'Remote Developer',
    'Web Development',
    'Software Engineer',
  ],
  authors: [{ name: 'Leonardo', url: 'https://leonardo-portfolio.com' }],
  creator: 'Leonardo',
  publisher: 'Leonardo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://leonardo-portfolio.com',
    siteName: 'Leonardo Portfolio',
    title: 'Leonardo - Full Stack Developer | APIs Escaláveis e Seguras',
    description:
      'Desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance.',
    images: [
      {
        url: '/images/profile/leonardo.JPG',
        width: 1200,
        height: 630,
        alt: 'Leonardo - Full Stack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leonardo_dev',
    creator: '@leonardo_dev',
    title: 'Leonardo - Full Stack Developer | APIs Escaláveis e Seguras',
    description:
      'Desenvolvedor Full Stack especializado em criar APIs, aplicações web e sites escaláveis, seguras e de alta performance.',
    images: ['/images/profile/leonardo.JPG'],
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
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#2563eb',
    'msapplication-TileColor': '#2563eb',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Leonardo Portfolio',
    'mobile-web-app-capable': 'yes',
  },
};

// Dados estruturados JSON-LD para a página principal
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Leonardo Portfolio',
  url: 'https://leonardo-portfolio.com',
  description: 'Portfolio profissional de Leonardo - Full Stack Developer',
  author: {
    '@type': 'Person',
    name: 'Leonardo',
    jobTitle: 'Full Stack Developer',
    url: 'https://leonardo-portfolio.com',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://leonardo-portfolio.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Leonardo',
  jobTitle: 'Full Stack Developer',
  url: 'https://leonardo-portfolio.com',
  sameAs: [
    'https://github.com/leonardo',
    'https://linkedin.com/in/leonardo',
    'https://twitter.com/leonardo_dev',
  ],
  knowsAbout: [
    'Node.js',
    'Laravel',
    'React',
    'Next.js',
    'PostgreSQL',
    'API Development',
    'Microservices',
    'Full Stack Development',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer',
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

        {/* Preload de recursos críticos */}
        <link rel='preload' href='/images/profile/leonardo.JPG' as='image' />
        <link rel='preload' href='/images/logo/logo.png' as='image' />

        {/* DNS prefetch para domínios externos */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//fonts.gstatic.com' />

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
        {/* Dados estruturados JSON-LD */}
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={personJsonLd} />

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
