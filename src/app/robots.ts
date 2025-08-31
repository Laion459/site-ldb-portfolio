import { MetadataRoute } from 'next';

/**
 * 🤖 Robots.txt dinâmico para SEO
 * Controla a indexação dos motores de busca
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://leonardo-portfolio.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '*.json',
          '*.xml',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
