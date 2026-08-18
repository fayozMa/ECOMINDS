import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, Users, Compass, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { EVENT_INFO } from '../mockData';

interface HeroSectionProps {
  onOpenApply: (preferredRole?: 'Delegate' | 'Coachee') => void;
  onExploreCommittees: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply, onExploreCommittees }) => {
  // Countdown timer to November 12, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 85, hours: 14, minutes: 22, seconds: 40 });

  useEffect(() => {
    const target = new Date('2026-11-12T09:00:00+05:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#034d20] via-[#045926] to-[#023817] text-white pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      {/* Background Subtle Geometric Pattern & Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="eco-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8bc349" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eco-grid)" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 w-96 h-96 bg-[#8bc349]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#a6c42d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#8bc349]/40 backdrop-blur-sm text-xs font-semibold text-[#a6c42d]">
              <Sparkles className="w-4 h-4 text-[#8bc349]" />
              <span>Model of COP (MCOP) • Fergana Valley Youth Climate Summit</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-none">
                Empowering Youth to Shape{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc349] via-[#a6c42d] to-[#d4e7d8]">
                  Global Climate Policy
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#d4e7d8] font-normal leading-relaxed max-w-2xl pt-2">
                Join <strong className="text-white font-bold">{EVENT_INFO.name}</strong> — the premier Model of COP simulation uniting aspiring diplomats and grassroots green innovators at {EVENT_INFO.venue}.
              </p>
            </div>

            {/* Event Key Badges: Date, Time & Venue */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-[#8bc349]/20 flex items-center justify-center text-[#8bc349]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#a6c42d] font-bold uppercase tracking-wider">Event Dates & Time</div>
                  <div className="text-sm font-semibold text-white">{EVENT_INFO.dates}</div>
                  <div className="text-xs text-white/70">{EVENT_INFO.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-[#a6c42d]/20 flex items-center justify-center text-[#a6c42d]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#a6c42d] font-bold uppercase tracking-wider">Official Venue</div>
                  <div className="text-sm font-semibold text-white truncate max-w-[200px]" title={EVENT_INFO.venue}>
                    {EVENT_INFO.venue}
                  </div>
                  <div className="text-xs text-white/70">Margilan, Fergana Region</div>
                </div>
              </div>
            </div>

            {/* Dual Primary Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
              <button
                id="hero-apply-delegate-btn"
                onClick={() => onOpenApply('Delegate')}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#8bc349] hover:bg-[#7cb33e] text-[#034d20] font-bold text-base shadow-lg shadow-emerald-950/30 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Apply as Delegate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-apply-coachee-btn"
                onClick={() => onOpenApply('Coachee')}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#a6c42d] hover:bg-[#97b328] text-[#034d20] font-bold text-base shadow-lg shadow-emerald-950/30 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Compass className="w-5 h-5" />
                <span>Apply as Coachee</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCommittees}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Explore 5 Committees</span>
              </button>
            </div>

            {/* Verification checklist pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8bc349]" /> 100% Fully Funded
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8bc349]" /> Official MCOP Certificate
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8bc349]" /> UN & CleanTech Mentors
              </span>
            </div>
          </div>

          {/* Right Column: Countdown Box & Event Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Countdown Card */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a6c42d] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#8bc349] animate-ping" />
                  Summit Countdown
                </span>
                <span className="text-xs text-white/60">Nov 12, 2026 09:00 UZT</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white">{timeLeft.days}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8bc349]">Days</div>
                </div>
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white">{timeLeft.hours}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8bc349]">Hours</div>
                </div>
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white">{timeLeft.minutes}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8bc349]">Mins</div>
                </div>
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white">{timeLeft.seconds}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8bc349]">Secs</div>
                </div>
              </div>

              {/* Event Metrics Mini Grid */}
              <div className="border-t border-white/10 pt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-lg font-black text-[#8bc349]">5</div>
                  <div className="text-white/70 text-[11px]">Committees</div>
                </div>
                <div>
                  <div className="text-lg font-black text-[#a6c42d]">150+</div>
                  <div className="text-white/70 text-[11px]">Participants</div>
                </div>
                <div>
                  <div className="text-lg font-black text-white">3 Days</div>
                  <div className="text-white/70 text-[11px]">Intensive</div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Role Teaser */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-emerald-900/60 border border-[#8bc349]/30 text-xs flex items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white text-sm">Not sure which role to pick?</div>
                <div className="text-white/70">Compare Parliamentary Diplomacy vs. Hands-on Eco Incubator</div>
              </div>
              <button
                onClick={() => {
                  const elem = document.getElementById('roles-section');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold whitespace-nowrap text-xs transition-colors"
              >
                Compare Roles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
