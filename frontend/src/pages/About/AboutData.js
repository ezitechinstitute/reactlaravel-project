/* ===========================================================
   SHARED ICON — the 4-point "sparkle" used by every section
   eyebrow (Our Story / Process / Our Team).
=========================================================== */

export const SPARKLE_ICON_PATH =
  'M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z';

/* ===========================================================
   HERO STATS BAR — 4-up strip directly under the hero copy.
=========================================================== */

export const STATS_OVERVIEW = [
  {
    value: '15+',
    label: 'Years Experience',
    shapes: [
      { type: 'rect', x: 3, y: 4, width: 18, height: 18, rx: 2 },
      { type: 'path', d: 'M16 2v4M8 2v4M3 10h18' },
    ],
  },
  {
    value: '500+',
    label: 'Projects Delivered',
    shapes: [{ type: 'path', d: 'M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z' }],
  },
  {
    value: '100+',
    label: 'Happy Clients',
    shapes: [
      { type: 'path', d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
      { type: 'circle', cx: 9, cy: 7, r: 4 },
      { type: 'path', d: 'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
    ],
  },
  {
    value: '50+',
    label: 'Experts on Team',
    shapes: [
      {
        type: 'path',
        d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
      },
      { type: 'circle', cx: 12, cy: 12, r: 3 },
    ],
  },
];

/* ===========================================================
   OUR VALUES — bullet list inside the "Our Values" card.
=========================================================== */

export const VALUES = [
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to build future-ready solutions.',
    shapes: [
      { type: 'path', d: 'M12 2v4M12 18v4M2 12h4M18 12h4' },
      { type: 'circle', cx: 12, cy: 12, r: 3 },
    ],
  },
  {
    title: 'Quality',
    description: 'We are committed to delivering excellence in every project.',
    shapes: [
      { type: 'path', d: 'M9 12l2 2 4-4' },
      { type: 'path', d: 'M12 2a10 10 0 100 20A10 10 0 0012 2z' },
    ],
  },
  {
    title: 'Transparency',
    description: 'We believe in clear communication and long-term partnerships.',
    shapes: [
      { type: 'path', d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' },
      { type: 'circle', cx: 12, cy: 12, r: 3 },
    ],
  },
  {
    title: 'Client Success',
    description: 'Your growth is our success. We go the extra mile, every time.',
    shapes: [
      { type: 'path', d: 'M22 11.08V12a10 10 0 11-5.93-9.14' },
      { type: 'polyline', points: '22 4 12 14.01 9 11.01' },
    ],
  },
];

/* ===========================================================
   MISSION / VISION / APPROACH / GLOBAL REACH — 4-up card grid.
=========================================================== */

export const OVERVIEW_CARDS = [
  {
    title: 'Our Mission',
    description:
      'To empower businesses with innovative technology solutions that drive efficiency, growth, and long-term success.',
    shapes: [{ type: 'path', d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }],
  },
  {
    title: 'Our Vision',
    description:
      'To become a globally trusted technology partner recognized for innovation, quality, and digital transformation.',
    shapes: [
      { type: 'path', d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' },
      { type: 'circle', cx: 12, cy: 12, r: 3 },
    ],
  },
  {
    title: 'Our Approach',
    description: 'Agile, collaborative, and customer-first approach to deliver measurable results with speed and precision.',
    shapes: [
      { type: 'path', d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
      { type: 'circle', cx: 9, cy: 7, r: 4 },
      { type: 'path', d: 'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
    ],
  },
  {
    title: 'Global Reach',
    description: 'Proudly serving clients in multiple industries and countries with a global mindset and local understanding.',
    shapes: [
      { type: 'circle', cx: 12, cy: 12, r: 10 },
      { type: 'line', x1: 2, y1: 12, x2: 22, y2: 12 },
      { type: 'path', d: 'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' },
    ],
  },
];

/* ===========================================================
   TIMELINE STATS — "Story" section, 4-up cards with year badge.
=========================================================== */

export const TIMELINE_STATS = [
  { value: '15+', label: 'Years Experience', sublabel: 'Industry expertise since', year: '2022' },
  { value: '500+', label: 'Successful Projects', sublabel: 'Delivered with precision', year: '2023' },
  { value: '100+', label: 'Happy Clients', sublabel: 'Across multiple industries', year: '2024' },
  { value: '40+', label: 'Expert Developers', sublabel: 'Growing team of specialists', year: '2025–26' },
];

/* ===========================================================
   PROCESS STEPS — Discover / Develop / Deliver.
=========================================================== */

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Requirements Analysis & Strategic Planning',
    description: 'We understand your business objectives, challenges, and project requirements to build the right solution.',
    shapes: [
      { type: 'circle', cx: 11, cy: 11, r: 8 },
      { type: 'path', d: 'm21 21-4.35-4.35' },
    ],
  },
  {
    number: '02',
    title: 'Develop',
    subtitle: 'Agile Design & Development',
    description: 'Our experts design, develop, and continuously improve products through agile development cycles.',
    shapes: [
      { type: 'polyline', points: '16 18 22 12 16 6' },
      { type: 'polyline', points: '8 6 2 12 8 18' },
    ],
  },
  {
    number: '03',
    title: 'Deliver',
    subtitle: 'Testing, Deployment & Optimization',
    description: 'We ensure quality, security, and performance before deployment while providing ongoing support.',
    shapes: [
      { type: 'path', d: 'M22 11.08V12a10 10 0 11-5.93-9.14' },
      { type: 'polyline', points: '22 4 12 14.01 9 11.01' },
    ],
  },
];

/* ===========================================================
   SOCIAL ICON LIBRARY — referenced by name from TEAM_MEMBERS.
=========================================================== */

export const SOCIAL_ICONS = {
  linkedin: {
    fill: true,
    shapes: [
      {
        type: 'path',
        d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      },
    ],
  },
  twitter: {
    fill: false,
    shapes: [
      {
        type: 'path',
        d: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
      },
    ],
  },
  github: {
    fill: true,
    shapes: [
      {
        type: 'path',
        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      },
    ],
  },
  instagram: {
    fill: false,
    shapes: [
      { type: 'rect', x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 },
      { type: 'path', d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z' },
      { type: 'line', x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 },
    ],
  },
};

/* ===========================================================
   TEAM MEMBERS — 6-up grid, each with 2 social links referencing
   SOCIAL_ICONS by name.
=========================================================== */

export const TEAM_MEMBERS = [
  {
    initials: 'CE',
    gradientClass: 'size-full bg-gradient-to-br from-opai-blue/60 to-purple-700',
    role: 'CEO & Founder',
    tagline: 'Strategic Vision',
    socials: ['linkedin', 'twitter'],
  },
  {
    initials: 'PM',
    gradientClass: 'size-full bg-gradient-to-br from-purple-600 to-opai-blue/60',
    role: 'Project Manager',
    tagline: 'Execution Excellence',
    socials: ['linkedin', 'twitter'],
  },
  {
    initials: 'LE',
    gradientClass: 'size-full bg-gradient-to-br from-opai-blue/80 to-blue-700',
    role: 'Lead Software Engineer',
    tagline: 'Technical Leadership',
    socials: ['linkedin', 'github'],
  },
  {
    initials: 'UI',
    gradientClass: 'size-full bg-gradient-to-br from-pink-600/80 to-opai-blue/60',
    role: 'UI/UX Designer',
    tagline: 'User-Centered Design',
    socials: ['linkedin', 'instagram'],
  },
  {
    initials: 'AI',
    gradientClass: 'size-full bg-gradient-to-br from-emerald-600/80 to-opai-blue/60',
    role: 'AI Engineer',
    tagline: 'Intelligent Systems',
    socials: ['linkedin', 'github'],
  },
  {
    initials: 'QA',
    gradientClass: 'size-full bg-gradient-to-br from-orange-600/80 to-opai-blue/60',
    role: 'QA Engineer',
    tagline: 'Quality Assurance',
    socials: ['linkedin', 'twitter'],
  },
];

/* ===========================================================
   TESTIMONIALS — "Reviews" section, 3-up card grid.
=========================================================== */

export const TESTIMONIALS = [
  {
    quote:
      "Outstanding service and innovative solutions. The team's responsiveness and expertise have been invaluable to our business growth.",
    initials: 'MC',
    gradientClass: 'size-10 rounded-full bg-gradient-to-br from-opai-blue/60 to-purple-600/60 flex items-center justify-center shrink-0',
    name: 'Michael Chen',
    role: 'CEO, TechCorp',
  },
  {
    quote: 'The automation features have saved us countless hours. A game-changer for our business operations and team productivity.',
    initials: 'AR',
    gradientClass: 'size-10 rounded-full bg-gradient-to-br from-emerald-600/60 to-opai-blue/60 flex items-center justify-center shrink-0',
    name: 'Alex Rodriguez',
    role: 'Operations Manager',
  },
  {
    quote:
      "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support is top-notch.",
    initials: 'DJ',
    gradientClass: 'size-10 rounded-full bg-gradient-to-br from-pink-600/60 to-opai-blue/60 flex items-center justify-center shrink-0',
    name: 'David Johnson',
    role: 'Marketing Director',
  },
];
