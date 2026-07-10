/* ===========================================================
   IMPACT STATS — "By the Numbers" section.
   `heightSpace` maps 1:1 to each counter's original
   data-height-space attribute (kept explicit since it isn't
   derivable from the number, unlike data-rooms which is just
   the digit count).
=========================================================== */

export const IMPACT_STATS = [
  {
    number: 83,
    heightSpace: 3,
    suffix: '%',
    label: 'Real-time support satisfaction across 100+ countries',
  },
  {
    number: 75,
    heightSpace: 3,
    suffix: '%',
    label: 'Improvement in agent resolution efficiency',
  },
  {
    number: 500,
    heightSpace: 2.5,
    suffix: 'K+',
    label: 'Customer interactions automated monthly',
  },
  {
    number: 60,
    heightSpace: 2.5,
    suffix: '+',
    label: 'Many companies choose to collaborate with us',
  },
];

/* ===========================================================
   CASE STUDIES — success-story cards.
   Each `metrics` entry renders as a data-counter span followed
   immediately by `suffix` (e.g. number 8 + suffix ".2x" => "8.2x").
   data-rooms for every card metric is the digit count of `number`,
   computed at render time rather than stored here.
=========================================================== */

export const CASE_STUDIES = [
  {
    image: '/images/opai-img-158.jpg',
    title: 'Foodly',
    blurb:
      'AI delivery optimization cut times, reduced failures, and boosted conversions.',
    metrics: [
      { number: 85, suffix: '%', label: 'More conversions' },
      { number: 34, suffix: '%', label: 'Failed deliveries' },
      { number: 74, suffix: '%', label: 'More successful deliveries' },
      { number: 4, suffix: 'x', label: 'Faster scheduling' },
    ],
  },
  {
    image: '/images/opai-img-159.jpg',
    title: 'NimbusBank',
    blurb: 'AI campaigns increased leads, cut fraud, and grew LTV.',
    metrics: [
      { number: 72, suffix: '%', label: 'More qualified leads' },
      { number: 22, suffix: '%', label: 'Drop in fraud' },
      { number: 8, suffix: '.2x', label: 'LTV growth YoY' },
    ],
  },
  {
    image: '/images/opai-img-160.jpg',
    title: 'BrightNest',
    blurb: 'AI recommendations boosted revenue and repeat buyers.',
    metrics: [
      { number: 120, suffix: '%', label: 'Revenue growth' },
      { number: 64, suffix: '%', label: 'More repeat buyers' },
    ],
  },
  {
    image: '/images/opai-img-161.jpg',
    title: 'Hedonist',
    blurb:
      'Predictive curation raised satisfaction and repeat travelers.',
    metrics: [
      { number: 92, suffix: '%', label: 'CSAT' },
      { number: 22, suffix: '%', label: 'More repeat bookings' },
      { number: 3, suffix: 'x', label: 'Faster recommendations' },
    ],
  },
  {
    image: '/images/opai-img-8.png',
    title: 'StreamFlow',
    blurb:
      'AI content tagging and discovery drove engagement and reduced churn.',
    metrics: [
      { number: 78, suffix: '%', label: 'Better content discovery' },
      { number: 41, suffix: '%', label: 'Lower churn' },
      { number: 2, suffix: '.5x', label: 'Engagement lift' },
    ],
  },
  {
    image: '/images/opai-img-9.png',
    title: 'TechVentures',
    blurb:
      'AI lead scoring and outreach increased pipeline and closed deals.',
    metrics: [
      { number: 95, suffix: '%', label: 'Lead accuracy' },
      { number: 28, suffix: '%', label: 'More pipeline' },
      { number: 5, suffix: 'x', label: 'Faster response time' },
    ],
  },
  {
    image: '/images/opai-img-10.png',
    title: 'GreenShift',
    blurb:
      'Predictive inventory and demand forecasting cut waste and boosted margins.',
    metrics: [
      { number: 67, suffix: '%', label: 'Less waste' },
      { number: 19, suffix: '%', label: 'Margin improvement' },
      { number: 4, suffix: 'x', label: 'Forecast accuracy' },
    ],
  },
];

/* ===========================================================
   MARKETING AVATARS — small stacked-avatar row in the CTA band.
=========================================================== */

export const MARKETING_AVATARS = [
  { src: '/images/opai-avatar-img-05.png', alt: 'Marketing Expert 1' },
  { src: '/images/opai-avatar-img-06.png', alt: 'Marketing Expert 2' },
  { src: '/images/opai-avatar-img-07.png', alt: 'Marketing Expert 3' },
  { src: '/images/opai-avatar-img-08.png', alt: 'Marketing Expert 4' },
];
