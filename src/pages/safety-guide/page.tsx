
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Button } from '../../components/base/Button';

// Modified safetyCategories definition
const safetyCategories = [
  'All Safety Topics',
  'Personal Safety',
  'Health & Medical',
  'Travel Security',
  'Emergency Planning',
  'Stadium & Crowd Safety',
  'Digital Security'
];

// Original data definitions
export const safetyGuides = [

  {
    id: 7,
    title: 'World Cup 2026 Safety Guide: Everything Fans Need to Know',
    excerpt: 'Master guide covering stadium security, travel safety, scam prevention, emergency protocols, and health precautions for the ultimate safe World Cup 2026 experience.',
    category: 'Complete Fan Safety & Security ',
    author: 'Maria Gonzalez',
    readTime: '13 min read',
    featured: false,
    priority: 'Medium',
    image: '/images/safety-guide/article mode/A_realistic_high-detail_photo_representing_overall_fan_safety_for_World_Cup_2026.webp',
    href: '/safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know'
  },
  {
    id: 8,
    title: 'World Cup 2026 Travel Insurance: Complete Protection Guide',
    excerpt: 'Essential coverage for trip cancellations, medical emergencies, lost tickets, flight delays, and theft protection—choose the right travel insurance for World Cup 2026.',
    category: 'Travel Insurance & Financial Protection ',
    author: 'David Thompson',
    readTime: '10 min read',
    image: '/images/safety-guide/A_realistic_high-detail_photo_of_travel_insurance_essentials_for_World_Cup_2026.webp',
    featured: false,
    priority: 'Medium'
  }
];

const guideArticles = [
  {
    title: 'World Cup 2026 Scams: How to Avoid Ticket & Travel Fraud',
    excerpt: 'Protect yourself from fake tickets, phishing scams, and fraudulent travel packages targeting World Cup 2026 fans across USA, Canada, and Mexico.',
    category: 'Stadium Security & Fan Safety',
    author: 'Alex Rivera',
    readTime: '9 min read',
    priority: 'High' as const,
    image:
      '/images/safety-guide/A_realistic_photo-style_image_showing_a_worried_football_fan_reviewing_suspiciou.webp',
    slug: 'world-cup-2026-scams-how-to-avoid-ticket-travel-fraud'
  },
  {
    title: 'Stadium Safety at World Cup 2026: Security Rules & What to Expect',
    excerpt: 'Complete guide to stadium security screening, prohibited items, bag policies, and safety procedures at all 16 World Cup 2026 venues across North America.',
    category: 'Stadium Safety & Security Protocols',
    author: 'Priya Shah',
    readTime: '8 min read',
    priority: 'Medium' as const,
    image:
      '/images/safety-guide/A_realistic_high-detail_photo_of_a_modern_football_stadium_entrance_during_World_cup_2026.webp',
    slug: 'stadium-safety-at-world-cup-2026-security-rules-what-to-expect'
  },
  {
    title: 'Health & Medical Preparedness',
    excerpt: 'Essential vaccinations, travel insurance requirements, prescription medications, and medical facility locations for World Cup 2026 travelers in USA, Canada, and Mexico.',
    category: 'Travel Health & Medical Safety',
    author: 'Dr. Lina Chen',
    readTime: '12 min read',
    priority: 'High' as const,
    image:
      '/images/safety-guide/A_realistic_high-detail_photo_showing_a_travel_medical_essentials_layout_for_World_cup_2026.webp',
    slug: ''
  },
  {
    title: 'Transportation Safety: Getting Around World Cup 2026 Host Cities',
    excerpt: 'Navigate public transit, ride-sharing, taxi services, and intercity travel safely across all 16 host cities with real-time safety tips and official transport options.',
    category: 'Safe Transportation & Travel Logistics ',
    author: 'Nora Patel',
    readTime: '7 min read',
    priority: 'Medium' as const,
    image:
      '/images/safety-guide/A_realistic_high-detail_photo_depicting_safe_transportation_in_a_World_Cup_2026.webp',
    slug: 'transportation-safety-getting-around-world-cup-2026-host-cities'
  },
  {
    title: 'World Cup 2026 Emergency Contacts & Resources Guide',
    excerpt: 'Complete directory of emergency numbers, embassy contacts, police stations, hospitals, and 24/7 crisis hotlines for every World Cup 2026 host city in USA, Canada, and Mexico.',
    category: 'Emergency Response & Crisis Management ',
    author: 'Maria Gonzalez',
    readTime: '11 min read',
    priority: 'Medium' as const,
    image:
      '/images/safety-guide/A_realistic_high-detail_photo_of_essential_emergency_resources_for_World_Cup_2026.webp',
    slug: 'world-cup-2026-emergency-contacts-resources-guide'
  },
  {
    title: 'Solo Travel Safety Guide: Attending World Cup 2026 Alone',
    excerpt: 'Essential safety strategies for solo travelers: secure accommodations, meeting fellow fans, navigating cities alone, and staying connected during World Cup 2026 matches.',
    category: 'Solo Travel & Personal Safety ',
    author: 'David Thompson',
    readTime: '10 min read',
    priority: 'Medium' as const,
    image:
      '/images/safety-guide/A_realistic_high-detail_photo_of_a_solo_traveler_at_a_World_Cup_2026_host_city.webp',
    slug: 'solo-travel-safety-guide-attending-world-cup-2026-alone'
  },
  {
    title: 'Family Safety Guide: Taking Kids to World Cup 2026',
    excerpt: 'Plan a safe family experience: child-friendly seating sections, stadium amenities, crowd management tips, ID wristbands, and keeping kids secure at World Cup 2026 venues.',
    category: 'Family Travel & Child Safety ',
    author: 'Omar Delgado',
    readTime: '6 min read',
    priority: 'Low' as const,
    image:
      '/images/safety-guide/A_realistic_high-detail_photo_of_a_family_with_children_entering_or_walking_near.webp',
    slug: 'family-safety-guide-taking-kids-to-world-cup-2026'
  }
];

const emergencyContacts = [
  { country: 'USA', emergency: '911', police: '911', medical: '911', fire: '911' },
  { country: 'Mexico', emergency: '911', police: '911', medical: '911', fire: '911' },
  { country: 'Canada', emergency: '911', police: '911', medical: '911', fire: '911' }
];

export default function SafetyGuidePage() {
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set page title and meta description
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stadiumport.com';
    setPageMeta({
      title: 'World Cup 2026 Safety Guide: Complete Protection for All 16 Host Cities',
      description: 'Essential safety tips, emergency contacts, health guidance, and city-specific precautions for all 16 World Cup host cities.',
      url: `${siteUrl}/safety-guide`
    });
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert safety guide for World Cup 2026 travel. Stadium security, emergency planning, health precautions, and travel safety across USA, Canada & Mexico. Professional security advice.');
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL || 'https://stadiumport.com'}/safety-guide`);
    }
  }, []);

  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const openGuideModal = (guide: any) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGuideModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
    document.body.style.overflow = 'unset';
  };

  const getDetailedContent = (guide: any) => {
    const detailedContent: {[key: number]: {sections: {title: string, content: string}[]}} = {
      1: {
        sections: [
          {
            title: "Pre-Travel Preparation",
            content: "Research your destination thoroughly, including local laws, customs, and potential risks. Register with your embassy and share your itinerary with trusted contacts."
          },
          {
            title: "Document Security",
            content: "Make multiple copies of important documents. Store them separately and consider digital backups in secure cloud storage."
          },
          {
            title: "Health Precautions",
            content: "Consult a travel medicine specialist 4-6 weeks before departure. Ensure vaccinations are up to date and pack a comprehensive medical kit."
          }
        ]
      },
      2: {
        sections: [
          {
            title: "Stadium Entry Procedures",
            content: "Arrive early to avoid crowds. Familiarize yourself with security checkpoints and prohibited items list before attending."
          },
          {
            title: "Emergency Evacuation",
            content: "Locate nearest exits upon arrival. Stay calm during emergencies and follow official instructions from security personnel."
          },
          {
            title: "Crowd Management",
            content: "Avoid overcrowded areas. Move with the crowd flow and never push against the direction of movement."
          }
        ]
      }
    };
    return detailedContent[guide.id as number] || { sections: [{ title: "Content", content: guide.excerpt }] };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Apple-Level Premium Safety Guide Hero - Matching Host Cities Style */}
      <main id="main-content" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden pb-20 md:pb-24 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          <div className="absolute top-8 left-4 w-16 h-16 xs:top-10 xs:left-6 xs:w-20 xs:h-20 sm:top-16 sm:left-8 sm:w-32 sm:h-32 md:top-20 md:left-10 md:w-40 md:h-40 lg:top-24 lg:left-12 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-red-500/5 dark:bg-red-500/10 backdrop-blur-3xl rounded-full border border-red-500/10 dark:border-red-500/20 animate-float"></div>
          <div className="absolute top-1/2 right-4 w-20 h-20 xs:right-6 xs:w-24 xs:h-24 sm:right-8 sm:w-40 sm:h-40 md:right-10 md:w-48 md:h-48 lg:right-12 lg:w-56 lg:h-56 xl:w-96 xl:h-96 bg-orange-500/5 dark:bg-orange-500/10 backdrop-blur-3xl rounded-full border border-orange-500/10 dark:border-orange-500/20 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/2 w-16 h-16 xs:left-1/2 xs:w-20 xs:h-20 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-amber-500/5 dark:bg-amber-500/10 backdrop-blur-3xl rounded-full border border-amber-500/10 dark:border-amber-500/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
          {/* Additional floating elements for emergency section */}
          <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-red-100/20 to-orange-100/20 dark:from-red-500/10 dark:to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#01b47d]/10 dark:to-[#01b47d]/10 rounded-full blur-3xl"></div>
          {/* Additional floating elements for dedicated article guides section */}
          <div className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-br from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#01b47d]/10 dark:to-[#01b47d]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 left-10 w-96 h-96 bg-gradient-to-br from-[#01b47d]/10 to-[#01b47d]/10 dark:from-[#01b47d]/10 dark:to-[#01b47d]/10 rounded-full blur-3xl"></div>
          {/* Additional floating elements for explore more safety guides section */}
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-slate-100/30 to-white/30 dark:from-slate-800/20 dark:to-navy-800/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-50/30 to-slate-100/30 dark:from-navy-900/20 dark:to-slate-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <nav className="flex items-center justify-center space-x-2 text-sm">
                  <a className="text-slate-500 dark:text-slate-400 hover:text-[#008f63] dark:hover:text-[#008f63] transition-colors duration-300 font-medium" href="/">Home</a>
                  <span className="text-slate-300 dark:text-slate-600">›</span>
                  <span className="text-slate-900 dark:text-white font-medium">Safety Guide</span>
                </nav>
              </div>
              <div className="mb-12">
                <h1 className="font-space font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                  World Cup 2026 Safety Guide
                </h1>
                <div className="text-center mb-6">
                  <span className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                    World Cup 2026 Safety Guide: Complete Protection (16 Cities)
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
                <p className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Your essential safety companion for World Cup 2026 across USA, Canada, and Mexico. Expert advice on stadium security, travel safety, scam prevention, emergency contacts, and health protocols—ensuring a worry-free tournament experience at all 16 host cities.
                </p>
              </div>

              {/* Apple-Level Premium Safety Stats - Matching Host Cities */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto auto-rows-fr">
                <div className="group relative text-center h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-red-200/50 dark:hover:border-red-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-500/5 h-full">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-red-600 group-hover:to-orange-600 dark:group-hover:from-red-400 dark:group-hover:to-orange-400 transition-all duration-700">24/7</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Emergency Support</div>
                  </div>
                </div>
                <div className="group relative text-center h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-[#01b47d]/5 dark:from-green-900/20 dark:to-[#008f63]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-green-200/50 dark:hover:border-green-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-500/5 h-full">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-green-600 group-hover:to-[#01b47d] dark:group-hover:from-green-400 dark:group-hover:to-[#01b47d] transition-all duration-700">3</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Host Countries</div>
                  </div>
                </div>
                <div className="group relative text-center h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 to-[#01b47d]/5 dark:from-[#008f63]/20 dark:to-[#008f63]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5 h-full">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">9+</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Safety Tips</div>
                  </div>
                </div>
                <div className="group relative text-center h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 h-full">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">Safe</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Travel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apple-Level Premium Emergency Numbers Content - Integrated into unified background */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Emergency Numbers
              <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mt-2">
                Across All Host Countries
              </span>
            </h2>
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Save these critical emergency contacts before traveling to World Cup 2026. Instant access to police, medical, and fire services 24/7 across USA, Mexico, and Canada.
            </p>
          </div>

          {/* Apple-Level Premium Emergency Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative p-8 md:p-12 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-red-200/50 dark:hover:border-red-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-500/5">
                
                {/* Emergency Number Display */}
                <div className="text-center mb-8">
                  <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 opacity-20 blur-2xl"></div>
                    <div className="absolute inset-0 rounded-full ring-2 ring-amber-400/60 dark:ring-amber-500/40"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <span className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 font-space">
                        911
                      </span>
                    </div>
                  </div>
                  <div className="font-inter font-semibold text-slate-700 dark:text-slate-300 text-lg md:text-xl mb-2">
                    Police • Ambulance • Fire
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">24/7 Immediate Response</span>
                  </div>
                </div>

                {/* Safety Insight */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-navy-700/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b47d] to-[#01b47d] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        Pro Safety Tip
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Download offline maps and save emergency numbers with country codes (+1 for USA/Canada, +52 for Mexico). Share your live location with trusted contacts, carry portable chargers, and identify emergency exits at every venue.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Apple-Level Premium Dedicated Article Guides - Integrated into unified background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48">
          <div className="text-center mb-20">
            <h2 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              In-Depth Safety Guides For World Cup 2026 Travelers
            </h2>
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive articles covering every aspect of fan safety—from stadium security protocols to emergency planning across all 16 host cities in USA, Canada, and Mexico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 auto-rows-fr">
            {/* Unified Card Design for All Guides */}
            {[...guideArticles, ...safetyGuides.slice(0,2)].map((item, index) => {
              const isAdditionalGuide = index >= guideArticles.length;
              const title = item.title;
              const excerpt = item.excerpt;
              const category = item.category;
              const author = item.author;
              const readTime = item.readTime;
              const priority = (item as any).priority || 'Medium';
              const image = (item as any).image;
              const slug = (item as any).slug || slugify(title);
              const href = isAdditionalGuide ? `/safety-guide/${slug}` : `/guides/${slug}`;
              const key = isAdditionalGuide ? `dedicated-${(item as any).id || index}` : slug;
              
              return (
                <div key={key} className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-navy-900/20 dark:to-navy-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/90 dark:bg-navy-900/90 backdrop-blur-3xl rounded-3xl border border-slate-200/50 dark:border-navy-700/50 hover:border-slate-300/70 dark:hover:border-navy-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-navy-500/10 overflow-hidden h-full flex flex-col">
                    
                    {/* Premium Image Container - Consistent Height */}
                    <div className="relative h-56 md:h-60 lg:h-64 overflow-hidden">
                      <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                          priority === 'High' ? 'bg-red-500/90 text-white' :
                          priority === 'Medium' ? 'bg-orange-500/90 text-white' :
                          'bg-green-500/90 text-white'
                        }`}>
                          {priority}
                        </span>
                      </div>
                    </div>

                    {/* Premium Content - Consistent Layout */}
                    <div className="p-6 md:p-7 lg:p-8 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center text-slate-600 dark:text-slate-400 text-sm font-semibold">
                          <i className="ri-shield-check-line mr-2"></i>
                          {category}
                        </span>
                        <span className="text-slate-500 dark:text-slate-500 text-sm font-medium">{readTime}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 leading-tight line-clamp-2">
                        {title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 text-base mb-6 line-clamp-3 leading-relaxed min-h-[72px]">
                        {excerpt}
                      </p>
                      
                      <div className="flex items-center justify-end mt-auto">
                        <a
                          href={href}
                          className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-slate-900 disabled:dark:hover:bg-white px-4 py-2.5 text-sm"
                        >
                          Read Guide
                          <i className="ri-arrow-right-line ml-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Apple-Level Premium Explore More Safety Guides - Integrated into unified background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48">
          <div className="text-center mb-20">
            <h2 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Explore More World Cup 2026 Guides
            </h2>
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Plan your complete World Cup 2026 experience with expert resources covering stadiums, budgets, travel logistics, and insider tips for all host cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Personal Safety Guide */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-navy-900/20 dark:to-navy-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/90 dark:bg-navy-900/90 backdrop-blur-3xl rounded-3xl border border-slate-200/50 dark:border-navy-700/50 hover:border-slate-300/70 dark:hover:border-navy-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-navy-500/10 overflow-hidden h-full">
                
                {/* Premium Icon Container - Fixed Height */}
                <div className="p-8 md:p-10 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="relative mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-800 dark:to-navy-700 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-700"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-400 dark:to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                        <i className="ri-route-line text-3xl text-white"></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      Travel Planning Guides
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4 min-h-[96px]">
                      Flights, visas, transportation between cities, accommodation options, and itinerary planning across USA, Canada, and Mexico.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/world-cup-2026-travel-tips"
                      className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-slate-900 disabled:dark:hover:bg-white px-6 py-3 text-sm"
                    >
                      Explore Guide
                      <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Security Guide */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-navy-900/20 dark:to-navy-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/90 dark:bg-navy-900/90 backdrop-blur-3xl rounded-3xl border border-slate-200/50 dark:border-navy-700/50 hover:border-slate-300/70 dark:hover:border-navy-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-navy-500/10 overflow-hidden h-full">
                
                {/* Premium Icon Container - Fixed Height */}
                <div className="p-8 md:p-10 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="relative mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-800 dark:to-navy-700 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-700"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-400 dark:to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                        <i className="ri-football-line text-3xl text-white"></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      Stadium Guides
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4 min-h-[96px]">
                      Complete profiles of all 16 World Cup 2026 venues seating charts, transportation, amenities, and matchday tips.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/world-cup-2026-stadiums"
                      className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-slate-900 disabled:dark:hover:bg-white px-6 py-3 text-sm"
                    >
                      Explore Guide
                      <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Health & Medical Guide */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-navy-900/20 dark:to-navy-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/90 dark:bg-navy-900/90 backdrop-blur-3xl rounded-3xl border border-slate-200/50 dark:border-navy-700/50 hover:border-slate-300/70 dark:hover:border-navy-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-navy-500/10 overflow-hidden h-full">
                
                {/* Premium Icon Container - Fixed Height */}
                <div className="p-8 md:p-10 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="relative mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-800 dark:to-navy-700 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-700"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-400 dark:to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                        <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      Budget & Money Guides
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4 min-h-[96px]">
                      Save thousands with smart booking strategies, affordable accommodations, free activities, and cost breakdowns for each host city.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/budget-guides"
                      className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-slate-900 disabled:dark:hover:bg-white px-6 py-3 text-sm"
                    >
                      Explore Guide
                      <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Guide Detail Modal */}
      {isModalOpen && selectedGuide && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={closeGuideModal}></div>
            
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-navy-800 shadow-xl rounded-2xl">
              <div className="relative">
                <img 
                  src={selectedGuide.image} 
                  alt={selectedGuide.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeGuideModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`${getPriorityColor(selectedGuide.priority)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {selectedGuide.priority} Priority
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-500 text-sm font-medium">{selectedGuide.category}</span>
                  <span className="text-slate-500 text-sm">{selectedGuide.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedGuide.title}
                </h2>
                
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {selectedGuide.author.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-navy-900 dark:text-white">{selectedGuide.author}</div>
                    <div className="text-sm text-slate-500">Safety Expert</div>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedGuide.excerpt}
                </p>
                
                <div className="space-y-6">
                  {getDetailedContent(selectedGuide).sections.map((section: any, index: number) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-start space-x-3">
                    <i className="ri-alarm-warning-line text-red-600 text-lg mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Important Reminder</h4>
                      <p className="text-red-700 dark:text-red-400 text-sm">
                        Always stay alert and trust your instincts. If something feels wrong, remove yourself from the situation immediately.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button variant="primary" onClick={closeGuideModal}>
                    <i className="ri-check-line mr-2"></i>
                    Got It
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
import { setPageMeta } from '../../components/seo/MetaUtils';
