import React from 'react';

export const GroupStageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="flex flex-col h-full bg-[#0A0A0C] backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-pulse isolate relative">
          {/* Background layers to match real cards */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />

          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
             <div className="w-16 h-6 bg-white/10 rounded"></div>
             <div className="w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
          <div className="p-2 space-y-1">
             {[...Array(4)].map((_, j) => (
               <div key={j} className="h-10 bg-white/5 rounded-lg w-full border border-white/5"></div>
             ))}
          </div>
        </div>
      ))}
    </div>
  );
};
