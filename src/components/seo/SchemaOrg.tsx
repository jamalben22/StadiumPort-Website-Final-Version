
import { useEffect } from 'react';

interface SchemaOrgProps {
  schema: object;
}

export function SchemaOrg({ schema }: SchemaOrgProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
}

// Common schema generators
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "StadiumPort",
  "description": "Experience the breathtaking atmosphere of the World Cup 2026 with three massive USA, Mexico, and Canada flags proudly displayed in the middle of a night-lit stadium.",
  "url": import.meta.env.VITE_SITE_URL || "https://stadiumport.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${import.meta.env.VITE_SITE_URL || "https://stadiumport.com"}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "StadiumPort",
    "url": import.meta.env.VITE_SITE_URL || "https://stadiumport.com"
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "StadiumPort",
  "description": "Experience the breathtaking atmosphere of the World Cup 2026 with three massive USA, Mexico, and Canada flags proudly displayed in the middle of a night-lit stadium.",
  "url": import.meta.env.VITE_SITE_URL || "https://stadiumport.com",
  "logo": `${import.meta.env.VITE_SITE_URL || "https://stadiumport.com"}/logo.png`,
  "sameAs": [
    "https://twitter.com/stadiumport",
    "https://facebook.com/stadiumport"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
});

export const generateTravelGuideSchema = (
  title: string,
  description: string,
  url: string,
  extras?: { datePublished?: string; dateModified?: string; inLanguage?: string; articleSection?: string; keywords?: string[] }
) => ({
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": title,
  "description": description,
  "url": url,
  ...(extras?.datePublished ? { datePublished: extras.datePublished } : {}),
  ...(extras?.dateModified ? { dateModified: extras.dateModified } : {}),
  ...(extras?.inLanguage ? { inLanguage: extras.inLanguage } : {}),
  ...(extras?.articleSection ? { articleSection: extras.articleSection } : {}),
  ...(extras?.keywords && extras.keywords.length ? { keywords: extras.keywords } : {}),
  "publisher": {
    "@type": "Organization",
    "name": "StadiumPort",
    "url": import.meta.env.VITE_SITE_URL || "https://stadiumport.com"
  },
  "about": {
    "@type": "Event",
    "name": "FIFA World Cup 2026",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "location": {
      "@type": "Place",
      "name": "United States, Canada, Mexico"
    }
  }
});

export const generateCityGuideSchema = (
  cityName: string,
  description: string,
  url: string,
  extras?: { datePublished?: string; dateModified?: string; inLanguage?: string; articleSection?: string; keywords?: string[] }
) => ({
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": `${cityName} World Cup 2026 Travel Guide`,
  "description": description,
  "url": url,
  ...(extras?.datePublished ? { datePublished: extras.datePublished } : {}),
  ...(extras?.dateModified ? { dateModified: extras.dateModified } : {}),
  ...(extras?.inLanguage ? { inLanguage: extras.inLanguage } : {}),
  ...(extras?.articleSection ? { articleSection: extras.articleSection } : {}),
  ...(extras?.keywords && extras.keywords.length ? { keywords: extras.keywords } : {}),
  "about": {
    "@type": "City",
    "name": cityName
  },
  "publisher": {
    "@type": "Organization",
    "name": "StadiumPort",
    "url": import.meta.env.VITE_SITE_URL || "https://stadiumport.com"
  }
});

export const generateStadiumSchema = (stadiumName: string, cityName: string, capacity: number, description: string) => ({
  "@context": "https://schema.org",
  "@type": "StadiumOrArena",
  "name": stadiumName,
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": cityName
  },
  "maximumAttendeeCapacity": capacity,
  "event": {
    "@type": "SportsEvent",
    "name": "FIFA World Cup 2026",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => {
    const site = import.meta.env.VITE_SITE_URL || "https://stadiumport.com";
    const absolute = item.url.startsWith('http') ? item.url : site + item.url;
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": absolute,
        "url": absolute
      }
    };
  })
});

// Image metadata generator for JSON-LD
export const generateImageObjectSchema = (
  url: string,
  options?: { width?: number; height?: number; caption?: string; description?: string }
) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + url,
  "contentUrl": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + url,
  ...(options?.width ? { width: options.width } : {}),
  ...(options?.height ? { height: options.height } : {}),
  ...(options?.caption ? { caption: options.caption } : {}),
  ...(options?.description ? { description: options.description } : {}),
});

// ItemList schema for listing pages (e.g., all stadiums)
export const generateItemListSchema = (
  items: Array<{ name: string; url: string; image?: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url.startsWith('http')
      ? item.url
      : (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + item.url,
    ...(item.image
      ? {
          "image": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + item.image,
        }
      : {}),
  })),
});

// CollectionPage schema that references the ItemList
export const generateCollectionPageSchema = (
  args: {
    name: string;
    description: string;
    url: string;
    image?: string;
    items: Array<{ name: string; url: string; image?: string }>;
  }
) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": args.name,
  "description": args.description,
  "url": args.url,
  ...(args.image
    ? {
        "image": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + args.image,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + args.image,
          "contentUrl": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + args.image,
        },
      }
    : {}),
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": args.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http')
        ? item.url
        : (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + item.url,
      ...(item.image
        ? {
            "image": (import.meta.env.VITE_SITE_URL || "https://stadiumport.com") + item.image,
          }
        : {}),
    })),
  },
});
