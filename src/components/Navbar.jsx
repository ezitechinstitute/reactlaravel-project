import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
      className="nav-arrow-path stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NavGlow = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="nav-item-line absolute top-0 left-1/2 h-[0.9px] w-0 -translate-x-1/2 rounded-full bg-radial-[circle,#FFFFFF_0%,#7C8EA52E_100%] opacity-100 transition-all duration-500 ease-out group-hover/nav-item:w-42" />
    <div className="nav-item-gradient absolute top-0 left-1/2 h-[89%] w-[calc(100%+120px)] -translate-x-1/2 bg-radial-[circle_at_center] from-[#8D59FF66] from-40% to-[#8D59FF00] to-100% opacity-0 blur-[14px] transition-all duration-500 ease-out group-hover/nav-item:opacity-80" />
  </div>
)

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

function SimpleDropItem({ to, label }) {
  return (
    <li>
      <Link to={to} className="group relative block rounded-[10px] px-3 py-2.5 transition-all duration-300">
        <div className="group-hover:bg-background-3 absolute inset-0 z-0 rounded-lg opacity-0 transition-all duration-400 group-hover:opacity-100" />
        <p className="text-tagline-2 font-sora text-background-7 relative z-10 font-normal">{label}</p>
      </Link>
    </li>
  )
}

const I = {
  story: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 16.5A7.5 7.5 0 109 1.5a7.5 7.5 0 000 15z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12V8.25M9 6h.0075" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  team:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13 15.75v-1.5a3 3 0 00-3-3H4.75a3 3 0 00-3 3v1.5" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.375 8.25a3 3 0 100-6 3 3 0 000 6z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.25 15.75v-1.5a3 3 0 00-2.25-2.9" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  bag:   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 6H3C2.17 6 1.5 6.67 1.5 7.5V15C1.5 15.83 2.17 16.5 3 16.5H15C15.83 16.5 16.5 15.83 16.5 15V7.5C16.5 6.67 15.83 6 15 6Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V4.5C12 3.67 11.33 3 10.5 3H7.5C6.67 3 6 3.67 6 4.5V6" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  star:  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L11.32 6.2L16.5 6.95L12.75 10.6L13.64 15.77L9 13.33L4.37 15.77L5.25 10.6L1.5 6.95L6.68 6.2L9 1.5Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  process: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5l7.5 3.75L9 9 1.5 5.25 9 1.5z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.5 12.75L9 16.5l7.5-3.75M1.5 9L9 12.75 16.5 9" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  heart: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 15.75L3.75 10.5C3.07 9.82 2.64 8.94 2.64 7.97C2.64 6.01 4.24 4.41 6.2 4.41C7.32 4.41 8.32 4.92 9 5.71C9.68 4.92 10.68 4.41 11.8 4.41C13.76 4.41 15.36 6.01 15.36 7.97C15.36 8.94 14.93 9.82 14.25 10.5L9 15.75Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  partners: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13 15.75V14.25C13 12.73 11.77 11.25 10 11.25H4.75C2.98 11.25 1.75 12.73 1.75 14.25V15.75" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.375 8.25C9.03 8.25 10.375 6.91 10.375 5.25C10.375 3.59 9.03 2.25 7.375 2.25C5.72 2.25 4.375 3.59 4.375 5.25C4.375 6.91 5.72 8.25 7.375 8.25Z" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.25 15.75v-1.5c0-.95-.65-1.76-1.5-2.12" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.5 2.35c.85.35 1.5 1.17 1.5 2.12s-.65 1.77-1.5 2.12" className="!stroke-background-7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

export default function Navbar() {
  const location            = useLocation()
  const [activeMenu, setActiveMenu]   = useState(null)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const [scrolled, setScrolled]       = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setMobileSubmenu(null)
    setActiveMenu(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onEnter = (menu) => {
    clearTimeout(timerRef.current)
    setActiveMenu(menu)
  }
  const onLeave = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const toggleMobile = (menu) =>
    setMobileSubmenu((p) => (p === menu ? null : menu))

  return (
    <>
      <header>
        <nav className={`bg-background-2/15 header-one border-stroke-3/18 fixed top-6 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-[15px] border py-1.5 pr-5 pl-2 backdrop-blur-[80px] md:max-w-[640px] lg:max-w-[818px] lg:gap-12 lg:py-0 lg:pr-1.5 lg:pl-1.5 xl:max-w-[1024px] 2xl:max-w-[1290px] ${scrolled ? 'scroll-header' : ''}`}>

          <Link to="/" className="inline-flex items-center rounded-md bg-white px-2 py-1" aria-label="Ezitech home">
            <img src="/images/logo/ezitech-nav.png" alt="Ezitech" style={{ height: '16px', width: 'auto', display: 'block' }} />
          </Link>

          <ul className="relative hidden items-center gap-6 lg:flex lg:gap-8">

            <li className="nav-link-item group/nav-item relative py-4">
              <NavGlow />
              <Link to="/" className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Home</span>
              </Link>
            </li>

            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'company' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('company')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Company</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[220px] -translate-x-1/2 bg-transparent opacity-0" />
              <div id="company-list-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[240px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'company' ? 'active' : ''}`}>
                <ul className="w-full space-y-1">
                  <SimpleDropItem to="/about" label="About Us" />
                  <SimpleDropItem to="/team" label="Our Team" />
                  <SimpleDropItem to="/process" label="Our Process" />
                  <SimpleDropItem to="#" label="Careers" />
                  <SimpleDropItem to="#" label="Partners & Collaborations" />
                  <SimpleDropItem to="#" label="Life at Ezitech" />
                </ul>
              </div>
            </li>

            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'services' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('services')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Services</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[700px]" />
              <div id="services-mega-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-2xl border p-5 lg:w-[700px] ${activeMenu === 'services' ? 'active' : ''}`}>
                <div className="grid grid-cols-12 gap-x-4 gap-y-1">
                  <div className="col-span-12 sm:col-span-6">
                    <ul className="space-y-1">
                      <SimpleDropItem to="/services" label="Custom Software Development" />
                      <SimpleDropItem to="/services" label="SaaS Development" />
                      <SimpleDropItem to="/services" label="Web Development" />
                      <SimpleDropItem to="/services" label="Mobile App Development" />
                      <SimpleDropItem to="/services" label="AI Solutions" />
                      <SimpleDropItem to="/services" label="ERP Development" />
                    </ul>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <ul className="space-y-1">
                      <SimpleDropItem to="/services" label="POS Development" />
                      <SimpleDropItem to="/services" label="UI/UX Design" />
                      <SimpleDropItem to="/services" label="Cloud & DevOps" />
                      <SimpleDropItem to="/services" label="Digital Marketing" />
                      <SimpleDropItem to="/services" label="SEO Services" />
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'products' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('products')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Products</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[280px] -translate-x-1/2 bg-transparent opacity-0" />
              <div id="products-list-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[280px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'products' ? 'active' : ''}`}>
                <ul className="w-full space-y-1">
                  <SimpleDropItem to="#" label="ERP Software" />
                  <SimpleDropItem to="#" label="Cloud POS Software" />
                  <SimpleDropItem to="#" label="Project Management System" />
                  <SimpleDropItem to="#" label="LMS" />
                  <SimpleDropItem to="#" label="Property Management System" />
                  <SimpleDropItem to="#" label="Hospital Management System" />
                  <SimpleDropItem to="#" label="School Management System" />
                  <SimpleDropItem to="#" label="Complaint Management System" />
                  <SimpleDropItem to="#" label="Inventory Management System" />
                </ul>
              </div>
            </li>

            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'industries' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('industries')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Industries</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[220px] -translate-x-1/2 bg-transparent opacity-0" />
              <div id="industries-list-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[240px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'industries' ? 'active' : ''}`}>
                <ul className="w-full space-y-1">
                  <SimpleDropItem to="#" label="Healthcare" />
                  <SimpleDropItem to="#" label="Education" />
                  <SimpleDropItem to="#" label="Retail & Ecommerce" />
                  <SimpleDropItem to="#" label="Real Estate" />
                  <SimpleDropItem to="#" label="Manufacturing" />
                  <SimpleDropItem to="#" label="Logistics & Supply Chain" />
                  <SimpleDropItem to="#" label="Finance & Fintech" />
                  <SimpleDropItem to="#" label="Government & Public Sector" />
                </ul>
              </div>
            </li>

            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'portfolio' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('portfolio')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Portfolio</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[200px] -translate-x-1/2 bg-transparent opacity-0" />
              <div id="portfolio-list-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[220px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'portfolio' ? 'active' : ''}`}>
                <ul className="w-full space-y-1">
                  <SimpleDropItem to="/case-study" label="Case Studies" />
                  <SimpleDropItem to="#" label="Projects Showcase" />
                </ul>
              </div>
            </li>

            <li className={`nav-link-item group/nav-item nav-item relative cursor-pointer py-4 ${activeMenu === 'internship' ? 'active' : ''}`}
              onMouseEnter={() => onEnter('internship')} onMouseLeave={onLeave}>
              <NavGlow />
              <button className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">Internship</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-500"><Arrow /></span>
              </button>
              <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-10 w-full min-w-[220px] -translate-x-1/2 bg-transparent opacity-0" />
              <div id="internship-list-menu"
                className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 w-[240px] -translate-x-1/2 rounded-2xl border p-4 ${activeMenu === 'internship' ? 'active' : ''}`}>
                <ul className="w-full space-y-1">
                  <SimpleDropItem to="#" label="App Development" />
                  <SimpleDropItem to="#" label="Digital Marketing" />
                  <SimpleDropItem to="#" label="Web Development" />
                  <SimpleDropItem to="#" label="Graphics Designing" />
                  <SimpleDropItem to="#" label="Artificial Intelligence" />
                  <SimpleDropItem to="#" label="Front-End Development" />
                </ul>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Link to="/contact" className="group bg-background-7 relative flex items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-transparent px-6 py-[11px] transition-all duration-300 ease-in-out">
                <div className="h-full max-h-5 overflow-hidden">
                  <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Get a Free Quote</span>
                  <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Get a Free Quote</span>
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

                <li className="space-y-2">
                  <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                    onClick={() => toggleMobile('company')}>
                    <span className="font-sora text-tagline-2 font-normal text-white/90">Company</span>
                    <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === 'company' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'company' && (
                    <ul>
                      {[['About Us','/about'],['Our Team','/team'],['Our Process','/process'],['Careers','#'],['Partners & Collaborations','#'],['Life at Ezitech','#']].map(([l,t]) => (
                        <li key={l}>
                          <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                            onClick={() => setMobileOpen(false)}>{l}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

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
                      {[['Custom Software Development','/services'],['SaaS Development','/services'],['Web Development','/services'],['Mobile App Development','/services'],['AI Solutions','/services'],['ERP Development','/services'],['POS Development','/services'],['UI/UX Design','/services'],['Cloud & DevOps','/services'],['Digital Marketing','/services'],['SEO Services','/services']].map(([l,t]) => (
                        <li key={l}>
                          <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                            onClick={() => setMobileOpen(false)}>{l}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="space-y-2">
                  <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                    onClick={() => toggleMobile('products')}>
                    <span className="font-sora text-tagline-2 font-normal text-white/90">Products</span>
                    <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === 'products' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'products' && (
                    <ul>
                      {[['ERP Software','#'],['Cloud POS Software','#'],['Project Management System','#'],['LMS','#'],['Property Management System','#'],['Hospital Management System','#'],['School Management System','#'],['Complaint Management System','#'],['Inventory Management System','#']].map(([l,t]) => (
                        <li key={l}>
                          <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                            onClick={() => setMobileOpen(false)}>{l}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="space-y-2">
                  <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                    onClick={() => toggleMobile('industries')}>
                    <span className="font-sora text-tagline-2 font-normal text-white/90">Industries</span>
                    <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === 'industries' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'industries' && (
                    <ul>
                      {[['Healthcare','#'],['Education','#'],['Retail & Ecommerce','#'],['Real Estate','#'],['Manufacturing','#'],['Logistics & Supply Chain','#'],['Finance & Fintech','#'],['Government & Public Sector','#']].map(([l,t]) => (
                        <li key={l}>
                          <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                            onClick={() => setMobileOpen(false)}>{l}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="space-y-2">
                  <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                    onClick={() => toggleMobile('portfolio')}>
                    <span className="font-sora text-tagline-2 font-normal text-white/90">Portfolio</span>
                    <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === 'portfolio' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'portfolio' && (
                    <ul>
                      {[['Case Studies','/case-study'],['Projects Showcase','#']].map(([l,t]) => (
                        <li key={l}>
                          <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                            onClick={() => setMobileOpen(false)}>{l}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="space-y-2">
                  <button className="mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5"
                    onClick={() => toggleMobile('internship')}>
                    <span className="font-sora text-tagline-2 font-normal text-white/90">Internship</span>
                    <span className={`menu-arrow transition-transform duration-300 ${mobileSubmenu === 'internship' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'internship' && (
                    <ul>
                      {[['App Development','#'],['Digital Marketing','#'],['Web Development','#'],['Graphics Designing','#'],['Artificial Intelligence','#'],['Front-End Development','#']].map(([l,t]) => (
                        <li key={l}>
                          <Link to={t} className="text-tagline-3 ml-4 block py-2.5 font-normal text-white/80 hover:text-white/90"
                            onClick={() => setMobileOpen(false)}>{l}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="pt-4">
                  <Link to="/contact" className="font-ibm-plex-mono text-tagline-2 block rounded-md bg-background-7 px-5 py-3 text-center font-medium text-background-13" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </header>
    </>
  )
}
