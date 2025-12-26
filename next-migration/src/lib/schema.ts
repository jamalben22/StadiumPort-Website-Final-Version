import { getContentMeta } from '@/data/content-registry';

export const getSiteUrl = (path = '') => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stadiumport.com";
  return path ? `${baseUrl}${path}` : baseUrl;
};

export const generateArticleSchema = (slug: string, urlPath: string) => {
  const meta = getContentMeta(slug);
  const url = getSiteUrl(urlPath);
  
  if (!meta) {
    console.warn(`Missing content meta for slug: ${slug}`);
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Stadiumport Guide",
      "url": url,
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.description,
    "image": meta.image ? getSiteUrl(meta.image) : undefined,
    "author": {
      "@type": "Organization",
      "name": meta.author || "Stadiumport Team",
      "url": getSiteUrl()
    },
    "publisher": {
      "@type": "Organization",
      "name": "Stadiumport",
      "logo": {
        "@type": "ImageObject",
        "url": getSiteUrl('/images/Logos/favicon/android-chrome-512x512.png'),
        "width": 512,
        "height": 512
      }
    },
    "datePublished": meta.publishedAt,
    "dateModified": meta.updatedAt,
    ...(meta.wordCount ? { "wordCount": meta.wordCount } : {}),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": getSiteUrl(item.item)
  }))
});

// Common schema generators
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Stadiumport",
  "description": "Experience the breathtaking atmosphere of the World Cup 2026 with three massive USA, Mexico, and Canada flags proudly displayed in the middle of a night-lit stadium.",
  "url": getSiteUrl(),
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${getSiteUrl()}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stadiumport",
    "url": getSiteUrl()
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stadiumport",
  "alternateName": ["Stadiumport", "Stadiumport.com"],
  "url": getSiteUrl(),
  "logo": {
    "@type": "ImageObject",
    "url": `${getSiteUrl()}/images/Logos/favicon/android-chrome-512x512.png`,
    "width": 512,
    "height": 512,
    "caption": "Stadiumport Logo"
  },
  "sameAs": [
    "https://twitter.com/stadiumport",
    "https://facebook.com/stadiumport",
    "https://www.instagram.com/stadiumport",
    "https://www.youtube.com/@stadiumport",
    "https://www.linkedin.com/company/stadiumport"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@stadiumport.com",
    "contactType": "customer support",
    "availableLanguage": ["English", "Spanish", "French"]
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
    "name": "Stadiumport",
    "url": getSiteUrl()
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
    "name": "Stadiumport",
    "url": getSiteUrl()
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
    "endDate": "2026-07-19",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": {
      "@type": "Organization",
      "name": "FIFA",
      "url": "https://www.fifa.com"
    },
    "location": {
      "@type": "Place",
      "name": stadiumName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName
      }
    }
  }
});



export const generateImageObjectSchema = (url: string, caption?: string) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": url.startsWith('http') ? url : getSiteUrl() + url,
  "url": url.startsWith('http') ? url : getSiteUrl() + url,
  ...(caption ? { "caption": caption } : {})
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
      : getSiteUrl() + item.url,
    ...(item.image
      ? {
          "image": getSiteUrl() + item.image,
        }
      : {}),
  }))
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
        "image": getSiteUrl() + args.image,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": getSiteUrl() + args.image,
          "contentUrl": getSiteUrl() + args.image,
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
        : getSiteUrl() + item.url,
      ...(item.image
        ? {
            "image": getSiteUrl() + item.image,
          }
        : {}),
    })),
  },
});
