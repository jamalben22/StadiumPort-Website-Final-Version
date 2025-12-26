import React from 'react';
import { Plane, Building2, MapPin, ExternalLink } from 'lucide-react';

interface TripTicketProps {
  teamName?: string;
  hostCity?: string;
  hostCityImage?: string;
}

export const TripTicket: React.FC<TripTicketProps> = ({ 
  teamName = "Brazil", 
  hostCity = "New York / New Jersey",
  hostCityImage = "/images/cities/new-york-new-jersey-world-cup-2026-1024.webp"
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-black shadow-2xl group">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${hostCityImage}')` }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full justify-between min-h-[220px]">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
            <MapPin className="w-3 h-3 text-[#01b47d]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Final Destination</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-white/80">
            WC26-FIN
          </div>
        </div>

        {/* Main Text */}
        <div className="mt-4">
          <h3 className="text-2xl font-black text-white leading-tight drop-shadow-lg">
            Watch <span className="text-[#01b47d]">{teamName}</span> play the Final in {hostCity}!
          </h3>
          <p className="text-white/70 text-sm mt-1 font-medium">
            July 19, 2026 • MetLife Stadium
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <a 
            href="https://www.skyscanner.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg active:scale-95"
          >
            <Plane className="w-4 h-4" />
            <span className="text-sm">Check Flights</span>
          </a>
          <a 
            href="https://www.booking.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-4 rounded-xl hover:bg-white/20 transition-colors shadow-lg active:scale-95"
          >
            <Building2 className="w-4 h-4" />
            <span className="text-sm">Book Hotel</span>
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
          <ExternalLink className="w-24 h-24 text-white" />
        </div>
      </div>

      {/* Ticket Perforations */}
      <div className="absolute top-1/2 -left-2 w-4 h-8 bg-[#0f172a] rounded-r-full" />
      <div className="absolute top-1/2 -right-2 w-4 h-8 bg-[#0f172a] rounded-l-full" />
    </div>
  );
};
