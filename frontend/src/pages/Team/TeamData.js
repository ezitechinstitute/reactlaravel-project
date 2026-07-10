/* ===========================================================
   HERO — sliding image strip at the top of the page. Each slide
   is a plain "about" photo; several carry a directional inset
   box-shadow (baked into the Tailwind arbitrary-value class) so
   the strip reads as one continuous vignetted band rather than
   seven separate tiles. Kept as a full className string per item
   (rather than reconstructed from parts) so the exact original
   utility string is preserved untouched.
=========================================================== */

export const HERO_SLIDES = [
  {
    src: '/images/opai-img-162.jpg',
    figureClassName:
      'h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]',
  },
  {
    src: '/images/opai-img-163.jpg',
    figureClassName:
      'h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]',
  },
  {
    src: '/images/opai-img-164.jpg',
    figureClassName:
      'h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:90px_0_110px_0_#000_inset] md:h-[500px] xl:h-[650px]',
  },
  {
    src: '/images/opai-img-165.jpg',
    figureClassName: 'h-[400px] max-w-[480px] overflow-hidden rounded-lg md:h-[500px] xl:h-[650px]',
  },
  {
    src: '/images/opai-img-166.jpg',
    figureClassName:
      'h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-90px_0_110px_0_#11141D_inset] md:h-[500px] xl:h-[650px]',
  },
  {
    src: '/images/opai-img-167.jpg',
    figureClassName:
      'h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]',
  },
  {
    src: '/images/opai-img-168.jpg',
    figureClassName:
      'h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]',
  },
];

/* ===========================================================
   TEAM MEMBERS — the 6 profile cards in the "Our expert" grid.
   All 6 shared one hand-duplicated ~30-line JSX block, differing
   only in image, name, role and stagger delay.
=========================================================== */

export const TEAM_MEMBERS = [
  {
    img: '/images/opai-avatar-img-88.png',
    name: 'Alex Morgan',
    role: 'Chief Executive Officer',
    delay: '0.1',
  },
  {
    img: '/images/opai-avatar-img-110.png',
    name: 'Sophia Lee',
    role: 'Chief Technology Officer',
    delay: '0.2',
  },
  {
    img: '/images/opai-avatar-img-111.png',
    name: 'Daniel Wright',
    role: 'Head of Product',
    delay: '0.3',
  },
  {
    img: '/images/opai-avatar-img-112.png',
    name: 'Emily Carter',
    role: 'Lead AI Engineer',
    delay: '0.4',
  },
  {
    img: '/images/opai-avatar-img-113.png',
    name: 'Michael Chen',
    role: 'Operations Manager',
    delay: '0.5',
  },
  {
    img: '/images/opai-avatar-img-114.png',
    name: 'Olivia Brooks',
    role: 'Marketing & Growth Lead',
    delay: '0.6',
  },
];

/* ===========================================================
   TESTIMONIALS — 9 marquee cards. Each one hand-duplicated the
   same 5-star rating block (5 identical inline SVGs apiece — 45
   SVG blocks total), plus a quote, avatar, name and role. The
   star SVG is rendered once via <StarRating /> in Team.jsx; only
   the per-card content lives here. `extraClass` preserves the
   first card's one-off `ml-8` (marquee lead-in gap) exactly.
=========================================================== */

export const TESTIMONIALS = [
  {
    quote:
      'Committed, innovative, and results-oriented—exactly what we needed. Their creative strategies consistently introduce new concepts. With a deep dedication to quality.',
    avatar: '/images/opai-avatar-img-01.png',
    name: 'Lena Torres',
    role: 'CMO',
    extraClass: 'ml-8',
  },
  {
    quote:
      "\"The team's expertise and hands-on approach made the entire integration seamless and surprisingly fast. Highly recommend!\"",
    avatar: '/images/opai-avatar-img-02.png',
    name: 'Maya Chen',
    role: 'CTO, Fintech Innovators',
  },
  {
    quote:
      '"From day one, Ezitech felt like an extension of our internal team. Their tools and support are truly next-level."',
    avatar: '/images/opai-avatar-img-03.png',
    name: 'Derek Singh',
    role: 'Head of Product, E-commerce Platform',
  },
  {
    quote:
      '"We went from idea to execution in weeks—not months. The automation is saving us countless hours every month."',
    avatar: '/images/opai-avatar-img-04.png',
    name: 'Laura Fernandez',
    role: 'Operations Lead, SaaS Company',
  },
  {
    quote:
      '"What impressed me most was the flexibility. Ezitech adapted to our workflow instead of forcing us to change."',
    avatar: '/images/opai-avatar-img-05.png',
    name: 'Jonas Müller',
    role: 'Growth Manager, Logistics Startup',
  },
  {
    quote:
      '"The onboarding was seamless and the team was incredibly responsive. Now, our marketing runs smoother and results are up by 33%!"',
    avatar: '/images/opai-avatar-img-06.png',
    name: 'Priya Singh',
    role: 'Marketing Director, E-Commerce Brand',
  },
  {
    quote:
      '"Ezitech gave us an edge in campaign optimization—A/B testing used to take weeks; now it’s just days."',
    avatar: '/images/opai-avatar-img-07.png',
    name: 'Andre Dupont',
    role: 'Digital Marketing Manager, Retail Chain',
  },
  {
    quote:
      '"The insights dashboard is exactly what we needed. It makes ROI tracking effortless and helps us double-down on what works."',
    avatar: '/images/opai-avatar-img-08.png',
    name: 'Mei Chen',
    role: 'VP Analytics, Fintech Platform',
  },
  {
    quote:
      '"I was skeptical at first, but the productivity boost is obvious. Our team can spend more time on strategy, less on grunt work."',
    avatar: '/images/opai-avatar-img-09.png',
    name: 'Sofia Rossi',
    role: 'Head of Content, Media Group',
  },
];

/* SVG path shared by every star in every rating (45 copies in the
   original — 5 stars x 9 testimonials — collapsed to one constant
   rendered by <StarRating /> in Team.jsx). */
export const STAR_PATH =
  'M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z';

/* ===========================================================
   CTA SECTION — stacked avatar row above the "Turn clicks into
   customers" heading. 4 avatars sharing one markup shape, only
   differing by image and stagger delay.
=========================================================== */

export const CTA_AVATARS = [
  { src: '/images/opai-avatar-img-05.png', alt: 'Marketing Expert 1', delay: '0.1' },
  { src: '/images/opai-avatar-img-06.png', alt: 'Marketing Expert 2', delay: '0.2' },
  { src: '/images/opai-avatar-img-07.png', alt: 'Marketing Expert 3', delay: '0.3' },
  { src: '/images/opai-avatar-img-08.png', alt: 'Marketing Expert 4', delay: '0.4' },
];
