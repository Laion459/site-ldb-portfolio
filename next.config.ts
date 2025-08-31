import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Configuração correta: resolver erros ao invés de ignorá-los
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // 🚀 Otimizações de performance CRÍTICAS
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // optimizeCss: true, // Temporariamente desabilitado - causa erro com critters
  },

  // 🚀 Configuração do Turbopack
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // 🖼️ Otimizações de imagem CRÍTICAS
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // 🚀 Otimizações críticas para performance
    unoptimized: false,
    loader: 'default',
  },

  // 🚀 Webpack optimizations para reduzir bundle size
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Minificação agressiva
      config.optimization.minimize = true;
      config.optimization.minimizer = config.optimization.minimizer || [];

      // Tree shaking agressivo
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Code splitting otimizado
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };
    }

    return config;
  },

  // 🔒 Headers de segurança e cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      // 🚀 Cache para assets estáticos
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/logo/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/projects/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 📄 Cache para páginas estáticas
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ];
  },

  // 🚀 Compressão e otimizações
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // 📦 Bundle analyzer (opcional para desenvolvimento)
  ...(process.env.ANALYZE === 'true' && {
    webpack: config => {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      );
      return config;
    },
  }),

  // 🚀 Otimizações de build CRÍTICAS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 🚀 Otimizações de produção
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
};

export default nextConfig;
