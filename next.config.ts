import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**',
        port: ''
      },
      {
        protocol: 'https',
        hostname: '**.**.**',
        port: ''
      }
    ]
  }
};

export default nextConfig;
