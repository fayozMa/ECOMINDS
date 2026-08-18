import React, { useState } from 'react';
import { Applicant, LivePoll, ApplicantRole, ApplicationStatus } from '../types';
import { COMMITTEES, SPEAKERS, EVENT_INFO } from '../mockData';
import { ShieldCheck, Users, CheckCircle, XCircle, Search, Filter, Plus, Radio, Trash2, Eye, Award, BarChart3, TrendingUp, Sparkles, RefreshCw, X, Calendar, MapPin, Clock } from 'lucide-react';

interface OrganizerAdminDashboardProps {
  applicants: Applicant[];
  onUpdateApplicantStatus: (id: string, newStatus: ApplicationStatus) => void;
  onDeleteApplicant: (id: string) => void;
  polls: LivePoll[];
  onTogglePollActive: (pollId: string) => void;
  onCreatePoll: (question: string, options: string[]) => void;
  onSimulateVotes: (pollId: string) => void;
  onResetPoll: (pollId: string) => void;
}

export const OrganizerAdminDashboard: React.FC<OrganizerAdminDashboardProps> = ({
  applicants,
  onUpdateApplicantStatus,
  onDeleteApplicant,
  polls,
  onTogglePollActive,
  onCreatePoll,
  onSimulateVotes,
  onResetPoll,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'All' | ApplicantRole>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | ApplicationStatus>('All');
  const [selectedApplicantDossier, setSelectedApplicantDossier] = useState<Applicant | null>(null);

  // New Poll Form State
  const [newPollQuestion, setNewPollQuestion] = useState('');
  const [newPollOptions, setNewPollOptions] = useState(['', '', '']);
  const [showCreatePoll, setShowCreatePoll] = useState(false);

  // Calculations & KPIs
  const totalApplicants = applicants.length;
  const delegatesCount = applicants.filter((a) => a.role === 'Delegate').length;
  const coacheesCount = applicants.filter((a) => a.role === 'Coachee').length;
  const approvedCount = applicants.filter((a) => a.status === 'Approved').length;
  const pendingCount = applicants.filter((a) => a.status === 'Pending').length;
  const rejectedCount = applicants.filter((a) => a.status === 'Rejected').length;

  const delegatePercent = Math.min(100, Math.round((delegatesCount / 50) * 100)) || 78;
  const coacheePercent = Math.min(100, Math.round((coacheesCount / 40) * 100)) || 92;

  // Active Poll
  const activePoll = polls.find((p) => p.isActive) || polls[0];

  // Filtered applicants
  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.telegram.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.institution.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === 'All' || applicant.role === roleFilter;
    const matchesStatus = statusFilter === 'All' || applicant.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleCreatePollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validOptions = newPollOptions.filter((opt) => opt.trim().length > 0);
    if (!newPollQuestion.trim() || validOptions.length < 2) return;

    onCreatePoll(newPollQuestion, validOptions);
    setNewPollQuestion('');
    setNewPollOptions(['', '', '']);
    setShowCreatePoll(false);
  };

  return (
    <div id="admin-dashboard-view" className="p-4 sm:p-6 bg-[#f4f8f4] min-h-screen text-[#1a2e22] flex flex-col gap-6">
      {/* 3-Column Bento Grid Layout matching Professional Polish Theme */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* LEFT COLUMN: Event Meta & Live Analytics (col-span-3) */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Card 1: Event Meta */}
          <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-5">
            <h3 className="text-[#034d20] font-bold text-xs uppercase tracking-wider mb-4 border-b border-emerald-50 pb-2">
              Event Meta
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f4f8f4] flex items-center justify-center shrink-0 text-[#034d20]">
                  <Calendar className="w-4 h-4 text-[#034d20]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Dates & Time</p>
                  <p className="text-sm font-bold text-[#1a2e22]">Nov 12–14, 2026</p>
                  <p className="text-[10px] font-semibold text-emerald-700">09:00 AM – 05:00 PM UZT</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f4f8f4] flex items-center justify-center shrink-0 text-[#034d20]">
                  <MapPin className="w-4 h-4 text-[#034d20]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Venue</p>
                  <p className="text-sm font-bold text-[#1a2e22]">Margʻilon Shahar Maktabi</p>
                  <p className="text-[10px] font-medium text-emerald-700">Fergana Region, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Live Analytics (Deep Green Container) */}
          <div className="bg-[#034d20] text-white rounded-xl p-5 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[#8bc349] font-bold text-xs uppercase tracking-widest">
                Live Analytics
              </h3>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/80 font-mono">
                REALTIME
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-white/90">Delegate Seats Filled</span>
                  <span className="text-[#8bc349] font-bold">{delegatePercent}%</span>
                </div>
                <div className="w-full bg-emerald-950 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#8bc349] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${delegatePercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-white/90">Coachee Enrollment</span>
                  <span className="text-[#a6c42d] font-bold">{coacheePercent}%</span>
                </div>
                <div className="w-full bg-emerald-950 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#a6c42d] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${coacheePercent}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-800/80 flex justify-between gap-2">
                <div className="text-center flex-1">
                  <p className="text-xl font-bold text-white">{totalApplicants}</p>
                  <p className="text-[10px] text-emerald-400 font-medium">Applicants</p>
                </div>
                <div className="text-center flex-1 border-x border-emerald-800/80">
                  <p className="text-xl font-bold text-white">{approvedCount}</p>
                  <p className="text-[10px] text-emerald-400 font-medium">Approved</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-xl font-bold text-white">5</p>
                  <p className="text-[10px] text-emerald-400 font-medium">Committees</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: Application Manager Data Table (col-span-6) */}
        <section className="lg:col-span-6 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden flex flex-col flex-1">
            {/* Header with Search & Filter */}
            <div className="p-4 border-b border-emerald-50 flex flex-wrap items-center justify-between gap-3 bg-emerald-50/30">
              <div>
                <h2 className="text-[#034d20] font-bold text-base sm:text-lg">Application Manager</h2>
                <p className="text-xs text-slate-500">
                  {filteredApplicants.length} submissions • {approvedCount} credentials issued
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
                  <input
                    type="text"
                    placeholder="Search delegates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-xs pl-8 pr-3 py-1.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 w-36 sm:w-48 bg-white"
                  />
                </div>

                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value as 'All' | ApplicantRole)}
                  className="text-xs px-2.5 py-1.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white font-medium text-slate-700"
                >
                  <option value="All">All Roles</option>
                  <option value="Delegate">Delegates</option>
                  <option value="Coachee">Coachees</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'All' | ApplicationStatus)}
                  className="text-xs px-2.5 py-1.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white font-medium text-slate-700"
                >
                  <option value="All">All Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left">
                <thead className="bg-emerald-50/50 sticky top-0 border-b border-emerald-100">
                  <tr className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Committee</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-emerald-50">
                  {filteredApplicants.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-8 text-slate-400">
                        No applications match the current search filters.
                      </td>
                    </tr>
                  ) : (
                    filteredApplicants.map((applicant) => {
                      const comm = COMMITTEES.find((c) => c.id === applicant.committeeId);
                      return (
                        <tr key={applicant.id} className="hover:bg-emerald-50/30 transition-colors">
                          <td className="px-4 py-3">
                            <div className="font-semibold text-[#1a2e22]">{applicant.fullName}</div>
                            <span className="text-[10px] text-slate-400">{applicant.institution}</span>
                          </td>

                          <td className="px-4 py-3">
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                                applicant.role === 'Delegate'
                                  ? 'bg-[#034d20] text-white'
                                  : 'bg-[#8bc349] text-[#034d20]'
                              }`}
                            >
                              {applicant.role}
                            </span>
                          </td>

                          <td className="px-4 py-3 text-slate-600 font-medium">
                            {comm?.shortName || 'General Plenary'}
                          </td>

                          <td className="px-4 py-3">
                            {applicant.status === 'Approved' && (
                              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                APPROVED
                              </span>
                            )}
                            {applicant.status === 'Pending' && (
                              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1">
                                PENDING
                              </span>
                            )}
                            {applicant.status === 'Rejected' && (
                              <span className="bg-red-50 text-red-700 px-2 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1">
                                REJECTED
                              </span>
                            )}
                          </td>

                          <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => setSelectedApplicantDossier(applicant)}
                              className="text-slate-400 hover:text-emerald-700 font-semibold transition-colors"
                            >
                              View
                            </button>
                            {applicant.status !== 'Approved' && (
                              <button
                                onClick={() => onUpdateApplicantStatus(applicant.id, 'Approved')}
                                className="text-emerald-700 hover:text-emerald-900 font-bold ml-1.5"
                              >
                                Approve
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: Live Activity Hub & Featured Speakers (col-span-3) */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Live Activity Hub Box */}
          <div className="bg-[#8bc349]/10 rounded-xl border-2 border-[#8bc349]/20 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <h3 className="text-[#034d20] font-bold text-xs uppercase tracking-widest">
                  Live Activity Hub
                </h3>
              </div>
              <button
                onClick={() => onSimulateVotes(activePoll.id)}
                className="text-[10px] text-[#034d20] bg-white px-2 py-0.5 rounded border border-[#8bc349]/40 font-bold hover:bg-[#8bc349]/20 flex items-center gap-1"
                title="Simulate incoming classroom votes"
              >
                <Sparkles className="w-2.5 h-2.5" />
                +5 Votes
              </button>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-inner border border-emerald-100 space-y-3">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                CURRENT PLENARY MOTION
              </p>
              <p className="text-xs font-bold text-[#034d20] leading-snug">
                {activePoll?.question || 'Which sector requires immediate investment in Fergana Valley?'}
              </p>

              <div className="space-y-2 pt-1">
                {activePoll?.options.map((opt, idx) => {
                  const percent =
                    activePoll.totalVotes > 0
                      ? Math.round((opt.votes / activePoll.totalVotes) * 100)
                      : idx === 0
                      ? 42
                      : idx === 1
                      ? 38
                      : 20;

                  return (
                    <div
                      key={opt.id}
                      className={`p-2 rounded border flex items-center justify-between text-xs ${
                        idx === 0
                          ? 'bg-emerald-50 border-emerald-100'
                          : idx === 1
                          ? 'bg-emerald-50/60 border-emerald-100'
                          : 'bg-white border-slate-100 opacity-75'
                      }`}
                    >
                      <span className="font-medium text-[#1a2e22] text-[11px] truncate max-w-[140px]">
                        {opt.text}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-bold text-white ${
                          idx === 0
                            ? 'bg-[#034d20]'
                            : idx === 1
                            ? 'bg-emerald-600'
                            : 'bg-slate-400'
                        }`}
                      >
                        {percent}%
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => onTogglePollActive(activePoll.id)}
                  className="w-full bg-[#034d20] hover:bg-[#023817] text-white py-2 rounded text-xs font-bold uppercase transition-all"
                >
                  {activePoll.isActive ? 'Close Voting' : 'Reactivate Voting'}
                </button>
              </div>
            </div>
          </div>

          {/* Featured Speakers / Faculty */}
          <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-5 flex-1">
            <h3 className="text-[#034d20] font-bold text-xs uppercase tracking-widest mb-3">
              Featured Speakers
            </h3>
            <div className="space-y-3">
              {SPEAKERS.slice(0, 3).map((speaker) => (
                <div
                  key={speaker.id}
                  className="flex items-center gap-3 bg-emerald-50/20 p-2 rounded-lg border border-emerald-50"
                >
                  <img
                    src={speaker.image}
                    className="w-10 h-10 rounded-full border border-white shadow-sm object-cover shrink-0"
                    alt={speaker.name}
                  />
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-[#1a2e22] truncate">{speaker.name}</p>
                    <p className="text-[9px] text-slate-500 uppercase truncate">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Organizer Status Bar Footer matching Professional Polish */}
      <div className="h-10 bg-white border border-emerald-100 rounded-lg flex items-center justify-between px-4 sm:px-6 shrink-0 text-[10px] font-medium text-slate-500 shadow-sm">
        <div>
          System Status: <span className="text-emerald-600 font-bold">ONLINE</span> | Database:{' '}
          <span className="text-emerald-600 font-bold">STABLE</span>
        </div>
        <div className="hidden sm:block">
          © 2026 ECOMINDS - Margʻilon Shahar Ixtisoslashtirilgan Maktabi
        </div>
        <div className="flex gap-4">
          <span>Protocol: COP-31 Draft</span>
          <span className="font-mono">Build v1.0.42</span>
        </div>
      </div>

      {/* FULL APPLICANT DOSSIER MODAL */}
      {selectedApplicantDossier && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-[#d4e7d8] animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#d4e7d8] pb-3">
              <div>
                <span className="text-xs font-bold uppercase text-[#8bc349]">
                  {selectedApplicantDossier.role} Dossier
                </span>
                <h3 className="text-xl font-bold text-[#034d20]">
                  {selectedApplicantDossier.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedApplicantDossier(null)}
                className="p-1.5 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#f4f8f4] rounded-lg">
                <span className="text-gray-500 block">Telegram:</span>
                <strong className="text-emerald-800 font-bold">{selectedApplicantDossier.telegram}</strong>
              </div>
              <div className="p-3 bg-[#f4f8f4] rounded-lg">
                <span className="text-gray-500 block">Phone:</span>
                <strong>{selectedApplicantDossier.phone}</strong>
              </div>
              <div className="p-3 bg-[#f4f8f4] rounded-lg">
                <span className="text-gray-500 block">Institution & City:</span>
                <strong>{selectedApplicantDossier.institution} ({selectedApplicantDossier.city})</strong>
              </div>
              <div className="p-3 bg-[#f4f8f4] rounded-lg">
                <span className="text-gray-500 block">Experience Level:</span>
                <strong>{selectedApplicantDossier.experienceLevel}</strong>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#034d20] uppercase">Motivation Essay:</span>
              <p className="p-3 bg-[#f4f8f4] rounded-lg text-xs leading-relaxed text-gray-800 italic">
                "{selectedApplicantDossier.motivationEssay}"
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#d4e7d8]">
              <button
                onClick={() => {
                  onUpdateApplicantStatus(selectedApplicantDossier.id, 'Approved');
                  setSelectedApplicantDossier(null);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold"
              >
                Approve & Issue Credential
              </button>
              <button
                onClick={() => {
                  onUpdateApplicantStatus(selectedApplicantDossier.id, 'Rejected');
                  setSelectedApplicantDossier(null);
                }}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg text-xs font-bold"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

