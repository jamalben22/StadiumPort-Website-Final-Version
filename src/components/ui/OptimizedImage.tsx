import React from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface OptimizedImageProps extends LazyLoadImageProps {
  className?: string;
}

/**
 * Smart Image component that uses lazy loading and blur-up effect.
 * Replaces standard <img> tags for better performance.
 */
export function OptimizedImage({ className, effect = 'blur', ...props }: OptimizedImageProps) {
  return (
    <LazyLoadImage
      className={cn("transition-opacity duration-500", className)}
      effect={effect}
      wrapperProps={{
        style: { display: 'inline-block' } // Ensures wrapper behaves like an image
      }}
      {...props}
    />
  );
}
