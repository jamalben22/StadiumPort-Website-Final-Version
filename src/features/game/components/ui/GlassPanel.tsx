import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassPanel = ({ children, className }: GlassPanelProps) => {
  return (
    <div
      className={cn(
        "bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transform-gpu",
        className
      )}
    >
      {children}
    </div>
  );
};
