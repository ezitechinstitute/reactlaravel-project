import './Team.css';
import SEO from '../../components/SEO';

import { HERO_SLIDES, TEAM_MEMBERS, TESTIMONIALS, STAR_PATH, CTA_AVATARS } from './TeamData.js';

/* Small blue star-burst icon + label, reused for the "Team",
   "Our expert" and "Testimonial" section eyebrows — previously
   hand-duplicated 3x with an identical SVG path. */
function SectionBadge({ label }) {
  return (
    <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
      <span className="flex size-4 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
        </svg>
      </span>
      <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
        {label}
      </span>
    </span>
  );
}

/* 5-star rating row used on every testimonial card — previously
   45 hand-duplicated inline SVGs (5 stars x 9 cards), now one
   component rendered from STAR_PATH via .map(). */
function StarRating() {
  return (
    <span className="flex items-center justify-start gap-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          className="size-4 !fill-black fill-[#FFF049]"
        >
          <g clipPath="url(#clip0_6163_15851)">
            <path d={STAR_PATH} />
          </g>
          <defs>
            <clipPath id="clip0_6163_15851">
              <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
            </clipPath>
          </defs>
        </svg>
      ))}
    </span>
  );
}

export default function Team() {
  return (
    <>
      <SEO title="Our Team" url="/team" />
      <main className="bg-background-5">

        {/* ─── Hero: sliding image strip ──────────────────────────── */}
        <section className="pt-34 md:pt-39">
          <div className="main-container">
            <div className="space-y-20 md:space-y-28">

              <div className="space-y-2 text-center md:space-y-4">
                <div data-opai-animate data-delay="0.1" data-instant>
                  <SectionBadge label="Team" />
                </div>
                <div className="space-y-3">
                  <h2
                    data-opai-animate
                    data-delay="0.2"
                    data-instant
                    className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 mx-auto w-full max-w-[480px] font-normal text-white/90"
                  >
                    Your growth partner with AI expertise
                  </h2>
                  <p
                    data-opai-animate
                    data-delay="0.3"
                    data-instant
                    className="font-inter-tight text-tagline-2 mx-auto w-full text-center font-normal text-white/60 lg:max-w-[482px]"
                  >
                    Businesses trust Ezitech because of its proven ability to deliver data-driven insights
                    that drive real results. With advanced AI technology, robust security protocols,
                  </p>
                </div>
              </div>

              <div data-opai-animate data-delay="0.4" data-instant>
                <div className="sliding-swiper overflow-hidden">
                  <div className="swiper-wrapper w-full items-center">
                    {HERO_SLIDES.map(({ src, figureClassName }, i) => (
                      <div className="swiper-slide" key={src}>
                        <figure className={figureClassName}>
                          <img src={src} alt="about" className="size-full object-cover" />
                        </figure>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Team grid ──────────────────────────────────────────── */}
        <section className="pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-[70px]">
              <div className="space-y-4 text-center">
                <div data-opai-animate data-delay="0.1">
                  <SectionBadge label="Our expert" />
                </div>
                <div className="space-y-3">
                  <h2
                    data-opai-animate
                    data-delay="0.2"
                    className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90"
                  >
                    Driven by expertise. United by purpose.
                  </h2>
                  <p
                    data-opai-animate
                    data-delay="0.3"
                    className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[550px] font-normal text-white/60"
                  >
                    Our team of AI specialists and strategists is committed to delivering intelligent,
                    customized solutions that fuel your growth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center justify-center gap-y-8 lg:gap-x-8">
                {TEAM_MEMBERS.map(({ img, name, role, delay }) => (
                  <div
                    key={name}
                    data-opai-animate
                    data-delay={delay}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                  >
                    <div
                      className="border-stroke-1/10 group bg-background-5 {=$class} relative h-[420px] w-full overflow-hidden rounded-lg border"
                      aria-label="Team member profile"
                    >
                      <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                        <img src={img} alt={`${name}, ${role}`} className="size-full object-cover" />
                      </figure>
                      <a href="/team-details" className="text-center">
                        <div className="bg-background-13/80 ease-team-ease-1 absolute bottom-[15px] left-1/2 w-[calc(100%-30px)] -translate-x-1/2 space-y-0.5 rounded-md p-5 backdrop-blur-[12px] transition-all duration-400 md:bottom-5 md:w-[calc(100%-40px)] lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                          <h3 className="text-manrope-heading-6 font-medium text-white/80">{name}</h3>
                          <p className="text-tagline-4 text-center font-normal text-white/50">{role}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials marquee ───────────────────────────────── */}
        <section className="overflow-hidden pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-4">
              <div data-opai-animate data-delay="0.1">
                <SectionBadge label="Testimonial" />
              </div>
              <h2
                data-opai-animate
                data-delay="0.2"
                className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90"
              >
                What Our Clients Are Saying.
              </h2>
            </div>
          </div>
          <div data-opai-animate data-delay="0.3" className="mt-14 xl:mt-[70px]">
            <div className="gradient-hidden">
              <div className="cards-marquee-container relative z-20" data-opai-animate data-delay="0.3">
                <div className="flex items-center justify-center gap-8">
                  {TESTIMONIALS.map(({ quote, avatar, name, role, extraClass }) => (
                    <div
                      key={name}
                      className={`relative${extraClass ? ` ${extraClass}` : ''} flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14`}
                    >
                      <div className="max-h-full space-y-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span>
                            <StarRating />
                          </span>
                        </div>
                        <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">{quote}</p>
                      </div>

                      <div className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6">
                        <figure className="mx-auto size-12 overflow-hidden rounded-full">
                          <img src={avatar} alt="testimonial" className="size-full object-cover grayscale-25" />
                        </figure>
                        <blockquote className="space-y-0.5">
                          <h3 className="text-is-heading-6 text-background-6 font-normal">{name}</h3>
                          <p className="text-tagline-3 text-background-13/60 font-normal">{role}</p>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────────── */}
        <section className="bg-background-6 !pt-20 md:!pt-30 lg:!pt-44 overflow-hidden py-14 md:py-20 lg:py-24 xl:py-28">
          <div className="main-container">
            <div className="space-y-14 pb-9">

              <div className="flex items-center justify-center gap-x-2">
                {CTA_AVATARS.map(({ src, alt, delay }) => (
                  <img
                    key={src}
                    data-opai-avatar
                    data-avatar-delay={delay}
                    className="inline-block size-14 rounded-full"
                    src={src}
                    alt={alt}
                  />
                ))}
              </div>
              <div className="space-y-3">
                <h2
                  className="text-is-heading-3 lg:text-is-heading-2 font-instrument-serif text-center font-normal tracking-[-2.4px] text-white/90"
                  data-opai-animate
                  data-delay="0.1"
                >
                  <span className="inline-flex flex-wrap items-start justify-center gap-x-1 sm:flex-nowrap md:items-center">
                    <span className="w-full sm:w-auto">Turn clicks</span>
                    <span className="cta-content-image inline-block h-[52px] w-[88px] overflow-hidden rounded-[300px] align-middle">
                      <img
                        src="/images/opai-img-24.png"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span className="w-full sm:w-auto">Into customers</span>
                  </span>

                  <br />

                  <span className="inline-flex items-center justify-center gap-x-4">
                    <span className="cta-content-image-2 inline-block size-12 -rotate-[20deg] overflow-hidden rounded-lg align-middle">
                      <img
                        src="/images/opai-avatar-img-25.png"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span>the smarter way</span>
                  </span>
                </h2>

                <p
                  className="text-tagline-2 mx-auto w-full max-w-[320px] text-center text-white/60"
                  data-opai-animate
                  data-delay="0.2"
                >
                  No guesswork. We use AI + proven marketing systems to scale ads, SEO,
                  and conversion.
                </p>
              </div>

              <div className="flex justify-center" data-opai-animate data-delay="0.3">
                <a
                  href="/contact"
                  className="group bg-background-7 hover:border-stroke-3 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
                >
                  <div className="h-full max-h-5 overflow-hidden">
                    <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
                      Book a strategy call
                    </span>
                    <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
                      Book a strategy call
                    </span>
                  </div>

                  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
                    <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
                      <span className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>

                    <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div
              data-opai-animate
              data-delay="0.4"
              data-duration="3"
              data-direction="right"
              data-spring
            >
              <figure className="flex justify-end">
                <img src="/images/vector-01.svg" alt="CTA Image" />
              </figure>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
