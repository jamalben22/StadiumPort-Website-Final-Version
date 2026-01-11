import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useGame } from '../context/GameContext';
import { TEAMS, TEAM_MAP, GROUPS } from '../lib/wc26-data';
import { soundManager } from '../utils/SoundManager';
import { RulesCard } from './RulesCard';
import { SEO } from '../../../components/common/SEO';
import { SchemaOrg } from '../../../components/seo/SchemaOrg';
import { Info } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

const GROUP_ACCENTS: Record<string, string> = {
  A: '#FBBF24',
  B: '#22D3EE',
  C: '#A78BFA',
  D: '#F472B6',
  E: '#10B981',
  F: '#FB7185',
  G: '#F59E0B',
  H: '#34D399',
  I: '#60A5FA',
  J: '#C084FC',
  K: '#F43F5E',
  L: '#14B8A6'
};

const SORTED_GROUP_IDS = Object.keys(GROUPS).sort();

const withAlpha = (hex: string, alphaHex: string) => (hex.length === 7 ? hex + alphaHex : hex);

// Logic-Based Styling - Extracted for performance
const getStatusStyles = (idx: number) => {
  switch (idx) {
    case 0: // 1st Place (Qualified)
    case 1: // 2nd Place (Qualified)
      return {
        wrapper: "bg-white/5 border-white/10 opacity-100 shadow-sm",
        accentBar: "bg-[#01b47d] shadow-[0_0_8px_rgba(16,185,129,0.4)]",
        text: "text-white font-semibold",
        rank: "text-slate-400",
        badge: {
          text: "QLF",
          style: "bg-[#01b47d]/20 text-[#01b47d] border border-[#01b47d]/20 shadow-[0_0_6px_rgba(16,185,129,0.1)]"
        }
      };
    case 2: // 3rd Place
      return {
        wrapper: "bg-amber-500/5 border-amber-500/20",
        accentBar: "bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.2)]",
        text: "text-amber-400 font-bold",
        rank: "text-amber-500/70",
        badge: {
          text: "3RD",
          style: "bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold"
        }
      };
    default: // 4th Place (Eliminated)
      return {
        wrapper: "bg-red-500/5 border-red-500/20 opacity-80",
        accentBar: "bg-red-600",
        text: "text-red-400 font-bold",
        rank: "text-red-500/70",
        badge: {
          text: "X",
          style: "bg-red-600/20 text-red-400 border border-red-500/30 font-bold"
        }
      };
  }
};

const PLAYOFF_INFO: Record<string, string> = {
    'pod': "Playoff D Winner - One of: Denmark, Ireland, Czech Republic, or North Macedonia",
    'poa': "Playoff A Winner - One of: Bosnia and Herzegovina, Italy, Wales or Northern Ireland",
    'poc': "Playoff C Winner - One of: Slovakia, Kosovo, Turkey or Romania",
    'pob': "Playoff B Winner - One of: Ukraine, Poland, Albania or Sweden",
    'po2': "Playoff 2 Winner - One of: Bolivia, Iraq or Suriname",
    'po1': "Playoff 1 Winner - One of: Jamaica, Democratic Republic of the Congo or New Caledonia"
};

// --- Sortable Team Item Component (Refactored for Official App Status System) ---
interface SortableTeamItemProps {
  id: string;
  index: number;
}

const SortableTeamItem = React.memo(({ id, index }: SortableTeamItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const team = TEAM_MAP.get(id);

  const style = useMemo(() => ({
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
    willChange: isDragging ? 'transform, opacity' : 'transform',
    // GPU Acceleration Enforcers
    backfaceVisibility: 'hidden' as const,
    WebkitBackfaceVisibility: 'hidden' as const,
    perspective: 1000,
    WebkitPerspective: 1000,
    translateZ: 0,
  }), [transform, transition, isDragging]);

  const status = useMemo(() => getStatusStyles(index), [index]);

  if (!team) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        relative h-12 mb-2 rounded-lg flex items-center pl-0 pr-3 overflow-hidden
        border transition-all duration-300 ease-out touch-none select-none group
        ${isDragging ? 'opacity-95 scale-[1.03] shadow-2xl z-50 ring-1 ring-white/20 bg-[#1e293b] cursor-grabbing' : status.wrapper}
      `}
    >
      {/* Status Accent Bar (Left Edge) */}
      <div className={`w-1 h-full mr-3 ${status.accentBar}`} />

      {/* Grip Handle (Subtle, elegant dots) */}
      <div className="mr-3 opacity-20 group-hover:opacity-50 transition-opacity duration-300 cursor-grab active:cursor-grabbing p-1">
        <div className="grid grid-cols-2 gap-[2px]">
           <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
           <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
           <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
           <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
           <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
           <div className="w-[2px] h-[2px] bg-white rounded-full"></div>
        </div>
      </div>

      {/* Rank Indicator */}
      <div className={`
        w-5 text-sm font-mono font-bold mr-3 text-center
        ${status.rank}
      `}>
        {index + 1}
      </div>

      {/* Flag */}
      <div className="relative w-7 h-5 rounded-[3px] overflow-hidden shadow-sm mr-3 ring-1 ring-white/10 flex items-center justify-center bg-white/5">
        {team.flagUrl ? (
          <Image 
            src={team.flagUrl} 
            alt={team.name} 
            fill
            sizes="28px"
            className="object-cover" 
            draggable={false} 
          />
        ) : ['poa', 'pob', 'poc', 'pod', 'po1', 'po2'].includes(team.id) ? (
          <span className={`text-[8px] font-bold tracking-tighter uppercase ${index === 2 ? 'text-amber-400/70' : 'text-white'}`}>FIFA</span>
        ) : (
          <span className={`text-[10px] font-bold tracking-tighter ${index === 2 ? 'text-amber-400/70' : 'text-white'}`}>{team.fifaCode}</span>
        )}
      </div>

      {/* Name */}
      <div className={`flex-1 font-sans text-sm tracking-wide truncate ${status.text} flex items-center gap-2 overflow-hidden`}>
        <span className="truncate">{team.name}</span>
        {PLAYOFF_INFO[team.id] && (
          <Tooltip.Provider delayDuration={0}>
             <Tooltip.Root>
                <Tooltip.Trigger asChild>
                   <button 
                       className="inline-flex items-center justify-center p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none shrink-0"
                       onClick={(e) => e.stopPropagation()} // Prevent drag start on click
                       onPointerDown={(e) => e.stopPropagation()} // Prevent drag start on touch
                   >
                      <Info className={`w-3.5 h-3.5 hover:text-white text-white/70 ${index === 2 ? 'text-amber-400/60' : 'text-white/70'}`} />
                   </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                   <Tooltip.Content 
                       className="z-[9999] max-w-[250px] bg-[#0A0A0C] border border-white/10 text-white text-xs p-3 rounded-lg shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 select-none"
                       sideOffset={5}
                       side="top"
                   >
                      {PLAYOFF_INFO[team.id]}
                      <Tooltip.Arrow className="fill-[#0A0A0C]" />
                   </Tooltip.Content>
                </Tooltip.Portal>
             </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>

      {/* Spacer (Flex-1 above handles this) */}

      {/* Status Badge */}
      <div className={`
        px-2.5 py-[3px] rounded-full text-[9px] font-bold tracking-widest uppercase shadow-sm
        ${status.badge.style}
      `}>
        {status.badge.text}
      </div>
    </div>
  );
});

// --- Direct Grid Group Card ---
interface DirectGroupCardProps {
  groupId: string;
  teams: string[];
}

const DirectGroupCard = React.memo(({ groupId, teams }: DirectGroupCardProps) => {
  const accent = GROUP_ACCENTS[groupId] || '#FBBF24';
  
  const headerBadgeStyle = useMemo(() => ({
    border: `1px solid ${withAlpha(accent, '33')}`,
    background: `linear-gradient(90deg, ${withAlpha(accent, '1A')}, rgba(255,255,255,0.02))`
  }), [accent]);

  const dotStyle = useMemo(() => ({ backgroundColor: accent }), [accent]);

  return (
    <div className="flex flex-col h-full bg-[#0A0A0C] backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl isolate relative">
      {/* Background layers to match reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />

      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
        <div className="relative">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={headerBadgeStyle}
          >
            <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_currentColor]" style={dotStyle} />
            <span className="font-['Teko'] text-lg uppercase tracking-widest text-white leading-none">
              Group {groupId}
            </span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <SortableContext
          items={teams}
          strategy={verticalListSortingStrategy}
        >
          {teams.map((teamId, index) => (
            <SortableTeamItem
              key={teamId}
              id={teamId}
              index={index}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
});

// --- Main GroupStage Component (Direct Grid Dashboard) ---
export const GroupStage = () => {
  const { groupStandings, completedGroupIds, updateGroupStandings, markGroupCompleted } = useGame();
  
  // Sensors for DnD
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Optimized for 60fps feel (Apple-like responsiveness)
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId !== overId) {
      // Find which group these teams belong to
      const groupId = SORTED_GROUP_IDS.find(gid => groupStandings[gid]?.includes(activeId));
      
      if (groupId) {
         const currentTeams = groupStandings[groupId];
         if (!currentTeams) return;

         const oldIndex = currentTeams.indexOf(activeId);
         const newIndex = currentTeams.indexOf(overId);
         
         // Only if valid indices
         if (oldIndex !== -1 && newIndex !== -1) {
             const newOrder = arrayMove(currentTeams, oldIndex, newIndex);
             updateGroupStandings(groupId, newOrder);
             
             if (!completedGroupIds.includes(groupId)) {
                 markGroupCompleted(groupId);
                 soundManager.play('success');
             }
         }
      }
    }
  }, [groupStandings, updateGroupStandings, completedGroupIds, markGroupCompleted]);

  return (
    <>
      <SEO 
        title="World Cup 2026 Group Stage Predictor | Free Bracket Challenge"
        description="Predict the 2026 World Cup group stage standings! Rank all 48 teams across 12 groups in the ultimate FIFA World Cup prediction game. Win prizes!"
        keywords={["World Cup 2026 group stage", "prediction game", "FIFA 2026 bracket", "group predictor", "soccer bracket challenge"]}
        url="/world-cup-2026-prediction-game"
      />
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        "name": "World Cup 2026 Group Stage Prediction",
        "description": "Predict the group stage standings for the 2026 FIFA World Cup. Rank 48 teams in 12 groups.",
        "url": "https://stadiumport.com/world-cup-2026-prediction-game",
        "image": "https://stadiumport.com/images/hub-pages/FIFA-World-Cup-26-qualified-teams-wallchart-graphic.webp",
        "organizer": {
          "@type": "Organization",
          "name": "stadiumport",
          "url": "https://stadiumport.com"
        },
        "performer": {
          "@type": "Organization",
          "name": "stadiumport Prediction Contestants"
        },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "startDate": "2026-06-11",
        "endDate": "2026-06-27",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://stadiumport.com/world-cup-2026-prediction-game"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://stadiumport.com/world-cup-2026-prediction-game",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-06-11T09:00:00Z"
        }
      }} />

      <div className="w-full px-4 md:px-6 lg:px-8 pt-24 pb-32 md:pt-28">
       <div className="mb-6 flex justify-center">
         <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
           <span className="relative flex h-2 w-2">
             <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
           </span>
           <span className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.22em] font-['Rajdhani']">
             Step 1 of 5: Group Stage Predictions
           </span>
         </div>
       </div>
       {/* Dashboard Header */}
       <div className="text-center mb-8 pt-4">
          <RulesCard variant="short" className="max-w-2xl mx-auto mb-8" />
         <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-2">
           Group Stage: Predict All 12 Groups
         </h2>
       <p className="text-slate-300 font-mono text-xs tracking-widest uppercase font-bold">
          Drag & Drop Teams to Set Your Rankings • Top 2 + Best 8 Third-Place Teams Advance to Round of 32
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 1: New 2026 Format */}
          <div className="relative group bg-[#0A0A0C] border border-white/10 rounded-[24px] md:rounded-[28px] p-5 md:p-6 shadow-2xl overflow-hidden isolate">
            {/* PREMIUM BACKGROUND LAYERS */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 -z-10" />
            
            <div className="absolute -top-24 -left-24 w-52 h-52 bg-[#01b47d]/10 blur-[80px] rounded-full pointer-events-none" />
            <h4 className="text-center text-white font-['Rajdhani'] text-sm md:text-base font-extrabold uppercase tracking-[0.2em] mb-2">New 2026 Format</h4>
            <div className="mx-auto mb-3 w-24 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-slate-200 font-['Rajdhani'] text-sm md:text-base">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span>48 teams divided into 12 groups of 4</span>
              </div>
              <div className="flex items-start gap-2 text-slate-200 font-['Rajdhani'] text-sm md:text-base">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span>Top 2 from each group automatically advance (24 teams)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-200 font-['Rajdhani'] text-sm md:text-base">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span>Best 8 third-place teams also qualify (8 teams)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-200 font-['Rajdhani'] text-sm md:text-base">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span>Total: 32 teams advance to knockout rounds</span>
              </div>
            </div>
          </div>

          {/* Card 2: How Rankings Work */}
          <div className="relative group bg-[#0A0A0C] border border-white/10 rounded-[24px] md:rounded-[28px] p-5 md:p-6 shadow-2xl overflow-hidden isolate">
            {/* PREMIUM BACKGROUND LAYERS */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0A0A0C] to-[#1e1b4b] -z-10" />
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 -z-10" />
            
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-purple-400/10 blur-[80px] rounded-full pointer-events-none" />
            <h4 className="text-center text-white font-['Rajdhani'] text-sm md:text-base font-extrabold uppercase tracking-[0.2em] mb-2">How Rankings Work</h4>
            <div className="mx-auto mb-3 w-24 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
            <div className="space-y-2 text-slate-200 font-['Rajdhani'] text-sm md:text-base">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span><span className="font-bold text-amber-400">1st Place</span> – Group Winner (automatic qualification)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span><span className="font-bold text-amber-400">2nd Place</span> – Group Runner-up (automatic qualification)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span><span className="font-bold text-amber-400">3rd Place</span> – May qualify as one of 8 best third-place teams</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span><span className="font-bold text-red-400">4th Place</span> – Eliminated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight">
          Rank all 4 teams in each group below (1st to 4th place)
        </h3>
      </div>
      {/* Direct Grid */}
      <DndContext
         sensors={sensors}
         collisionDetection={closestCenter}
         onDragEnd={handleDragEnd}
       >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto w-full px-4 md:px-6">
              {SORTED_GROUP_IDS.map((groupId) => (
                <DirectGroupCard
                  key={groupId}
                  groupId={groupId}
                  teams={groupStandings[groupId] || []}
                />
              ))}
          </div>
       </DndContext>

       {/* Full Rules & SEO Content */}
       <div className="mt-16 px-4">
          <RulesCard variant="full" className="max-w-4xl mx-auto" />
       </div>
    </div>
    </>
  );
};

export default GroupStage;

