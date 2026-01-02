"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import Map, { Marker, Popup, NavigationControl, Source, Layer, MapRef } from 'react-map-gl/mapbox';
import { useTheme } from 'next-themes';
import { HOST_CITIES, HostCity } from '@/data/host-cities';
import { MapPin, X, Users, Trophy, ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';
import 'mapbox-gl/dist/mapbox-gl.css';

export function InteractiveMap() {
  const { resolvedTheme } = useTheme();
  const mapRef = useRef<MapRef>(null);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const [popupInfo, setPopupInfo] = useState<HostCity | null>(null);

  // Touch handlers for mobile swipe-to-close
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null; // Reset
    const touch = e.targetTouches?.[0];
    if (touch) {
      touchStart.current = touch.clientY;
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const touch = e.targetTouches?.[0];
    if (touch) {
      touchEnd.current = touch.clientY;
    }
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchEnd.current - touchStart.current;
    const isDownSwipe = distance > 50; // Threshold for swipe
    if (isDownSwipe) {
      setPopupInfo(null);
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showScrollTooltip, setShowScrollTooltip] = useState(false);
  const [viewState, setViewState] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3
  });

  const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  // Custom map styles for light/dark mode
  const mapStyle = resolvedTheme === 'dark' 
    ? 'mapbox://styles/mapbox/dark-v11' 
    : 'mapbox://styles/mapbox/light-v11';

  // Country colors configuration
  const countryColors = {
    USA: { fill: '#4A90E2', stroke: '#2563EB', tailwind: 'bg-[#4A90E2]', label: 'United States' },
    Canada: { fill: '#E24A4A', stroke: '#DC2626', tailwind: 'bg-[#E24A4A]', label: 'Canada' },
    Mexico: { fill: '#50C878', stroke: '#059669', tailwind: 'bg-[#50C878]', label: 'Mexico' }
  };

  const onMove = useCallback((evt: any) => {
    setViewState(evt.viewState);
  }, []);

  // Handle Scroll Zoom Logic
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const map = mapRef.current.getMap();
    map.scrollZoom.disable(); // Disable default scroll zoom

    const handleWheel = (e: any) => {
      if (e.originalEvent.ctrlKey || e.originalEvent.metaKey) {
        // e.preventDefault() is handled by mapbox internally if scrollZoom is enabled?
        // Actually mapbox eats the event.
        if (!map.scrollZoom.isEnabled()) {
           map.scrollZoom.enable();
        }
        setShowScrollTooltip(false);
      } else {
        if (map.scrollZoom.isEnabled()) {
           map.scrollZoom.disable();
        }
        setShowScrollTooltip(true);
        // Debounce hide
        const timer = setTimeout(() => setShowScrollTooltip(false), 1500);
        return () => clearTimeout(timer);
      }
    };

    map.on('wheel', handleWheel);
    
    // Smooth easing for pan/zoom
    // Note: react-map-gl handles viewState updates, but for inertial panning we rely on mapbox's native dragPan which is enabled by default.
    // map.dragPan.enable();
    
    return () => {
      map.off('wheel', handleWheel);
    };
  }, [isLoaded]);

  // Fallback if no token provided
  if (!mapToken) {
    return (
      <div className="relative w-full aspect-[16/9] bg-slate-100 dark:bg-slate-900 rounded-[32px] overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-slate-200 dark:border-white/10">
        <MapPin className="w-16 h-16 text-slate-600 dark:text-slate-300 dark:text-slate-600 mb-4" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Map Configuration Required</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md">
          Please add your Mapbox Access Token to <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-sm">.env.local</code> as <code className="text-emerald-600 dark:text-emerald-400">NEXT_PUBLIC_MAPBOX_TOKEN</code>
        </p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group isolate"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .marker-pulse::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          height: 100%; width: 100%;
          border-radius: 50%;
          background-color: inherit;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          z-index: -1;
        }
        .mapboxgl-popup-content {
          padding: 0;
          background: transparent;
          box-shadow: none;
          border-radius: 16px;
        }
        .mapboxgl-popup-tip {
          display: none;
        }
        /* Apple-style Card & Glassmorphism */
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.12), 
            0 1px 2px rgba(0, 0, 0, 0.04);
        }
        .dark .glass-card {
          background: rgba(30, 30, 30, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3), 
            0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* Tooltip Indicator */
        .scroll-tooltip {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          pointer-events: none;
          transform: translateY(0);
          opacity: 1;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .scroll-tooltip.hidden-tooltip {
          opacity: 0;
          transform: translateY(10px);
        }

        /* Animation Utilities */
        .animate-in {
          animation: slideIn 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        .city-card-button {
          background: linear-gradient(135deg, #007AFF 0%, #0051D5 100%);
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
        }
        .city-card-button:hover {
          transform: scale(1.02) translateY(-1px);
          box-shadow: 0 8px 20px rgba(0, 122, 255, 0.4);
        }
        .city-card-button:active {
          transform: scale(0.98);
        }
      `}</style>

      {/* Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-50 bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-opacity duration-500">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin" />
            <span className="text-sm font-medium text-slate-500">Loading Map...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 z-50 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 p-4 text-center">
            <MapPin className="w-10 h-10 text-red-500 mb-2" />
            <h3 className="text-lg font-semibold">Map Error</h3>
            <p className="text-sm text-slate-500">Failed to load map. Please check your connection or ad blocker.</p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-4 right-4 z-10 glass-card p-3 rounded-2xl shadow-lg hidden md:block">
        <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Host Nations</h4>
        <div className="space-y-2">
          {Object.entries(countryColors).map(([name, colors]) => (
            <div key={name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.fill }} />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{colors.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Zoom Indicator */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${showScrollTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="scroll-tooltip shadow-lg flex items-center gap-2">
          <span className="text-xl">⌘</span>
          <span>Use Ctrl + Scroll to zoom</span>
        </div>
      </div>

      <Map
        ref={mapRef}
        {...viewState}
        onMove={onMove}
        scrollZoom={false} // Disabled by default, controlled via Ref
        dragPan={true}
        dragRotate={false}
        touchZoomRotate={true}
        onLoad={(e) => {
          setIsLoaded(true);
          const map = e.target;
          if (map.getLayer('water')) {
            map.setPaintProperty('water', 'fill-color', '#B8D4E8');
          }
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={mapStyle}
        mapboxAccessToken={mapToken}
        attributionControl={false}
        reuseMaps
      >
        <NavigationControl position="bottom-right" showCompass={false} />

        {/* Country Color Zones */}
        <Source 
          id="country-boundaries" 
          type="vector" 
          url="mapbox://mapbox.country-boundaries-v1"
        >
          {/* USA Layer */}
          <Layer
            id="usa-fill"
            source-layer="country_boundaries"
            type="fill"
            filter={['==', 'iso_3166_1_alpha_3', 'USA']}
            paint={{
              'fill-color': countryColors.USA.fill,
              'fill-opacity': 0.15
            }}
            beforeId="waterway-label" 
          />
          {/* Canada Layer */}
          <Layer
            id="can-fill"
            source-layer="country_boundaries"
            type="fill"
            filter={['==', 'iso_3166_1_alpha_3', 'CAN']}
            paint={{
              'fill-color': countryColors.Canada.fill,
              'fill-opacity': 0.15
            }}
            beforeId="waterway-label"
          />
          {/* Mexico Layer */}
          <Layer
            id="mex-fill"
            source-layer="country_boundaries"
            type="fill"
            filter={['==', 'iso_3166_1_alpha_3', 'MEX']}
            paint={{
              'fill-color': countryColors.Mexico.fill,
              'fill-opacity': 0.15
            }}
            beforeId="waterway-label"
          />
          
          {/* Borders */}
          <Layer
            id="country-borders"
            source-layer="country_boundaries"
            type="line"
            filter={['in', 'iso_3166_1_alpha_3', 'USA', 'CAN', 'MEX']}
            paint={{
              'line-color': [
                'match',
                ['get', 'iso_3166_1_alpha_3'],
                'USA', countryColors.USA.stroke,
                'CAN', countryColors.Canada.stroke,
                'MEX', countryColors.Mexico.stroke,
                '#ccc'
              ],
              'line-width': 1,
              'line-opacity': 0.5
            }}
          />
        </Source>

        {/* City Markers */}
        {HOST_CITIES.map((city) => (
          <Marker
            key={city.id}
            latitude={city.coordinates.lat}
            longitude={city.coordinates.lng}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(city);
              // Smooth fly to
              setViewState(prev => ({
                ...prev,
                latitude: city.coordinates.lat,
                longitude: city.coordinates.lng,
                zoom: Math.max(prev.zoom, 5),
                transitionDuration: 1000
              }));
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Pulse Effect */}
              <div 
                className={`marker-pulse w-4 h-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  city.country === 'USA' ? 'bg-blue-500' : 
                  city.country === 'Canada' ? 'bg-red-500' : 'bg-emerald-500'
                }`} 
              />
              
              {/* Pin */}
              <div className={`relative z-10 flex flex-col items-center transition-transform duration-300 group-hover:scale-125`}>
                <div 
                  className={`w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 shadow-lg flex items-center justify-center ${
                    city.country === 'USA' ? 'bg-blue-500 shadow-blue-500/30' : 
                    city.country === 'Canada' ? 'bg-red-500 shadow-red-500/30' : 'bg-emerald-500 shadow-emerald-500/30'
                  }`}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                {/* Label on Hover */}
                <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <span className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md whitespace-nowrap">
                    {city.name}
                  </span>
                </div>
              </div>
            </div>
          </Marker>
        ))}

        {/* Apple-style Popup (Desktop) - Minimal & Clean */}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.coordinates.lng}
            latitude={popupInfo.coordinates.lat}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            maxWidth="300px"
            offset={24}
            className="z-50 hidden md:block"
          >
            <div 
              key={popupInfo.name} 
              className="glass-card rounded-2xl p-5 w-[280px] shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {popupInfo.country}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      popupInfo.country === 'USA' ? 'bg-blue-500' : 
                      popupInfo.country === 'Canada' ? 'bg-red-500' : 'bg-emerald-500'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {popupInfo.name}
                  </h3>
                </div>
                <button 
                  onClick={() => setPopupInfo(null)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Stadium Info */}
              <div className="mb-4 p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={14} className="text-blue-500" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                    {popupInfo.stadium}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Users size={14} />
                  <span className="text-[11px] font-medium">
                    {popupInfo.capacity} Capacity
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                {popupInfo.highlights?.slice(0, 2).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                    <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link 
                href={`/city-guide/${popupInfo.id}`}
                className="block w-full"
              >
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-slate-900 dark:text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5">
                  Read Full Guide
                  <ChevronRight size={14} strokeWidth={2.5} />
                </button>
              </Link>
            </div>
          </Popup>
        )}
      </Map>

      {/* Mobile Bottom Sheet */}
      {popupInfo && (
        <div className="absolute inset-x-0 bottom-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm -top-[100vh]"
            onClick={() => setPopupInfo(null)}
          />
          
          {/* Sheet Content */}
          <div 
            className="relative bg-white dark:bg-slate-900 rounded-t-[32px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom duration-300 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Handle */}
            <div className="w-full flex justify-center pt-3 pb-1" onClick={() => setPopupInfo(null)}>
              <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
            </div>

            <div className="p-5 pb-8 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {popupInfo.country}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      popupInfo.country === 'USA' ? 'bg-[#4A90E2]' : 
                      popupInfo.country === 'Canada' ? 'bg-[#E24A4A]' : 'bg-[#50C878]'
                    }`} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                    {popupInfo.name}
                  </h3>
                </div>
                <button 
                  onClick={() => setPopupInfo(null)}
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 active:scale-95 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                    <Trophy size={14} />
                    <span>Stadium</span>
                  </div>
                  <p className="text-[15px] font-semibold text-slate-900 dark:text-white truncate">
                    {popupInfo.stadium}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-white/5 p-3.5 rounded-2xl border border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                    <Users size={14} />
                    <span>Capacity</span>
                  </div>
                  <p className="text-[15px] font-semibold text-slate-900 dark:text-white">
                    {popupInfo.capacity}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">City Highlights</h4>
                <div className="space-y-2.5">
                  {popupInfo.highlights?.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href={`/city-guide/${popupInfo.id}`}
                className="block w-full pt-2"
              >
                <button className="w-full h-12 bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] text-slate-900 dark:text-white text-[17px] font-semibold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2">
                  View City Guide
                  <ChevronRight size={18} strokeWidth={2.5} className="opacity-70" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

