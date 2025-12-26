import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'danger';
}

export const NeonButton = ({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}: NeonButtonProps) => {
  return (
    <button
      className={cn(
        // Base styles
        "relative px-6 py-3 font-bold uppercase tracking-wider transition-all duration-200 group",
        "bg-white/5 backdrop-blur-md border border-white/20 rounded-xl",
        
        // Hover effects (Text & Border only)
        "hover:border-[#FBBF24]/50 hover:text-[#FBBF24]",
        
        // Click effects
        "active:scale-95",
        
        // Disabled state
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        
        className
      )}
      {...props}
    >
      {/* Optimized Glow Layer (Opacity vs Box-Shadow) */}
      <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.5)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
