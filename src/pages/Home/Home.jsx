import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'

import ServicesOverview from '../../components/ServicesOverview/ServicesOverview'
import { AI_TOOL_ICONS } from './data/aiTools'
import { TEAM_MEMBERS } from './data/team'
import { INDUSTRIES } from './data/industries'
import { COUNTER_STEPS } from './data/counterSteps'
import { WHY_CHOOSE_CARDS } from './data/whyChooseCards'
import { ENTERPRISE_CARDS } from './data/enterpriseCards'
import { CLIENT_LOGOS_ROW_1, CLIENT_LOGOS_ROW_2 } from './data/clientLogos'
import { HERO_PARTICLE_CURVES, PARTICLE_RECT_COUNT } from './data/heroParticlePaths'

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

// Renders a list of shape primitives ({ tag, d/points/cx.. , round }) as
// SVG children. `round` reproduces the original hand-written markup's
// per-shape strokeLinecap/strokeLinejoin="round" (applied inconsistently
// in the source markup, so it's preserved per-shape, not normalized).
function renderIconShapes(shapes) {
  return shapes.map((s, i) => {
    const roundProps = s.round ? { strokeLinecap: 'round', strokeLinejoin: 'round' } : {}
    if (s.tag === 'circle') return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} {...roundProps} />
    if (s.tag === 'rect') return <rect key={i} x={s.x} y={s.y} width={s.width} height={s.height} rx={s.rx} {...roundProps} />
    if (s.tag === 'polyline') return <polyline key={i} points={s.points} {...roundProps} />
    return <path key={i} d={s.d} {...roundProps} />
  })
}

export default function Home() {
  const whyChooseRef = useRef(null)
  const orbitRef = useRef(null)
  const [activeIndTab, setActiveIndTab] = useState(0)
    const [techBtnHover, setTechBtnHover] = useState(false)


useEffect(() => {
  const ring = orbitRef.current
  if (!ring) return

  const pivots  = ring.querySelectorAll('.ts-pivot')
  const baskets = ring.querySelectorAll('.ts-basket')
  const total   = pivots.length
  if (!total) return

  // 1. Position all pivots evenly around the circle
  const angle = 360 / total
  pivots.forEach((pivot, i) => {
    if (window.gsap) {
      window.gsap.set(pivot, { rotation: angle * i })
    } else {
      pivot.style.transform = `rotate(${angle * i}deg)`
    }
  })

  // 2. Set --orbit-size CSS var and basket top position
  function updateSize() {
    const size = ring.offsetWidth
    ring.style.setProperty('--orbit-size', `${size}px`)
    baskets.forEach(b => {
      b.style.top  = `calc(var(--orbit-size) * -0.5)`
      b.style.left = '0px'
    })
  }
  updateSize()
  window.addEventListener('resize', updateSize)

  if (!window.gsap) return
  const gsap = window.gsap
  const dur  = 30 / 0.35   // speed: 0.35 like template's data-orbit-speed

  // 3. Ring spins clockwise
  gsap.to(ring, {
    rotation: 360,
    duration: dur,
    ease: 'none',
    repeat: -1,
    transformOrigin: 'center center',
  })
  // 4. Baskets counter-rotate to stay upright
  gsap.to(baskets, {
    rotation: -360,
    duration: dur,
    ease: 'none',
    repeat: -1,
  })

  return () => {
    window.removeEventListener('resize', updateSize)
    gsap.killTweensOf(ring)
    gsap.killTweensOf(baskets)
  }
}, [])

  // ── Why Choose Us — Scroll Animations + Swiper Slider ───────────────────────
  useEffect(() => {
    let timer
    let wcuSwiper = null

    function initWhyChooseUs() {
      const section = whyChooseRef.current
      if (!section) return

      // 1. Heading + subtitle + button — GSAP fade-up
      if (window.gsap && window.ScrollTrigger) {
        const gsap = window.gsap
        gsap.registerPlugin(window.ScrollTrigger)

        const animEls = section.querySelectorAll('[data-opai-animate]')
        animEls.forEach((el) => {
          const delay = parseFloat(el.getAttribute('data-delay')) || 0
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          })
        })

        window.ScrollTrigger.refresh()
      }

      // 2. Cards — GSAP continuous marquee (infinite smooth scroll)
      const sliderOuter = section.querySelector('.wcu-slider-outer')
      const track = section.querySelector('.wcu-cards-track')
      if (track && window.gsap) {
        const gsap = window.gsap
        // Get the width of one set of cards (half the track since we duplicated)
        const totalWidth = track.scrollWidth / 2

        // Start the infinite loop — translate from 0 to -totalWidth, then jump back
        const marquee = gsap.to(track, {
          x: -totalWidth,
          duration: totalWidth / 60, // ~60px per second = slow smooth speed
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
          },
        })

        // Pause on hover
        if (sliderOuter) {
          sliderOuter.addEventListener('mouseenter', () => marquee.timeScale(0.3))
          sliderOuter.addEventListener('mouseleave', () => marquee.timeScale(1))
        }

        wcuSwiper = { _marquee: marquee } // store ref for cleanup
      }
    }

    timer = setTimeout(initWhyChooseUs, 300)

    return () => {
      clearTimeout(timer)
      if (wcuSwiper && wcuSwiper._marquee) {
        wcuSwiper._marquee.kill()
      }
      if (window.ScrollTrigger && whyChooseRef.current) {
        window.ScrollTrigger.getAll()
          .filter((t) => whyChooseRef.current?.contains(t.trigger))
          .forEach((t) => t.kill())
      }
    }
  }, [])

  return (
    <>
      <SEO title="Home" url="/" />
      <main className="bg-background-5 h-full" >
        {/* ========================= Hero Section ========================= */}
        <section
          className="bg-background-5 relative overflow-hidden home-hero-section">
          <div className="main-container relative z-20 home-hero-container">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 w-full home-hero-grid">


              <div className="flex flex-col items-center text-center">


                <div id="hero-slider-wrap" className="overflow-hidden w-full home-hero-slider-wrap">
                  <h1
                    id="hero-slide-text"
                    className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal break-words text-white/90 leading-[1.1] transition-all duration-500"
                    data-opai-animate
                    data-delay="0.1"
                  >
                    Custom Web &amp; <span className="home-accent-purple">Software</span> Development
                  </h1>
                </div>


                <p className="text-tagline-2 font-normal text-white/60 home-hero-desc" data-opai-animate data-delay="0.2">
                  We build powerful, scalable and user-centric digital solutions that drive growth and create lasting impact.
                </p>


                <div className="home-hero-cta-wrap" data-opai-animate data-delay="0.3">
                  <a href="/contact" className="group bg-background-7 hover:border-stroke-3 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out">
                    <div className="h-full max-h-5 overflow-hidden">
                      <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Get Started</span>
                      <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Get Started</span>
                    </div>
                    <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
                      <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
                        <span className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </span>
                      <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </div>
                  </a>
                </div>


                <div className="flex items-center gap-4 home-hero-trust-wrap" data-opai-animate data-delay="0.4">
                  <div className="flex -space-x-2.5">
                    <img data-opai-avatar data-avatar-delay="0.1" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-01.png" alt="Avatar 1" />
                    <img data-opai-avatar data-avatar-delay="0.2" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-02.png" alt="Avatar 2" />
                    <img data-opai-avatar data-avatar-delay="0.3" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-03.png" alt="Avatar 3" />
                    <img data-opai-avatar data-avatar-delay="0.4" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-04.png" alt="Avatar 4" />
                    <div data-opai-avatar data-avatar-delay="0.5" className="text-tagline-4 inline-flex size-9 items-center justify-center rounded-full bg-[#0d0d1280] font-medium text-white/80 ring-2 ring-white backdrop-blur-[6px]">99+</div>
                  </div>
                  <div className="text-left">
                    <p className="text-tagline-3 block font-medium text-white/90">Trusted by 20k+</p>
                    <p className="text-tagline-4 text-white/60">Customers across the globe</p>
                  </div>
                </div>


                <div data-opai-animate data-delay="0.5">
                  <div className="hero-slide hero-slide-active flex flex-wrap gap-2 justify-center">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Web Development</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Custom Software</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Mobile Apps</span>
                  </div>
                  <div className="hero-slide hidden flex-wrap gap-2 justify-center">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">SaaS Platform</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Cloud Products</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Scalable SaaS</span>
                  </div>
                  <div className="hero-slide hidden flex-wrap gap-2 justify-center">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">AI Solutions</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Automation</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Digital Growth</span>
                  </div>
                  <div className="hero-slide hidden flex-wrap gap-2 justify-center">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Dev Team</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Dedicated Team</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Expert Devs</span>
                  </div>
                </div>

              </div>


              <div className="relative flex w-full items-center justify-end home-hero-visual" data-opai-animate data-delay="0.3">
                <div id="hero-box-wrapper" className="home-hero-box-wrapper">


                  <div className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 home-hero-orbit-svg-wrap">
                    <svg className="h-full w-full" viewBox="0 0 600 600" fill="none" preserveAspectRatio="xMidYMid meet">
                      <ellipse cx="300" cy="300" rx="295" ry="188" stroke="rgba(141,89,255,0.55)" strokeWidth="1.5" />
                      <circle cx="300" cy="112" r="5" fill="#a78bfa" />
                      <circle cx="595" cy="300" r="4" fill="#227eff" />
                      <circle cx="300" cy="488" r="5" fill="#8d59ff" />
                      <circle cx="5" cy="300" r="3.5" fill="#a78bfa" />
                      <circle cx="88" cy="148" r="3" fill="#227eff" />
                      <circle cx="512" cy="452" r="3.5" fill="#8d59ff" />
                    </svg>
                  </div>


                  <div className="pointer-events-none absolute bottom-0 left-1/2 -z-0 -translate-x-1/2 rounded-full blur-2xl home-hero-glow"></div>


                  <div className="hero-tilt relative home-hero-tilt">
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] border border-white/10 bg-white/5 home-hero-tilt-layer-1"></div>
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] border border-white/10 bg-white/5 home-hero-tilt-layer-2"></div>
                    <div id="hero-image-stack" className="relative overflow-hidden rounded-[26px] home-hero-image-stack">
                      <img className="hero-img hero-img-active absolute inset-0 object-cover home-hero-img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="Web Development" />
                      <img className="hero-img absolute inset-0 object-cover home-hero-img home-hero-img--hidden" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="SaaS Products" />
                      <img className="hero-img absolute inset-0 object-cover home-hero-img home-hero-img--hidden" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80" alt="AI" />
                      <img className="hero-img absolute inset-0 object-cover home-hero-img home-hero-img--hidden" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Dedicated Team" />
                      <div className="pointer-events-none absolute inset-0 home-hero-img-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <figure
            className="absolute bottom-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2 md:-bottom-10 lg:bottom-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-0 mx-auto h-auto w-full max-w-full sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1482px]"
              viewBox="0 0 1482 1378"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {HERO_PARTICLE_CURVES.map((curve) => (
                <path
                  key={curve.n}
                  id={`curve-path-${curve.n}`}
                  d={curve.d}
                  className="stroke-[#fafcff0d]"
                />
              ))}

              {HERO_PARTICLE_CURVES.flatMap((curve) =>
                Array.from({ length: PARTICLE_RECT_COUNT }, (_, ri) => {
                  const m = ri + 1
                  return <rect key={`rect-${curve.n}-${m}`} id={`rect-${curve.n}-${m}`} width="1" height="1" />
                })
              )}
            </svg>

          </figure>

          <div className="absolute bottom-0 left-0 z-4 h-[696px] w-full min-[2000px]:bottom-0 md:-bottom-4 md:h-[540px] lg:h-[796px] 2xl:h-[796px]">
            <img
              src="/images/gradient/opai-2.png"
              alt="Top blend mode"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              className="size-full bg-no-repeat"
            />
          </div>

        </section>

        {/* ========================= Client Section ========================= */}
        <section className="py-[50px] md:py-[80px] lg:py-[100px] overflow-hidden bg-background-4 dark:bg-background-4">

          <div className="home-clients-wrap">
            <div className="home-clients-inner">

              <h2
                data-ns-animate
                data-delay="0.2"
                className="text-center text-heading-5 md:text-heading-3 home-clients-heading"
              >
                Trusted by 10k+ fast-growing businesses
              </h2>

              <div className="home-clients-rows">

                {/* Row 1 — Left scroll */}
                <div className="home-clients-row">
                  <div className="home-clients-fade-left" />
                  <div className="home-clients-fade-right" />
                  <div className="logos-track-left">
                    {[...CLIENT_LOGOS_ROW_1, ...CLIENT_LOGOS_ROW_1].map((src, i) => (
                      <figure key={i} className="home-client-logo-fig">
                        <img src={src} alt="Client logo" className="home-client-logo-img"
                        />
                      </figure>
                    ))}
                  </div>
                </div>

                {/* Row 2 — Right scroll */}
                <div className="home-clients-row">
                  <div className="home-clients-fade-left" />
                  <div className="home-clients-fade-right" />
                  <div className="logos-track-right">
                    {[...CLIENT_LOGOS_ROW_2, ...CLIENT_LOGOS_ROW_2].map((src, i) => (
                      <figure key={i} className="home-client-logo-fig">
                        <img src={src} alt="Client logo" className="home-client-logo-img"
                        />
                      </figure>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================= Services Section (Stack Cards) ========================= */}
        <ServicesOverview />

        {/* ========================= Counter Section ========================= */}
        <div id="counter-section" className="home-counter-wrap">
          <section className="bg-background-5 home-counter-section">
            <div className="main-container">
              {/* 3 columns using inline style — Tailwind purged classes ka safe alternative */}
              <div className="home-counter-grid">

                {COUNTER_STEPS.map((step) => (
                  <div key={step.num} data-ns-animate data-delay={step.delay} className="home-counter-item">
                    <div className="home-counter-bar"></div>
                    <p className="home-counter-num">{step.num}</p>
                    <h3 className="text-white/90 home-counter-title">
                      {step.title}
                    </h3>
                    <p className="text-white/50 home-counter-desc">
                      {step.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>
        </div>

        {/* =========================  Why Choose Us  ========================= */}
        <section
          ref={whyChooseRef}
          className="bg-background-4 dark:bg-background-4 relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]"
        >
          {/* Heading block — inside main-container, left-aligned */}
          <div className="main-container">
            <div className="space-y-6 mb-[70px] text-left mx-4 sm:mx-0">
              <div className="space-y-3">
                <h2
                  data-opai-animate
                  data-delay="0.1"
                  className="text-white text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[88px] font-extralight tracking-tight leading-tight max-w-4xl hero-heading"
                >
                  Why growth teams choose Ezitech.
                </h2>
                <p
                  data-opai-animate
                  data-delay="0.2"
                  className="text-white/60 text-base md:text-lg max-w-2xl hero-sub"
                >
                  A dynamic digital marketing agency trusted by clients around the globe.
                </p>
              </div>
              <div data-opai-animate data-delay="0.3">
                <a
                  href="/portfolio"
                  className="inline-block border border-white/10 text-white/80 hover:text-white py-2 px-4 rounded-md text-sm md:text-base hero-cta"
                >
                  <span className="inline-block">Read more success stories.</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cards — GSAP continuous marquee */}
          <div className="wcu-slider-outer" data-opai-animate data-delay="0.4">
            <div className="wcu-cards-track">

              {[...WHY_CHOOSE_CARDS, ...WHY_CHOOSE_CARDS].map((card, i) => (
                <div className="wcu-card" key={i}>
                  <div className="wcu-card-glow" />
                  <div className="wcu-card-top">
                    <p className="wcu-card-label">{card.label}</p>
                    <h3 className="wcu-card-stat">{card.stat}</h3>
                  </div>
                  <p className="wcu-card-bottom">{card.bottom}</p>
                </div>
              ))}

            </div>
            {/* Gradient fade edges */}
            <div className="wcu-fade-left" />
            <div className="wcu-fade-right" />
          </div>
        </section>

        {/* ========================= Enterprise Software Solutions Section ========================= */}
        <section className="ent-section">
          <div className="main-container">

            {/* Section Header */}
            <div className="text-center home-ent-header" data-opai-animate data-delay="0.1">
              <span className="ent-badge" data-opai-animate data-delay="0.2">
                Enterprise Software Solutions
              </span>
              <h2 className="ent-heading" data-opai-animate data-delay="0.3">
                Powerful tools built for<br className="hidden md:block" />
                <span className="ent-heading-accent"> modern businesses.</span>
              </h2>
              <p className="ent-subheading" data-opai-animate data-delay="0.4">
                Streamline operations, manage customers, and scale your business with our integrated software solutions.
              </p>
            </div>

            {/* 2×2 Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {ENTERPRISE_CARDS.map((card) => (
                <div className="ent-card" data-opai-animate data-delay={card.delay} key={card.key}>
                  <div className="ent-card__left">
                    <div>
                      <div className="ent-card__icon-wrap">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          {renderIconShapes(card.icon)}
                        </svg>
                      </div>
                      <h3 className="ent-card__title">{card.title}</h3>
                      <p className="ent-card__desc">{card.desc}</p>
                    </div>
                    <a href={card.href} className="ent-card__btn">View service</a>
                  </div>

                  {/* Analytics */}
                  <div className="ent-analytics">
                    {card.analytics.variant === 'tabs' ? (
                      <>
                        <p className="ent-analytics__label">{card.analytics.label}</p>
                        <div className="ent-analytics__tabs">
                          <span className="ent-analytics__tab-active">{card.analytics.tabs[0]}</span>
                          {card.analytics.tabs.slice(1).map((t) => <span key={t}>{t}</span>)}
                        </div>
                        <div className="ent-analytics__tooltip">
                          <span>{card.analytics.tooltipValue}</span>
                          <span style={{ color: card.analytics.tooltipColor, fontSize: '0.5625rem', marginTop: '1px' }}>{card.analytics.tooltipDelta}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="ent-analytics__label">{card.analytics.label}</p>
                        <p className="ent-analytics__value">{card.analytics.value}</p>
                        <div className={`ent-analytics__rotated-badge ent-analytics__rotated-badge--${card.analytics.badgeVariant}`}>{card.analytics.badgeText}</div>
                      </>
                    )}
                    <div className="ent-analytics__bars">
                      {card.analytics.bars.map((pct, i) => (
                        <div key={i} className="ent-analytics__bar-col">
                          <div className="ent-analytics__bar" style={{ height: `${pct}%`, background: card.analytics.barGradient }} />
                          <span className="ent-analytics__bar-day">{WEEK_DAYS[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

{/* ========================= Tech Stack ========================= */}
<section className="bg-white pt-16 pb-0 md:pt-24 lg:pt-28 xl:pt-36 2xl:pt-44 overflow-hidden">
  <div className="md:main-container">

    {/* Badge */}
    <div className="flex items-center justify-center pb-4" data-opai-animate data-delay="0.1">
      <span className="fill-opai-blue text-black flex items-center gap-x-1">
        <span className="flex size-4 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"/>
          </svg>
        </span>
        <span className="font-inter-tight text-tagline-4 text-background-13/70 text-black font-normal">
          Our Tech Stack
        </span>
      </span>
    </div>

    {/* Heading + subtext */}
    <div className="relative z-40 mx-auto w-full max-w-[960px] home-ts-heading-wrap">
      <div className="relative z-5 space-y-1.5 text-center md:space-y-3 pb-8 md:pb-10">
        <h2
          className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-5 font-normal max-md:leading-[1.1]"
          data-opai-animate data-delay="0.2"
        >
          Built on Top AI +{' '}
          <span className="text-background-13/30">Marketing Tools</span>
        </h2>
        <p className="text-tagline-2 text-background-13/60 font-normal" data-opai-animate data-delay="0.3">
               We blend automation with human creativity to deliver results that compound.
        </p>
     {/* Button */}
{/* SLIDE-TRANSITIONED DEMO BUTTON WITH FULL INLINE CSS */}
                <div data-opai-animate data-delay="0.4" className="relative top-20 flex justify-center">
                  <a
                    href="/contact"
                    onMouseEnter={() => setTechBtnHover(true)}
                    onMouseLeave={() => setTechBtnHover(false)}
                    className="group relative inline-flex items-center rounded-full overflow-hidden transition-all duration-300 hover:opacity-95 home-ts-demo-btn"
                  >
                    {/* Animated Left Arrow Icon Span (Translates from left to right end) */}
                    <span
                      className={`flex size-10 items-center justify-center rounded-full home-ts-demo-icon${techBtnHover ? ' home-ts-demo-icon--hover' : ''}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>

                    {/* Animated Button Text Span (Translates from right to left end) */}
                    <span
                      className={`whitespace-nowrap home-ts-demo-text${techBtnHover ? ' home-ts-demo-text--hover' : ''}`}
                    >
                      Request a Demo
                    </span>
                  </a>
</div>
      </div>
    </div>

  </div>

  {/* Orbit ring — only top arc visible */}
  <div className="ts-orbit-section">
    <div className="ts-orbit-wrap">
      <div data-orbit-layout>
        {/* Ring */}
        <div
          ref={orbitRef}
          data-orbit
          className="ts-orbit-ring"
        >
          <div data-orbit-center>
            {AI_TOOL_ICONS.map((icon, i) => (
              <div key={i} className="ts-pivot">
                <div className="ts-basket">
                  <img src={icon.src} alt={icon.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

</section>


        {/* ========================= Industries We Serve ========================= */}
        <section className="ind-section">
          <div className="main-container">

            {/* Header */}
            <div className="text-center mb-10 md:mb-12" data-opai-animate data-delay="0.1">
              <span className="ind-badge" data-opai-animate data-delay="0.2">Industries We Serve</span>
              <h2 className="ind-heading" data-opai-animate data-delay="0.3">
                Custom fit for <span className="ind-heading-accent">every industry.</span>
              </h2>
              <p className="ind-subheading" data-opai-animate data-delay="0.4">
                Whether you're running a hospital, school, or supply chain — we've got you covered.
              </p>
            </div>

            {/* Tabs */}
            <div className="ind-tabs-wrap  border-2 border-white home-ind-tabs-spacing" data-opai-animate data-delay="0.5">
              {INDUSTRIES.map((industry, i) => (
                <button
                  key={industry.key}
                  className={`ind-tab${i === 0 ? ' ind-tab--active' : ''}`}
                  data-ind-tab={i}
                  onClick={e => {
                    document.querySelectorAll('.ind-tab').forEach(t => t.classList.remove('ind-tab--active'))
                    e.currentTarget.classList.add('ind-tab--active')
                    document.querySelectorAll('.ind-panel').forEach(p => p.classList.remove('ind-panel--active'))
                    document.querySelector(`.ind-panel[data-ind-panel="${i}"]`)?.classList.add('ind-panel--active')
                  }}
                >
                  {industry.tabLabel}
                </button>
              ))}
            </div>

            {/* Panels */}
            <div className="ind-panels">

              {INDUSTRIES.map((industry, i) => (
                <div key={industry.key} className={`ind-panel${i === 0 ? ' ind-panel--active' : ''}`} data-ind-panel={i}>
                  <div className="ind-panel__left">
                    <h3 className="ind-panel__title">{industry.title}</h3>
                    <p className="ind-panel__desc">
                      {industry.desc}
                    </p>
                    <ul className="ind-features">
                      {industry.features.map((feature, fi) => (
                        <li className="ind-feature" key={fi}>
                          <span className="ind-feature__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              {renderIconShapes(feature.icon)}
                            </svg>
                          </span>
                          <div><strong>{feature.title}</strong><br />{feature.text}</div>
                        </li>
                      ))}
                    </ul>
                    <a href="/services" className="ind-cta">Start learning</a>
                  </div>
                  <div className="ind-panel__right">
                    <div className={`ind-img-wrap ${industry.bgClass}`}>
                      <img src={industry.imgSrc} alt={industry.imgAlt} className="ind-img" />
                      <div className="ind-stat-card">
                        <div className="ind-stat-card__ring" style={industry.ringColorVar ? { '--ring-color': industry.ringColorVar } : undefined}>
                          <svg viewBox="0 0 60 60" className="ind-ring-svg">
                            <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                            <circle cx="30" cy="30" r="24" fill="none" stroke={`url(#${industry.ring.gradId})`} strokeWidth="5" strokeDasharray={industry.ring.dashArray} strokeLinecap="round" strokeDashoffset="25" />
                            <defs><linearGradient id={industry.ring.gradId} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={industry.ring.from} /><stop offset="100%" stopColor={industry.ring.to} /></linearGradient></defs>
                            <circle cx="30" cy="30" r="6" fill={industry.ring.center} />
                          </svg>
                        </div>
                        <div className="ind-stat-card__labels">
                          <span className="ind-stat-card__pct">{industry.statPct}</span>
                          <span className="ind-stat-card__sub">{industry.statSub}</span>
                          <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>{/* /ind-panels */}
          </div>
        </section>

        {/* ========================= Team Preview Section ========================= */}
        <section className="bg-background-4 dark:bg-background-4  pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-0 overflow-hidden">
          <div className="main-container">

            {/* Header */}
            <div className="flex items-end justify-between gap-4 mb-10 md:mb-12" data-opai-animate data-delay="0.1">
              <div>
                <span className="fill-opai-blue text-white/50 flex items-center gap-x-1 mb-4">
                  <span className="flex size-4 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                    </svg>
                  </span>
                  <span className="font-inter-tight text-tagline-4 font-normal">Our Team</span>
                </span>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 m-0">
                  Our Global Leadership
                </h2>
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  className="team-nav-btn"
                  aria-label="Previous"
                  onClick={() => {
                    const track = document.getElementById('team-track')
                    const cardW = track.querySelector('.team-card')?.offsetWidth || 0
                    const current = parseInt(track.dataset.idx || '0')
                    const next = Math.max(0, current - 1)
                    track.dataset.idx = next
                    track.style.transform = `translateX(-${next * cardW}px)`
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="team-nav-btn"
                  aria-label="Next"
                  onClick={() => {
                    const track = document.getElementById('team-track')
                    const cardW = track.querySelector('.team-card')?.offsetWidth || 0
                    const current = parseInt(track.dataset.idx || '0')
                    const total = track.querySelectorAll('.team-card').length
                    const visible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 1
                    const next = Math.min(total - visible, current + 1)
                    track.dataset.idx = next
                    track.style.transform = `translateX(-${next * cardW}px)`
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Slider track — bleeds right */}
          <div className="team-track-outer" >
            <div className="main-container home-team-track-container">
              <div className="team-track home-team-track" id="team-track" data-idx="0">

                {TEAM_MEMBERS.map((m, i) => (
                  <div key={i} className="team-card ">
                    <div className="team-card__img-wrap">
                      <img src={m.img} alt={`${m.first} ${m.last}`} className="team-card__img" />
                    </div>
                    <div className="pt-6 pb-6" >
                      <p className="text-is-heading-5 font-bold text-white/90 m-0 leading-snug">
                        {m.first} <span className="team-card__name-accent font-instrument-serif">{m.last}</span>
                      </p>
                      <p className="font-inter-tight text-tagline-3 text-white/50 font-normal mt-0.5 m-0 flex gap-2">{m.role} <span className="team-card__name-accent"> <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a></span></p>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  )
}
