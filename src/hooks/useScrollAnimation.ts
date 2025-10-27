
import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }, delay);
          } else if (!triggerOnce) {
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Add initial classes
    element.classList.add('scroll-reveal');
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return elementRef;
}

// Premium scroll animation hook with multiple animation types
export function usePremiumScrollAnimation(
  animationType: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'blur-in' = 'fade-up',
  options: UseScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      triggerOnce = true,
      delay = 0
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animationType}`);
              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }, delay);
          } else if (!triggerOnce) {
            entry.target.classList.remove(`animate-${animationType}`);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = getInitialTransform(animationType);
    
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationType, options]);

  return elementRef;
}

function getInitialTransform(animationType: string): string {
  switch (animationType) {
    case 'fade-up':
      return 'translateY(40px)';
    case 'slide-left':
      return 'translateX(100px)';
    case 'slide-right':
      return 'translateX(-100px)';
    case 'scale-in':
      return 'scale(0.9)';
    case 'blur-in':
      return 'scale(1.1)';
    default:
      return 'translateY(0)';
  }
}

// Staggered animation hook for lists
export function useStaggeredAnimation(
  itemSelector: string = '.stagger-item',
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      triggerOnce = true,
      staggerDelay = 100
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(itemSelector);
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-up');
              }, index * staggerDelay);
            });
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Set initial state for all items
    const items = container.querySelectorAll(itemSelector);
    items.forEach((item) => {
      item.classList.add('opacity-0', 'translate-y-8');
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [itemSelector, options]);

  return containerRef;
}

// Parallax scroll hook
export function useParallaxScroll(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return elementRef;
}
