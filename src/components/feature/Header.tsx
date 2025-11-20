
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DarkModeToggle } from '../base/DarkModeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'explore' | 'actions'>('explore');
  const tablistRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLButtonElement>(null);
  const actionsRef = useRef<HTMLButtonElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  // Search data
  const searchData = [
    // Cities
  { type: 'city', title: 'New York / New Jersey', path: '/world-cup-2026-host-cities/new-york-new-jersey-world-cup-2026-guide', description: 'MetLife Stadium – World Cup Final Host' },
    { type: 'city', title: 'Los Angeles', path: '/world-cup-2026-host-cities/los-angeles-world-cup-2026-guide', description: 'City of Angels - SoFi Stadium & Rose Bowl' },
    { type: 'city', title: 'Miami', path: '/world-cup-2026-host-cities/miami-world-cup-2026-guide', description: 'Magic City - Hard Rock Stadium' },
    { type: 'city', title: 'Atlanta', path: '/world-cup-2026-host-cities/atlanta-world-cup-2026-guide', description: 'Hotlanta - Mercedes-Benz Stadium' },
    { type: 'city', title: 'Dallas', path: '/world-cup-2026-host-cities/dallas-world-cup-2026-guide', description: 'Big D - AT&T Stadium' },
    { type: 'city', title: 'Kansas City', path: '/world-cup-2026-host-cities/kansas-city-world-cup-2026-guide', description: 'Heart of America - Arrowhead Stadium' },
    { type: 'city', title: 'Philadelphia', path: '/world-cup-2026-host-cities/philadelphia-world-cup-2026-guide', description: 'City of Brotherly Love - Lincoln Financial Field' },
    { type: 'city', title: 'Seattle', path: '/world-cup-2026-host-cities/seattle-world-cup-2026-guide', description: 'Emerald City - Lumen Field' },
    { type: 'city', title: 'San Francisco', path: '/world-cup-2026-host-cities/san-francisco-world-cup-2026-guide', description: 'Golden Gate City - Levi\'s Stadium' },
    { type: 'city', title: 'Boston', path: '/world-cup-2026-host-cities/boston-world-cup-2026-guide', description: 'Beantown - Gillette Stadium' },
    { type: 'city', title: 'Toronto', path: '/world-cup-2026-host-cities/toronto-world-cup-2026-guide', description: 'The 6ix - BMO Field' },
    { type: 'city', title: 'Vancouver', path: '/world-cup-2026-host-cities/vancouver-world-cup-2026-guide', description: 'Beautiful British Columbia - BC Place' },
    { type: 'city', title: 'Mexico City', path: '/world-cup-2026-host-cities/mexico-city-world-cup-2026-guide', description: 'Capital of Mexico - Estadio Azteca' },
    { type: 'city', title: 'Guadalajara', path: '/world-cup-2026-host-cities/guadalajara-world-cup-2026-guide', description: 'Pearl of the West - Estadio Akron' },
    { type: 'city', title: 'Monterrey', path: '/world-cup-2026-host-cities/monterrey-world-cup-2026-guide', description: 'Sultan of the North - Estadio BBVA' },
    
    // Stadiums
    { type: 'stadium', title: 'MetLife Stadium', path: '/world-cup-2026-stadiums', description: 'New York - Home of Giants & Jets' },
    { type: 'stadium', title: 'SoFi Stadium', path: '/world-cup-2026-stadiums', description: 'Los Angeles - Ultra-modern venue' },
    { type: 'stadium', title: 'Hard Rock Stadium', path: '/world-cup-2026-stadiums', description: 'Miami - Iconic football venue' },
    { type: 'stadium', title: 'Mercedes-Benz Stadium', path: '/world-cup-2026-stadiums', description: 'Atlanta - Architectural marvel' },
    { type: 'stadium', title: 'AT&T Stadium', path: '/world-cup-2026-stadiums', description: 'Dallas - The Star' },
    { type: 'stadium', title: 'Arrowhead Stadium', path: '/world-cup-2026-stadiums', description: 'Kansas City - Loudest stadium' },
    
    // Travel Guides
    { type: 'guide', title: 'Travel Tips', path: '/world-cup-2026-travel-tips', description: 'Essential travel advice for World Cup 2026' },
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

  // Dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const el = activeTab === 'explore' ? exploreRef.current : actionsRef.current;
    const parent = tablistRef.current;
    if (el && parent) {
      const rect = el.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      setIndicatorStyle({ left: rect.left - parentRect.left, width: rect.width });
    }
  }, [activeTab, isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const el = activeTab === 'explore' ? exploreRef.current : actionsRef.current;
      const parent = tablistRef.current;
      if (el && parent) {
        const rect = el.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        setIndicatorStyle({ left: rect.left - parentRect.left, width: rect.width });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Apple-Style Minimal Luxury Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative transition-all duration-500 ease-out">
                {/* Desktop SVG Logos - Clean minimal design */}
                <div className="hidden lg:block">
                  {/* Light Mode Logo */}
                  <img 
                    src="/images/Logos/Desktop Header SP Logo 2400 x 600 px.svg"
                    alt="StadiumPort Logo"
                    className={`h-12 w-auto object-contain transition-all duration-500 ease-out ${
                      isDarkMode ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Dark Mode Logo */}
                  <img 
                    src="/images/Logos/Desktop Header SP Logo 2400 x 600 px Night mode.svg"
                    alt="StadiumPort Logo"
                    className={`absolute top-0 left-0 h-12 w-auto object-contain transition-all duration-500 ease-out ${
                      isDarkMode ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                <div className="lg:hidden relative">
                  <img 
                    src="/images/Logos/Mobile Header Logo 180 x 180 px.svg"
                    alt="StadiumPort Logo"
                    className={`h-8 w-auto object-contain transition-all duration-500 ease-out ${
                      isDarkMode ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img 
                    src="/images/Logos/Mobile Header Logo 180 x 180 px night mode.svg"
                    alt="StadiumPort Logo"
                    className={`absolute top-0 left-0 h-8 w-auto object-contain transition-all duration-500 ease-out ${
                      isDarkMode ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </Link>

            {/* Apple-Style Minimal Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { path: '/world-cup-2026-host-cities', label: 'Host Cities' },
                { path: '/world-cup-2026-stadiums', label: 'Stadiums' },
                { path: '/travel-guides', label: 'Travel Guides' },
                { path: '/deals', label: 'Deals' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path) 
                      ? 'text-slate-900 dark:text-white' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {/* Minimal active indicator */}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900 dark:bg-white"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Apple-Style Right Actions */}
            <div className="flex items-center space-x-6">
              {/* Minimal Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                aria-label="Search"
              >
                <i className="ri-search-line text-lg"></i>
              </button>

              {/* Minimal Dark Mode Toggle */}
              <DarkModeToggle />
              
              {/* Minimal Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <i className={`text-base transition-transform duration-300 ${
                  isMenuOpen ? 'ri-close-line' : 'ri-menu-line'
                }`}></i>
              </button>
            </div>
          </div>

          {/* Apple-Style Minimal Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-3 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50">
              <div
                ref={tablistRef}
                role="tablist"
                aria-label="Mobile navigation tabs"
                className="relative mb-4 grid grid-cols-2 gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-xl"
              >
                <button
                  ref={exploreRef}
                  id="tab-explore"
                  role="tab"
                  aria-selected={activeTab === 'explore'}
                  aria-controls="tab-panel-explore"
                  tabIndex={activeTab === 'explore' ? 0 : -1}
                  onClick={() => setActiveTab('explore')}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight' || e.key === 'End') setActiveTab('actions');
                  }}
                  className={`relative z-10 w-full px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    activeTab === 'explore'
                      ? 'text-slate-900 dark:text-white bg-white dark:bg-slate-800 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="inline-flex items-center justify-center space-x-2">
                    <i className="ri-compass-3-line text-sm"></i>
                    <span>Explore</span>
                  </span>
                </button>
                <button
                  ref={actionsRef}
                  id="tab-actions"
                  role="tab"
                  aria-selected={activeTab === 'actions'}
                  aria-controls="tab-panel-actions"
                  tabIndex={activeTab === 'actions' ? 0 : -1}
                  onClick={() => setActiveTab('actions')}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft' || e.key === 'Home') setActiveTab('explore');
                  }}
                  className={`relative z-10 w-full px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    activeTab === 'actions'
                      ? 'text-slate-900 dark:text-white bg-white dark:bg-slate-800 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="inline-flex items-center justify-center space-x-2">
                    <i className="ri-rocket-line text-sm"></i>
                    <span>Actions</span>
                  </span>
                </button>
                <div
                  className="absolute bottom-1 h-0.5 bg-slate-900 dark:bg-white rounded-full transition-all duration-300"
                  style={{ width: `${indicatorStyle.width}px`, transform: `translateX(${indicatorStyle.left}px)` }}
                ></div>
              </div>

              <div
                id="tab-panel-explore"
                role="tabpanel"
                aria-labelledby="tab-explore"
                className={`${activeTab === 'explore' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none absolute'} transition-all duration-500`}
              >
                <nav className="space-y-1">
                  {[
                    { path: '/world-cup-2026-host-cities', label: 'Host Cities' },
                    { path: '/world-cup-2026-stadiums', label: 'Stadiums' },
                    { path: '/travel-guides', label: 'Travel Guides' },
                    { path: '/deals', label: 'Deals' }
                  ].map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                        isActive(item.path) 
                          ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="font-medium">{item.label}</div>
                    </Link>
                  ))}
                </nav>
              </div>

              <div
                id="tab-panel-actions"
                role="tabpanel"
                aria-labelledby="tab-actions"
                className={`${activeTab === 'actions' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none absolute'} transition-all duration-500`}
              >
                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      setIsSearchOpen(true);
                      closeMenu();
                    }}
                    className="w-full px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 text-left"
                  >
                    <div className="font-medium">Search</div>
                  </button>
                  <Link to="/deals" onClick={closeMenu}>
                    <button className="w-full px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 text-left">
                      <div className="font-medium">Start Planning</div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimal Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200/50 dark:bg-slate-800/50">
          <div 
            className="h-full bg-slate-900 dark:bg-white transition-all duration-300"
            style={{ 
              width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
            }}
          ></div>
        </div>
      </header>

      {/* Minimal Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsSearchOpen(false)}
          ></div>
          
          {/* Search Modal */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 animate-scale-in">
            {/* Search Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="relative flex-1">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                  <input
                    type="text"
                    placeholder="Search cities, stadiums, guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-transparent border-0 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none font-inter"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-80 overflow-y-auto">
              {searchQuery.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Search cities, stadiums, travel guides...</p>
                </div>
              ) : filteredResults.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">No results found</p>
                </div>
              ) : (
                <div className="py-2">
                  {filteredResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchSelect(result.path)}
                      className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${getTypeColor(result.type)}`}>
                          <i className={`${getTypeIcon(result.type)}`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {result.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {result.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
