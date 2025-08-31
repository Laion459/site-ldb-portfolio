import { MetadataRoute } from 'next';

/**
 * 🗺️ Sitemap dinâmico para SEO
 * Gera automaticamente URLs para todas as páginas do portfolio
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leonardo-portfolio.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projetos/flor-de-lis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projetos/gabriela-n`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projetos/conversor-moedas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
