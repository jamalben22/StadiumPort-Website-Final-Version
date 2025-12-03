
interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'gold' | 'white' | 'premium';
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'primary', 
  text,
  fullScreen = false,
  overlay = false
}: LoadingSpinnerProps) {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variants = {
    primary: 'border-[#01b47d] border-t-transparent',
    secondary: 'border-slate-400 border-t-transparent',
    gold: 'border-gold-400 border-t-transparent',
    white: 'border-white border-t-transparent',
    premium: 'border-gradient-to-r from-[#01b47d] to-gold-400 border-t-transparent'
  };

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Premium Multi-Ring Spinner */}
      <div className="relative">
        {/* Outer Ring */}
        <div className={`${sizes[size]} border-4 ${variants[variant]} rounded-full animate-spin`}></div>
        
        {/* Middle Ring */}
        <div className={`absolute inset-1 ${sizes[size === 'xs' ? 'xs' : size === 'sm' ? 'xs' : 'sm']} border-2 border-[#01b47d] border-t-transparent rounded-full animate-spin`} 
             style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        
        {/* Inner Ring */}
        <div className={`absolute inset-2 ${sizes[size === 'xs' ? 'xs' : size === 'sm' ? 'xs' : size === 'md' ? 'xs' : 'sm']} border border-gold-400 border-t-transparent rounded-full animate-spin`}
             style={{ animationDuration: '0.8s' }}></div>
        
        {/* Center Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#01b47d]/20 to-gold-400/20 animate-pulse"></div>
      </div>

      {/* Premium Loading Text */}
      {text && (
        <div className="text-center">
          <p className={`${textSizes[size]} font-inter font-medium text-slate-600 dark:text-slate-300 animate-pulse`}>
            {text}
          </p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-[#01b47d] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#01b47d] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[#01b47d] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl">
        <div className="text-center">
          {spinner}
          {!text && (
            <p className="mt-6 text-lg font-inter font-medium text-slate-600 dark:text-slate-300">
              Loading your premium experience...
            </p>
          )}
        </div>
      </div>
    );
  }

  if (overlay) {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-navy-900/60 backdrop-blur-sm rounded-3xl">
        {spinner}
      </div>
    );
  }

  return spinner;
}
