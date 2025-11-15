
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

      

      {/* Emergency Numbers Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-800 dark:to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="max-w-6xl mx-auto mb-20">
            <Card
              variant="minimal"
              padding="lg"
              hover={true}
              glow={false}
              animate={true}
              shadow="xl"
              effect="none"
              className="relative group rounded-3xl bg-white/80 dark:bg-navy-800/80 border border-slate-200/60 dark:border-navy-700/60 backdrop-blur-md hover:bg-white/90 dark:hover:bg-navy-800/90 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-mesh-gradient opacity-25 pointer-events-none"></div>
              <div className="relative z-10 p-8 md:p-10">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="text-center font-luxury tracking-wide text-platinum-700 dark:text-platinum-300 text-sm sm:text-base">
                    <span className="block mx-auto text-5xl md:text-6xl font-extrabold text-navy-900 dark:text-white leading-tight tracking-tight">Emergency Number Available across USA, Mexico, and Canada</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative text-center max-w-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-platinum-600/40 dark:border-platinum-700/40 bg-white/60 dark:bg-navy-800/60 backdrop-blur-md">
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,0,0.08),transparent_60%)]"></div>
                    <div className="relative z-10 space-y-6">
                      <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-[1.03]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-700 via-red-800 to-gold-500 opacity-20 blur-xl"></div>
                        <div className="absolute inset-0 rounded-full ring-2 ring-gold-400/60 dark:ring-gold-500/40"></div>
                        <div className="relative flex items-center justify-center w-full h-full">
                          <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-700 via-red-800 to-gold-500 font-space">911</span>
                        </div>
                      </div>
                      <div className="font-inter font-medium text-platinum-700 dark:text-platinum-300 text-sm sm:text-base">Police · Medical · Fire</div>
                      <div className="inline-flex items-center justify-center gap-2 text-platinum-700 dark:text-platinum-300 text-sm sm:text-base">
                        <i className="ri-time-line text-gold-500"></i>
                        <span className="font-semibold">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative max-w-5xl mx-auto mt-16 mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 dark:border-navy-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800 opacity-90"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_50%)]"></div>
              <div className="relative z-10 p-10 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-xl">
                    <i className="ri-shield-star-line text-white text-5xl"></i>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-emerald-200 mb-3 leading-tight">
                    Premium Safety Insight
                  </h3>
                  <p className="text-slate-200/90 md:text-lg max-w-3xl">
                    Save emergency numbers and key contacts before travel. Keep battery backups, enable location sharing with trusted contacts, and memorize nearest exits upon arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      {/* Deleted section per request */}

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
            {safetyGuides.slice(0,2).map((guide) => (
              <Card key={`dedicated-${guide.id}`} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
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
                      Read More
                      <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                  </div>
                </div>
              </Card>
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
                <a href={`/safety-guide/${slugify('World Cup 2026 Safety Guide: Everything Fans Need to Know')}`} className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-300 group">
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
