import React, { useState, useEffect } from 'react';
import { Applicant, ApplicantRole } from '../types';
import { COMMITTEES, EVENT_INFO } from '../mockData';
import { X, Check, ArrowRight, ArrowLeft, ShieldCheck, Compass, Sparkles, Send, ExternalLink, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitApplication: (applicant: Omit<Applicant, 'id' | 'appliedDate' | 'status'>) => void;
  defaultRole?: ApplicantRole;
  defaultCommitteeId?: string;
  onViewPortal: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  onSubmitApplication,
  defaultRole = 'Delegate',
  defaultCommitteeId,
  onViewPortal,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [institution, setInstitution] = useState<string>('');
  const [city, setCity] = useState<string>('Margilan');
  const [role, setRole] = useState<ApplicantRole>(defaultRole);
  const [committeeId, setCommitteeId] = useState<string>(defaultCommitteeId || COMMITTEES[0].id);
  const [experienceLevel, setExperienceLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [motivationEssay, setMotivationEssay] = useState<string>('');
  const [projectIdeaEssay, setProjectIdeaEssay] = useState<string>('');
  const [policyInterestEssay, setPolicyInterestEssay] = useState<string>('');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (defaultRole) {
      setRole(defaultRole);
    }
    if (defaultCommitteeId) {
      setCommitteeId(defaultCommitteeId);
    }
  }, [defaultRole, defaultCommitteeId]);

  if (!isOpen) return null;

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!fullName.trim()) errs.fullName = 'Full name is required';
      if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
      if (!phone.trim()) errs.phone = 'Phone number is required';
      if (!telegram.trim()) {
        errs.telegram = 'Telegram username is required (e.g., @username)';
      } else if (!telegram.startsWith('@')) {
        setTelegram(`@${telegram}`);
      }
      if (!institution.trim()) errs.institution = 'Institution/School name is required';
      if (!city.trim()) errs.city = 'City/Region is required';
    }

    if (currentStep === 2) {
      if (!committeeId) errs.committeeId = 'Please select a primary committee';
      if (role === 'Coachee' && !projectIdeaEssay.trim()) {
        errs.projectIdeaEssay = 'Please briefly outline your green project or idea';
      }
    }

    if (currentStep === 3) {
      if (!motivationEssay.trim() || motivationEssay.trim().length < 30) {
        errs.motivationEssay = 'Please write at least 30 characters explaining your motivation';
      }
      if (role === 'Delegate' && (!policyInterestEssay.trim() || policyInterestEssay.trim().length < 20)) {
        errs.policyInterestEssay = 'Please specify the climate policy area you wish to draft';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) {
      setStep(3);
      return;
    }

    const applicationPayload: Omit<Applicant, 'id' | 'appliedDate' | 'status'> = {
      fullName,
      email,
      phone,
      telegram: telegram.startsWith('@') ? telegram : `@${telegram}`,
      institution,
      city,
      role,
      committeeId,
      experienceLevel,
      motivationEssay,
      projectIdeaEssay: role === 'Coachee' ? projectIdeaEssay : undefined,
      policyInterestEssay: role === 'Delegate' ? policyInterestEssay : undefined,
      notes: `Submitted via official online portal. Preferred role: ${role}`,
    };

    onSubmitApplication(applicationPayload);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#034d20', '#8bc349', '#a6c42d']
      });
    } catch {
      // Ignore
    }
  };

  const selectedCommObj = COMMITTEES.find((c) => c.id === committeeId) || COMMITTEES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        id="application-modal-dialog"
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#d4e7d8] overflow-hidden my-8"
      >
        {/* Modal Top Header */}
        <div className="bg-[#034d20] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#8bc349]/30 text-[#a6c42d] text-[10px] font-bold uppercase tracking-wider">
                Official Application
              </span>
              <span className="text-xs text-white/70">ECOMINDS MCOP 2026</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {isSubmitted ? 'Application Confirmed!' : 'Apply for ECOMINDS Summit'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Submission Success Screen */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#034d20] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#034d20]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#034d20]">
                  Congratulations, {fullName}!
                </h3>
                <p className="text-sm text-[#1a2e22]/80 max-w-md mx-auto leading-relaxed">
                  Your application for the <strong>{role}</strong> track in the <strong>{selectedCommObj.shortName}</strong> committee has been received and stored in the official registry.
                </p>
              </div>

              {/* Critical Step: Official Telegram Channel Link */}
              <div className="p-5 bg-[#f4f8f4] rounded-2xl border-2 border-[#8bc349] text-left space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#034d20] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#8bc349]" />
                  Mandatory Next Step for All Applicants
                </div>
                <p className="text-xs sm:text-sm text-[#1a2e22]/90 leading-relaxed">
                  Please join our official <strong>ECOMINDS Telegram Channel</strong> to receive the Study Guide, committee allocation announcements, and webinar links.
                </p>

                <a
                  id="btn-join-telegram"
                  href={EVENT_INFO.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#229ED9] hover:bg-[#1e8cc0] text-white font-bold rounded-xl text-sm shadow-md transition-all"
                >
                  <span>Join @ecominds_mcop Official Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onViewPortal();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#034d20] hover:bg-[#023817] text-white font-bold text-xs shadow-md transition-all"
                >
                  View My Participant Dashboard
                </button>
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1a2e22] font-semibold text-xs transition-colors"
                >
                  Close & Back to Site
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Application Wizard */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper Indicator */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[
                  { num: 1, label: 'Personal' },
                  { num: 2, label: 'Role & Topic' },
                  { num: 3, label: 'Essays' },
                  { num: 4, label: 'Review' },
                ].map((s) => (
                  <div key={s.num} className="text-center space-y-1">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        step >= s.num ? 'bg-[#034d20]' : 'bg-[#d4e7d8]'
                      }`}
                    />
                    <span
                      className={`text-[10px] font-bold block truncate ${
                        step === s.num ? 'text-[#034d20]' : 'text-gray-400'
                      }`}
                    >
                      {s.num}. {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STEP 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-base font-bold text-[#034d20] border-b border-[#d4e7d8] pb-2">
                    Step 1: Personal & Contact Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        Full Name *
                      </label>
                      <input
                        id="input-applicant-name"
                        type="text"
                        placeholder="e.g. Jasurbek Alimov"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                          errors.fullName ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.fullName}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        Email Address *
                      </label>
                      <input
                        id="input-applicant-email"
                        type="email"
                        placeholder="e.g. jasur@example.uz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.email}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        Phone Number *
                      </label>
                      <input
                        id="input-applicant-phone"
                        type="text"
                        placeholder="e.g. +998 90 123 45 67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.phone}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        Telegram Username *
                      </label>
                      <input
                        id="input-applicant-telegram"
                        type="text"
                        placeholder="@username"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                          errors.telegram ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                        }`}
                      />
                      {errors.telegram && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.telegram}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        School / University / Organization *
                      </label>
                      <input
                        id="input-applicant-institution"
                        type="text"
                        placeholder="e.g. Margʻilon shahar ixtisoslashtirilgan maktabi"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                          errors.institution ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                        }`}
                      />
                      {errors.institution && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.institution}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        City / Region *
                      </label>
                      <input
                        id="input-applicant-city"
                        type="text"
                        placeholder="e.g. Margilan, Fergana"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d4e7d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Role Selection & Committee Assignment */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="text-base font-bold text-[#034d20] border-b border-[#d4e7d8] pb-2">
                    Step 2: Choose Track & Committee
                  </h3>

                  {/* Role Selector Tabs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      onClick={() => setRole('Delegate')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        role === 'Delegate'
                          ? 'border-[#034d20] bg-emerald-50 shadow-md ring-2 ring-[#8bc349]'
                          : 'border-[#d4e7d8] bg-white hover:border-[#8bc349]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#034d20]" />
                        <span className="font-bold text-sm text-[#034d20]">Delegate Track</span>
                      </div>
                      <p className="text-xs text-[#1a2e22]/70 mt-1">
                        Parliamentary debate, resolution drafting, voting.
                      </p>
                    </div>

                    <div
                      onClick={() => setRole('Coachee')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        role === 'Coachee'
                          ? 'border-[#8bc349] bg-lime-50 shadow-md ring-2 ring-[#034d20]'
                          : 'border-[#d4e7d8] bg-white hover:border-[#8bc349]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Compass className="w-5 h-5 text-[#034d20]" />
                        <span className="font-bold text-sm text-[#034d20]">Coachee Track</span>
                      </div>
                      <p className="text-xs text-[#1a2e22]/70 mt-1">
                        Design thinking, prototype coaching, project pitch.
                      </p>
                    </div>
                  </div>

                  {/* Committee Selection */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#1a2e22]">
                      Target MCOP Committee *
                    </label>
                    <select
                      id="select-applicant-committee"
                      value={committeeId}
                      onChange={(e) => setCommitteeId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d4e7d8] text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] bg-white"
                    >
                      {COMMITTEES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.topic})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#1a2e22]">
                      Prior Model UN / Climate Conference Experience
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                        <button
                          type="button"
                          key={lvl}
                          onClick={() => setExperienceLevel(lvl)}
                          className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                            experienceLevel === lvl
                              ? 'bg-[#034d20] text-white border-[#034d20]'
                              : 'bg-white text-[#1a2e22] border-[#d4e7d8]'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional Coachee Field */}
                  {role === 'Coachee' && (
                    <div className="space-y-1 p-3.5 rounded-xl bg-lime-50/70 border border-[#8bc349]/50">
                      <label className="block text-xs font-bold text-[#034d20]">
                        Proposed Green Project / Idea Summary *
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Drip irrigation sensor using Arduino, plastic sorting bin for schools..."
                        value={projectIdeaEssay}
                        onChange={(e) => setProjectIdeaEssay(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-[#d4e7d8] text-xs focus:outline-none focus:ring-2 focus:ring-[#8bc349] bg-white"
                      />
                      {errors.projectIdeaEssay && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.projectIdeaEssay}</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3: Essay Questions */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-base font-bold text-[#034d20] border-b border-[#d4e7d8] pb-2">
                    Step 3: Motivation & Vision Essays
                  </h3>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#1a2e22]">
                      Why do you want to participate in ECOMINDS MCOP? (Min 30 chars) *
                    </label>
                    <textarea
                      id="input-motivation-essay"
                      rows={3}
                      placeholder="Describe your environmental passion, community background, and what you hope to achieve during the 3-day conference..."
                      value={motivationEssay}
                      onChange={(e) => setMotivationEssay(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                        errors.motivationEssay ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                      }`}
                    />
                    {errors.motivationEssay && (
                      <span className="text-[11px] text-red-600 font-semibold">{errors.motivationEssay}</span>
                    )}
                  </div>

                  {role === 'Delegate' && (
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#1a2e22]">
                        Which specific climate policy or international resolution clause interests you most? *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Carbon pricing models, transboundary water treaties, renewable subsidies..."
                        value={policyInterestEssay}
                        onChange={(e) => setPolicyInterestEssay(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8bc349] ${
                          errors.policyInterestEssay ? 'border-red-500 bg-red-50' : 'border-[#d4e7d8] bg-white'
                        }`}
                      />
                      {errors.policyInterestEssay && (
                        <span className="text-[11px] text-red-600 font-semibold">{errors.policyInterestEssay}</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Review & Submit */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-base font-bold text-[#034d20] border-b border-[#d4e7d8] pb-2">
                    Step 4: Review Your Information
                  </h3>

                  <div className="bg-[#f4f8f4] rounded-xl p-4 border border-[#d4e7d8] space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-500 block">Name:</span>
                        <strong className="text-[#034d20] text-sm">{fullName}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Track Role:</span>
                        <strong className="text-[#034d20] text-sm">{role}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Email & Telegram:</span>
                        <span className="font-semibold">{email} • {telegram}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Institution:</span>
                        <span className="font-semibold">{institution} ({city})</span>
                      </div>
                    </div>

                    <div className="border-t border-[#d4e7d8] pt-2">
                      <span className="text-gray-500 block">Assigned Committee:</span>
                      <strong className="text-[#034d20]">{selectedCommObj.name}</strong>
                    </div>

                    <div className="border-t border-[#d4e7d8] pt-2">
                      <span className="text-gray-500 block">Motivation Excerpt:</span>
                      <p className="italic text-[#1a2e22]/80 line-clamp-2">"{motivationEssay}"</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 text-center">
                    By submitting, you agree to attend all 3 days at Margʻilon shahar ixtisoslashtirilgan maktabi (Nov 12–14, 2026).
                  </p>
                </div>
              )}

              {/* Modal Step Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-[#d4e7d8]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#034d20] bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#034d20] hover:bg-[#023817] shadow-md transition-all"
                  >
                    <span>Continue to Step {step + 1}</span>
                    <ArrowRight className="w-4 h-4 text-[#8bc349]" />
                  </button>
                ) : (
                  <button
                    id="submit-final-application-btn"
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-black text-[#034d20] bg-[#8bc349] hover:bg-[#7cb33e] shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official Application</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
