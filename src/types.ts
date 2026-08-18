export type ViewMode = 'public' | 'participant' | 'admin';

export type ApplicantRole = 'Delegate' | 'Coachee';

export type ApplicationStatus = 'Approved' | 'Pending' | 'Rejected';

export interface Applicant {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  telegram: string;
  role: ApplicantRole;
  committeeId: string;
  institution: string;
  city: string;
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  motivationEssay: string;
  projectIdeaEssay?: string;
  policyInterestEssay?: string;
  status: ApplicationStatus;
  appliedDate: string;
  notes?: string;
}

export interface Committee {
  id: string;
  name: string;
  shortName: string;
  topic: string;
  description: string;
  chairName: string;
  chairTitle: string;
  icon: string;
  color: string;
  capacity: number;
  enrolled: number;
  keyIssues: string[];
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  image: string;
  topic: string;
}

export interface AgendaSession {
  id: string;
  day: 1 | 2 | 3;
  time: string;
  title: string;
  location: string;
  track: 'Plenary' | 'Delegates' | 'Coachees' | 'Workshop' | 'Networking';
  description: string;
  speaker?: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface LivePoll {
  id: string;
  question: string;
  description?: string;
  options: PollOption[];
  isActive: boolean;
  totalVotes: number;
  createdTime: string;
}
