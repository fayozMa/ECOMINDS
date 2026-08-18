import React, { useState } from 'react';
import { LivePoll } from '../types';
import { Radio, CheckCircle, BarChart3, Users, Sparkles, RefreshCw, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveActivityModuleProps {
  polls: LivePoll[];
  onVote: (pollId: string, optionId: string) => void;
}

export const LiveActivityModule: React.FC<LiveActivityModuleProps> = ({ polls, onVote }) => {
  const activePoll = polls.find((p) => p.isActive) || polls[0];
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [votedPollId, setVotedPollId] = useState<string | null>(null);

  const handleVoteSubmit = () => {
    if (!selectedOptionId || !activePoll) return;
    onVote(activePoll.id, selectedOptionId);
    setHasVoted(true);
    setVotedPollId(activePoll.id);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#034d20', '#8bc349', '#a6c42d']
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  const currentPollHasVoted = hasVoted && votedPollId === activePoll?.id;

  return (
    <section id="live-activity-section" className="py-20 bg-[#034d20] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8bc349]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#a6c42d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#8bc349]/40 text-[#a6c42d] text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-red-400 animate-ping" />
            <span>Interactive Classroom Live Feed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            MCOP Plenary Live Polling
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Cast your official vote on critical plenary debates. Results recalculate in real-time on the main assembly projector.
          </p>
        </div>

        {/* Live Question Card */}
        {activePoll ? (
          <div className="bg-white text-[#1a2e22] rounded-2xl border-2 border-[#8bc349] p-6 sm:p-10 shadow-2xl space-y-6">
            {/* Status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#d4e7d8]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#034d20] uppercase tracking-wider">
                  Active Motion Under Debate
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#034d20] bg-[#f4f8f4] px-3 py-1 rounded-full border border-[#d4e7d8]">
                <Users className="w-3.5 h-3.5 text-[#8bc349]" />
                <span>{activePoll.totalVotes} Total Votes Cast</span>
              </div>
            </div>

            {/* Question title */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-[#034d20] leading-snug">
                {activePoll.question}
              </h3>
              {activePoll.description && (
                <p className="text-xs text-[#1a2e22]/70 italic">
                  {activePoll.description}
                </p>
              )}
            </div>

            {/* Voting Options */}
            <div className="space-y-3">
              {activePoll.options.map((option) => {
                const percentage =
                  activePoll.totalVotes > 0
                    ? Math.round((option.votes / activePoll.totalVotes) * 100)
                    : 0;
                const isSelected = selectedOptionId === option.id;

                return (
                  <div
                    key={option.id}
                    id={`poll-option-${option.id}`}
                    onClick={() => {
                      if (!currentPollHasVoted) {
                        setSelectedOptionId(option.id);
                      }
                    }}
                    className={`relative overflow-hidden p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      currentPollHasVoted
                        ? 'border-[#d4e7d8] bg-[#f4f8f4]'
                        : isSelected
                        ? 'border-[#034d20] bg-emerald-50 shadow-md ring-2 ring-[#8bc349]'
                        : 'border-[#d4e7d8] hover:border-[#8bc349] bg-white'
                    }`}
                  >
                    {/* Animated Results Progress Bar behind text */}
                    {currentPollHasVoted && (
                      <div
                        className="absolute inset-0 bg-[#8bc349]/20 transition-all duration-700 pointer-events-none"
                        style={{ width: `${percentage}%` }}
                      />
                    )}

                    <div className="relative flex items-center justify-between gap-4 z-10">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-[#034d20] bg-[#034d20] text-white'
                              : 'border-gray-400 bg-white'
                          }`}
                        >
                          {isSelected && <CheckCircle className="w-3.5 h-3.5" />}
                        </div>
                        <span className="font-bold text-sm text-[#1a2e22]">
                          {option.text}
                        </span>
                      </div>

                      {currentPollHasVoted && (
                        <div className="text-right shrink-0">
                          <span className="text-base font-black text-[#034d20]">
                            {percentage}%
                          </span>
                          <span className="text-[11px] text-[#1a2e22]/60 block">
                            {option.votes} votes
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              {!currentPollHasVoted ? (
                <button
                  id="submit-poll-vote-btn"
                  onClick={handleVoteSubmit}
                  disabled={!selectedOptionId}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all ${
                    selectedOptionId
                      ? 'bg-[#034d20] hover:bg-[#023817] text-white cursor-pointer active:scale-95'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official Vote</span>
                </button>
              ) : (
                <div className="flex items-center gap-3 text-xs text-[#034d20] font-bold bg-emerald-100/70 px-4 py-2.5 rounded-xl border border-emerald-300">
                  <CheckCircle className="w-4 h-4 text-[#034d20]" />
                  <span>Your ballot has been officially recorded in the MCOP Plenary Ledger!</span>
                </div>
              )}

              {currentPollHasVoted && (
                <button
                  onClick={() => setHasVoted(false)}
                  className="text-xs font-semibold text-[#034d20] hover:underline flex items-center gap-1 ml-auto"
                >
                  <RefreshCw className="w-3 h-3" /> Change my selection
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white text-[#1a2e22] p-8 rounded-2xl text-center">
            No active poll available at this moment.
          </div>
        )}
      </div>
    </section>
  );
};
