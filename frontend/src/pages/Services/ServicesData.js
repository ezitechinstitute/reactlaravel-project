/* ===========================================================
   ICON PATHS — shared by the small repeated SVG icons that used
   to be hand-copied wherever a "section badge" or CTA button
   appeared on the page.
=========================================================== */

export const ASTERISK_ICON_PATH =
  'M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z';

export const ARROW_ICON_PATH = 'M6.75 13.5L11.25 9L6.75 4.5';

/* ===========================================================
   HERO — preloaded/decorative images (kept off-screen, used by
   the data-image-reveal hover system for the service list below).
=========================================================== */

export const HERO_DECORATIVE_IMAGES = [
  '/images/opai-img-52.png',
  '/images/opai-img-53.png',
  '/images/opai-img-54.png',
  '/images/opai-img-55.png',
  '/images/opai-img-56.png',
  '/images/opai-img-57.png',
  '/images/opai-img-58.png',
  '/images/opai-img-50.png',
];

/* ===========================================================
   SERVICES LIST
   (icon is one of the `ns-shape-N` font-icon classes already
   shipped in the static Tailwind bundle; note the source skips
   ns-shape-2, and only the first three items carry data-instant —
   both preserved exactly as they were in the original markup.)
=========================================================== */

export const SERVICES_LIST = [
  {
    icon: 'ns-shape-1',
    delay: '0.1',
    instant: true,
    title: 'Email & SMS marketing',
    description: 'Engage your audience with targeted email and SMS campaigns.',
  },
  {
    icon: 'ns-shape-3',
    delay: '0.2',
    instant: true,
    title: 'SEO (Local & Global)',
    description: 'We help your business reach the right audience, near or far.',
  },
  {
    icon: 'ns-shape-4',
    delay: '0.3',
    instant: true,
    title: 'PPC & paid media',
    description:
      "Boost your brand's visibility and attract high-converting traffic with our PPC campaigns.",
  },
  {
    icon: 'ns-shape-5',
    delay: '0.4',
    instant: false,
    title: 'Social media ads',
    description: 'Reach your target audience with tailored social media campaigns.',
  },
  {
    icon: 'ns-shape-6',
    delay: '0.5',
    instant: false,
    title: 'Social media management',
    description: 'We build and maintain a strong online presence.',
  },
  {
    icon: 'ns-shape-7',
    delay: '0.6',
    instant: false,
    title: 'Content marketing strategy',
    // Only this item's description carries the extra max-w-[398px]
    // utility in the original markup — class order in the attribute
    // has no effect on the computed CSS, so appending it here renders
    // identically.
    descriptionExtraClass: 'max-w-[398px]',
    description:
      'Create compelling content that resonates with your audience and drives engagement.',
  },
  {
    icon: 'ns-shape-8',
    delay: '0.7',
    instant: false,
    title: 'Creative & production',
    description: 'Design, copy, and creatives built for performance across channels.',
  },
  {
    icon: 'ns-shape-9',
    delay: '0.8',
    instant: false,
    title: 'Conversion rate optimization',
    description: 'Improve landing pages and funnels to increase leads and sales.',
  },
];

/* ===========================================================
   CERTIFICATION PARTNERS
   (cardClassName is the outer wrapper; linkClassName is the
   inner <a> — both vary slightly per card in the original markup
   to get the correct rounded corner / border on each end of the
   three-up row, preserved 1:1 below.)
=========================================================== */

export const PARTNERS = [
  {
    id: 'meta',
    cardClassName: 'partner-ship-card active-partner-ship-card h-[420px] md:h-[333px]',
    linkClassName:
      'bg-background-6 border-stroke-1/11 relative block h-full overflow-hidden rounded-lg border px-8 py-11 lg:rounded-none lg:rounded-l-lg',
    icon: '/images/icons/meta.png',
    iconAlt: 'meta',
    title: 'Meta Marketing Partner',
    description:
      "As a Meta Marketing Partner, we specialize in digital marketing strategies that leverage Meta's platforms to drive your business growth. Our tailored approaches and expert insights enhance your advertising efforts and broaden your audience reach, ensuring you remain a strong contender in the online marketing landscape.",
  },
  {
    id: 'google-ads',
    cardClassName: 'partner-ship-card h-[420px] md:h-[333px]',
    linkClassName:
      'bg-background-6 border-stroke-1/11 relative block h-full overflow-hidden rounded-lg border-r px-8 py-11 lg:rounded-none',
    icon: '/images/icons/google-ads-certified.png',
    iconAlt: 'google ads certified',
    title: 'Google Ads Certified Partner',
    description:
      "As a Google Ads Certified Partner, we specialize in digital marketing strategies that leverage Google's platforms to drive your business growth. Our tailored approaches and expert insights enhance your advertising efforts and broaden your audience reach, ensuring you remain a strong contender in the online marketing landscape.",
  },
  {
    id: 'klaviyo',
    cardClassName: 'partner-ship-card h-[420px] md:h-[333px]',
    linkClassName:
      'bg-background-6 relative block h-full overflow-hidden rounded-lg px-8 py-11 lg:rounded-none lg:rounded-r-lg',
    icon: '/images/icons/klaviyo.png',
    iconAlt: 'klaviyo',
    title: 'Klaviyo Partner',
    description:
      "As a Klaviyo Partner, we specialize in digital marketing strategies that leverage Klaviyo's platforms to drive your business growth. Our tailored approaches and expert insights enhance your email marketing efforts and broaden your audience reach, ensuring you remain a strong contender in the online marketing landscape.",
  },
];

/* ===========================================================
   CTA AVATAR STACK
=========================================================== */

export const CTA_AVATARS = [
  { src: '/images/opai-avatar-img-05.png', alt: 'Marketing Expert 1', delay: '0.1' },
  { src: '/images/opai-avatar-img-06.png', alt: 'Marketing Expert 2', delay: '0.2' },
  { src: '/images/opai-avatar-img-07.png', alt: 'Marketing Expert 3', delay: '0.3' },
  { src: '/images/opai-avatar-img-08.png', alt: 'Marketing Expert 4', delay: '0.4' },
];
