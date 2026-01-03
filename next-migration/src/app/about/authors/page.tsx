import React from 'react';
import { Metadata } from 'next';
import ClientAuthors from '../../../components/about/ClientAuthors';
import { JsonLd } from '../../../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../../../lib/schema';

export const metadata: Metadata = {
  title: 'Authors & Editorial Team – Stadiumport',
  description: 'Meet the team behind Stadiumport. Our dedicated writers, researchers, and editors work to provide the most accurate World Cup 2026 travel guides.',
  alternates: {
    canonical: 'https://stadiumport.com/about/authors',
  },
  openGraph: {
    title: 'Authors & Editorial Team – Stadiumport',
    description: 'Meet the team behind Stadiumport. Our dedicated writers, researchers, and editors work to provide the most accurate World Cup 2026 travel guides.',
    url: 'https://stadiumport.com/about/authors',
    siteName: 'Stadiumport',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authors & Editorial Team – Stadiumport',
    description: 'Meet the team behind Stadiumport. Our dedicated writers, researchers, and editors work to provide the most accurate World Cup 2026 travel guides.',
  },
};

export default function AuthorsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
    { name: 'Authors', item: '/about/authors' }
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Authors & Editorial Team",
    "url": "https://stadiumport.com/about/authors",
    "description": "Meet the team behind Stadiumport. Our dedicated writers, researchers, and editors work to provide the most accurate World Cup 2026 travel guides."
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={pageSchema} />
      <ClientAuthors />
    </>
  );
}
