/* ===========================================================
   PLAN CARDS
   The "Basic" / "Team" one-time-payment cards shown side by
   side inside the "What's included in every plan" section.
=========================================================== */

export const PLANS = [
  {
    key: 'basic',
    name: 'Basic',
    price: '$29',
    note: 'One time payment plus local taxes',
    cta: 'Get Basic',
    ctaHref: '/contact',
    cardClassName:
      'bg-background-6 w-full max-w-[390px] space-y-[29px] rounded-lg px-8 pt-8 pb-6 md:rounded-none md:rounded-l-lg',
  },
  {
    key: 'team',
    name: 'Team',
    price: '$99',
    note: 'One time payment plus local taxes',
    cta: 'Upgrade to Team',
    ctaHref: '/contact',
    cardClassName:
      'bg-background-6 w-full max-w-[390px] space-y-[29px] rounded-lg px-8 pt-8 pb-6 md:rounded-none md:rounded-r-lg',
    ariaLabelledby: 'team-plan',
  },
];
