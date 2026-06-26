# Ezitech React Project — Complete Developer Guide

---

## SECTION 1 — PROJECT STRUCTURE

```
ezitech-final-v2/
│
├── index.html                    🚫 TOUCH MAT KARO
├── package.json                  🚫 TOUCH MAT KARO
├── vite.config.js                🚫 TOUCH MAT KARO
├── vercel.json                   🚫 TOUCH MAT KARO
│
├── public/
│   ├── vendor.bundle.js          🚫 TOUCH MAT KARO
│   ├── assets/
│   │   ├── main.css              🚫 TOUCH MAT KARO
│   │   ├── theme.css             🚫 TOUCH MAT KARO
│   │   └── main.spa.js           🚫 TOUCH MAT KARO
│   ├── images/                   ✅ Naye images yahan daalo
│   ├── fonts/                    🚫 TOUCH MAT KARO
│   └── icons.svg                 🚫 TOUCH MAT KARO
│
└── src/
    ├── main.jsx                  🚫 TOUCH MAT KARO
    ├── index.css                 ✅ Apni custom CSS yahan
    ├── App.jsx                   ✅ Sirf route add/remove karo
    │
    ├── components/
    │   ├── Layout.jsx            🚫 TOUCH MAT KARO
    │   ├── Navbar.jsx            ✅ Nav links edit karo
    │   ├── Footer.jsx            ✅ Footer links edit karo
    │   ├── SubscribeSection.jsx  ✅ Subscribe section edit karo
    │   └── SEO.jsx               🚫 TOUCH MAT KARO (sirf use karo)
    │
    ├── hooks/
    │   └── useAnimation.js       ✅ Custom animation hooks yahan
    │
    └── pages/                    ✅ Har page yahan edit karo
        ├── Home.jsx
        ├── About.jsx
        └── ... (15 pages total)
```

### Kya touch karna aur kya nahi:

| File/Folder | Status | Reason |
|---|---|---|
| `index.html` | 🚫 | Script load order critical |
| `vendor.bundle.js` | 🚫 | 11 libraries ka merge |
| `main.css` | 🚫 | Template core CSS |
| `theme.css` | 🚫 | Dark/light variables |
| `main.spa.js` | 🚫 | Animation engine |
| `Layout.jsx` | 🚫 | Animation timing set hai |
| `SEO.jsx` | 🚫 | Sirf use karo |
| `src/index.css` | ✅ | Apni CSS yahan |
| `src/pages/*.jsx` | ✅ | Page content yahan |
| `src/App.jsx` | ✅ | Routes yahan |
| `public/images/` | ✅ | Images yahan |

---

## SECTION 2 — NAYA PAGE BANANA

### Step 1 — `src/pages/NewPage.jsx` banao:

```jsx
import SEO from '../components/SEO'

export default function NewPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description for Google search."
        url="/new-page"
      />

      {/* Page content yahan */}
      <section className="bg-background-5" style={{ paddingTop: '180px', paddingBottom: '80px' }}>
        <div className="main-container">
          <h1 className="text-is-heading-2 text-white/90" data-opai-animate data-delay="0.1">
            Page Heading
          </h1>
        </div>
      </section>
    </>
  )
}
```

### Step 2 — `src/App.jsx` mein route add karo:

```jsx
// File ke top pe lazy import add karo:
const NewPage = lazy(() => import('./pages/NewPage'))

// <Routes> ke andar add karo:
<Route path="/new-page" element={<NewPage />} />
```

**Navbar, Footer, Subscribe, Theme Toggle automatically aayenge — manually add nahi karna.**

---

## SECTION 3 — PURANA SECTION REMOVE + NAYA ADD KARNA

### Purana Section Remove Karna:

```jsx
// Home.jsx kholo — purana section find karo aur delete karo
// Example: purana "Clients" section remove karna

// ❌ DELETE karo yeh sara block:
<section className="bg-white py-16">
  <div className="main-container">
    <h2>Our Clients</h2>
    {/* ... sara content */}
  </div>
</section>
```

### CSS Remove Karna Zaroori HAI KYA?

**NAHI — CSS remove karna zaroori nahi hai.**

Reason: `main.css` mein classes specific HTML elements pe target hoti hain.
Agar woh element DOM mein nahi hai to woh CSS apply hi nahi hoti.
Performance pe practically koi fark nahi padta.

```
Purana section delete karo → CSS chhoddo → Koi masla nahi ✅
```

Sirf tab CSS hatao jab:
- Tum ne `src/index.css` mein khud kuch likha tha us section ke liye
- Woh `src/index.css` ki class ab kisi aur jagah use nahi ho rahi

### Naya Section Add Karna (Template se Copy-Paste):

**Step 1 — HTML copy karo template se**

**Step 2 — JSX mein convert karo (yeh changes karo):**

| HTML | JSX mein change karo |
|------|---------------------|
| `class="..."` | `className="..."` |
| `style="color:red;font-size:14px"` | `style={{ color: 'red', fontSize: '14px' }}` |
| `<!-- comment -->` | `{/* comment */}` |
| `stroke-linecap="round"` | `strokeLinecap="round"` |
| `stroke-linejoin="round"` | `strokeLinejoin="round"` |
| `stroke-width="2"` | `strokeWidth="2"` |
| `fill-rule="evenodd"` | `fillRule="evenodd"` |
| `clip-rule="evenodd"` | `clipRule="evenodd"` |
| `clip-path="..."` | `clipPath="..."` |
| `for="input-id"` | `htmlFor="input-id"` |
| `tabindex="0"` | `tabIndex="0"` |
| `fetchpriority="high"` | `fetchPriority="high"` |
| `<img src="">` | `<img src="" />` (self-close) |
| `<input type="">` | `<input type="" />` (self-close) |
| `<br>` | `<br />` |

**Step 3 — Style convert karo:**

```html
<!-- HTML style string -->
<div style="padding-top:180px; background-color:#13171e; max-width:1200px; border-radius:16px">
```

```jsx
{/* JSX style object — har property camelCase, value quotes mein */}
<div style={{
  paddingTop: '180px',
  backgroundColor: '#13171e',
  maxWidth: '1200px',
  borderRadius: '16px'
}}>
```

**Step 4 — Animation attributes same rakho (koi change nahi):**

```jsx
{/* Yeh attributes bilkul same rakho — main.spa.js inhe handle karta hai */}
<div data-opai-animate data-delay="0.2">
<div data-opai-avatar data-avatar-direction="left">
<div data-opai-border-expand>
<span data-counter data-number="500" data-speed="1000">
```

---

## SECTION 4 — ANIMATIONS

### 4.1 Built-in Animations — Sirf Attribute Lagao

```jsx
{/* ── Fade + slide (scroll pe trigger hoga) ── */}
<div data-opai-animate data-delay="0.1">First element</div>
<div data-opai-animate data-delay="0.2">Second element</div>
<div data-opai-animate data-delay="0.3">Third element</div>

{/* ── Page load pe instantly (scroll wait nahi) ── */}
<div data-opai-animate data-instant data-delay="0.1">Hero heading</div>

{/* ── Direction control ── */}
<div data-opai-animate data-direction="left">Left se slide</div>
<div data-opai-animate data-direction="right">Right se slide</div>
<div data-opai-animate data-direction="up">Upar se slide</div>
<div data-opai-animate data-direction="down">Neeche se slide</div>

{/* ── Speed control ── */}
<div data-opai-animate data-duration="0.4">Fast animation</div>
<div data-opai-animate data-duration="1.5">Slow animation</div>

{/* ── Avatar/image directional slide ── */}
<img data-opai-avatar data-avatar-direction="left" data-avatar-offset="60" data-avatar-delay="0.1" src="/images/img.jpg" alt="" />
<img data-opai-avatar data-avatar-direction="right" data-avatar-delay="0.2" src="/images/img.jpg" alt="" />
<img data-opai-avatar data-avatar-scale="0.5" data-avatar-delay="0.3" src="/images/img.jpg" alt="" />

{/* ── Line/border expand ── */}
<div data-opai-border-expand className="h-px w-full bg-white/20"></div>

{/* ── Number counter ── */}
<span data-counter data-number="500" data-speed="1000">0</span>
<span data-counter data-number="10000" data-speed="2000">0</span>
<span data-counter data-number="99" data-speed="800">0</span>
```

### 4.2 Custom GSAP Animation (useGSAP hook)

```jsx
import { useGSAP } from '../hooks/useAnimation'

export default function MySection() {
  const ref = useGSAP((gsap, ScrollTrigger) => {

    // Stagger cards animation
    gsap.from(ref.current.querySelectorAll('.card'), {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      }
    })

    // Scale animation
    gsap.from('.my-image', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.7)',
      scrollTrigger: { trigger: '.my-image', start: 'top 85%', once: true }
    })

    // Timeline
    const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    tl.from('.title', { y: 40, opacity: 0, duration: 0.6 })
      .from('.subtitle', { y: 30, opacity: 0, duration: 0.5 }, '-=0.2')
      .from('.button', { scale: 0.9, opacity: 0, duration: 0.4 }, '-=0.1')
  })

  return (
    <section ref={ref} className="bg-background-5" style={{ padding: '80px 0' }}>
      <h2 className="title">Heading</h2>
      <p className="subtitle">Description</p>
      <button className="button">CTA</button>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
    </section>
  )
}
```

### 4.3 Swiper Slider

```jsx
import { useSwiper } from '../hooks/useAnimation'

export default function MySlider() {
  useSwiper('.my-slider', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      480:  { slidesPerView: 1 },
      768:  { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  })

  return (
    <div className="my-slider swiper overflow-hidden">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  )
}
```

### 4.4 Dosre Template se Complex Animation Copy Karna

```jsx
import { useAnimation } from '../hooks/useAnimation'

export default function MyPage() {
  useAnimation(() => {
    // ⚠️ window.gsap use karo — import gsap mat karo
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (!gsap) return

    // Template ki JS yahan paste karo — same rahegi
    // Example: 3D tilt effect
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(card, {
          rotationY: x * 20,
          rotationX: -y * 20,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 500,
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 })
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger?.getAll().forEach(t => t.kill())
    }
  })

  return (
    <section>
      <div className="tilt-card">Card</div>
    </section>
  )
}
```

### 4.5 Dosre Template ki Vendor JS Library Use Karna

Agar naye template ki apni JS library hai (jaise `three.js`, `particles.js`):

```
1. File copy karo: public/vendor/three.min.js
2. index.html mein add karo vendor.bundle.js ke BAAD:
   <script src="/vendor/three.min.js"></script>
3. Component mein use karo:
   const THREE = window.THREE
```

---

## SECTION 5 — CSS — KAISE USE KAREIN

### 5.1 Template CSS Classes (already available)

```jsx
{/* ── Backgrounds ── */}
<div className="bg-background-5">    {/* #13171e — Main dark bg */}
<div className="bg-background-6">    {/* Slightly lighter dark */}
<div className="bg-background-7">    {/* White/light */}
<div className="bg-background-14">   {/* Card dark bg */}
<div className="bg-white">           {/* Pure white */}

{/* ── Typography sizes ── */}
<h1 className="text-is-heading-1">   {/* Biggest — hero */}
<h2 className="text-is-heading-2">   {/* Section headings */}
<h3 className="text-is-heading-3">
<h4 className="text-is-heading-4">
<h5 className="text-is-heading-5">
<p  className="text-tagline-2">      {/* Body text */}
<p  className="text-tagline-3">      {/* Small text */}
<p  className="text-tagline-4">      {/* Extra small */}
<p  className="text-tagline-5">      {/* Tiny */}

{/* ── Font families ── */}
<p className="font-sora">
<p className="font-inter-tight">
<p className="font-ibm-plex-mono">
<p className="font-instrument-serif">
<p className="font-manrope">

{/* ── Text colors ── */}
<p className="text-white/90">        {/* White 90% */}
<p className="text-white/60">        {/* White 60% — body text */}
<p className="text-white/40">        {/* White 40% — muted */}
<p className="text-background-7">    {/* Light text */}
<p className="text-background-11">   {/* Accent text */}

{/* ── Layout ── */}
<div className="main-container">     {/* Max-width centered — ALWAYS use karo */}

{/* ── Borders ── */}
<div className="border border-stroke-3/20">
<div className="border border-stroke-1/11">

{/* ── Brand colors ── */}
<span className="fill-opai-blue">    {/* #8d59ff purple */}
```

### 5.2 Tailwind — Important Rule

```jsx
{/* ❌ KAAM NAHI KARTA — Arbitrary values */}
<div className="pt-[180px]">
<div className="max-w-[600px]">
<div className="text-[14px]">
<div className="bg-[#8d59ff]">
<div className="w-[350px]">

{/* ✅ SAHI — Inline style */}
<div style={{ paddingTop: '180px' }}>
<div style={{ maxWidth: '600px' }}>
<div style={{ fontSize: '14px' }}>
<div style={{ backgroundColor: '#8d59ff' }}>
<div style={{ width: '350px' }}>

{/* ✅ SAHI — Standard Tailwind (yeh kaam karti hain) */}
<div className="pt-10 pb-8 px-6">
<div className="flex items-center justify-between gap-4">
<div className="grid grid-cols-12 gap-6">
<div className="hidden lg:block md:flex">
<div className="w-full h-screen min-h-[0]">
<div className="rounded-lg overflow-hidden">
<div className="text-white font-bold uppercase">
<div className="opacity-50 transition-all duration-300">
<div className="hover:opacity-100 group-hover:text-white">
<div className="absolute relative inset-0 z-10">
```

### 5.3 Naya CSS Add Karna — 3 Options

**Option A — Inline Style (Simple cheezein):**
```jsx
<div style={{ paddingTop: '180px', color: '#8d59ff', borderRadius: '16px' }}>
```

**Option B — Page Specific CSS (`<style>` tag):**
```jsx
export default function MyPage() {
  return (
    <>
      <style>{`
        .my-card { border: 1px solid rgba(141,89,255,0.3); border-radius: 16px; }
        .my-card:hover { transform: translateY(-4px); transition: transform 0.3s ease; }
        .my-title { background: linear-gradient(135deg, #8d59ff, #227eff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>

      <section>
        <h2 className="my-title">Gradient Title</h2>
        <div className="my-card">Card</div>
      </section>
    </>
  )
}
```

**Option C — Global CSS (`src/index.css`) — Recommended:**
```css
/* src/index.css mein likho */

/* Custom button */
.btn-custom {
  background: linear-gradient(135deg, #8d59ff, #227eff);
  border-radius: 12px;
  padding: 12px 24px;
  color: white;
  transition: opacity 0.3s ease;
}
.btn-custom:hover { opacity: 0.85; }

/* Custom card */
.custom-card {
  border: 1px solid rgba(141, 89, 255, 0.25);
  border-radius: 16px;
  background: rgba(141, 89, 255, 0.05);
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.custom-card:hover {
  transform: translateY(-4px);
  border-color: rgba(141, 89, 255, 0.5);
}
```

```jsx
{/* Phir JSX mein use karo */}
<div className="custom-card">Content</div>
<button className="btn-custom">Click Me</button>
```

⚠️ `public/assets/main.css` bilkul mat chhuo — woh template ka core CSS hai.

---

## SECTION 6 — IMAGES

```jsx
{/* public/images/ folder se use karo */}
<img src="/images/hero.jpg" alt="Hero" />
<img src="/images/logo/ezitech-nav.png" alt="Logo" />
<img src="/images/gradient/opai-2.png" alt="" loading="lazy" />

{/* Naya image add karna: */}
{/* 1. File daalo → public/images/my-photo.jpg */}
{/* 2. Use karo → */}
<img src="/images/my-photo.jpg" alt="Description" className="w-full object-cover" style={{ borderRadius: '16px' }} />

{/* Background image */}
<div style={{ backgroundImage: 'url(/images/bg-pattern.jpg)', backgroundSize: 'cover' }}>
```

---

## SECTION 7 — LINKS

```jsx
import { Link } from 'react-router-dom'

{/* ✅ Internal — React Router Link */}
<Link to="/about">About Us</Link>
<Link to="/services">Services</Link>
<Link to="/contact" className="btn-custom">Contact</Link>

{/* ✅ External */}
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

{/* ✅ Phone / Email */}
<a href="tel:+923377777860">+92 337 7777860</a>
<a href="mailto:info@ezitech.org">info@ezitech.org</a>

{/* ❌ GALAT — <a> se internal pages pe mat jao */}
<a href="/about">About</a>  {/* Page reload hoga */}
```

---

## SECTION 8 — SEO

```jsx
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Ezitech ke baare mein — software development, AI solutions."
        url="/about"
        image="/images/og-about.jpg"   {/* Optional — social share image */}
      />
      {/* content */}
    </>
  )
}

{/* Pages aur unke SEO: */}
Home:          title="Home"
About:         title="About Us"
Services:      title="Services"
Contact:       title="Contact Us"
Blog:          title="Blog"
Case Studies:  title="Case Studies"
```

---

## SECTION 9 — CODE OPTIMIZE KARNA

### Array use karo — repeat mat karo:

```jsx
{/* ❌ Wrong — same structure bar bar */}
<div className="card" data-opai-animate data-delay="0.1">
  <h3>Web Dev</h3><p>Fast websites</p>
</div>
<div className="card" data-opai-animate data-delay="0.2">
  <h3>Mobile</h3><p>iOS & Android</p>
</div>

{/* ✅ Sahi — array + map */}
const services = [
  { title: 'Web Dev',   desc: 'Fast websites',   icon: '/images/icons/web.svg' },
  { title: 'Mobile',    desc: 'iOS & Android',    icon: '/images/icons/mobile.svg' },
  { title: 'AI',        desc: 'Smart automation', icon: '/images/icons/ai.svg' },
]

{services.map((item, i) => (
  <div key={item.title} className="card" data-opai-animate data-delay={`0.${i + 1}`}>
    <img src={item.icon} alt={item.title} />
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
))}
```

### Reusable component banao:

```jsx
{/* Ek baar define karo — same file mein ya alag component file mein */}
function ServiceCard({ title, desc, icon, delay }) {
  return (
    <div
      className="bg-background-6 rounded-xl p-6 border border-stroke-1/11"
      data-opai-animate
      data-delay={delay}
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-is-heading-5 text-white/90 font-normal">{title}</h3>
      <p className="text-tagline-2 text-white/60 mt-2">{desc}</p>
    </div>
  )
}

{/* Baar baar use karo */}
<ServiceCard title="Web Dev"  desc="Fast websites"   icon="/images/icons/web.svg"    delay="0.1" />
<ServiceCard title="Mobile"   desc="iOS & Android"   icon="/images/icons/mobile.svg" delay="0.2" />
<ServiceCard title="AI"       desc="Automation"      icon="/images/icons/ai.svg"     delay="0.3" />
```

---

## SECTION 10 — COMMON MISTAKES

```jsx
{/* ❌ HTML comments JSX mein crash karte hain */}
<!-- This crashes -->

{/* ✅ JSX comments */}
{/* This works */}

{/* ❌ import gsap mat karo — crash hoga */}
import gsap from 'gsap'
import { gsap } from 'gsap'

{/* ✅ window se access karo */}
const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger

{/* ❌ Arbitrary Tailwind kaam nahi karta */}
<div className="pt-[150px] max-w-[800px] text-[#8d59ff]">

{/* ✅ Inline style */}
<div style={{ paddingTop: '150px', maxWidth: '800px', color: '#8d59ff' }}>

{/* ❌ Self-closing tags HTML style */}
<img src="/img.jpg">
<br>
<input type="text">

{/* ✅ JSX mein self-close */}
<img src="/img.jpg" />
<br />
<input type="text" />

{/* ❌ onclick string */}
<button onclick="myFn()">Click</button>

{/* ✅ JSX event handler */}
<button onClick={myFn}>Click</button>
<button onClick={() => alert('hi')}>Click</button>

{/* ❌ Internal link a tag se */}
<a href="/about">About</a>

{/* ✅ React Router Link */}
<Link to="/about">About</Link>
```

---

## SECTION 11 — QUICK REFERENCE

```
Brand Purple:     #8d59ff
Brand Blue:       #227eff
Dark Background:  #13171e
Card Background:  #1a1f28
White Text:       rgba(255,255,255,0.9)
Muted Text:       rgba(255,255,255,0.6)

Main Container:   className="main-container"
Page top padding: style={{ paddingTop: '180px' }}
Section padding:  style={{ paddingTop: '80px', paddingBottom: '80px' }}

Animation delays:
  1st element → data-delay="0.1"
  2nd element → data-delay="0.2"
  3rd element → data-delay="0.3"
  (0.1 ka increment)

New page checklist:
  ✅ src/pages/NewPage.jsx banao
  ✅ SEO component add karo
  ✅ App.jsx mein lazy import add karo
  ✅ App.jsx mein <Route> add karo
  ✅ Navbar.jsx mein link add karo (agar navbar mein chahiye)

Section remove checklist:
  ✅ Page JSX mein section ka code delete karo
  ✅ CSS hatana ZAROORI NAHI — chhod sakte ho
  ✅ main.css BILKUL mat chhuo
```

---

## SECTION 12 — PROJECT COMMANDS

```bash
# Install (pehli baar ya naya PC pe)
npm install

# Development server
npm run dev
# Browser: http://localhost:5173

# Production build
npm run build
# Output: dist/ folder → Netlify / Vercel pe deploy karo

# Preview production build locally
npm run preview
```

---

## SECTION 13 — LARAVEL BACKEND CONNECT KARNA

```jsx
// API call example — fetch se
const response = await fetch('http://localhost:8000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
const data = await response.json()

// Environment variable use karo URL ke liye:
// .env file banao project root mein:
// VITE_API_URL=http://localhost:8000

// JSX mein:
const API = import.meta.env.VITE_API_URL
const response = await fetch(`${API}/api/contact`, { ... })
```

---

*Ezitech React v5.0 — Complete Developer Reference*
