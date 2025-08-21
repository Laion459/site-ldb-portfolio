import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Desabilitar o logo "n" do Next.js
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
