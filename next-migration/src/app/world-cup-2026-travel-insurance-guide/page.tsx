import type { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'World Cup 2026 Travel Insurance: Complete Protection Guide | Stadiumport',
  description: 'Complete guide to World Cup 2026 travel insurance. Compare costs, coverage types, and providers. Learn why coverage is non-negotiable for USA, Canada & Mexico.',
  keywords: 'World Cup 2026 travel insurance, medical coverage USA, trip cancellation insurance, medical evacuation insurance, World Cup 2026 safety',
  alternates: {
    canonical: '/world-cup-2026-travel-insurance-guide',
  },
  openGraph: {
    title: 'World Cup 2026 Travel Insurance: Complete Protection Guide | Stadiumport',
    description: 'Complete guide to World Cup 2026 travel insurance. Compare costs, coverage types, and providers. Learn why coverage is non-negotiable for USA, Canada & Mexico.',
    url: '/world-cup-2026-travel-insurance-guide',
  }
};

export default function TravelInsuranceGuidePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';
  const pageUrl = '/world-cup-2026-travel-insurance-guide';

  const articleSchema = generateArticleSchema('travel-insurance-guide', pageUrl);

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
        "name": "Travel Tips",
        "item": `${siteUrl}/travel-tips`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Travel Insurance Guide",
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
        "name": "Do I really need travel insurance for World Cup 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Medical care in the USA is extremely expensive. A single ER visit can cost thousands, and medical evacuation can exceed $100,000. Insurance protects you from these financial disasters."
        }
      },
      {
        "@type": "Question",
        "name": "How much does travel insurance cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 4-8% of your total non-refundable trip cost. For a $5,000 trip, expect to pay $200-$400 depending on your age and coverage limits."
        }
      },
      {
        "@type": "Question",
        "name": "Does travel insurance cover match tickets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you include the ticket cost in your insured trip amount and cancel for a covered reason (illness, injury, etc.). FIFA tickets are non-refundable, so this is critical."
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
