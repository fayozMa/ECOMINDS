import React from 'react';
import { SPEAKERS } from '../mockData';
import { Users, Award, BookOpen } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers-section" className="py-20 bg-[#f4f8f4] text-[#1a2e22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#034d20]/10 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#8bc349]" />
            Faculty & Keynote Speakers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#034d20] tracking-tight">
            Learn from Climate Diplomats & Innovation Coaches
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            Our speakers bring deep expertise from the UN, regional environmental policy bodies, and venture incubators to mentor delegates and coachees.
          </p>
        </div>

        {/* 4 Speaker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-2xl border border-[#d4e7d8] overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold text-[#8bc349] uppercase tracking-wider block">
                      {speaker.organization}
                    </span>
                    <h3 className="text-lg font-black leading-tight">{speaker.name}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="text-xs font-bold text-[#034d20] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#8bc349]" />
                    <span>{speaker.role}</span>
                  </div>

                  <p className="text-xs text-[#1a2e22]/80 leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#f4f8f4] border-t border-[#d4e7d8] text-xs space-y-1">
                <span className="font-bold text-[#034d20] flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#8bc349]" /> Featured Session:
                </span>
                <span className="text-[#1a2e22]/90 italic block">
                  "{speaker.topic}"
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
