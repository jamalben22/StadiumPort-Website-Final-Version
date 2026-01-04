'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    ? "text-slate-900/30 dark:text-white/30" 
    : "text-slate-500/30 dark:text-slate-400/30";
    
  const separatorClasses = isLight
    ? "opacity-30 dark:opacity-20"
    : "opacity-30 dark:opacity-20";
    
  const activeClasses = isLight
    ? "text-slate-900/60 dark:text-white/60"
    : "text-emerald-700/60 dark:text-emerald-400/60";
    
  const linkHoverClasses = isLight
    ? "hover:text-slate-900 dark:hover:text-white transition-colors"
    : "hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.25em] uppercase flex-wrap ${containerClasses} ${className}`}
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

