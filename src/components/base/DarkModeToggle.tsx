
import { useState, useEffect } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsAnimating(true);
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
    
    // Reset animation state
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FBBF24]/40 border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl hover:bg-white/90 dark:hover:bg-slate-900/60 shadow-md hover:shadow-lg"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className={`transition-transform duration-200 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        <i className={`${isDark ? 'ri-moon-line text-slate-200' : 'ri-sun-line text-[#FBBF24]'} text-lg`}></i>
      </div>
      {isAnimating && (
        <div className="absolute inset-0 rounded-full border border-[#FBBF24]/40 animate-ping opacity-75"></div>
      )}
    </button>
  );
}
