import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Privacy Policy – Stadiumport',
  description: 'Read Stadiumport’s privacy policy covering data collection, usage, cookies, and your rights as a user.',
  alternates: {
    canonical: 'https://stadiumport.com/legal/privacy',
  },
  openGraph: {
    title: 'Privacy Policy – Stadiumport',
    description: 'Read Stadiumport’s privacy policy covering data collection, usage, cookies, and your rights as a user.',
    url: 'https://stadiumport.com/legal/privacy',
    siteName: 'StadiumPort',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy – Stadiumport',
    description: 'Read Stadiumport’s privacy policy covering data collection, usage, cookies, and your rights as a user.',
  },
};

export default function PrivacyPage() {
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Privacy Policy",
 "url": "https://stadiumport.com/legal/privacy",
 "description": "Read Stadiumport’s privacy policy covering data collection, usage, cookies, and your rights as a user."
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
 "name": "Privacy Policy",
 "item": "https://stadiumport.com/legal/privacy"
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




