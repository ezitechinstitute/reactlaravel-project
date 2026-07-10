import './ServicesOverview.css'
import { useEffect, useRef } from 'react'
import { SERVICE_CARDS } from './ServicesOverviewData'

export default function ServicesOverview() {
  // ── Services Section Stairs Animation ──────────────────────────
  const servicesRef = useRef(null)

  // services section ke liye GSAP + ScrollTrigger animation
  useEffect(() => {
    const triggers = []
    let timer

    function initStackCards() {
      const container = servicesRef.current
      if (!container) return

      const items = Array.from(container.querySelectorAll('.services-overview__card'))
      if (!items.length) return

      if (!window.gsap || !window.ScrollTrigger) return

      window.gsap.registerPlugin(window.ScrollTrigger)

      const STICKY_TOP = 112

      // Left column pinned
      const leftColumn = document.querySelector('.services-overview__left-col')
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

  return (
    <section className="services-overview">
      <div className="main-container">
        <div className="services-overview__row">

          {/* Left column wrapper */}
          <div className="services-overview__left">
            {/* Left sticky column — will be pinned by GSAP */}
            <div className="services-overview__left-col">
              <span data-opai-animate data-delay="0.1" className="services-overview__badge">
                <span className="services-overview__badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" /></svg>
                </span>
                Services overview
              </span>
              <h2 data-opai-animate data-delay="0.2" className="services-overview__title">
                Our performance-focused{' '}
                <span className="services-overview__accent">services.</span>
              </h2>
              <p data-opai-animate data-delay="0.3" className="services-overview__description">
                Smart, secure, and designed for simplicity — Ezitech empowers you to take control effortlessly.
              </p>
              <div data-opai-animate data-delay="0.4">
                <a href="\services" className="services-overview__cta">
                  <div className="services-overview__cta-text-wrap">
                    <span className="services-overview__cta-text services-overview__cta-text--primary">View full-service breakdown</span>
                    <span className="services-overview__cta-text">View full-service breakdown</span>
                  </div>
                  <div className="services-overview__cta-icon">
                    <span className="services-overview__cta-icon-bg">
                      <span className="services-overview__cta-arrow services-overview__cta-arrow--in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </span>
                    <span className="services-overview__cta-arrow services-overview__cta-arrow--out">
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
            className="services-overview__right"
            data-stairs-wrapper=".services-overview__card"
            data-base-offset="120"
            data-step-offset="20"
            data-duration="0.9"
            data-stagger="0.1"
            data-start="top 85%"
            data-end="top 20%"
            data-once
          >
            {SERVICE_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`services-overview__card${i < SERVICE_CARDS.length - 1 ? ' services-overview__card--spaced' : ''}`}
              >
                <div className="services-overview__card-head">
                  <span className={`${card.iconClass} services-overview__card-icon`}></span>
                  <h3 className="services-overview__card-title">{card.title}</h3>
                </div>
                <div>
                  <p className="services-overview__card-desc">{card.desc}</p>
                </div>
                <a href="/service-details" className="services-overview__card-link">
                  <span className="services-overview__card-link-text">Our Service</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className="services-overview__card-link-icon"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            ))}
            {/* End marker — last card scale trigger ke liye */}
            <div id="cards-end-marker" className="services-overview__end-marker"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
