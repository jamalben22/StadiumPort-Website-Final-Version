import React, { useEffect, useRef, useState } from 'react';
import { lqipManifest } from '../../utils/lqipManifest';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string; // wrapper class
  imgClassName?: string; // image class
  sizes?: string; // responsive sizes hint
  width?: number; // intrinsic width to prevent CLS
  height?: number; // intrinsic height to prevent CLS
  priority?: boolean; // eager load for above-the-fold
  fetchpriority?: 'high' | 'low' | 'auto'; // browser hint for loading priority
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string; // optional explicit blur data url
  disableSrcSet?: boolean; // optionally disable srcset generation when variants are unavailable
};

// Generate a deterministic blur placeholder based on the src string.
// This avoids needing build-time LQIP while still providing a nice blur-up effect.
function generateBlurDataURL(src: string): string {
  // Hash the src to pick gradient colors deterministically
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

function buildSrcSet(src: string): string {
  // Construct srcset using generated variants: -640.webp, -1024.webp, -1600.webp
  const match = src.match(/^(.*)\.(?:webp|jpg|jpeg|png)$/);
  if (!match) return src;
  const base = match[1];
  const v640 = `${base}-640.webp`;
  const v1024 = `${base}-1024.webp`;
  const v1600 = `${base}-1600.webp`;
  return `${v640} 640w, ${v1024} 1024w, ${v1600} 1600w`;
}

export function OptimizedImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  width = 1600,
  height = 900,
  priority = false,
  fetchpriority = 'auto',
  placeholder = 'blur',
  blurDataURL: blurDataURLProp,
  disableSrcSet = false,
}: OptimizedImageProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(priority);
  const [loaded, setLoaded] = useState(false);
  const isExternal = /^https?:\/\//.test(src) || src.startsWith('data:');
  const [blurDataURL] = useState(() => {
    if (blurDataURLProp) return blurDataURLProp;
    // Avoid generating blur for external URLs or non-local images
    if (isExternal) return '';
    const fromManifest = lqipManifest[src];
    return fromManifest || generateBlurDataURL(src);
  });

  useEffect(() => {
    if (priority) return; // eager load above-the-fold

    const node = wrapperRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px', threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [priority]);

  const srcSet = (disableSrcSet || isExternal) ? undefined : buildSrcSet(src);

  return (
    <div ref={wrapperRef} className={className}>
      {/* Blur placeholder layer */}
      {placeholder === 'blur' && blurDataURL && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            opacity: loaded ? 0 : 1,
            transition: 'opacity 500ms ease',
          }}
        />
      )}

      {/* Real image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : fetchpriority}
          decoding="async"
          width={width}
          height={height}
          srcSet={srcSet}
          sizes={sizes}
          className={`object-cover w-full h-full ${imgClassName ?? ''}`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}

export default OptimizedImage;