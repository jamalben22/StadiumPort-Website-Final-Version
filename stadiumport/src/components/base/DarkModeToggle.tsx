"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleDarkMode}
      className="group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-90 focus:outline-none border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl shadow-sm hover:bg-white dark:hover:bg-[#2C2C2E]"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon - Visible in Light Mode */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isDark 
            ? 'opacity-0 rotate-90 scale-50' 
            : 'opacity-100 rotate-0 scale-100'
        }`}
      >
        <Sun className="w-[1.2rem] h-[1.2rem] text-black/80 stroke-[1.5px]" />
      </div>

      {/* Moon Icon - Visible in Dark Mode */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isDark 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-90 scale-50'
        }`}
      >
        <Moon className="w-[1.2rem] h-[1.2rem] text-white/90 stroke-[1.5px]" />
      </div>
    </button>
  );
}
