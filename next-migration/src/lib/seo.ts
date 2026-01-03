import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  verification?: {
    google?: string;
    yandex?: string;
    yahoo?: string;
    other?: Record<string, string | number | (string | number)[]>;
  };
}

const defaultUrl = 'https://stadiumport.com';
const defaultImage = '/images/og-image.png'; // Make sure this exists

export function constructMetadata({
  title,
  description,
  image = defaultImage,
  type = 'website',
  path = '',
  noIndex = false,
  keywords = [
    "World Cup 2026", 
    "FIFA World Cup 2026", 
    "World Cup Travel Guide", 
    "Stadiumport", 
    "2026 World Cup Stadiums",
    "World Cup Host Cities"
  ],
  verification,
}: MetadataProps): Metadata {
  const url = `${defaultUrl}${path}`;
  const brandName = "Stadiumport";
  
  // Ensure title always includes brand name if not present (though Next.js template handles this usually)
  const fullTitle = title.includes(brandName) ? title : `${title} | ${brandName}`;

  return {
    title: {
      default: fullTitle,
      template: `%s | ${brandName}`,
    },
    description,
    keywords,
    metadataBase: new URL(defaultUrl),
    verification,
    alternates: {
      canonical: url,
    },
    icons: {
      icon: [
        { url: '/images/Logos/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/images/Logos/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/Logos/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/images/Logos/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/images/Logos/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/images/Logos/favicon/favicon-32x32.png',
      apple: [
        { url: '/images/Logos/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'manifest',
          url: '/images/Logos/favicon/site.webmanifest',
        },
      ],
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: brandName,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@stadiumport', 
      site: '@stadiumport',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
