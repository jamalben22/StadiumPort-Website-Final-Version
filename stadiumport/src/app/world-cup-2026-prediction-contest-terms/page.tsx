import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contest Terms & Conditions – stadiumport',
  description: 'Official rules and terms for the stadiumport World Cup 2026 Prediction Contest. Eligibility, prizes, scoring, and legal details.',
  keywords: ['World Cup 2026 contest rules', 'stadiumport prediction game terms', 'World Cup 2026 prizes', 'official contest rules', 'soccer prediction contest terms'],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-prediction-contest-terms',
  },
  openGraph: {
    title: 'Contest Terms & Conditions – stadiumport',
    description: 'Official rules and terms for the stadiumport World Cup 2026 Prediction Contest. Eligibility, prizes, scoring, and legal details.',
    url: 'https://stadiumport.com/world-cup-2026-prediction-contest-terms',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'stadiumport Contest Terms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contest Terms & Conditions – stadiumport',
    description: 'Official rules and terms for the stadiumport World Cup 2026 Prediction Contest.',
    images: ['/images/og-image.png'],
  },
};

export default function ContestTermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contest Terms & Conditions",
    "url": "https://stadiumport.com/world-cup-2026-prediction-contest-terms",
    "description": "Official rules and terms for the stadiumport World Cup 2026 Prediction Contest. Eligibility, prizes, scoring, and legal details."
  };

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Contest Terms', item: '/world-cup-2026-prediction-contest-terms' }
  ]);

  return (
    <>
      <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <ClientPage />
    </>
  );
}





