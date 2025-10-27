
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
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=organized%20travel%20packing%20with%20suitcase%2C%20travel%20essentials%20neatly%20arranged%2C%20smart%20packing%20solutions%2C%20efficient%20luggage%20organization%2C%20travel%20preparation&width=1920&height=800&seq=packing-hero&orientation=landscape')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-6">
              <i className="ri-luggage-cart-line text-emerald-400"></i>
              <span className="text-emerald-300 font-medium">World Cup 2026 Packing Lists</span>
            </div>
            
            <h1 className="font-space font-bold text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
              Pack Smart for
              <br />
              <span className="text-gold-400">Every Type of Trip</span>
            </h1>
            
            <p className="font-inter text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Heading to one match or all 64? Backpacking or going luxury? Our tailored packing guides make sure you bring everything you need—and nothing you don't.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">6</div>
              <div className="text-slate-300 font-inter text-sm">Customized Lists</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-gold-400 mb-2">127</div>
              <div className="text-slate-300 font-inter text-sm">Items Covered</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">16</div>
              <div className="text-slate-300 font-inter text-sm">Host Cities</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Battle-Tested</div>
              <div className="text-slate-300 font-inter text-sm">by Fans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Lists Grid */}
      <section className="py-20 bg-slate-50 dark:bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-4xl text-navy-900 dark:text-white mb-4">
              Find Your Packing List
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-inter text-lg max-w-2xl mx-auto">
              Pick the guide that matches your travel style:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packingLists.map((list, index) => (
              <Card 
                key={index} 
                hover 
                className="overflow-hidden group bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700" 
                padding="none"
              >
                <div className="relative">
                  <img
                    src={list.image}
                    alt={list.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className={`${list.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {list.badge}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {list.items} items
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-space font-bold text-xl text-white mb-2">
                      {list.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <i className="ri-time-line mr-2"></i>
                      <span>{list.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-6 leading-relaxed">
                    {list.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
                        <i className="ri-checkbox-circle-line text-emerald-500"></i>
                        <span>{list.items} items</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleListClick(list)}
                      type="button"
                      className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
                    >
                      <i className="ri-list-check mr-2"></i>
                      View List
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Mode Modal */}
      {selectedList && currentList && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-navy-800 rounded-2xl shadow-2xl">
              {/* Header */}
              <div className="relative p-8 border-b border-slate-200 dark:border-navy-700">
                <button
                  onClick={handleCloseList}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-navy-700 hover:bg-slate-200 dark:hover:bg-navy-600 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-slate-600 dark:text-slate-300"></i>
                </button>
                
                <div className={`inline-block ${currentList.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                  {currentList.badge}
                </div>
                
                <h2 className="font-space font-bold text-3xl text-navy-900 dark:text-white mb-3">
                  {currentList.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 font-inter text-lg mb-4">
                  {currentList.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center">
                    <i className="ri-time-line mr-2"></i>
                    <span>{currentList.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-checkbox-circle-line mr-2 text-emerald-500"></i>
                    <span>{currentList.items} items</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="p-8">
                <div className="space-y-3">
                  {currentList.detailedItems.map((item, index) => {
                    const key = `${selectedList}-${index}`;
                    const isChecked = checkedItems[key] || false;
                    
                    return (
                      <div
                        key={index}
                        onClick={() => toggleItem(index)}
                        className={`flex items-start p-4 rounded-lg border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                            : 'bg-slate-50 dark:bg-navy-700 border-slate-200 dark:border-navy-600 hover:border-emerald-300 dark:hover:border-emerald-700'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center mr-4 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-emerald-500 border-emerald-500'
                            : 'border-slate-300 dark:border-navy-500'
                        }`}>
                          {isChecked && (
                            <i className="ri-check-line text-white text-sm"></i>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className={`font-medium ${
                            isChecked
                              ? 'text-slate-500 dark:text-slate-400 line-through'
                              : 'text-navy-900 dark:text-white'
                          }`}>
                            {item.name}
                          </div>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {item.category}
                            </span>
                            {item.essential && (
                              <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full">
                                Essential
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
