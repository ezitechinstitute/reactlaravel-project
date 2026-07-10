import './Services.css'
import SEO from '../../components/SEO/SEO'

import {
  ASTERISK_ICON_PATH,
  ARROW_ICON_PATH,
  HERO_DECORATIVE_IMAGES,
  SERVICES_LIST,
  PARTNERS,
  CTA_AVATARS,
} from './ServicesData.js'

function SectionBadge({ label }) {
  return (
    <span className="fill-opai-blue text-white/50 flex items-center gap-x-1">
      <span className="flex size-4 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d={ASTERISK_ICON_PATH} />
        </svg>
      </span>
      <span className="font-inter-tight text-tagline-4 text-background-13/70 text-white/50 font-normal">
        {label}
      </span>
    </span>
  )
}

function CtaButton({ href, label }) {
  return (
    <a
      href={href}
      className="group bg-background-7 hover:border-stroke-3 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
    >
      <div className="h-full max-h-5 overflow-hidden">
        <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
          {label}
        </span>
        <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
          {label}
        </span>
      </div>

      <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
        <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
          <span className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d={ARROW_ICON_PATH} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>

        <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path d={ARROW_ICON_PATH} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default function Services() {
  return (
    <>
      <SEO title="Services" url="/services" />
      <main className="bg-background-5">
        <section
          className="bg-background-5 pt-39 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-38 xl:pt-56 xl:pb-44"
          data-image-reveal
        >
          <div
            className="medias pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
            aria-hidden="true"
          >
            {HERO_DECORATIVE_IMAGES.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
          <div className="main-container">
            <div className="space-y-20">
              <div className="space-y-6 lg:max-w-[514px]">
                <div data-opai-animate data-delay="0.1">
                  <SectionBadge label="Our Services" />
                </div>

                <div className="space-y-3">
                  <h2
                    className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 max-md:leading-[1.1]"
                    data-opai-animate
                    data-delay="0.2"
                  >
                    Marketing solutions that drive results
                  </h2>
                  <p
                    className="text-tagline-2 font-normal text-white/60"
                    data-opai-animate
                    data-delay="0.3"
                  >
                    Trusted by 100+ businesses in retail, healthcare, tech, and more.
                  </p>
                </div>
              </div>

              <div>
                <div className="divide-stroke-1/11 divide-y" data-image-reveal-list>
                  <div
                    data-image-reveal-cursor
                    className="service-reveal-cursor pointer-events-none fixed top-0 left-0 z-50 h-[180px] w-[200px] overflow-hidden rounded-xl opacity-0 md:h-[300px] md:w-[292px] lg:h-[386px]"
                  >
                    <div
                      className="media-container relative size-full overflow-hidden rounded-xl"
                      data-image-reveal-container
                    ></div>
                  </div>

                  {SERVICES_LIST.map((service, index) => (
                    <a
                      key={service.title}
                      data-opai-animate
                      data-delay={service.delay}
                      data-instant={service.instant ? true : undefined}
                      href="/service-details"
                      className="block"
                    >
                      <div
                        data-image-reveal-item
                        data-index={index}
                        className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:gap-8 lg:py-8"
                      >
                        <div className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full"></div>

                        <div className="relative z-20 flex gap-x-4 gap-y-2">
                          <span
                            className={`${service.icon} transition-color group-hover:!text-background-13/90 text-[52px] text-white/60 duration-400 ease-in-out max-lg:scale-90`}
                          ></span>
                          <div className="lg:max-w-[465px]">
                            <h3 className="md:text-is-heading-5 font-instrument-serif transition-color group-hover:text-background-13/90 text-[26px] font-normal text-white/80 mix-blend-color-burn duration-400 ease-in-out">
                              {service.title}
                            </h3>
                            <p
                              className={`text-tagline-2 group-hover:text-background-13/60 transition-color font-normal text-white/60 mix-blend-color-burn duration-400 ease-in-out${service.descriptionExtraClass ? ` ${service.descriptionExtraClass}` : ''}`}
                            >
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background-5 pt-20 pb-20 md:pt-30 md:pb-30 lg:pt-44 lg:pb-44">
          <div className="main-container space-y-10 md:space-y-17.5">
            <div className="space-y-1.5 text-center md:space-y-3">
              <div
                className="flex items-center justify-center max-md:pb-3"
                data-opai-animate
                data-delay="0.1"
              >
                <SectionBadge label="Partnership" />
              </div>
              <h2
                className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 pt-1 font-normal text-white/90 max-md:leading-[1.1]"
                data-opai-animate
                data-delay="0.2"
              >
                Certified by the Best
              </h2>
              <p
                className="text-tagline-2 font-normal text-white/60"
                data-opai-animate
                data-delay="0.3"
              >
                Discover expert tips, industry trends, and actionable strategies to
                power your growth with Ezitech.
              </p>
            </div>

            <div
              className="flex flex-col items-start justify-center gap-y-5 lg:flex-row"
              data-opai-animate
              data-delay="0.4"
            >
              {PARTNERS.map((partner) => (
                <div key={partner.id} className={partner.cardClassName}>
                  <a href="/team-details" className={partner.linkClassName}>
                    <div className="partner-ship-gradient pointer-events-none absolute top-1/2 -left-[46%] z-0 h-[256px] w-[500px] -translate-y-1/2 rounded-[500px] bg-[#B962E7] blur-[90px] select-none"></div>
                    <div className="relative z-10 space-y-8">
                      <figure className="size-13 rounded bg-white p-2.5">
                        <img
                          src={partner.icon}
                          alt={partner.iconAlt}
                          className="size-full object-contain"
                        />
                      </figure>
                      <div className="flex justify-between gap-21">
                        <div>
                          <h3 className="text-is-heading-5 font-normal text-white">
                            {partner.title}
                          </h3>
                          <p className="partner-ship-description text-tagline-2 font-inter-tight line-clamp-5 text-white/60 lg:line-clamp-3 xl:line-clamp-5">
                            {partner.description}
                          </p>
                        </div>
                        <div>
                          <svg
                            className="partner-ship-arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                            fill="none"
                          >
                            <path
                              d="M15.168 36.8307L36.8346 15.1641"
                              stroke="#F8F9FA"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.168 15.1641H36.8346V36.8307"
                              stroke="#F8F9FA"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="flex justify-center" data-opai-animate data-delay="0.1">
              <CtaButton href="/pricing" label="Let’s get started" />
            </div>
          </div>
        </section>

        <section className="bg-background-6 !bg-background-5 !pt-20 md:!pt-30 lg:!pt-44 overflow-hidden py-14 md:py-20 lg:py-24 xl:py-28">
          <div className="main-container">
            <div className="space-y-14 pb-9">
              <div className="flex items-center justify-center gap-x-2">
                {CTA_AVATARS.map((avatar) => (
                  <img
                    key={avatar.src}
                    data-opai-avatar
                    data-avatar-delay={avatar.delay}
                    className="inline-block size-14 rounded-full"
                    src={avatar.src}
                    alt={avatar.alt}
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
                <CtaButton href="/contact" label="Book a strategy call" />
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
  )
}
