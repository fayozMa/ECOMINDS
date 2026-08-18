import React, { useState } from 'react';
import { COMMITTEES } from '../mockData';
import { Committee } from '../types';
import { Flame, Sun, Users, TreePine, Droplets, User, Sparkles, ChevronRight, Check } from 'lucide-react';

interface CommitteesSectionProps {
  onApplyForCommittee: (committeeId: string) => void;
}

export const CommitteesSection: React.FC<CommitteesSectionProps> = ({ onApplyForCommittee }) => {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee>(COMMITTEES[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'TreePine':
        return <TreePine className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="committees-section" className="py-20 bg-[#f4f8f4] text-[#1a2e22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#034d20]/10 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8bc349]" />
            Diplomatic Chambers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#034d20] tracking-tight">
            The 5 MCOP Simulation Committees
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            Each committee addresses a distinct urgent ecological pillar aligned with the UNFCCC COP agenda and Central Asian regional climate priorities.
          </p>
        </div>

        {/* Committee Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {COMMITTEES.map((comm) => {
            const isSelected = selectedCommittee.id === comm.id;
            return (
              <button
                key={comm.id}
                id={`committee-btn-${comm.id}`}
                onClick={() => setSelectedCommittee(comm)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#034d20] text-white border-[#034d20] shadow-lg scale-102 ring-2 ring-[#8bc349]'
                    : 'bg-white text-[#1a2e22] border-[#d4e7d8] hover:border-[#8bc349] hover:bg-emerald-50/50 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#8bc349] text-[#034d20]' : 'bg-[#f4f8f4] text-[#034d20]'
                    }`}
                  >
                    {getIcon(comm.icon)}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-[#a6c42d]' : 'bg-[#f4f8f4] text-[#034d20]'
                    }`}
                  >
                    {comm.enrolled}/{comm.capacity} Seats
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm line-clamp-2 leading-tight">
                    {comm.shortName}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Committee Detailed Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#d4e7d8] p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#034d20] text-[#8bc349] flex items-center justify-center shadow">
                  {getIcon(selectedCommittee.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8bc349]">
                    Official MCOP Chamber
                  </span>
                  <h3 className="text-2xl font-black text-[#034d20]">
                    {selectedCommittee.name}
                  </h3>
                </div>
              </div>

              {/* Topic Headline */}
              <div className="p-4 rounded-xl bg-[#f4f8f4] border-l-4 border-[#034d20] space-y-1">
                <span className="text-[11px] font-bold uppercase text-[#034d20] tracking-wider">
                  Main Agenda Topic:
                </span>
                <p className="text-base font-bold text-[#1a2e22]">
                  {selectedCommittee.topic}
                </p>
              </div>

              <p className="text-sm text-[#1a2e22]/90 leading-relaxed">
                {selectedCommittee.description}
              </p>

              {/* Key Issues Under Debate */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#034d20]">
                  Core Working Group Sub-Themes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCommittee.keyIssues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white border border-[#d4e7d8] text-xs space-y-1 shadow-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#8bc349]/20 text-[#034d20] flex items-center justify-center font-bold text-[10px]">
                        {idx + 1}
                      </div>
                      <p className="text-[#1a2e22]/90 font-medium leading-tight pt-1">
                        {issue}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chair & Application Action Sidebar */}
            <div className="lg:col-span-4 bg-[#f4f8f4] rounded-xl p-6 border border-[#d4e7d8] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#034d20] flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#8bc349]" />
                  Committee Chair & Dais
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#d4e7d8] space-y-1">
                  <h5 className="font-bold text-sm text-[#034d20]">{selectedCommittee.chairName}</h5>
                  <p className="text-xs text-[#1a2e22]/70">{selectedCommittee.chairTitle}</p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#1a2e22]/70">Delegate Capacity</span>
                    <span className="text-[#034d20] font-bold">
                      {selectedCommittee.enrolled} of {selectedCommittee.capacity} assigned
                    </span>
                  </div>
                  <div className="w-full bg-[#d4e7d8] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#8bc349] h-full rounded-full transition-all duration-500"
                      style={{ width: `${(selectedCommittee.enrolled / selectedCommittee.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <button
                id={`apply-for-${selectedCommittee.id}-btn`}
                onClick={() => onApplyForCommittee(selectedCommittee.id)}
                className="w-full py-3 px-4 rounded-lg bg-[#034d20] hover:bg-[#023817] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                <span>Apply for this Committee</span>
                <ChevronRight className="w-4 h-4 text-[#8bc349]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
