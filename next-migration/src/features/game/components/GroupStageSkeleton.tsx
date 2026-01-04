import React from 'react';

export const GroupStageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="flex flex-col h-full bg-white/90 backdrop-blur-2xl rounded-2xl border border-black/10 overflow-hidden shadow-lg ring-1 ring-black/5 animate-pulse">
          <div className="px-4 py-3 border-b border-black/10 flex items-center justify-between bg-black/5">
             <div className="w-16 h-6 bg-slate-200 rounded"></div>
             <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
          </div>
          <div className="p-2 space-y-1">
             {[...Array(4)].map((_, j) => (
               <div key={j} className="h-10 bg-slate-100 rounded-lg w-full"></div>
             ))}
          </div>
        </div>
      ))}
    </div>
  );
};
