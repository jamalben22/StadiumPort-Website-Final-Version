import type { Metadata } from 'next';
import AffiliateDisclaimerClientPage from './ClientPage';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer – Stadiumport',
  description: 'Stadiumport is a free resource supported by affiliate commissions. Learn how affiliate links work and our commitment to transparency.',
  alternates: {
    canonical: 'https://stadiumport.com/legal/affiliate-disclaimer',
  },
  openGraph: {
    title: 'Affiliate Disclaimer – Stadiumport',
    description: 'Stadiumport is a free resource supported by affiliate commissions. Learn how affiliate links work and our commitment to transparency.',
    url: 'https://stadiumport.com/legal/affiliate-disclaimer',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Disclaimer – Stadiumport',
    description: 'Stadiumport is a free resource supported by affiliate commissions. Learn how affiliate links work and our commitment to transparency.',
  },
};

export default function AffiliateDisclaimerPage() {
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
 "name": "Affiliate Disclaimer",
 "item": `${siteUrl}/legal/affiliate-disclaimer`
 }
 ]
 };

 const pageSchema = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Affiliate Disclaimer",
 "url": `${siteUrl}/legal/affiliate-disclaimer`
 };

 return (
 <>
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={pageSchema} />
 <AffiliateDisclaimerClientPage />
 </>
 );
}




