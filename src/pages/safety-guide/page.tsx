
import { useState } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import GuideCard from '../../components/base/GuideCard';
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
    title: 'Transportation Safety Guidelines',
    excerpt: 'Safe practices for flights, trains, buses, taxis, and rideshares. Avoiding scams and ensuring secure transport.',
    category: 'Travel Security',
    author: 'Maria Gonzalez',
    readTime: '13 min read',
    image: 'https://readdy.ai/api/search-image?query=safe%20transportation%20with%20licensed%20taxi%2C%20verified%20rideshare%20app%2C%20secure%20public%20transport%2C%20professional%20transportation%20safety%2C%20travel%20security%20measures&width=400&height=250&seq=safety7&orientation=landscape',
    featured: false,
    priority: 'Medium',
    href: '/safety-guide/transportation-safety-guidelines'
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
    title: 'Matchday Crowd Safety Essentials',
    excerpt: 'Navigate stadium crowds, entry checkpoints, and post-match dispersal with confidence.',
    category: 'Stadium & Crowd Safety',
    author: 'Alex Rivera',
    readTime: '9 min read',
    priority: 'High' as const,
    image:
      'https://readdy.ai/api/search-image?query=stadium%20crowd%20safety%2C%20entry%20checkpoints%2C%20safe%20movement%2C%20stewards%20guiding%20fans&width=400&height=250&seq=guides1&orientation=landscape',
    slug: 'matchday-crowd-safety-essentials'
  },
  {
    title: 'Emergency Planning: Before You Go',
    excerpt: 'Build a quick-response plan: contacts, meeting points, and local emergency resources for hosts.',
    category: 'Emergency Planning',
    author: 'Priya Shah',
    readTime: '8 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=travel%20emergency%20plan%2C%20contact%20list%2C%20meeting%20points%2C%20preparedness&width=400&height=250&seq=guides2&orientation=landscape',
    slug: 'emergency-planning-before-you-go'
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
    slug: 'health-and-medical-preparedness'
  },
  {
    title: 'Digital Security & Privacy Protection',
    excerpt: 'Protect accounts, payments, and identity on public Wi‑Fi and mobile networks.',
    category: 'Digital Security',
    author: 'Nora Patel',
    readTime: '7 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=digital%20security%20travel%2C%20vpn%2C%20account%20protection%2C%20privacy&width=400&height=250&seq=guides4&orientation=landscape',
    slug: 'digital-security-and-privacy-protection'
  },
  {
    title: 'Safe Transportation: Rideshare, Taxi, Transit',
    excerpt: 'Verify rides, choose licensed providers, and avoid common scams across three hosts.',
    category: 'Travel Security',
    author: 'Maria Gonzalez',
    readTime: '11 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=licensed%20taxi%2C%20verified%20rideshare%2C%20safe%20public%20transport&width=400&height=250&seq=guides5&orientation=landscape',
    slug: 'safe-transportation-rideshare-taxi-transit'
  },
  {
    title: 'Accommodation Safety Checklist',
    excerpt: 'Room security, hotel policies, and avoiding accommodation‑related scams.',
    category: 'Travel Security',
    author: 'David Thompson',
    readTime: '10 min read',
    priority: 'Medium' as const,
    image:
      'https://readdy.ai/api/search-image?query=hotel%20room%20security%2C%20safe%20deposit%20box%2C%20secure%20lodging&width=400&height=250&seq=guides6&orientation=landscape',
    slug: 'accommodation-safety-checklist'
  },
  {
    title: 'Local Scams: Spot and Avoid',
    excerpt: 'Common fan‑targeted scams and how to identify and avoid them quickly.',
    category: 'Travel Security',
    author: 'Omar Delgado',
    readTime: '6 min read',
    priority: 'Low' as const,
    image:
      'https://readdy.ai/api/search-image?query=travel%20scams%20awareness%2C%20money%20fraud%2C%20street%20scams%20guide&width=400&height=250&seq=guides7&orientation=landscape',
    slug: 'local-scams-spot-and-avoid'
  }
];

const emergencyContacts = [
  { country: 'USA', emergency: '911', police: '911', medical: '911', fire: '911' },
  { country: 'Mexico', emergency: '911', police: '911', medical: '911', fire: '911' },
  { country: 'Canada', emergency: '911', police: '911', medical: '911', fire: '911' }
];

export default function SafetyGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const filteredGuides = safetyGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'All Topics' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredGuides = safetyGuides.filter(guide => guide.featured);

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
    const detailedContent = {
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
    return detailedContent[guide.id] || { sections: [{ title: "Content", content: guide.excerpt }] };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-navy-800 dark:to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6">
              World Cup 2026
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Safety Guide
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Heading to the World Cup? Get practical safety advice for all three host countries—from what to watch out for in crowds to emergency contacts you should save now. Travel prepared, not paranoid.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-12 bg-white dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">3</div>
              <div className="text-slate-600 dark:text-slate-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
              <div className="text-slate-600 dark:text-slate-300">Safety Tips</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">Expert</div>
              <div className="text-slate-600 dark:text-slate-300">Advice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Safety Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
              Must-Read Safety Essentials
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The key things every World Cup traveler should know before they go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredGuides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Essential
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`${getPriorityColor(guide.priority)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {guide.priority}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-red-500 text-sm font-medium">{guide.category}</span>
                    <span className="text-slate-500 text-sm">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {guide.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{guide.author}</span>
                    </div>
                    <a href={`/safety-guide/${slugify(guide.title)}`} className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-emerald-500 px-3 py-2 text-sm">
                      Read Guide
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Numbers Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-800 dark:to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-navy-900 dark:text-white mb-8 leading-tight tracking-tight">
              Your Lifeline: <span className="text-red-600 dark:text-red-400">Emergency Numbers</span>
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              In any emergency, dial 911 across all three host nations. Save these vital numbers to your phone before you embark on your World Cup journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
            {[
              { country: 'USA', icon: 'ri-flag-us-fill' },
              { country: 'Mexico', icon: 'ri-flag-mx-fill' },
              { country: 'Canada', icon: 'ri-flag-ca-fill' }
            ].map((item, index) => (
              <Card
                key={item.country}
                variant="premium"
                padding="lg"
                hover={true}
                glow={false}
                animate={true}
                shadow="premium"
                effect="shimmer"
                className="group transform-gpu will-change-transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-center">
                  {/* Country Header */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <i className={`${item.icon} text-white text-4xl`}></i>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-navy-900 dark:text-white ultra-premium-text">
                      {item.country}
                    </h3>
                  </div>

                  {/* Emergency Number Display */}
                  <div className="bg-gradient-to-br from-red-50 via-red-25 to-orange-50 dark:from-red-950/30 dark:via-red-900/20 dark:to-orange-950/30 rounded-3xl p-10 mb-8 border border-red-200/60 dark:border-red-800/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <span className="text-4xl">🚨</span>
                        <span className="text-slate-800 dark:text-slate-200 font-semibold text-xl">
                          All Emergencies:
                        </span>
                      </div>
                      
                      <div className="text-6xl font-extrabold text-red-700 dark:text-red-400 mb-4 ultra-premium-text">
                        911
                      </div>
                      
                      <div className="text-lg text-slate-700 dark:text-slate-400 font-medium">
                        (Police, Medical, Fire)
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-5 py-2.5 rounded-full text-base font-semibold border border-emerald-200/60 dark:border-emerald-800/40 shadow-sm">
                      <i className="ri-shield-check-fill text-emerald-600 dark:text-emerald-400 text-lg"></i>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Pro Tip Section */}
          <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200/70 dark:border-blue-800/50 overflow-hidden max-w-4xl mx-auto mt-16 mb-20 transform-gpu transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg transform-gpu transition-transform duration-500 hover:scale-110">
                  <i className="ri-lightbulb-fill text-white text-5xl"></i>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-blue-800 dark:text-blue-300 mb-3 leading-tight ultra-premium-text">
                  Pro Tip: Stay Connected
                </h3>
                <p className="text-lg text-blue-700 dark:text-blue-200 leading-relaxed">
                  Consider purchasing a local SIM card or an international eSIM plan upon arrival. This ensures you have reliable access to maps, translation apps, and emergency services without relying solely on Wi-Fi.
                </p>
              </div>
            </div>
            {/* Decorative Corner Accent */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                <input
                  type="text"
                  placeholder="Search safety guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-navy-600 rounded-xl bg-white dark:bg-navy-700 text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {safetyCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-navy-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

      {/* Safety Guides Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.map((guide) => (
          <Card key={guide.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`${getPriorityColor(guide.priority)} text-white px-2 py-1 rounded-lg text-xs font-bold`}>
                      {guide.priority}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-red-500 text-sm font-medium">{guide.category}</span>
                    <span className="text-slate-500 text-sm">{guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {guide.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-300">{guide.author}</span>
                    </div>
                    <a
                      href={`/safety-guide/${slugify(guide.title)}`}
                      className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-emerald-500 px-3 py-2 text-sm"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </Card>
        ))}
      </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line text-4xl text-slate-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                No safety guides found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Dedicated Guide Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Dedicated Article Guides</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Explore focused guides with deep‑dive advice for fans.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideArticles.map((g) => (
              <GuideCard
                key={g.slug}
                title={g.title}
                excerpt={g.excerpt}
                category={g.category}
                author={g.author}
                readTime={g.readTime}
                priority={g.priority}
                image={g.image}
                href={`/guides/${g.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-8">
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">





              </div>
            </div>
          </div>
        </div>
      </section>

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
                      {selectedGuide.author.split(' ').map(n => n[0]).join('')}
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
                  {getDetailedContent(selectedGuide).sections.map((section, index) => (
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

      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-950 dark:to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-navy-900 dark:text-white mb-16 leading-tight">
            Explore More <span className="text-emerald-500">Safety Guides</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-white dark:bg-navy-700 border border-transparent hover:border-emerald-400">
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                  <i className="ri-shield-line text-3xl text-emerald-600 dark:text-emerald-300"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">Guide Title 1</h3>
                <p className="text-slate-700 dark:text-slate-300 text-base mb-6 leading-relaxed">A brief description of the related guide content goes here, enticing the user to click and learn more. This text is designed to be engaging and informative.</p>
                <a href={`/safety-guide/${slugify('Transportation Safety Guidelines')}`} className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-300 group">
                  Read More
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </Card>
            <Card className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-white dark:bg-navy-700 border border-transparent hover:border-emerald-400">
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                  <i className="ri-walk-line text-3xl text-emerald-600 dark:text-emerald-300"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">Guide Title 2</h3>
                <p className="text-slate-700 dark:text-slate-300 text-base mb-6 leading-relaxed">Another compelling description for a related guide, highlighting its key takeaways or benefits. This section aims to capture user attention effectively.</p>
                <a href={`/safety-guide/${slugify('Digital Security & Privacy Protection')}`} className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-300 group">
                  Read More
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </Card>
            <Card className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-white dark:bg-navy-700 border border-transparent hover:border-emerald-400">
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                  <i className="ri-hospital-line text-3xl text-emerald-600 dark:text-emerald-300"></i>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3">Guide Title 3</h3>
                <p className="text-slate-700 dark:text-slate-300 text-base mb-6 leading-relaxed">A third description, perhaps focusing on a different aspect or a unique selling point of the guide. This content is crafted to be highly engaging.</p>
                <a href={`/safety-guide/${slugify('Health & Medical Preparedness')}`} className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-300 group">
                  Read More
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
