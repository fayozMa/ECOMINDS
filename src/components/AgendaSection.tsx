import React, { useState } from 'react';
import { AGENDA } from '../mockData';
import { AgendaSession } from '../types';
import { Calendar, Clock, MapPin, User, Sparkles, Filter } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 3>(1);
  const [selectedTrack, setSelectedTrack] = useState<string>('All');

  const tracks = ['All', 'Plenary', 'Delegates', 'Coachees', 'Networking'];

  const dayTitles = {
    1: 'Day 1: Opening & Plenary Negotiations',
    2: 'Day 2: Working Groups, Crisis Simulation & Coachee Labs',
    3: 'Day 3: Resolution Passage, Pitch Finals & Tree Planting',
  };

  const dayDates = {
    1: 'Thursday, November 12, 2026',
    2: 'Friday, November 13, 2026',
    3: 'Saturday, November 14, 2026',
  };

  const filteredSessions = AGENDA.filter((session) => {
    const matchDay = session.day === selectedDay;
    const matchTrack = selectedTrack === 'All' || session.track === selectedTrack;
    return matchDay && matchTrack;
  });

  const getTrackBadgeClass = (track: AgendaSession['track']) => {
    switch (track) {
      case 'Plenary':
        return 'bg-[#034d20] text-white';
      case 'Delegates':
        return 'bg-emerald-100 text-[#034d20] border border-emerald-300';
      case 'Coachees':
        return 'bg-[#8bc349]/20 text-[#034d20] border border-[#8bc349]';
      case 'Workshop':
        return 'bg-amber-100 text-amber-900 border border-amber-300';
      case 'Networking':
        return 'bg-purple-100 text-purple-900 border border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="agenda-section" className="py-20 bg-white text-[#1a2e22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8bc349]/20 text-[#034d20] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-[#034d20]" />
            Program Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#034d20] tracking-tight">
            3-Day Interactive Agenda
          </h2>
          <p className="text-base text-[#1a2e22]/80 leading-relaxed">
            November 12–14, 2026 • Margʻilon shahar ixtisoslashtirilgan maktabi
          </p>
        </div>

        {/* Day Tab Switcher */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#f4f8f4] p-1.5 rounded-xl border border-[#d4e7d8] flex flex-wrap gap-1">
            {[1, 2, 3].map((dayNum) => (
              <button
                key={dayNum}
                id={`agenda-day-${dayNum}-btn`}
                onClick={() => setSelectedDay(dayNum as 1 | 2 | 3)}
                className={`px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all text-left flex flex-col ${
                  selectedDay === dayNum
                    ? 'bg-[#034d20] text-white shadow-md'
                    : 'text-[#1a2e22]/70 hover:text-[#034d20] hover:bg-white'
                }`}
              >
                <span>Day {dayNum}</span>
                <span
                  className={`text-[10px] font-normal ${
                    selectedDay === dayNum ? 'text-[#8bc349]' : 'text-[#1a2e22]/50'
                  }`}
                >
                  Nov {11 + dayNum}, 2026
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Track Filters */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 bg-[#f4f8f4] p-3 rounded-xl border border-[#d4e7d8]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#034d20]" />
            <span className="text-xs font-bold text-[#034d20] uppercase tracking-wider">Filter Track:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  selectedTrack === track
                    ? 'bg-[#034d20] text-white shadow-xs'
                    : 'bg-white text-[#1a2e22]/70 hover:bg-[#d4e7d8] border border-[#d4e7d8]'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>

        {/* Day Header Banner */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#034d20] to-[#04682c] text-white flex flex-wrap items-center justify-between gap-2 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8bc349]">
              {dayDates[selectedDay]}
            </span>
            <h3 className="text-lg font-bold text-white">{dayTitles[selectedDay]}</h3>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
            09:00 AM – 05:00 PM UZT
          </span>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {filteredSessions.length === 0 ? (
            <div className="text-center py-12 bg-[#f4f8f4] rounded-xl border border-[#d4e7d8] text-sm text-[#1a2e22]/60">
              No sessions found for this filter combination.
            </div>
          ) : (
            filteredSessions.map((session) => (
              <div
                key={session.id}
                className="bg-[#f4f8f4] hover:bg-white p-5 rounded-xl border border-[#d4e7d8] hover:border-[#8bc349] hover:shadow-md transition-all space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-[#d4e7d8] text-xs font-bold text-[#034d20]">
                      <Clock className="w-3.5 h-3.5 text-[#8bc349]" />
                      <span>{session.time}</span>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${getTrackBadgeClass(session.track)}`}>
                      {session.track}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#1a2e22]/70 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#034d20]" />
                    <span>{session.location}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#034d20]">{session.title}</h4>
                  <p className="text-xs sm:text-sm text-[#1a2e22]/80 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {session.speaker && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#034d20] pt-1">
                    <User className="w-3.5 h-3.5 text-[#8bc349]" />
                    <span>Featured Facilitator: {session.speaker}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
