"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setIsAnimating(true);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    
    // Animation effect
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleDarkMode}
      className="group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FBBF24]/40 border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl hover:bg-white/90 dark:hover:bg-slate-900/60 shadow-md hover:shadow-lg"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className={`transition-transform duration-200 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        {isDark ? (
          <Moon className="text-slate-200 w-5 h-5" />
        ) : (
          <Sun className="text-[#FBBF24] w-5 h-5" />
        )}
      </div>
      {isAnimating && (
        <div className="absolute inset-0 rounded-full border border-[#FBBF24]/40 animate-ping opacity-75"></div>
      )}
    </button>
  );
}
