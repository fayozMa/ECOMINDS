import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, BookOpen, Cpu, Award } from 'lucide-react';

interface RolesSectionProps {
  onSelectRole: (role: 'Delegate' | 'Coachee') => void;
}

export const RolesSection: React.FC<RolesSectionProps> = ({ onSelectRole }) => {
  return (
    <section id="roles-section" className="py-20 bg-white text-[#1a2e22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8bc349]/20 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#034d20]" />
            Choose Your Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#034d20] tracking-tight">
            Two Distinct Roles. One Unified Summit.
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            Whether your passion lies in high-stakes diplomatic diplomacy or hands-on green technological prototyping, ECOMINDS provides a tailored track for your growth.
          </p>
        </div>

        {/* Side-by-Side Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Delegate Card */}
          <div
            id="role-card-delegate"
            className="flex flex-col justify-between rounded-2xl border-2 border-[#034d20] bg-gradient-to-b from-white via-[#f4f8f4]/60 to-[#f4f8f4] p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all"
          >
            {/* Top Accent Pill */}
            <div className="absolute top-0 right-0 bg-[#034d20] text-[#8bc349] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
              Diplomatic Track
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#034d20] text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-7 h-7 text-[#8bc349]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#034d20]">Delegate</h3>
                  <p className="text-xs font-semibold text-[#8bc349] uppercase tracking-wider">
                    Model of COP Parliamentary Negotiator
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#1a2e22]/90 leading-relaxed">
                Represents a sovereign country or international organization in formal COP negotiation sessions, debates multilateral climate targets, builds strategic coalitions, and authors binding draft resolutions.
              </p>

              {/* Expectations & Deliverables */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#034d20] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#8bc349]" />
                  What You Will Do
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#1a2e22]/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#034d20] shrink-0 mt-0.5" />
                    <span>Deliver formal Opening Statements representing assigned nation's stance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#034d20] shrink-0 mt-0.5" />
                    <span>Engage in Moderated & Unmoderated Caucus bloc negotiations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#034d20] shrink-0 mt-0.5" />
                    <span>Draft legal operative clauses and introduce contentious amendments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#034d20] shrink-0 mt-0.5" />
                    <span>Vote on the final Margilan Youth Climate Declaration in Plenary</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#d4e7d8] text-xs space-y-1">
                <span className="font-bold text-[#034d20] block">Ideal For:</span>
                <span className="text-[#1a2e22]/80">Students of International Relations, Law, Public Policy, Economics, and Aspiring Diplomats.</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                id="select-role-delegate-btn"
                onClick={() => onSelectRole('Delegate')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#034d20] hover:bg-[#023817] text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <span>Apply as Official Delegate</span>
                <ArrowRight className="w-4 h-4 text-[#8bc349]" />
              </button>
            </div>
          </div>

          {/* Coachee Card */}
          <div
            id="role-card-coachee"
            className="flex flex-col justify-between rounded-2xl border-2 border-[#8bc349] bg-gradient-to-b from-white via-[#f4f8f4]/60 to-[#f4f8f4] p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all"
          >
            {/* Top Accent Pill */}
            <div className="absolute top-0 right-0 bg-[#8bc349] text-[#034d20] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
              Innovation & Incubator Track
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#8bc349] text-[#034d20] flex items-center justify-center shadow-md">
                  <Compass className="w-7 h-7 text-[#034d20]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#034d20]">Coachee</h3>
                  <p className="text-xs font-semibold text-[#034d20] uppercase tracking-wider">
                    Green Solution Builder & Mentee
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#1a2e22]/90 leading-relaxed">
                Participates in intensive hands-on sustainability workshops, receives direct 1-on-1 mentorship from seasoned climate tech experts, and designs a localized green solution ready for pitch presentation.
              </p>

              {/* Expectations & Deliverables */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#034d20] flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#8bc349]" />
                  What You Will Do
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#1a2e22]/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc349] shrink-0 mt-0.5" />
                    <span>Attend intensive Design Thinking and CleanTech Prototyping labs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc349] shrink-0 mt-0.5" />
                    <span>Form small multidisciplinary project teams to address Fergana challenges</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc349] shrink-0 mt-0.5" />
                    <span>Build a Business Model Canvas (BMC) and minimal viable concept</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc349] shrink-0 mt-0.5" />
                    <span>Pitch live before a jury of environmental investors on Day 3</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#d4e7d8] text-xs space-y-1">
                <span className="font-bold text-[#034d20] block">Ideal For:</span>
                <span className="text-[#1a2e22]/80">STEM students, Young Entrepreneurs, Environmental Science majors, and Community Eco-Activists.</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                id="select-role-coachee-btn"
                onClick={() => onSelectRole('Coachee')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#8bc349] hover:bg-[#7cb33e] text-[#034d20] font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <span>Apply as Green Coachee</span>
                <ArrowRight className="w-4 h-4 text-[#034d20]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
