import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  // ── Services Section Stairs Animation ──────────────────────────
  const servicesRef = useRef(null)
  const whyChooseRef = useRef(null)
  const orbitRef = useRef(null)
  const [activeIndTab, setActiveIndTab] = useState(0)
    const [techBtnHover, setTechBtnHover] = useState(false)


  // services section ke liye GSAP + ScrollTrigger animation
  useEffect(() => {
    const triggers = []
    let timer

    function initStackCards() {
      const container = servicesRef.current
      if (!container) return

      const items = Array.from(container.querySelectorAll('.ezitech-sc'))
      if (!items.length) return

      if (!window.gsap || !window.ScrollTrigger) return

      window.gsap.registerPlugin(window.ScrollTrigger)

      const STICKY_TOP = 112

      // Left column pinned
      const leftColumn = document.querySelector('.services-left-col')
      if (leftColumn) {
        const lastCard = items[items.length - 1]
        const t0 = window.ScrollTrigger.create({
          trigger: container,
          start: `top ${STICKY_TOP}px`,
          endTrigger: lastCard,
          end: `bottom ${STICKY_TOP + 200}px`,
          pin: leftColumn,
          pinSpacing: false,
          invalidateOnRefresh: true,
        })
        triggers.push(t0)
      }

      items.forEach((card, i) => {
        // z-index: pehli card sabse neeche, last sabse upar
        // Reference jaisa — cards stack hoti hain top pe
        card.style.transformOrigin = 'center top'
        card.style.willChange = 'transform, opacity'
        card.style.zIndex = i + 1

        // Har card pin hoti hai jab woh viewport top pe aati hai
        const t1 = window.ScrollTrigger.create({
          trigger: card,
          start: `top ${STICKY_TOP + i * 20}px`,
          endTrigger: items[items.length - 1],
          end: `bottom ${STICKY_TOP}px`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        })
        triggers.push(t1)

        // Jab NEXT card pin hone lagti hai tab YEH card scale down hoti hai
        // Reference behavior: card apni size pe rehti hai, phir choti hoti hai
        if (i < items.length - 1) {
          const scaleTarget = 1 - (items.length - 1 - i) * 0.04
          window.gsap.to(card, {
            scale: scaleTarget,
            opacity: 0.7 + i * 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: items[i + 1],
              start: `top ${STICKY_TOP + (i + 1) * 20}px`,
              end: `+=120`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
        }
      })

      // 2 cards ki height utni padding — Counter ko neeche rakhne ke liye
      const servicesSection = container.closest('section')
      if (servicesSection && items.length) {
        let totalHeight = 0
        const cardsToCount = Math.min(2, items.length)
        for (let i = 0; i < cardsToCount; i++) {
          totalHeight += items[items.length - 1 - i].offsetHeight
        }
        servicesSection.style.paddingBottom = totalHeight + 'px'
      }
      window.ScrollTrigger.refresh()
    }

    timer = setTimeout(initStackCards, 600)

    return () => {
      clearTimeout(timer)
      triggers.forEach(t => t?.kill?.())
    }
  }, [])


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
          className="bg-background-5 relative overflow-hidden"
          style={{ paddingTop: "180px", paddingBottom: "240px" }}>
          <div className="main-container relative z-20" style={{ display: "flex", alignItems: "center" }}>
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 w-full" style={{ gap: "3rem" }}>


              <div className="flex flex-col items-center text-center">


                <div id="hero-slider-wrap" className="overflow-hidden w-full" style={{ minHeight: "1.2em", marginBottom: "1.25rem" }}>
                  <h1
                    id="hero-slide-text"
                    className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal break-words text-white/90 leading-[1.1] transition-all duration-500"
                    data-opai-animate
                    data-delay="0.1"
                  >
                    Custom Web &amp; <span style={{ color: "#8d59ff" }}>Software</span> Development
                  </h1>
                </div>


                <p className="text-tagline-2 font-normal text-white/60" style={{ maxWidth: "500px", marginBottom: "2rem" }} data-opai-animate data-delay="0.2">
                  We build powerful, scalable and user-centric digital solutions that drive growth and create lasting impact.
                </p>


                <div style={{ marginBottom: "1.5rem" }} data-opai-animate data-delay="0.3">
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


                <div className="flex items-center gap-4" style={{ marginBottom: "1.75rem" }} data-opai-animate data-delay="0.4">
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


              <div className="relative flex w-full items-center justify-end" data-opai-animate data-delay="0.3" style={{ minHeight: "440px" }}>
                <div id="hero-box-wrapper" style={{ position: "relative", width: "360px", maxWidth: "90vw", flexShrink: "0" }}>


                  <div className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2" style={{ width: "118%", height: "106%" }}>
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


                  <div className="pointer-events-none absolute bottom-0 left-1/2 -z-0 -translate-x-1/2 rounded-full blur-2xl" style={{ height: "80px", width: "240px", background: "radial-gradient(circle,rgba(141,89,255,0.7) 0%,rgba(141,89,255,0) 70%)" }}></div>


                  <div className="hero-tilt relative" style={{ width: "88%" }}>
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] border border-white/10 bg-white/5" style={{ transform: "translate(32px,20px) scale(0.97)" }}></div>
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] border border-white/10 bg-white/5" style={{ transform: "translate(16px,10px) scale(0.985)" }}></div>
                    <div id="hero-image-stack" className="relative overflow-hidden rounded-[26px]"
                      style={{ aspectRatio: "3/4", boxShadow: "0 0 0 2.5px rgba(141,89,255,0.85),0 0 60px 12px rgba(141,89,255,0.55),0 0 120px 20px rgba(141,89,255,0.25),0 40px 80px -12px rgba(0,0,0,0.85)" }}>
                      <img className="hero-img hero-img-active absolute inset-0 object-cover" style={{ width: "100%", height: "100%" }} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="Web Development" />
                      <img className="hero-img absolute inset-0 object-cover" style={{ width: "100%", height: "100%", opacity: "0" }} src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="SaaS Products" />
                      <img className="hero-img absolute inset-0 object-cover" style={{ width: "100%", height: "100%", opacity: "0" }} src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80" alt="AI" />
                      <img className="hero-img absolute inset-0 object-cover" style={{ width: "100%", height: "100%", opacity: "0" }} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Dedicated Team" />
                      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(160deg,rgba(141,89,255,0.15) 0%,rgba(34,126,255,0.05) 50%,rgba(141,89,255,0.2) 100%)" }}></div>
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
              <path
                id="curve-path-1"
                d="M420.5 0V688.857C420.5 739.32 398.08 787.176 359.307 819.475L221.193 934.525C182.42 966.824 160 1014.68 160 1065.14V1436"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-2"
                d="M1040.5 0V688.857C1040.5 739.32 1057.92 787.176 1096.69 819.475L1234.81 934.525C1273.58 966.824 1296 1014.68 1296 1065.14V1436"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-3"
                d="M296.5 0V647.386C296.5 696.681 275.102 743.549 237.854 775.839L54.6455 934.661C17.3976 966.951 -4 1013.82 -4 1063.11V1469.5"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-4"
                d="M1164.5 0V647.386C1164.5 696.681 1185.9 743.549 1223.15 775.839L1406.35 934.661C1443.6 966.951 1465 1013.82 1465 1063.11V1469.5"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-5"
                d="M544.5 0V704.584C544.5 749.67 526.589 792.911 494.708 824.792L383.792 935.708C351.911 967.589 334 1010.83 334 1055.92V1469.5"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-6"
                d="M916.5 0V704.584C916.5 749.67 934.411 792.911 966.292 824.792L1077.21 935.708C1109.09 967.589 1127 1010.83 1127 1055.92V1469.5"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-7"
                d="M668.5 0V679.422C668.5 709.28 660.636 738.611 645.7 764.465L540.8 946.035C525.864 971.889 518 1001.22 518 1031.08V1469.5"
                className="stroke-[#fafcff0d]"
              />
              <path
                id="curve-path-8"
                d="M792.5 0V679.422C792.5 709.28 800.364 738.611 815.3 764.465L920.2 946.035C935.136 971.889 943 1001.22 943 1031.08V1469.5"
                className="stroke-[#fafcff0d]"
              />


              <rect id="rect-1-1" width="1" height="1" />
              <rect id="rect-1-2" width="1" height="1" />
              <rect id="rect-1-3" width="1" height="1" />
              <rect id="rect-1-4" width="1" height="1" />
              <rect id="rect-1-5" width="1" height="1" />
              <rect id="rect-1-6" width="1" height="1" />
              <rect id="rect-1-7" width="1" height="1" />
              <rect id="rect-1-8" width="1" height="1" />
              <rect id="rect-1-9" width="1" height="1" />
              <rect id="rect-1-10" width="1" height="1" />
              <rect id="rect-1-11" width="1" height="1" />
              <rect id="rect-1-12" width="1" height="1" />
              <rect id="rect-1-13" width="1" height="1" />
              <rect id="rect-1-14" width="1" height="1" />
              <rect id="rect-1-15" width="1" height="1" />
              <rect id="rect-1-16" width="1" height="1" />
              <rect id="rect-1-17" width="1" height="1" />
              <rect id="rect-1-18" width="1" height="1" />
              <rect id="rect-1-19" width="1" height="1" />
              <rect id="rect-1-20" width="1" height="1" />
              <rect id="rect-1-21" width="1" height="1" />
              <rect id="rect-1-22" width="1" height="1" />
              <rect id="rect-1-23" width="1" height="1" />
              <rect id="rect-1-24" width="1" height="1" />
              <rect id="rect-1-25" width="1" height="1" />
              <rect id="rect-1-26" width="1" height="1" />
              <rect id="rect-1-27" width="1" height="1" />
              <rect id="rect-1-28" width="1" height="1" />
              <rect id="rect-1-29" width="1" height="1" />
              <rect id="rect-1-30" width="1" height="1" />
              <rect id="rect-1-31" width="1" height="1" />
              <rect id="rect-1-32" width="1" height="1" />
              <rect id="rect-1-33" width="1" height="1" />
              <rect id="rect-1-34" width="1" height="1" />
              <rect id="rect-1-35" width="1" height="1" />
              <rect id="rect-1-36" width="1" height="1" />
              <rect id="rect-1-37" width="1" height="1" />
              <rect id="rect-1-38" width="1" height="1" />
              <rect id="rect-1-39" width="1" height="1" />
              <rect id="rect-1-40" width="1" height="1" />
              <rect id="rect-1-41" width="1" height="1" />
              <rect id="rect-1-42" width="1" height="1" />
              <rect id="rect-1-43" width="1" height="1" />
              <rect id="rect-1-44" width="1" height="1" />
              <rect id="rect-1-45" width="1" height="1" />
              <rect id="rect-1-46" width="1" height="1" />
              <rect id="rect-1-47" width="1" height="1" />
              <rect id="rect-1-48" width="1" height="1" />
              <rect id="rect-1-49" width="1" height="1" />
              <rect id="rect-1-50" width="1" height="1" />
              <rect id="rect-1-51" width="1" height="1" />
              <rect id="rect-1-52" width="1" height="1" />
              <rect id="rect-1-53" width="1" height="1" />
              <rect id="rect-1-54" width="1" height="1" />
              <rect id="rect-1-55" width="1" height="1" />
              <rect id="rect-1-56" width="1" height="1" />
              <rect id="rect-1-57" width="1" height="1" />
              <rect id="rect-1-58" width="1" height="1" />
              <rect id="rect-1-59" width="1" height="1" />
              <rect id="rect-1-60" width="1" height="1" />
              <rect id="rect-2-1" width="1" height="1" />
              <rect id="rect-2-2" width="1" height="1" />
              <rect id="rect-2-3" width="1" height="1" />
              <rect id="rect-2-4" width="1" height="1" />
              <rect id="rect-2-5" width="1" height="1" />
              <rect id="rect-2-6" width="1" height="1" />
              <rect id="rect-2-7" width="1" height="1" />
              <rect id="rect-2-8" width="1" height="1" />
              <rect id="rect-2-9" width="1" height="1" />
              <rect id="rect-2-10" width="1" height="1" />
              <rect id="rect-2-11" width="1" height="1" />
              <rect id="rect-2-12" width="1" height="1" />
              <rect id="rect-2-13" width="1" height="1" />
              <rect id="rect-2-14" width="1" height="1" />
              <rect id="rect-2-15" width="1" height="1" />
              <rect id="rect-2-16" width="1" height="1" />
              <rect id="rect-2-17" width="1" height="1" />
              <rect id="rect-2-18" width="1" height="1" />
              <rect id="rect-2-19" width="1" height="1" />
              <rect id="rect-2-20" width="1" height="1" />
              <rect id="rect-2-21" width="1" height="1" />
              <rect id="rect-2-22" width="1" height="1" />
              <rect id="rect-2-23" width="1" height="1" />
              <rect id="rect-2-24" width="1" height="1" />
              <rect id="rect-2-25" width="1" height="1" />
              <rect id="rect-2-26" width="1" height="1" />
              <rect id="rect-2-27" width="1" height="1" />
              <rect id="rect-2-28" width="1" height="1" />
              <rect id="rect-2-29" width="1" height="1" />
              <rect id="rect-2-30" width="1" height="1" />
              <rect id="rect-2-31" width="1" height="1" />
              <rect id="rect-2-32" width="1" height="1" />
              <rect id="rect-2-33" width="1" height="1" />
              <rect id="rect-2-34" width="1" height="1" />
              <rect id="rect-2-35" width="1" height="1" />
              <rect id="rect-2-36" width="1" height="1" />
              <rect id="rect-2-37" width="1" height="1" />
              <rect id="rect-2-38" width="1" height="1" />
              <rect id="rect-2-39" width="1" height="1" />
              <rect id="rect-2-40" width="1" height="1" />
              <rect id="rect-2-41" width="1" height="1" />
              <rect id="rect-2-42" width="1" height="1" />
              <rect id="rect-2-43" width="1" height="1" />
              <rect id="rect-2-44" width="1" height="1" />
              <rect id="rect-2-45" width="1" height="1" />
              <rect id="rect-2-46" width="1" height="1" />
              <rect id="rect-2-47" width="1" height="1" />
              <rect id="rect-2-48" width="1" height="1" />
              <rect id="rect-2-49" width="1" height="1" />
              <rect id="rect-2-50" width="1" height="1" />
              <rect id="rect-2-51" width="1" height="1" />
              <rect id="rect-2-52" width="1" height="1" />
              <rect id="rect-2-53" width="1" height="1" />
              <rect id="rect-2-54" width="1" height="1" />
              <rect id="rect-2-55" width="1" height="1" />
              <rect id="rect-2-56" width="1" height="1" />
              <rect id="rect-2-57" width="1" height="1" />
              <rect id="rect-2-58" width="1" height="1" />
              <rect id="rect-2-59" width="1" height="1" />
              <rect id="rect-2-60" width="1" height="1" />
              <rect id="rect-3-1" width="1" height="1" />
              <rect id="rect-3-2" width="1" height="1" />
              <rect id="rect-3-3" width="1" height="1" />
              <rect id="rect-3-4" width="1" height="1" />
              <rect id="rect-3-5" width="1" height="1" />
              <rect id="rect-3-6" width="1" height="1" />
              <rect id="rect-3-7" width="1" height="1" />
              <rect id="rect-3-8" width="1" height="1" />
              <rect id="rect-3-9" width="1" height="1" />
              <rect id="rect-3-10" width="1" height="1" />
              <rect id="rect-3-11" width="1" height="1" />
              <rect id="rect-3-12" width="1" height="1" />
              <rect id="rect-3-13" width="1" height="1" />
              <rect id="rect-3-14" width="1" height="1" />
              <rect id="rect-3-15" width="1" height="1" />
              <rect id="rect-3-16" width="1" height="1" />
              <rect id="rect-3-17" width="1" height="1" />
              <rect id="rect-3-18" width="1" height="1" />
              <rect id="rect-3-19" width="1" height="1" />
              <rect id="rect-3-20" width="1" height="1" />
              <rect id="rect-3-21" width="1" height="1" />
              <rect id="rect-3-22" width="1" height="1" />
              <rect id="rect-3-23" width="1" height="1" />
              <rect id="rect-3-24" width="1" height="1" />
              <rect id="rect-3-25" width="1" height="1" />
              <rect id="rect-3-26" width="1" height="1" />
              <rect id="rect-3-27" width="1" height="1" />
              <rect id="rect-3-28" width="1" height="1" />
              <rect id="rect-3-29" width="1" height="1" />
              <rect id="rect-3-30" width="1" height="1" />
              <rect id="rect-3-31" width="1" height="1" />
              <rect id="rect-3-32" width="1" height="1" />
              <rect id="rect-3-33" width="1" height="1" />
              <rect id="rect-3-34" width="1" height="1" />
              <rect id="rect-3-35" width="1" height="1" />
              <rect id="rect-3-36" width="1" height="1" />
              <rect id="rect-3-37" width="1" height="1" />
              <rect id="rect-3-38" width="1" height="1" />
              <rect id="rect-3-39" width="1" height="1" />
              <rect id="rect-3-40" width="1" height="1" />
              <rect id="rect-3-41" width="1" height="1" />
              <rect id="rect-3-42" width="1" height="1" />
              <rect id="rect-3-43" width="1" height="1" />
              <rect id="rect-3-44" width="1" height="1" />
              <rect id="rect-3-45" width="1" height="1" />
              <rect id="rect-3-46" width="1" height="1" />
              <rect id="rect-3-47" width="1" height="1" />
              <rect id="rect-3-48" width="1" height="1" />
              <rect id="rect-3-49" width="1" height="1" />
              <rect id="rect-3-50" width="1" height="1" />
              <rect id="rect-3-51" width="1" height="1" />
              <rect id="rect-3-52" width="1" height="1" />
              <rect id="rect-3-53" width="1" height="1" />
              <rect id="rect-3-54" width="1" height="1" />
              <rect id="rect-3-55" width="1" height="1" />
              <rect id="rect-3-56" width="1" height="1" />
              <rect id="rect-3-57" width="1" height="1" />
              <rect id="rect-3-58" width="1" height="1" />
              <rect id="rect-3-59" width="1" height="1" />
              <rect id="rect-3-60" width="1" height="1" />
              <rect id="rect-4-1" width="1" height="1" />
              <rect id="rect-4-2" width="1" height="1" />
              <rect id="rect-4-3" width="1" height="1" />
              <rect id="rect-4-4" width="1" height="1" />
              <rect id="rect-4-5" width="1" height="1" />
              <rect id="rect-4-6" width="1" height="1" />
              <rect id="rect-4-7" width="1" height="1" />
              <rect id="rect-4-8" width="1" height="1" />
              <rect id="rect-4-9" width="1" height="1" />
              <rect id="rect-4-10" width="1" height="1" />
              <rect id="rect-4-11" width="1" height="1" />
              <rect id="rect-4-12" width="1" height="1" />
              <rect id="rect-4-13" width="1" height="1" />
              <rect id="rect-4-14" width="1" height="1" />
              <rect id="rect-4-15" width="1" height="1" />
              <rect id="rect-4-16" width="1" height="1" />
              <rect id="rect-4-17" width="1" height="1" />
              <rect id="rect-4-18" width="1" height="1" />
              <rect id="rect-4-19" width="1" height="1" />
              <rect id="rect-4-20" width="1" height="1" />
              <rect id="rect-4-21" width="1" height="1" />
              <rect id="rect-4-22" width="1" height="1" />
              <rect id="rect-4-23" width="1" height="1" />
              <rect id="rect-4-24" width="1" height="1" />
              <rect id="rect-4-25" width="1" height="1" />
              <rect id="rect-4-26" width="1" height="1" />
              <rect id="rect-4-27" width="1" height="1" />
              <rect id="rect-4-28" width="1" height="1" />
              <rect id="rect-4-29" width="1" height="1" />
              <rect id="rect-4-30" width="1" height="1" />
              <rect id="rect-4-31" width="1" height="1" />
              <rect id="rect-4-32" width="1" height="1" />
              <rect id="rect-4-33" width="1" height="1" />
              <rect id="rect-4-34" width="1" height="1" />
              <rect id="rect-4-35" width="1" height="1" />
              <rect id="rect-4-36" width="1" height="1" />
              <rect id="rect-4-37" width="1" height="1" />
              <rect id="rect-4-38" width="1" height="1" />
              <rect id="rect-4-39" width="1" height="1" />
              <rect id="rect-4-40" width="1" height="1" />
              <rect id="rect-4-41" width="1" height="1" />
              <rect id="rect-4-42" width="1" height="1" />
              <rect id="rect-4-43" width="1" height="1" />
              <rect id="rect-4-44" width="1" height="1" />
              <rect id="rect-4-45" width="1" height="1" />
              <rect id="rect-4-46" width="1" height="1" />
              <rect id="rect-4-47" width="1" height="1" />
              <rect id="rect-4-48" width="1" height="1" />
              <rect id="rect-4-49" width="1" height="1" />
              <rect id="rect-4-50" width="1" height="1" />
              <rect id="rect-4-51" width="1" height="1" />
              <rect id="rect-4-52" width="1" height="1" />
              <rect id="rect-4-53" width="1" height="1" />
              <rect id="rect-4-54" width="1" height="1" />
              <rect id="rect-4-55" width="1" height="1" />
              <rect id="rect-4-56" width="1" height="1" />
              <rect id="rect-4-57" width="1" height="1" />
              <rect id="rect-4-58" width="1" height="1" />
              <rect id="rect-4-59" width="1" height="1" />
              <rect id="rect-4-60" width="1" height="1" />
              <rect id="rect-5-1" width="1" height="1" />
              <rect id="rect-5-2" width="1" height="1" />
              <rect id="rect-5-3" width="1" height="1" />
              <rect id="rect-5-4" width="1" height="1" />
              <rect id="rect-5-5" width="1" height="1" />
              <rect id="rect-5-6" width="1" height="1" />
              <rect id="rect-5-7" width="1" height="1" />
              <rect id="rect-5-8" width="1" height="1" />
              <rect id="rect-5-9" width="1" height="1" />
              <rect id="rect-5-10" width="1" height="1" />
              <rect id="rect-5-11" width="1" height="1" />
              <rect id="rect-5-12" width="1" height="1" />
              <rect id="rect-5-13" width="1" height="1" />
              <rect id="rect-5-14" width="1" height="1" />
              <rect id="rect-5-15" width="1" height="1" />
              <rect id="rect-5-16" width="1" height="1" />
              <rect id="rect-5-17" width="1" height="1" />
              <rect id="rect-5-18" width="1" height="1" />
              <rect id="rect-5-19" width="1" height="1" />
              <rect id="rect-5-20" width="1" height="1" />
              <rect id="rect-5-21" width="1" height="1" />
              <rect id="rect-5-22" width="1" height="1" />
              <rect id="rect-5-23" width="1" height="1" />
              <rect id="rect-5-24" width="1" height="1" />
              <rect id="rect-5-25" width="1" height="1" />
              <rect id="rect-5-26" width="1" height="1" />
              <rect id="rect-5-27" width="1" height="1" />
              <rect id="rect-5-28" width="1" height="1" />
              <rect id="rect-5-29" width="1" height="1" />
              <rect id="rect-5-30" width="1" height="1" />
              <rect id="rect-5-31" width="1" height="1" />
              <rect id="rect-5-32" width="1" height="1" />
              <rect id="rect-5-33" width="1" height="1" />
              <rect id="rect-5-34" width="1" height="1" />
              <rect id="rect-5-35" width="1" height="1" />
              <rect id="rect-5-36" width="1" height="1" />
              <rect id="rect-5-37" width="1" height="1" />
              <rect id="rect-5-38" width="1" height="1" />
              <rect id="rect-5-39" width="1" height="1" />
              <rect id="rect-5-40" width="1" height="1" />
              <rect id="rect-5-41" width="1" height="1" />
              <rect id="rect-5-42" width="1" height="1" />
              <rect id="rect-5-43" width="1" height="1" />
              <rect id="rect-5-44" width="1" height="1" />
              <rect id="rect-5-45" width="1" height="1" />
              <rect id="rect-5-46" width="1" height="1" />
              <rect id="rect-5-47" width="1" height="1" />
              <rect id="rect-5-48" width="1" height="1" />
              <rect id="rect-5-49" width="1" height="1" />
              <rect id="rect-5-50" width="1" height="1" />
              <rect id="rect-5-51" width="1" height="1" />
              <rect id="rect-5-52" width="1" height="1" />
              <rect id="rect-5-53" width="1" height="1" />
              <rect id="rect-5-54" width="1" height="1" />
              <rect id="rect-5-55" width="1" height="1" />
              <rect id="rect-5-56" width="1" height="1" />
              <rect id="rect-5-57" width="1" height="1" />
              <rect id="rect-5-58" width="1" height="1" />
              <rect id="rect-5-59" width="1" height="1" />
              <rect id="rect-5-60" width="1" height="1" />
              <rect id="rect-6-1" width="1" height="1" />
              <rect id="rect-6-2" width="1" height="1" />
              <rect id="rect-6-3" width="1" height="1" />
              <rect id="rect-6-4" width="1" height="1" />
              <rect id="rect-6-5" width="1" height="1" />
              <rect id="rect-6-6" width="1" height="1" />
              <rect id="rect-6-7" width="1" height="1" />
              <rect id="rect-6-8" width="1" height="1" />
              <rect id="rect-6-9" width="1" height="1" />
              <rect id="rect-6-10" width="1" height="1" />
              <rect id="rect-6-11" width="1" height="1" />
              <rect id="rect-6-12" width="1" height="1" />
              <rect id="rect-6-13" width="1" height="1" />
              <rect id="rect-6-14" width="1" height="1" />
              <rect id="rect-6-15" width="1" height="1" />
              <rect id="rect-6-16" width="1" height="1" />
              <rect id="rect-6-17" width="1" height="1" />
              <rect id="rect-6-18" width="1" height="1" />
              <rect id="rect-6-19" width="1" height="1" />
              <rect id="rect-6-20" width="1" height="1" />
              <rect id="rect-6-21" width="1" height="1" />
              <rect id="rect-6-22" width="1" height="1" />
              <rect id="rect-6-23" width="1" height="1" />
              <rect id="rect-6-24" width="1" height="1" />
              <rect id="rect-6-25" width="1" height="1" />
              <rect id="rect-6-26" width="1" height="1" />
              <rect id="rect-6-27" width="1" height="1" />
              <rect id="rect-6-28" width="1" height="1" />
              <rect id="rect-6-29" width="1" height="1" />
              <rect id="rect-6-30" width="1" height="1" />
              <rect id="rect-6-31" width="1" height="1" />
              <rect id="rect-6-32" width="1" height="1" />
              <rect id="rect-6-33" width="1" height="1" />
              <rect id="rect-6-34" width="1" height="1" />
              <rect id="rect-6-35" width="1" height="1" />
              <rect id="rect-6-36" width="1" height="1" />
              <rect id="rect-6-37" width="1" height="1" />
              <rect id="rect-6-38" width="1" height="1" />
              <rect id="rect-6-39" width="1" height="1" />
              <rect id="rect-6-40" width="1" height="1" />
              <rect id="rect-6-41" width="1" height="1" />
              <rect id="rect-6-42" width="1" height="1" />
              <rect id="rect-6-43" width="1" height="1" />
              <rect id="rect-6-44" width="1" height="1" />
              <rect id="rect-6-45" width="1" height="1" />
              <rect id="rect-6-46" width="1" height="1" />
              <rect id="rect-6-47" width="1" height="1" />
              <rect id="rect-6-48" width="1" height="1" />
              <rect id="rect-6-49" width="1" height="1" />
              <rect id="rect-6-50" width="1" height="1" />
              <rect id="rect-6-51" width="1" height="1" />
              <rect id="rect-6-52" width="1" height="1" />
              <rect id="rect-6-53" width="1" height="1" />
              <rect id="rect-6-54" width="1" height="1" />
              <rect id="rect-6-55" width="1" height="1" />
              <rect id="rect-6-56" width="1" height="1" />
              <rect id="rect-6-57" width="1" height="1" />
              <rect id="rect-6-58" width="1" height="1" />
              <rect id="rect-6-59" width="1" height="1" />
              <rect id="rect-6-60" width="1" height="1" />
              <rect id="rect-7-1" width="1" height="1" />
              <rect id="rect-7-2" width="1" height="1" />
              <rect id="rect-7-3" width="1" height="1" />
              <rect id="rect-7-4" width="1" height="1" />
              <rect id="rect-7-5" width="1" height="1" />
              <rect id="rect-7-6" width="1" height="1" />
              <rect id="rect-7-7" width="1" height="1" />
              <rect id="rect-7-8" width="1" height="1" />
              <rect id="rect-7-9" width="1" height="1" />
              <rect id="rect-7-10" width="1" height="1" />
              <rect id="rect-7-11" width="1" height="1" />
              <rect id="rect-7-12" width="1" height="1" />
              <rect id="rect-7-13" width="1" height="1" />
              <rect id="rect-7-14" width="1" height="1" />
              <rect id="rect-7-15" width="1" height="1" />
              <rect id="rect-7-16" width="1" height="1" />
              <rect id="rect-7-17" width="1" height="1" />
              <rect id="rect-7-18" width="1" height="1" />
              <rect id="rect-7-19" width="1" height="1" />
              <rect id="rect-7-20" width="1" height="1" />
              <rect id="rect-7-21" width="1" height="1" />
              <rect id="rect-7-22" width="1" height="1" />
              <rect id="rect-7-23" width="1" height="1" />
              <rect id="rect-7-24" width="1" height="1" />
              <rect id="rect-7-25" width="1" height="1" />
              <rect id="rect-7-26" width="1" height="1" />
              <rect id="rect-7-27" width="1" height="1" />
              <rect id="rect-7-28" width="1" height="1" />
              <rect id="rect-7-29" width="1" height="1" />
              <rect id="rect-7-30" width="1" height="1" />
              <rect id="rect-7-31" width="1" height="1" />
              <rect id="rect-7-32" width="1" height="1" />
              <rect id="rect-7-33" width="1" height="1" />
              <rect id="rect-7-34" width="1" height="1" />
              <rect id="rect-7-35" width="1" height="1" />
              <rect id="rect-7-36" width="1" height="1" />
              <rect id="rect-7-37" width="1" height="1" />
              <rect id="rect-7-38" width="1" height="1" />
              <rect id="rect-7-39" width="1" height="1" />
              <rect id="rect-7-40" width="1" height="1" />
              <rect id="rect-7-41" width="1" height="1" />
              <rect id="rect-7-42" width="1" height="1" />
              <rect id="rect-7-43" width="1" height="1" />
              <rect id="rect-7-44" width="1" height="1" />
              <rect id="rect-7-45" width="1" height="1" />
              <rect id="rect-7-46" width="1" height="1" />
              <rect id="rect-7-47" width="1" height="1" />
              <rect id="rect-7-48" width="1" height="1" />
              <rect id="rect-7-49" width="1" height="1" />
              <rect id="rect-7-50" width="1" height="1" />
              <rect id="rect-7-51" width="1" height="1" />
              <rect id="rect-7-52" width="1" height="1" />
              <rect id="rect-7-53" width="1" height="1" />
              <rect id="rect-7-54" width="1" height="1" />
              <rect id="rect-7-55" width="1" height="1" />
              <rect id="rect-7-56" width="1" height="1" />
              <rect id="rect-7-57" width="1" height="1" />
              <rect id="rect-7-58" width="1" height="1" />
              <rect id="rect-7-59" width="1" height="1" />
              <rect id="rect-7-60" width="1" height="1" />
              <rect id="rect-8-1" width="1" height="1" />
              <rect id="rect-8-2" width="1" height="1" />
              <rect id="rect-8-3" width="1" height="1" />
              <rect id="rect-8-4" width="1" height="1" />
              <rect id="rect-8-5" width="1" height="1" />
              <rect id="rect-8-6" width="1" height="1" />
              <rect id="rect-8-7" width="1" height="1" />
              <rect id="rect-8-8" width="1" height="1" />
              <rect id="rect-8-9" width="1" height="1" />
              <rect id="rect-8-10" width="1" height="1" />
              <rect id="rect-8-11" width="1" height="1" />
              <rect id="rect-8-12" width="1" height="1" />
              <rect id="rect-8-13" width="1" height="1" />
              <rect id="rect-8-14" width="1" height="1" />
              <rect id="rect-8-15" width="1" height="1" />
              <rect id="rect-8-16" width="1" height="1" />
              <rect id="rect-8-17" width="1" height="1" />
              <rect id="rect-8-18" width="1" height="1" />
              <rect id="rect-8-19" width="1" height="1" />
              <rect id="rect-8-20" width="1" height="1" />
              <rect id="rect-8-21" width="1" height="1" />
              <rect id="rect-8-22" width="1" height="1" />
              <rect id="rect-8-23" width="1" height="1" />
              <rect id="rect-8-24" width="1" height="1" />
              <rect id="rect-8-25" width="1" height="1" />
              <rect id="rect-8-26" width="1" height="1" />
              <rect id="rect-8-27" width="1" height="1" />
              <rect id="rect-8-28" width="1" height="1" />
              <rect id="rect-8-29" width="1" height="1" />
              <rect id="rect-8-30" width="1" height="1" />
              <rect id="rect-8-31" width="1" height="1" />
              <rect id="rect-8-32" width="1" height="1" />
              <rect id="rect-8-33" width="1" height="1" />
              <rect id="rect-8-34" width="1" height="1" />
              <rect id="rect-8-35" width="1" height="1" />
              <rect id="rect-8-36" width="1" height="1" />
              <rect id="rect-8-37" width="1" height="1" />
              <rect id="rect-8-38" width="1" height="1" />
              <rect id="rect-8-39" width="1" height="1" />
              <rect id="rect-8-40" width="1" height="1" />
              <rect id="rect-8-41" width="1" height="1" />
              <rect id="rect-8-42" width="1" height="1" />
              <rect id="rect-8-43" width="1" height="1" />
              <rect id="rect-8-44" width="1" height="1" />
              <rect id="rect-8-45" width="1" height="1" />
              <rect id="rect-8-46" width="1" height="1" />
              <rect id="rect-8-47" width="1" height="1" />
              <rect id="rect-8-48" width="1" height="1" />
              <rect id="rect-8-49" width="1" height="1" />
              <rect id="rect-8-50" width="1" height="1" />
              <rect id="rect-8-51" width="1" height="1" />
              <rect id="rect-8-52" width="1" height="1" />
              <rect id="rect-8-53" width="1" height="1" />
              <rect id="rect-8-54" width="1" height="1" />
              <rect id="rect-8-55" width="1" height="1" />
              <rect id="rect-8-56" width="1" height="1" />
              <rect id="rect-8-57" width="1" height="1" />
              <rect id="rect-8-58" width="1" height="1" />
              <rect id="rect-8-59" width="1" height="1" />
              <rect id="rect-8-60" width="1" height="1" />
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
          <style>{`
    @keyframes marquee-left {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-right {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    .logos-track-left {
      display: flex;
      width: max-content;
      animation: marquee-left 60s linear infinite;
    }
    .logos-track-right {
      display: flex;
      width: max-content;
      animation: marquee-right 60s linear infinite;
    }
    .logos-track-left:hover,
    .logos-track-right:hover {
      animation-play-state: paused;
    }
  `}</style>

          <div style={{ maxWidth: '1290px', marginInline: 'auto', paddingInline: '20px', paddingTop: '50px', paddingBottom: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>

              <h2
                data-ns-animate
                data-delay="0.2"
                className="text-center text-heading-5 md:text-heading-3"
                style={{ fontSize: '30px', fontWeight: '600', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                Trusted by 10k+ fast-growing businesses
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                {/* Row 1 — Left scroll */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute', left: 0, top: 0, height: '100%', width: '8%', background: 'linear-gradient(to right, var(--color-background-4), transparent)'
                    , zIndex: 10
                  }} />
                  <div style={{
                    position: 'absolute', right: 0, top: 0, height: '100%', width: '8%', background: 'linear-gradient(to left, var(--color-background-4), transparent)'
                    , zIndex: 10
                  }} />
                  <div className="logos-track-left">
                    {[
                      '/images/icons/notion-with-black-text.svg',
                      '/images/icons/stripe-with-black-text.svg',
                      '/images/icons/hotjar-with-black-text.svg',
                      '/images/icons/discord-with-black-text.svg',
                      '/images/icons/asana-with-black-text.svg',
                      '/images/icons/spotify-with-black-text.svg',
                      '/images/icons/notion-with-black-text.svg',
                      '/images/icons/stripe-with-black-text.svg',
                      '/images/icons/hotjar-with-black-text.svg',
                      '/images/icons/discord-with-black-text.svg',
                      '/images/icons/asana-with-black-text.svg',
                      '/images/icons/spotify-with-black-text.svg',
                    ].map((src, i) => (
                      <figure key={i} style={{ minWidth: '120px', margin: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={src} alt="Client logo" style={{ height: '28px', width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter, brightness(0) invert(0.4))', opacity: '0.7' }}
                        />
                      </figure>
                    ))}
                  </div>
                </div>

                {/* Row 2 — Right scroll */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '8%', background: 'linear-gradient(to right, var(--color-background-4), transparent)', zIndex: 10 }} />
                  <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '8%', background: 'linear-gradient(to left, var(--color-background-4), transparent)', zIndex: 10 }} />
                  <div className="logos-track-right">
                    {[
                      '/images/icons/scapic-with-black-text.svg',
                      '/images/icons/lattice-with-black-text.svg',
                      '/images/icons/outreach-with-black-text.svg',
                      '/images/icons/squarespace-with-black-text.svg',
                      '/images/icons/open-ai.svg',
                      '/images/icons/mistral-ai.svg',
                      '/images/icons/scapic-with-black-text.svg',
                      '/images/icons/lattice-with-black-text.svg',
                      '/images/icons/outreach-with-black-text.svg',
                      '/images/icons/squarespace-with-black-text.svg',
                      '/images/icons/open-ai.svg',
                      '/images/icons/mistral-ai.svg',
                    ].map((src, i) => (
                      <figure key={i} style={{ minWidth: '120px', margin: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={src} alt="Client logo" style={{ height: '28px', width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter, brightness(0) invert(0.4))', opacity: '0.7' }}
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
        <section className="bg-background-5 relative" style={{ zIndex: 10, isolation: 'isolate' }}>
          <div className="main-container">
            <div className="flex lg:flex-row flex-col items-start lg:gap-16 md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[120px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[120px]">

              {/* Left column wrapper */}
              <div className="w-full lg:w-[40%]  lg:self-start">
                {/* Left sticky column — will be pinned by GSAP */}
                <div className="services-left-col max-w-[520px] lg:max-w-none lg:mx-0 mx-auto text-center lg:text-left">
                  <span data-opai-animate data-delay="0.1" className="font-inter-tight text-tagline-4 text-white/50 flex items-center gap-x-1 mb-5 justify-center lg:justify-start">
                    <span className="flex size-4 items-center justify-center fill-white/50">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" /></svg>
                    </span>
                    Services overview
                  </span>
                  <h2 data-opai-animate data-delay="0.2" className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 mb-3">
                    Our performance-focused{' '}
                    <span style={{ color: '#8d59ff' }}>services.</span>
                  </h2>
                  <p data-opai-animate data-delay="0.3" className="text-tagline-2 font-normal text-white/60 mb-14 lg:max-w-[480px] " style={{ paddingTop: '10px', paddingBottom: '30px' }}>
                    Smart, secure, and designed for simplicity — Ezitech empowers you to take control effortlessly.
                  </p>
                  <div data-opai-animate data-delay="0.4">
                    <a href="/services" className="group bg-background-7 hover:border-stroke-3 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out">
                      <div className="h-full max-h-5 overflow-hidden" >
                        <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">View full-service breakdown</span>
                        <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">View full-service breakdown</span>
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
                </div>
              </div>

              {/* Right — stairsCardsAnimation */}
              <div
                ref={servicesRef}
                className="w-full lg:w-[55%] lg:max-w-none lg:mx-0 mx-auto"
                data-stairs-wrapper=".ezitech-sc"
                data-base-offset="120"
                data-step-offset="20"
                data-duration="0.9"
                data-stagger="0.1"
                data-start="top 85%"
                data-end="top 20%"
                data-once
              >
                {/* Card 1 — Custom Software Development */}
                <div className="ezitech-sc border-stroke-4/50 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] space-y-4 overflow-hidden rounded-[20px] border p-8 mb-3" style={{ backgroundColor: 'var(--color-background-6)', border: '1px solid rgba(124,142,165,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="ns-shape-1 block text-[52px] leading-none" style={{ color: 'var(--color-background-10)' }}></span>
                    <h3 className="text-heading-5" style={{ color: 'var(--color-background-10)' }}>Custom Software Development</h3>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-background-10)', opacity: 0.6 }}>Tailor-made software solutions built to match your exact business needs and goals.</p>
                  </div>
                  <a href="/service-details" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300" style={{ border: '1px solid rgba(124,142,165,0.3)', backgroundColor: 'transparent' }}>
                    <span className="font-ibm-plex-mono text-tagline-3 font-medium text-nowrap transition-colors duration-300" style={{ color: 'var(--color-background-10)', opacity: 0.75 }}>Our Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-background-10)', opacity: 0.6 }}><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>

                {/* Card 2 — Web Development */}
                <div className="ezitech-sc border-stroke-4/50 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] space-y-4 overflow-hidden rounded-[20px] border p-8 mb-3" style={{ backgroundColor: 'var(--color-background-6)', border: '1px solid rgba(124,142,165,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="ns-shape-19 block text-[52px] leading-none" style={{ color: 'var(--color-background-10)' }}></span>
                    <h3 className="text-heading-5" style={{ color: 'var(--color-background-10)' }}>Web Development</h3>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-background-10)', opacity: 0.6 }}>Responsive, fast, and scalable web applications designed for performance and growth.</p>
                  </div>
                  <a href="/service-details" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300" style={{ border: '1px solid rgba(124,142,165,0.3)', backgroundColor: 'transparent' }}>
                    <span className="font-ibm-plex-mono text-tagline-3 font-medium text-nowrap transition-colors duration-300" style={{ color: 'var(--color-background-10)', opacity: 0.75 }}>Our Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-background-10)', opacity: 0.6 }}><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>

                {/* Card 3 — Mobile App Development */}
                <div className="ezitech-sc border-stroke-4/50 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] space-y-4 overflow-hidden rounded-[20px] border p-8 mb-3" style={{ backgroundColor: 'var(--color-background-6)', border: '1px solid rgba(124,142,165,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="ns-shape-35 block text-[52px] leading-none" style={{ color: 'var(--color-background-10)' }}></span>
                    <h3 className="text-heading-5" style={{ color: 'var(--color-background-10)' }}>Mobile App Development</h3>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-background-10)', opacity: 0.6 }}>Native and cross-platform mobile apps that deliver seamless user experiences.</p>
                  </div>
                  <a href="/service-details" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300" style={{ border: '1px solid rgba(124,142,165,0.3)', backgroundColor: 'transparent' }}>
                    <span className="font-ibm-plex-mono text-tagline-3 font-medium text-nowrap transition-colors duration-300" style={{ color: 'var(--color-background-10)', opacity: 0.75 }}>Our Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-background-10)', opacity: 0.6 }}><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>

                {/* Card 4 — AI Solutions */}
                <div className="ezitech-sc border-stroke-4/50 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] space-y-4 overflow-hidden rounded-[20px] border p-8 mb-3" style={{ backgroundColor: 'var(--color-background-6)', border: '1px solid rgba(124,142,165,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="ns-shape-4 block text-[52px] leading-none" style={{ color: 'var(--color-background-10)' }}></span>
                    <h3 className="text-heading-5" style={{ color: 'var(--color-background-10)' }}>AI Solutions</h3>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-background-10)', opacity: 0.6 }}>Intelligent automation and AI-powered tools that transform how your business operates.</p>
                  </div>
                  <a href="/service-details" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300" style={{ border: '1px solid rgba(124,142,165,0.3)', backgroundColor: 'transparent' }}>
                    <span className="font-ibm-plex-mono text-tagline-3 font-medium text-nowrap transition-colors duration-300" style={{ color: 'var(--color-background-10)', opacity: 0.75 }}>Our Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-background-10)', opacity: 0.6 }}><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>

                {/* Card 5 — UI/UX Design */}
                <div className="ezitech-sc border-stroke-4/50 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] space-y-4 overflow-hidden rounded-[20px] border p-8 mb-3" style={{ backgroundColor: 'var(--color-background-6)', border: '1px solid rgba(124,142,165,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="ns-shape-21 block text-[52px] leading-none" style={{ color: 'var(--color-background-10)' }}></span>
                    <h3 className="text-heading-5" style={{ color: 'var(--color-background-10)' }}>UI/UX Design</h3>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-background-10)', opacity: 0.6 }}>User-centered designs that are visually striking and intuitively easy to use.</p>
                  </div>
                  <a href="/service-details" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300" style={{ border: '1px solid rgba(124,142,165,0.3)', backgroundColor: 'transparent' }}>
                    <span className="font-ibm-plex-mono text-tagline-3 font-medium text-nowrap transition-colors duration-300" style={{ color: 'var(--color-background-10)', opacity: 0.75 }}>Our Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-background-10)', opacity: 0.6 }}><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>

                {/* Card 6 — Cloud & DevOps */}
                <div className="ezitech-sc border-stroke-4/50 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] space-y-4 overflow-hidden rounded-[20px] border p-8" style={{ backgroundColor: 'var(--color-background-6)', border: '1px solid rgba(124,142,165,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <span className="ns-shape-3 block text-[52px] leading-none" style={{ color: 'var(--color-background-10)' }}></span>
                    <h3 className="text-heading-5" style={{ color: 'var(--color-background-10)' }}>Cloud &amp; DevOps</h3>
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-background-10)', opacity: 0.6 }}>Reliable cloud infrastructure and DevOps pipelines for fast, secure deployments.</p>
                  </div>
                  <a href="/service-details" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 transition-all duration-300" style={{ border: '1px solid rgba(124,142,165,0.3)', backgroundColor: 'transparent' }}>
                    <span className="font-ibm-plex-mono text-tagline-3 font-medium text-nowrap transition-colors duration-300" style={{ color: 'var(--color-background-10)', opacity: 0.75 }}>Our Service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--color-background-10)', opacity: 0.6 }}><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
                {/* End marker — last card scale trigger ke liye */}
                <div id="cards-end-marker" style={{ height: '1px', marginTop: '0' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= Counter Section ========================= */}
        <div id="counter-section" style={{ position: 'relative', zIndex: 1, marginTop: '0' }}>
          <section className="bg-background-5" style={{ paddingTop: '80px', paddingBottom: '80px', display: 'block', position: 'relative' }}>
            <div className="main-container">
              {/* 3 columns using inline style — Tailwind purged classes ka safe alternative */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '48px',
              }}>

                {/* 01 */}
                <div data-ns-animate data-delay="0.2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ width: '100%', height: '5px', borderRadius: '2px', backgroundColor: '#8d59ff' }}></div>
                  <p style={{ color: '#8d59ff', fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>01</p>
                  <h3 className="text-white/90" style={{ fontSize: '1.75rem', fontWeight: '400', lineHeight: '1.2', margin: 0 }}>
                    Discover
                  </h3>
                  <p className="text-white/50" style={{ fontSize: '14px', fontWeight: '400', lineHeight: '1.6', margin: 0 }}>
                    Understanding requirements & business goals.
                  </p>
                </div>

                {/* 02 */}
                <div data-ns-animate data-delay="0.4" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ width: '100%', height: '5px', borderRadius: '2px', backgroundColor: '#8d59ff' }}></div>
                  <p style={{ color: '#8d59ff', fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>02</p>
                  <h3 className="text-white/90" style={{ fontSize: '1.75rem', fontWeight: '400', lineHeight: '1.2', margin: 0 }}>
                    Design & Develop
                  </h3>
                  <p className="text-white/50" style={{ fontSize: '14px', fontWeight: '400', lineHeight: '1.6', margin: 0 }}>
                    UI/UX design, development & sprint execution.
                  </p>
                </div>

                {/* 03 */}
                <div data-ns-animate data-delay="0.6" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ width: '100%', height: '5px', borderRadius: '2px', backgroundColor: '#8d59ff' }}></div>
                  <p style={{ color: '#8d59ff', fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>03</p>
                  <h3 className="text-white/90" style={{ fontSize: '1.75rem', fontWeight: '400', lineHeight: '1.2', margin: 0 }}>
                    Test &amp; Deploy
                  </h3>
                  <p className="text-white/50" style={{ fontSize: '14px', fontWeight: '400', lineHeight: '1.6', margin: 0 }}>
                    Quality assurance, deployment & optimization.
                  </p>
                </div>

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

              {/* Original set */}
              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Clients</p>
                  <h3 className="wcu-card-stat">4K+</h3>
                </div>
                <p className="wcu-card-bottom">Campaigns executed in 2025</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Brand visibility</p>
                  <h3 className="wcu-card-stat">92.5%</h3>
                </div>
                <p className="wcu-card-bottom">Platform uptime during peak campaign.</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Satisfied clients globally.</p>
                  <h3 className="wcu-card-stat">500+</h3>
                </div>
                <p className="wcu-card-bottom">Happy customers globally.</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Support response time.</p>
                  <h3 className="wcu-card-stat">2 minutes</h3>
                </div>
                <p className="wcu-card-bottom">Support responds promptly</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Partnerships</p>
                  <h3 className="wcu-card-stat">150+</h3>
                </div>
                <p className="wcu-card-bottom">Collaborations with institutions.</p>
              </div>

              {/* Duplicate set for seamless infinite loop */}
              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Clients</p>
                  <h3 className="wcu-card-stat">4K+</h3>
                </div>
                <p className="wcu-card-bottom">Campaigns executed in 2025</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Brand visibility</p>
                  <h3 className="wcu-card-stat">92.5%</h3>
                </div>
                <p className="wcu-card-bottom">Platform uptime during peak campaign.</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Satisfied clients globally.</p>
                  <h3 className="wcu-card-stat">500+</h3>
                </div>
                <p className="wcu-card-bottom">Happy customers globally.</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Support response time.</p>
                  <h3 className="wcu-card-stat">2 minutes</h3>
                </div>
                <p className="wcu-card-bottom">Support responds promptly</p>
              </div>

              <div className="wcu-card">
                <div className="wcu-card-glow" />
                <div className="wcu-card-top">
                  <p className="wcu-card-label">Partnerships</p>
                  <h3 className="wcu-card-stat">150+</h3>
                </div>
                <p className="wcu-card-bottom">Collaborations with institutions.</p>
              </div>

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
            <div className="text-center" data-opai-animate data-delay="0.1" style={{ "marginBottom": "5rem" }}>
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

              {/* Card 1: POS System */}
              <div className="ent-card" data-opai-animate data-delay="0.3">
                <div className="ent-card__left">
                  <div>
                    <div className="ent-card__icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="ent-card__title">POS System</h3>
                    <p className="ent-card__desc">Fast point-of-sale operations, automated stock updates, and fluid cashflow accounting.</p>
                  </div>
                  <a href="/services" className="ent-card__btn">View service</a>
                </div>

                {/* Analytics — green gradient bars */}
                <div className="ent-analytics">
                  <p className="ent-analytics__label">Average daily sales</p>
                  <div className="ent-analytics__tabs">
                    <span className="ent-analytics__tab-active">upcoming</span>
                    <span>Day</span><span>weak</span><span>Month</span>
                  </div>
                  <div className="ent-analytics__tooltip">
                    <span>$ 41.379</span>
                    <span style={{ color: '#22c55e', fontSize: '0.5625rem', marginTop: '1px' }}>+9.68%</span>
                  </div>
                  <div className="ent-analytics__bars">
                    {[55, 33, 88, 50, 66, 100, 27].map((pct, i) => (
                      <div key={i} className="ent-analytics__bar-col">
                        <div className="ent-analytics__bar" style={{ height: `${pct}%`, background: 'linear-gradient(to top, #60efff, #00ff87)' }} />
                        <span className="ent-analytics__bar-day">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: ERP System */}
              <div className="ent-card" data-opai-animate data-delay="0.4">
                <div className="ent-card__left">
                  <div>
                    <div className="ent-card__icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68h.09A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="ent-card__title">ERP System</h3>
                    <p className="ent-card__desc">Consolidate operations, monitor global inventory metrics, and align team resources.</p>
                  </div>
                  <a href="/services" className="ent-card__btn">View service</a>
                </div>

                {/* Analytics — purple gradient bars + 20% badge */}
                <div className="ent-analytics">
                  <p className="ent-analytics__label">Transaction statistics</p>
                  <p className="ent-analytics__value">$ 41.379</p>
                  <div className="ent-analytics__rotated-badge ent-analytics__rotated-badge--dark">20%</div>
                  <div className="ent-analytics__bars">
                    {[50, 33, 78, 44, 66, 100, 22].map((pct, i) => (
                      <div key={i} className="ent-analytics__bar-col">
                        <div className="ent-analytics__bar" style={{ height: `${pct}%`, background: 'linear-gradient(to top, #2e0854, #a855f7)' }} />
                        <span className="ent-analytics__bar-day">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3: CRM System */}
              <div className="ent-card" data-opai-animate data-delay="0.5">
                <div className="ent-card__left">
                  <div>
                    <div className="ent-card__icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="ent-card__title">CRM System</h3>
                    <p className="ent-card__desc">Engage clients globally, automate custom pipeline actions, and increase conversions.</p>
                  </div>
                  <a href="/services" className="ent-card__btn">View service</a>
                </div>

                {/* Analytics — rose/orange bars */}
                <div className="ent-analytics">
                  <p className="ent-analytics__label">Conversion Rate</p>
                  <div className="ent-analytics__tabs">
                    <span className="ent-analytics__tab-active">pipeline</span>
                    <span>Leads</span><span>Deals</span>
                  </div>
                  <div className="ent-analytics__tooltip">
                    <span>$ 94.610</span>
                    <span style={{ color: '#f43f5e', fontSize: '0.5625rem', marginTop: '1px' }}>+15.4%</span>
                  </div>
                  <div className="ent-analytics__bars">
                    {[44, 66, 38, 83, 50, 100, 33].map((pct, i) => (
                      <div key={i} className="ent-analytics__bar-col">
                        <div className="ent-analytics__bar" style={{ height: `${pct}%`, background: 'linear-gradient(to top, #f43f5e, #fb923c)' }} />
                        <span className="ent-analytics__bar-day">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 4: HRM & Payroll */}
              <div className="ent-card" data-opai-animate data-delay="0.6">
                <div className="ent-card__left">
                  <div>
                    <div className="ent-card__icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="ent-card__title">HRM &amp; Payroll</h3>
                    <p className="ent-card__desc">Slick onboarding workflows, compliant automatic tax logs, and instant compensation payouts.</p>
                  </div>
                  <a href="/services" className="ent-card__btn">View service</a>
                </div>

                {/* Analytics — blue/fuchsia bars + 100% OK badge */}
                <div className="ent-analytics">
                  <p className="ent-analytics__label">Payroll status</p>
                  <p className="ent-analytics__value">$ 84.150</p>
                  <div className="ent-analytics__rotated-badge ent-analytics__rotated-badge--green">100% OK</div>
                  <div className="ent-analytics__bars">
                    {[61, 27, 77, 50, 61, 94, 38].map((pct, i) => (
                      <div key={i} className="ent-analytics__bar-col">
                        <div className="ent-analytics__bar" style={{ height: `${pct}%`, background: 'linear-gradient(to top, #3b82f6, #d946ef)' }} />
                        <span className="ent-analytics__bar-day">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
    <div className="relative z-40 mx-auto w-full max-w-[960px]" style={{paddingTop: "50px",paddingBottom:"30px"}}>
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
                    className="group relative inline-flex items-center rounded-full overflow-hidden transition-all duration-300 hover:opacity-95"
                    style={{ 
                      backgroundColor: '#d4f53c', 
                      color: '#0d1017', 
                      fontSize: '0.9375rem', 
                      fontWeight: 600,
                      width: '210px',
                      height: '48px',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Animated Left Arrow Icon Span (Translates from left to right end) */}
                    <span 
                      className="flex size-10 items-center justify-center rounded-full" 
                      style={{ 
                        backgroundColor: '#0d1017',
                        position: 'absolute',
                        left: techBtnHover ? '166px' : '4px',
                        top: '4px',
                        transition: 'left 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 10
                      }}
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
                      className="whitespace-nowrap"
                      style={{
                        position: 'absolute',
                        left: techBtnHover ? '16px' : '52px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        transition: 'left 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: 'none',
                        zIndex: 5
                      }}
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
            {[
              { src: '/images/icons/gemini.svg',               alt: 'Gemini' },
              { src: '/images/icons/lovable.svg',              alt: 'Lovable' },
              { src: '/images/icons/claude-ai.svg',            alt: 'Claude' },
              { src: '/images/icons/qwen.svg',                 alt: 'Qwen' },
              { src: '/images/icons/deepseek.svg',             alt: 'DeepSeek' },
              { src: '/images/icons/runway.svg',               alt: 'Runway' },
              { src: '/images/icons/open-ai.svg',              alt: 'OpenAI' },
              { src: '/images/icons/mistral-ai.svg',           alt: 'Mistral' },
              { src: '/images/icons/grok-ai.svg',              alt: 'Grok' },
              { src: '/images/icons/perplexity-ai.svg',        alt: 'Perplexity' },
              { src: '/images/icons/google-ads-certified.png', alt: 'Google Ads' },
              { src: '/images/icons/github.svg',               alt: 'GitHub' },
              { src: '/images/icons/gemini.svg',               alt: 'Gemini 2' },
              { src: '/images/icons/open-ai.svg',              alt: 'OpenAI 2' },
              { src: '/images/icons/claude-ai.svg',            alt: 'Claude 2' },
              { src: '/images/icons/mistral-ai.svg',           alt: 'Mistral 2' },
              { src: '/images/icons/deepseek.svg',             alt: 'DeepSeek 2' },
              { src: '/images/icons/github.svg',               alt: 'GitHub 2' },
              { src: '/images/icons/lovable.svg',              alt: 'Lovable 2' },
              { src: '/images/icons/runway.svg',               alt: 'Runway 2' },
              { src: '/images/icons/qwen.svg',                 alt: 'Qwen 2' },
              { src: '/images/icons/grok-ai.svg',              alt: 'Grok 2' },
              { src: '/images/icons/perplexity-ai.svg',        alt: 'Perplexity 2' },
              { src: '/images/icons/google-ads-certified.png', alt: 'Google Ads 2' },
            ].map((icon, i) => (
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
            <div className="ind-tabs-wrap  border-2 border-white" data-opai-animate data-delay="0.5" style={{ "marginBottom": "5rem", marginTop: "5rem" }}>
              {[
                'Healthcare', 'Education', 'Retail & Ecommerce',
                'Real Estate', 'Manufacturing', 'Logistics & Supply Chain'
              ].map((tab, i) => (
                <button
                  key={tab}
                  className={`ind-tab${i === 0 ? ' ind-tab--active' : ''}`}
                  data-ind-tab={i}
                  onClick={e => {
                    document.querySelectorAll('.ind-tab').forEach(t => t.classList.remove('ind-tab--active'))
                    e.currentTarget.classList.add('ind-tab--active')
                    document.querySelectorAll('.ind-panel').forEach(p => p.classList.remove('ind-panel--active'))
                    document.querySelector(`.ind-panel[data-ind-panel="${i}"]`)?.classList.add('ind-panel--active')
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Panels */}
            <div className="ind-panels">

              {/* Panel 0 — Healthcare */}
              <div className="ind-panel ind-panel--active" data-ind-panel="0">
                <div className="ind-panel__left">
                  <h3 className="ind-panel__title">Healthcare</h3>
                  <p className="ind-panel__desc">
                    Streamline patient management, automate billing, and ensure compliance — all in one integrated platform built for healthcare providers.
                  </p>
                  <ul className="ind-features">
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" strokeLinecap="round" /></svg></span>
                      <div><strong>Patient Records</strong><br />Centralized EHR with secure access control</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" /></svg></span>
                      <div><strong>Appointment Scheduling</strong><br />Automated reminders and calendar sync</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 14l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" /></svg></span>
                      <div><strong>Compliance Tools</strong><br />Built-in regulatory and audit reporting</div>
                    </li>
                  </ul>
                  <a href="/services" className="ind-cta">Start learning</a>
                </div>
                <div className="ind-panel__right">
                  <div className="ind-img-wrap" style={{ background: 'linear-gradient(135deg,#d1fae5 0%,#6ee7b7 100%)' }} >
                    <img src="/images/opai-img-49.png" alt="Healthcare" className="ind-img" />
                    <div className="ind-stat-card">
                      <div className="ind-stat-card__ring" style={{ '--ring-color': '#8b5cf6' }}>
                        <svg viewBox="0 0 60 60" className="ind-ring-svg">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="url(#hc-grad)" strokeWidth="5" strokeDasharray="108 43" strokeLinecap="round" strokeDashoffset="25" />
                          <defs><linearGradient id="hc-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#c4b5fd" /></linearGradient></defs>
                          <circle cx="30" cy="30" r="6" fill="#8b5cf6" />
                        </svg>
                      </div>
                      <div className="ind-stat-card__labels">
                        <span className="ind-stat-card__pct">75%</span>
                        <span className="ind-stat-card__sub">Daily payment</span>
                        <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 1 — Education */}
              <div className="ind-panel" data-ind-panel="1">
                <div className="ind-panel__left">
                  <h3 className="ind-panel__title">Education</h3>
                  <p className="ind-panel__desc">
                    Power your institution with a complete LMS, student tracking, fee management, and e-learning tools designed for modern education.
                  </p>
                  <ul className="ind-features">
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" /></svg></span>
                      <div><strong>LMS Platform</strong><br />Online courses, quizzes, and progress tracking</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeLinecap="round" /></svg></span>
                      <div><strong>Student Management</strong><br />Enrollment, attendance, and grading</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" strokeLinecap="round" /></svg></span>
                      <div><strong>Fee Collection</strong><br />Automated invoicing and payment portals</div>
                    </li>
                  </ul>
                  <a href="/services" className="ind-cta">Start learning</a>
                </div>
                <div className="ind-panel__right">
                  <div className="ind-img-wrap" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)' }}>
                    <img src="/images/opai-img-50.png" alt="Education" className="ind-img" />
                    <div className="ind-stat-card">
                      <div className="ind-stat-card__ring">
                        <svg viewBox="0 0 60 60" className="ind-ring-svg">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="url(#ed-grad)" strokeWidth="5" strokeDasharray="90 61" strokeLinecap="round" strokeDashoffset="25" />
                          <defs><linearGradient id="ed-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#93c5fd" /></linearGradient></defs>
                          <circle cx="30" cy="30" r="6" fill="#3b82f6" />
                        </svg>
                      </div>
                      <div className="ind-stat-card__labels">
                        <span className="ind-stat-card__pct">62%</span>
                        <span className="ind-stat-card__sub">Course completion</span>
                        <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 2 — Retail & Ecommerce */}
              <div className="ind-panel" data-ind-panel="2">
                <div className="ind-panel__left">
                  <h3 className="ind-panel__title">Retail &amp; Ecommerce</h3>
                  <p className="ind-panel__desc">
                    From inventory to checkout — manage your entire retail operation with smart POS, ecommerce integrations, and real-time analytics.
                  </p>
                  <ul className="ind-features">
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" /></svg></span>
                      <div><strong>Smart POS</strong><br />Fast checkout with multi-payment support</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 12v.01" strokeLinecap="round" /></svg></span>
                      <div><strong>Inventory Control</strong><br />Live stock updates across all channels</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></span>
                      <div><strong>Sales Analytics</strong><br />Revenue dashboards and trend reports</div>
                    </li>
                  </ul>
                  <a href="/services" className="ind-cta">Start learning</a>
                </div>
                <div className="ind-panel__right">
                  <div className="ind-img-wrap" style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)' }}>
                    <img src="/images/opai-img-51.png" alt="Retail" className="ind-img" />
                    <div className="ind-stat-card">
                      <div className="ind-stat-card__ring">
                        <svg viewBox="0 0 60 60" className="ind-ring-svg">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="url(#rt-grad)" strokeWidth="5" strokeDasharray="120 31" strokeLinecap="round" strokeDashoffset="25" />
                          <defs><linearGradient id="rt-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#fcd34d" /></linearGradient></defs>
                          <circle cx="30" cy="30" r="6" fill="#f59e0b" />
                        </svg>
                      </div>
                      <div className="ind-stat-card__labels">
                        <span className="ind-stat-card__pct">84%</span>
                        <span className="ind-stat-card__sub">Order fulfilment</span>
                        <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 3 — Real Estate */}
              <div className="ind-panel" data-ind-panel="3">
                <div className="ind-panel__left">
                  <h3 className="ind-panel__title">Real Estate</h3>
                  <p className="ind-panel__desc">
                    Manage properties, leads, contracts, and payments in one place — built for agencies, developers, and property managers.
                  </p>
                  <ul className="ind-features">
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>
                      <div><strong>Property Management</strong><br />Listings, units, and tenant portal</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" /><circle cx="12" cy="10" r="3" /></svg></span>
                      <div><strong>Lead Tracking</strong><br />CRM pipeline for buyer and seller leads</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" /><polyline points="14 2 14 8 20 8" /></svg></span>
                      <div><strong>Contract Builder</strong><br />Digital agreements with e-signatures</div>
                    </li>
                  </ul>
                  <a href="/services" className="ind-cta">Start learning</a>
                </div>
                <div className="ind-panel__right">
                  <div className="ind-img-wrap" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)' }}>
                    <img src="/images/opai-img-52.png" alt="Real Estate" className="ind-img" />
                    <div className="ind-stat-card">
                      <div className="ind-stat-card__ring">
                        <svg viewBox="0 0 60 60" className="ind-ring-svg">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="url(#re-grad)" strokeWidth="5" strokeDasharray="99 52" strokeLinecap="round" strokeDashoffset="25" />
                          <defs><linearGradient id="re-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0ea5e9" /><stop offset="100%" stopColor="#7dd3fc" /></linearGradient></defs>
                          <circle cx="30" cy="30" r="6" fill="#0ea5e9" />
                        </svg>
                      </div>
                      <div className="ind-stat-card__labels">
                        <span className="ind-stat-card__pct">69%</span>
                        <span className="ind-stat-card__sub">Deals closed</span>
                        <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 4 — Manufacturing */}
              <div className="ind-panel" data-ind-panel="4">
                <div className="ind-panel__left">
                  <h3 className="ind-panel__title">Manufacturing</h3>
                  <p className="ind-panel__desc">
                    Optimize production, reduce waste, and track quality from raw material to finished product with our manufacturing ERP solution.
                  </p>
                  <ul className="ind-features">
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" /></svg></span>
                      <div><strong>Production Planning</strong><br />Work orders, BOM, and capacity planning</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 14l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" /></svg></span>
                      <div><strong>Quality Control</strong><br />Inspection checklists and defect tracking</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></span>
                      <div><strong>Production Analytics</strong><br />OEE, downtime, and yield reporting</div>
                    </li>
                  </ul>
                  <a href="/services" className="ind-cta">Start learning</a>
                </div>
                <div className="ind-panel__right">
                  <div className="ind-img-wrap" style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' }}>
                    <img src="/images/opai-img-53.png" alt="Manufacturing" className="ind-img" />
                    <div className="ind-stat-card">
                      <div className="ind-stat-card__ring">
                        <svg viewBox="0 0 60 60" className="ind-ring-svg">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="url(#mf-grad)" strokeWidth="5" strokeDasharray="135 16" strokeLinecap="round" strokeDashoffset="25" />
                          <defs><linearGradient id="mf-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#64748b" /><stop offset="100%" stopColor="#94a3b8" /></linearGradient></defs>
                          <circle cx="30" cy="30" r="6" fill="#64748b" />
                        </svg>
                      </div>
                      <div className="ind-stat-card__labels">
                        <span className="ind-stat-card__pct">91%</span>
                        <span className="ind-stat-card__sub">Plant efficiency</span>
                        <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel 5 — Logistics */}
              <div className="ind-panel" data-ind-panel="5">
                <div className="ind-panel__left">
                  <h3 className="ind-panel__title">Logistics &amp; Supply Chain</h3>
                  <p className="ind-panel__desc">
                    Track shipments, optimize routes, and manage your entire supply chain in real time — from warehouse to last-mile delivery.
                  </p>
                  <ul className="ind-features">
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" strokeLinecap="round" /></svg></span>
                      <div><strong>Fleet Tracking</strong><br />Real-time GPS and delivery status</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
                      <div><strong>Route Optimization</strong><br />AI-powered delivery route planning</div>
                    </li>
                    <li className="ind-feature">
                      <span className="ind-feature__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>
                      <div><strong>Warehouse Management</strong><br />Stock allocation and picking workflows</div>
                    </li>
                  </ul>
                  <a href="/services" className="ind-cta">Start learning</a>
                </div>
                <div className="ind-panel__right">
                  <div className="ind-img-wrap" style={{ background: 'linear-gradient(135deg, #d1fae5 0%, #34d399 100%)' }}>
                    <img src="/images/opai-img-54.png" alt="Logistics" className="ind-img" />
                    <div className="ind-stat-card">
                      <div className="ind-stat-card__ring">
                        <svg viewBox="0 0 60 60" className="ind-ring-svg">
                          <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.15" />
                          <circle cx="30" cy="30" r="24" fill="none" stroke="url(#lg-grad)" strokeWidth="5" strokeDasharray="113 38" strokeLinecap="round" strokeDashoffset="25" />
                          <defs><linearGradient id="lg-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#6ee7b7" /></linearGradient></defs>
                          <circle cx="30" cy="30" r="6" fill="#10b981" />
                        </svg>
                      </div>
                      <div className="ind-stat-card__labels">
                        <span className="ind-stat-card__pct">79%</span>
                        <span className="ind-stat-card__sub">On-time delivery</span>
                        <div className="ind-stat-card__range"><span>0%</span><span>100%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
            <div className="main-container" style={{ paddingRight: '0.75rem' }}>
              <div className="team-track" id="team-track" data-idx="0" style={{ "marginBottom": "1rem", "transition": "transform 0.3s ease" }}>

                {[
                  { img: '/images/opai-avatar-img-01.png', first: 'Ahmad', last: 'Raza', role: 'Chief Executive Officer' },
                  { img: '/images/opai-avatar-img-02.png', first: 'Sara', last: 'Khan', role: 'Chief Technology Officer' },
                  { img: '/images/opai-avatar-img-03.png', first: 'Usman', last: 'Ali', role: 'Project Manager' },
                  { img: '/images/opai-avatar-img-04.png', first: 'Zara', last: 'Malik', role: 'Lead Developer' },
                  { img: '/images/opai-avatar-img-05.png', first: 'Bilal', last: 'Hassan', role: 'UI/UX Designer' },
                  { img: '/images/opai-avatar-img-06.png', first: 'Nadia', last: 'Qamar', role: 'DevOps Engineer' },
                  { img: '/images/opai-avatar-img-07.png', first: 'Hamza', last: 'Siddiq', role: 'QA Lead' },
                  { img: '/images/opai-avatar-img-08.png', first: 'Ayesha', last: 'Tariq', role: 'Business Analyst' },
                ].map((m, i) => (
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