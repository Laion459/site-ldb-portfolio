'use client';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * 🏷️ Componente para renderizar dados estruturados JSON-LD
 * Otimizado para SEO e indexação por motores de busca
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
