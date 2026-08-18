import { Applicant, Committee, Speaker, AgendaSession, LivePoll } from './types';

export const EVENT_INFO = {
  name: 'ECOMINDS',
  concept: 'Model of COP (MCOP)',
  tagline: 'A community where green ideas grow',
  dates: 'November 12–14, 2026',
  time: '09:00 AM – 05:00 PM UZT',
  venue: 'Margʻilon shahar ixtisoslashtirilgan maktabi',
  locationDetails: 'B. Margʻiloniy Street 45, Margilan City, Fergana Region, Uzbekistan',
  telegramChannel: 'https://t.me/ecominds_mcop',
  telegramGroup: 'https://t.me/ecominds_community',
  contactEmail: 'ecominds.mcop@gmail.com',
  contactPhone: '+998 90 123 45 67',
};

export const COMMITTEES: Committee[] = [
  {
    id: 'mitigation',
    name: 'Committee on Climate Mitigation & Carbon Markets',
    shortName: 'Climate Mitigation',
    topic: 'Carbon Pricing & Industrial Emission Reduction in Central Asia',
    description: 'Focuses on establishing regional carbon offset frameworks, industrial decarbonization pathways, and regional emissions trading systems.',
    chairName: 'Dr. Alisher Rasulov',
    chairTitle: 'Senior Fellow, Central Asian Climate Institute',
    icon: 'Flame',
    color: '#034d20',
    capacity: 25,
    enrolled: 18,
    keyIssues: [
      'Industrial methane abatement in heavy manufacturing',
      'Cross-border green energy grids and carbon tracking',
      'Article 6 mechanisms applied to dryland economies'
    ]
  },
  {
    id: 'renewable',
    name: 'Committee on Renewable Energy & Clean Tech Transition',
    shortName: 'Renewable Energy',
    topic: 'Solar & Wind Scaling for Fergana Valley Communities',
    description: 'Negotiates bilateral technology transfer pacts, decentralized microgrid funding, and clean energy storage solutions for municipal infrastructure.',
    chairName: 'Dilnoza Karimova',
    chairTitle: 'Lead Energy Economist, Green Energy Fund',
    icon: 'Sun',
    color: '#8bc349',
    capacity: 25,
    enrolled: 22,
    keyIssues: [
      'Decentralized solar microgrids in rural settlements',
      'Battery energy storage integration into national grids',
      'Fostering green technology incubators in Uzbekistan'
    ]
  },
  {
    id: 'youth',
    name: 'Committee on Youth Climate Action & Green Advocacy',
    shortName: 'Youth Action',
    topic: 'Grassroots Mobilization & Climate Education Curricula',
    description: 'Empowers young leaders to craft legislative proposals on mandatory eco-literacy, youth-led reforestation campaigns, and eco-journalism.',
    chairName: 'Sardorbek Tursunov',
    chairTitle: 'President, National Youth Eco-Alliance',
    icon: 'Users',
    color: '#a6c42d',
    capacity: 30,
    enrolled: 26,
    keyIssues: [
      'Integrating hands-on climate science into school curricula',
      'Green entrepreneurship seed grants for youth startups',
      'Community-led tree planting in the Yashil Makon initiative'
    ]
  },
  {
    id: 'biodiversity',
    name: 'Committee on Biodiversity Preservation & Aral Sea Basin',
    shortName: 'Biodiversity & Aral',
    topic: 'Ecological Restoration, Wetlands & Soil Salinization Control',
    description: 'Addresses the transboundary biodiversity crisis, arid-zone afforestation strategies, and safeguarding endemic flora and fauna in the Aral basin.',
    chairName: 'Prof. Guzal Mirzayeva',
    chairTitle: 'Chair of Ecology, Fergana State University',
    icon: 'TreePine',
    color: '#034d20',
    capacity: 25,
    enrolled: 15,
    keyIssues: [
      'Halophyte plantation on the desiccated Aral seabed',
      'Protecting Tugai forests along the Syr Darya river basin',
      'Ecological corridors and transboundary biosphere reserves'
    ]
  },
  {
    id: 'agriculture',
    name: 'Committee on Sustainable Agriculture & Water Resilience',
    shortName: 'Agri & Water Resilience',
    topic: 'Smart Drip Irrigation, Crop Diversification & Drought Defense',
    description: 'Formulates policies for water quota efficiency, climate-resilient horticulture, and tech-driven agro-ecology in water-stressed river valleys.',
    chairName: 'Bobur Rakhimov',
    chairTitle: 'Director of Agro-Water Innovation Lab',
    icon: 'Droplets',
    color: '#8bc349',
    capacity: 25,
    enrolled: 20,
    keyIssues: [
      'Subsurface drip irrigation adoption among local dehqan farms',
      'Drought-tolerant cotton and wheat genetics adaptation',
      'Automated canal water telemetry and leak prevention'
    ]
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 'sp-1',
    name: 'Dr. Malika Umarova',
    role: 'Keynote Speaker & Climate Policy Advisor',
    organization: 'UN Development Programme (UNDP) Central Asia',
    bio: 'Over 15 years advising Central Asian governments on multilateral environmental agreements, COP negotiations, and green climate financing.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    topic: 'Bridging Local Action in Fergana to Global COP Agreements'
  },
  {
    id: 'sp-2',
    name: 'Javokhir Nishonov',
    role: 'Lead Innovation Coach',
    organization: 'Central Asian CleanTech Venture Hub',
    bio: 'Former climate tech founder with 3 successful green energy and smart IoT patents. Mentors Coachees on prototype design and pitch readiness.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    topic: 'From Problem to Prototype: Hands-on Green Solutions'
  },
  {
    id: 'sp-3',
    name: 'Nilufar Saidova',
    role: 'MCOP Secretary-General',
    organization: 'ECOMINDS Organizing Committee',
    bio: 'Lead organizer of youth diplomacy conferences in Tashkent and Samarkand. Passionate about youth leadership in climate governance.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    topic: 'Mastering Rules of Procedure in COP Diplomatic Negotiations'
  },
  {
    id: 'sp-4',
    name: 'Bekzod Kholmurodov',
    role: 'Water Resources Specialist',
    organization: 'Regional Ecological Center (CAREC)',
    bio: 'Specialist in transboundary water diplomacy and digital hydrological modeling in the Fergana Valley basin.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    topic: 'Water Security in the Fergana Valley: Data, Diplomacy & Action'
  }
];

export const AGENDA: AgendaSession[] = [
  // Day 1
  {
    id: 'd1-1',
    day: 1,
    time: '08:30 – 09:30',
    title: 'Registration, Delegate Credentialing & Welcome Kit Distribution',
    location: 'Main School Foyer & Registration Desk',
    track: 'Plenary',
    description: 'Arrival of participants, badge verification, delegation assignments, and distribution of official MCOP negotiation folders.'
  },
  {
    id: 'd1-2',
    day: 1,
    time: '09:30 – 10:45',
    title: 'Opening Ceremony & High-Level Keynote on COP31 Horizons',
    location: 'Main Assembly Hall',
    track: 'Plenary',
    description: 'Welcome addresses by Margilan Educational Department, MCOP Secretariat, and Keynote speech by Dr. Malika Umarova.',
    speaker: 'Dr. Malika Umarova'
  },
  {
    id: 'd1-3',
    day: 1,
    time: '11:00 – 13:00',
    title: 'MCOP Committee Session I: Agenda Setting & General Debate',
    location: 'Committee Rooms (101-105)',
    track: 'Delegates',
    description: 'Roll call, setting of the speaker list, formal opening statements by national delegates on climate targets.'
  },
  {
    id: 'd1-4',
    day: 1,
    time: '11:00 – 13:00',
    title: 'Coachee Track: Eco-Design Thinking & Problem Framing Workshop',
    location: 'Innovation Lab Room 204',
    track: 'Coachees',
    description: 'Intensive coaching on diagnosing local environmental bottlenecks in Margilan and Fergana Valley.',
    speaker: 'Javokhir Nishonov'
  },
  {
    id: 'd1-5',
    day: 1,
    time: '13:00 – 14:00',
    title: 'Networking Lunch & Green Ideas Exchange',
    location: 'Eco-Dining Courtyard',
    track: 'Networking',
    description: 'Buffet lunch featuring locally sourced organic produce and structured peer icebreakers.'
  },
  {
    id: 'd1-6',
    day: 1,
    time: '14:00 – 17:00',
    title: 'Session II: Moderated & Unmoderated Caucusing (Bloc Building)',
    location: 'Committee Rooms & Open Terraces',
    track: 'Delegates',
    description: 'Country alliances negotiate joint position papers, climate fund quotas, and technology sharing commitments.'
  },

  // Day 2
  {
    id: 'd2-1',
    day: 2,
    time: '09:00 – 10:30',
    title: 'Crisis Simulation: Extreme Heatwave & Water Scarcity Emergency',
    location: 'Main Assembly Hall',
    track: 'Plenary',
    description: 'Sudden climate disaster scenario requiring rapid inter-committee joint emergency declaration and swift consensus.'
  },
  {
    id: 'd2-2',
    day: 2,
    time: '10:45 – 13:00',
    title: 'Session III: Working Paper Drafting & Clause Amendments',
    location: 'Committee Rooms',
    track: 'Delegates',
    description: 'Formal formulation of draft resolution clauses, legal vetting by chairs, and debate on contested amendments.'
  },
  {
    id: 'd2-3',
    day: 2,
    time: '10:45 – 13:00',
    title: 'Coachee Track: Rapid Prototyping & Business Model Canvas',
    location: 'Innovation Lab Room 204',
    track: 'Coachees',
    description: 'Hands-on creation of minimal viable prototypes for localized waste, solar, or water recycling projects.',
    speaker: 'Javokhir Nishonov'
  },
  {
    id: 'd2-4',
    day: 2,
    time: '14:00 – 16:30',
    title: 'MCOP Session IV: Sponsorship Approvals & Line-by-Line Voting',
    location: 'Committee Rooms',
    track: 'Delegates',
    description: 'Draft resolutions receive final signatures, debate on substantive amendments, and committee-level passage.'
  },
  {
    id: 'd2-5',
    day: 2,
    time: '16:30 – 17:15',
    title: 'Cultural Evening: Silk & Green Heritage Showcase',
    location: 'School Amphitheater',
    track: 'Networking',
    description: 'Celebration of traditional Margilan ikat silk weaving with eco-friendly natural dyes and youth acoustic performance.'
  },

  // Day 3
  {
    id: 'd3-1',
    day: 3,
    time: '09:00 – 11:30',
    title: 'Plenary Assembly: Final MCOP Declaration Adoption',
    location: 'Main Assembly Hall',
    track: 'Plenary',
    description: 'All 5 committees present their passed resolutions before the full plenary for final ratification into the Margilan Youth Climate Pact.'
  },
  {
    id: 'd3-2',
    day: 3,
    time: '11:45 – 13:30',
    title: 'Green Idea Pitch Finals: Coachee Project Showcase',
    location: 'Main Assembly Hall',
    track: 'Coachees',
    description: 'Coachee teams pitch their localized climate solutions to a jury of environmental investors and university experts.'
  },
  {
    id: 'd3-3',
    day: 3,
    time: '14:30 – 16:30',
    title: 'Awards Ceremony & Official Closing Plenary',
    location: 'Main Assembly Hall',
    track: 'Plenary',
    description: 'Presentation of Best Delegate, Outstanding Diplomat, Best Green Innovation, and certificate conferral to all participants.'
  },
  {
    id: 'd3-4',
    day: 3,
    time: '16:30 – 17:00',
    title: 'ECOMINDS Tree Planting Ceremony & Commemorative Photo',
    location: 'School Garden Area',
    track: 'Plenary',
    description: 'Planting 50 fruit trees in the school garden to offset event carbon footprint and launch the permanent ECOMINDS alumni grove.'
  }
];

export const INITIAL_APPLICANTS: Applicant[] = [
  {
    id: 'APP-101',
    fullName: 'Shakhzoda Karimova',
    email: 'shakhzoda.k@gmail.com',
    phone: '+998 93 456 78 90',
    telegram: '@shakhzoda_eco',
    role: 'Delegate',
    committeeId: 'mitigation',
    institution: 'Fergana State University (International Relations)',
    city: 'Fergana',
    experienceLevel: 'Advanced',
    motivationEssay: 'Having participated in national youth MUNs, I want to champion Uzbekistan’s nationally determined contributions and explore carbon credit integrations for Fergana industrial parks.',
    policyInterestEssay: 'Carbon pricing frameworks and cross-border emission trading under Paris Agreement Article 6.',
    status: 'Approved',
    appliedDate: '2026-08-10',
    notes: 'Outstanding diplomatic background; assigned as Delegate of Germany in Mitigation committee.'
  },
  {
    id: 'APP-102',
    fullName: 'Azizbek Kadyrov',
    email: 'aziz.tech@mail.uz',
    phone: '+998 90 987 65 43',
    telegram: '@azizbek_solardev',
    role: 'Coachee',
    committeeId: 'renewable',
    institution: 'Margilan Specialized School #1',
    city: 'Margilan',
    experienceLevel: 'Intermediate',
    motivationEssay: 'I built an Arduino-powered solar tracking sensor for school rooftop panels. I want mentorship from ECOMINDS coaches to scale this into an affordable agricultural sensor kit.',
    projectIdeaEssay: 'Low-cost solar tracking microcontroller for household greenhouses in Margilan.',
    status: 'Approved',
    appliedDate: '2026-08-11',
    notes: 'High-potential technical prototype; paired with Lead Coach Javokhir.'
  },
  {
    id: 'APP-103',
    fullName: 'Madina Rustamova',
    email: 'madina.rustamova@edu.uz',
    phone: '+998 97 123 99 88',
    telegram: '@madina_greenyouth',
    role: 'Delegate',
    committeeId: 'youth',
    institution: 'Fergana Academic Lyceum',
    city: 'Kokand',
    experienceLevel: 'Beginner',
    motivationEssay: 'I organized school paper recycling drives and want to represent youth perspectives in formal policy resolutions.',
    policyInterestEssay: 'Mandatory climate change modules in secondary school science curricula.',
    status: 'Pending',
    appliedDate: '2026-08-14',
    notes: 'Strong motivation statement, pending committee capacity verification.'
  },
  {
    id: 'APP-104',
    fullName: 'Timur Yuldashev',
    email: 'timur.agri@gmail.com',
    phone: '+998 91 333 22 11',
    telegram: '@timur_hydro',
    role: 'Coachee',
    committeeId: 'agriculture',
    institution: 'Andijan Agricultural Institute',
    city: 'Andijan',
    experienceLevel: 'Advanced',
    motivationEssay: 'Our family operates a cherry orchard where water loss is high. I want to build a closed-loop soil moisture irrigation alert system.',
    projectIdeaEssay: 'LoRaWAN moisture sensor mesh network for family farms to save 40% irrigation water.',
    status: 'Approved',
    appliedDate: '2026-08-15',
    notes: 'Practical agricultural relevance for Fergana Valley context.'
  },
  {
    id: 'APP-105',
    fullName: 'Kamila Akhmedova',
    email: 'kamila.a@tashkent.uz',
    phone: '+998 99 777 44 22',
    telegram: '@kamila_aral',
    role: 'Delegate',
    committeeId: 'biodiversity',
    institution: 'UWED Tashkent',
    city: 'Tashkent',
    experienceLevel: 'Advanced',
    motivationEssay: 'Deeply committed to Aral Sea transboundary conservation treaties and wetland restoration along Central Asian flyways.',
    policyInterestEssay: 'Aral Sea Basin multi-lateral trust fund expansion for biodiversity protection.',
    status: 'Approved',
    appliedDate: '2026-08-16',
    notes: 'Assigned as Delegate of Kazakhstan in Biodiversity committee.'
  },
  {
    id: 'APP-106',
    fullName: 'Bobirbek Ismoilov',
    email: 'bobir.is@yahoo.com',
    phone: '+998 94 555 11 00',
    telegram: '@bobir_test',
    role: 'Delegate',
    committeeId: 'renewable',
    institution: 'Namangan Technical College',
    city: 'Namangan',
    experienceLevel: 'Beginner',
    motivationEssay: 'Interested in learning about international politics.',
    policyInterestEssay: 'General interest.',
    status: 'Rejected',
    appliedDate: '2026-08-08',
    notes: 'Application lacked required essay depth; invited to apply for volunteer observer track.'
  }
];

export const INITIAL_POLLS: LivePoll[] = [
  {
    id: 'poll-1',
    question: 'Which climate sector requires the most urgent capital investment in the Fergana Valley by 2030?',
    description: 'Live plenary voting across all 5 MCOP committees and participants.',
    isActive: true,
    totalVotes: 142,
    createdTime: '10:15 AM',
    options: [
      { id: 'opt-1', text: 'Smart Water & Drip Irrigation Networks', votes: 64 },
      { id: 'opt-2', text: 'Decentralized Solar & Wind Microgrids', votes: 41 },
      { id: 'opt-3', text: 'Industrial Air Filtration & Methane Abatement', votes: 23 },
      { id: 'opt-4', text: 'Urban Green Belts & Tree Afforestation', votes: 14 }
    ]
  },
  {
    id: 'poll-2',
    question: 'What is the most effective policy mechanism for youth-led eco startups in Uzbekistan?',
    description: 'Coachee & Youth Committee joint focus question.',
    isActive: false,
    totalVotes: 89,
    createdTime: '02:30 PM',
    options: [
      { id: 'p2-1', text: 'Government Seed Grants & 0% Microloans', votes: 48 },
      { id: 'p2-2', text: 'Tax Exemptions for Green Technology Patents', votes: 25 },
      { id: 'p2-3', text: 'University Innovation Hubs & Prototyping Labs', votes: 16 }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What is the difference between a Delegate and a Coachee at ECOMINDS?',
    answer: 'Delegates represent assigned countries or observer organizations in formal MCOP parliamentary debates, draft multilateral climate resolutions, and vote on global policy frameworks. Coachees participate in an intensive hands-on incubator track led by professional green tech coaches to build, refine, and pitch a practical environmental prototype for local implementation.'
  },
  {
    question: 'Where and when will the ECOMINDS event take place?',
    answer: 'The event will be held on November 12–14, 2026, from 09:00 AM to 05:00 PM UZT at the state-of-the-art campus of Margʻilon shahar ixtisoslashtirilgan maktabi in Margilan City, Fergana Region, Uzbekistan.'
  },
  {
    question: 'Is there an entry or participation fee?',
    answer: 'No. Participation in ECOMINDS is fully funded for all accepted Delegates and Coachees. This includes access to all committee rooms, plenary sessions, coaching labs, official delegate kits, lunch, coffee breaks, and certificates.'
  },
  {
    question: 'What language will be used during the conference?',
    answer: 'The primary working language of ECOMINDS MCOP is English for committee debates, resolution drafting, and coachee pitch presentations. Simultaneous support is provided for local contextual discussions.'
  },
  {
    question: 'Will participants receive official recognition or certificates?',
    answer: 'Yes! Every participant who completes the 3-day conference will receive a verified Certificate of Diplomatic Participation from ECOMINDS and partner environmental organizations. Top performers will receive prestigious awards such as "Best Delegate", "Distinguished Diplomat", and "Best Green Innovation Grant".'
  },
  {
    question: 'How do I prepare after being accepted?',
    answer: 'Accepted applicants will receive a comprehensive Study Guide for their assigned committee, Rules of Procedure handbook, and invitation to pre-conference online briefing webinars hosted by committee chairs and coaches.'
  }
];
