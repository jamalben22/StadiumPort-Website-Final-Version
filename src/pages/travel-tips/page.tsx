
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

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
      title: 'Heat Safety Gear Checklist',
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
      title: 'City Pass & Local Transit Mastery',
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
      title: 'Late-Night Food & Transit Tactics',
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
      title: 'Airfare Deal Window Timing',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Expert%20travel%20planning%20workspace%20with%20maps%2C%20guides%2C%20and%20planning%20tools%20spread%20across%20desk%2C%20professional%20travel%20strategy%20setup%2C%20tournament%20planning%20materials%2C%20organized%20travel%20research%20environment&width=1920&height=800&seq=travel-tips-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-lightbulb-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Travel Tips</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Insider Advice
              <br />
              <span className="text-gold-400">That Saves You Money</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Learn from fans who've been there before. Practical tips to help you save on flights, 
              find better accommodation, skip the tourist traps, and make the most of your World Cup trip.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$1,500+</div>
              <div className="text-slate-300 font-inter text-sm">Avg. Savings</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">47</div>
              <div className="text-slate-300 font-inter text-sm">Expert Tips</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Cities Covered</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Proven</div>
              <div className="text-slate-300 font-inter text-sm">Strategies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tips */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Start Here: Our Best Money-Saving Tips
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              These strategies have helped thousands of fans save big on their World Cup trips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {travelTips.slice(0, 3).map((tip, index) => (
              <Card key={tip.id} hover className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save {tip.savings}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full capitalize">
                      {tip.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tip.readTime}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tip.difficulty}</span>
                  </div>
                  
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  
                  <a 
                    href={`/travel-tips/${tip.slugOverride ?? slugifyTip(tip.title)}`} 
                    className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-emerald-500 px-3 py-2 text-sm"
                  >
                    <i className="ri-arrow-right-line mr-2"></i>
                    Read Complete Guide
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tips with Sidebar */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white dark:from-navy-800 dark:to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="mb-8">
                <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-navy-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Search Tips
                      </label>
                      <div className="relative">
                        <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                        <input
                          type="text"
                          placeholder="Search tips..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-navy-700 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Category
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.slice(0, 4).map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                              selectedCategory === category.id
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                            }`}
                          >
                            <i className={`${category.icon} text-sm`}></i>
                            <span>{category.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Grid */}
              <div className="space-y-6">
                {filteredTips.map((tip, index) => (
                  <Card key={tip.id} hover className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={tip.image}
                          alt={tip.title}
                          className="w-full h-48 md:h-full object-cover object-top rounded-lg"
                        />
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {tip.savings}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full capitalize">
                            {tip.category}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{tip.readTime}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{tip.difficulty}</span>
                        </div>
                        
                        <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-3">
                          {tip.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 leading-relaxed">
                          {tip.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {tip.tips.slice(0, 2).map((tipItem, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <i className="ri-check-line text-emerald-500 mt-0.5 text-sm"></i>
                              <span className="text-slate-600 dark:text-slate-400 text-sm">{tipItem}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a
                          href={`/travel-tips/${tip.slugOverride ?? slugifyTip(tip.title)}`}
                          className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-emerald-500 px-3 py-2 text-sm"
                        >
                          <i className="ri-arrow-right-line mr-2"></i>
                          Read Complete Guide
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <Card className="p-6">
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                    Related Guides
                  </h3>
                  <div className="space-y-3">
                    <Link to="/travel-guides/article?id=1" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Complete New York World Cup 2026 Travel Guide
                    </Link>
                    <Link to="/travel-guides/article?id=2" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Los Angeles World Cup 2026: Complete Travel Guide
                    </Link>
                    <Link to="/travel-guides/article?id=3" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Miami World Cup 2026: Beach &amp; Football Paradise
                    </Link>
                    <Link to="/travel-guides/article?id=5" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Budget Travel Guide: World Cup 2026 on a Shoestring
                    </Link>
                    <Link to="/travel-guides/article?id=6" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                      Luxury World Cup 2026: Premium Experiences
                    </Link>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-space font-bold text-xl text-navy-900 dark:text-white mb-4">
                    Quick Links
                  </h3>
                  <nav className="space-y-2">
                    <Link to="/safety-guide" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Safety &amp; Security
                    </Link>
                    <Link to="/budget-guides" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Budget Planning
                    </Link>
                    <Link to="/transportation" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Transportation Guide
                    </Link>
                    <Link to="/accommodation" className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Accommodation Options
                    </Link>
                  </nav>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Tip Modal removed: Read Complete Guide opens dedicated pages */}

      <Footer />
    </div>
  );
}
