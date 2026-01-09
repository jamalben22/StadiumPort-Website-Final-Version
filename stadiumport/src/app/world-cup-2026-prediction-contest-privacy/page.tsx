import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { headers } from "next/headers";

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

export default async function ContestPrivacyPage() {
 const nonce = (await headers()).get("x-nonce") ?? undefined;
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Contest Privacy Policy",
 "url": "https://stadiumport.com/world-cup-2026-prediction-contest-privacy",
 "description": "Privacy policy for the stadiumport World Cup 2026 Prediction Contest detailing data collection, use, and protection."
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
 "name": "Contest Privacy",
 "item": "https://stadiumport.com/world-cup-2026-prediction-contest-privacy"
 }
 ]
 };

 return (
 <>
 <script
 type="application/ld+json"
 nonce={nonce}
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <script
 type="application/ld+json"
 nonce={nonce}
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
 />
 <ClientPage />
 </>
 );
}





