'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'default' | 'light';
  className?: string;
}

export function Breadcrumb({ items, variant = 'default', className = '' }: BreadcrumbProps) {
  const isLight = variant === 'light';
  
  const containerClasses = isLight 
    ? "text-slate-900/60 dark:text-white/60" 
    : "text-slate-500 dark:text-slate-400";
    
  const separatorClasses = isLight
    ? "text-slate-900/40 dark:text-white/40"
    : "text-slate-300 dark:text-slate-700";
    
  const activeClasses = isLight
    ? "text-slate-900 dark:text-white font-bold"
    : "text-emerald-600 dark:text-emerald-400 font-bold";
    
  const linkHoverClasses = isLight
    ? "hover:text-slate-900 dark:hover:text-white transition-colors"
    : "hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "flex items-center justify-start gap-2 text-[10px] font-medium tracking-[0.25em] uppercase flex-wrap mb-12",
        containerClasses,
        className
      )}
    >
      <Link href="/" className={`${linkHoverClasses} transition-colors`}>
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.href} className="flex items-center gap-2">
            <span className={separatorClasses}>/</span>
            {isLast ? (
              <span className={activeClasses}>
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className={`${linkHoverClasses} transition-colors`}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

