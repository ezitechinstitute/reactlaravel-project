import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SubscribeSection from './SubscribeSection';

/* ─── forceVisible ──────────────────────────────────────────────────
<<<<<<< Updated upstream
   CSS opacity:1 override — GSAP se pehle blank nahi dikhega
=======
   CSS opacity override — GSAP se pehle blank nahi dikhega
>>>>>>> Stashed changes
──────────────────────────────────────────────────────────────────── */
function forceVisible() {
  document.querySelectorAll(
    '[data-opai-animate],[data-opai-avatar],[data-opai-border-expand],[data-ns-animate]'
  ).forEach(el => {
    el.style.setProperty('opacity', '1', 'important');
    el.style.setProperty('visibility', 'visible', 'important');
    el.style.filter = 'none';
  });
}

function isVendorReady() {
  return (
    typeof window.gsap !== 'undefined' &&
    typeof window.ScrollTrigger !== 'undefined' &&
    typeof window.Springer !== 'undefined' &&
    typeof window.Swiper !== 'undefined' &&
    typeof window.Lenis !== 'undefined'
  );
}

function waitForVendor(cb, maxWait = 5000) {
  const start = Date.now();
  const check = () => {
    if (isVendorReady()) {
      cb();
    } else if (Date.now() - start < maxWait) {
      setTimeout(check, 50);
    } else {
      console.warn('[Ezitech] Vendor timeout — running anyway');
      cb();
    }
  };
  check();
}

<<<<<<< Updated upstream
function runInit(delay = 0) {
  setTimeout(() => {
    waitForVendor(() => {
      // Kill old ScrollTriggers
=======
/* ─── FIX: DOM aware wait ───────────────────────────────────────────
   Problem: vendor ready hota hai but React page DOM abhi render
   nahi hua hota (especially first visit pe lazy chunks)
   
   Solution: Ek selector check karo jo page pe hona chahiye,
   agar nahi mila toh rAF se dubara check karo jab tak DOM ready na ho
──────────────────────────────────────────────────────────────────── */
function waitForPageDOM(cb, maxWait = 3000) {
  const start = Date.now();
  // Koi bhi element jo page content indicate karta ho
  const selectors = [
    '[data-opai-animate]',
    '[data-opai-avatar]',
    '#hero-slide-text',
    '.hero-img',
    '[data-ns-animate]',
    'section',
    'main > *',
  ];

  const domExists = () => selectors.some(sel => document.querySelector(sel));

  const check = () => {
    if (domExists()) {
      cb();
    } else if (Date.now() - start < maxWait) {
      requestAnimationFrame(check);
    } else {
      // Timeout — try anyway
      cb();
    }
  };
  requestAnimationFrame(check);
}

function runInit(delay = 0) {
  setTimeout(() => {
    waitForVendor(() => {
>>>>>>> Stashed changes
      try {
        window.ScrollTrigger?.getAll().forEach(t => t.kill());
        window.ScrollTrigger?.clearScrollMemory?.();
      } catch(e) {}

<<<<<<< Updated upstream
      // Kill old GSAP tweens on animated elements
=======
>>>>>>> Stashed changes
      try {
        window.gsap?.killTweensOf('[data-opai-animate],[data-opai-avatar]');
      } catch(e) {}

<<<<<<< Updated upstream
      // Run all animations fresh
      try { window.__opaiInit?.(); } catch(e) { console.warn(e); }

      // Force visible after init (safety)
      forceVisible();

      // Refresh scroll triggers after short settle
=======
      try { window.__opaiInit?.(); } catch(e) { console.warn(e); }

      forceVisible();

>>>>>>> Stashed changes
      setTimeout(() => {
        try { window.ScrollTrigger?.refresh(true); } catch(e) {}
      }, 100);
    });
  }, delay);
}

<<<<<<< Updated upstream
function startParticles() {
=======
/* ─── PARTICLES — OPTIMIZED ─────────────────────────────────────────
   PEHLE: 480 infinite tweens (8 paths × 60 rects) — KILLER
   BAAD:  64 tweens only (8 paths × 8 rects) — 87% reduction
──────────────────────────────────────────────────────────────────── */
function startParticles() {
  if (window.__particlesStarted) return;
>>>>>>> Stashed changes
  if (!document.getElementById('curve-path-1')) return;
  if (typeof window.gsap === 'undefined') return;
  if (typeof window.MotionPathPlugin === 'undefined') return;

<<<<<<< Updated upstream
=======
  window.__particlesStarted = true;
>>>>>>> Stashed changes
  window.gsap.registerPlugin(window.MotionPathPlugin);

  const lerp = (c1, c2, f) => '#' + [1,3,5].map(i =>
    Math.round(parseInt(c1.slice(i,i+2),16) + (parseInt(c2.slice(i,i+2),16) - parseInt(c1.slice(i,i+2),16)) * f)
    .toString(16).padStart(2,'0')
  ).join('');

<<<<<<< Updated upstream
=======
  const PARTICLES_PER_PATH = 8;

>>>>>>> Stashed changes
  for (let n = 1; n <= 8; n++) {
    const path = document.getElementById(`curve-path-${n}`);
    if (!path) continue;
    const dur = window.gsap.utils.random(3, 6);
    const del = window.gsap.utils.random(0, 2);
<<<<<<< Updated upstream
    for (let i = 1; i <= 60; i++) {
      const rect = document.getElementById(`rect-${n}-${i}`);
      if (!rect) continue;
      rect.setAttribute('fill', lerp('#FFFFFF', '#1E212A', (i-1)/59));
      window.gsap.to(rect, {
        motionPath: { path, align: path, alignOrigin:[0.5,0.5], autoRotate:false },
        duration: dur, ease:'power1.inOut', repeat:-1, delay: del + i * 0.002,
=======

    for (let i = 1; i <= PARTICLES_PER_PATH; i++) {
      const rectIndex = Math.round((i - 1) * (60 / (PARTICLES_PER_PATH - 1)) + 1);
      const rect = document.getElementById(`rect-${n}-${Math.min(rectIndex, 60)}`);
      if (!rect) continue;
      rect.setAttribute('fill', lerp('#FFFFFF', '#1E212A', (i-1)/(PARTICLES_PER_PATH-1)));
      rect.style.willChange = 'transform';
      window.gsap.to(rect, {
        motionPath: { path, align: path, alignOrigin:[0.5,0.5], autoRotate:false },
        duration: dur, ease:'power1.inOut', repeat:-1, delay: del + i * 0.016,
>>>>>>> Stashed changes
      });
    }
  }
}

function startHeroSlider() {
  const titleEl = document.getElementById('hero-slide-text');
  const imgs    = document.querySelectorAll('#hero-image-stack .hero-img');
  if (!titleEl || imgs.length < 2) return;
  if (window.__heroSliderInterval) return;

  const slides = [
    ['Custom Web/Software Development', 'Web/Software'],
    ['SaaS Products & Platforms',       'SaaS Products'],
    ['AI & Digital Transformation',     'AI'],
    ['Dedicated Development Team',      'Dedicated'],
  ];
  let cur = 0;

  const renderWords = (text, hl) => {
    titleEl.innerHTML = '';
    const segs = hl && text.includes(hl)
      ? [{t:text.split(hl)[0],p:false},{t:hl,p:true},{t:text.split(hl)[1],p:false}]
      : [{t:text,p:false}];
    let wi = 0;
    segs.forEach(seg => {
      seg.t.split(/(\s+)/).forEach(tok => {
        if (!tok) return;
        if (/^\s+$/.test(tok)) { titleEl.appendChild(document.createTextNode(tok)); return; }
        const sp = document.createElement('span');
        sp.textContent = tok;
        sp.style.cssText = `display:inline-block;opacity:0;transform:translateX(-18px);transition:opacity 0.35s ease ${wi*60}ms,transform 0.35s ease ${wi*60}ms;${seg.p?'color:#8d59ff;':''}`;
        titleEl.appendChild(sp);
<<<<<<< Updated upstream
        const i = wi;
        setTimeout(() => { sp.style.opacity='1'; sp.style.transform='translateX(0)'; }, 30+i*60);
=======
        const ii = wi;
        setTimeout(() => { sp.style.opacity='1'; sp.style.transform='translateX(0)'; }, 30+ii*60);
>>>>>>> Stashed changes
        wi++;
      });
    });
  };

  const animateBox = (next, done) => {
    const box = document.getElementById('hero-box-wrapper');
    if (!box) {
      imgs.forEach((im,i) => { im.style.setProperty('opacity',i===next?'1':'0','important'); im.style.zIndex=i===next?'2':'0'; });
      done(); return;
    }
    box.style.transition='opacity 0.42s ease,transform 0.42s ease';
    box.style.opacity='0'; box.style.transform='translateY(50px)';
    setTimeout(() => {
      imgs.forEach((im,i) => { im.style.setProperty('opacity',i===next?'1':'0','important'); im.style.zIndex=i===next?'2':'0'; });
      box.style.transition='none'; box.style.transform='translateX(80px)'; box.style.opacity='0';
      setTimeout(() => {
        box.style.transition='opacity 0.42s ease,transform 0.42s ease';
        box.style.opacity='1'; box.style.transform='translateX(0) translateY(0)';
        setTimeout(done, 430);
      }, 30);
    }, 440);
  };

  imgs.forEach((im,i) => {
    im.style.setProperty('opacity',i===0?'1':'0','important');
    im.style.zIndex=i===0?'2':'0';
    im.style.transition='none';
  });
  renderWords(slides[0][0], slides[0][1]);

  let busy = false;
  const switchPills = (idx, prev) => {
    const pills = document.querySelectorAll('.hero-slide');
    if (!pills.length) return;
    if (pills[prev]) { pills[prev].classList.add('hidden'); pills[prev].classList.remove('flex'); }
    if (pills[idx])  { pills[idx].classList.remove('hidden'); pills[idx].classList.add('flex'); }
  };
  const goTo = (idx) => {
    if (busy) return; busy=true;
    const prev=cur; cur=idx;
    titleEl.style.transition='opacity 0.3s'; titleEl.style.opacity='0';
    switchPills(cur, prev);
    animateBox(cur, () => {
      renderWords(slides[cur][0], slides[cur][1]);
      titleEl.style.transition='opacity 0.3s'; titleEl.style.opacity='1';
      busy=false;
    });
  };
  window.__heroSliderInterval = setInterval(() => goTo((cur+1)%slides.length), 5000);
}

<<<<<<< Updated upstream
/* ═══════════════════════════════════════════════════════════════════ */
=======
/* ═══════════════════════════════════════════════════════════════════
   MAIN LAYOUT COMPONENT
═══════════════════════════════════════════════════════════════════ */
>>>>>>> Stashed changes
export default function Layout({ children }) {
  const location = useLocation();

  // ── Theme ────────────────────────────────────────────────────────
  useEffect(() => {
    const apply = t => {
      const r = document.documentElement, b = document.body;
      if (t==='light') { r.classList.add('light-theme'); r.classList.remove('dark'); b.classList.remove('dark'); }
      else { r.classList.remove('light-theme'); r.classList.add('dark'); b.classList.add('dark'); }
      try { localStorage.setItem('ezitech-theme', t); } catch {}
    };
    try { apply(localStorage.getItem('ezitech-theme')==='light'?'light':'dark'); } catch {}
  }, []);

  // ── FIRST LOAD ───────────────────────────────────────────────────
<<<<<<< Updated upstream
  useEffect(() => {
    const timers = [];

    // 1. Force visible immediately
    forceVisible();

    // 2. Wait for ALL vendors then run everything
    waitForVendor(() => {
      // Run main animations
      runInit(0);
      // Particles
      startParticles();
      // Hero slider
      startHeroSlider();
    });

    // 3. Fallback timers — agar waitForVendor slow ho
    timers.push(setTimeout(() => {
      forceVisible();
      startHeroSlider();
    }, 500));

    timers.push(setTimeout(() => {
      forceVisible();
      if (isVendorReady()) {
        runInit(0);
        startParticles();
      }
    }, 1000));

    timers.push(setTimeout(() => {
      forceVisible();
      if (isVendorReady()) {
        runInit(0);
        startParticles();
        startHeroSlider();
      }
    }, 2000));

    return () => timers.forEach(clearTimeout);
  }, []); // ← runs ONCE on mount

  // ── ROUTE CHANGE ─────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    const timers = [];

    // Stop old hero slider
    if (window.__heroSliderInterval) {
      clearInterval(window.__heroSliderInterval);
      window.__heroSliderInterval = null;
    }

    // Force visible immediately
    forceVisible();

    // Wait for React DOM to settle (1 rAF = DOM committed, 2nd rAF = painted)
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {

        waitForVendor(() => {
          runInit(80); // 80ms for React to finish rendering new page

          // Particles + slider
          timers.push(setTimeout(() => { startParticles(); }, 100));
          timers.push(setTimeout(() => { startHeroSlider(); }, 300));

          // Keep asserting visible
          [100, 300, 600, 1200].forEach(t =>
            timers.push(setTimeout(forceVisible, t))
          );
=======
  /*
    FIX: Pehle waitForVendor, phir waitForPageDOM
    
    Order:
    1. vendor.bundle.js → already loaded (sync script)
    2. React renders → Layout mounts → ye useEffect chalta hai
    3. Home.jsx ab eager import hai → DOM immediately available
    4. waitForPageDOM → confirm karta hai DOM exist karta hai
    5. Tab animations fire karo
    
    Agar kisi reason se DOM delay ho toh rAF polling se wait karta hai
  */
  useEffect(() => {
    forceVisible();

    waitForVendor(() => {
      // Vendor ready — ab page DOM ka wait karo
      waitForPageDOM(() => {
        // DOM bhi ready — ab safely animate karo
        runInit(50);
        setTimeout(() => startParticles(), 100);
        setTimeout(() => startHeroSlider(), 150);
        setTimeout(() => forceVisible(), 500);
      });
    });

    return () => {};
  }, []); // Sirf mount pe

  // ── ROUTE CHANGE ─────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    const timers = [];

    // Old hero slider stop
    if (window.__heroSliderInterval) {
      clearInterval(window.__heroSliderInterval);
      window.__heroSliderInterval = null;
    }

    // Particles reset for new page
    window.__particlesStarted = false;

    forceVisible();

    // Route change pe DOM jaldi ready hota hai (cached chunks)
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        waitForVendor(() => {
          // Route change pe DOM already ready hota hai
          // Bas ek short delay de React ke liye
          waitForPageDOM(() => {
            runInit(50);
            timers.push(setTimeout(() => startParticles(), 100));
            timers.push(setTimeout(() => startHeroSlider(), 200));
            timers.push(setTimeout(forceVisible, 300));
            timers.push(setTimeout(forceVisible, 700));
          });
>>>>>>> Stashed changes
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      timers.forEach(clearTimeout);
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <SubscribeSection />
      <Footer />

<<<<<<< Updated upstream
      {/* Theme toggle */}
=======
      {/* Theme toggle button */}
>>>>>>> Stashed changes
      <button
        type="button"
        className="theme-toggle"
        onClick={() => {
          const isLight = document.documentElement.classList.contains('light-theme');
          const next = isLight ? 'dark' : 'light';
          if (next==='light') {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
          } else {
            document.documentElement.classList.remove('light-theme');
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
          }
          try { localStorage.setItem('ezitech-theme', next); } catch {}
        }}
        aria-label="Toggle theme"
        style={{
          position:'fixed', right:'20px', bottom:'20px', zIndex:9998,
          width:'48px', height:'48px', display:'flex', alignItems:'center',
          justifyContent:'center', borderRadius:'9999px',
          border:'1px solid rgba(124,142,165,0.35)',
          background:'var(--color-background-3,#252a32)',
          boxShadow:'0 8px 24px -6px rgba(0,0,0,0.4)', cursor:'pointer'
        }}
      >
        <svg className="theme-icon-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{position:'absolute'}}>
          <circle cx="12" cy="12" r="4" stroke="var(--color-background-7,#f8f9fa)" strokeWidth="1.6"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="var(--color-background-7,#f8f9fa)" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <svg className="theme-icon-moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{position:'absolute'}}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="var(--color-background-7,#11141d)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}