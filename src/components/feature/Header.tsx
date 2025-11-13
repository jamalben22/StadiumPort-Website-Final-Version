
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DarkModeToggle } from '../base/DarkModeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  // Search data
  const searchData = [
    // Cities
  { type: 'city', title: 'New York / New Jersey', path: '/world-cup-2026-host-cities/new-york-new-jersey', description: 'MetLife Stadium – World Cup Final Host' },
    { type: 'city', title: 'Los Angeles', path: '/world-cup-2026-host-cities/los-angeles', description: 'City of Angels - SoFi Stadium & Rose Bowl' },
    { type: 'city', title: 'Miami', path: '/world-cup-2026-host-cities/miami', description: 'Magic City - Hard Rock Stadium' },
    { type: 'city', title: 'Atlanta', path: '/world-cup-2026-host-cities/atlanta', description: 'Hotlanta - Mercedes-Benz Stadium' },
    { type: 'city', title: 'Dallas', path: '/world-cup-2026-host-cities/dallas', description: 'Big D - AT&T Stadium' },
    { type: 'city', title: 'Kansas City', path: '/world-cup-2026-host-cities/kansas-city', description: 'Heart of America - Arrowhead Stadium' },
    { type: 'city', title: 'Philadelphia', path: '/world-cup-2026-host-cities/philadelphia', description: 'City of Brotherly Love - Lincoln Financial Field' },
    { type: 'city', title: 'Seattle', path: '/world-cup-2026-host-cities/seattle', description: 'Emerald City - Lumen Field' },
    { type: 'city', title: 'San Francisco', path: '/world-cup-2026-host-cities/san-francisco', description: 'Golden Gate City - Levi\'s Stadium' },
    { type: 'city', title: 'Boston', path: '/world-cup-2026-host-cities/boston', description: 'Beantown - Gillette Stadium' },
    { type: 'city', title: 'Toronto', path: '/world-cup-2026-host-cities/toronto', description: 'The 6ix - BMO Field' },
    { type: 'city', title: 'Vancouver', path: '/world-cup-2026-host-cities/vancouver', description: 'Beautiful British Columbia - BC Place' },
    { type: 'city', title: 'Mexico City', path: '/world-cup-2026-host-cities/mexico-city', description: 'Capital of Mexico - Estadio Azteca' },
    { type: 'city', title: 'Guadalajara', path: '/world-cup-2026-host-cities/guadalajara', description: 'Pearl of the West - Estadio Akron' },
    { type: 'city', title: 'Monterrey', path: '/world-cup-2026-host-cities/monterrey', description: 'Sultan of the North - Estadio BBVA' },
    
    // Stadiums
    { type: 'stadium', title: 'MetLife Stadium', path: '/world-cup-2026-stadiums', description: 'New York - Home of Giants & Jets' },
    { type: 'stadium', title: 'SoFi Stadium', path: '/world-cup-2026-stadiums', description: 'Los Angeles - Ultra-modern venue' },
    { type: 'stadium', title: 'Hard Rock Stadium', path: '/world-cup-2026-stadiums', description: 'Miami - Iconic football venue' },
    { type: 'stadium', title: 'Mercedes-Benz Stadium', path: '/world-cup-2026-stadiums', description: 'Atlanta - Architectural marvel' },
    { type: 'stadium', title: 'AT&T Stadium', path: '/world-cup-2026-stadiums', description: 'Dallas - The Star' },
    { type: 'stadium', title: 'Arrowhead Stadium', path: '/world-cup-2026-stadiums', description: 'Kansas City - Loudest stadium' },
    
    // Travel Guides
    { type: 'guide', title: 'Travel Tips', path: '/travel-tips', description: 'Essential travel advice for World Cup 2026' },
    { type: 'guide', title: 'Budget Guides', path: '/budget-guides', description: 'Save money on your World Cup trip' },
    { type: 'guide', title: 'Accommodation', path: '/accommodation', description: 'Best places to stay during the tournament' },
    { type: 'guide', title: 'Transportation', path: '/transportation', description: 'Getting around host cities' },
    { type: 'guide', title: 'Safety Guide', path: '/safety-guide', description: 'Stay safe during your travels' },
    { type: 'guide', title: 'Packing Lists', path: '/packing-lists', description: 'What to pack for your World Cup adventure' },
    
    // Other pages
    { type: 'page', title: 'Deals & Offers', path: '/deals', description: 'Best deals for World Cup 2026' },
    { type: 'page', title: 'Luxury Travel', path: '/luxury-travel', description: 'Premium World Cup experiences' },
    { type: 'page', title: 'Travel Routes', path: '/travel-routes', description: 'Multi-city travel itineraries' }
  ];

  const filteredResults = searchQuery.length > 0 
    ? searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : [];

  const handleSearchSelect = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'city': return 'ri-map-pin-line';
      case 'stadium': return 'ri-building-line';
      case 'guide': return 'ri-book-open-line';
      default: return 'ri-pages-line';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'city': return 'text-emerald-500 bg-emerald-500/10';
      case 'stadium': return 'text-blue-500 bg-blue-500/10';
      case 'guide': return 'text-purple-500 bg-purple-500/10';
      default: return 'text-gold-500 bg-gold-500/10';
    }
  };

  // Ultra-smooth scroll detection with hide/show animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close search on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isSearchOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-90 transition-all duration-700 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'nav-premium shadow-premium backdrop-blur-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Ultra Premium Logo */}
            <Link to="/" className="flex items-center group relative">
              <div className="relative overflow-hidden rounded-2xl p-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-gold-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://static.readdy.ai/image/d259000346d744ef4d43ba5164954372/f1f98ae7c420d4b6adb2fdd591b38e49.png"
                  alt="StadiumPort Logo"
                  className="h-12 w-auto object-contain relative z-10 filter-premium"
                />
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="font-space font-bold text-xl gradient-text">StadiumPort</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-inter">World Cup 2026</div>
              </div>
            </Link>

            {/* Ultra Premium Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { path: '/world-cup-2026-host-cities', label: 'Host Cities', icon: 'ri-map-pin-line' },
                { path: '/world-cup-2026-stadiums', label: 'Stadiums', icon: 'ri-building-line' },
                { path: '/travel-guides', label: 'Travel Guides', icon: 'ri-book-open-line' },
                { path: '/deals', label: 'Deals', icon: 'ri-price-tag-3-line' }
              ].map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-500 animate-fade-up-delay-${(index + 1) * 100} ${
                    isActive(item.path) 
                      ? 'text-emerald-500 bg-emerald-500/10 shadow-glow' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-emerald-500/5'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <i className={`${item.icon} transition-transform duration-300 group-hover:scale-110`}></i>
                    <span className="font-inter">{item.label}</span>
                  </div>
                  
                  {/* Premium Active Indicator */}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-scale-in"></div>
                  )}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              ))}
            </nav>

            {/* Right Side Premium Actions */}
            <div className="flex items-center space-x-4">
              {/* Premium Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-navy-800/50 backdrop-blur-xl border border-white/20 dark:border-navy-700/20 text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <i className="ri-search-line group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-sm font-inter">Search</span>
              </button>

              {/* Premium Dark Mode Toggle */}
              <div className="relative">
                <DarkModeToggle />
              </div>
              
              {/* Ultra Premium Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-3 rounded-2xl bg-white/10 dark:bg-navy-800/50 backdrop-blur-xl border border-white/20 dark:border-navy-700/20 text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-500 group overflow-hidden"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <i className={`text-xl transition-all duration-500 relative z-10 ${
                  isMenuOpen ? 'ri-close-line rotate-180 scale-110' : 'ri-menu-line group-hover:scale-110'
                }`}></i>
              </button>
            </div>
          </div>

          {/* Ultra Premium Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-700 ease-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-4 p-6 rounded-3xl bg-white/80 dark:bg-navy-800/80 backdrop-blur-2xl border border-white/20 dark:border-navy-700/20 shadow-premium">
              <nav className="space-y-2">
                {[
                  { path: '/world-cup-2026-host-cities', label: 'Host Cities', icon: 'ri-map-pin-line', desc: 'Explore all 16 cities' },
                  { path: '/world-cup-2026-stadiums', label: 'Stadiums', icon: 'ri-building-line', desc: 'Discover every venue' },
                  { path: '/travel-guides', label: 'Travel Guides', icon: 'ri-book-open-line', desc: 'Expert travel tips' },
                  { path: '/deals', label: 'Deals', icon: 'ri-price-tag-3-line', desc: 'Best prices & offers' }
                ].map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`group block p-4 rounded-2xl transition-all duration-500 animate-fade-up-delay-${(index + 1) * 100} ${
                      isActive(item.path) 
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 shadow-glow' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-700/50 hover:text-emerald-500'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isActive(item.path) 
                          ? 'bg-emerald-500 text-white shadow-glow' 
                          : 'bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 group-hover:bg-emerald-500 group-hover:text-white'
                      }`}>
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="font-inter font-semibold">{item.label}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</div>
                      </div>
                      <i className="ri-arrow-right-line opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                    </div>
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Search Button */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-navy-700">
                <button 
                  onClick={() => {
                    setIsSearchOpen(true);
                    closeMenu();
                  }}
                  className="w-full mb-4 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <i className="ri-search-line"></i>
                  <span className="font-inter font-medium">Search</span>
                </button>
                
                <Link to="/deals" onClick={closeMenu}>
                  <button className="w-full btn-premium text-white font-inter">
                    <i className="ri-rocket-line mr-2"></i>
                    Start Planning Your Trip
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500 opacity-20">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500 transition-all duration-300"
            style={{ 
              width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
            }}
          ></div>
        </div>
      </header>

      {/* Ultra Premium Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsSearchOpen(false)}
          ></div>
          
          {/* Search Modal */}
          <div className="relative w-full max-w-2xl bg-white/95 dark:bg-navy-800/95 backdrop-blur-2xl rounded-3xl shadow-premium border border-white/20 dark:border-navy-700/20 animate-scale-in">
            {/* Search Header */}
            <div className="p-6 border-b border-slate-200/50 dark:border-navy-700/50">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    placeholder="Search cities, stadiums, guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50/50 dark:bg-navy-700/50 border border-slate-200/50 dark:border-navy-600/50 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 font-inter"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <i className="ri-search-line text-2xl text-emerald-500"></i>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 font-space">Search StadiumPort</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-inter">Find cities, stadiums, travel guides, and more...</p>
                </div>
              ) : filteredResults.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-navy-700 flex items-center justify-center">
                    <i className="ri-search-line text-2xl text-slate-400"></i>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 font-space">No results found</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-inter">Try searching for cities, stadiums, or travel guides</p>
                </div>
              ) : (
                <div className="p-4">
                  {filteredResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchSelect(result.path)}
                      className="w-full p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-all duration-300 group text-left animate-fade-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${getTypeColor(result.type)}`}>
                          <i className={`${getTypeIcon(result.type)}`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-inter font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-300">
                            {result.title}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                            {result.description}
                          </div>
                        </div>
                        <i className="ri-arrow-right-line text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300"></i>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Footer */}
            <div className="p-4 border-t border-slate-200/50 dark:border-navy-700/50 bg-slate-50/50 dark:bg-navy-700/20 rounded-b-3xl">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-inter">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <kbd className="px-2 py-1 bg-white dark:bg-navy-600 rounded border text-xs">↵</kbd>
                    <span>to select</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <kbd className="px-2 py-1 bg-white dark:bg-navy-600 rounded border text-xs">esc</kbd>
                    <span>to close</span>
                  </div>
                </div>
                <div className="text-emerald-500">
                  {filteredResults.length > 0 && `${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
