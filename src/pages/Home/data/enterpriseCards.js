/* ===========================================================
   ENTERPRISE SOFTWARE SOLUTIONS — 2x2 card grid. `icon` is a
   list of shape primitives (see industries.js for the same
   convention). `analytics.variant` selects which mini-dashboard
   layout to render:
     - 'tabs'        → tab pills + floating value/delta tooltip
     - 'value-badge' → big value + rotated percentage badge
   `bars` / `barGradient` are genuinely per-card data values
   (not hand-duplicated styling), so they stay data-driven and
   are applied via inline style on the bar element, same as the
   original markup.
=========================================================== */

export const ENTERPRISE_CARDS = [
  {
    key: 'pos',
    delay: '0.3',
    title: 'POS System',
    desc: 'Fast point-of-sale operations, automated stock updates, and fluid cashflow accounting.',
    href: '/services',
    icon: [{ tag: 'path', d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', round: true }],
    analytics: {
      variant: 'tabs',
      label: 'Average daily sales',
      tabs: ['upcoming', 'Day', 'weak', 'Month'],
      tooltipValue: '$ 41.379',
      tooltipDelta: '+9.68%',
      tooltipColor: '#22c55e',
      bars: [55, 33, 88, 50, 66, 100, 27],
      barGradient: 'linear-gradient(to top, #60efff, #00ff87)',
    },
  },
  {
    key: 'erp',
    delay: '0.4',
    title: 'ERP System',
    desc: 'Consolidate operations, monitor global inventory metrics, and align team resources.',
    href: '/services',
    icon: [
      { tag: 'circle', cx: 12, cy: 12, r: 3 },
      {
        tag: 'path',
        d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68h.09A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
        round: true,
      },
    ],
    analytics: {
      variant: 'value-badge',
      label: 'Transaction statistics',
      value: '$ 41.379',
      badgeText: '20%',
      badgeVariant: 'dark',
      bars: [50, 33, 78, 44, 66, 100, 22],
      barGradient: 'linear-gradient(to top, #2e0854, #a855f7)',
    },
  },
  {
    key: 'crm',
    delay: '0.5',
    title: 'CRM System',
    desc: 'Engage clients globally, automate custom pipeline actions, and increase conversions.',
    href: '/services',
    icon: [
      { tag: 'path', d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', round: true },
      { tag: 'path', d: 'M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', round: true },
    ],
    analytics: {
      variant: 'tabs',
      label: 'Conversion Rate',
      tabs: ['pipeline', 'Leads', 'Deals'],
      tooltipValue: '$ 94.610',
      tooltipDelta: '+15.4%',
      tooltipColor: '#f43f5e',
      bars: [44, 66, 38, 83, 50, 100, 33],
      barGradient: 'linear-gradient(to top, #f43f5e, #fb923c)',
    },
  },
  {
    key: 'hrm',
    delay: '0.6',
    title: 'HRM & Payroll',
    desc: 'Slick onboarding workflows, compliant automatic tax logs, and instant compensation payouts.',
    href: '/services',
    icon: [
      { tag: 'rect', x: 2, y: 7, width: 20, height: 14, rx: 2, round: true },
      { tag: 'path', d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', round: true },
    ],
    analytics: {
      variant: 'value-badge',
      label: 'Payroll status',
      value: '$ 84.150',
      badgeText: '100% OK',
      badgeVariant: 'green',
      bars: [61, 27, 77, 50, 61, 94, 38],
      barGradient: 'linear-gradient(to top, #3b82f6, #d946ef)',
    },
  },
];
