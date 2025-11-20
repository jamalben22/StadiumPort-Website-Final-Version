
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { WorldClassFAQ } from '../../components/feature/WorldClassFAQ';
import { OptimizedImage } from '../../components/base/OptimizedImage';
import { SchemaOrg, generateCollectionPageSchema, generateItemListSchema } from '../../components/seo/SchemaOrg';

// Ultra-Premium Perfect Responsive Breadcrumb Styles
const breadcrumbStyles = `
  /* Perfect responsive breadcrumb design */
  .breadcrumb-ultra-premium {
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  }
  
  .breadcrumb-ultra-premium ol {
    display: flex;
    align-items: center;
    gap: 0.125rem;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    flex-wrap: nowrap;
  }
  
  /* Individual breadcrumb items - Perfect responsive design */
  .breadcrumb-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  
  .breadcrumb-item:last-child {
    flex-shrink: 1;
    min-width: 0;
  }
  
  .breadcrumb-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.25;
    color: #374151;
    text-decoration: none;
    border-radius: 0.375rem;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    flex-shrink: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  
  .dark .breadcrumb-link {
    color: #f3f4f6;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  /* Hover state - subtle and elegant */
  .breadcrumb-link:hover {
    color: #1f2937;
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .dark .breadcrumb-link:hover {
    color: #f9fafb;
    background-color: rgba(255, 255, 255, 0.08);
  }
  
  /* Current page - Perfect responsive design */
  .breadcrumb-current {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.25;
    color: #111827;
    border-radius: 0.375rem;
    background-color: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    flex: 1;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  
  .dark .breadcrumb-current {
    color: #ffffff;
    background-color: rgba(16, 185, 129, 0.25);
    border: 1px solid rgba(16, 185, 129, 0.4);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  /* Minimalist separators */
  .breadcrumb-separator {
    display: flex;
    align-items: center;
    color: #6b7280;
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0 0.125rem;
    user-select: none;
    flex-shrink: 0;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  
  .dark .breadcrumb-separator {
    color: #9ca3af;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }
  
  /* Ultra-clean icons */
  .breadcrumb-icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
    opacity: 0.9;
    transition: all 0.2s ease;
    flex-shrink: 0;
    color: #6b7280;
    stroke-width: 2;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
  }
  
  .dark .breadcrumb-icon {
    color: #9ca3af;
    opacity: 0.95;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
  }
  
  .breadcrumb-link:hover .breadcrumb-icon {
    opacity: 1;
    color: #374151;
    transform: scale(1.05);
  }
  
  .dark .breadcrumb-link:hover .breadcrumb-icon {
    color: #f3f4f6;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
  }
  
  /* Desktop: Full display */
  @media (min-width: 1024px) {
    .breadcrumb-ultra-premium {
      max-width: 100%;
    }
    
    .breadcrumb-current {
      max-width: none;
      flex: 0 1 auto;
    }
  }
  
  /* Tablet: Optimized display */
  @media (min-width: 768px) and (max-width: 1023px) {
    .breadcrumb-link,
    .breadcrumb-current {
      padding: 0.5rem 0.625rem;
      font-size: 0.8125rem;
    }
    
    .breadcrumb-current {
      max-width: 300px;
    }
  }
  
  /* Mobile: Compact display */
  @media (max-width: 767px) {
    .breadcrumb-ultra-premium ol {
      gap: 0.0625rem;
    }
    
    .breadcrumb-link,
    .breadcrumb-current {
      padding: 0.375rem 0.5rem;
      font-size: 0.75rem;
    }
    
    .breadcrumb-icon {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.25rem;
    }
    
    .breadcrumb-separator {
      font-size: 0.6875rem;
      margin: 0 0.0625rem;
    }
    
    .breadcrumb-current {
      max-width: 200px;
    }
  }
  
  /* Small mobile: Ultra-compact */
  @media (max-width: 480px) {
    .breadcrumb-link {
      padding: 0.375rem 0.375rem;
      font-size: 0.6875rem;
    }
    
    .breadcrumb-current {
      padding: 0.375rem 0.5rem;
      font-size: 0.6875rem;
      max-width: 120px;
    }
    
    .breadcrumb-icon {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.25rem;
      stroke-width: 2.5;
    }
    
    .breadcrumb-separator {
      font-size: 0.625rem;
    }
  }
  
  /* Extra small devices: Minimal display */
  @media (max-width: 360px) {
    .breadcrumb-link {
      padding: 0.25rem 0.375rem;
      font-size: 0.625rem;
    }
    
    .breadcrumb-current {
      padding: 0.25rem 0.375rem;
      font-size: 0.625rem;
      max-width: 100px;
    }
    
    .breadcrumb-icon {
      width: 0.625rem;
      height: 0.625rem;
      margin-right: 0.125rem;
      stroke-width: 3;
    }
    
    .breadcrumb-separator {
      font-size: 0.5625rem;
      margin: 0 0.03125rem;
    }
  }
  
  /* Subtle animation on page load */
  @keyframes breadcrumbFadeIn {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .breadcrumb-ultra-premium {
    animation: breadcrumbFadeIn 0.4s ease-out;
  }
  
  /* Dark mode transitions */
  @media (prefers-color-scheme: dark) {
    .breadcrumb-link,
    .breadcrumb-current,
    .breadcrumb-separator {
      transition: all 0.3s ease;
    }
  }
`;

interface TipSection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: TipSection[];
}

  interface TravelTip {
    id: number;
    title: string;
    category: string;
    readTime: string;
    difficulty: string;
    savings: string;
    author: string;
    authorImage: string;
    description: string;
    tips: string[];
    image: string;
    fullContent: FullContent;
    slugOverride?: string;
  }

export default function TravelTipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTip, setSelectedTip] = useState<TravelTip | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const pageTitle = 'World Cup 2026 Travel Tips – Expert Advice | StadiumPort';
    const descriptionText = 'Comprehensive World Cup 2026 travel tips: flights, hotels, itineraries, safety, and more across 16 host cities.';
    const siteUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;
    const pageUrl = `${siteUrl}/world-cup-2026-travel-tips`;
    const ogImage = `${siteUrl}/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp`;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (el) el.setAttribute(attr, value);
    };

    document.title = pageTitle;
    setMeta('meta[name="description"]', 'content', descriptionText);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    setMeta('meta[property="og:title"]', 'content', pageTitle);
    setMeta('meta[property="og:description"]', 'content', descriptionText);
    setMeta('meta[property="og:url"]', 'content', pageUrl);
    setMeta('meta[property="og:image"]', 'content', ogImage);

    setMeta('meta[property="twitter:title"]', 'content', pageTitle);
    setMeta('meta[property="twitter:description"]', 'content', descriptionText);
    setMeta('meta[property="twitter:url"]', 'content', pageUrl);
    setMeta('meta[property="twitter:image"]', 'content', ogImage);
  }, []);

  const openTipModal = (tip: TravelTip) => {
    setSelectedTip(tip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTip(null);
  };

  const travelTips: TravelTip[] = [
    {
      id: 1,
      title: 'World Cup 2026 Budget Guide: Complete Cost Breakdown & Savings Strategies',
      category: 'accommodation',
      readTime: '5 min',
      difficulty: 'Beginner',
      savings: '$200+',
      author: 'Alex Thompson',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20accommodation%20expert%20headshot%2C%20hotel%20booking%20specialist%2C%20friendly%20travel%20advisor%2C%20confident%20expression&width=100&height=100&seq=author-alex&orientation=squarish',
      description: 'Master the art of finding accommodations within walking distance of stadiums without paying premium prices.',
      slugOverride: 'world-cup-2026-budget-guide-complete-cost-breakdown-&-savings-startegies',
      tips: [
        'Book accommodations 2-3 subway stops away from stadiums for 40-60% savings',
        'Look for hotels near team practice facilities - often overlooked but well-connected',
        'Consider university dormitories during summer months for budget options',
        'Use stadium shuttle services to stay further out while maintaining convenience'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20stadium%20exterior%20with%20surrounding%20urban%20neighborhood%2C%20accessible%20public%20transportation%2C%20walkable%20streets%2C%20budget-friendly%20accommodation%20area%2C%20practical%20travel%20planning%20perspective&width=400&height=250&seq=stadium-proximity&orientation=landscape',
      fullContent: {
        introduction: 'Finding the perfect balance between stadium proximity and budget-friendly accommodation is an art form. This comprehensive strategy guide reveals insider secrets for staying close to the action without breaking the bank.',
        sections: [
          {
            title: 'The 2-3 Stop Rule',
            content: 'The sweet spot for accommodation savings lies 2-3 subway stops away from stadiums. This distance typically offers 40-60% savings compared to stadium-adjacent hotels while maintaining easy access. Research the local transit system and identify stops that offer direct routes to the stadium with minimal transfers.'
          },
          {
            title: 'Practice Facility Proximity',
            content: 'Hotels near team practice facilities are often overlooked by tourists but offer excellent value and connectivity. These areas typically have good transportation links to stadiums and lower accommodation costs. Many practice facilities are located in business districts with quality hotels at competitive rates.'
          },
          {
            title: 'University Dormitory Options',
            content: 'During summer months, many universities offer dormitory accommodations to travelers. These options provide basic but clean accommodations at fraction of hotel costs. Look for universities within 30 minutes of stadiums and check their summer housing programs.'
          },
          {
            title: 'Stadium Shuttle Services',
            content: 'Many hotels offer complimentary shuttle services to major venues during events. This allows you to stay further from the stadium while maintaining convenient access. Always confirm shuttle schedules and capacity when booking, as these services can fill up quickly during major events.'
          },
          {
            title: 'Booking Timeline Strategy',
            content: 'Book accommodations 3-4 months in advance for best selection and rates. Monitor prices weekly and be prepared to rebook if rates drop. Consider cancellable reservations to take advantage of last-minute deals while securing your backup option.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Best Time to Book World Cup 2026: Tickets, Flights & Hotels',
      category: 'planning',
      readTime: '8 min',
      difficulty: 'Advanced',
      savings: '$500+',
      author: 'Maria Rodriguez',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20travel%20planning%20expert%20headshot%2C%20multi-city%20specialist%2C%20organized%20travel%20consultant%2C%20strategic%20planner&width=100&height=100&seq=author-maria&orientation=squarish',
      description: 'Optimize your itinerary to catch multiple matches across different cities while minimizing travel costs.',
      tips: [
        'Plan routes based on match schedules, not geographical proximity',
        'Book open-jaw flights (fly into one city, out of another) for multi-city trips',
        'Use regional airports for domestic connections - often cheaper than major hubs',
        'Consider bus travel between nearby cities (NYC-Philadelphia, LA-San Francisco)'
      ],
      image: 'https://readdy.ai/api/search-image?query=Travel%20planning%20map%20with%20multiple%20North%20American%20cities%20connected%20by%20routes%2C%20tournament%20schedule%20overlay%2C%20efficient%20multi-city%20itinerary%20visualization%2C%20strategic%20travel%20planning%20concept&width=400&height=250&seq=multi-city-planning&orientation=landscape',
      fullContent: {
        introduction: 'Planning a multi-city tournament experience requires strategic thinking and careful coordination. This advanced guide helps you optimize your itinerary for maximum games while minimizing costs and travel time.',
        sections: [
          {
            title: 'Schedule-Based Route Planning',
            content: 'Ignore geographical logic and plan your route based on match schedules. Sometimes it\'s more efficient to zigzag across the continent following the tournament schedule rather than taking a linear geographical approach. Use tournament scheduling to your advantage by identifying clusters of games in nearby cities.'
          },
          {
            title: 'Open-Jaw Flight Strategy',
            content: 'Book flights that arrive in one city and depart from another (open-jaw tickets). This eliminates the need to return to your starting point and can save significant money and time. Many airlines offer competitive open-jaw pricing, especially for international travelers.'
          },
          {
            title: 'Regional Airport Advantages',
            content: 'Secondary airports often offer better deals and shorter lines than major hubs. Research airports within 2-3 hours of your destination cities. Factor in ground transportation costs, but often the savings and convenience outweigh the extra travel time.'
          },
          {
            title: 'Strategic Ground Transportation',
            content: 'For cities within 4-6 hours of each other, consider bus or train travel. Overnight buses can save on accommodation costs while getting you to your next destination. High-speed rail options in certain corridors can be faster and more comfortable than flying when you factor in airport time.'
          },
          {
            title: 'Accommodation Coordination',
            content: 'Book accommodations that allow flexible check-in/check-out times. Consider staying in cities with multiple nearby venues to minimize moves. Some travelers find success in establishing "base camps" in central locations and taking day trips to nearby stadiums.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'World Cup 2026 Host City Guide: Which Cities Should You Visit?',
      category: 'booking',
      readTime: '6 min',
      difficulty: 'Intermediate',
      savings: '$300+',
      author: 'David Chen',
      authorImage: 'https://readdy.ai/api/search-image?query=Asian%20male%20booking%20expert%20headshot%2C%20pricing%20specialist%2C%20tech-savvy%20travel%20advisor%2C%20analytical%20expression&width=100&height=100&seq=author-david&orientation=squarish',
      description: 'Understand and exploit hotel pricing algorithms to secure the best rates during peak tournament periods.',
      tips: [
        'Clear browser cookies between searches to avoid price tracking',
        'Book Sunday-Thursday for weekend matches to avoid premium rates',
        'Use VPN to compare prices from different geographical locations',
        'Set up price alerts 6 months in advance for optimal booking windows'
      ],
      image: 'https://readdy.ai/api/search-image?query=Hotel%20booking%20interface%20showing%20dynamic%20pricing%20charts%2C%20rate%20comparison%20graphs%2C%20booking%20optimization%20strategy%2C%20digital%20travel%20planning%20tools%2C%20price%20tracking%20visualization&width=400&height=250&seq=dynamic-pricing&orientation=landscape',
      fullContent: {
        introduction: 'Hotel pricing algorithms are sophisticated systems that adjust rates based on demand, competition, and user behavior. Understanding these systems allows savvy travelers to secure significantly better rates during peak tournament periods.',
        sections: [
          {
            title: 'Browser and Cookie Management',
            content: 'Hotels track your search behavior through cookies and may increase prices on repeat visits. Always clear cookies between searches or use incognito/private browsing mode. Some travelers use different devices or browsers for price comparison to avoid tracking algorithms.'
          },
          {
            title: 'Strategic Booking Timing',
            content: 'Book accommodations for Sunday through Thursday nights when possible, even for weekend games. Many hotels offer lower rates for weeknight stays. Arrive a day or two early and stay through the weekend to take advantage of these rate differences.'
          },
          {
            title: 'Geographic Price Arbitrage',
            content: 'Hotel prices can vary based on your apparent location. Use VPN services to compare prices from different countries or regions. Sometimes booking from a different geographic location can result in significant savings due to regional pricing strategies.'
          },
          {
            title: 'Price Alert Systems',
            content: 'Set up price alerts 6 months in advance using multiple platforms. Monitor price trends and identify optimal booking windows. Many hotels release inventory in waves, creating opportunities for better rates at different times during the booking cycle.'
          },
          {
            title: 'Cancellation Policy Leverage',
            content: 'Book refundable rates when possible to take advantage of price drops. Monitor your reservations regularly and rebook at lower rates when available. Some credit cards offer price protection that can reimburse you for rate decreases after booking.'
          }
        ]
      }
    }
    ,
    {
      id: 4,
      title: 'World Cup 2026 Accommodation Guide: Where to Stay for Every Budget',
      category: 'planning',
      readTime: '6 min',
      difficulty: 'Beginner',
      savings: '$100+',
      author: 'Nora Patel',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20travel%20security%20expert%20headshot%2C%20stadium%20rules%20specialist%2C%20organized%20planner&width=100&height=100&seq=author-nora&orientation=squarish',
      description: 'Bring everything you need on matchday without breaking security rules or buying overpriced gear inside the stadium.',
      tips: [
        'Use 12" x 6" x 12" clear bags to pass security quickly',
        'Pack travel-size sunscreen (lotion), cooling towel, reusable empty bottle',
        'Add portable battery, noise plugs, and small snack pre-security'
      ],
      image: 'https://readdy.ai/api/search-image?query=clear%20bag%20stadium%20policy%2C%20matchday%20packing%20checklist%2C%20transparent%20bag%20with%20essentials&width=400&height=250&seq=clear-bag&orientation=landscape',
      fullContent: {
        introduction: 'Matchday packing is an art: bring essentials while flying through security. This guide shows exactly what to pack to stay safe, comfortable, and compliant with clear bag rules.',
        sections: [
          { title: 'Approved Bag Sizes', content: 'Most venues enforce clear bags up to 12" x 6" x 12". Small clutch up to 4.5" x 6.5" may be allowed. Soft-sided, no logos that obstruct view, and avoid hard cases.' },
          { title: 'Heat & Comfort Essentials', content: 'Cooling towel, hat, sunglasses, lotion sunscreen, lip balm with SPF, and lightweight layer for evening matches. Empty reusable bottle to refill at hydration stations.' },
          { title: 'Tech & Tickets', content: 'Portable battery, short cable, phone with FIFA app and tickets downloaded. Screenshot QR as backup. Keep battery above 40% before leaving hotel.' },
          { title: 'Food & Medical', content: 'Small sealed snack if permitted, medication in original containers, basic bandages, hand sanitizer (non-aerosol). Check venue rules for allowances.' },
          { title: 'Security Flow', content: 'Pre-pack in pouches, remove metal items, arrive 2–3 hours early, use the fastest lane, and avoid bottlenecks near kickoff.' }
        ]
      }
    },
    {
      id: 5,
      title: 'World Cup 2026 Flight Booking Guide: Routes, Airlines & Strategies',
      category: 'transportation',
      readTime: '7 min',
      difficulty: 'Intermediate',
      savings: '$120+',
      author: 'Alex Thompson',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20mobility%20strategy%20expert%20headshot%2C%20rideshare%20planning%2C%20street%20logistics&width=100&height=100&seq=author-alex2&orientation=squarish',
      description: 'Beat surge pricing and post-match chaos by using mapped pickup zones, walking offsets, and transit pairings.',
      tips: [
        'Walk 10–15 minutes to pre-selected pickup offsets to avoid surge',
        'Use official zones only; pair Metro for first/last mile',
        'Share fare with group and wait 30 minutes for price to normalize'
      ],
      image: 'https://readdy.ai/api/search-image?query=rideshare%20pickup%20zone%2C%20post%20match%20crowd%2C%20city%20traffic%20management&width=400&height=250&seq=rideshare-zone&orientation=landscape',
      fullContent: {
        introduction: 'Rideshare works—if you play it smart. Learn offset walking routes, surge avoidance, and safe meeting locations that clear crowds fast.',
        sections: [
          { title: 'Pre-Match Mapping', content: 'Identify two pickup offsets 10–15 minutes from the venue on opposite sides. Save pins and share with your group before kickoff.' },
          { title: 'Surge Avoidance', content: 'Wait 20–30 minutes post-match or walk to lower-demand areas. Watch live price trends; avoid queueing at stadium gates.' },
          { title: 'Safety Protocols', content: 'Verify license plate and driver name, ride only in lit areas, and keep group together. Use in-app safety features.' },
          { title: 'Transit Pairing', content: 'Use Metro or shuttle for first/last mile, then rideshare the final leg. Cheaper and faster than door-to-door after big games.' },
          { title: 'Group Savings', content: 'Split fares with friends, avoid premium services unless necessary, and pre-agree reimbursements to simplify payments.' }
        ]
      }
    },
    {
      id: 6,
      title: 'World Cup 2026 Itinerary Planning: 1, 2, or 3 Week Sample Itineraries',
      category: 'planning',
      readTime: '6 min',
      difficulty: 'Beginner',
      savings: '$80+',
      author: 'Dr. Lina Chen',
      authorImage: 'https://readdy.ai/api/search-image?query=Medical%20doctor%20headshot%20female%2C%20heat%20safety%20expert%2C%20travel%20health%20advisor&width=100&height=100&seq=author-lina&orientation=squarish',
      description: 'Stay cool and hydrated with proven gear and timing protocols tailored for summer matchdays.',
      tips: [
        'Cooling towel + misting fan reduce perceived heat quickly',
        'Force hydration schedule: 8–12 oz every 20 minutes',
        'Shade breaks during peak hours 2–5 PM'
      ],
      image: 'https://readdy.ai/api/search-image?query=heat%20safety%20gear%20for%20stadium%2C%20cooling%20towels%2C%20portable%20fan%2C%20hydration%20bottle&width=400&height=250&seq=heat-gear&orientation=landscape',
      slugOverride: 'world-cup-2026-itinerary-planning-1-2-or-3-week-sample-itineraries',
      fullContent: {
        introduction: 'Extreme heat requires preparation. This checklist and protocol ensure you enjoy the match safely while minimizing risk.',
        sections: [
          { title: 'Gear Basics', content: 'Wide-brim hat, SPF 50+ lotion sunscreen, sunglasses, cooling towel, misting fan, and light long-sleeves for sun protection.' },
          { title: 'Hydration Protocol', content: 'Start 3 hours before departure, hydrate on schedule, and alternate water with electrolyte drinks if sweating heavily.' },
          { title: 'Timing Strategy', content: 'Aim for evening matches; take concourse shade breaks during peak thermal stress and monitor symptoms continuously.' },
          { title: 'Family Adjustments', content: 'Children need more frequent breaks and forced hydration; use ear defenders and lighter clothing.' },
          { title: 'Recovery', content: 'Post-match hydration for 2–3 hours, monitor urine color, and avoid dehydrating drinks.' }
        ]
      }
    },
    {
      id: 7,
      title: 'World Cup 2026 Packing Guide: Ultimate Checklist for All Weather',
      category: 'booking',
      readTime: '7 min',
      difficulty: 'Advanced',
      savings: '$400+',
      author: 'David Chen',
      authorImage: 'https://readdy.ai/api/search-image?query=Asian%20male%20loyalty%20program%20expert%20headshot%2C%20hotel%20points%20strategist&width=100&height=100&seq=author-david2&orientation=squarish',
      description: 'Unlock elite benefits, free nights, and late check-outs by stacking promos and matching status across chains.',
      tips: [
        'Combine member rates with cardholder promos and app-only deals',
        'Status match across Marriott/Hilton/IHG before booking',
        'Redeem points for peak nights; pay cash off-peak'
      ],
      image: 'https://readdy.ai/api/search-image?query=hotel%20loyalty%20points%2C%20elite%20status%2C%20membership%20cards%2C%20travel%20rewards&width=400&height=250&seq=points-stack&orientation=landscape',
      slugOverride: 'world-cup-2026-packing-guide-ultimate-checklist-for-all-weather',
      fullContent: {
        introduction: 'Strategic loyalty stacking can cut costs dramatically. Learn status matching and promo stacking for World Cup peak dates.',
        sections: [
          { title: 'Status Match 101', content: 'Use official match programs to port status between chains. Secure elite benefits before booking peak nights.' },
          { title: 'Promo Stacking', content: 'Combine member rates, credit card offers, and app-only discounts. Book direct when perks exceed OTA savings.' },
          { title: 'Cash vs. Points', content: 'Redeem points for peak nights with highest cash rates; pay cash when rates drop. Track value per point.' },
          { title: 'Late Check-out & Upgrades', content: 'Elite status unlocks late check-out and room upgrades—critical for matchday timing and rest.' },
          { title: 'Group Strategy', content: 'Split costs with friends using multi-room bookings and shared points redemptions where allowed.' }
        ]
      }
    },
    {
      id: 8,
      title: 'World Cup 2026 Match Selection Strategy: Which Games to Attend',
      category: 'transportation',
      readTime: '6 min',
      difficulty: 'Intermediate',
      savings: '$150+',
      author: 'Priya Shah',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20urban%20mobility%20expert%20headshot%2C%20city%20transit%20planner&width=100&height=100&seq=author-priya&orientation=squarish',
      description: 'Use day passes, trip planners, and park-and-ride lots to move efficiently between matches and sights.',
      tips: [
        'Buy unlimited day passes; avoid single-ride overpaying',
        'Use park-and-ride lots on matchdays',
        'Plan transfers with official trip planner apps'
      ],
      image: 'https://readdy.ai/api/search-image?query=city%20transit%20day%20pass%2C%20metro%20station%2C%20trip%20planner%20app%20on%20phone&width=400&height=250&seq=city-pass&orientation=landscape',
      slugOverride: 'world-cup-2026-match-selection-startegy-which-games-to-attend',
      fullContent: {
        introduction: 'Local transit is the World Cup hack. Master day passes, route planners, and shuttle integrations to avoid traffic.',
        sections: [
          { title: 'Pass Types', content: 'Buy unlimited day passes to cap daily costs. Load cards or apps in advance to skip queues.' },
          { title: 'Trip Planning', content: 'Use official apps for live updates, delays, and optimal transfers. Save offline route screenshots.' },
          { title: 'Park-and-Ride', content: 'Drive to transit hubs, then ride in—faster and cheaper than stadium parking on matchdays.' },
          { title: 'Shuttle Integration', content: 'Leverage event shuttles from key stations for reliable last-mile service.' },
          { title: 'Safety & Timing', content: 'Travel in groups after late matches, and aim for trains before the last departure windows.' }
        ]
      }
    },
    {
      id: 9,
      title: 'World Cup 2026 Food & Dining Guide: Eating Well on Any Budget',
      category: 'planning',
      readTime: '5 min',
      difficulty: 'Beginner',
      savings: '$60+',
      author: 'Omar Delgado',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20night%20city%20expert%20headshot%2C%20food%20and%20transit%20guide&width=100&height=100&seq=author-omar&orientation=squarish',
      description: 'Find reliable post-match eats and get back safely using late-night service maps and group movement.',
      tips: [
        'Bookmark 24/7 spots near transit hubs',
        'Plan last train times before kickoff',
        'Move in groups; avoid isolated streets'
      ],
      image: 'https://readdy.ai/api/search-image?query=late%20night%20food%20near%20metro%20station%2C%20city%20street%20at%20night%2C%20safe%20transit&width=400&height=250&seq=late-night&orientation=landscape',
      slugOverride: 'world-cup-2026-food-and-dining-guide-eating-well-on-any-budget',
      fullContent: {
        introduction: 'Post-match hunger meets closing hours. Use these tactics to eat well and get home safely without paying surge pricing.',
        sections: [
          { title: 'Pre-Game Mapping', content: 'Identify late-night food corridors near major stations. Save a short list with addresses and hours.' },
          { title: 'Transit Windows', content: 'Know last train times. Leave the stadium early if necessary to catch reliable service.' },
          { title: 'Group Flow', content: 'Walk together, stick to lit routes, and use main avenues. Avoid isolated shortcuts.' },
          { title: 'Backup Options', content: 'If transit ends, move to rideshare offsets near police-patrolled areas or taxi stands.' },
          { title: 'Budget Tips', content: 'Street food and quick-service spots beat sit-down restaurants after late games.' }
        ]
      }
    },
    {
      id: 10,
      title: 'World Cup 2026 Connectivity Guide: Phone Plans, SIM Cards & WiFi',
      slugOverride: 'world-cup-2026-connectivity-guide-phone-plans-sim-cards-wifi',
      category: 'booking',
      readTime: '7 min',
      difficulty: 'Intermediate',
      savings: '$350+',
      author: 'Maria Rodriguez',
      authorImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20airfare%20analyst%20headshot%2C%20pricing%20expert%2C%20travel%20economics&width=100&height=100&seq=author-maria2&orientation=squarish',
      description: 'Book flights inside the best pricing windows and use alerts to catch dips for tournament travel.',
      tips: [
        'Set multi-platform alerts 6–9 months ahead',
        'Target Tuesday/Wednesday fare changes',
        'Compare nearby airports for cheaper routes'
      ],
      image: 'https://readdy.ai/api/search-image?query=airfare%20deal%20search%2C%20price%20alerts%20on%20phone%2C%20flight%20booking%20calendar&width=400&height=250&seq=airfare-window&orientation=landscape',
      fullContent: {
        introduction: 'Airfare drops follow patterns. This guide shows the timing, alerts, and airport arbitrage to fly cheaper to multiple host cities.',
        sections: [
          { title: 'Alert Setup', content: 'Use multiple platforms (Google Flights, Hopper, Skyscanner). Track trends and set flexible date ranges.' },
          { title: 'Window Timing', content: 'For long-haul, 6–9 months is ideal; domestic 2–4 months. Watch midweek fare adjustments.' },
          { title: 'Airport Arbitrage', content: 'Check secondary airports and nearby hubs. Factor ground transfers vs airfare savings.' },
          { title: 'Booking Rules', content: 'Avoid non-refundable basic fares unless the savings are substantial; protect with cards offering insurance.' },
          { title: 'Change Strategy', content: 'Use refundable or flexible tickets where possible and reprice when dips occur.' }
        ]
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tips', icon: 'ri-list-check' },
    { id: 'accommodation', name: 'Accommodation', icon: 'ri-hotel-line' },
    { id: 'transportation', name: 'Flights & Transport', icon: 'ri-flight-takeoff-line' },
    { id: 'planning', name: 'Planning', icon: 'ri-calendar-line' },
    { id: 'booking', name: 'Booking', icon: 'ri-bookmark-line' }
  ];

  const filteredTips = travelTips.filter(tip => {
    const categoryMatch = selectedCategory === 'all' || tip.category === selectedCategory;
    const searchMatch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const slugifyTip = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const faqData = [
    {
      id: 1,
      question: "When should I book flights for World Cup 2026?",
      answer: "Book international flights 4-6 months before your travel dates (January-March 2026 for June/July matches). Prices typically spike 8-12 weeks before departure. For best deals, use flexible date searches, consider nearby airports (e.g., Newark instead of JFK), and book Tuesday-Thursday for lower fares. Budget airlines often release sales 3-4 months out. Multi-city travelers should book open-jaw tickets (fly into one city, out of another) to save time and money.",
      category: "Flight Planning",
      popularity: 10,
      readingTime: 3
    },
    {
      id: 2,
      question: "How much should I budget for a World Cup 2026 trip?",
      answer: "Budget varies by travel style:\n\n**Budget:** $2,500-4,000 (hostels, public transport, cheap eats, upper-level seats)\n**Mid-Range:** $5,000-8,000 (3-star hotels, mix of transit/Uber, good restaurants, decent seats)\n**Luxury:** $10,000-20,000+ (4-5 star hotels, private transport, fine dining, premium seats)\n\nMajor costs: Match tickets ($100-500+), accommodation ($150-400/night in host cities), flights ($600-1,500 roundtrip), food ($50-100/day), local transport ($20-50/day). Book early to save 30-40%.",
      category: "Budget Planning",
      popularity: 9,
      readingTime: 4
    },
    {
      id: 3,
      question: "Do I need a visa to attend World Cup 2026 in USA, Canada, and Mexico?",
      answer: "Depends on your nationality:\n\n**USA:** Most visitors need ESTA (travel authorization, $21) or B-2 tourist visa. Apply for ESTA at least 72 hours before travel.\n**Canada:** Many countries need eTA (electronic travel authorization, CAD $7). Some require visitor visa.\n**Mexico:** Most nationalities get 180-day tourist permit free on arrival. Some need visa.\n\nIf attending matches in multiple countries, you need valid entry documents for EACH country. Processing times vary: ESTA (instant-72 hours), eTA (minutes-days), visas (weeks-months). Start visa applications 3-6 months before travel.",
      category: "Visa & Documentation",
      popularity: 8,
      readingTime: 3
    },
    {
      id: 4,
      question: "What's the best way to get between World Cup host cities?",
      answer: "Depends on distance:\n\n**Short distances (under 300 miles):** Train/bus often beats flying when you factor in airport time. Examples: Philadelphia-New York (train), Dallas-Houston (drive).\n**Medium distances (300-800 miles):** Budget airlines (Spirit, Frontier, Southwest) or drive if you have 3+ people.\n**Long distances (800+ miles):** Fly. Book domestic flights 2-3 months ahead. Consider overnight buses to save hotel costs.\n**Cross-border:** Flying is fastest. Remember you'll need to clear customs/immigration.\n\nPopular routes: NYC → Philadelphia → Boston (train), LA → SF → Seattle (fly or drive), Mexico City → Guadalajara → Monterrey (fly).",
      category: "Transportation",
      popularity: 8,
      readingTime: 4
    },
    {
      id: 5,
      question: "Where should I stay: near the stadium or downtown?",
      answer: "**Downtown usually wins:**\n✅ More hotel options (better prices)\n✅ Restaurants, nightlife, attractions\n✅ Better public transport connections\n✅ Easier to explore on non-match days\n\n**Near stadium only if:** Stadium is downtown (Atlanta, Vancouver, Toronto, Philadelphia), you're attending multiple matches at same venue, or you find significantly cheaper accommodation.\n\nMost stadiums are 20-45 minutes from downtown via public transit or rideshare. Budget $20-40 for transport to/from stadium on match days.",
      category: "Accommodation",
      popularity: 7,
      readingTime: 3
    },
    {
      id: 6,
      question: "Is it safe to travel to USA, Canada, and Mexico for World Cup?",
      answer: "**Yes, all 16 host cities are safe for tourists** with normal precautions:\n\n**USA Cities:** Generally safe. Use common sense: avoid poorly lit areas at night, watch belongings in crowds, use licensed taxis/Ubers. Cities with excellent safety: Seattle, Vancouver, Boston. Cities requiring more awareness: certain areas of Philadelphia, Miami.\n\n**Canadian Cities:** Very safe. Toronto and Vancouver have low crime rates. Standard tourist precautions apply.\n\n**Mexican Cities:** Safe in tourist/stadium areas with extra awareness: Stay in established neighborhoods, use authorized taxis or Uber, avoid displaying expensive items, travel in groups at night. Mexico City, Guadalajara, and Monterrey have strong World Cup security.\n\nCheck travel.state.gov (USA) and government travel advisories before booking.",
      category: "Safety & Security",
      popularity: 7,
      readingTime: 4
    },
    {
      id: 7,
      question: "Can I use my cell phone in USA, Canada, and Mexico?",
      answer: "**Yes, with preparation:**\n\n**Best Options:**\n1. **eSIM (Recommended):** Digital SIM card, instant activation, 5-30GB data for $15-50. Providers: Airalo, Holafly, Nomad. Works in most modern phones.\n2. **International Roaming:** Contact your carrier. Often expensive ($10-15/day) but convenient.\n3. **Local SIM Cards:** Buy at airports or carrier stores. Cheaper for long stays (2+ weeks).\n\n**T-Mobile customers:** Free data/texting in Canada and Mexico (slow speeds). **AT&T/Verizon:** Expensive roaming unless you buy international plans.\n\n**Download offline maps** (Google Maps, Maps.me) before arrival. Stadium Wi-Fi often overloaded on match days.",
      category: "Connectivity",
      popularity: 6,
      readingTime: 3
    },
    {
      id: 8,
      question: "What should I pack for World Cup 2026?",
      answer: "**Essential items:**\n\n**Documents:** Passport (valid 6+ months), Visa/ESTA/eTA confirmation, Match tickets (digital + printed backup), Hotel confirmations, Travel insurance documents, Emergency contacts\n\n**Clothing (June-July weather):** Light, breathable clothes (most cities are HOT), Light jacket/sweater (evening, air-conditioned venues), Comfortable walking shoes (you'll walk 15,000+ steps/day), Sunglasses, hat, sunscreen (strong summer sun), Rain jacket (afternoon storms common)\n\n**Stadium Essentials:** Small clear bag (most stadiums require this), Empty water bottle (refill inside), Portable phone charger, Team colors/jersey\n\n**Don't bring:** Large bags, backpacks (not allowed), selfie sticks, outside food/drinks.",
      category: "Packing & Gear",
      popularity: 6,
      readingTime: 3
    },
    {
      id: 9,
      question: "How early should I arrive at the stadium?",
      answer: "**Arrive 90 minutes before kickoff minimum** for World Cup matches:\n\n**Why so early:** Security screening takes 15-30 minutes, lines longer than regular season games, want time to find seats, buy food, use restroom, soak in pre-match atmosphere\n\n**For high-profile matches (Final, Semifinals, USA/Mexico/Canada):** Arrive 2+ hours early. Security lines can exceed 45 minutes.\n\n**Gates typically open:** 2 hours before kickoff\n\n**Post-match transport:** Plan 30-60 minutes to exit stadium and catch transit/rideshare. Stay 10-15 minutes after final whistle if you want to avoid worst crowds.",
      category: "Matchday Experience",
      popularity: 5,
      readingTime: 2
    },
    {
      id: 10,
      question: "Should I buy travel insurance for World Cup 2026?",
      answer: "**YES, absolutely recommended:**\n\n**What it covers:** Trip cancellation (if you can't attend), Medical emergencies abroad, Lost/delayed luggage, Missed connections, Emergency evacuation\n\n**Cost:** 4-10% of total trip cost ($200-600 for most travelers)\n\n**When to buy:** Within 14-21 days of booking flights for maximum coverage\n\n**Recommended providers:** World Nomads (good for adventure travelers), Allianz (comprehensive, affordable), Travel Guard (excellent coverage), SafetyWing (budget-friendly for longer trips)\n\n**Don't skip this.** A medical emergency in the USA without insurance can cost $10,000-100,000+. Even a canceled flight can ruin a $5,000 trip. Travel insurance pays for itself if anything goes wrong.",
      category: "Insurance & Protection",
      popularity: 5,
      readingTime: 3
    }
  ];

  return (
    <>
      <SchemaOrg schema={[
        generateCollectionPageSchema({
          name: 'World Cup 2026 Travel Tips',
          description: 'Comprehensive World Cup 2026 travel tips across 16 host cities.',
          url: `${(import.meta.env.VITE_SITE_URL as string) || ''}/world-cup-2026-travel-tips`,
          image: '/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp',
          items: travelTips.map((t) => ({
            name: t.title,
            url: `/world-cup-2026-travel-tips/${t.slugOverride ?? slugifyTip(t.title)}`
          }))
        }),
        generateItemListSchema(
          travelTips.map((t) => ({
            name: t.title,
            url: `/world-cup-2026-travel-tips/${t.slugOverride ?? slugifyTip(t.title)}`
          }))
        )
      ]} />
      <style dangerouslySetInnerHTML={{ __html: breadcrumbStyles }} />
      <div className="min-h-screen bg-white dark:bg-navy-900">
      <Header />
      
      {/* Hero + Library Unified Background - Apple-Level Luxury Design */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          
          {/* Floating Glass Elements - Premium Apple Style */}
          <div className="absolute top-6 left-4 w-8 h-8 xs:top-8 xs:left-6 xs:w-12 xs:h-12 sm:top-12 sm:left-8 sm:w-20 sm:h-20 md:top-16 md:left-10 md:w-28 md:h-28 lg:top-20 lg:left-12 lg:w-40 lg:h-40 xl:w-64 xl:h-64 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-3xl rounded-full border border-emerald-500/10 dark:border-emerald-500/20 animate-float"></div>
          <div className="absolute bottom-6 right-4 w-12 h-12 xs:bottom-8 xs:right-6 xs:w-16 xs:h-16 sm:bottom-12 sm:right-8 sm:w-24 sm:h-24 md:bottom-16 md:right-10 md:w-32 md:h-32 lg:bottom-20 lg:right-12 lg:w-48 lg:h-48 xl:w-72 xl:h-96 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute top-1/3 left-1/2 w-8 h-8 xs:top-1/4 xs:left-1/2 xs:w-12 xs:h-12 sm:top-1/3 sm:left-1/2 sm:w-16 sm:h-16 md:top-1/2 md:left-1/2 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 bg-blue-500/5 dark:bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-500/10 dark:border-blue-500/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
          <div className="text-center">
            {/* Premium Breadcrumb - Minimal Luxury */}
            <div className="mb-8">
              <nav className="flex items-center justify-center space-x-2 text-sm">
                <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium">
                  Home
                </Link>
                <span className="text-slate-300 dark:text-slate-600">›</span>
                <span className="text-slate-900 dark:text-white font-medium">Travel Tips</span>
              </nav>
            </div>
            
            {/* Premium Title - Apple Typography */}
            <div className="mb-12">
              <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight leading-tight">
                Travel Smarter
                <span className="block text-emerald-600 dark:text-emerald-400 mt-1 md:mt-2">
                  Save More
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Expert strategies from seasoned tournament travelers. Master the art of World Cup travel with proven techniques to maximize your experience across all 16 host cities.
              </p>
            </div>

            {/* Apple-Level Premium Stats - Minimal Luxury Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto px-4">
              
              {/* Savings Card - Apple Emerald */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-2xl border border-white/30 dark:border-navy-800/30 hover:border-emerald-200/50 dark:hover:border-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-slate-900 dark:text-white mb-1 md:mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-700">$1,500+</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs sm:text-sm font-medium tracking-wide uppercase leading-tight">Average Savings</div>
                </div>
              </div>

              {/* Tips Card - Apple Purple */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-2xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-slate-900 dark:text-white mb-1 md:mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-700">47</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs sm:text-sm font-medium tracking-wide uppercase leading-tight">Expert Tips</div>
                </div>
              </div>

              {/* Cities Card - Apple Blue */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-2xl border border-white/30 dark:border-navy-800/30 hover:border-blue-200/50 dark:hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-slate-900 dark:text-white mb-1 md:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-700">16</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs sm:text-sm font-medium tracking-wide uppercase leading-tight">Cities Covered</div>
                </div>
              </div>

              {/* Strategies Card - Apple Amber */}
              <div className="group relative text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative p-4 md:p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-2xl border border-white/30 dark:border-navy-800/30 hover:border-amber-200/50 dark:hover:border-amber-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold text-slate-900 dark:text-white mb-1 md:mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-700">Proven</div>
                  <div className="text-slate-600 dark:text-slate-400 font-inter text-xs sm:text-sm font-medium tracking-wide uppercase leading-tight">Strategies</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      
        {/* Complete World Cup 2026 Travel Guide Library - Apple-Level Premium Design (Unified) */}
        <div className="relative z-10 pb-20">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 dark:text-white mb-6 tracking-tight">
                Complete World Cup 2026 Travel Guide Library
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-400 font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Browse all 47 expert tips organized by category. From budget strategies to safety advice everything you need to plan your perfect World Cup journey.
              </p>
            </div>
            <div className="grid lg:grid-cols-1 gap-8">
              <div className="lg:col-span-1">
                <div className="mb-16 md:mb-20">
                  <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center space-x-3 bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl border border-white/20 dark:border-navy-700/50 rounded-full px-8 py-4 mb-6">
                      <i className="ri-filter-3-line text-emerald-600 text-lg"></i>
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">Smart Filtering</span>
                    </div>
                    <h3 className="font-space font-bold text-3xl md:text-4xl text-navy-900 dark:text-white mb-6 tracking-tight">
                      Find What You Need
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                      Browse by category to get the tips that matter.
                    </p>
                  </div>
                  <div className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-2 border border-white/40 dark:border-navy-800/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                        <div className="lg:col-span-2 space-y-8">
                          <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500">
                              <i className="ri-bookmark-line text-white text-xl"></i>
                            </div>
                            <div>
                              <h4 className="font-space font-bold text-xl md:text-2xl text-navy-900 dark:text-white">Categories</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Choose your topic of interest</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {categories.map((category) => (
                              <div key={category.id} className="group relative">
                                <button
                                  onClick={() => setSelectedCategory(category.id)}
                                  className={`${
                                    selectedCategory === category.id
                                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30 scale-105'
                                      : 'bg-white/60 dark:bg-navy-700/60 text-slate-600 dark:text-slate-400 hover:bg-white/80 dark:hover:bg-navy-700/80 border border-slate-200/50 dark:border-navy-600/50 hover:border-emerald-300 dark:hover:border-emerald-600 hover:scale-105 hover:shadow-lg'
                                  } w-full px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 cursor-pointer relative overflow-hidden`}
                                >
                                  <div className="relative z-10">{category.name}</div>
                                  {selectedCategory === category.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl"></div>
                                  )}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-8">
                          <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all duration-500">
                              <i className="ri-search-line text-white text-xl"></i>
                            </div>
                            <div>
                              <h4 className="font-space font-bold text-xl md:text-2xl text-navy-900 dark:text-white">Results</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Matching your selection</p>
                            </div>
                          </div>
                          <div className="group relative bg-gradient-to-br from-emerald-50 to-gold-50 dark:from-emerald-900/20 dark:to-gold-900/20 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                            <div className="text-center">
                              <div className="text-4xl md:text-5xl font-space font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-500">{filteredTips.length}</div>
                              <div className="text-base text-slate-600 dark:text-slate-400 font-medium mb-2">of {travelTips.length} tips match</div>
                              <div className="text-sm text-slate-500 dark:text-slate-500">Updated in real-time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-8 md:gap-10">
                  {filteredTips.map((tip, index) => (
                    <div key={tip.id} className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-emerald-200/50 dark:hover:border-emerald-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                        <div className="relative lg:col-span-1">
                          <div className="relative overflow-hidden rounded-2xl">
                            <OptimizedImage
                              src={tip.id === 1 ? "/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp" : tip.id === 2 ? "/images/travel-tips/Best Time to Book World Cup 2026 Guide Illustration.webp" : tip.id === 3 ? "/images/travel-tips/World Cup 2026 Host City Guide Illustration.webp" : tip.id === 4 ? "/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp" : tip.id === 5 ? "/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp" : tip.id === 6 ? "/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp" : tip.id === 7 ? "/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp" : tip.id === 8 ? "/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp" : tip.id === 9 ? "/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp" : tip.id === 10 ? "/images/travel-tips/World Cup 2026 Connectivity Guide Illustration.webp" : tip.image}
                              alt={tip.id === 1 ? "Illustration showing World Cup 2026 travel budgeting elements, including subtle stadium shapes, travel icons, and financial symbols in a clean, modern design." : tip.id === 2 ? "Illustration featuring a calendar, flight and hotel icons, and subtle stadium shapes representing the best time to book World Cup 2026 tickets, flights, and hotels." : tip.id === 3 ? "Illustration featuring multiple city skylines, location pins, and subtle stadium elements representing the World Cup 2026 host city guide." : tip.id === 4 ? "Illustration of hotel options with budget and luxury symbols, location markers, and subtle stadium shapes representing the World Cup 2026 accommodation guide." : tip.id === 5 ? "Illustration featuring airplanes, global route lines, airline symbols, and subtle stadium shapes representing the World Cup 2026 flight booking guide." : tip.id === 6 ? "Illustration featuring calendars, trip routes, stadium icons, and travel elements representing 1-, 2-, and 3-week World Cup 2026 itineraries." : tip.id === 7 ? "Illustration featuring luggage, clothing for all weather, travel accessories, and subtle stadium shapes representing the World Cup 2026 ultimate packing checklist." : tip.id === 8 ? "Illustration featuring stadiums, match tickets, football icons, and calendar elements representing the World Cup 2026 match selection strategy guide." : tip.id === 9 ? "Illustration featuring diverse foods, dining icons, budget-to-luxury symbols, and subtle stadium shapes representing the World Cup 2026 food and dining guide." : tip.id === 10 ? "Illustration featuring smartphones, SIM cards, WiFi symbols, and subtle stadium shapes representing the World Cup 2026 connectivity guide." : tip.image}
                              imgClassName="w-full h-64 lg:h-80 object-cover object-top rounded-2xl group-hover:scale-110 transition-transform duration-1000"
                              width={1600}
                              height={900}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                          </div>
                          <div className="absolute top-6 right-6 bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-emerald-400/30 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500">
                            {tip.savings}
                          </div>
                        </div>
                        <div className="lg:col-span-2">
                          <div className="flex items-center space-x-4 mb-6">
                            <span className="text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-4 py-2 rounded-full capitalize font-medium">
                              {tip.category}
                            </span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center space-x-2">
                              <i className="ri-time-line"></i>
                              <span>{tip.readTime}</span>
                            </span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center space-x-2">
                              <i className="ri-signal-tower-line"></i>
                              <span>{tip.difficulty}</span>
                            </span>
                          </div>
                          <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 dark:group-hover:from-emerald-400 dark:group-hover:to-purple-400 transition-all duration-700">
                            {tip.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg mb-8 leading-relaxed font-light group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                            {tip.description}
                          </p>
                          <div className="space-y-4 mb-8">
                            {tip.tips.slice(0, 3).map((tipItem, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/20">
                                  <i className="ri-check-line text-white text-xs"></i>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{tipItem}</span>
                              </div>
                            ))}
                          </div>
                          <a
                            href={`/world-cup-2026-travel-tips/${tip.slugOverride ?? slugifyTip(tip.title)}`}
                            className="inline-flex items-center justify-center font-space font-semibold rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 hover:scale-105 px-8 py-4 text-lg group-hover:translate-x-2"
                          >
                            <span>Get This Strategy</span>
                            <i className="ri-arrow-right-line ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="relative z-10 p-6 sm:p-8 md:p-16 lg:p-20">
                  <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl mb-6 shadow-2xl shadow-emerald-500/30 backdrop-blur-xl border border-white/20">
                      <i className="ri-compass-3-line text-2xl sm:text-3xl md:text-4xl text-white"></i>
                    </div>
                    <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-navy-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                      Complete Your World Cup 2026 Planning
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light">
                      Ready to dive deeper? Explore our comprehensive guides for every aspect of your World Cup journey.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-emerald-500/20 hover:shadow-3xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/15 to-transparent rounded-full blur-3xl group-hover:from-emerald-400/25 group-hover:scale-110 transition-all duration-700"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-football-line text-2xl sm:text-3xl text-white"></i>
                          </div>
                          <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">Match Day Essentials</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                          Get stadium-specific guides covering transport, parking, matchday tips, and what makes each venue special—from MetLife's Final to Estadio Azteca's legendary atmosphere.
                        </p>
                        <a href="/world-cup-2026-stadiums" className="inline-flex items-center justify-center font-space font-semibold rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 hover:scale-105 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg group-hover:translate-x-2 w-full sm:w-auto">
                          <span>Discover All Stadiums</span>
                          <i className="ri-arrow-right-line ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                    </div>
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-purple-500/20 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-3xl group-hover:from-purple-400/25 group-hover:scale-110 transition-all duration-700"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-building-line text-2xl sm:text-3xl text-white"></i>
                          </div>
                          <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">Destination Guides</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                          Discover where to stay, what to do, local transportation, safety tips, and cultural experiences in every World Cup city from Vancouver to Mexico City.
                        </p>
                        <a href="/world-cup-2026-host-cities" className="inline-flex items-center justify-center font-space font-semibold rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white shadow-2xl shadow-purple-500/30 hover:shadow-3xl hover:shadow-purple-500/50 hover:scale-105 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg group-hover:translate-x-2 w-full sm:w-auto">
                          <span>Explore Host Cities</span>
                          <i className="ri-arrow-right-line ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 sm:mb-16 md:mb-20">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                      <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-xl sm:rounded-2xl md:rounded-3xl mb-4 sm:mb-6 shadow-2xl shadow-emerald-500/30">
                        <i className="ri-tools-line text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white"></i>
                      </div>
                      <h3 className="font-space font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy-900 dark:text-white mb-4 sm:mb-6 tracking-tight">Essential Planning Resources</h3>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-light">Everything you need to plan your perfect World Cup trip:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-blue-500/20 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-700 hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-transparent rounded-full blur-2xl group-hover:from-blue-400/25 transition-all duration-700"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-file-list-3-line text-white text-base sm:text-lg md:text-xl"></i>
                          </div>
                          <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">Complete Planning Checklist</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">Step-by-step preparation guide covering tickets, visas, accommodation, transport, and matchday essentials.</p>
                        <a href="/world-cup-2026-travel-tips/complete-planning-checklist" className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto">
                          <span>Get Checklist</span>
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                      <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-purple-500/20 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-2xl group-hover:from-purple-400/25 transition-all duration-700"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-passport-line text-white text-base sm:text-lg md:text-xl"></i>
                          </div>
                          <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">Visa Requirements Guide</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">Entry requirements, application processes, and processing times for USA, Canada, and Mexico.</p>
                        <a href="/world-cup-2026-travel-tips/visa-requirements-guide" className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto">
                          <span>Check Requirements</span>
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                      <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-green-500/20 hover:shadow-3xl hover:shadow-green-500/30 transition-all duration-700 hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/15 to-transparent rounded-full blur-2xl group-hover:from-green-400/25 transition-all duration-700"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-green-500/30 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-calculator-line text-white text-base sm:text-lg md:text-xl"></i>
                          </div>
                          <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">Budget Planning Calculator</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">Estimate your trip costs with our comprehensive budget breakdown by travel style.</p>
                        <a href="/world-cup-2026-travel-tips/budget-planning-tool" className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto">
                          <span>Calculate Your Budget</span>
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                      <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-orange-500/20 hover:shadow-3xl hover:shadow-orange-500/30 transition-all duration-700 hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-transparent rounded-full blur-2xl group-hover:from-orange-400/25 transition-all duration-700"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-6 shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-hotel-line text-white text-lg sm:text-xl"></i>
                          </div>
                          <h4 className="font-space font-bold text-lg sm:text-xl text-navy-900 dark:text-white tracking-tight">Accommodation Guide</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed font-light">Find the best hotels, neighborhoods, and booking strategies for all 16 host cities.</p>
                        <a href="/world-cup-2026-travel-tips/accommodation-finder" className="inline-flex items-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto justify-center">
                          <span>Find Hotels</span>
                          <i className="ri-arrow-right-line ml-1"></i>
                        </a>
                      </div>
                      <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transition-all duration-700 hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-400/15 to-transparent rounded-full blur-2xl group-hover:from-red-400/25 transition-all duration-700"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-red-500/30 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-subway-line text-white text-base sm:text-lg md:text-xl"></i>
                          </div>
                          <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">Transportation Guide</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">Navigate public transit, rental cars, flights, and trains between World Cup cities.</p>
                        <a href="/world-cup-2026-travel-tips/transportation-guide" className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto">
                          <span>Plan Transport</span>
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                      <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-indigo-500/20 hover:shadow-3xl hover:shadow-indigo-500/30 transition-all duration-700 hover:-translate-y-3">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-400/15 to-transparent rounded-full blur-2xl group-hover:from-indigo-400/25 transition-all duration-700"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-indigo-500/30 group-hover:scale-110 transition-all duration-500">
                            <i className="ri-shield-check-line text-white text-base sm:text-lg md:text-xl"></i>
                          </div>
                          <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">Safety & Security Tips</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">Stay safe across all three countries with city-specific advice and emergency contacts.</p>
                        <a href="/world-cup-2026-travel-tips/safety-security-tips" className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto">
                          <span>Read Safety Tips</span>
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="mt-16">
              <WorldClassFAQ 
                faqs={faqData}
                title="Frequently Asked Questions About World Cup 2026 Travel"
                subtitle="Everything you need to know about planning your perfect World Cup 2026 journey, from booking flights to staying safe."
                showCategories={true}
                showSearch={true}
                locationSpecific={true}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Complete World Cup 2026 Travel Guide Library - Apple-Level Premium Design */}
      <section className="hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          
          {/* Floating Glass Elements - Premium Apple Style */}
          <div className="absolute top-10 left-6 w-24 h-24 xs:top-12 xs:left-8 xs:w-32 xs:h-32 sm:top-16 sm:left-10 sm:w-48 sm:h-48 md:top-20 md:left-12 md:w-56 md:h-56 lg:top-24 lg:left-16 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-3xl rounded-full border border-emerald-500/10 dark:border-emerald-500/20 animate-float"></div>
          <div className="absolute bottom-10 right-6 w-32 h-32 xs:bottom-12 xs:right-8 xs:w-40 xs:h-40 sm:bottom-16 sm:right-10 sm:w-56 sm:h-56 md:bottom-20 md:right-12 md:w-64 md:h-64 lg:bottom-24 lg:right-16 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute top-1/3 left-1/2 w-20 h-20 xs:top-1/2 xs:left-1/2 xs:w-28 xs:h-28 sm:top-1/2 sm:left-1/2 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-blue-500/5 dark:bg-blue-500/10 backdrop-blur-3xl rounded-full border border-blue-500/10 dark:border-blue-500/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 dark:text-white mb-6 tracking-tight">
              Complete World Cup 2026 Travel Guide Library
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Browse all 47 expert tips organized by category. From budget strategies to safety advice everything you need to plan your perfect World Cup journey.
            </p>
          </div>
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="lg:col-span-1">
              {/* Premium Filtering Section - Apple-Level Glass Morphism */}
              <div className="mb-16 md:mb-20">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center space-x-3 bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl border border-white/20 dark:border-navy-700/50 rounded-full px-8 py-4 mb-6">
                    <i className="ri-filter-3-line text-emerald-600 text-lg"></i>
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">Smart Filtering</span>
                  </div>
                  <h3 className="font-space font-bold text-3xl md:text-4xl text-navy-900 dark:text-white mb-6 tracking-tight">
                    Find What You Need
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    Browse by category to get the tips that matter.
                  </p>
                </div>

                {/* Apple-Level Premium Glass Card */}
                <div className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-2 border border-white/40 dark:border-navy-800/40">
                  {/* Premium Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                      {/* Categories Section - Apple Premium */}
                      <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center space-x-4 mb-8">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500">
                            <i className="ri-bookmark-line text-white text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-space font-bold text-xl md:text-2xl text-navy-900 dark:text-white">Categories</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Choose your topic of interest</p>
                          </div>
                        </div>
                        
                        {/* Premium Category Buttons Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {categories.map((category) => (
                            <div key={category.id} className="group relative">
                              <button
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-500 cursor-pointer relative overflow-hidden ${
                                  selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30 scale-105'
                                    : 'bg-white/60 dark:bg-navy-700/60 text-slate-600 dark:text-slate-400 hover:bg-white/80 dark:hover:bg-navy-700/80 border border-slate-200/50 dark:border-navy-600/50 hover:border-emerald-300 dark:hover:border-emerald-600 hover:scale-105 hover:shadow-lg'
                                }`}
                              >
                                <div className="relative z-10">{category.name}</div>
                                {selectedCategory === category.id && (
                                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl"></div>
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Results Section - Apple Premium Stats */}
                      <div className="space-y-8">
                        <div className="flex items-center space-x-4 mb-8">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all duration-500">
                            <i className="ri-search-line text-white text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-space font-bold text-xl md:text-2xl text-navy-900 dark:text-white">Results</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Matching your selection</p>
                          </div>
                        </div>
                        
                        {/* Premium Stats Card */}
                        <div className="group relative bg-gradient-to-br from-emerald-50 to-gold-50 dark:from-emerald-900/20 dark:to-gold-900/20 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                          <div className="text-center">
                            <div className="text-4xl md:text-5xl font-space font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-500">{filteredTips.length}</div>
                            <div className="text-base text-slate-600 dark:text-slate-400 font-medium mb-2">of {travelTips.length} tips match</div>
                            <div className="text-sm text-slate-500 dark:text-slate-500">Updated in real-time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apple-Level Premium Tips Grid */}
              <div className="grid gap-8 md:gap-10">
                {filteredTips.map((tip, index) => (
                  <div key={tip.id} className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-emerald-200/50 dark:hover:border-emerald-500/20">
                    {/* Premium Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-purple-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                      {/* Premium Image Section */}
                      <div className="relative lg:col-span-1">
                        <div className="relative overflow-hidden rounded-2xl">
                          <OptimizedImage
                            src={tip.id === 1 ? "/images/travel-tips/World Cup 2026 Budget Guide Cover Illustration.webp" : tip.id === 2 ? "/images/travel-tips/Best Time to Book World Cup 2026 Guide Illustration.webp" : tip.id === 3 ? "/images/travel-tips/World Cup 2026 Host City Guide Illustration.webp" : tip.id === 4 ? "/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp" : tip.id === 5 ? "/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp" : tip.id === 6 ? "/images/travel-tips/World Cup 2026 Itinerary Planning Guide Illustration.webp" : tip.id === 7 ? "/images/travel-tips/World Cup 2026 Packing Guide Illustration.webp" : tip.id === 8 ? "/images/travel-tips/World Cup 2026 Match Selection Strategy Illustration.webp" : tip.id === 9 ? "/images/travel-tips/World Cup 2026 Food & Dining Guide Illustration.webp" : tip.id === 10 ? "/images/travel-tips/World Cup 2026 Connectivity Guide Illustration.webp" : tip.title === 'World Cup 2026 Flight Booking Guide: Routes, Airlines & Strategies' ? "/images/travel-tips/World Cup 2026 Flight Booking Guide Illustration.webp" : tip.title === 'World Cup 2026 Accommodation Guide: Where to Stay for Every Budget' ? "/images/travel-tips/World Cup 2026 Accommodation Guide Illustration.webp" : tip.image}
                            alt={tip.id === 1 ? "Illustration showing World Cup 2026 travel budgeting elements, including subtle stadium shapes, travel icons, and financial symbols in a clean, modern design." : tip.id === 2 ? "Illustration featuring a calendar, flight and hotel icons, and subtle stadium shapes representing the best time to book World Cup 2026 tickets, flights, and hotels." : tip.id === 3 ? "Illustration featuring multiple city skylines, location pins, and subtle stadium elements representing the World Cup 2026 host city guide." : tip.id === 4 ? "Illustration of hotel options with budget and luxury symbols, location markers, and subtle stadium shapes representing the World Cup 2026 accommodation guide." : tip.id === 5 ? "Illustration featuring airplanes, global route lines, airline symbols, and subtle stadium shapes representing the World Cup 2026 flight booking guide." : tip.id === 6 ? "Illustration featuring calendars, trip routes, stadium icons, and travel elements representing 1-, 2-, and 3-week World Cup 2026 itineraries." : tip.id === 7 ? "Illustration featuring luggage, clothing for all weather, travel accessories, and subtle stadium shapes representing the World Cup 2026 ultimate packing checklist." : tip.id === 8 ? "Illustration featuring stadiums, match tickets, football icons, and calendar elements representing the World Cup 2026 match selection strategy guide." : tip.id === 9 ? "Illustration featuring diverse foods, dining icons, budget-to-luxury symbols, and subtle stadium shapes representing the World Cup 2026 food and dining guide." : tip.id === 10 ? "Illustration featuring smartphones, SIM cards, WiFi symbols, and subtle stadium shapes representing the World Cup 2026 connectivity guide." : tip.title.includes("Accommodation") || tip.title.includes("Where to Stay") ? "Illustration of hotel options with budget and luxury symbols, location markers, and subtle stadium shapes representing the World Cup 2026 accommodation guide." : tip.title}
                            imgClassName="w-full h-64 lg:h-80 object-cover object-top rounded-2xl group-hover:scale-110 transition-transform duration-1000"
                            width={1600}
                            height={900}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                        </div>
                        
                        {/* Premium Savings Badge - Apple Style */}
                        <div className="absolute top-6 right-6 bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-emerald-400/30 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 group-hover:scale-105 transition-all duration-500">
                          {tip.savings}
                        </div>
                      </div>
                      
                      {/* Premium Content Section */}
                      <div className="lg:col-span-2">
                        {/* Premium Meta Tags */}
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-4 py-2 rounded-full capitalize font-medium">
                            {tip.category}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center space-x-2">
                            <i className="ri-time-line"></i>
                            <span>{tip.readTime}</span>
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center space-x-2">
                            <i className="ri-signal-tower-line"></i>
                            <span>{tip.difficulty}</span>
                          </span>
                        </div>
                        
                        {/* Premium Title - Apple Typography */}
                        <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 dark:group-hover:from-emerald-400 dark:group-hover:to-purple-400 transition-all duration-700">
                          {tip.title}
                        </h3>
                        
                        {/* Premium Description */}
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-base md:text-lg mb-8 leading-relaxed font-light group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-700">
                          {tip.description}
                        </p>
                        
                        {/* Premium Tips Preview */}
                        <div className="space-y-4 mb-8">
                          {tip.tips.slice(0, 3).map((tipItem, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/20">
                                <i className="ri-check-line text-white text-xs"></i>
                              </div>
                              <span className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{tipItem}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Premium CTA Button - Apple Style */}
                        <a
                          href={`/world-cup-2026-travel-tips/${tip.slugOverride ?? slugifyTip(tip.title)}`}
                          className="inline-flex items-center justify-center font-space font-semibold rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 hover:scale-105 px-8 py-4 text-lg group-hover:translate-x-2"
                        >
                          <span>Get This Strategy</span>
                          <i className="ri-arrow-right-line ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* Complete Your World Cup 2026 Planning Section - Apple-Level Luxury Masterpiece */}
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 border border-slate-200/30 dark:border-navy-700/30 shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10">
              {/* Ultra-Premium Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/10 via-transparent to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Floating Glass Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 rotate-12"></div>
              <div className="absolute bottom-12 left-12 w-24 h-24 bg-emerald-500/10 dark:bg-emerald-500/20 backdrop-blur-xl rounded-2xl border border-emerald-500/20 dark:border-emerald-500/30 -rotate-12"></div>
              <div className="absolute top-1/3 left-8 w-16 h-16 bg-purple-500/10 dark:bg-purple-500/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 dark:border-purple-500/30 rotate-45"></div>
              
              <div className="relative z-10 p-6 sm:p-8 md:p-16 lg:p-20">
                {/* Apple-Level Premium Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl mb-6 shadow-2xl shadow-emerald-500/30 backdrop-blur-xl border border-white/20">
                    <i className="ri-compass-3-line text-2xl sm:text-3xl md:text-4xl text-white"></i>
                  </div>
                  <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy-900 dark:text-white mb-6 bg-gradient-to-r from-navy-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
                    Complete Your World Cup 2026 Planning
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light">
                    Ready to dive deeper? Explore our comprehensive guides for every aspect of your World Cup journey.
                  </p>
                </div>

                {/* Apple-Level Luxury Feature Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                  {/* Match Day Essentials - Apple-Level Luxury Card */}
                  <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-emerald-500/20 hover:shadow-3xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3">
                    {/* Premium Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/15 to-transparent rounded-full blur-3xl group-hover:from-emerald-400/25 group-hover:scale-110 transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                      {/* Premium Icon with Animation */}
                      <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-football-line text-2xl sm:text-3xl text-white"></i>
                        </div>
                        <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">
                          Match Day Essentials
                        </h3>
                      </div>
                      
                      {/* Premium Description */}
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                        Get stadium-specific guides covering transport, parking, matchday tips, and what makes each venue special—from MetLife's Final to Estadio Azteca's legendary atmosphere.
                      </p>
                      
                      {/* Luxury CTA Button */}
                      <a 
                        href="/world-cup-2026-stadiums" 
                        className="inline-flex items-center justify-center font-space font-semibold rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 hover:scale-105 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg group-hover:translate-x-2 w-full sm:w-auto"
                      >
                        <span>Discover All Stadiums</span>
                        <i className="ri-arrow-right-line ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>
                  </div>

                  {/* Destination Guides - Apple-Level Luxury Card */}
                  <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-purple-500/20 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-3">
                    {/* Premium Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-3xl group-hover:from-purple-400/25 group-hover:scale-110 transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                      {/* Premium Icon with Animation */}
                      <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-building-line text-2xl sm:text-3xl text-white"></i>
                        </div>
                        <h3 className="font-space font-bold text-2xl sm:text-3xl text-navy-900 dark:text-white tracking-tight">
                          Destination Guides
                        </h3>
                      </div>
                      
                      {/* Premium Description */}
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
                        Discover where to stay, what to do, local transportation, safety tips, and cultural experiences in every World Cup city from Vancouver to Mexico City.
                      </p>
                      
                      {/* Luxury CTA Button */}
                      <a 
                        href="/world-cup-2026-host-cities" 
                        className="inline-flex items-center justify-center font-space font-semibold rounded-xl sm:rounded-2xl transition-all duration-500 cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white shadow-2xl shadow-purple-500/30 hover:shadow-3xl hover:shadow-purple-500/50 hover:scale-105 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg group-hover:translate-x-2 w-full sm:w-auto"
                      >
                        <span>Explore Host Cities</span>
                        <i className="ri-arrow-right-line ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>
                  </div>
                </div>



                {/* Premium Luxury Toolkit - Icon Grid */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                  <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-xl sm:rounded-2xl md:rounded-3xl mb-4 sm:mb-6 shadow-2xl shadow-emerald-500/30">
                      <i className="ri-tools-line text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white"></i>
                    </div>
                    <h3 className="font-space font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
                      Essential Planning Resources
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-light">
                      Everything you need to plan your perfect World Cup trip:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {/* Planning Checklist - Premium Tool */}
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-blue-500/20 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-transparent rounded-full blur-2xl group-hover:from-blue-400/25 transition-all duration-700"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-file-list-3-line text-white text-base sm:text-lg md:text-xl"></i>
                        </div>
                        <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">
                          Complete Planning Checklist
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">
                        Step-by-step preparation guide covering tickets, visas, accommodation, transport, and matchday essentials.
                      </p>
                      <a 
                        href="/world-cup-2026-travel-tips/complete-planning-checklist" 
                        className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto"
                      >
                        <span>Get Checklist</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>

                    {/* Visa Requirements - Premium Tool */}
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-purple-500/20 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-2xl group-hover:from-purple-400/25 transition-all duration-700"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-passport-line text-white text-base sm:text-lg md:text-xl"></i>
                        </div>
                        <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">
                          Visa Requirements Guide
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">
                        Entry requirements, application processes, and processing times for USA, Canada, and Mexico.
                      </p>
                      <a 
                        href="/world-cup-2026-travel-tips/visa-requirements-guide" 
                        className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto"
                      >
                        <span>Check Requirements</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>

                    {/* Budget Planning - Premium Tool */}
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-green-500/20 hover:shadow-3xl hover:shadow-green-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/15 to-transparent rounded-full blur-2xl group-hover:from-green-400/25 transition-all duration-700"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-green-500/30 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-calculator-line text-white text-base sm:text-lg md:text-xl"></i>
                        </div>
                        <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">
                          Budget Planning Calculator
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">
                        Estimate your trip costs with our comprehensive budget breakdown by travel style.
                      </p>
                      <a 
                        href="/world-cup-2026-travel-tips/budget-planning-tool" 
                        className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto"
                      >
                        <span>Calculate Your Budget</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>

                    {/* Accommodation Finder - Premium Tool */}
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-orange-500/20 hover:shadow-3xl hover:shadow-orange-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-transparent rounded-full blur-2xl group-hover:from-orange-400/25 transition-all duration-700"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-6 shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-hotel-line text-white text-lg sm:text-xl"></i>
                        </div>
                        <h4 className="font-space font-bold text-lg sm:text-xl text-navy-900 dark:text-white tracking-tight">
                          Accommodation Guide
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed font-light">
                        Find the best hotels, neighborhoods, and booking strategies for all 16 host cities.
                      </p>
                      <a 
                        href="/world-cup-2026-travel-tips/accommodation-finder" 
                        className="inline-flex items-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base w-full sm:w-auto justify-center"
                      >
                        <span>Find Hotels</span>
                        <i className="ri-arrow-right-line ml-1"></i>
                      </a>
                    </div>

                    {/* Transportation Guide - Premium Tool */}
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-400/15 to-transparent rounded-full blur-2xl group-hover:from-red-400/25 transition-all duration-700"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-red-500/30 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-subway-line text-white text-base sm:text-lg md:text-xl"></i>
                        </div>
                        <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">
                          Transportation Guide
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">
                        Navigate public transit, rental cars, flights, and trains between World Cup cities.
                      </p>
                      <a 
                        href="/world-cup-2026-travel-tips/transportation-guide" 
                        className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto"
                      >
                        <span>Plan Transport</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>

                    {/* Safety & Security - Premium Tool */}
                    <div className="group relative bg-white/90 dark:bg-navy-800/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/40 dark:border-navy-700/40 shadow-2xl shadow-indigo-500/20 hover:shadow-3xl hover:shadow-indigo-500/30 transition-all duration-700 hover:-translate-y-3">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-400/15 to-transparent rounded-full blur-2xl group-hover:from-indigo-400/25 transition-all duration-700"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 md:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 md:mr-6 shadow-2xl shadow-indigo-500/30 group-hover:scale-110 transition-all duration-500">
                          <i className="ri-shield-check-line text-white text-base sm:text-lg md:text-xl"></i>
                        </div>
                        <h4 className="font-space font-bold text-base sm:text-lg md:text-xl text-navy-900 dark:text-white tracking-tight">
                          Safety & Security Tips
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light">
                        Stay safe across all three countries with city-specific advice and emergency contacts.
                      </p>
                      <a 
                        href="/world-cup-2026-travel-tips/safety-security-tips" 
                        className="inline-flex items-center justify-center font-space font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-all duration-500 group-hover:translate-x-2 text-sm md:text-base w-full sm:w-auto"
                      >
                        <span>Read Safety Tips</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* World-Class FAQ Section */}
          <div className="mt-16">
            <WorldClassFAQ 
              faqs={faqData}
              title="Frequently Asked Questions About World Cup 2026 Travel"
              subtitle="Everything you need to know about planning your perfect World Cup 2026 journey, from booking flights to staying safe."
              showCategories={true}
              showSearch={true}
              locationSpecific={true}
            />
          </div>
        </div>
      </section>

      {/* Tip Modal removed: Read Complete Guide opens dedicated pages */}

      <Footer />
    </div>
    </>
  );
}
