import React, { useEffect, useState, useRef, useCallback } from 'react';
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  useSpring, 
  animate,
  MotionValue
} from 'framer-motion';

interface ScrollScrubberProps {
  containerRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

export const ScrollScrubber: React.FC<ScrollScrubberProps> = ({ containerRef, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // For React render (UI styles)
  const isDraggingRef = useRef(false); // For event logic (no re-renders)
  const trackRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  
  // --- Motion System ---
  // 1. Raw progress (0 to 1) from scroll/drag
  const rawProgress = useMotionValue(0);
  
  // 2. Smooth progress for the "floating" feel during normal scrolling
  // We use a spring that we can "snap" instantly when dragging
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // 3. The actual value driving the thumb position
  // We switch between smooth (scroll) and raw (drag) based on interaction
  const thumbProgress = useMotionValue(0);

  // Map to percentage string for CSS
  const topPercent = useTransform(thumbProgress, [0, 1], ['0%', '100%']);

  // Interaction Springs (Scale/Opacity)
  const scaleX = useSpring(1, { stiffness: 300, damping: 25 });
  const scaleY = useSpring(1, { stiffness: 300, damping: 25 });
  const opacity = useSpring(0, { stiffness: 200, damping: 30 }); // Fade in/out

  // --- Logic ---

  // Sync Loop: Scroll Container -> Scrubber
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateFromScroll = () => {
      // If we are dragging, WE control the scroll, so ignore updates FROM the container
      if (isDraggingRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;

      // Safety check
      if (maxScroll <= 0) {
        if (isVisible) setIsVisible(false);
        return;
      }

      // Show scrubber if content is scrollable
      if (!isVisible && maxScroll > 20) setIsVisible(true);

      // Calculate progress
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      // Update Motion Values
      rawProgress.set(progress);
      // During normal scroll, we let the spring follow the raw progress
      // But we manually sync thumbProgress to the smoothSpring
      thumbProgress.set(smoothProgress.get());
    };

    // We use a high-frequency loop to sync the spring to the thumb
    // This allows us to "break" the spring connection when dragging
    const syncLoop = () => {
      if (!isDraggingRef.current) {
        thumbProgress.set(smoothProgress.get());
      }
      rafId.current = requestAnimationFrame(syncLoop);
    };
    syncLoop();

    // Listeners
    container.addEventListener('scroll', updateFromScroll, { passive: true });
    
    // Resize Observer for content changes
    const resizeObserver = new ResizeObserver(updateFromScroll);
    resizeObserver.observe(container);

    // Initial check
    updateFromScroll();

    return () => {
      container.removeEventListener('scroll', updateFromScroll);
      resizeObserver.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, isVisible, rawProgress, smoothProgress, thumbProgress]);

  // Handle Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    isDraggingRef.current = true;
    setIsDragging(true);
    
    // Capture pointer
    (e.currentTarget as Element).setPointerCapture(e.pointerId);

    // Visual Feedback
    scaleX.set(1.5); // Thicker
    scaleY.set(0.9); // Squish
    
    // Haptic
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(10);

    // Immediate update
    updateScrollFromPointer(e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    
    // Direct update (no RAF throttling for pointer to ensure 1:1 feel on high refresh displays)
    updateScrollFromPointer(e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    
    isDraggingRef.current = false;
    setIsDragging(false);
    
    // Release pointer
    (e.currentTarget as Element).releasePointerCapture(e.pointerId);

    // Reset Visuals
    scaleX.set(1);
    scaleY.set(1);

    // Re-sync motion values to prevent jump
    // We set the raw/smooth progress to current thumb position so spring doesn't snap back
    const current = thumbProgress.get();
    rawProgress.set(current);
    smoothProgress.set(current);
  };

  const updateScrollFromPointer = useCallback((clientY: number) => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const trackRect = track.getBoundingClientRect();
    // Padding logic: Allows dragging slightly above/below track to hit 0% or 100% easily
    const padding = 20; 
    const effectiveHeight = trackRect.height; // Use full height
    
    const relativeY = clientY - trackRect.top;
    
    // Calculate progress (0 to 1)
    const progress = Math.max(0, Math.min(1, relativeY / effectiveHeight));

    // 1. Update Thumb INSTANTLY (Bypass Spring)
    thumbProgress.set(progress);
    // Also update raw/smooth so they are ready when we release
    rawProgress.set(progress);
    smoothProgress.jump(progress); // Force spring to current value

    // 2. Update Container
    const maxScroll = container.scrollHeight - container.clientHeight;
    container.scrollTop = progress * maxScroll;

  }, [containerRef, thumbProgress, rawProgress, smoothProgress]);

  // Hover Effects
  const handlePointerEnter = () => {
    if (!isDraggingRef.current) {
        scaleX.set(1.2);
    }
  };

  const handlePointerLeave = () => {
    if (!isDraggingRef.current) {
        scaleX.set(1);
    }
  };

  // Update opacity based on visibility
  useEffect(() => {
    opacity.set(isVisible ? 1 : 0);
  }, [isVisible, opacity]);

  if (!isVisible) return null;

  return (
    <motion.div 
      style={{ opacity }}
      className={`fixed right-2 md:right-6 top-1/2 -translate-y-1/2 h-[50vh] z-[9999] flex items-center justify-center select-none touch-none pointer-events-none ${className}`}
      ref={trackRef}
    >
      {/* 
        HIT AREA 
        pointer-events-auto ensures we can grab this, 
        but the parent pointer-events-none lets clicks pass through the empty space around it 
      */}
      <div 
        className="absolute w-12 md:w-16 h-full cursor-grab active:cursor-grabbing pointer-events-auto flex items-center justify-center group"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {/* Track Line (Visual Only) */}
        <div className="w-[2px] h-full bg-white/10 rounded-full overflow-hidden transition-all duration-300 group-hover:bg-white/20 group-hover:w-[4px]">
            {/* Optional Fill */}
            {/* <motion.div className="w-full bg-indigo-500 origin-top" style={{ height: topPercent }} /> */}
        </div>
      </div>

      {/* Thumb (Visual Only) - Positioned absolutely relative to the container */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 w-1.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] pointer-events-none backdrop-blur-md"
        style={{ 
            top: topPercent, 
            y: '-50%', // Center thumb on the point
            height: 64, // Fixed height thumb for cleaner look
            scaleX,
            scaleY
        }}
      >
          {/* Texture Lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
             <div className="w-3 h-[1px] bg-black"></div>
             <div className="w-3 h-[1px] bg-black"></div>
             <div className="w-3 h-[1px] bg-black"></div>
          </div>
      </motion.div>

      {/* Label (Visual Only) */}
      <motion.div
        className="absolute right-10 pointer-events-none flex items-center"
        style={{ 
            top: topPercent, 
            y: '-50%' 
        }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ 
            opacity: isDragging ? 1 : 0,
            x: isDragging ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-black/80 text-white text-[10px] font-bold tracking-widest py-1 px-3 rounded-md border border-white/10 shadow-xl whitespace-nowrap backdrop-blur-md">
            SCROLL
        </div>
        <div className="w-2 h-[1px] bg-white/50 ml-1"></div>
      </motion.div>

    </motion.div>
  );
};
