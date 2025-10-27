
interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'avatar' | 'image' | 'button' | 'premium';
  width?: string;
  height?: string;
  className?: string;
  animate?: boolean;
  count?: number;
}

export function SkeletonLoader({ 
  variant = 'text', 
  width, 
  height, 
  className = '',
  animate = true,
  count = 1
}: SkeletonLoaderProps) {
  const baseClasses = `
    bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 
    dark:from-navy-800 dark:via-navy-700 dark:to-navy-800
    ${animate ? 'animate-pulse' : ''}
    rounded-2xl
  `;

  const variants = {
    text: 'h-4 rounded-lg',
    card: 'h-48 rounded-3xl',
    avatar: 'w-12 h-12 rounded-full',
    image: 'h-64 rounded-2xl',
    button: 'h-12 rounded-2xl',
    premium: 'h-32 rounded-3xl bg-gradient-to-br from-slate-200 via-emerald-100 to-gold-100 dark:from-navy-800 dark:via-emerald-900/20 dark:to-gold-900/20'
  };

  const skeletonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const style = {
    width: width || (variant === 'avatar' ? '3rem' : '100%'),
    height: height || undefined
  };

  if (count > 1) {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div 
              className={skeletonClasses} 
              style={style}
            >
              {/* Premium Shimmer Effect */}
              {animate && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              )}
            </div>
            
            {/* Additional skeleton elements for premium variant */}
            {variant === 'premium' && (
              <>
                <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-navy-700 dark:to-navy-600 rounded-lg w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-navy-700 dark:to-navy-600 rounded-lg w-1/2 animate-pulse"></div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div 
        className={skeletonClasses} 
        style={style}
      >
        {/* Premium Shimmer Effect */}
        {animate && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
        )}
        
        {/* Premium Glow Effect */}
        {variant === 'premium' && (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-gold-400/5 animate-pulse"></div>
        )}
      </div>
      
      {/* Additional skeleton elements for card variant */}
      {variant === 'card' && (
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-navy-700 dark:to-navy-600 rounded-lg w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-navy-700 dark:to-navy-600 rounded-lg w-1/2 animate-pulse"></div>
          <div className="h-8 bg-gradient-to-r from-emerald-200 to-emerald-300 dark:from-emerald-800 dark:to-emerald-700 rounded-xl w-24 animate-pulse"></div>
        </div>
      )}
    </div>
  );
}
