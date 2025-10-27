
import { useState } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
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
const safetyGuides = [
  {
    id: 1,
    title: 'Complete World Cup Safety Guide',
    excerpt: 'Comprehensive safety protocols for international travel, crowd management, and emergency preparedness during the tournament.',
    category: 'Personal Safety',
    author: 'Dr. Sarah Mitchell',
    readTime: '20 min read',
    image: 'https://readdy.ai/api/search-image?query=travel%20safety%20equipment%20with%20first%20aid%20kit%2C%20emergency%20supplies%2C%20personal%20security%20items%2C%20safety%20preparation%20for%20international%20travel%2C%20professional%20safety%20gear&width=400&height=250&seq=safety1&orientation=landscape',
    featured: true,
    priority: 'Critical'
  },
  {
    id: 2,
    title: 'Stadium Crowd Safety & Emergency Procedures',
    excerpt: 'Essential knowledge for navigating large crowds, emergency exits, and safety protocols at World Cup stadiums.',
    category: 'Crowd Safety',
    author: 'Captain Mike Rodriguez',
    readTime: '15 min read',
    image: 'https://readdy.ai/api/search-image?query=stadium%20emergency%20exit%20signs%20and%20safety%20procedures%2C%20crowd%20management%20systems%2C%20professional%20security%20measures%2C%20organized%20evacuation%20routes%2C%20safety%20infrastructure&width=400&height=250&seq=safety2&orientation=landscape',
    featured: true,
    priority: 'High'
  },
  {
    id: 3,
    title: 'Health & Medical Preparedness',
    excerpt: 'Medical preparations, vaccination requirements, health insurance, and finding medical care in host countries.',
    category: 'Health & Medical',
    author: 'Dr. Elena Vasquez',
    readTime: '18 min read',
    image: 'https://readdy.ai/api/search-image?query=travel%20medical%20kit%20with%20prescription%20medications%2C%20health%20insurance%20documents%2C%20vaccination%20records%2C%20medical%20preparedness%20for%20international%20travel&width=400&height=250&seq=safety3&orientation=landscape',
    featured: false,
    priority: 'High'
  },
  {
    id: 4,
    title: 'Digital Security & Privacy Protection',
    excerpt: 'Protect your devices, data, and privacy while traveling. VPN usage, secure Wi-Fi, and identity protection strategies.',
    category: 'Digital Security',
    author: 'Alex Chen',
    readTime: '12 min read',
    image: 'https://readdy.ai/api/search-image?query=cybersecurity%20setup%20with%20laptop%2C%20smartphone%20security%2C%20VPN%20protection%2C%20digital%20privacy%20tools%2C%20secure%20travel%20technology%2C%20online%20safety%20measures&width=400&height=250&seq=safety4&orientation=landscape',
    featured: false,
    priority: 'Medium'
  },
  {
    id: 5,
    title: 'Emergency Contact & Communication Plan',
    excerpt: 'Create comprehensive emergency plans, establish communication protocols, and prepare backup contact methods.',
    category: 'Emergency Prep',
    author: 'Jennifer Park',
    readTime: '14 min read',
    image: 'https://readdy.ai/api/search-image?query=emergency%20communication%20devices%20with%20satellite%20phone%2C%20emergency%20contacts%20list%2C%20communication%20planning%2C%20crisis%20management%20preparation%2C%20emergency%20preparedness&width=400&height=250&seq=safety5&orientation=landscape',
    featured: false,
    priority: 'High'
  },
  {
    id: 6,
    title: 'Money & Valuables Security',
    excerpt: 'Protect your finances and valuables with secure payment methods, hidden storage, and theft prevention strategies.',
    category: 'Travel Security',
    author: 'Robert Kim',
    readTime: '11 min read',
    image: 'https://readdy.ai/api/search-image?query=travel%20security%20accessories%20with%20money%20belt%2C%20RFID%20blocking%20wallet%2C%20secure%20luggage%20locks%2C%20valuables%20protection%2C%20anti-theft%20travel%20gear&width=400&height=250&seq=safety6&orientation=landscape',
    featured: false,
    priority: 'High'
  },
  {
    id: 7,
    title: 'Transportation Safety Guidelines',
    excerpt: 'Safe practices for flights, trains, buses, taxis, and rideshares. Avoiding scams and ensuring secure transport.',
    category: 'Travel Security',
    author: 'Maria Gonzalez',
    readTime: '13 min read',
    image: 'https://readdy.ai/api/search-image?query=safe%20transportation%20with%20licensed%20taxi%2C%20verified%20rideshare%20app%2C%20secure%20public%20transport%2C%20professional%20transportation%20safety%2C%20travel%20security%20measures&width=400&height=250&seq=safety7&orientation=landscape',
    featured: false,
    priority: 'Medium'
  },
  {
    id: 8,
    title: 'Accommodation Security Checklist',
    excerpt: 'Evaluate hotel security, room safety, and accommodation scams. Ensure your lodging meets safety standards.',
    category: 'Travel Security',
    author: 'David Thompson',
    readTime: '10 min read',
    image: 'https://readdy.ai/api/search-image?query=hotel%20room%20security%20with%20door%20locks%2C%20safe%20deposit%20box%2C%20security%20features%2C%20accommodation%20safety%20checklist%2C%20secure%20lodging%20environment&width=400&height=250&seq=safety8&orientation=landscape',
    featured: false,
    priority: 'Medium'
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
                    <Button variant="outline" size="sm" onClick={() => openGuideModal(guide)}>
                      Read Guide
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Numbers Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-6 ultra-premium-text">
              Emergency Numbers to Save Now
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              All three countries use 911 for emergencies. Save these numbers in your phone before you travel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              { country: 'USA' },
              { country: 'Mexico' },
              { country: 'Canada' }
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
                className="group transform-gpu will-change-transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-center">
                  {/* Country Header */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <i className="ri-phone-fill text-white text-2xl"></i>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white ultra-premium-text">
                      {item.country}
                    </h3>
                  </div>

                  {/* Emergency Number Display */}
                  <div className="bg-gradient-to-br from-red-50 via-red-25 to-orange-50 dark:from-red-950/30 dark:via-red-900/20 dark:to-orange-950/30 rounded-2xl p-8 mb-6 border border-red-200/60 dark:border-red-800/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="text-3xl">🚨</span>
                        <span className="text-slate-700 dark:text-slate-300 font-semibold text-lg">
                          All Emergencies:
                        </span>
                      </div>
                      
                      <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-3 ultra-premium-text">
                        911
                      </div>
                      
                      <div className="text-base text-slate-600 dark:text-slate-400 font-medium">
                        (Police, Medical, Fire)
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200/60 dark:border-emerald-800/40">
                      <i className="ri-shield-check-fill text-emerald-600 dark:text-emerald-400"></i>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>

          {/* Enhanced Tip Section */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-blue-500/5 rounded-3xl blur-2xl"></div>
            
            <Card
              variant="premium"
              padding="xl"
              hover={true}
              glow={false}
              animate={true}
              shadow="premium"
              effect="shimmer"
              className="relative bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 dark:from-blue-950/30 dark:via-navy-800 dark:to-cyan-950/20 border border-blue-200/60 dark:border-blue-800/40"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-transparent rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cyan-400/15 to-transparent rounded-br-3xl"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                    <i className="ri-lightbulb-fill text-white text-2xl"></i>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <span className="text-3xl">💡</span>
                    <h4 className="font-bold text-2xl text-blue-800 dark:text-blue-300 ultra-premium-text">
                      Pro Tip:
                    </h4>
                  </div>
                  <p className="text-blue-700 dark:text-blue-400 text-xl leading-relaxed font-medium ultra-premium-text max-w-3xl mx-auto">
                    911 works from any phone, even without a SIM card or service plan. This emergency number is accessible worldwide on any mobile device.
                  </p>
                </div>
              </div>

              {/* Subtle Border Animation */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400/60 to-transparent"></div>
              </div>
            </Card>
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
                    <button
                      type="button"
                      onClick={() => openGuideModal(guide)}
                      className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-emerald-500 px-3 py-2 text-sm"
                    >
                      <i className="ri-arrow-right-line"></i>
                    </button>
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

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {safetyGuides.map((guide, index) => (
                  <Card key={index} className="p-8" id={`guide-${index}`}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <i className={`${guide.icon} text-white text-2xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h2 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-2">
                          {guide.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center">
                            <i className="ri-shield-check-line mr-1"></i>
                            {guide.level} Priority
                          </span>
                          <span className="flex items-center">
                            <i className="ri-time-line mr-1"></i>
                            {guide.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <div className="space-y-4">
                        {guide.content && guide.content.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="font-semibold text-navy-900 dark:text-white mb-2">{section.subtitle}</h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-3">{section.text}</p>
                            {section.tips && (
                              <ul className="space-y-2">
                                {section.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="flex items-start space-x-2">
                                    <i className="ri-check-line text-emerald-500 mt-0.5 flex-shrink-0"></i>
                                    <span className="text-slate-600 dark:text-slate-400 text-sm">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {guide.emergencyInfo && (
                      <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-start space-x-3">
                          <i className="ri-alarm-warning-line text-red-600 text-lg mt-0.5"></i>
                          <div>
                            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Emergency Information</h4>
                            <p className="text-red-700 dark:text-red-400 text-sm">{guide.emergencyInfo}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="p-6">
                  <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-4">
                    Quick Navigation
                  </h3>
                  <div className="space-y-3">
                    {safetyGuides.map((guide, index) => (
                      <a
                        key={index}
                        href={`#guide-${index}`}
                        className="block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-sm"
                      >
                        {guide.title}
                      </a>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-4">
                    Emergency Contacts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <i className="ri-phone-line text-red-500"></i>
                      <span className="text-slate-600 dark:text-slate-400">Emergency: 911</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-hospital-line text-blue-500"></i>
                      <span className="text-slate-600 dark:text-slate-400">Medical: 911</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="ri-shield-line text-green-500"></i>
                      <span className="text-slate-600 dark:text-slate-400">Police: 911</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-space font-bold text-lg text-navy-900 dark:text-white mb-4">
                    Related Guides
                  </h3>
                  <div className="space-y-3">
                    <a href="/travel-tips" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Travel Tips & Hacks
                    </a>
                    <a href="/packing-lists" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Essential Packing Lists
                    </a>
                    <a href="/budget-guides" className="block text-emerald-600 hover:text-emerald-700 transition-colors text-sm">
                      Budget Planning
                    </a>
                  </div>
                </Card>
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

      <Footer />
    </div>
  );
}
