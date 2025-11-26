import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy-900 z-50">
      <div className="relative flex flex-col items-center">
        {/* Outer rotating ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-500"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner pulsing globe icon */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <i className="ri-earth-line text-2xl"></i>
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
}
