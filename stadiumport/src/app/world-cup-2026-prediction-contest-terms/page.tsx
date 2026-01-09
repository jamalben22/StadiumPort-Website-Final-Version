import type { Metadata } from 'next';
import ClientPage from './ClientPage';

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

 const breadcrumbJsonLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 {
 "@type": "ListItem",
 "position": 1,
 "name": "Home",
 "item": "https://stadiumport.com"
 },
 {
 "@type": "ListItem",
 "position": 2,
 "name": "Contest Terms",
 "item": "https://stadiumport.com/world-cup-2026-prediction-contest-terms"
 }
 ]
 };

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
 />
 <ClientPage />
 </>
 );
}





