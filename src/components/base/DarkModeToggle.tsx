
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
      className="group relative w-16 h-8 rounded-full p-1 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-navy-900 overflow-hidden"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' 
          : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Premium Background Glow */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-r from-navy-600 to-slate-700 shadow-inner' 
          : 'bg-gradient-to-r from-slate-100 to-slate-200 shadow-inner'
      }`}></div>

      {/* Ultra Premium Toggle Knob */}
      <div
        className={`relative w-6 h-6 rounded-full transition-all duration-500 transform flex items-center justify-center overflow-hidden ${
          isDark ? 'translate-x-8' : 'translate-x-0'
        } ${isAnimating ? 'scale-110' : 'scale-100'} group-hover:scale-110`}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
            : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)',
          boxShadow: isDark
            ? '0 4px 12px rgba(251, 191, 36, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
            : '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
        }}
      >
        {/* Premium Icon with Smooth Transition */}
        <div className="relative w-full h-full flex items-center justify-center">
          <i className={`absolute transition-all duration-500 ${
            isDark 
              ? 'ri-moon-line text-navy-900 opacity-100 scale-100 rotate-0' 
              : 'ri-moon-line text-navy-900 opacity-0 scale-50 rotate-180'
          }`}></i>
          <i className={`absolute transition-all duration-500 ${
            !isDark 
              ? 'ri-sun-line text-orange-600 opacity-100 scale-100 rotate-0' 
              : 'ri-sun-line text-orange-600 opacity-0 scale-50 -rotate-180'
          }`}></i>
        </div>

        {/* Premium Shimmer Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </div>

      {/* Premium Stars Animation for Dark Mode */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1 left-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Premium Sun Rays for Light Mode */}
      {!isDark && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-2 bg-gradient-to-t from-yellow-400 to-transparent opacity-30"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '50% 100%',
                transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                animation: `pulse 2s ease-in-out infinite ${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Premium Hover Glow */}
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isDark 
          ? 'shadow-glow-lg' 
          : 'shadow-gold-glow-lg'
      }`}></div>

      {/* Ultra Premium Click Ripple */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-75"></div>
      )}
    </button>
  );
}
