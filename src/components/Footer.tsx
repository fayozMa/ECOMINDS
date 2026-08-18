import React from 'react';
import { EVENT_INFO } from '../mockData';
import { Leaf, Send, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#034d20] text-white pt-16 pb-12 border-t border-[#046128] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8bc349] flex items-center justify-center text-[#034d20] shadow-md">
                <Leaf className="w-6 h-6 text-[#034d20]" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  {EVENT_INFO.name}
                </span>
                <span className="ml-2 text-xs font-bold text-[#8bc349] uppercase">
                  {EVENT_INFO.concept}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 max-w-sm leading-relaxed">
              "{EVENT_INFO.tagline}" — Model of COP youth climate summit empowering future diplomats and green tech innovators in Uzbekistan.
            </p>

            <div className="space-y-2 text-xs text-white/80 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8bc349] shrink-0" />
                <span>{EVENT_INFO.venue}, Margilan, Fergana</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8bc349] shrink-0" />
                <span>{EVENT_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8bc349] shrink-0" />
                <span>{EVENT_INFO.contactPhone}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#a6c42d]">
              Summit Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button onClick={() => scrollTo('about-section')} className="hover:text-[#8bc349] transition-colors">
                  About MCOP Concept
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('roles-section')} className="hover:text-[#8bc349] transition-colors">
                  Delegate vs. Coachee Roles
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('committees-section')} className="hover:text-[#8bc349] transition-colors">
                  5 Simulation Committees
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('agenda-section')} className="hover:text-[#8bc349] transition-colors">
                  3-Day Interactive Agenda
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('location-section')} className="hover:text-[#8bc349] transition-colors">
                  Venue & Travel Logistics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq-section')} className="hover:text-[#8bc349] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Community & Apply */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#a6c42d]">
              Official Community Channels
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Stay updated with delegate dossiers, live plenary voting, and speaker announcements:
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={EVENT_INFO.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#229ED9] hover:bg-[#1e8cc0] text-white font-bold text-xs shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Telegram Channel</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={onOpenApply}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#8bc349] hover:bg-[#7cb33e] text-[#034d20] font-bold text-xs shadow-md transition-all"
              >
                <span>Apply Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © 2026 ECOMINDS — Model of COP (MCOP). All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Hosted at Margʻilon shahar ixtisoslashtirilgan maktabi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
