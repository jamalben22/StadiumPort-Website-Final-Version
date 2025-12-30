import type { NextConfig } from "next";
import { validateEnv } from "./src/lib/env";

// Validate environment variables
try {
  validateEnv();
} catch (error) {
  if (process.env.NODE_ENV === 'production') {
    console.warn('⚠️  Environment validation failed:', (error as Error).message);
    console.warn('⚠️  Some features may not work correctly.');
  }
}

const nextConfig: NextConfig = {
  env: {
    // Map VITE_ variables to NEXT_PUBLIC_ variables for backward compatibility
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://tpwgts.com https://www.travelpayouts.com; worker-src 'self' blob:; style-src 'self' 'unsafe-inline' https:; img-src 'self' blob: data: https:; font-src 'self' data: https:; connect-src 'self' https: http: ws: wss:;"
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
        }
      ]
    }
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stadiumport.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Legal
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
      { source: '/terms', destination: '/legal/terms', permanent: true },
      { source: '/editorial-policy', destination: '/legal/editorial-policy', permanent: true },
      // Prediction Game
      {
        source: '/world-cup-2026-prediction-game/results',
        destination: '/world-cup-2026-prediction-game/entry',
        permanent: true,
      },
      // Draw Travel Hub
      {
        source: '/draw-travel-hub',
        destination: '/world-cup-2026-draw-travel-hub',
        permanent: true,
      },
      // Groups Main
      {
        source: '/groups',
        destination: '/world-cup-2026-groups',
        permanent: true,
      },
      // Group Specifics
      { source: '/groups/group-a', destination: '/world-cup-2026-groups/group-a', permanent: true },
      { source: '/groups/group-b', destination: '/world-cup-2026-groups/group-b', permanent: true },
      { source: '/groups/group-c', destination: '/world-cup-2026-groups/group-c', permanent: true },
      { source: '/groups/group-d', destination: '/world-cup-2026-groups/group-d', permanent: true },
      { source: '/groups/group-e', destination: '/world-cup-2026-groups/group-e', permanent: true },
      { source: '/groups/group-f', destination: '/world-cup-2026-groups/group-f', permanent: true },
      { source: '/groups/group-g', destination: '/world-cup-2026-groups/group-g', permanent: true },
      { source: '/groups/group-h', destination: '/world-cup-2026-groups/group-h', permanent: true },
      { source: '/groups/group-i', destination: '/world-cup-2026-groups/group-i', permanent: true },
      { source: '/groups/group-j', destination: '/world-cup-2026-groups/group-j', permanent: true },
      { source: '/groups/group-k', destination: '/world-cup-2026-groups/group-k', permanent: true },
      { source: '/groups/group-l', destination: '/world-cup-2026-groups/group-l', permanent: true },
      // Legacy Group Redirects
      { source: '/group-j-travel-guide', destination: '/world-cup-2026-groups/group-j', permanent: true },
      { source: '/group-i-travel-guide', destination: '/world-cup-2026-groups/group-i', permanent: true },
      { source: '/2026-world-cup-group-a-travel-guide', destination: '/world-cup-2026-groups/group-a', permanent: true },
      { source: '/2026-world-cup-group-b-travel-guide', destination: '/world-cup-2026-groups/group-b', permanent: true },
      { source: '/2026-world-cup-group-c-travel-guide', destination: '/world-cup-2026-groups/group-c', permanent: true },
      { source: '/2026-world-cup-group-d-travel-guide', destination: '/world-cup-2026-groups/group-d', permanent: true },
      { source: '/2026-world-cup-group-e-travel-guide', destination: '/world-cup-2026-groups/group-e', permanent: true },
      { source: '/2026-world-cup-group-f-travel-guide', destination: '/world-cup-2026-groups/group-f', permanent: true },
      { source: '/2026-world-cup-group-g-travel-guide', destination: '/world-cup-2026-groups/group-g', permanent: true },
      { source: '/2026-world-cup-group-h-travel-guide', destination: '/world-cup-2026-groups/group-h', permanent: true },
      { source: '/2026-world-cup-group-i-travel-guide', destination: '/world-cup-2026-groups/group-i', permanent: true },
      { source: '/2026-world-cup-group-j-travel-guide', destination: '/world-cup-2026-groups/group-j', permanent: true },
      { source: '/2026-world-cup-group-k-travel-guide', destination: '/world-cup-2026-groups/group-k', permanent: true },
      { source: '/2026-world-cup-group-l-travel-guide', destination: '/world-cup-2026-groups/group-l', permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/city-guide/:slug',
        destination: '/world-cup-2026-host-cities/:slug-city-guide',
      },
      {
        source: '/stadium-guide/:slug',
        destination: '/world-cup-2026-stadiums/:slug-guide',
      },
    ];
  },
};

export default nextConfig;
