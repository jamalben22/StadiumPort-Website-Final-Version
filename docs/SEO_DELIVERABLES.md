# SEO Transformation Deliverables - Stadiumport

This document contains the complete implementation package to transform Stadiumport's search presence to a premium global brand level.

## 1. UPDATED METADATA (CSV Format)

| URL Path | New Title (50-60 chars) | New Description (150-160 chars) | Schema Type |
|----------|-------------------------|---------------------------------|-------------|
| `/` | World Cup 2026 Travel Guide \| Host Cities & Tickets \| Stadiumport | Complete guide to FIFA World Cup 2026. Explore 16 host cities, stadium guides, match schedules, and travel tips across USA, Canada, and Mexico. Plan now. | WebSite, Organization |
| `/about` | About Stadiumport \| World Cup 2026 Travel Experts \| Stadiumport | Learn about Stadiumport, your trusted World Cup 2026 travel companion. Our mission: making your tournament journey simple, safe, and unforgettable. | AboutPage, Organization |
| `/contact` | Contact Stadiumport \| Support & Inquiries \| Stadiumport | Get in touch with Stadiumport. Questions about World Cup 2026? Partnership inquiries? Media requests? Contact our team for expert assistance today. | ContactPage, Organization |
| `/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide` | NY/NJ World Cup 2026 Guide \| MetLife Stadium \| Stadiumport | Ultimate guide to World Cup 2026 in New York/New Jersey. MetLife Stadium seating, hotels, transport, and tickets. Plan your NYNJ matchday experience. | City, TravelGuide |
| `/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide` | Los Angeles World Cup 2026 Guide \| SoFi Stadium \| Stadiumport | Complete LA World Cup 2026 travel guide. SoFi Stadium info, Hollywood hotels, traffic tips, and match schedule. Experience the World Cup in Los Angeles. | City, TravelGuide |
| `/world-cup-2026-stadiums/metlife-stadium` | MetLife Stadium Guide 2026 \| Capacity & Seating \| Stadiumport | MetLife Stadium World Cup 2026 guide. Capacity 82,500. Seating chart, parking, bag policy, and best hotels near East Rutherford. Get match ready. | StadiumOrArena |
| `/world-cup-2026-stadiums/estadio-azteca` | Estadio Azteca Guide 2026 \| History & Tickets \| Stadiumport | Historic Estadio Azteca World Cup 2026 guide. Capacity 87,523. Seating, renovation updates, and travel tips for Mexico City's legendary venue. | StadiumOrArena |

## 2. ORGANIZATION SCHEMA (Complete JSON-LD)

Copy and paste this into `src/components/seo/SchemaOrg.tsx` (Already Implemented):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stadiumport",
  "alternateName": ["StadiumPort", "StadiumPort.com"],
  "url": "https://stadiumport.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://stadiumport.com/images/Logos/Desktop Header SP Logo 2400 x 600 px Night mode.svg",
    "width": 2400,
    "height": 600,
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
}
```

## 3. OUTDATED CONTENT REMOVAL

### URLs to Remove (Google Search Console)
These pages/URLs contain "Cinematic Night Stadium Hero" or other beta artifacts:
1.  `https://stadiumport.com/images/world-cup-2026-night-stadium-usa-mexico-canada-flags-middle.webp` (The image page itself if indexed separately with bad caption)
2.  Any URL ending in `?test=true` or development parameters.
3.  `https://stadiumport.com/old-home` (if exists)

### GSC Removal Steps:
1.  Log in to **Google Search Console**.
2.  Go to **Removals** > **Temporary Removals**.
3.  Click **New Request**.
4.  Select **Remove this URL only** (for specific files) or **Remove all URLs with this prefix** (be careful!).
5.  Enter the URL and click **Next** > **Submit Request**.

### Robots.txt Update (Already Applied)
We have updated `public/robots.txt` to:
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://stadiumport.com/sitemap.xml
```

## 4. 301 REDIRECTS
If you have changed any URLs, implement redirects in your hosting provider (Vercel/Netlify) or server config.

**Example `vercel.json` redirect:**
```json
{
  "redirects": [
    { 
      "source": "/old-page",
      "destination": "/new-page", 
      "permanent": true 
    }
  ]
}
```

## 5. RICH RESULTS SCHEMA

### VideoObject (Implemented)
Use `generateVideoObjectSchema` for any page with embedded videos.

### Review (Implemented)
Use `generateReviewSchema` for stadium or hotel reviews.

### FAQPage (Implemented)
Use `generateFAQSchema` on all Guide pages.

## 6. GSC ACTION CHECKLIST

- [ ] **Submit Sitemap:** Go to GSC > Sitemaps > Submit `https://stadiumport.com/sitemap.xml`
- [ ] **Request Indexing:** Go to URL Inspection > Enter `https://stadiumport.com/` > Click "Request Indexing". Repeat for key city pages.
- [ ] **Brand Name Check:** Search "Stadiumport" in 3-5 days to verify the Knowledge Graph panel uses the correct logo and name.
- [ ] **Rich Results Test:** Run `https://search.google.com/test/rich-results` on your homepage to verify Organization and WebSite schema.

## 7. BRAND CONSISTENCY PLAN

- **Footer:** Ensure copyright says "© 2025 Stadiumport" (not stadiumport.com).
- **Social Media:** Rename all handles/display names to "Stadiumport".
- **Email Signatures:** Update to "The Stadiumport Team".
- **Logo:** Use the "Night Mode" logo consistently across all dark backgrounds.

## 8. VERIFICATION PLAN

1.  **Site Search:** Run `site:stadiumport.com` in Google.
    *   *Success:* No "Cinematic Night Stadium Hero" results. All titles match the new format.
2.  **Brand Search:** Search "Stadiumport".
    *   *Success:* Knowledge Panel appears with correct logo and social links.
3.  **Rich Snippets:** Search "World Cup 2026 Guide".
    *   *Success:* Breadcrumbs appear (e.g., `Stadiumport > World Cup 2026 > Host Cities`).
4.  **Mobile Check:** Verify the Favicon and Site Name appear correctly in mobile SERPs.
