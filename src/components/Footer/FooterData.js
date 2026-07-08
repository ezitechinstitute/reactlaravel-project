/* ===========================================================
   BRAND / CONTACT
=========================================================== */

export const FOOTER_BRAND = {
  logo: '/images/logo/ezitech-footer-white.png',
  tagline:
    'Empowering Businesses Through Software, AI, and Digital Innovation — scalable web, mobile & AI solutions, plus real-world internship programs for students.',
};

export const CONTACT_INFO = {
  phone: { label: 'Phone: +92 337 7777860', href: 'tel:+923377777860' },
  email: { label: 'Email: info@ezitech.org', href: 'mailto:info@ezitech.org' },
  address: 'Address: Office #304-B, Amna Plaza, Peshawar Rd, Rawalpindi, 46000',
};

/* ===========================================================
   SOCIAL LINKS
=========================================================== */

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    path: 'M10 19C14.97 19 19 14.97 19 10C19 5.03 14.97 1 10 1C5.03 1 1 5.03 1 10C1 14.97 5.03 19 10 19ZM13.75 6.25H12.25C11.65 6.25 11.08 6.49 10.66 6.91C10.24 7.33 10 7.9 10 8.5V19M7 11.5H13',
  },
  {
    label: 'LinkedIn',
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    path: 'M16.5 0.75H1.5C1.09 0.75 0.75 1.09 0.75 1.5V16.5C0.75 16.91 1.09 17.25 1.5 17.25H16.5C16.91 17.25 17.25 16.91 17.25 16.5V1.5C17.25 1.09 16.91 0.75 16.5 0.75ZM8.25 7.5V13.5M5.25 7.5V13.5M8.25 10.125C8.25 9.43 8.53 8.76 9.02 8.27C9.51 7.78 10.18 7.5 10.875 7.5C11.57 7.5 12.24 7.78 12.73 8.27C13.22 8.76 13.5 9.43 13.5 10.125V13.5',
  },
  {
    label: 'Instagram',
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    path: 'M10 13.75C12.07 13.75 13.75 12.07 13.75 10C13.75 7.93 12.07 6.25 10 6.25C7.93 6.25 6.25 7.93 6.25 10C6.25 12.07 7.93 13.75 10 13.75ZM14.125 1.375H5.875C3.39 1.375 1.375 3.39 1.375 5.875V14.125C1.375 16.61 3.39 18.625 5.875 18.625H14.125C16.61 18.625 18.625 16.61 18.625 14.125V5.875C18.625 3.39 16.61 1.375 14.125 1.375Z',
  },
  {
    label: 'X (Twitter)',
    width: 17,
    height: 17,
    viewBox: '0 0 17 17',
    path: 'M15.3 1L9.19 7.29M7.11 9.44L0.75 16M0.75 1L12.11 16H15.75L4.39 1H0.75Z',
  },
];

/* ===========================================================
   LEGAL — shared between the "Legal Policies" column and the
   bottom bar, so both stay in sync automatically.
=========================================================== */

export const LEGAL_LINKS = [
  'Privacy Policy',
  'Terms & Conditions',
  'Refund Policy',
  'Cookie Policy',
];

/* ===========================================================
   LINK COLUMNS
   (Company / Quick Links route via react-router <Link>; Legal
   Policies stays plain <a href="#"> just like the bottom bar —
   kept separate below so that distinction is preserved.)
=========================================================== */

export const FOOTER_LINK_COLUMNS = [
  {
    title: 'Company',
    links: [
      ['About Us', '/about'],
      ['Services', '/services'],
      ['Careers', '#'],
      ['Contact Us', '/contact'],
    ],
  },
  {
    title: 'Quick Links',
    links: [
      ['Internships', '#'],
      ['LMS Portal', '#'],
      ['Blog', '/blog'],
      ['Case Studies', '/case-study'],
      ['FAQs', '#'],
      ['Support', '#'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Documentation', '#'],
      ['Help Center', '#'],
      ['Community', '#'],
      ['Partners', '#'],
    ],
  },
];
