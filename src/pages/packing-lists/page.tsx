
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { Card } from '../../components/base/Card';
import { Button } from '../../components/base/Button';

export default function PackingListsPage() {
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const packingLists = [
    {
      id: 'essential',
      title: 'The Essential World Cup Kit',
      description: 'Everything you absolutely need for match days, travel days, and everything in between.',
      category: 'Basic',
      duration: 'For any trip length',
      badge: 'Essential',
      badgeColor: 'bg-emerald-500',
      items: 12,
      image: 'https://readdy.ai/api/search-image?query=essential%20travel%20items%20neatly%20organized%2C%20passport%20tickets%20phone%20charger%2C%20must-have%20travel%20essentials%20laid%20out%20on%20clean%20white%20background%2C%20minimalist%20packing%20essentials&width=800&height=600&seq=essential-pack&orientation=landscape',
      detailedItems: [
        { name: 'Tournament tickets (digital + printed backup)', category: 'Documents', essential: true },
        { name: 'Passport/ID with 6+ months validity', category: 'Documents', essential: true },
        { name: 'Travel insurance documents', category: 'Documents', essential: true },
        { name: 'Hotel confirmations (digital + printed)', category: 'Documents', essential: true },
        { name: 'Portable phone charger/power bank', category: 'Electronics', essential: true },
        { name: 'Universal travel adapter', category: 'Electronics', essential: true },
        { name: 'Team jersey or colors', category: 'Clothing', essential: true },
        { name: 'Comfortable walking shoes', category: 'Clothing', essential: true },
        { name: 'Weather-appropriate jacket', category: 'Clothing', essential: true },
        { name: 'Sunscreen SPF 30+', category: 'Health', essential: true },
        { name: 'Basic first aid kit', category: 'Health', essential: true },
        { name: 'Prescription medications', category: 'Health', essential: true }
      ]
    },
    {
      id: 'budget',
      title: 'Budget Traveler\'s Pack',
      description: 'Pack light, travel cheap. The streamlined essentials for fans on a budget.',
      category: 'Budget',
      duration: '3-7 days',
      badge: 'Budget',
      badgeColor: 'bg-blue-500',
      items: 10,
      image: 'https://readdy.ai/api/search-image?query=budget%20travel%20backpack%20with%20essentials%2C%20compact%20lightweight%20packing%2C%20budget%20traveler%20gear%20organized%2C%20minimalist%20backpacking%20essentials%20on%20clean%20background&width=800&height=600&seq=budget-pack&orientation=landscape',
      detailedItems: [
        { name: 'Reusable water bottle', category: 'Essentials', essential: true },
        { name: 'Packable rain poncho', category: 'Weather', essential: true },
        { name: 'Travel-size laundry detergent', category: 'Practical', essential: false },
        { name: 'Collapsible daypack', category: 'Bags', essential: true },
        { name: 'Instant coffee/tea packets', category: 'Food', essential: false },
        { name: 'Granola bars/snacks', category: 'Food', essential: true },
        { name: 'Travel towel (quick-dry)', category: 'Practical', essential: true },
        { name: 'Flip-flops for hostels', category: 'Clothing', essential: true },
        { name: 'Padlock for lockers', category: 'Security', essential: true },
        { name: 'Earplugs and eye mask', category: 'Comfort', essential: true }
      ]
    },
    {
      id: 'comfort',
      title: 'The Comfort Pack',
      description: 'A few extra touches that make longer trips more enjoyable without overpacking.',
      category: 'Comfort',
      duration: '5-14 days',
      badge: 'Comfort',
      badgeColor: 'bg-purple-500',
      items: 10,
      image: 'https://readdy.ai/api/search-image?query=comfortable%20travel%20accessories%20organized%2C%20premium%20travel%20comfort%20items%2C%20quality%20travel%20gear%20neatly%20arranged%2C%20comfortable%20packing%20essentials%20on%20clean%20background&width=800&height=600&seq=comfort-pack&orientation=landscape',
      detailedItems: [
        { name: 'Premium noise-canceling headphones', category: 'Electronics', essential: false },
        { name: 'Portable espresso maker', category: 'Luxury', essential: false },
        { name: 'Travel blanket', category: 'Comfort', essential: false },
        { name: 'Designer team merchandise', category: 'Clothing', essential: false },
        { name: 'Professional camera equipment', category: 'Electronics', essential: false },
        { name: 'Premium skincare travel set', category: 'Personal Care', essential: false },
        { name: 'Comfortable sleep set', category: 'Clothing', essential: false },
        { name: 'Leather travel organizer', category: 'Accessories', essential: false },
        { name: 'Premium travel pillow', category: 'Comfort', essential: false },
        { name: 'High-end sunglasses', category: 'Accessories', essential: false }
      ]
    }
  ];

  const handleListClick = (list: typeof packingLists[0]) => {
    setSelectedList(list.id);
  };

  const handleCloseList = () => {
    setSelectedList(null);
  };

  const toggleItem = (itemIndex: number) => {
    const key = `${selectedList}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentList = packingLists.find(list => list.id === selectedList);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-navy-900 dark:to-navy-800">
      <Header />
      
      {/* Hero Section - Apple-Level Premium Design */}
      <section id="main-content" className="relative py-32 md:py-40 lg:py-48 bg-white dark:bg-navy-900 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-navy-900 dark:to-slate-900"></div>
          
          {/* Floating Glass Elements - Premium Apple Style */}
          <div className="absolute top-8 right-4 w-16 h-16 xs:top-10 xs:right-6 xs:w-20 xs:h-20 sm:top-16 sm:right-8 sm:w-32 sm:h-32 md:top-20 md:right-10 md:w-40 md:h-40 lg:top-24 lg:right-12 lg:w-48 lg:h-48 xl:w-72 xl:h-72 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-3xl rounded-full border border-emerald-500/10 dark:border-emerald-500/20 animate-float"></div>
          <div className="absolute bottom-8 left-4 w-20 h-20 xs:bottom-10 xs:left-6 xs:w-24 xs:h-24 sm:bottom-16 sm:left-8 sm:w-40 sm:h-40 md:bottom-20 md:left-10 md:w-48 md:h-48 lg:bottom-24 lg:left-12 lg:w-56 lg:h-56 xl:w-96 xl:h-96 bg-gold-500/5 dark:bg-gold-500/10 backdrop-blur-3xl rounded-full border border-gold-500/10 dark:border-gold-500/20 animate-float-slow"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 xs:top-1/2 xs:left-1/2 xs:w-20 xs:h-20 sm:top-1/2 sm:left-1/2 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-navy-500/5 dark:bg-navy-500/10 backdrop-blur-3xl rounded-full border border-navy-500/10 dark:border-navy-500/20 animate-float-delayed"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-navy-800/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-full px-8 py-4 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm tracking-wide">Premium Packing Solutions</span>
            </div>
            
            {/* Apple-Level Typography */}
            <h1 className="font-space font-bold text-5xl md:text-7xl lg:text-8xl mb-8 text-navy-900 dark:text-white">
              Pack Like a
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                Pro Traveler
              </span>
            </h1>
            
            <p className="font-inter text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Precision-engineered packing lists for every journey. From minimalist essentials to luxury comfort—travel smarter, not heavier.
            </p>
          </div>

          {/* Premium Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group relative bg-white/60 dark:bg-navy-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-navy-600/50 hover:border-emerald-400/50 dark:hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-3">6</div>
                <div className="text-slate-600 dark:text-slate-400 font-inter text-sm tracking-wide">Premium Lists</div>
              </div>
            </div>
            
            <div className="group relative bg-white/60 dark:bg-navy-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-navy-600/50 hover:border-gold-400/50 dark:hover:border-gold-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent mb-3">127</div>
                <div className="text-slate-600 dark:text-slate-400 font-inter text-sm tracking-wide">Curated Items</div>
              </div>
            </div>
            
            <div className="group relative bg-white/60 dark:bg-navy-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-navy-600/50 hover:border-navy-400/50 dark:hover:border-navy-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-600 to-navy-500 bg-clip-text text-transparent mb-3">16</div>
                <div className="text-slate-600 dark:text-slate-400 font-inter text-sm tracking-wide">Host Cities</div>
              </div>
            </div>
            
            <div className="group relative bg-white/60 dark:bg-navy-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-navy-600/50 hover:border-purple-400/50 dark:hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-300 mb-3">Proven</div>
                <div className="text-slate-600 dark:text-slate-400 font-inter text-sm tracking-wide">by Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Packing Lists Grid */}
      <section className="py-32 bg-slate-50 dark:bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
              Curated for Every
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
                Travel Style
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-xl max-w-2xl mx-auto leading-relaxed">
              From minimalist essentials to luxury comfort—each list is precision-engineered for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packingLists.map((list, index) => (
              <Card 
                key={index} 
                hover 
                className="group relative overflow-hidden bg-white dark:bg-navy-800/50 backdrop-blur-xl border border-slate-200/50 dark:border-navy-600/50 hover:border-emerald-400/50 dark:hover:border-emerald-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col card-perfect-balance min-h-[500px] md:min-h-[480px] lg:min-h-[500px]" 
                padding="none"
              >
                {/* Premium Image Container - Fixed Height */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={list.image}
                    alt={list.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Premium Badges */}
                  <div className="absolute top-6 left-6">
                    <div className={`${list.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20`}>
                      {list.badge}
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 dark:bg-navy-800/90 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
                      {list.items} items
                    </div>
                  </div>

                  {/* Premium Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-space font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      {list.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm backdrop-blur-sm">
                      <i className="ri-time-line mr-2"></i>
                      <span>{list.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Premium Content - Apple-level Perfect Balance */}
                <div className="p-8 md:p-7 lg:p-8 flex flex-col flex-grow card-content-equalizer">
                  {/* Description - Fixed Height Container with Apple-level Precision */}
                  <div className="mb-8">
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-base card-description line-clamp-3 md:line-clamp-2 lg:line-clamp-3 h-20 md:h-16 lg:h-20">
                      {list.description}
                    </p>
                  </div>
                  
                  {/* Premium Features - Fixed Height */}
                  <div className="flex items-center justify-between mb-8 h-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-emerald-600 dark:text-emerald-400">
                        <i className="ri-checkbox-circle-line"></i>
                        <span>{list.items} curated items</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wide font-medium">
                      {list.category}
                    </div>
                  </div>
                  
                  {/* Premium CTA Button - Fixed Position */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                    <button
                      onClick={() => handleListClick(list)}
                      type="button"
                      className="relative w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus px-6 py-4 text-base bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <i className="ri-list-check mr-3 text-lg"></i>
                      <span className="font-semibold">Explore List</span>
                      <i className="ri-arrow-right-line ml-3 group-hover:translate-x-1 transition-transform"></i>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Reading Mode Modal */}
      {selectedList && currentList && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white/95 dark:bg-navy-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 dark:border-navy-600/50">
              {/* Premium Header */}
              <div className="relative p-8 border-b border-slate-200/30 dark:border-navy-600/30">
                <button
                  onClick={handleCloseList}
                  className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-navy-700/80 hover:bg-white dark:hover:bg-navy-700 transition-all duration-300 cursor-pointer backdrop-blur-sm border border-slate-200/50 dark:border-navy-600/50 group"
                >
                  <i className="ri-close-line text-xl text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors"></i>
                </button>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${currentList.badgeColor} text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20`}>
                    {currentList.badge}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {currentList.items} curated items
                  </div>
                </div>
                
                <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-4">
                  {currentList.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 font-inter text-lg leading-relaxed mb-6">
                  {currentList.description}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-emerald-500"></i>
                    <span className="font-medium">{currentList.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-map-pin-line text-emerald-500"></i>
                    <span className="font-medium">All host cities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-checkbox-circle-line text-emerald-500"></i>
                    <span className="font-medium">Interactive checklist</span>
                  </div>
                </div>
              </div>

              {/* Premium Checklist */}
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="font-space font-bold text-2xl text-navy-900 dark:text-white mb-2">Interactive Checklist</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-inter">Click items to mark as packed. Essential items are highlighted.</p>
                </div>
                
                <div className="space-y-4">
                  {currentList.detailedItems.map((item, index) => {
                    const key = `${selectedList}-${index}`;
                    const isChecked = checkedItems[key] || false;
                    
                    return (
                      <div
                        key={index}
                        onClick={() => toggleItem(index)}
                        className={`group relative flex items-start p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-50/80 dark:bg-emerald-900/20 border-emerald-200/50 dark:border-emerald-800/30'
                            : 'bg-white/60 dark:bg-navy-800/30 border-slate-200/30 dark:border-navy-600/30 hover:border-emerald-300/50 dark:hover:border-emerald-700/30 hover:bg-white/80 dark:hover:bg-navy-800/50'
                        }`}
                      >
                        {/* Premium Checkbox */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center mr-5 mt-0.5 transition-all duration-300 ${
                          isChecked
                            ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/25'
                            : 'bg-white/80 dark:bg-navy-700/50 border-slate-300 dark:border-navy-500 group-hover:border-emerald-400'
                        }`}>
                          {isChecked && (
                            <i className="ri-check-line text-white text-lg font-bold"></i>
                          )}
                        </div>
                        
                        {/* Item Content */}
                        <div className="flex-1">
                          <div className={`font-semibold text-lg mb-2 transition-all duration-300 ${
                            isChecked
                              ? 'text-slate-500 dark:text-slate-400 line-through'
                              : 'text-navy-900 dark:text-white'
                          }`}>
                            {item.name}
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                              {item.category}
                            </span>
                            {item.essential && (
                              <span className="text-xs bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-full font-semibold border border-red-200/50 dark:border-red-800/30">
                                Essential
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover Effect */}
                        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                          isChecked ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                        } bg-gradient-to-r from-emerald-500/5 to-transparent`}></div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-8 p-6 bg-slate-50/50 dark:bg-navy-800/20 rounded-2xl border border-slate-200/30 dark:border-navy-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Packing Progress</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {Object.keys(checkedItems).filter(key => key.startsWith(selectedList)).length} / {currentList.detailedItems.length}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200/50 dark:bg-navy-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(Object.keys(checkedItems).filter(key => key.startsWith(selectedList)).length / currentList.detailedItems.length) * 100}%` 
                      }}
                    ></div>
                  </div>
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
