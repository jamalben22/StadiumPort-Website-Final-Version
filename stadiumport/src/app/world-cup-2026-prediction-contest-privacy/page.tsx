import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contest Privacy Policy – stadiumport',
  description: 'Privacy policy for the stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection.',
  keywords: ['World Cup 2026 contest privacy', 'stadiumport privacy policy', 'data protection', 'contest rules', 'user privacy'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-prediction-contest-privacy',
  },
  openGraph: {
    title: 'Contest Privacy Policy – stadiumport',
    description: 'Privacy policy for the stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection.',
    url: 'https://stadiumport.com/world-cup-2026-prediction-contest-privacy',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'stadiumport Contest Privacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contest Privacy Policy – stadiumport',
    description: 'Privacy policy for the stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection.',
    images: ['/images/og-image.png'],
  },
};

export default function ContestPrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contest Privacy Policy",
    "url": "https://stadiumport.com/world-cup-2026-prediction-contest-privacy",
    "description": "Privacy policy for the stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection."
  };

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Contest Privacy', item: '/world-cup-2026-prediction-contest-privacy' }
  ]);

  return (
    <>
      <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <ClientPage />
    </>
  );
}





