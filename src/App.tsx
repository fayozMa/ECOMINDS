import React, { useState, useEffect } from 'react';
import { ViewMode, Applicant, ApplicantRole, ApplicationStatus, LivePoll } from './types';
import { INITIAL_APPLICANTS, INITIAL_POLLS, COMMITTEES } from './mockData';
import { TopPortalBar } from './components/TopPortalBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RolesSection } from './components/RolesSection';
import { CommitteesSection } from './components/CommitteesSection';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { LocationSection } from './components/LocationSection';
import { LiveActivityModule } from './components/LiveActivityModule';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ParticipantPortal } from './components/ParticipantPortal';
import { OrganizerAdminDashboard } from './components/OrganizerAdminDashboard';

export default function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<ViewMode>('public');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [preferredRole, setPreferredRole] = useState<ApplicantRole>('Delegate');
  const [preferredCommitteeId, setPreferredCommitteeId] = useState<string>(COMMITTEES[0].id);

  // Core Data State (with localStorage persistence)
  const [applicants, setApplicants] = useState<Applicant[]>(() => {
    const saved = localStorage.getItem('ecominds_applicants');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved applicants', e);
      }
    }
    return INITIAL_APPLICANTS;
  });

  const [currentApplicantId, setCurrentApplicantId] = useState<string>(() => {
    return INITIAL_APPLICANTS[0]?.id || 'APP-101';
  });

  const [polls, setPolls] = useState<LivePoll[]>(() => {
    const saved = localStorage.getItem('ecominds_polls');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved polls', e);
      }
    }
    return INITIAL_POLLS;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('ecominds_applicants', JSON.stringify(applicants));
  }, [applicants]);

  useEffect(() => {
    localStorage.setItem('ecominds_polls', JSON.stringify(polls));
  }, [polls]);

  // Handlers for Application Submission
  const handleOpenApply = (role?: ApplicantRole, commId?: string) => {
    if (role) setPreferredRole(role);
    if (commId) setPreferredCommitteeId(commId);
    setIsApplyModalOpen(true);
  };

  const handleSubmitApplication = (
    applicantData: Omit<Applicant, 'id' | 'appliedDate' | 'status'>
  ) => {
    const newId = `APP-${Math.floor(100 + Math.random() * 900)}`;
    const today = new Date().toISOString().split('T')[0];

    const newApplicant: Applicant = {
      ...applicantData,
      id: newId,
      appliedDate: today,
      status: 'Pending',
    };

    setApplicants((prev) => [newApplicant, ...prev]);
    setCurrentApplicantId(newId);
  };

  // Handlers for Admin Dashboard
  const handleUpdateApplicantStatus = (id: string, newStatus: ApplicationStatus) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const handleDeleteApplicant = (id: string) => {
    setApplicants((prev) => prev.filter((app) => app.id !== id));
  };

  // Handlers for Live Polling Activity
  const handleVote = (pollId: string, optionId: string) => {
    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId) return poll;
        const updatedOptions = poll.options.map((opt) =>
          opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
        );
        return {
          ...poll,
          totalVotes: poll.totalVotes + 1,
          options: updatedOptions,
        };
      })
    );
  };

  const handleTogglePollActive = (pollId: string) => {
    setPolls((prev) =>
      prev.map((poll) => ({
        ...poll,
        isActive: poll.id === pollId ? !poll.isActive : false,
      }))
    );
  };

  const handleCreatePoll = (question: string, optionTexts: string[]) => {
    const newPoll: LivePoll = {
      id: `poll-${Date.now()}`,
      question,
      isActive: true,
      totalVotes: 0,
      createdTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: optionTexts.map((text, idx) => ({
        id: `opt-${idx + 1}-${Date.now()}`,
        text,
        votes: 0,
      })),
    };

    // Set all other polls inactive, make new one active
    setPolls((prev) => [newPoll, ...prev.map((p) => ({ ...p, isActive: false }))]);
  };

  const handleSimulateVotes = (pollId: string) => {
    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId) return poll;
        const randomOptIndex = Math.floor(Math.random() * poll.options.length);
        const updatedOptions = poll.options.map((opt, idx) =>
          idx === randomOptIndex ? { ...opt, votes: opt.votes + 5 } : opt
        );
        return {
          ...poll,
          totalVotes: poll.totalVotes + 5,
          options: updatedOptions,
        };
      })
    );
  };

  const handleResetPoll = (pollId: string) => {
    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId) return poll;
        return {
          ...poll,
          totalVotes: 0,
          options: poll.options.map((opt) => ({ ...opt, votes: 0 })),
        };
      })
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f4] text-[#1a2e22]">
      {/* 1. Global View Switcher Toolbar (Public / Participant / Admin) */}
      <TopPortalBar
        currentView={currentView}
        onViewChange={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        applicantCount={applicants.length}
        onOpenApply={() => handleOpenApply()}
      />

      {/* Main Content Area Based on Current View */}
      {currentView === 'public' && (
        <>
          {/* Public Header Navigation */}
          <Navbar
            onOpenApply={(role) => handleOpenApply(role)}
            onNavigateToLive={() => {
              const el = document.getElementById('live-activity-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <main className="flex-1">
            {/* Hero Banner with Countdown and Dual CTAs */}
            <HeroSection
              onOpenApply={(role) => handleOpenApply(role)}
              onExploreCommittees={() => {
                const el = document.getElementById('committees-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* About MCOP & ECOMINDS Interactive Tabs */}
            <AboutSection />

            {/* Role Breakdown: Delegate vs Coachee */}
            <RolesSection
              onSelectRole={(role) => handleOpenApply(role)}
            />

            {/* 5 MCOP Simulation Committees Showcase */}
            <CommitteesSection
              onApplyForCommittee={(commId) => handleOpenApply('Delegate', commId)}
            />

            {/* 3-Day Filterable Interactive Agenda */}
            <AgendaSection />

            {/* Speakers & Coaches */}
            <SpeakersSection />

            {/* Margilan Specialized School Campus, Logistics & Google Maps */}
            <LocationSection />

            {/* Interactive Classroom Live Polling Feature */}
            <LiveActivityModule
              polls={polls}
              onVote={handleVote}
            />

            {/* Frequently Asked Questions Accordion */}
            <FaqSection />
          </main>

          {/* Footer */}
          <Footer onOpenApply={() => handleOpenApply()} />
        </>
      )}

      {/* 2. Participant Dashboard View */}
      {currentView === 'participant' && (
        <main className="flex-1">
          <ParticipantPortal
            applicants={applicants}
            currentApplicantId={currentApplicantId}
            onSelectApplicant={(id) => setCurrentApplicantId(id)}
            onOpenApply={() => handleOpenApply()}
          />
        </main>
      )}

      {/* 3. Organizer / Admin Dashboard View */}
      {currentView === 'admin' && (
        <main className="flex-1">
          <OrganizerAdminDashboard
            applicants={applicants}
            onUpdateApplicantStatus={handleUpdateApplicantStatus}
            onDeleteApplicant={handleDeleteApplicant}
            polls={polls}
            onTogglePollActive={handleTogglePollActive}
            onCreatePoll={handleCreatePoll}
            onSimulateVotes={handleSimulateVotes}
            onResetPoll={handleResetPoll}
          />
        </main>
      )}

      {/* Interactive Application Modal Wizard */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onSubmitApplication={handleSubmitApplication}
        defaultRole={preferredRole}
        defaultCommitteeId={preferredCommitteeId}
        onViewPortal={() => {
          setIsApplyModalOpen(false);
          setCurrentView('participant');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
