import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RawHtml from './RawHtml';
import headerHtml from '../content/header.html?raw';
import footerHtml from '../content/footer.html?raw';
import SubscribeSection from './SubscribeSection';

export default function Layout({ children }) {
  const location = useLocation();

  // Theme toggle: one delegated listener handles the .theme-toggle button on
  // every page (the header is re-rendered on each route, so we delegate on
  // document instead of binding to the button directly).
useEffect(() => {
  const applyTheme = (theme) => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark');
      body.classList.remove('dark');
    } else {
      root.classList.remove('light-theme');
      root.classList.add('dark');
      body.classList.add('dark');
    }
    try {
      localStorage.setItem('ezitech-theme', theme);
    } catch (e) {
      /* ignore */
    }
  };
    // make sure the saved theme is applied on first mount
    try {
      const saved = localStorage.getItem('ezitech-theme');
      applyTheme(saved === 'light' ? 'light' : 'dark');
    } catch (e) {
      /* ignore */
    }

    const onClick = (e) => {
      const btn = e.target.closest('.theme-toggle');
      if (!btn) return;
      e.preventDefault();
      const isLight = document.documentElement.classList.contains('light-theme');
      applyTheme(isLight ? 'dark' : 'light');
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // After each route's content is in the DOM, re-run the vanilla site initializers
  // (GSAP/ScrollTrigger/Swiper/marquee, nav menu handlers, etc).
  useEffect(() => {
    // scroll to top on navigation
    window.scrollTo(0, 0);

    const timers = [];

    // Force every animated element to be visible. The template animates
    // [data-opai-animate] / [data-opai-avatar] from opacity:0 via GSAP +
    // ScrollTrigger. On client-side navigation those triggers frequently fail
    // to fire (content mounts at scroll 0 / rapid route changes), leaving the
    // page blank/black until a manual refresh. We force visibility with
    // important inline styles so GSAP cannot leave them stuck at opacity:0.
    const forceVisible = () => {
      const sel =
       '[data-opai-animate], [data-opai-avatar], [data-opai-border-expand], [data-ns-animate]';
      document.querySelectorAll(sel).forEach((el) => {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        el.style.filter = 'none';
      });
    };

    // Kill any leftover ScrollTriggers so a previous page's animations don't
    // re-hide this page's elements, then refresh.
    const settle = () => {
      try {
        if (window.ScrollTrigger) {
          if (typeof window.ScrollTrigger.refresh === 'function') {
            window.ScrollTrigger.refresh(true);
          }
        }
      } catch (e) {
        /* ignore */
      }
      forceVisible();
    };

    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        try {
          if (typeof window.__opaiInit === 'function') {
            window.__opaiInit();
          }
        } catch (e) {
          console.warn('re-init failed', e);
        }
        // Reveal immediately, then keep re-asserting as layout/GSAP settles so
        // a late-firing animation can never leave the page blank.
        forceVisible();
        [0, 60, 150, 300, 600, 1000, 1600].forEach((t) =>
          timers.push(setTimeout(settle, t))
        );

        // Hero heading + image slider (synced, 5s). Heading text and the
        // right-side image change together; the outgoing image fades downward.
        const startHeroSlider = () => {
          const titleEl = document.getElementById('hero-slide-text');
          const imgs = document.querySelectorAll('#hero-image-stack .hero-img');
          const boxEl = document.getElementById('hero-box-wrapper'); // wrapper (not tilt, avoids CSS conflict)
          if (!titleEl || imgs.length < 2) return false;
          const slides = [
            ['Custom Web/Software Development', 'Web/Software'],
            ['SaaS Products & Platforms', 'SaaS Products'],
            ['AI & Digital Transformation', 'AI'],
            ['Dedicated Development Team', 'Dedicated'],
          ];
          let cur = 0;

          // Word-by-word reveal: each word slides in from left, staggered
          const renderWords = (text, highlight) => {
            titleEl.innerHTML = '';
            // split around highlight
            let parts = highlight ? text.split(highlight) : [text];
            const segments = [];
            if (highlight && parts.length === 2) {
              segments.push({ text: parts[0], purple: false });
              segments.push({ text: highlight, purple: true });
              segments.push({ text: parts[1], purple: false });
            } else {
              segments.push({ text, purple: false });
            }
            let wordIndex = 0;
            segments.forEach(seg => {
              seg.text.split(/(\s+)/).forEach(token => {
                if (!token) return;
                if (/^\s+$/.test(token)) {
                  titleEl.appendChild(document.createTextNode(token));
                  return;
                }
                const span = document.createElement('span');
                span.textContent = token;
                span.style.cssText = `
                  display:inline-block;
                  opacity:0;
                  transform:translateX(-18px);
                  transition:opacity 0.35s ease, transform 0.35s ease;
                  transition-delay:${wordIndex * 60}ms;
                  ${seg.purple ? 'color:#8d59ff;' : ''}
                `;
                titleEl.appendChild(span);
                // trigger animation next frame
                const idx = wordIndex;
                setTimeout(() => {
                  span.style.opacity = '1';
                  span.style.transform = 'translateX(0)';
                }, 30 + idx * 60);
                wordIndex++;
              });
            });
          };

          // Image box wrapper animation: fade+slide DOWN to hide, swap image, enter from right
          const animateBox = (nextImgIdx, prevImgIdx, done) => {
            // Target the wrapper div (not hero-tilt which has CSS 3D animation)
            const wrapEl = document.getElementById('hero-box-wrapper');
            if (!wrapEl) { 
              // fallback: just swap image
              imgs.forEach((im, i) => {
                im.style.setProperty('opacity', i === nextImgIdx ? '1' : '0', 'important');
                im.style.zIndex = i === nextImgIdx ? '2' : '0';
              });
              done(); return;
            }
            // EXIT: fade opacity + slide down
            wrapEl.style.transition = 'opacity 0.42s ease, transform 0.42s ease';
            wrapEl.style.opacity = '0';
            wrapEl.style.transform = 'translateY(50px)';
            setTimeout(() => {
              // swap image while hidden
              imgs.forEach((im, i) => {
                im.style.setProperty('opacity', i === nextImgIdx ? '1' : '0', 'important');
                im.style.zIndex = i === nextImgIdx ? '2' : '0';
              });
              // reset to right-side entry position instantly
              wrapEl.style.transition = 'none';
              wrapEl.style.transform = 'translateX(80px)';
              wrapEl.style.opacity = '0';
              // ENTER: slide in from right
              setTimeout(() => {
                wrapEl.style.transition = 'opacity 0.42s ease, transform 0.42s ease';
                wrapEl.style.opacity = '1';
                wrapEl.style.transform = 'translateX(0) translateY(0)';
                setTimeout(done, 430);
              }, 30);
            }, 440);
          };

          // initialise
          imgs.forEach((im, i) => {
            im.style.setProperty('opacity', i === 0 ? '1' : '0', 'important');
            im.style.transition = 'none';
            im.style.zIndex = i === 0 ? '2' : '0';
          });
          renderWords(slides[0][0], slides[0][1]);

          if (window.__heroSliderInterval) clearInterval(window.__heroSliderInterval);

          let busy = false;
          const switchPills = (idx, prevIdx) => {
            const pillSlides = document.querySelectorAll('.hero-slide');
            if (!pillSlides.length) return;
            if (pillSlides[prevIdx]) { pillSlides[prevIdx].classList.add('hidden'); pillSlides[prevIdx].classList.remove('flex'); }
            if (pillSlides[idx]) { pillSlides[idx].classList.remove('hidden'); pillSlides[idx].classList.add('flex'); }
          };
          const goTo = (idx) => {
            if (busy) return;
            busy = true;
            const prev = cur;
            cur = idx;
            titleEl.style.transition = 'opacity 0.3s';
            titleEl.style.opacity = '0';
            switchPills(cur, prev);
            animateBox(cur, prev, () => {
              renderWords(slides[cur][0], slides[cur][1]);
              titleEl.style.transition = 'opacity 0.3s';
              titleEl.style.opacity = '1';
              busy = false;
            });
          };

          window.__heroSliderInterval = setInterval(
            () => goTo((cur + 1) % slides.length),
            5000
          );
          return true;
        };

        // try a few times in case the hero mounts slightly late
        timers.push(setTimeout(() => { startHeroSlider(); }, 400));
        timers.push(setTimeout(() => { if (!window.__heroSliderInterval) startHeroSlider(); }, 900));
        timers.push(setTimeout(() => { if (!window.__heroSliderInterval) startHeroSlider(); }, 1600));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      timers.forEach(clearTimeout);
    };
  }, [location.pathname]);

  // Fire slider on very first mount too (not just on navigation),
  // because the navigation effect depends on location.pathname changing.
  useEffect(() => {
    const t1 = setTimeout(() => {
      const titleEl = document.getElementById('hero-slide-text');
      const imgs = document.querySelectorAll('#hero-image-stack .hero-img');
      const wrapEl2 = document.getElementById('hero-box-wrapper');
      if (!titleEl || imgs.length < 2) return;
      if (window.__heroSliderInterval) return;
      const slides = [
        ['Custom Web/Software Development', 'Web/Software'],
        ['SaaS Products & Platforms', 'SaaS Products'],
        ['AI & Digital Transformation', 'AI'],
        ['Dedicated Development Team', 'Dedicated'],
      ];
      let cur = 0;

      const renderWords = (text, highlight) => {
        titleEl.innerHTML = '';
        const segments = highlight && text.includes(highlight)
          ? [{ text: text.split(highlight)[0], p: false }, { text: highlight, p: true }, { text: text.split(highlight)[1], p: false }]
          : [{ text, p: false }];
        let wi = 0;
        segments.forEach(seg => {
          seg.text.split(/(\s+)/).forEach(token => {
            if (!token) return;
            if (/^\s+$/.test(token)) { titleEl.appendChild(document.createTextNode(token)); return; }
            const sp = document.createElement('span');
            sp.textContent = token;
            sp.style.cssText = `display:inline-block;opacity:0;transform:translateX(-18px);transition:opacity 0.35s ease ${wi*60}ms,transform 0.35s ease ${wi*60}ms;${seg.p?'color:#8d59ff;':''}`;
            titleEl.appendChild(sp);
            const i = wi; setTimeout(() => { sp.style.opacity='1'; sp.style.transform='translateX(0)'; }, 30 + i*60);
            wi++;
          });
        });
      };

      const animateBox = (nextIdx, prevIdx, done) => {
        const wrapEl = document.getElementById('hero-box-wrapper');
        if (!wrapEl) {
          imgs.forEach((im, i) => { im.style.setProperty('opacity', i===nextIdx?'1':'0','important'); im.style.zIndex=i===nextIdx?'2':'0'; });
          done(); return;
        }
        // EXIT: fade + slide down
        wrapEl.style.transition = 'opacity 0.42s ease, transform 0.42s ease';
        wrapEl.style.opacity = '0';
        wrapEl.style.transform = 'translateY(50px)';
        setTimeout(() => {
          imgs.forEach((im, i) => { im.style.setProperty('opacity', i===nextIdx?'1':'0','important'); im.style.zIndex=i===nextIdx?'2':'0'; });
          // ENTER: from right
          wrapEl.style.transition = 'none';
          wrapEl.style.transform = 'translateX(80px)';
          wrapEl.style.opacity = '0';
          setTimeout(() => {
            wrapEl.style.transition = 'opacity 0.42s ease, transform 0.42s ease';
            wrapEl.style.opacity = '1'; wrapEl.style.transform = 'translateX(0) translateY(0)';
            setTimeout(done, 430);
          }, 30);
        }, 440);
      };

      imgs.forEach((im, i) => { im.style.setProperty('opacity', i===0?'1':'0','important'); im.style.zIndex=i===0?'2':'0'; im.style.transition='none'; });
      renderWords(slides[0][0], slides[0][1]);

      let busy = false;
      const switchPills = (idx, prevIdx) => {
        const pillSlides = document.querySelectorAll('.hero-slide');
        if (!pillSlides.length) return;
        if (pillSlides[prevIdx]) { pillSlides[prevIdx].classList.add('hidden'); pillSlides[prevIdx].classList.remove('flex'); }
        if (pillSlides[idx]) { pillSlides[idx].classList.remove('hidden'); pillSlides[idx].classList.add('flex'); }
      };
      const goTo = (idx) => {
        if (busy) return; busy = true;
        const prev = cur; cur = idx;
        titleEl.style.transition = 'opacity 0.3s'; titleEl.style.opacity = '0';
        switchPills(cur, prev);
        animateBox(cur, prev, () => { renderWords(slides[cur][0], slides[cur][1]); titleEl.style.transition='opacity 0.3s'; titleEl.style.opacity='1'; busy=false; });
      };
      window.__heroSliderInterval = setInterval(() => goTo((cur+1) % slides.length), 5000);
    }, 800);
    return () => clearTimeout(t1);
  }, []); // runs once on mount

  return (
    <>
      <RawHtml html={headerHtml} />
      {children}


      <SubscribeSection />
      
      <RawHtml html={footerHtml} />

      {/* Floating light/dark theme toggle — fixed in the bottom-right corner,
          present on every page. */}
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle light and dark theme"
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 9998,
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '9999px',
          border: '1px solid rgba(124,142,165,0.35)',
          background: 'var(--color-background-3, #252a32)',
          boxShadow: '0 8px 24px -6px rgba(0,0,0,0.4)',
          cursor: 'pointer',
        }}
      >
        <span className="sr-only">Toggle theme</span>
        {/* Sun (dark mode -> click for light) */}
        <svg
          className="theme-icon-sun"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{ position: 'absolute' }}
        >
          <circle cx="12" cy="12" r="4" stroke="var(--color-background-7,#f8f9fa)" strokeWidth="1.6" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="var(--color-background-7,#f8f9fa)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        {/* Moon (light mode -> click for dark) */}
        <svg
          className="theme-icon-moon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{ position: 'absolute' }}
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            stroke="var(--color-background-7,#11141d)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
