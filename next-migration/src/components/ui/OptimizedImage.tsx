'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type OptimizedImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  className?: string; // wrapper class
  imgClassName?: string; // image class
  containerClassName?: string; // alias for className
  useSkeleton?: boolean;
  fallbackSrc?: string;
};

// Generate a deterministic blur placeholder based on the src string.
function generateBlurDataURL(src: string): string {
  let hash = 0;
  for (let i = 0; i < src.length; i++) {
    hash = (hash << 5) - hash + src.charCodeAt(i);
    hash |= 0;
  }
  const hueA = Math.abs(hash % 360);
  const hueB = (hueA + 60) % 360;
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 56'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='hsl(${hueA},70%,30%)' />
          <stop offset='100%' stop-color='hsl(${hueB},70%,25%)' />
        </linearGradient>
      </defs>
      <rect width='100' height='56' fill='url(#g)'/>
    </svg>`
  );
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  imgClassName,
  width,
  height,
  priority = false,
  placeholder = 'blur',
  blurDataURL: blurDataURLProp,
  fill,
  sizes,
  useSkeleton = false,
  fallbackSrc,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  
  const [blurDataURL] = useState(() => {
    if (blurDataURLProp) return blurDataURLProp;
    if (placeholder !== 'blur') return undefined;
    return generateBlurDataURL(src);
  });

  const wrapperClass = containerClassName || className || '';

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-slate-100 dark:bg-slate-800', 
        wrapperClass,
        fill ? 'w-full h-full' : ''
      )} 
      style={!fill && width && height ? { width: width, height: height } : undefined}
    >
      <Image
        src={imgSrc}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
          imgClassName
        )}
        width={!fill ? (typeof width === 'string' ? parseInt(width) : width) : undefined}
        height={!fill ? (typeof height === 'string' ? parseInt(height) : height) : undefined}
        fill={fill}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder === 'empty' ? 'empty' : 'blur'}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;
