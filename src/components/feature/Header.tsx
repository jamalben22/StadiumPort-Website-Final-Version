import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, Globe, MapPin, Building2, Users, Trophy, Plane } from 'lucide-react';
import { DarkModeToggle } from '../base/DarkModeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  // Search data
  const searchData = [
    // Groups
    { type: 'page', title: 'Groups', path: '/world-cup-2026-groups', description: 'World Cup 2026 Groups, Teams & Schedule' }
  ];

  // Search Logic
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

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark Mode Detection
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when menu/search is open
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isSearchOpen]);

  // Navigation Items
  const navItems = [
    { label: 'Groups', path: '/world-cup-2026-groups' },
    { label: 'Draw Hub', path: '/2026-world-cup-draw-travel-hub' },
    { label: 'Predictor', path: '/world-cup-2026-prediction-game' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled 
            ? 'h-14 lg:h-16 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10' 
            : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link to="/" className="relative z-50 group" aria-label="Stadiumport Home">
             <div className="relative">
                {/* Desktop Logo */}
                <div className="hidden lg:block">
                  <img 
                    src="/images/Logos/Desktop Header SP Logo 2400 x 600 px.svg"
                    alt="Stadiumport"
                    className={`h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img 
                    src="/images/Logos/Desktop Header SP Logo 2400 x 600 px Night mode.svg"
                    alt="Stadiumport"
                    className={`absolute top-0 left-0 h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
                {/* Mobile Logo */}
                <div className="lg:hidden">
                   <img 
                    src="/images/Logos/Mobile Header Logo 180 x 180 px.svg"
                    alt="Stadiumport"
                    className={`h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img 
                    src="/images/Logos/Mobile Header Logo 180 x 180 px night mode.svg"
                    alt="Stadiumport"
                    className={`absolute top-0 left-0 h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
             </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] font-medium tracking-wide transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-black dark:text-white opacity-100'
                    : 'text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            
            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2} />
            </button>

            {/* Dark Mode Toggle */}
            <div className="hidden sm:block">
               <DarkModeToggle />
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2 text-slate-900 dark:text-white relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-medium tracking-tight text-slate-900 dark:text-white flex items-center justify-between group border-b border-slate-100 dark:border-white/10 pb-4`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
                <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between mb-8">
               <span className="text-sm text-slate-500 font-medium">Appearance</span>
               <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
          <div 
            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl transition-opacity duration-300"
            onClick={() => setIsSearchOpen(false)}
          />
          
          <div className="relative w-full max-w-2xl bg-transparent animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                autoFocus
                placeholder="Search cities, stadiums, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-12 text-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-2xl"
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={20} />
              </button>
            </div>

            {searchQuery && (
              <div className="mt-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden max-h-[60vh] overflow-y-auto">
                {filteredResults.length > 0 ? (
                  <div className="py-2">
                    {filteredResults.map((result, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearchSelect(result.path)}
                        className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center gap-4 group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                           {result.type === 'city' && <MapPin size={18} />}
                           {result.type === 'stadium' && <Building2 size={18} />}
                           {result.type === 'page' && <Trophy size={18} />}
                           {result.type === 'guide' && <Plane size={18} />}
                           {result.type === 'article' && <Globe size={18} />}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {result.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                            {result.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
