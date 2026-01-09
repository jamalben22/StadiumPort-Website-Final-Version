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
        "bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl transform-gpu",
        className
      )}
    >
      {children}
    </div>
  );
};
