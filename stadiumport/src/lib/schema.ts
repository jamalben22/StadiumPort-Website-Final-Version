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
      "headline": "stadiumport Guide",
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
      "name": meta.author || "stadiumport Team",
      "url": getSiteUrl()
    },
    "publisher": {
      "@type": "Organization",
      "name": "stadiumport",
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

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Common schema generators
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "stadiumport",
  "alternateName": ["stadiumport", "World Cup 2026 Travel Guide"],
  "description": "The ultimate resource for World Cup 2026. Expert travel guides, stadium info, and planning for USA, Mexico, and Canada.",
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
    "name": "stadiumport",
    "url": getSiteUrl()
  }
});

export const generateEventSchema = (event: {
  name: string;
  startDate: string;
  endDate: string;
  location: { name: string; address: string; country?: string };
  image: string;
  description: string;
  performer?: any;
  offers?: any;
}) => ({
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": event.name,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": event.location.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": event.location.address,
      "addressCountry": event.location.country || "US"
    }
  },
  "image": [getSiteUrl(event.image)],
  "description": event.description,
  "organizer": {
    "@type": "Organization",
    "name": "FIFA",
    "url": "https://www.fifa.com"
  },
  "performer": event.performer || [
    {
      "@type": "SportsTeam",
      "name": "FIFA World Cup 2026 Qualified Team A"
    },
    {
      "@type": "SportsTeam",
      "name": "FIFA World Cup 2026 Qualified Team B"
    }
  ],
  "offers": event.offers || {
    "@type": "AggregateOffer",
    "url": "https://www.fifa.com/tickets",
    "priceCurrency": "USD",
    "lowPrice": "60",
    "highPrice": "2030",
    "availability": "https://schema.org/PreOrder",
    "validFrom": "2025-09-01T10:00:00Z"
  }
});

export const generateMatchListSchema = (groupName: string, matches: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `${groupName} Matches`,
  "itemListElement": matches.map((match, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": generateEventSchema(match)
  }))
});

export const generateLocalBusinessSchema = (business: {
  name: string;
  image: string;
  telephone?: string;
  address: { street?: string; city: string; region: string; postalCode?: string; country: string };
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // or SportsActivityLocation
  "name": business.name,
  "image": getSiteUrl(business.image),
  "@id": getSiteUrl(),
  "url": getSiteUrl(),
  "telephone": business.telephone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": business.address.street,
    "addressLocality": business.address.city,
    "addressRegion": business.address.region,
    "postalCode": business.address.postalCode,
    "addressCountry": business.address.country
  },
  ...(business.geo ? {
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.geo.latitude,
      "longitude": business.geo.longitude
    }
  } : {}),
  "priceRange": business.priceRange || "$$"
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "stadiumport",
  "alternateName": ["stadiumport", "stadiumport World Cup Guide"],
  "url": getSiteUrl(),
  "logo": {
    "@type": "ImageObject",
    "url": `${getSiteUrl()}/images/Logos/favicon/android-chrome-512x512.png`,
    "width": 512,
    "height": 512,
    "caption": "stadiumport Logo"
  },
  "description": "The definitive travel guide for the 2026 FIFA World Cup. We provide expert insights, stadium guides, and comprehensive travel planning resources for fans visiting the USA, Mexico, and Canada.",
  "foundingDate": "2023",
  "sameAs": [
    "https://twitter.com/stadiumport",
    "https://facebook.com/stadiumport",
    "https://instagram.com/stadiumport",
    "https://www.linkedin.com/company/stadiumport",
    "https://www.youtube.com/@stadiumport"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "hello@stadiumport.com"
  }
});

export const generateSportsEventSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "FIFA World Cup 2026",
  "description": "The 23rd FIFA World Cup, hosted jointly by Canada, Mexico, and the United States. Featuring 48 teams and 104 matches across 16 host cities.",
  "startDate": "2026-06-11",
  "endDate": "2026-07-19",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": [
    {
      "@type": "Place",
      "name": "MetLife Stadium",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 MetLife Stadium Dr",
        "addressLocality": "East Rutherford",
        "addressRegion": "NJ",
        "postalCode": "07073",
        "addressCountry": "US"
      }
    },
    {
      "@type": "Place",
      "name": "United States",
      "address": { "@type": "PostalAddress", "addressCountry": "US" }
    },
    {
      "@type": "Place",
      "name": "Mexico",
      "address": { "@type": "PostalAddress", "addressCountry": "MX" }
    },
    {
      "@type": "Place",
      "name": "Canada",
      "address": { "@type": "PostalAddress", "addressCountry": "CA" }
    }
  ],
  "organizer": {
    "@type": "Organization",
    "name": "FIFA",
    "url": "https://www.fifa.com"
  },
  "performer": {
    "@type": "Organization",
    "name": "FIFA World Cup 2026 Qualified Teams"
  },
  "image": [
    "https://stadiumport.com/images/hero/world-cup-2026-hero.webp"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.fifa.com/tickets",
    "availability": "https://schema.org/PreOrder",
    "price": "60",
    "priceCurrency": "USD",
    "lowPrice": "60",
    "highPrice": "2030",
    "validFrom": "2025-10-01"
  }
});
