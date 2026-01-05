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
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://tpwgts.com https://www.travelpayouts.com https://api.mapbox.com https://cmp.gatekeeperconsent.com https://the.gatekeeperconsent.com https://www.ezojs.com https://www.google-analytics.com; worker-src 'self' blob:; style-src 'self' 'unsafe-inline' https:; img-src 'self' blob: data: https:; font-src 'self' data: https:; connect-src 'self' https: http: ws: wss: https://api.mapbox.com https://events.mapbox.com https://www.google-analytics.com;"
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
        }
      ]
    }
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [75, 95],
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
      // Host Cities Hub
      { source: '/world-cup-2026-host-cities-guide', destination: '/world-cup-2026-host-cities', permanent: true },
      // Host Cities
      { source: '/world-cup-2026-host-cities-guide/atlanta-city-guide', destination: '/world-cup-2026-atlanta-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/boston-city-guide', destination: '/world-cup-2026-boston-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/dallas-city-guide', destination: '/world-cup-2026-dallas-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/guadalajara-city-guide', destination: '/world-cup-2026-guadalajara-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/houston-city-guide', destination: '/world-cup-2026-houston-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/kansas-city-city-guide', destination: '/world-cup-2026-kansas-city-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/los-angeles-city-guide', destination: '/world-cup-2026-los-angeles-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/mexico-city-city-guide', destination: '/world-cup-2026-mexico-city-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/miami-city-guide', destination: '/world-cup-2026-miami-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/monterrey-city-guide', destination: '/world-cup-2026-monterrey-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/new-york-city-guide', destination: '/world-cup-2026-new-york-new-jersey-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/philadelphia-city-guide', destination: '/world-cup-2026-philadelphia-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/san-francisco-city-guide', destination: '/world-cup-2026-san-francisco-bay-area-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/seattle-city-guide', destination: '/world-cup-2026-seattle-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/toronto-city-guide', destination: '/world-cup-2026-toronto-guide', permanent: true },
      { source: '/world-cup-2026-host-cities-guide/vancouver-city-guide', destination: '/world-cup-2026-vancouver-guide', permanent: true },
      
      // Stadiums
      { source: '/world-cup-2026-stadiums/arrowhead-stadium-guide', destination: '/arrowhead-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/att-stadium-guide', destination: '/att-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/bc-place-guide', destination: '/bc-place-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/bmo-field-guide', destination: '/bmo-field-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/estadio-akron-guide', destination: '/estadio-akron-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/estadio-azteca-guide', destination: '/estadio-azteca-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/estadio-bbva-guide', destination: '/estadio-bbva-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/gillette-stadium-guide', destination: '/gillette-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/hard-rock-stadium-guide', destination: '/hard-rock-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/levis-stadium-guide', destination: '/levis-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/lincoln-financial-field-guide', destination: '/lincoln-financial-field-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/lumen-field-guide', destination: '/lumen-field-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/mercedes-benz-stadium-guide', destination: '/mercedes-benz-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/metlife-stadium-guide', destination: '/metlife-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/nrg-stadium-guide', destination: '/nrg-stadium-world-cup-2026', permanent: true },
      { source: '/world-cup-2026-stadiums/sofi-stadium-guide', destination: '/sofi-stadium-world-cup-2026', permanent: true },
      
      // Safety Guides
      { source: '/guides/fan-zone-crowd-safety-world-cup-2026', destination: '/world-cup-2026-fan-zones-safety', permanent: true },
      { source: '/guides/nightlife-after-hours-safety-world-cup-2026', destination: '/world-cup-2026-nightlife-safety', permanent: true },
      { source: '/guides/food-water-safety-dining-world-cup-2026', destination: '/world-cup-2026-food-dining-safety', permanent: true },
      { source: '/guides/staying-connected-sim-cards-emergency-communications-world-cup-2026', destination: '/world-cup-2026-connectivity-guide/staying-connected-sim-cards-emergency-communications-world-cup-2026', permanent: true },
      { source: '/guides/border-crossing-usa-canada-mexico-world-cup-2026', destination: '/world-cup-2026-border-crossing-guide', permanent: true },
      { source: '/guides/local-laws-cultural-etiquette-world-cup-2026', destination: '/world-cup-2026-local-laws-etiquette', permanent: true },
      { source: '/guides/weather-climate-safety-world-cup-2026', destination: '/world-cup-2026-weather-climate-safety', permanent: true },

      // Force non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.stadiumport.com' }],
        destination: 'https://stadiumport.com/:path*',
        permanent: true,
      },
      // City Guides (301 Redirects from old structure)
      {
        source: '/city-guide/:slug',
        destination: '/world-cup-2026-:slug-guide',
        permanent: true,
      },
      // Stadium Guides (301 Redirects from old structure)
      {
        source: '/stadium-guide/:slug',
        destination: '/world-cup-2026-stadiums/:slug-guide',
        permanent: true,
      },
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
      // Ezoic Ads.txt Redirect
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/stadiumport.com',
        statusCode: 301,
      },
    ];
  },

};

export default nextConfig;
