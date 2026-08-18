import React, { useState } from 'react';
import { Leaf, Menu, X, Radio, ArrowRight } from 'lucide-react';
import { EVENT_INFO } from '../mockData';

interface NavbarProps {
  onOpenApply: (preferredRole?: 'Delegate' | 'Coachee') => void;
  onNavigateToLive: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onNavigateToLive }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="bg-white/95 backdrop-blur-md border-b border-[#d4e7d8] sticky top-[41px] z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div
            id="brand-logo-container"
            onClick={() => scrollToSection('hero-section')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#034d20] to-[#8bc349] flex items-center justify-center text-white shadow-md shadow-emerald-950/10 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-[#a6c42d]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#034d20]">
                  {EVENT_INFO.name}
                </span>
                <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-[#f4f8f4] text-[#034d20] border border-[#8bc349]/40 rounded">
                  {EVENT_INFO.concept}
                </span>
              </div>
              <p className="text-xs font-medium text-[#1a2e22]/70 -mt-0.5">
                {EVENT_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1a2e22]">
            <button
              onClick={() => scrollToSection('about-section')}
              className="hover:text-[#034d20] hover:underline underline-offset-4 decoration-[#8bc349] decoration-2 transition-colors"
            >
              About MCOP
            </button>
            <button
              onClick={() => scrollToSection('roles-section')}
              className="hover:text-[#034d20] hover:underline underline-offset-4 decoration-[#8bc349] decoration-2 transition-colors"
            >
              Roles & Tracks
            </button>
            <button
              onClick={() => scrollToSection('committees-section')}
              className="hover:text-[#034d20] hover:underline underline-offset-4 decoration-[#8bc349] decoration-2 transition-colors"
            >
              5 Committees
            </button>
            <button
              onClick={() => scrollToSection('agenda-section')}
              className="hover:text-[#034d20] hover:underline underline-offset-4 decoration-[#8bc349] decoration-2 transition-colors"
            >
              3-Day Agenda
            </button>
            <button
              onClick={() => scrollToSection('speakers-section')}
              className="hover:text-[#034d20] hover:underline underline-offset-4 decoration-[#8bc349] decoration-2 transition-colors"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection('location-section')}
              className="hover:text-[#034d20] hover:underline underline-offset-4 decoration-[#8bc349] decoration-2 transition-colors"
            >
              Venue & Map
            </button>
            <button
              onClick={onNavigateToLive}
              className="flex items-center gap-1.5 text-[#034d20] bg-[#f4f8f4] hover:bg-[#d4e7d8]/50 px-3 py-1.5 rounded-full border border-[#8bc349]/50 transition-colors"
            >
              <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Live Polling</span>
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-apply-btn"
              onClick={() => onOpenApply()}
              className="flex items-center gap-2 bg-[#034d20] hover:bg-[#023817] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-emerald-900/15 hover:shadow-lg transition-all active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-[#8bc349]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenApply()}
              className="bg-[#034d20] text-white text-xs font-bold px-3 py-2 rounded-md"
            >
              Apply
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#034d20] hover:bg-[#f4f8f4] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white border-b border-[#d4e7d8] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <button
            onClick={() => scrollToSection('about-section')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#1a2e22] hover:bg-[#f4f8f4] rounded"
          >
            About MCOP & ECOMINDS
          </button>
          <button
            onClick={() => scrollToSection('roles-section')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#1a2e22] hover:bg-[#f4f8f4] rounded"
          >
            Role Breakdown (Delegate vs. Coachee)
          </button>
          <button
            onClick={() => scrollToSection('committees-section')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#1a2e22] hover:bg-[#f4f8f4] rounded"
          >
            5 MCOP Committees
          </button>
          <button
            onClick={() => scrollToSection('agenda-section')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#1a2e22] hover:bg-[#f4f8f4] rounded"
          >
            3-Day Agenda & Schedule
          </button>
          <button
            onClick={() => scrollToSection('speakers-section')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#1a2e22] hover:bg-[#f4f8f4] rounded"
          >
            Speakers & Coaches
          </button>
          <button
            onClick={() => scrollToSection('location-section')}
            className="block w-full text-left py-2 px-3 text-sm font-semibold text-[#1a2e22] hover:bg-[#f4f8f4] rounded"
          >
            Venue & Map (Margilan)
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onNavigateToLive();
            }}
            className="flex items-center gap-2 w-full text-left py-2 px-3 text-sm font-semibold text-[#034d20] bg-[#f4f8f4] rounded border border-[#8bc349]/40"
          >
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            Live Classroom Polling
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenApply();
            }}
            className="w-full mt-2 bg-[#034d20] text-white py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2"
          >
            <span>Submit Application</span>
            <ArrowRight className="w-4 h-4 text-[#8bc349]" />
          </button>
        </div>
      )}
    </header>
  );
};
