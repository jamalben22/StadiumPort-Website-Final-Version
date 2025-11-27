import React, { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
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
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

// --- Sortable Team Item Component ---
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative mb-3 touch-none group"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-8 text-center hidden md:block">
        <span className={`
          font-display font-bold text-2xl
          ${index < 2 
            ? 'text-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]' 
            : 'text-slate-600'}
        `}>
          {index + 1}
        </span>
      </div>

      <motion.div
        layoutId={id}
        initial={false}
        animate={{
            scale: isDragging ? 1.02 : 1,
            backgroundColor: isDragging ? '#1e293b' : 'rgba(30, 41, 59, 0.6)',
            boxShadow: isDragging ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)' : 'none',
        }}
        className={`
            relative h-20 md:h-24 flex items-center gap-4 md:gap-6 px-4 md:px-6 rounded-xl border-2
            transition-all duration-200 cursor-grab active:cursor-grabbing
            ${isDragging 
              ? 'border-[#FBBF24] ring-2 ring-[#FBBF24]/50 z-50' 
              : 'border-white/5 hover:border-white/20 bg-slate-800/60'}
        `}
      >
        <div className="flex items-center gap-4 md:gap-6 w-full h-full transition-transform active:scale-95">
        {/* Grip Icon */}
        <div className={`
          text-slate-500 transition-opacity duration-200 hidden md:block
          ${isDragging ? 'opacity-100 text-[#FBBF24]' : 'opacity-0 group-hover:opacity-100'}
        `}>
            <i className="ri-draggable text-2xl"></i>
        </div>

        {/* Position Number (Mobile Only) */}
        <div className="md:hidden font-display font-bold text-xl text-slate-500 w-6">
            <span className={index < 2 ? 'text-[#FBBF24]' : ''}>{index + 1}</span>
        </div>

        {/* Flag */}
        <div className="relative shrink-0">
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg overflow-hidden border-2 ${index < 2 ? 'border-[#FBBF24] shadow-[0_0_15px_rgba(251,191,36,0.3)]' : 'border-slate-600'}`}>
                <img src={team.flagUrl} alt={team.name} className="w-full h-full object-cover" />
            </div>
        </div>

        {/* Name */}
        <div className="flex-1 font-display font-black text-white text-xl md:text-3xl tracking-wide uppercase truncate">
            {team.name}
        </div>
        
        {/* Status Indicator */}
        {index < 2 && (
          <div className="flex flex-col items-end">
             <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FBBF24] bg-[#FBBF24]/10 px-3 py-1 rounded border border-[#FBBF24]/20 shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                ADVANCE
             </div>
          </div>
        )}
        </div>
      </motion.div>
    </div>
  );
};

// --- Group Card Component ---
interface GroupCardProps {
  groupId: string;
  teams: string[];
  onInteract: () => void;
}

const GroupCard = ({ groupId, teams, onInteract }: GroupCardProps) => {
  const { updateGroupStandings } = useGame();
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8,
        }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = teams.indexOf(active.id as string);
      const newIndex = teams.indexOf(over.id as string);
      const newOrder = arrayMove(teams, oldIndex, newIndex);
      updateGroupStandings(groupId, newOrder);
      onInteract();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FBBF24] to-[#d97706] tracking-tighter drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
            GROUP {groupId}
        </h3>
        <div className="text-sm md:text-base font-mono text-slate-400 mt-2 tracking-widest uppercase">
          Top 2 Teams Advance
        </div>
      </div>
      
      <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-white/5 shadow-2xl">
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={teams} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col">
                {teams.map((teamId, index) => (
                <SortableTeamItem key={teamId} id={teamId} index={index} />
                ))}
            </div>
            </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

// --- Main GroupStage Component ---
export const GroupStage = () => {
  const { groupStandings, setCurrentStep } = useGame();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Sort groups alphabetically
  const groupIds = Object.keys(groupStandings).sort();
  const currentGroupId = groupIds[currentGroupIndex];

  const handleInteract = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const nextGroup = () => {
    if (currentGroupIndex < groupIds.length - 1) {
      setDirection(1);
      setCurrentGroupIndex(prev => prev + 1);
    }
  };

  const prevGroup = () => {
    if (currentGroupIndex > 0) {
      setDirection(-1);
      setCurrentGroupIndex(prev => prev - 1);
    }
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextGroup();
    } else if (info.offset.x > threshold) {
      prevGroup();
    }
  };

  const handleNextStep = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8 space-y-4 md:space-y-8 relative h-[100dvh] flex flex-col">
      
      {/* Carousel Container */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        
        {/* Navigation Arrows (Desktop) */}
        {currentGroupIndex > 0 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevGroup}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition-colors"
          >
            <i className="ri-arrow-left-s-line text-4xl"></i>
          </motion.button>
        )}
        
        {currentGroupIndex < groupIds.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextGroup}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-16 h-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition-colors"
          >
            <i className="ri-arrow-right-s-line text-4xl"></i>
          </motion.button>
        )}

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentGroupId}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="w-full touch-pan-y"
          >
            <GroupCard 
              groupId={currentGroupId} 
              teams={groupStandings[currentGroupId]} 
              onInteract={handleInteract}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="flex flex-col items-center gap-4 z-20 pb-24">
        <div className="flex gap-2">
            {groupIds.map((id, idx) => (
                <div 
                    key={id}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentGroupIndex 
                            ? 'w-8 bg-[#FBBF24]' 
                            : idx < currentGroupIndex 
                                ? 'w-2 bg-[#FBBF24]/50' 
                                : 'w-2 bg-slate-700'
                    }`}
                />
            ))}
        </div>
        <div className="text-slate-400 font-mono text-sm uppercase tracking-widest">
            {currentGroupIndex + 1}/{groupIds.length} Groups Sorted
        </div>
      </div>
      
      {/* Spacer for fixed bottom bar */}
      <div className="h-12"></div>
    </div>
  );
};

export default GroupStage;
