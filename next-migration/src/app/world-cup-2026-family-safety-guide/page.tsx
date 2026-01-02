import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Family Safety Guide: Taking Kids to World Cup 2026',
  description: 'Essential safety guide for families attending World Cup 2026. Tips for taking kids to stadiums, child-friendly accommodation, safe transport, missing child protocols, and family packing lists.',
  alternates: {
    canonical: '/world-cup-2026-family-safety-guide',
  },
  openGraph: {
    title: 'Family Safety Guide: Taking Kids to World Cup 2026',
    description: 'Complete parent\'s guide to World Cup 2026 safety. Stadium strategies for kids, family lodging, transport tips, and emergency preparedness.',
    url: 'https://stadiumport.com/world-cup-2026-family-safety-guide',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        // Actually, I saw family images in public/images/safety-guide/
        // Let's use one of those.
        // public/images/safety-guide/A_realistic_high-detail_photo_of_a_family_with_children_entering_or_walking_near.webp
        url: '/images/safety-guide/A_realistic_high-detail_photo_of_a_family_with_children_entering_or_walking_near.webp',
        width: 1200,
        height: 630,
        alt: 'Family Safety Guide World Cup 2026',
      },
    ],
  },
  keywords: ['World Cup 2026 Family Safety', 'Taking kids to World Cup', 'Child safety stadiums', 'Family travel World Cup', 'Lost child protocols', 'Family friendly host cities'],
};

export default function Page() {
  const jsonLd = generateArticleSchema('family-safety-guide', '/world-cup-2026-family-safety-guide');

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guides', item: '/safety-guide' }, // Assuming this parent exists or logic dictates it
    { name: 'Family Safety Guide', item: '/world-cup-2026-family-safety-guide' }
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it safe to take kids to World Cup matches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but it requires planning. Choose matches carefully, use ear protection for young children, and have a clear meeting point. Avoid "Ultra" sections.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do children need tickets for World Cup 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, typically all attendees regardless of age require a ticket. Check specific stadium policies for infants, but assume a ticket is needed.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the best host cities for families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cities like Vancouver, Toronto, Boston, and Seattle are known for being very walkable and safe. Cities like Orlando (if hosting) or Miami offer great family attractions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I bring a stroller to the stadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most stadiums have strict bag and item policies. Strollers are usually NOT allowed in seating areas and must be checked at specific gates. Baby carriers are better.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd schema={jsonLd} />
      <JsonLd schema={breadcrumbLd} />
      <JsonLd schema={faqLd} />
      <ClientPage />
    </>
  );
}
