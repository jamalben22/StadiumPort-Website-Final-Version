import React, { useState } from 'react';
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
import { TEAMS } from '../lib/wc26-data';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/SoundManager';
import { RulesCard } from './RulesCard';

// --- Sortable Team Item Component (Refactored for Official App Status System) ---
interface SortableTeamItemProps {
  id: string;
  index: number;
}

const SortableTeamItem = ({ id, index }: SortableTeamItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const team = TEAMS.find((t) => t.id === id);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
  };

  if (!team) return null;

  // Logic-Based Styling
  const getStatusStyles = (idx: number) => {
    switch (idx) {
      case 0: // 1st Place (Qualified)
      case 1: // 2nd Place (Qualified)
        return {
          wrapper: "bg-slate-800 border-white/5 opacity-100",
          accentBar: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]",
          text: "text-white font-semibold",
          rank: "text-white/90",
          badge: {
            text: "QUALIFIED",
            style: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_6px_rgba(16,185,129,0.1)]"
          }
        };
      case 2: // 3rd Place (Wildcard)
        return {
          wrapper: "bg-amber-900/10 border-amber-500/10",
          accentBar: "bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.2)]",
          text: "text-amber-50 font-medium",
          rank: "text-amber-200/70",
          badge: {
            text: "POSSIBLE",
            style: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
          }
        };
      default: // 4th Place (Eliminated)
        return {
          wrapper: "bg-slate-900/30 border-white/5 opacity-50 grayscale",
          accentBar: "bg-red-500/60",
          text: "text-slate-400 font-medium",
          rank: "text-slate-600",
          badge: {
            text: "ELIMINATED",
            style: "bg-red-500/10 text-red-400 border border-red-500/20"
          }
        };
    }
  };

  const status = getStatusStyles(index);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        relative h-12 mb-2 rounded-lg flex items-center pl-0 pr-3 overflow-hidden
        border transition-all duration-300 ease-out touch-none select-none group
        ${isDragging ? 'opacity-95 scale-[1.03] shadow-2xl z-50 ring-1 ring-white/20 bg-slate-800 cursor-grabbing' : status.wrapper}
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
      <div className="w-7 h-5 rounded-[3px] overflow-hidden shadow-sm mr-3 ring-1 ring-white/10">
        <img src={team.flagUrl} alt={team.name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className={`flex-1 font-sans text-sm tracking-wide truncate ${status.text}`}>
        {team.name}
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
};

// --- Direct Grid Group Card ---
interface DirectGroupCardProps {
  groupId: string;
  teams: string[];
}

const DirectGroupCard = ({ groupId, teams }: DirectGroupCardProps) => {
  return (
    <div className="flex flex-col h-full bg-slate-900/60 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-black/20">
        <h3 className="font-sans font-semibold text-white tracking-tight">
          Group {groupId}
        </h3>
        {/* Subtle Indicator */}
        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
      </div>

      {/* List */}
      <div className="p-3 flex-1">
        <SortableContext items={teams} strategy={verticalListSortingStrategy}>
          {teams.map((teamId, index) => (
            <SortableTeamItem key={teamId} id={teamId} index={index} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

// --- Main GroupStage Component (Direct Grid Dashboard) ---
export const GroupStage = () => {
  const { groupStandings, completedGroupIds, updateGroupStandings, markGroupCompleted, setCurrentStep } = useGame();
  
  // Sort groups alphabetically
  const groupIds = Object.keys(groupStandings).sort();

  // Sensors for DnD
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId !== overId) {
      // Find which group these teams belong to
      // Since we assume dragging within the same group for now (as per "inside these grid boxes")
      // We can find the group that contains the activeId.
      const groupId = groupIds.find(gid => groupStandings[gid].includes(activeId));
      
      if (groupId) {
         const currentTeams = groupStandings[groupId];
         const oldIndex = currentTeams.indexOf(activeId);
         const newIndex = currentTeams.indexOf(overId);
         
         // Only if valid indices
         if (oldIndex !== -1 && newIndex !== -1) {
             const newOrder = arrayMove(currentTeams, oldIndex, newIndex);
             updateGroupStandings(groupId, newOrder);
             
             // Check if group is "complete" (user interacted with it)
             // We can mark it as complete on any interaction, or just leave it to the user.
             // The prompt removed the "Save" button, so we should probably auto-mark as complete
             // OR rely on the user having done something. 
             // Let's auto-mark on interaction for progress tracking, or maybe not?
             // "Mission Status bar" needs to fill up.
             // Let's mark as complete if not already.
             if (!completedGroupIds.includes(groupId)) {
                 markGroupCompleted(groupId);
                 soundManager.play('success');
                 
                 // Removed Confetti as requested for "Official App" quality.
                 // Interaction must be instant, silent (except for success tick), and serious.
             }
         }
      }
    }
  };

  return (
    <div className="w-full flex flex-col pb-8">
       {/* Dashboard Header */}
       <div className="text-center mb-8 pt-4">
          <RulesCard variant="short" className="max-w-2xl mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-2">
            Tournament Dashboard
          </h2>
          <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">
            Initialize Groups • Drag to Reorder
          </p>
       </div>

       {/* Direct Grid */}
       <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
       >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto w-full px-4 md:px-6">
              {groupIds.map((groupId) => (
                <DirectGroupCard
                  key={groupId}
                  groupId={groupId}
                  teams={groupStandings[groupId]}
                />
              ))}
          </div>
       </DndContext>
    </div>
  );
};
