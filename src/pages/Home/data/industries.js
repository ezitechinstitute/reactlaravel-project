/* ===========================================================
   INDUSTRIES WE SERVE — tab labels + panel content.
   Each panel has: title/desc copy, 3 feature bullets (each with
   an inline SVG icon described as a list of shape primitives),
   a right-side image card with a themed background gradient
   class (see Home.css `.home-ind-bg-*`), and a stat "ring" card
   (SVG circular progress + numbers).

   Shape primitives support `tag: 'path' | 'rect' | 'circle' | 'polyline'`.
   `round: true` reproduces the original markup's
   `strokeLinecap="round" strokeLinejoin="round"` on that shape —
   this was applied inconsistently in the original hand-written
   markup, so it is preserved exactly per-shape rather than
   normalized.
=========================================================== */

export const INDUSTRIES = [
  {
    key: 'healthcare',
    tabLabel: 'Healthcare',
    title: 'Healthcare',
    desc: 'Streamline patient management, automate billing, and ensure compliance — all in one integrated platform built for healthcare providers.',
    features: [
      {
        title: 'Patient Records',
        text: 'Centralized EHR with secure access control',
        icon: [{ tag: 'path', d: 'M12 2v20M2 12h20', round: true }],
      },
      {
        title: 'Appointment Scheduling',
        text: 'Automated reminders and calendar sync',
        icon: [
          { tag: 'rect', x: 3, y: 4, width: 18, height: 18, rx: 2 },
          { tag: 'path', d: 'M16 2v4M8 2v4M3 10h18', round: true },
        ],
      },
      {
        title: 'Compliance Tools',
        text: 'Built-in regulatory and audit reporting',
        icon: [{ tag: 'path', d: 'M9 14l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', round: true }],
      },
    ],
    imgSrc: '/images/opai-img-49.png',
    imgAlt: 'Healthcare',
    bgClass: 'home-ind-bg-healthcare',
    ringColorVar: '#8b5cf6',
    ring: { gradId: 'hc-grad', from: '#8b5cf6', to: '#c4b5fd', dashArray: '108 43', center: '#8b5cf6' },
    statPct: '75%',
    statSub: 'Daily payment',
  },
  {
    key: 'education',
    tabLabel: 'Education',
    title: 'Education',
    desc: 'Power your institution with a complete LMS, student tracking, fee management, and e-learning tools designed for modern education.',
    features: [
      {
        title: 'LMS Platform',
        text: 'Online courses, quizzes, and progress tracking',
        icon: [{ tag: 'path', d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', round: true }],
      },
      {
        title: 'Student Management',
        text: 'Enrollment, attendance, and grading',
        icon: [{ tag: 'path', d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', round: true }],
      },
      {
        title: 'Fee Collection',
        text: 'Automated invoicing and payment portals',
        icon: [
          { tag: 'rect', x: 2, y: 5, width: 20, height: 14, rx: 2 },
          { tag: 'path', d: 'M2 10h20', round: true },
        ],
      },
    ],
    imgSrc: '/images/opai-img-50.png',
    imgAlt: 'Education',
    bgClass: 'home-ind-bg-education',
    ring: { gradId: 'ed-grad', from: '#3b82f6', to: '#93c5fd', dashArray: '90 61', center: '#3b82f6' },
    statPct: '62%',
    statSub: 'Course completion',
  },
  {
    key: 'retail',
    tabLabel: 'Retail & Ecommerce',
    title: 'Retail & Ecommerce',
    desc: "From inventory to checkout — manage your entire retail operation with smart POS, ecommerce integrations, and real-time analytics.",
    features: [
      {
        title: 'Smart POS',
        text: 'Fast checkout with multi-payment support',
        icon: [{ tag: 'path', d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0', round: true }],
      },
      {
        title: 'Inventory Control',
        text: 'Live stock updates across all channels',
        icon: [{ tag: 'path', d: 'M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 12v.01', round: true }],
      },
      {
        title: 'Sales Analytics',
        text: 'Revenue dashboards and trend reports',
        icon: [{ tag: 'polyline', points: '22 12 18 12 15 21 9 3 6 12 2 12' }],
      },
    ],
    imgSrc: '/images/opai-img-51.png',
    imgAlt: 'Retail',
    bgClass: 'home-ind-bg-retail',
    ring: { gradId: 'rt-grad', from: '#f59e0b', to: '#fcd34d', dashArray: '120 31', center: '#f59e0b' },
    statPct: '84%',
    statSub: 'Order fulfilment',
  },
  {
    key: 'real-estate',
    tabLabel: 'Real Estate',
    title: 'Real Estate',
    desc: 'Manage properties, leads, contracts, and payments in one place — built for agencies, developers, and property managers.',
    features: [
      {
        title: 'Property Management',
        text: 'Listings, units, and tenant portal',
        icon: [
          { tag: 'path', d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', round: true },
          { tag: 'polyline', points: '9 22 9 12 15 12 15 22' },
        ],
      },
      {
        title: 'Lead Tracking',
        text: 'CRM pipeline for buyer and seller leads',
        icon: [
          { tag: 'path', d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', round: true },
          { tag: 'circle', cx: 12, cy: 10, r: 3 },
        ],
      },
      {
        title: 'Contract Builder',
        text: 'Digital agreements with e-signatures',
        icon: [
          { tag: 'path', d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', round: true },
          { tag: 'polyline', points: '14 2 14 8 20 8' },
        ],
      },
    ],
    imgSrc: '/images/opai-img-52.png',
    imgAlt: 'Real Estate',
    bgClass: 'home-ind-bg-realestate',
    ring: { gradId: 're-grad', from: '#0ea5e9', to: '#7dd3fc', dashArray: '99 52', center: '#0ea5e9' },
    statPct: '69%',
    statSub: 'Deals closed',
  },
  {
    key: 'manufacturing',
    tabLabel: 'Manufacturing',
    title: 'Manufacturing',
    desc: 'Optimize production, reduce waste, and track quality from raw material to finished product with our manufacturing ERP solution.',
    features: [
      {
        title: 'Production Planning',
        text: 'Work orders, BOM, and capacity planning',
        icon: [
          { tag: 'circle', cx: 12, cy: 12, r: 3 },
          {
            tag: 'path',
            d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
            round: true,
          },
        ],
      },
      {
        title: 'Quality Control',
        text: 'Inspection checklists and defect tracking',
        icon: [{ tag: 'path', d: 'M9 14l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', round: true }],
      },
      {
        title: 'Production Analytics',
        text: 'OEE, downtime, and yield reporting',
        icon: [{ tag: 'polyline', points: '22 12 18 12 15 21 9 3 6 12 2 12' }],
      },
    ],
    imgSrc: '/images/opai-img-53.png',
    imgAlt: 'Manufacturing',
    bgClass: 'home-ind-bg-manufacturing',
    ring: { gradId: 'mf-grad', from: '#64748b', to: '#94a3b8', dashArray: '135 16', center: '#64748b' },
    statPct: '91%',
    statSub: 'Plant efficiency',
  },
  {
    key: 'logistics',
    tabLabel: 'Logistics & Supply Chain',
    title: 'Logistics & Supply Chain',
    desc: 'Track shipments, optimize routes, and manage your entire supply chain in real time — from warehouse to last-mile delivery.',
    features: [
      {
        title: 'Fleet Tracking',
        text: 'Real-time GPS and delivery status',
        icon: [
          { tag: 'rect', x: 1, y: 3, width: 15, height: 13, rx: 1 },
          {
            tag: 'path',
            d: 'M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
            round: true,
          },
        ],
      },
      {
        title: 'Route Optimization',
        text: 'AI-powered delivery route planning',
        icon: [
          { tag: 'path', d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' },
          { tag: 'circle', cx: 12, cy: 10, r: 3 },
        ],
      },
      {
        title: 'Warehouse Management',
        text: 'Stock allocation and picking workflows',
        icon: [
          { tag: 'path', d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
          { tag: 'polyline', points: '9 22 9 12 15 12 15 22' },
        ],
      },
    ],
    imgSrc: '/images/opai-img-54.png',
    imgAlt: 'Logistics',
    bgClass: 'home-ind-bg-logistics',
    ring: { gradId: 'lg-grad', from: '#10b981', to: '#6ee7b7', dashArray: '113 38', center: '#10b981' },
    statPct: '79%',
    statSub: 'On-time delivery',
  },
];
