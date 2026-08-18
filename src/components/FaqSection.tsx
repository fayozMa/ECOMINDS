import React, { useState } from 'react';
import { FAQ_ITEMS } from '../mockData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#f4f8f4] text-[#1a2e22] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#034d20]/10 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#8bc349]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#034d20] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            Clear answers about participant eligibility, committee allocations, conference logistics, and certification.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#d4e7d8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#034d20] flex items-center justify-between gap-4 hover:bg-emerald-50/40 transition-colors"
                >
                  <span>{item.question}</span>
                  <div className="w-8 h-8 rounded-full bg-[#f4f8f4] flex items-center justify-center shrink-0 text-[#034d20]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1a2e22]/80 leading-relaxed border-t border-[#d4e7d8]/40 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
