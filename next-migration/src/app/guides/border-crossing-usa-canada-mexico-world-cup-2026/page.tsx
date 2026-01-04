import type { Metadata } from 'next';
import BorderCrossingClientPage from './ClientPage';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { getContentMeta } from '@/data/content-registry';

export const metadata: Metadata = {
  title: 'Border Crossing Guide: USA, Canada & Mexico 2026 | World Cup Travel',
  description: 'The definitive border crossing guide for World Cup 2026. Navigate USA, Canada, and Mexico borders smoothly with expert advice on visas, ESTA/eTA, wait times, and customs regulations.',
  keywords: [
    'World Cup 2026 border crossing',
    'USA Canada Mexico borders',
    'crossing borders World Cup',
    'North America border guide',
    'ESTA requirements World Cup',
    'Canada eTA',
    'Mexico FMM form',
    'trusted traveler programs',
    'border wait times',
    'driving to Mexico World Cup',
    'World Cup travel requirements',
    'NEXUS card World Cup',
    'Global Entry vs NEXUS',
    'prohibited items US border',
    'bringing medication across borders'
  ],
  alternates: {
    canonical: 'https://stadiumport.com/guides/border-crossing-usa-canada-mexico-world-cup-2026',
  },
  openGraph: {
    title: 'Border Crossing Guide: USA, Canada & Mexico 2026',
    description: 'The definitive border crossing guide for World Cup 2026. Navigate USA, Canada, and Mexico borders smoothly.',
    url: 'https://stadiumport.com/guides/border-crossing-usa-canada-mexico-world-cup-2026',
    siteName: 'stadiumport',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Border Crossing Guide: USA, Canada & Mexico 2026',
    description: 'The definitive border crossing guide for World Cup 2026. Navigate USA, Canada, and Mexico borders smoothly.',
  },
};

export default function BorderCrossingPage() {
  const meta = getContentMeta('border-crossing-usa-canada-mexico-world-cup-2026');
  
  const articleSchema = generateArticleSchema(
    'border-crossing-usa-canada-mexico-world-cup-2026',
    '/guides/border-crossing-usa-canada-mexico-world-cup-2026'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Safety Guide', item: '/world-cup-2026-safety-guide' },
    { name: 'Border Crossing Guide', item: '/guides/border-crossing-usa-canada-mexico-world-cup-2026' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: "Do I need a visa to travel between USA, Canada, and Mexico for the World Cup?",
      answer: "There is no single 'World Cup Visa'. You must meet the entry requirements for each individual country. This often means an ESTA for the US, an eTA for Canada, and an FMM for Mexico."
    },
    {
      question: "Can I drive a rental car from the USA into Mexico?",
      answer: "Most major US rental agencies restrict driving into Mexico. You must check your contract specifically. If allowed, you will need to purchase separate Mexican auto insurance."
    },
    {
      question: "What is the best time to cross the land border?",
      answer: "Avoid weekends and holidays. Early mornings (before 7am) and late evenings (after 8pm) typically have the shortest wait times. Use the CBP Border Wait Times app for real-time data."
    },
    {
      question: "Can I bring food across the border?",
      answer: "It is risky. Fresh fruits, vegetables, and meats are often prohibited to prevent agricultural pests. Commercially packaged and sealed snacks are usually fine, but always declare them."
    },
    {
      question: "What happens if I have a DUI on my record?",
      answer: "You may be denied entry to Canada. Canada considers a DUI a serious criminality. You may need to apply for 'Rehabilitation' or a TRP well in advance of travel."
    },
    {
      question: "Is Global Entry valid for entering Canada?",
      answer: "Global Entry kiosks are for entering the USA. However, the program often includes TSA PreCheck. For expedited entry into Canada, you would need NEXUS."
    },
    {
      question: "How much cash can I carry across the border?",
      answer: "You can carry as much as you want, but if you have $10,000 USD (or equivalent) or more, you MUST declare it. Failure to declare can result in seizure of the funds."
    },
    {
      question: "Do I need an international driving permit?",
      answer: "If your license is in English (like from the UK, Australia, or USA), you generally do not need one for North America. If it is in another language, an IDP is highly recommended."
    },
    {
      question: "What is the FMM form for Mexico?",
      answer: "It is the 'Forma Migratoria Múltiple' or tourist card. You fill it out upon entry. If you enter by land, keep the stamped exit portion safe—you must surrender it when you leave Mexico."
    },
    {
      question: "Can I use my medical marijuana prescription in another country?",
      answer: "No. Cannabis is illegal to transport across international borders in North America, even between jurisdictions where it is legal (e.g., Washington state to British Columbia)."
    },
    {
      question: "What documents do I need for my children?",
      answer: "A valid passport for each child. If only one parent is traveling, a notarized consent letter from the non-traveling parent is strongly recommended to prevent delays."
    },
    {
      question: "Is there a fast lane for World Cup ticket holders?",
      answer: "No. Immigration lines treat all travelers equally unless you are part of a trusted traveler program like Global Entry or NEXUS."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BorderCrossingClientPage />
    </>
  );
}

