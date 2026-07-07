// constants.js
import React from 'react';

/* ─── SVG Icons Object ──────────────────────────────────────────────── */
export const NAV_ICONS = {
  story: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 16.5A7.5 7.5 0 109 1.5a7.5 7.5 0 000 15z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12V8.25M9 6h.0075" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  uni: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5l7.5 3.75L9 9 1.5 5.25 9 1.5z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 12.75L9 16.5l7.5-3.75M1.5 9L9 12.75 16.5 9" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  team: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M13 15.75v-1.5a3 3 0 00-3-3H4.75a3 3 0 00-3 3v1.5" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.375 8.25a3 3 0 100-6 3 3 0 000 6z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.25 15.75v-1.5a3 3 0 00-2.25-2.9" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  doc: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5.25 1.5h6L15 5.25v9.75a1.5 1.5 0 01-1.5 1.5h-8.25A1.5 1.5 0 013.75 15V3a1.5 1.5 0 011.5-1.5z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 1.5v3.75h3.75M6.75 9.75h4.5M6.75 12.75h4.5" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bag: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M15 6H3C2.17 6 1.5 6.67 1.5 7.5V15C1.5 15.83 2.17 16.5 3 16.5H15C15.83 16.5 16.5 15.83 16.5 15V7.5C16.5 6.67 15.83 6 15 6Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6V4.5C12 3.67 11.33 3 10.5 3H7.5C6.67 3 6 3.67 6 4.5V6" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5L11.32 6.2L16.5 6.95L12.75 10.6L13.64 15.77L9 13.33L4.37 15.77L5.25 10.6L1.5 6.95L6.68 6.2L9 1.5Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  help: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.82 6.75C7.37 5.24 9.32 4.54 10.63 5.28C11.94 6.03 12.16 7.71 11.19 8.5C10.65 8.93 8.94 9.75 8.94 9.75" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12.75H9.0075" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M13 15.75V14.25C13 12.73 11.77 11.25 10 11.25H4.75C2.98 11.25 1.75 12.73 1.75 14.25V15.75" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.375 8.25C9.03 8.25 10.375 6.91 10.375 5.25C10.375 3.59 9.03 2.25 7.375 2.25C5.72 2.25 4.375 3.59 4.375 5.25C4.375 6.91 5.72 8.25 7.375 8.25Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.25 15.75v-1.5c0-.95-.65-1.76-1.5-2.12" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 2.35c.85.35 1.5 1.17 1.5 2.12s-.65 1.77-1.5 2.12" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ─── Services Mega Menu Schema ────────────────────────────────────── */
export const SERVICES_COLUMN_ONE = [
  { icon: 'M8 6L2 12l6 6M16 6l6 6-6 6', label: 'Web Development', desc: 'Fast, scalable websites & web apps.' },
  { icon: 'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2', label: 'Mobile App Development', desc: 'iOS & Android apps that scale.' },
  { icon: 'M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z', label: 'Custom Software', desc: 'Tailored systems for your business.' },
  { icon: 'M6 16a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0118 16H6z', label: 'SaaS Products', desc: 'Cloud platforms built to grow.' },
];

export const SERVICES_COLUMN_TWO = [
  { icon: 'M12 2v4M12 18v4M2 12h4M18 12h4', label: 'AI & Automation', desc: 'Automate workflows with smart AI.' },
  { icon: 'M12 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM10.5 7L6.5 16M13.5 7l4 9', label: 'Machine Learning', desc: 'Models that learn from your data.' },
  { icon: 'M12 19l7-7a2.8 2.8 0 00-4-4l-7 7-1 5 5-1z', label: 'UI/UX Design', desc: 'Clean, intuitive product design.' },
  { icon: 'M3 11l18-5v12L3 13v4H3z', label: 'Digital Marketing', desc: 'SEO, ads & growth campaigns.' },
];

export const SERVICES_COLUMN_THREE = [
  { icon: 'M4 7h16M4 12h16M4 17h10', label: 'ERP & CRM Products', desc: 'ERP, POS, CRM & HMS solutions.' },
  { icon: 'M12 16V4M7 9l5-5 5 5M5 20h14', label: 'Dedicated Team', desc: 'Hire a dedicated dev team.' },
];