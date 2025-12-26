import React from 'react';
import { Metadata } from 'next';
import ClientAbout from '../../components/about/ClientAbout';
import { JsonLd } from '../../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../../lib/schema';

export const metadata: Metadata = {
 title: 'About Stadiumport – Your World Cup 2026 Travel Companion',
 description: 'Learn about Stadiumport — your trusted World Cup 2026 travel companion. Discover our mission, guides, and resources to help you plan an unforgettable tournament journey.',
 openGraph: {
 title: 'About Stadiumport – Your World Cup 2026 Travel Companion',
 description: 'Learn about Stadiumport — your trusted World Cup 2026 travel companion. Discover our mission, guides, and resources to help you plan an unforgettable tournament journey.',
 url: 'https://stadiumport.com/about',
 type: 'website',
 },
};

export default function AboutPage() {
 const breadcrumbSchema = generateBreadcrumbSchema([
 { name: 'Home', item: '/' },
 { name: 'About', item: '/about' }
 ]);

 const organizationSchema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Stadiumport',
 url: 'https://stadiumport.com',
 logo: 'https://stadiumport.com/logo.png',
 sameAs: [
 'https://twitter.com/stadiumport',
 'https://facebook.com/stadiumport',
 'https://instagram.com/stadiumport',
 ],
 };

 return (
 <>
 <JsonLd schema={breadcrumbSchema} />
 <JsonLd schema={organizationSchema} />
 <ClientAbout />
 </>
 );
}




