"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { DarkModeToggle } from '../base/DarkModeToggle';
import { SearchModal } from './SearchModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  // Keyboard Shortcut for Search (Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    { label: 'Host Cities', path: '/world-cup-2026-host-cities' },
    { label: 'Stadiums', path: '/world-cup-2026-stadiums' },
    { label: 'Draw Hub', path: '/world-cup-2026-draw-travel-hub' },
    { label: 'Predictor', path: '/world-cup-2026-prediction-game' },
  ];

  // Hide header on prediction game pages
  if (pathname?.startsWith('/world-cup-2026-prediction-game')) {
    return null;
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled 
            ? 'h-14 lg:h-16 bg-[#F5F5F7]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10' 
            : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link href="/" className="relative z-50 group" aria-label="Stadiumport Home">
             <div className="relative">
                {/* Desktop Logo */}
                <div className="hidden lg:block">
                  <img 
                    src="https://stadiumport.com/images/Logos/Desktop Header SP Logo 2400 x 600 px.svg"
                    alt="Stadiumport"
                    className={`h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img 
                    src="https://stadiumport.com/images/Logos/Desktop Header SP Logo 2400 x 600 px Night mode.svg"
                    alt="Stadiumport"
                    className={`absolute top-0 left-0 h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
                {/* Mobile Logo */}
                <div className="lg:hidden">
                   <img 
                    src="https://stadiumport.com/images/Logos/Mobile Header Logo 180 x 180 px.svg"
                    alt="Stadiumport"
                    className={`h-8 w-auto object-contain transition-all duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img 
                    src="https://stadiumport.com/images/Logos/Mobile Header Logo 180 x 180 px night mode.svg"
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
                href={item.path}
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
              className="group p-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={2} className="group-hover:stroke-[2.5px] transition-all" />
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
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
