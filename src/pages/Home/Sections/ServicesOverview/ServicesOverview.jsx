import './ServicesOverview.css'
import { useEffect, useRef } from 'react'
import { SERVICE_CARDS } from './ServicesOverviewData'

// Gap (px) cards ke beech peek-offset ke liye — reference site ke
// `--stack-cards-gap: 24px` se match karta hai. Must match
// ServicesOverview.css `.services-overview__card { top: ... }`.
const STACK_GAP = 24

export default function ServicesOverview() {
  // ── Services Section — native `position: sticky` stack-cards ───
  // Ye exact wahi technique hai jo reference site use karti hai:
  // har card `position: sticky` hai (same `top`), isliye scroll pe
  // wo naturally ek doosre ke upar "pile" ho jaate hain — koi GSAP
  // pin/timeline nahi, sirf scroll position ka pure function hai,
  // isliye scroll-up pe automatically reverse (pile-down) ho jaata
  // hai bina kisi extra direction-tracking ke.
  const rightRef = useRef(null)

  useEffect(() => {
    const container = rightRef.current
    if (!container) return

    const items = Array.from(container.querySelectorAll('.services-overview__card'))
    if (!items.length) return

    let cardTop = 0
    let cardHeight = 0
    let scrolling = false
    let listening = false
    let resizeTimer

    function measure() {
      const style = getComputedStyle(items[0])
      cardTop = Math.floor(parseFloat(style.top)) || 0
      cardHeight = Math.floor(parseFloat(style.height)) || 0
      container.style.paddingBottom = STACK_GAP * (items.length - 1) + 'px'
      items.forEach((item, i) => {
        item.style.transform = `translateY(${STACK_GAP * i}px)`
      })
    }

    function animate() {
      const top = container.getBoundingClientRect().top
      items.forEach((item, i) => {
        const n = cardTop - top - i * (cardHeight + STACK_GAP)
        if (n > 0) {
          const scale = i === items.length - 1 ? 1 : (cardHeight - 0.05 * n) / cardHeight
          item.style.transform = `translateY(${STACK_GAP * i}px) scale(${Math.max(scale, 0)})`
        } else {
          item.style.transform = `translateY(${STACK_GAP * i}px)`
        }
      })
      scrolling = false
    }

    function onScroll() {
      if (!scrolling) {
        scrolling = true
        window.requestAnimationFrame(animate)
      }
    }

    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        measure()
        animate()
      }, 300)
    }

    measure()
    window.addEventListener('resize', onResize)

    // Scroll listener sirf tab attach karo jab section viewport mein ho
    // (performance — reference site isi tarah karti hai).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (listening) return
          listening = true
          window.addEventListener('scroll', onScroll)
          animate()
        } else {
          if (!listening) return
          window.removeEventListener('scroll', onScroll)
          listening = false
        }
      },
      { threshold: [0, 1] }
    )
    observer.observe(container)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <section className="services-overview">
      <div className="main-container">
        <div className="services-overview__row">

          {/* Left column wrapper */}
          <div className="services-overview__left">
            {/* Left sticky column — plain `position: sticky` (ServicesOverview.css) */}
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

          {/* Right — sticky stack cards */}
          <div ref={rightRef} className="services-overview__right">
            {SERVICE_CARDS.map((card) => (
              <div key={card.title} className="services-overview__card">
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
          </div>
        </div>
      </div>
    </section>
  )
}
