import React from 'react';
import { ViewMode } from '../types';
import { Leaf, ShieldCheck, UserCheck, Globe, Sparkles } from 'lucide-react';

interface TopPortalBarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  applicantCount: number;
  onOpenApply?: () => void;
}

export const TopPortalBar: React.FC<TopPortalBarProps> = ({
  currentView,
  onViewChange,
  applicantCount,
  onOpenApply,
}) => {
  return (
    <header id="top-portal-bar" className="h-16 bg-[#034d20] flex items-center justify-between px-4 sm:px-6 shrink-0 shadow-lg z-50 sticky top-0 border-b border-[#046128]">
      {/* Brand Icon & Name */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewChange('public')}>
        <div className="w-10 h-10 bg-[#8bc349] rounded-lg flex items-center justify-center shadow-sm">
          <Leaf className="w-5 h-5 text-[#034d20]" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black text-xl leading-none tracking-tight">ECOMINDS</span>
          <span className="text-[#a6c42d] text-[10px] uppercase font-bold tracking-widest mt-0.5">Model of COP (MCOP)</span>
        </div>
      </div>

      {/* Main Mode Navigation Bar */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-6 text-sm font-semibold text-white/80 h-full">
        <button
          id="btn-switch-public"
          onClick={() => onViewChange('public')}
          className={`h-full flex items-center gap-1.5 px-3 transition-colors ${
            currentView === 'public'
              ? 'text-white border-b-2 border-[#8bc349] font-bold'
              : 'hover:text-[#8bc349]'
          }`}
        >
          <Globe className="w-4 h-4 text-[#8bc349]" />
          <span>Public Site</span>
        </button>

        <button
          id="btn-switch-participant"
          onClick={() => onViewChange('participant')}
          className={`h-full flex items-center gap-1.5 px-3 transition-colors ${
            currentView === 'participant'
              ? 'text-white border-b-2 border-[#8bc349] font-bold'
              : 'hover:text-[#8bc349]'
          }`}
        >
          <UserCheck className="w-4 h-4 text-[#8bc349]" />
          <span>Participant Portal</span>
        </button>

        <button
          id="btn-switch-admin"
          onClick={() => onViewChange('admin')}
          className={`h-full flex items-center gap-1.5 px-3 transition-colors relative ${
            currentView === 'admin'
              ? 'text-white border-b-2 border-[#8bc349] font-bold'
              : 'hover:text-[#8bc349]'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#8bc349]" />
          <span>Organizer Admin</span>
          <span className="ml-1 px-1.5 py-0.2 bg-[#a6c42d] text-[#034d20] text-[10px] font-bold rounded-full">
            {applicantCount}
          </span>
        </button>
      </nav>

      {/* Right Side Status & CTA */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden sm:flex flex-col items-end text-right">
          <span className="text-[10px] uppercase font-bold tracking-wider text-white/60 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8bc349] animate-pulse"></span>
            Fergana Summit Panel
          </span>
          <span className="text-xs text-[#a6c42d] font-semibold">Margilan Campus</span>
        </div>

        {onOpenApply && (
          <button
            id="top-apply-now-btn"
            onClick={onOpenApply}
            className="bg-[#8bc349] hover:bg-[#7cb33e] text-[#034d20] px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            Apply Now
          </button>
        )}
      </div>
    </header>
  );
};

