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
    ? "text-slate-600/60 dark:text-white/60" 
    : "text-slate-500 dark:text-slate-400";
    
  const separatorClasses = isLight
    ? "text-slate-400/40 dark:text-white/40"
    : "text-slate-600 dark:text-slate-300";
    
  const activeClasses = isLight
    ? "text-slate-900 dark:text-white"
    : "text-emerald-700 dark:text-emerald-400";
    
  const linkHoverClasses = isLight
    ? "hover:text-slate-900 dark:hover:text-slate-900 dark:text-white"
    : "hover:text-emerald-600 dark:hover:text-emerald-400";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex items-center gap-2 text-sm font-medium tracking-wide uppercase flex-wrap ${containerClasses} ${className}`}
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

