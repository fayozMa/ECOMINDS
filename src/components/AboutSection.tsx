import React, { useState } from 'react';
import { Globe2, Sparkles, Sprout, Target, Shield, Award, Check } from 'lucide-react';
import { EVENT_INFO } from '../mockData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mcop' | 'ecominds' | 'fergana'>('mcop');

  return (
    <section id="about-section" className="py-20 bg-[#f4f8f4] text-[#1a2e22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#034d20]/10 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5 text-[#8bc349]" />
            Background & Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#034d20] tracking-tight">
            Where Global Diplomacy Meets Local Green Innovation
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            Discover how ECOMINDS translates the United Nations Framework Convention on Climate Change (UNFCCC) COP mechanism into actionable youth empowerment in Uzbekistan.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-xl border border-[#d4e7d8] shadow-sm flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('mcop')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'mcop'
                  ? 'bg-[#034d20] text-white shadow-md'
                  : 'text-[#1a2e22]/70 hover:text-[#034d20] hover:bg-[#f4f8f4]'
              }`}
            >
              <Globe2 className="w-4 h-4 text-[#8bc349]" />
              <span>What is Model of COP (MCOP)?</span>
            </button>

            <button
              onClick={() => setActiveTab('ecominds')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'ecominds'
                  ? 'bg-[#034d20] text-white shadow-md'
                  : 'text-[#1a2e22]/70 hover:text-[#034d20] hover:bg-[#f4f8f4]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#8bc349]" />
              <span>The ECOMINDS Initiative</span>
            </button>

            <button
              onClick={() => setActiveTab('fergana')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'fergana'
                  ? 'bg-[#034d20] text-white shadow-md'
                  : 'text-[#1a2e22]/70 hover:text-[#034d20] hover:bg-[#f4f8f4]'
              }`}
            >
              <Target className="w-4 h-4 text-[#8bc349]" />
              <span>Fergana Valley Climate Context</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-2xl border border-[#d4e7d8] p-6 sm:p-10 shadow-lg">
          {activeTab === 'mcop' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 bg-[#8bc349]/20 text-[#034d20] text-xs font-bold rounded-md">
                  Simulation Methodology
                </div>
                <h3 className="text-2xl font-black text-[#034d20]">
                  Replicating the UN Climate Change Conference
                </h3>
                <p className="text-sm sm:text-base text-[#1a2e22]/80 leading-relaxed">
                  <strong>Model of COP (MCOP)</strong> is an academic simulation of the Conference of the Parties to the UNFCCC. Participants act as official country delegates, negotiating complex climate pacts under standard UN diplomatic rules of procedure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f4f8f4] border border-[#d4e7d8]">
                    <div className="p-1 rounded bg-[#034d20] text-white mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs">
                      <strong className="text-[#034d20] block font-bold">Consensus Building:</strong>
                      Experience the rigorous diplomacy needed to draft binding international treaties.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f4f8f4] border border-[#d4e7d8]">
                    <div className="p-1 rounded bg-[#034d20] text-white mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs">
                      <strong className="text-[#034d20] block font-bold">Policy Authorship:</strong>
                      Draft and debate legal clauses on carbon quotas, climate finance, and loss & damage.
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-gradient-to-br from-[#034d20] to-[#04682c] p-6 rounded-xl text-white space-y-4 shadow-inner">
                <h4 className="text-lg font-bold text-[#8bc349] flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#a6c42d]" />
                  Core Simulation Pillars
                </h4>
                <ul className="space-y-3 text-xs text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#8bc349]">1</span>
                    <span><strong>Article 6 Alignment:</strong> Central Asian emissions market rules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#8bc349]">2</span>
                    <span><strong>Loss & Damage:</strong> Adaptation funds for arid ecosystems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#8bc349]">3</span>
                    <span><strong>Technology Mechanism:</strong> Scaling drip irrigation & microgrids</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'ecominds' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 bg-[#a6c42d]/20 text-[#034d20] text-xs font-bold rounded-md">
                  Local Community Movement
                </div>
                <h3 className="text-2xl font-black text-[#034d20]">
                  {EVENT_INFO.tagline}
                </h3>
                <p className="text-sm sm:text-base text-[#1a2e22]/80 leading-relaxed">
                  <strong>ECOMINDS</strong> bridges the gap between high-level diplomatic rhetoric and ground-level environmental engineering. Hosted at Margʻilon shahar ixtisoslashtirilgan maktabi, this conference pairs parliamentary delegates with hands-on prototype coachees.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#f4f8f4] border border-[#d4e7d8] space-y-1">
                    <div className="font-bold text-xs text-[#034d20] uppercase tracking-wider">Dual Track Architecture</div>
                    <div className="text-xs text-[#1a2e22]/80">Simultaneous parliamentary negotiations & technical startup coaching.</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#f4f8f4] border border-[#d4e7d8] space-y-1">
                    <div className="font-bold text-xs text-[#034d20] uppercase tracking-wider">Yashil Makon Alignment</div>
                    <div className="text-xs text-[#1a2e22]/80">Contributing directly to Uzbekistan’s national greening and afforestation goals.</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-gradient-to-br from-[#034d20] to-[#04682c] p-6 rounded-xl text-white space-y-4">
                <h4 className="text-lg font-bold text-[#8bc349] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#a6c42d]" />
                  What Sets ECOMINDS Apart
                </h4>
                <div className="space-y-2 text-xs text-white/90">
                  <div className="p-2.5 rounded bg-white/10">
                    <div className="font-bold text-[#a6c42d]">100% Barrier-Free Access</div>
                    <div>Zero registration fee for all admitted students and innovators.</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/10">
                    <div className="font-bold text-[#a6c42d]">Real Implementation Grants</div>
                    <div>Winning coachee solutions receive seed micro-grants and mentorship.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fergana' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 bg-[#8bc349]/20 text-[#034d20] text-xs font-bold rounded-md">
                  Regional Climate Urgency
                </div>
                <h3 className="text-2xl font-black text-[#034d20]">
                  Why the Fergana Valley Matters
                </h3>
                <p className="text-sm sm:text-base text-[#1a2e22]/80 leading-relaxed">
                  Home to over 14 million people across Uzbekistan, Kyrgyzstan, and Tajikistan, the Fergana Valley is the agricultural powerhouse and cultural heart of Central Asia — yet faces mounting water scarcity, soil salinization, and glacier retreat.
                </p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 bg-[#f4f8f4] rounded-lg border border-[#d4e7d8]">
                    <div className="font-black text-base text-[#034d20]">14M+</div>
                    <div className="text-[11px] text-[#1a2e22]/70">Valley Population</div>
                  </div>
                  <div className="p-3 bg-[#f4f8f4] rounded-lg border border-[#d4e7d8]">
                    <div className="font-black text-base text-[#034d20]">30%</div>
                    <div className="text-[11px] text-[#1a2e22]/70">Irrigation Savings Goal</div>
                  </div>
                  <div className="p-3 bg-[#f4f8f4] rounded-lg border border-[#d4e7d8]">
                    <div className="font-black text-base text-[#034d20]">300+</div>
                    <div className="text-[11px] text-[#1a2e22]/70">Sunny Days / Year</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-[#034d20] p-6 rounded-xl text-white space-y-3">
                <h4 className="text-base font-bold text-[#8bc349]">Margilan: City of Silk & Sustainable Future</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Margilan’s renowned silk craftsmanship has relied on natural mulberry ecology for millennia. By hosting ECOMINDS at Margʻilon shahar ixtisoslashtirilgan maktabi, we honor this heritage while engineering 21st-century environmental resilience.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
