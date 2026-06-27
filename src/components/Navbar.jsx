import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ─── Arrow icon ───────────────────────────────────────────────────── */
const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
      className="nav-arrow-path stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ─── Nav hover glow decorators ────────────────────────────────────── */
const NavGlow = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="nav-item-line absolute top-0 left-1/2 h-[0.9px] w-0 -translate-x-1/2 rounded-full bg-radial-[circle,#FFFFFF_0%,#7C8EA52E_100%] opacity-100 transition-all duration-500 ease-out group-hover/nav-item:w-42" />
    <div className="nav-item-gradient absolute top-0 left-1/2 h-[89%] w-[calc(100%+120px)] -translate-x-1/2 bg-radial-[circle_at_center] from-[#8D59FF66] from-40% to-[#8D59FF00] to-100% opacity-0 blur-[14px] transition-all duration-500 ease-out group-hover/nav-item:opacity-80" />
  </div>
)

/* ─── Dropdown item ─────────────────────────────────────────────────── */
function DropItem({ to, icon, label, desc }) {
  return (
    <li>
      <Link to={to} className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300">
        <div className="group-hover:bg-background-3 absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-lg opacity-0 transition-all duration-400 group-hover:opacity-100" />
        {icon && <div className="relative z-10 mt-0.5">{icon}</div>}
        <div className="relative z-10 space-y-0.5">
          <p className="text-tagline-2 font-sora text-background-7 font-normal">{label}</p>
          {desc && <p className="text-tagline-4 text-background-7/60 font-sora">{desc}</p>}
        </div>
      </Link>
    </li>
  )
}

/* ─── SVG Icons ─────────────────────────────────────────────────────── */
const I = {
  story: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 16.5A7.5 7.5 0 109 1.5a7.5 7.5 0 000 15z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12V8.25M9 6h.0075" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  uni:   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l7.5 3.75L9 9 1.5 5.25 9 1.5z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.5 12.75L9 16.5l7.5-3.75M1.5 9L9 12.75 16.5 9" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  team:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13 15.75v-1.5a3 3 0 00-3-3H4.75a3 3 0 00-3 3v1.5" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.375 8.25a3 3 0 100-6 3 3 0 000 6z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.25 15.75v-1.5a3 3 0 00-2.25-2.9" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  doc:   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5.25 1.5h6L15 5.25v9.75a1.5 1.5 0 01-1.5 1.5h-8.25A1.5 1.5 0 013.75 15V3a1.5 1.5 0 011.5-1.5z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 1.5v3.75h3.75M6.75 9.75h4.5M6.75 12.75h4.5" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  bag:   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 6H3C2.17 6 1.5 6.67 1.5 7.5V15C1.5 15.83 2.17 16.5 3 16.5H15C15.83 16.5 16.5 15.83 16.5 15V7.5C16.5 6.67 15.83 6 15 6Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V4.5C12 3.67 11.33 3 10.5 3H7.5C6.67 3 6 3.67 6 4.5V6" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  star:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L11.32 6.2L16.5 6.95L12.75 10.6L13.64 15.77L9 13.33L4.37 15.77L5.25 10.6L1.5 6.95L6.68 6.2L9 1.5Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  help:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.82 6.75C7.37 5.24 9.32 4.54 10.63 5.28C11.94 6.03 12.16 7.71 11.19 8.5C10.65 8.93 8.94 9.75 8.94 9.75" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12.75H9.0075" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  users: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13 15.75V14.25C13 12.73 11.77 11.25 10 11.25H4.75C2.98 11.25 1.75 12.73 1.75 14.25V15.75" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.375 8.25C9.03 8.25 10.375 6.91 10.375 5.25C10.375 3.59 9.03 2.25 7.375 2.25C5.72 2.25 4.375 3.59 4.375 5.25C4.375 6.91 5.72 8.25 7.375 8.25Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.25 15.75v-1.5c0-.95-.65-1.76-1.5-2.12" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.5 2.35c.85.35 1.5 1.17 1.5 2.12s-.65 1.77-1.5 2.12" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function Navbar() {
  const location            = useLocation()
  const [activeMenu, setActiveMenu]   = useState(null)  // 'about' | 'company' | 'services'
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const [scrolled, setScrolled]       = useState(false)
  const timerRef = useRef(null)

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false)
    setMobileSubmenu(null)
    setActiveMenu(null)
  }, [location.pathname])

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* Scroll header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Desktop dropdown hover */
  const onEnter = (menu) => {
    clearTimeout(timerRef.current)
    setActiveMenu(menu)
  }
  const onLeave = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  /* Mobile submenu toggle */
  const toggleMobile = (menu) =>
    setMobileSubmenu((p) => (p === menu ? null : menu))

  return (
    <>
      {/* ═══════════ DESKTOP NAV ═══════════ */}
      <header>
        <nav className={`bg-background-2/15 header-one border-stroke-3/18 fixed top-6 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-[15px] border py-1.5 pr-5 pl-2 backdrop-blur-[80px] md:max-w-[640px] lg:max-w-[818px] lg:gap-12 lg:py-0 lg:pr-1.5 lg:pl-1.5 xl:max-w-[1024px] 2xl:max-w-[1290px] ${scrolled ? 'scroll-header' : ''}`}>

          {/* Logo */}
          <Link to="/" className="inline-flex items-center rounded-md bg-white px-2 py-1" aria-label="Ezitech home">
            <img src="/images/logo/ezitech-nav.png" alt="Ezitech" style={{ height: '16px', width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop links */}
          <ul className="relative hidden items-center gap-6 lg:flex lg:gap-8">

            {/* Home */}
            <li className="nav-link-item group/nav-item relative py-4">
              <NavGlow />
              <Link to="/" className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Home</span>
              </Link>
            </li>

            {/* About */}
            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'about' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('about')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">About</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              {/* Bridge */}
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[300px] -translate-x-1/2 bg-transparent opacity-0" />
              {/* Dropdown */}
              <div id="about-mega-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[300px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'about' ? 'active' : ''}`}>
                <ul className="w-full space-y-2">
                  <DropItem to="/about" icon={I.story} label="Our Story" />
                  <DropItem to="/about" icon={I.uni}   label="University Collaborations" />
                  <DropItem to="/team"  icon={I.team}  label="Our Team" />
                  <DropItem to="/about" icon={I.doc}   label="MoUs" />
                </ul>
              </div>
            </li>

            {/* Company */}
            <li className={`nav-link-item group/nav-item nav-item relative py-4 ${activeMenu === 'company' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('company')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Company</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[280px] -translate-x-1/2 bg-transparent opacity-0" />
              <div id="company-list-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[280px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'company' ? 'active' : ''}`}>
                <ul className="w-full space-y-2">
                  <DropItem to="/careers"    icon={I.bag}   label="Careers" />
                  <DropItem to="#"           icon={I.users} label="Partners" />
                  <DropItem to="/case-study" icon={I.star}  label="Success Stories" />
                  <DropItem to="#"           icon={I.help}  label="FAQs" />
                </ul>
              </div>
            </li>

            {/* Services mega menu */}
            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'services' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('services')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Services</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[980px]" />
              <div id="services-mega-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-2xl border p-4 lg:w-[980px] ${activeMenu === 'services' ? 'active' : ''}`}>
                <div className="grid grid-cols-12 gap-x-5 gap-y-6">
                  {/* Col 1 */}
                  <div className="col-span-12 space-y-1 sm:col-span-6 lg:col-span-4">
                    {[
                      { icon: 'M8 6L2 12l6 6M16 6l6 6-6 6', label: 'Web Development',    desc: 'Fast, scalable websites & web apps.' },
                      { icon: 'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2', label: 'Mobile App Development', desc: 'iOS & Android apps that scale.' },
                      { icon: 'M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z', label: 'Custom Software', desc: 'Tailored systems for your business.' },
                      { icon: 'M6 16a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0118 16H6z', label: 'SaaS Products', desc: 'Cloud platforms built to grow.' },
                    ].map(({ icon, label, desc }) => (
                      <Link key={label} to="/services" className="group/card relative flex items-start gap-3 rounded-xl p-2 transition-all duration-300">
                        <div className="group-hover/card:bg-background-3 absolute inset-0 z-0 rounded-xl opacity-0 transition-all duration-400 group-hover/card:opacity-100" />
                        <span className="relative z-10 mt-0.5 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d={icon} className="!stroke-background-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div className="relative z-10">
                          <p className="text-tagline-2 text-background-7 font-sora font-medium leading-tight">{label}</p>
                          <p className="text-tagline-4 text-background-7/60 font-sora">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* Col 2 */}
                  <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="space-y-1">
                      {[
                        { icon: 'M12 2v4M12 18v4M2 12h4M18 12h4', label: 'AI & Automation',   desc: 'Automate workflows with smart AI.' },
                        { icon: 'M12 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19 18a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM10.5 7L6.5 16M13.5 7l4 9', label: 'Machine Learning', desc: 'Models that learn from your data.' },
                        { icon: 'M12 19l7-7a2.8 2.8 0 00-4-4l-7 7-1 5 5-1z', label: 'UI/UX Design',       desc: 'Clean, intuitive product design.' },
                        { icon: 'M3 11l18-5v12L3 13v4H3z', label: 'Digital Marketing',  desc: 'SEO, ads & growth campaigns.' },
                      ].map(({ icon, label, desc }) => (
                        <Link key={label} to="/services" className="group/card relative flex items-start gap-3 rounded-xl p-2 transition-all duration-300">
                          <div className="group-hover/card:bg-background-3 absolute inset-0 z-0 rounded-xl opacity-0 transition-all duration-400 group-hover/card:opacity-100" />
                          <span className="relative z-10 mt-0.5 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                              <path d={icon} className="!stroke-background-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <div className="relative z-10">
                            <p className="text-tagline-2 text-background-7 font-sora font-medium leading-tight">{label}</p>
                            <p className="text-tagline-4 text-background-7/60 font-sora">{desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 flex">
                      <Link to="/contact" className="group bg-background-7 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-[13px] transition-all duration-300">
                        <div className="h-full max-h-5 overflow-hidden">
                          <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 group-hover:-translate-y-[105%]">Build Custom Software</span>
                          <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 group-hover:-translate-y-[105%]">Build Custom Software</span>
                        </div>
                        <span className="bg-background-6 flex size-6 items-center justify-center rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75 13.5L11.25 9L6.75 4.5" className="stroke-background-10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* Col 3 */}
                  <div className="col-span-12 lg:col-span-4">
                    <Link to="/contact" className="relative mb-2 flex h-24 w-full flex-col justify-end overflow-hidden rounded-xl p-3"
                      style={{ background: 'radial-gradient(130% 130% at 100% 0%, #8d59ff 0%, #227eff 40%, #11141d 100%)' }}>
                      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(255,255,255,0.7) 0, transparent 45%)' }} />
                      <p className="relative z-10 font-sora text-tagline-2 font-semibold text-white">Start your project</p>
                      <p className="relative z-10 font-sora text-tagline-4 text-white/80">Let's build together.</p>
                    </Link>
                    {[
                      { icon: 'M4 7h16M4 12h16M4 17h10', label: 'ERP & CRM Products', desc: 'ERP, POS, CRM & HMS solutions.' },
                      { icon: 'M12 16V4M7 9l5-5 5 5M5 20h14', label: 'Dedicated Team', desc: 'Hire a dedicated dev team.' },
                    ].map(({ icon, label, desc }) => (
                      <Link key={label} to="/services" className="group/card relative flex items-start gap-3 rounded-xl p-2 transition-all duration-300">
                        <div className="group-hover/card:bg-background-3 absolute inset-0 z-0 rounded-xl opacity-0 transition-all duration-400 group-hover/card:opacity-100" />
                        <span className="relative z-10 mt-0.5 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d={icon} className="!stroke-background-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div className="relative z-10">
                          <p className="text-tagline-2 text-background-7 font-sora font-medium leading-tight">{label}</p>
                          <p className="text-tagline-4 text-background-7/60 font-sora">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* Simple links */}
            {[
              { to: '/case-study', label: 'Portfolio' },
              { to: '#',          label: 'Internships' },
              { to: '/blog',      label: 'Blog' },
              { to: '#',          label: 'LMS' },
            ].map(({ to, label }) => (
              <li key={label} className="nav-link-item group/nav-item relative py-4">
                <NavGlow />
                <Link to={to} className="nav-link relative z-5 flex items-center gap-1.5">
                  <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Link to="/contact" className="group bg-background-7 relative flex items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-transparent px-6 py-[11px] transition-all duration-300 ease-in-out">
                <div className="h-full max-h-5 overflow-hidden">
                  <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Request Custom Software</span>
                  <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Request Custom Software</span>
                </div>
              </Link>
            </div>
            <button className="nav-hamburger flex cursor-pointer flex-col items-end justify-center space-y-2 lg:hidden"
              onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span className="bg-background-7 block h-px w-9" />
              <span className="bg-background-7 block h-px w-6" />
            </button>
          </div>
        </nav>

        {/* ═══════════ MOBILE SIDEBAR ═══════════ */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[9998] bg-black/50 xl:hidden" onClick={() => setMobileOpen(false)} />
        )}
        <aside className={`sidebar border-stroke-3/18 bg-background-6 fixed top-0 right-0 z-[9999] h-screen w-full border-l transition-all duration-300 sm:w-1/2 xl:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-4 p-5 sm:p-8 lg:p-9">
            <div className="flex items-center justify-between">
              <Link to="/" className="inline-flex items-center rounded-md bg-white px-2 py-1" onClick={() => setMobileOpen(false)}>
                <img src="/images/logo/ezitech-nav.png" alt="Ezitech" style={{ height: '18px', width: 'auto' }} />
              </Link>
              <button className="relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 transition-colors duration-200 hover:bg-white/20"
                onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <span className="absolute block h-0.5 w-4 rotate-45 bg-white/90" />
                <span className="absolute block h-0.5 w-4 -rotate-45 bg-white/90" />
              </button>
            </div>

            <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="font-sora text-tagline-2 block py-2.5 font-normal text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>Home</Link>
                </li>

                {/* Mobile accordion items */}
                {[
                  { key: 'about', label: 'About', links: [['Our Story','/about'],['University Collaborations','/about'],['Our Team','/team'],['MoUs','/about']] },
                  { key: 'company', label: 'Company', links: [['Careers','/careers'],['Partners','#'],['Success Stories','/case-study'],['FAQs','#']] },
                ].map(({ key, label, links }) => (
                  <li key={key} className="space-y-2">
                    <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                      onClick={() => toggleMobile(key)}>
                      <span className="font-sora text-tagline-2 font-normal text-white/90">{label}</span>
                      <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === key ? 'rotate-90' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {mobileSubmenu === key && (
                      <ul>
                        {links.map(([l, t]) => (
                          <li key={l}>
                            <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                              onClick={() => setMobileOpen(false)}>{l}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Mobile Services */}
                <li className="space-y-2">
                  <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                    onClick={() => toggleMobile('services')}>
                    <span className="font-sora text-tagline-2 font-normal text-white/90">Services</span>
                    <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === 'services' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'services' && (
                    <ul>
                      <li><Link to="/services" className="text-tagline-3 ml-4 block py-1.5 font-semibold text-white/90" onClick={() => setMobileOpen(false)}>Software Development</Link></li>
                      {['Web Development','Mobile App Development','Custom Software Development','SaaS Development'].map(l => (
                        <li key={l}><Link to="/services" className="text-tagline-3 ml-7 block py-1.5 font-normal text-white/70 hover:text-white/90" onClick={() => setMobileOpen(false)}>{l}</Link></li>
                      ))}
                      <li><Link to="/services" className="text-tagline-3 ml-4 block py-1.5 font-semibold text-white/90" onClick={() => setMobileOpen(false)}>AI Solutions</Link></li>
                      {['AI & Automation','Machine Learning','Chatbot Development'].map(l => (
                        <li key={l}><Link to="/services" className="text-tagline-3 ml-7 block py-1.5 font-normal text-white/70 hover:text-white/90" onClick={() => setMobileOpen(false)}>{l}</Link></li>
                      ))}
                      <li><Link to="/services" className="text-tagline-3 ml-4 block py-1.5 font-semibold text-white/90" onClick={() => setMobileOpen(false)}>Design & Marketing</Link></li>
                      {['UI/UX Design','Digital Marketing','SEO Services'].map(l => (
                        <li key={l}><Link to="/services" className="text-tagline-3 ml-7 block py-1.5 font-normal text-white/70 hover:text-white/90" onClick={() => setMobileOpen(false)}>{l}</Link></li>
                      ))}
                      <li><Link to="/services" className="text-tagline-3 ml-4 block py-1.5 font-semibold text-white/90" onClick={() => setMobileOpen(false)}>Products</Link></li>
                      {['ERP Solution','POS System','CRM Solution','Hospital Management System'].map(l => (
                        <li key={l}><Link to="/services" className="text-tagline-3 ml-7 block py-1.5 font-normal text-white/70 hover:text-white/90" onClick={() => setMobileOpen(false)}>{l}</Link></li>
                      ))}
                      <li className="mt-3">
                        <Link to="/contact" className="text-tagline-3 ml-4 inline-block rounded-md bg-background-7 px-4 py-2 font-medium text-background-13" onClick={() => setMobileOpen(false)}>Build Custom Software</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {[['Portfolio','/case-study'],['Internships','#'],['Blog','/blog'],['LMS','#']].map(([l,t]) => (
                  <li key={l}>
                    <Link to={t} className="font-sora text-tagline-2 block py-2.5 font-normal text-white/90 hover:text-white" onClick={() => setMobileOpen(false)}>{l}</Link>
                  </li>
                ))}

                <li className="pt-4">
                  <Link to="/contact" className="font-ibm-plex-mono text-tagline-2 block rounded-md bg-background-7 px-5 py-3 text-center font-medium text-background-13" onClick={() => setMobileOpen(false)}>Request Custom Software</Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </header>
    </>
  )
}
