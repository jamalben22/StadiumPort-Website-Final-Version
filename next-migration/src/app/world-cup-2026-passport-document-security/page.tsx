import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Document Safety: Passport & Visa Tips',
  description: 'Protect your passport & documents at World Cup 2026. Essential security tips, digital backup strategies & lost passport procedures for international fans.',
  keywords: [
    'World Cup 2026 passport safety',
    'travel document security',
    'RFID theft prevention',
    'lost passport abroad',
    'identity theft protection travel',
    'World Cup 2026 visa security',
    'passport backup strategies'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/world-cup-2026-passport-document-security',
  },
  openGraph: {
    title: 'World Cup 2026 Document Safety: Passport & Visa Tips',
    description: 'Protect your passport & documents at World Cup 2026. Essential security tips, digital backup strategies & lost passport procedures for international fans.',
    url: 'https://stadiumport.com/world-cup-2026-passport-document-security',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/travel-tips/World%20Cup%202026%20Document%20Security%20Illustration.webp',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Document Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Document Safety: Passport & Visa Tips',
    description: 'Protect your passport & documents at World Cup 2026. Essential security tips, digital backup strategies & lost passport procedures for international fans.',
    images: ['/images/travel-tips/World%20Cup%202026%20Document%20Security%20Illustration.webp'],
  },
};

export default function DocumentSecurityPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-passport-document-security';

  const articleSchema = generateArticleSchema('world-cup-2026-passport-document-security', pageUrl);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Safety Guide",
        "item": `${siteUrl}/safety-guide`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Document Security",
        "item": `${siteUrl}${pageUrl}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What if I lose my passport abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immediately file a police report, then contact your nearest embassy or consulate. You'll need the police report, new photos, and proof of citizenship to get an emergency replacement passport."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an RFID-blocking wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Modern passports and credit cards have RFID chips that can be scanned from a distance. An RFID-blocking wallet is an inexpensive insurance against electronic pickpocketing."
        }
      },
      {
        "@type": "Question",
        "name": "Where should I keep my passport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never carry your passport unless absolutely necessary (airports, border crossings). Store it in your hotel room safe. If you must carry it, use a hidden money belt or neck pouch under your clothes."
        }
      },
      {
        "@type": "Question",
        "name": "Should I carry my passport or a copy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Carry a color photocopy or digital copy on your phone for daily activities like sightseeing or shopping. Only carry the original if you know you'll need it for official identification."
        }
      },
      {
        "@type": "Question",
        "name": "How do I replace a stolen passport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Go to the nearest embassy/consulate with a police report of the theft, form DS-11 (new application), form DS-64 (stolen statement), photos, and fees. Emergency passports can be issued in 1-3 days."
        }
      },
      {
        "@type": "Question",
        "name": "What digital backups should I make?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scan your passport, visa/ESTA, driver's license, credit cards (front/back), and insurance policy. Store them in secure cloud storage (Dropbox/Google Drive) and email copies to yourself."
        }
      },
      {
        "@type": "Question",
        "name": "Is the hotel safe secure enough?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, yes. It's safer than leaving items loose in the room or carrying them in a crowded city. For extra security, use a portable travel safe or hide valuables creatively within the room."
        }
      },
      {
        "@type": "Question",
        "name": "What if my credit cards are stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call your bank's 24/7 global fraud line immediately to freeze the cards. Most banks can rush-ship a replacement card to your hotel within 1-3 days."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prevent identity theft while traveling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a VPN on public WiFi, cover your hand when entering PINs, use ATMs inside banks (not on street corners), and never let your credit card leave your sight at restaurants."
        }
      },
      {
        "@type": "Question",
        "name": "Should I take photos of my passport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Keep a photo on your phone (secure folder) and email one to yourself. This makes the replacement process at the embassy significantly faster if the original is lost."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <ClientPage />
    </>
  );
}
