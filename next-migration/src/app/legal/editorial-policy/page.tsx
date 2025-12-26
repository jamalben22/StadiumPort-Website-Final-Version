import type { Metadata } from 'next';
import EditorialPolicyClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema } from '@/lib/schema';

export const metadata: Metadata = {
 title: 'Editorial Policy – Stadiumport',
 description: 'Our commitment to accuracy, transparency, and trust. Learn about Stadiumport\'s editorial standards for World Cup 2026 travel guides.',
 alternates: {
 canonical: '/editorial-policy',
 },
 openGraph: {
 title: 'Editorial Policy – Stadiumport',
 description: 'Our commitment to accuracy, transparency, and trust. Learn about Stadiumport\'s editorial standards for World Cup 2026 travel guides.',
 url: '/editorial-policy',
 }
};

export default function EditorialPolicyPage() {
 const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://stadiumport.com';

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
 "name": "Editorial Policy",
 "item": `${siteUrl}/editorial-policy`
 }
 ]
 };

 return (
    <>
 <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={articleSchema} />
      <EditorialPolicyClientPage />
 </>
 );
}



