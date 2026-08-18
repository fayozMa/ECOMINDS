import React, { useState } from 'react';
import { Applicant } from '../types';
import { COMMITTEES, AGENDA, EVENT_INFO } from '../mockData';
import { UserCheck, Calendar, ShieldCheck, Compass, QrCode, Download, Clock, MapPin, CheckCircle, AlertCircle, Sparkles, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ParticipantPortalProps {
  applicants: Applicant[];
  currentApplicantId: string;
  onSelectApplicant: (id: string) => void;
  onOpenApply: () => void;
}

export const ParticipantPortal: React.FC<ParticipantPortalProps> = ({
  applicants,
  currentApplicantId,
  onSelectApplicant,
  onOpenApply,
}) => {
  const currentApplicant =
    applicants.find((a) => a.id === currentApplicantId) || applicants[0];

  const assignedCommittee =
    COMMITTEES.find((c) => c.id === currentApplicant?.committeeId) || COMMITTEES[0];

  const [activeTab, setActiveTab] = useState<'badge' | 'schedule' | 'submissions'>('badge');

  const handlePrintBadge = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#034d20', '#8bc349', '#a6c42d']
      });
    } catch {}
    window.print();
  };

  const getStatusBadge = (status: Applicant['status']) => {
    switch (status) {
      case 'Approved':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Approved & Credentialed
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            Under Committee Review
          </span>
        );
      case 'Rejected':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-300">
            Observer Track Recommended
          </span>
        );
    }
  };

  return (
    <div id="participant-portal-view" className="py-12 bg-[#f4f8f4] min-h-screen text-[#1a2e22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header & Profile Switcher for Testing */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#d4e7d8] shadow-md flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#034d20]/10 text-[#034d20] text-xs font-bold uppercase tracking-wider">
                Participant Portal
              </span>
              {getStatusBadge(currentApplicant?.status || 'Approved')}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#034d20]">
              Welcome, {currentApplicant?.fullName || 'Participant'}
            </h1>
            <p className="text-xs sm:text-sm text-[#1a2e22]/70">
              {currentApplicant?.role} • {assignedCommittee.name} • {currentApplicant?.institution}
            </p>
          </div>

          {/* Quick Profile Switcher to test various roles/statuses */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-[#f4f8f4] p-3 rounded-xl border border-[#d4e7d8]">
            <span className="text-xs font-bold text-[#034d20] uppercase tracking-wider">
              Switch Test Profile:
            </span>
            <select
              id="select-participant-profile"
              value={currentApplicant?.id}
              onChange={(e) => onSelectApplicant(e.target.value)}
              className="bg-white border border-[#d4e7d8] rounded-lg px-3 py-1.5 text-xs font-bold text-[#1a2e22] focus:outline-none focus:ring-2 focus:ring-[#8bc349]"
            >
              {applicants.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.fullName} ({a.role} - {a.status})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-start sm:justify-center border-b border-[#d4e7d8] overflow-x-auto">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('badge')}
              className={`pb-3 px-5 text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'badge'
                  ? 'border-[#034d20] text-[#034d20]'
                  : 'border-transparent text-gray-500 hover:text-[#034d20]'
              }`}
            >
              <QrCode className="w-4 h-4 text-[#8bc349]" />
              <span>Official Delegate Badge</span>
            </button>

            <button
              onClick={() => setActiveTab('schedule')}
              className={`pb-3 px-5 text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'schedule'
                  ? 'border-[#034d20] text-[#034d20]'
                  : 'border-transparent text-gray-500 hover:text-[#034d20]'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#8bc349]" />
              <span>Personal Committee Schedule</span>
            </button>

            <button
              onClick={() => setActiveTab('submissions')}
              className={`pb-3 px-5 text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'submissions'
                  ? 'border-[#034d20] text-[#034d20]'
                  : 'border-transparent text-gray-500 hover:text-[#034d20]'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#8bc349]" />
              <span>Application Details & Status</span>
            </button>
          </div>
        </div>

        {/* TAB 1: BADGE PREVIEW & DOWNLOAD */}
        {activeTab === 'badge' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Printable Badge */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                id="participant-badge-card"
                className="w-full max-w-sm bg-white rounded-3xl border-4 border-[#034d20] shadow-2xl overflow-hidden text-center relative"
              >
                {/* Lanyard Hole Mock */}
                <div className="h-6 bg-[#034d20] flex items-center justify-center">
                  <div className="w-10 h-2 bg-white/40 rounded-full" />
                </div>

                {/* Badge Header Banner */}
                <div className="bg-gradient-to-r from-[#034d20] via-[#04682c] to-[#023817] p-6 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#a6c42d]">
                    Official Credential
                  </span>
                  <h2 className="text-2xl font-black tracking-tight">{EVENT_INFO.name}</h2>
                  <p className="text-xs text-[#8bc349] font-bold uppercase">{EVENT_INFO.concept} • 2026</p>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  {/* Role Tag Banner */}
                  <div
                    className={`py-2 px-4 rounded-xl text-xs font-black uppercase tracking-wider ${
                      currentApplicant?.role === 'Delegate'
                        ? 'bg-[#034d20] text-[#8bc349]'
                        : 'bg-[#8bc349] text-[#034d20]'
                    }`}
                  >
                    {currentApplicant?.role || 'Delegate'} Credential
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-[#034d20]">
                      {currentApplicant?.fullName || 'Participant'}
                    </h3>
                    <p className="text-xs font-semibold text-gray-600">
                      {currentApplicant?.institution}
                    </p>
                  </div>

                  {/* Assigned Committee Box */}
                  <div className="p-3 bg-[#f4f8f4] rounded-xl border border-[#d4e7d8] text-xs">
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">
                      Assigned Chamber:
                    </span>
                    <strong className="text-[#034d20] block pt-0.5">
                      {assignedCommittee.name}
                    </strong>
                  </div>

                  {/* QR Code Mock */}
                  <div className="pt-2 flex flex-col items-center justify-center space-y-1">
                    <div className="p-3 bg-white border-2 border-dashed border-[#034d20] rounded-xl shadow-inner inline-block">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#034d20] to-[#8bc349] p-2 rounded-lg flex items-center justify-center text-white">
                        <QrCode className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">
                      ID: {currentApplicant?.id || 'ECO-2026-001'}
                    </span>
                  </div>
                </div>

                {/* Badge Footer */}
                <div className="bg-[#f4f8f4] border-t border-[#d4e7d8] py-2 text-[10px] text-gray-500 font-semibold">
                  {EVENT_INFO.venue} • Nov 12–14, 2026
                </div>
              </div>
            </div>

            {/* Right: Badge Controls & Instructions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-[#034d20]">
                  Your Digital Summit Credential
                </h3>
                <p className="text-sm text-[#1a2e22]/80 leading-relaxed">
                  This official badge confirms your credentialed access to all committee chambers, diplomatic luncheons, and plenary halls at Margʻilon shahar ixtisoslashtirilgan maktabi.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#d4e7d8]">
                  <CheckCircle className="w-5 h-5 text-[#8bc349] shrink-0" />
                  <div className="text-xs">
                    <strong className="text-[#034d20] block">Badge Verification:</strong>
                    Show this QR code at the Registration Desk on Nov 12, 08:30 AM to receive your physical lanyard and delegate dossier.
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#d4e7d8]">
                  <ShieldCheck className="w-5 h-5 text-[#8bc349] shrink-0" />
                  <div className="text-xs">
                    <strong className="text-[#034d20] block">Dress Code:</strong>
                    Western Formal / Diplomatic Business Attire or National Silk Elements required for all plenary debates.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  id="btn-print-badge"
                  onClick={handlePrintBadge}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#034d20] hover:bg-[#023817] text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <Printer className="w-4 h-4 text-[#8bc349]" />
                  <span>Print Badge / Save as PDF</span>
                </button>

                <a
                  href={EVENT_INFO.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#229ED9] hover:bg-[#1e8cc0] text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Telegram Delegate Group</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PERSONAL SCHEDULE */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl border border-[#d4e7d8] p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#d4e7d8]">
              <div>
                <h3 className="text-xl font-bold text-[#034d20]">
                  Assigned Track Agenda: {currentApplicant?.role}
                </h3>
                <p className="text-xs text-[#1a2e22]/70">
                  {assignedCommittee.name}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f4f8f4] text-xs font-bold text-[#034d20] border border-[#d4e7d8]">
                Room 102 • Margilan Campus
              </span>
            </div>

            <div className="space-y-4">
              {AGENDA.filter(
                (s) =>
                  s.track === 'Plenary' ||
                  s.track === (currentApplicant?.role === 'Delegate' ? 'Delegates' : 'Coachees') ||
                  s.track === 'Networking'
              ).map((session) => (
                <div
                  key={session.id}
                  className="p-4 rounded-xl bg-[#f4f8f4] border border-[#d4e7d8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#034d20] text-white rounded text-[10px] font-bold">
                        Day {session.day}
                      </span>
                      <span className="text-xs font-bold text-[#034d20]">{session.time}</span>
                      <span className="text-xs font-semibold text-gray-500">• {session.location}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#1a2e22]">{session.title}</h4>
                    <p className="text-xs text-gray-600">{session.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SUBMISSION DETAILS & NOTES */}
        {activeTab === 'submissions' && (
          <div className="bg-white rounded-2xl border border-[#d4e7d8] p-6 sm:p-8 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-[#034d20] border-b border-[#d4e7d8] pb-4">
              Application Dossier
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#f4f8f4] space-y-1">
                <span className="text-gray-500 block">Full Name:</span>
                <strong className="text-sm text-[#034d20]">{currentApplicant?.fullName}</strong>
              </div>
              <div className="p-4 rounded-xl bg-[#f4f8f4] space-y-1">
                <span className="text-gray-500 block">Registered Email & Phone:</span>
                <strong className="text-sm text-[#034d20]">{currentApplicant?.email} • {currentApplicant?.phone}</strong>
              </div>
              <div className="p-4 rounded-xl bg-[#f4f8f4] space-y-1">
                <span className="text-gray-500 block">Telegram Handle:</span>
                <strong className="text-sm text-[#034d20]">{currentApplicant?.telegram}</strong>
              </div>
              <div className="p-4 rounded-xl bg-[#f4f8f4] space-y-1">
                <span className="text-gray-500 block">Application Date:</span>
                <strong className="text-sm text-[#034d20]">{currentApplicant?.appliedDate}</strong>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#034d20]">
                Submitted Motivation Statement:
              </h4>
              <div className="p-4 rounded-xl bg-[#f4f8f4] border border-[#d4e7d8] text-xs leading-relaxed italic text-gray-800">
                "{currentApplicant?.motivationEssay}"
              </div>
            </div>

            {currentApplicant?.notes && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                <span className="font-bold text-[#034d20] block">Official Committee Dais Notes:</span>
                <p className="text-emerald-900">{currentApplicant.notes}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
