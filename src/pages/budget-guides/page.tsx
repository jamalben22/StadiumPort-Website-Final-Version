
import { useState, useEffect } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';
import { ComingSoon } from '../../components/common/ComingSoon';

// ==========================================
// 🚨 INCOMPLETE PAGE PRESERVATION
// The original content is preserved below as 'BudgetGuidesPageOriginal'
// To restore:
// 1. Delete the 'BudgetGuidesPage' component
// 2. Rename 'BudgetGuidesPageOriginal' back to 'BudgetGuidesPage'
// 3. Export it as default
// ==========================================

export default function BudgetGuidesPage() {
  return <ComingSoon title="Budget Guides Coming Soon" />;
}

// ⬇️ ORIGINAL CONTENT PRESERVED BELOW ⬇️

interface BudgetSection {
  title: string;
  content: string;
}

interface FullContent {
  introduction: string;
  sections: BudgetSection[];
}

interface BudgetGuide {
  id: number;
  title: string;
  city: string;
  budget: string;
  dailyBudget: number;
  author: string;
  readTime: string;
  image: string;
  excerpt: string;
  highlights: string[];
  accommodation: string;
  food: string;
  transport: string;
  featured: boolean;
  fullContent: FullContent;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BudgetGuidesPageOriginal() {
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState<BudgetGuide | null>(null);
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

  const budgetGuides: BudgetGuide[] = [
    {
      id: 1,
      title: 'Mexico City: Tournament on $50/Day',
      city: 'Mexico City',
      budget: 'ultra-budget',
      dailyBudget: 50,
      author: 'Maria Gonzalez',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Mexico%20City%20budget%20travel%20with%20backpacker%20exploring%20historic%20center%2C%20affordable%20street%20food%20vendors%2C%20budget%20accommodation%20hostels%2C%20young%20travelers%20saving%20money%2C%20vibrant%20Mexican%20culture&width=600&height=400&seq=mexico-budget&orientation=landscape',
      excerpt: 'Complete guide to experiencing Mexico City and Estadio Azteca matches on an ultra-tight budget. From $12 hostels to $3 street tacos.',
      highlights: ['$12/night hostels', '$3 street food', 'Free metro transport', 'Budget stadium access'],
      accommodation: '$12-25/night',
      food: '$8-15/day',
      transport: '$2-5/day',
      featured: true,
      fullContent: {
        introduction: 'Mexico City offers incredible value for budget travelers. With careful planning, you can experience this vibrant capital, catch matches at the legendary Estadio Azteca, and immerse yourself in rich Mexican culture for just $50 per day.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Mexico City\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Kansas City: Heartland Budget Adventure',
      city: 'Kansas City',
      budget: 'budget',
      dailyBudget: 75,
      author: 'Mike Rodriguez',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Kansas%20City%20budget%20travelers%20enjoying%20BBQ%20and%20jazz%20culture%2C%20affordable%20Midwest%20hospitality%2C%20budget-friendly%20downtown%20area%2C%20young%20people%20exploring%20fountains%20and%20local%20culture&width=600&height=400&seq=kc-budget&orientation=landscape',
      excerpt: 'Discover Kansas City\'s legendary BBQ and jazz scene without breaking the bank. Arrowhead Stadium on a budget.',
      highlights: ['$35/night motels', '$12 BBQ meals', 'Free jazz venues', 'Stadium shuttle deals'],
      accommodation: '$35-55/night',
      food: '$15-25/day',
      transport: '$5-10/day',
      featured: true,
      fullContent: {
        introduction: 'Kansas City combines Midwest hospitality with world-class BBQ and jazz. Experience Chiefs games at Arrowhead Stadium and explore the city\'s cultural gems on a comfortable budget.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Kansas City\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Atlanta: Southern Savings Strategy',
      city: 'Atlanta',
      budget: 'budget',
      dailyBudget: 85,
      author: 'Sarah Mitchell',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Atlanta%20Georgia%20budget%20travelers%20exploring%20downtown%20area%2C%20affordable%20southern%20hospitality%2C%20budget%20accommodation%20near%20Mercedes-Benz%20Stadium%2C%20young%20people%20enjoying%20local%20culture&width=600&height=400&seq=atlanta-budget&orientation=landscape',
      excerpt: 'Navigate Atlanta\'s New South charm on a budget. Mercedes-Benz Stadium access and Southern cuisine without the premium price.',
      highlights: ['$45/night hotels', '$18 Southern meals', 'MARTA transit passes', 'Free cultural sites'],
      accommodation: '$45-65/night',
      food: '$18-28/day',
      transport: '$6-12/day',
      featured: true,
      fullContent: {
        introduction: 'Atlanta offers Southern hospitality and modern attractions at budget-friendly prices. Experience Mercedes-Benz Stadium and explore the city\'s rich civil rights history.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Atlanta\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Philadelphia: Historic Budget Experience',
      city: 'Philadelphia',
      budget: 'budget',
      dailyBudget: 90,
      author: 'David Park',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Philadelphia%20budget%20travelers%20near%20Independence%20Hall%2C%20affordable%20historic%20city%20exploration%2C%20budget-friendly%20cheesesteak%20vendors%2C%20young%20people%20walking%20Freedom%20Trail&width=600&height=400&seq=philly-budget&orientation=landscape',
      excerpt: 'Experience the birthplace of America on a budget. Lincoln Financial Field and historic Philadelphia for less.',
      highlights: ['$50/night hostels', '$8 cheesesteaks', 'Free historic sites', 'Budget stadium transport'],
      accommodation: '$50-70/night',
      food: '$20-30/day',
      transport: '$8-15/day',
      featured: false,
      fullContent: {
        introduction: 'Philadelphia\'s rich American history and passionate sports culture provide a unique backdrop for World Cup 2026.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Philadelphia\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Houston: Space City Savings',
      city: 'Houston',
      budget: 'budget',
      dailyBudget: 95,
      author: 'Jessica Torres',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=Houston%20Texas%20budget%20travelers%20exploring%20diverse%20neighborhoods%2C%20affordable%20Space%20City%20culture%2C%20budget%20accommodation%20near%20NRG%20Stadium%2C%20young%20people%20enjoying%20local%20food%20scene&width=600&height=400&seq=houston-budget&orientation=landscape',
      excerpt: 'Explore Houston\'s diverse culture and NRG Stadium on a budget. From Museum District to Montrose on the cheap.',
      highlights: ['$55/night motels', '$22 Tex-Mex meals', 'Metro rail passes', 'Free museum days'],
      accommodation: '$55-75/night',
      food: '$22-32/day',
      transport: '$7-14/day',
      featured: false,
      fullContent: {
        introduction: 'Houston\'s diverse culture, world-class dining, and warm hospitality create an exceptional World Cup 2026 destination.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Houston\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Denver: Mile High Budget Guide',
      city: 'Denver',
      budget: 'mid-budget',
      dailyBudget: 110,
      author: 'Amanda Foster',
      readTime: '14 min read',
      image: 'https://readdy.ai/api/search-image?query=Denver%20Colorado%20budget%20travelers%20with%20Rocky%20Mountains%20backdrop%2C%20affordable%20Mile%20High%20City%20exploration%2C%20budget%20outdoor%20activities%2C%20young%20people%20enjoying%20craft%20beer%20culture&width=600&height=400&seq=denver-budget&orientation=landscape',
      excerpt: 'Experience Denver\'s outdoor culture and Empower Field without the luxury price tag. Mountain views on a budget.',
      highlights: ['$65/night hotels', '$28 craft beer meals', 'Light rail access', 'Free outdoor activities'],
      accommodation: '$65-85/night',
      food: '$28-38/day',
      transport: '$10-18/day',
      featured: false,
      fullContent: {
        introduction: 'Denver combines modern sophistication with authentic Colorado charm, creating an ideal destination for World Cup 2026 experiences.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Denver\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Dallas: Big D Budget Breakdown',
      city: 'Dallas',
      budget: 'budget',
      dailyBudget: 100,
      author: 'Robert Kim',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Dallas Texas budget travelers exploring AT&T Stadium area, affordable Big D hospitality, budget accommodation in Arlington, young people enjoying cowboy culture&width=600&height=400&seq=dallas-budget2&orientation=landscape',
      excerpt: 'Navigate Dallas and AT&T Stadium on a budget. From Deep Ellum to Arlington without breaking the bank.',
      highlights: ['$60/night motels', '$25 BBQ dinners', 'DART rail passes', 'Free cowboy culture'],
      accommodation: '$60-80/night',
      food: '$25-35/day',
      transport: '$8-16/day',
      featured: false,
      fullContent: {
        introduction: 'Dallas combines modern sophistication with authentic Texas charm, creating an ideal destination for World Cup 2026 experiences.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Dallas\'s budget World Cup 2026 experience.'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Miami: Beach Budget Strategy',
      city: 'Miami',
      budget: 'mid-budget',
      dailyBudget: 125,
      author: 'Carlos Mendez',
      readTime: '15 min read',
      image: 'https://readdy.ai/api/search-image?query=Miami%20budget%20travelers%20enjoying%20South%20Beach%20atmosphere%2C%20affordable%20tropical%20paradise%20experience%2C%20budget%20accommodation%20near%20Hard%20Rock%20Stadium%2C%20young%20people%20exploring%20Art%20Deco%20district&width=600&height=400&seq=miami-budget2&orientation=landscape',
      excerpt: 'Experience Miami\'s tropical paradise and Hard Rock Stadium without the luxury resort prices. Beach life on a budget.',
      highlights: ['$75/night hostels', '$32 Cuban meals', 'Metrobus passes', 'Free beach access'],
      accommodation: '$75-95/night',
      food: '$32-42/day',
      transport: '$12-20/day',
      featured: false,
      fullContent: {
        introduction: 'Miami offers a unique blend of tropical beauty, international culture, and world-class hospitality for World Cup 2026 visitors.',
        sections: [
          {
            title: 'Coming Soon',
            content: 'Detailed budget guide content will be available soon. Stay tuned for comprehensive information about Miami\'s budget World Cup 2026 experience.'
          }
        ]
      }
    }
  ];

  const filteredGuides = budgetGuides.filter(guide => {
    const budgetMatch = selectedBudget === 'all' || guide.budget === selectedBudget;
    const cityMatch = selectedCity === 'all' || guide.city === selectedCity;
    return budgetMatch && cityMatch;
  });

  const featuredGuides = budgetGuides.filter(guide => guide.featured);

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case 'ultra-budget': return 'bg-[#01b47d] text-white';
      case 'budget': return 'bg-[#01b47d] text-white';
      case 'mid-budget': return 'bg-purple-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const getBudgetLabel = (budget: string) => {
    switch (budget) {
      case 'ultra-budget': return 'Ultra Budget';
      case 'budget': return 'Budget';
      case 'mid-budget': return 'Mid Budget';
      default: return budget;
    }
  };

  const openGuideModal = (guide: BudgetGuide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const closeGuideModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />

      {/* Hero Section - Apple-Level Premium Design */}
      <main id="main-content" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          {/* Floating Glass Elements - Premium Apple Style */}
          <div className="absolute top-8 left-4 w-16 h-16 xs:top-10 xs:left-6 xs:w-20 xs:h-20 sm:top-16 sm:left-8 sm:w-32 sm:h-32 md:top-20 md:left-10 md:w-40 md:h-40 lg:top-24 lg:left-12 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 backdrop-blur-3xl rounded-full border border-[#01b47d]/10 dark:border-[#01b47d]/20 animate-float"></div>
          <div className="absolute top-1/2 right-4 w-20 h-20 xs:right-6 xs:w-24 xs:h-24 sm:right-8 sm:w-40 sm:h-40 md:right-10 md:w-48 md:h-48 lg:right-12 lg:w-56 lg:h-56 xl:w-96 xl:h-96 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-3xl rounded-full border border-purple-500/10 dark:border-purple-500/20 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/2 w-16 h-16 xs:left-1/2 xs:w-20 xs:h-20 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-[#01b47d]/5 dark:bg-[#01b47d]/10 backdrop-blur-3xl rounded-full border border-[#01b47d]/10 dark:border-[#01b47d]/20 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
          <div className="text-center mb-16">
            {/* Premium Breadcrumb - Minimal Luxury */}
            <div className="mb-8">
              <nav className="flex items-center justify-center space-x-2 text-sm">
                <a href="/" className="text-slate-500 dark:text-slate-400 hover:text-[#008f63] dark:hover:text-[#008f63] transition-colors duration-300 font-medium">
                  Home
                </a>
                <span className="text-slate-300 dark:text-slate-600">›</span>
                <span className="text-slate-900 dark:text-white font-medium">Budget Guides</span>
              </nav>
            </div>


            
            <h1 className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-navy-900 dark:text-white mb-6 tracking-tight leading-tight">
              See the World Cup
              <br />
              <span className="text-[#01b47d] dark:text-[#01b47d]">Without Breaking the Bank</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              You don't need deep pockets to experience the World Cup. Our budget guides show you how to travel smart, eat cheap, find affordable places to stay, and still catch the matches you want to see.
            </p>
          </div>

          {/* Budget Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto items-stretch">
            <div className="text-center p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">From $50</div>
              <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Per Day</div>
            </div>
            <div className="text-center p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-purple-600 group-hover:to-violet-600 dark:group-hover:from-purple-400 dark:group-hover:to-violet-400 transition-all duration-700">16</div>
              <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Cities</div>
            </div>
            <div className="text-center p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#01b47d]/10 dark:hover:shadow-[#01b47d]/5 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-[#01b47d] group-hover:to-[#01b47d] dark:group-hover:from-[#01b47d] dark:group-hover:to-[#01b47d] transition-all duration-700">Up to 70%</div>
              <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Savings</div>
            </div>
            <div className="text-center p-6 bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl border border-white/30 dark:border-navy-800/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/5 transition-all duration-500 group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-space font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-2 md:mb-3 leading-none group-hover:from-orange-600 group-hover:to-amber-600 dark:group-hover:from-orange-400 dark:group-hover:to-amber-400 transition-all duration-700">50+</div>
              <div className="text-slate-600 dark:text-slate-400 font-inter text-xs md:text-sm font-medium tracking-wide uppercase">Money-Saving Tips</div>
            </div>
          </div>
        </div>
      

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-4">
              Budget Travel Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter max-w-2xl mx-auto">
              Explore comprehensive budget guides for each destination hosting the world's greatest football tournament.
            </p>
          </div>

          {/* 2-Column Grid Layout - Apple-Level Premium Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {budgetGuides.map((guide, index) => (
              <div
                key={guide.id}
                className="group relative bg-white/80 dark:bg-navy-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-slate-500/10 dark:shadow-navy-500/10 hover:shadow-3xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-white/40 dark:border-navy-800/40 hover:border-[#008f63]/20 dark:hover:border-[#008f63]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#01b47d]/5 via-transparent to-purple-50/30 dark:from-[#008f63]/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={`${guide.city} budget guide`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    fetchPriority={index < 2 ? 'high' : 'auto'}
                    decoding="async"
                    className="object-cover w-full h-full object-top group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                    <div className={`px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm border ${getBudgetColor(guide.budget)} backdrop-blur-sm border-white/20`}>
                      {getBudgetLabel(guide.budget)}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                    <div className="group relative bg-white/60 dark:bg-navy-800/60 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/20 dark:border-navy-700/20 shadow-lg shadow-slate-500/10 dark:shadow-navy-500/10 hover:bg-white/70 dark:hover:bg-navy-800/70 hover:shadow-xl hover:shadow-[#01b47d]/20 dark:hover:shadow-[#01b47d]/10 transition-all duration-500 hover:-translate-y-0.5">
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#01b47d] to-[#01b47d] rounded-xl flex items-center justify-center mr-3 shadow-md shadow-[#01b47d]/20 group-hover:shadow-[#01b47d]/30 group-hover:scale-105 transition-all duration-500 flex-shrink-0">
                            <i className="ri-wallet-3-line text-white text-sm"></i>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-space font-semibold text-sm md:text-base text-slate-900 dark:text-white truncate group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                              ${guide.dailyBudget}/day
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-xs font-medium truncate">
                              Daily Budget
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-3 flex-shrink-0">
                          <div className="font-space font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                            {guide.city}
                          </div>
                          <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide">
                            City
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="font-space font-bold text-2xl md:text-3xl text-navy-900 dark:text-white mb-4 group-hover:text-[#008f63] dark:group-hover:text-[#008f63] transition-colors duration-500">
                    {guide.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-base mb-6 leading-relaxed">
                    {guide.excerpt}
                  </p>
                  
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mb-6 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">Stay</div>
                        <div className="font-semibold text-[#01b47d] text-sm">{guide.accommodation}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">Food</div>
                        <div className="font-semibold text-[#01b47d] text-sm">{guide.food}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">Transport</div>
                        <div className="font-semibold text-purple-600 text-sm">{guide.transport}</div>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={`/budget-guides/${guide.title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-')}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#01b47d] text-white hover:bg-[#008f63] hover:shadow-lg hover:shadow-[#01b47d]/25 transition-all w-full text-base font-semibold whitespace-nowrap cursor-pointer group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#01b47d]/30 transition-all duration-500"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Read Full Guide
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>

      {/* Budget Guide Modal - Cities Page Style */}
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
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                    <span>${selectedGuide.dailyBudget}/day</span>
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#01b47d] text-sm font-medium">Budget Guide</span>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedGuide.city}</span>
                    <span>•</span>
                    <span>{selectedGuide.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {selectedGuide.title}
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {selectedGuide.fullContent?.introduction}
                </p>
                
                <div className="space-y-6">
                  {selectedGuide.fullContent?.sections.map((section, index) => (
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
                
                <div className="mt-8 p-4 bg-[#01b47d]/5 dark:bg-[#008f63]/20 rounded-lg border border-[#01b47d]/20 dark:border-[#008f63]">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-[#01b47d] text-lg mt-0.5"></i>
                    <div>
                      <h4 className="font-semibold text-[#008f63] dark:text-[#01b47d] mb-1">Coming Soon</h4>
                      <p className="text-[#008f63] dark:text-[#01b47d] text-sm">
                        Comprehensive budget guides with detailed information about accommodations, transportation, food options, and money-saving tips will be available soon.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <Button variant="primary" onClick={closeGuideModal} className="cursor-pointer">
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
