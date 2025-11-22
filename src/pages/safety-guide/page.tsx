
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
    excerpt: 'Safe practices for flights, trains, buses, taxis, and rideshares. Avoiding scams and ensuring secure transport.',
    category: 'Travel Security',
    author: 'Maria Gonzalez',
    readTime: '13 min read',
    featured: false,
    priority: 'Medium',
    href: '/safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know'
  },
  {
    id: 8,
    title: 'World Cup 2026 Travel Insurance: Complete Protection Guide',
    excerpt: 'Evaluate hotel security, room safety, and accommodation scams. Ensure your lodging meets safety standards.',
    category: 'Travel Security',
    author: 'David Thompson',
    readTime: '10 min read',
    image: 'https://readdy.ai/api/search-image?query=hotel%20room%20security%20with%20door%20locks%2C%20safe%20deposit%20box%2C%20security%20features%2C%20accommodation%20safety%20checklist%2C%20secure%20lodging%20environment&width=400&height=250&seq=safety8&orientation=landscape',
    featured: false,
    priority: 'Medium'
  }
];

const guideArticles = [
  {
    title: 'World Cup 2026 Scams: How to Avoid Ticket & Travel Fraud',
    excerpt: 'Navigate stadium crowds, entry checkpoints, and post-match dispersal with confidence.',
    category: 'Stadium & Crowd Safety',
    author: 'Alex Rivera',
    readTime: '9 min read',
    priority: 'High' as const,
    image:
      'https://readdy.ai/api/search-image?query=stadium%20crowd%20safety%2C%20entry%20checkpoints%2C%20safe%20movement%2C%20stewards%20guiding%20fans&width=400&height=250&seq=guides1&orientation=landscape',
    slug: 'world-cup-2026-scams-how-to-avoid-ticket-travel-fraud'
  },
  {
    title: 'Stadium Safety at World Cup 2026: Security Rules & What to Expect',
    excerpt: 'Build a quick-response plan: contacts, meeting points, and local emergency resources for hosts.',
    category: 'Emergency Planning',
    author: 'Priya Shah',
    readTime: '8 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=travel%20emergency%20plan%2C%20contact%20list%2C%20meeting%20points%2C%20preparedness&width=400&height=250&seq=guides2&orientation=landscape',
    slug: 'stadium-safety-at-world-cup-2026-security-rules-what-to-expect'
  },
  {
    title: 'Health & Medical Preparedness',
    excerpt: 'Vaccinations, travel insurance notes, and carrying essentials for quick medical support.',
    category: 'Health & Medical',
    author: 'Dr. Lina Chen',
    readTime: '12 min read',
    priority: 'High' as const,
    image:
      'https://readdy.ai/api/search-image?query=travel%20health%20kit%2C%20vaccination%2C%20first%20aid%2C%20medical%20preparedness&width=400&height=250&seq=guides3&orientation=landscape',
    slug: ''
  },
  {
    title: 'Transportation Safety: Getting Around World Cup 2026 Host Cities',
    excerpt: 'Protect accounts, payments, and identity on public Wi‑Fi and mobile networks.',
    category: 'Digital Security',
    author: 'Nora Patel',
    readTime: '7 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=digital%20security%20travel%2C%20vpn%2C%20account%20protection%2C%20privacy&width=400&height=250&seq=guides4&orientation=landscape',
    slug: 'transportation-safety-getting-around-world-cup-2026-host-cities'
  },
  {
    title: 'World Cup 2026 Emergency Contacts & Resources Guide',
    excerpt: 'Verify rides, choose licensed providers, and avoid common scams across three hosts.',
    category: 'Travel Security',
    author: 'Maria Gonzalez',
    readTime: '11 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=licensed%20taxi%2C%20verified%20rideshare%2C%20safe%20public%20transport&width=400&height=250&seq=guides5&orientation=landscape',
    slug: 'world-cup-2026-emergency-contacts-resources-guide'
  },
  {
    title: 'Solo Travel Safety Guide: Attending World Cup 2026 Alone',
    excerpt: 'Room security, hotel policies, and avoiding accommodation‑related scams.',
    category: 'Travel Security',
    author: 'David Thompson',
    readTime: '10 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=hotel%20room%20security%2C%20safe%20deposit%20box%2C%20secure%20lodging&width=400&height=250&seq=guides6&orientation=landscape',
    slug: 'solo-travel-safety-guide-attending-world-cup-2026-alone'
  },
  {
    title: 'Family Safety Guide: Taking Kids to World Cup 2026',
    excerpt: 'Common fan‑targeted scams and how to identify and avoid them quickly.',
    category: 'Travel Security',
    author: 'Omar Delgado',
    readTime: '6 min read',
    priority: 'Low' as const,
    image:
      'https://readdy.ai/api/search-image?query=travel%20scams%20awareness%2C%20money%20fraud%2C%20street%20scams%20guide&width=400&height=250&seq=guides7&orientation=landscape',
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
    document.title = 'World Cup 2026 Safety Guide: Complete Protection for All 16 Host Cities | StadiumPort';
    
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
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-sky-100/20 dark:from-blue-500/10 dark:to-sky-500/10 rounded-full blur-3xl"></div>
          {/* Additional floating elements for dedicated article guides section */}
          <div className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 left-10 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-sky-100/20 dark:from-blue-500/10 dark:to-sky-500/10 rounded-full blur-3xl"></div>
          {/* Additional floating elements for explore more safety guides section */}
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-slate-100/30 to-white/30 dark:from-slate-800/20 dark:to-navy-800/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-50/30 to-slate-100/30 dark:from-navy-900/20 dark:to-slate-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <nav className="flex items-center justify-center space-x-2 text-sm">
                  <a className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium" href="/">Home</a>
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
                  Heading to the World Cup? Get practical safety advice for all three host countries—from what to watch out for in crowds to emergency contacts you should save now. Travel prepared, not paranoid.
                </p>
              </div>

              {/* Apple-Level Premium Safety Stats - Matching Host Cities */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-red-200/50 dark:hover:border-red-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 dark:hover:shadow-red-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-red-600 group-hover:to-orange-600 dark:group-hover:from-red-400 dark:group-hover:to-orange-400 transition-all duration-700">24/7</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Emergency</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-green-200/50 dark:hover:border-green-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-green-600 group-hover:to-emerald-600 dark:group-hover:from-green-400 dark:group-hover:to-emerald-400 transition-all duration-700">3</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Countries</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-blue-200/50 dark:hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-blue-600 group-hover:to-sky-600 dark:group-hover:from-blue-400 dark:group-hover:to-sky-400 transition-all duration-700">100+</div>
                    <div className="text-slate-600 dark:text-slate-400 font-inter text-sm md:text-base font-medium tracking-wide uppercase">Expert Tips</div>
                  </div>
                </div>
                <div className="group relative text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:border-purple-200/50 dark:hover:border-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
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
                Across All Countries
              </span>
            </h2>
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Save these essential contacts before you travel. Available 24/7 across USA, Mexico, and Canada.
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
                    Police • Medical • Fire
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                </div>

                {/* Safety Insight */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-navy-700/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        Pro Safety Tip
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Save emergency numbers before travel. Keep battery backups, enable location sharing with trusted contacts, and memorize nearest exits upon arrival.
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
              Dedicated Article
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                Guides
              </span>
            </h2>
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore focused guides with deep‑dive advice for fans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                <div key={key} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-navy-900/20 dark:to-navy-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/90 dark:bg-navy-900/90 backdrop-blur-3xl rounded-3xl border border-slate-200/50 dark:border-navy-700/50 hover:border-slate-300/70 dark:hover:border-navy-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-navy-500/10 overflow-hidden">
                    
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
                    <div className="p-6 md:p-7 lg:p-8">
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
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-400 dark:to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs font-bold">
                              {author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{author}</span>
                        </div>
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
              Explore More
              <span className="block bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent mt-2">
                Safety Guides
              </span>
            </h2>
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Continue your safety journey with expert-curated guides for every travel scenario.
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
                        <i className="ri-shield-line text-3xl text-white"></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      Personal Safety
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4 min-h-[96px]">
                      Essential personal security strategies for confident travel. Learn situational awareness, risk assessment, and protective measures.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/safety-guide/world-cup-2026-safety-guide-everything-fans-need-to-know"
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
                        <i className="ri-smartphone-line text-3xl text-white"></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      Digital Security
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4 min-h-[96px]">
                      Protect your digital identity and devices while traveling. Secure your data, accounts, and online presence.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/safety-guide/digital-security-and-privacy-protection"
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
                        <i className="ri-heart-pulse-line text-3xl text-white"></i>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                      Health & Medical
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4 min-h-[96px]">
                      Complete medical preparedness for tournament travel. Vaccinations, insurance, and emergency health protocols.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href="/safety-guide/health-and-medical-preparedness"
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
