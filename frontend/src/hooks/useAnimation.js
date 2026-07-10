/**
 * useAnimation.js
 * ═══════════════════════════════════════════════════════════════════
 * Developer Guide — Naya Animation Add Karna
 * ═══════════════════════════════════════════════════════════════════
 *
 * GSAP, Swiper, Lenis — sab window.* pe available hain (vendor.bundle.js se).
 *
 * Usage in any page/component:
 *
 *   import { useAnimation } from '../hooks/useAnimation'
 *   export default function MyPage() {
 *     useAnimation(myAnimationFn)   // ← pass your animation function
 *     return <div>...</div>
 *   }
 *
 * ═══════════════════════════════════════════════════════════════════
 */

import { useEffect, useRef } from 'react'

/**
 * useAnimation(fn, deps?)
 *
 * Page mount pe animation chalata hai.
 * Route change pe automatically cleanup karta hai.
 *
 * @param {Function} fn   - Animation function. Return karo cleanup function agar chahiye.
 * @param {Array}   deps  - Dependencies (default: [])
 */
export function useAnimation(fn, deps = []) {

  useEffect(() => {
    // Wait for DOM + vendor scripts to be ready
    const timer = setTimeout(() => {
      try {
        const cleanup = fn()
        return cleanup
      } catch (e) {
        console.warn('[useAnimation] Error:', e)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, deps) // eslint-disable-line
}

/**
 * useScrollAnimation(selector, options?)
 *
 * Simple scroll-triggered fade + slide animation.
 * GSAP + ScrollTrigger vendor se.
 *
 * @param {string} selector  - CSS selector, e.g. '.my-card'
 * @param {object} options   - GSAP options override
 */
export function useScrollAnimation(selector, options = {}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!window.gsap || !window.ScrollTrigger) return
      const elements = document.querySelectorAll(selector)
      if (!elements.length) return

      elements.forEach((el, i) => {
        window.gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
          ...options,
        })
      })
    }, 150)
    return () => clearTimeout(timer)
  }, [selector])
}

/**
 * useSwiper(selector, config?)
 *
 * Swiper slider initialize karo.
 *
 * @param {string} selector  - Swiper container selector
 * @param {object} config    - Swiper config
 *
 * Example:
 *   useSwiper('.my-swiper', { loop: true, autoplay: { delay: 3000 } })
 */
export function useSwiper(selector, config = {}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!window.Swiper) return
      const el = document.querySelector(selector)
      if (!el) return
      const swiper = new window.Swiper(el, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        ...config,
      })
      return () => swiper.destroy()
    }, 150)
    return () => clearTimeout(timer)
  }, [selector])
}

/**
 * useGSAP() — Direct GSAP access hook
 *
 * Jab tumhe full GSAP control chahiye.
 * Ref return karta hai aur callback mein GSAP milta hai.
 *
 * Example:
 *   const ref = useGSAP((gsap, ScrollTrigger) => {
 *     gsap.from(ref.current.querySelectorAll('.card'), {
 *       opacity: 0, y: 60, stagger: 0.15,
 *       scrollTrigger: { trigger: ref.current, start: 'top 80%' }
 *     })
 *   })
 *   return <section ref={ref}>...</section>
 */
export function useGSAP(callback) {
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!window.gsap || !ref.current) return
      try {
        callback(window.gsap, window.ScrollTrigger, ref.current)
      } catch (e) {
        console.warn('[useGSAP] Error:', e)
      }
    }, 150)
    return () => {
      clearTimeout(timer)
      // Cleanup ScrollTriggers for this element
      if (window.ScrollTrigger && ref.current) {
        window.ScrollTrigger.getAll()
          .filter(t => ref.current.contains(t.trigger))
          .forEach(t => t.kill())
      }
    }
  }, [])

  return ref
}
