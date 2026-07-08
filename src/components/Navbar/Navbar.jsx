import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NAV_ICONS, 
  SERVICES_COLUMN_ONE, 
  SERVICES_COLUMN_TWO, 
  SERVICES_COLUMN_THREE 
} from './constants.jsx';

/* ─── Arrow icon ───────────────────────────────────────────────────── */
const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path
      d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
      className="nav__arrow-path"
      strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

/* ─── Nav hover glow decorators ────────────────────────────────────── */
const NavGlow = () => (
  <div className="nav__glow">
    <div className="nav__glow-line" />
    <div className="nav__glow-gradient" />
  </div>
);

/* ─── Dropdown item ─────────────────────────────────────────────────── */
function DropItem({ to, icon, label, desc }) {
  return (
    <li className="dropdown__item">
      <Link to={to} className="dropdown__link">
        <div className="dropdown__link-bg" />
        {icon && <div className="dropdown__link-icon">{icon}</div>}
        <div className="dropdown__link-content">
          <p className="dropdown__link-title">{label}</p>
          {desc && <p className="dropdown__link-desc">{desc}</p>}
        </div>
      </Link>
    </li>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function Navbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onEnter = (menu) => {
    clearTimeout(timerRef.current);
    setActiveMenu(menu);
  };
  const onLeave = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const toggleMobile = (menu) =>
    setMobileSubmenu((p) => (p === menu ? null : menu));

  return (
    <>
      {/* ═══════════ DESKTOP NAV ═══════════ */}
      <header className="header">
        <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>

          {/* Logo */}
          <Link to="/" className="nav__logo-container" aria-label="Ezitech home">
            <img src="/images/logo/ezitech-nav.png" alt="Ezitech" className="nav__logo-img" />
          </Link>

          {/* Desktop links */}
          <ul className="nav__menu">
            {/* Home */}
            <li className="nav__item">
              <NavGlow />
              <Link to="/" className="nav__link">
                <span className="nav__link-text">Home</span>
              </Link>
            </li>

            {/* About Dropdown */}
            <li 
              className={`nav__item nav__item--has-dropdown ${activeMenu === 'about' ? 'nav__item--active' : ''}`}
              onMouseEnter={() => onEnter('about')} 
              onMouseLeave={onLeave}
            >
              <NavGlow />
              <button className="nav__link" aria-expanded={activeMenu === 'about'} aria-controls="about-mega-menu">
                <span className="nav__link-text">About</span>
                <span className="nav__link-arrow"><Arrow /></span>
              </button>
              <div className="nav__dropdown-bridge" />
              <div id="about-mega-menu" className={`dropdown ${activeMenu === 'about' ? 'dropdown--active' : ''}`}>
                <ul className="dropdown__list">
                  <DropItem to="/about" icon={NAV_ICONS.story} label="Our Story" />
                  <DropItem to="/about" icon={NAV_ICONS.uni} label="University Collaborations" />
                  <DropItem to="/team" icon={NAV_ICONS.team} label="Our Team" />
                  <DropItem to="/about" icon={NAV_ICONS.doc} label="MoUs" />
                </ul>
              </div>
            </li>

            {/* Company Dropdown */}
            <li 
              className={`nav__item nav__item--has-dropdown ${activeMenu === 'company' ? 'nav__item--active' : ''}`}
              onMouseEnter={() => onEnter('company')} 
              onMouseLeave={onLeave}
            >
              <NavGlow />
              <button className="nav__link" aria-expanded={activeMenu === 'company'} aria-controls="company-list-menu">
                <span className="nav__link-text">Company</span>
                <span className="nav__link-arrow"><Arrow /></span>
              </button>
              <div className="nav__dropdown-bridge" />
              <div id="company-list-menu" className={`dropdown ${activeMenu === 'company' ? 'dropdown--active' : ''}`}>
                <ul className="dropdown__list dropdown__list--compact">
                  <DropItem to="#" icon={NAV_ICONS.bag} label="Careers" />
                  <DropItem to="#" icon={NAV_ICONS.users} label="Partners" />
                  <DropItem to="/case-study" icon={NAV_ICONS.star} label="Success Stories" />
                  <DropItem to="#" icon={NAV_ICONS.help} label="FAQs" />
                </ul>
              </div>
            </li>

            {/* Services Mega Menu */}
            <li 
              className={`nav__item nav__item--has-dropdown ${activeMenu === 'services' ? 'nav__item--active' : ''}`}
              onMouseEnter={() => onEnter('services')} 
              onMouseLeave={onLeave}
            >
              <NavGlow />
              <button className="nav__link" aria-expanded={activeMenu === 'services'} aria-controls="services-mega-menu">
                <span className="nav__link-text">Services</span>
                <span className="nav__link-arrow"><Arrow /></span>
              </button>
              <div className="nav__dropdown-bridge" />
              <div id="services-mega-menu" className={`dropdown dropdown--mega ${activeMenu === 'services' ? 'dropdown--active' : ''}`}>
                <div className="megamenu__grid">
                  
                  {/* Col 1 */}
                  <div className="megamenu__col">
                    {SERVICES_COLUMN_ONE.map(({ icon, label, desc }) => (
                      <Link key={label} to="/services" className="megamenu__card">
                        <div className="megamenu__card-hover-bg" />
                        <span className="megamenu__card-icon-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d={icon} className="megamenu__card-icon-path" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div className="megamenu__card-info">
                          <p className="megamenu__card-title">{label}</p>
                          <p className="megamenu__card-desc">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Col 2 */}
                  <div className="megamenu__col">
                    <div className="megamenu__card-stack">
                      {SERVICES_COLUMN_TWO.map(({ icon, label, desc }) => (
                        <Link key={label} to="/services" className="megamenu__card">
                          <div className="megamenu__card-hover-bg" />
                          <span className="megamenu__card-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                              <path d={icon} className="megamenu__card-icon-path" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <div className="megamenu__card-info">
                            <p className="megamenu__card-title">{label}</p>
                            <p className="megamenu__card-desc">{desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="megamenu__action-wrapper">
                      <Link to="/contact" className="megamenu__cta-btn">
                        <div className="megamenu__cta-text-slider">
                          <span className="megamenu__cta-label">Build Custom Software</span>
                        </div>
                        <span className="megamenu__cta-icon-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Col 3 */}
                  <div className="megamenu__col megamenu__col--featured">
                    <Link to="/contact" className="megamenu__promo-banner">
                      <div className="megamenu__promo-overlay" />
                      <p className="megamenu__promo-title">Start your project</p>
                      <p className="megamenu__promo-subtitle">Let's build together.</p>
                    </Link>
                    {SERVICES_COLUMN_THREE.map(({ icon, label, desc }) => (
                      <Link key={label} to="/services" className="megamenu__card megamenu__card--secondary">
                        <div className="megamenu__card-hover-bg" />
                        <span className="megamenu__card-icon-wrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d={icon} className="megamenu__card-icon-path" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div className="megamenu__card-info">
                          <p className="megamenu__card-title">{label}</p>
                          <p className="megamenu__card-desc">{desc}</p>
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
              { to: '#', label: 'Internships' },
              { to: '/blog', label: 'Blog' },
              { to: '#', label: 'LMS' },
            ].map(({ to, label }) => (
              <li key={label} className="nav__item">
                <NavGlow />
                <Link to={to} className="nav__link">
                  <span className="nav__link-text">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav__actions">
            <div className="nav__cta-container">
              <Link to="/contact" className="nav__cta-button">
                <span className="nav__cta-text">Request Custom Software</span>
              </Link>
            </div>
            <button className="nav__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span className="nav__hamburger-line" />
              <span className="nav__hamburger-line" />
            </button>
          </div>
        </nav>

        {/* ═══════════ MOBILE SIDEBAR ═══════════ */}
        {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
        
        <aside className={`sidebar ${mobileOpen ? "sidebar--open" : ""}`}>
          <div className="sidebar__container">
            <div className="sidebar__header">
              <Link to="/" className="sidebar__logo-link" onClick={() => setMobileOpen(false)}>
                <img src="/images/logo/ezitech-nav.png" alt="Ezitech" className="sidebar__logo-img" />
              </Link>
              {/* FIX: Cleaned target buttons for close toggle selectors */}
              <button className="sidebar__close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <span className="sidebar__close-icon-line" />
                <span className="sidebar__close-icon-line" />
              </button>
            </div>

            <div className="sidebar__content">
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <Link to="/" className="sidebar__link" onClick={() => setMobileOpen(false)}>Home</Link>
                </li>

                {[
                  { key: 'about', label: 'About', links: [['Our Story', '/about'], ['University Collaborations', '/about'], ['Our Team', '/team'], ['MoUs', '/about']] },
                  { key: 'company', label: 'Company', links: [['Careers', '#'], ['Partners', '#'], ['Success Stories', '/case-study'], ['FAQs', '#']] },
                ].map(({ key, label, links }) => (
                  <li key={key} className="sidebar__item sidebar__item--accordion">
                    <button className="sidebar__accordion-toggle" onClick={() => toggleMobile(key)}>
                      <span className="sidebar__accordion-label">{label}</span>
                      <span className={`sidebar__accordion-arrow ${mobileSubmenu === key ? "sidebar__accordion-arrow--rotated" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 12L14 8L10 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {mobileSubmenu === key && (
                      <ul className="sidebar__submenu">
                        {links.map(([l, t]) => (
                          <li key={l} className="sidebar__submenu-item">
                            <Link to={t} className="sidebar__submenu-link" onClick={() => setMobileOpen(false)}>{l}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Mobile Services */}
                <li className="sidebar__item sidebar__item--accordion">
                  <button className="sidebar__accordion-toggle" onClick={() => toggleMobile("services")}>
                    <span className="sidebar__accordion-label">Services</span>
                    <span className={`sidebar__accordion-arrow ${mobileSubmenu === "services" ? "sidebar__accordion-arrow--rotated" : ""}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {mobileSubmenu === 'services' && (
                    <ul className="sidebar__submenu">
                      <li className="sidebar__submenu-heading">Software Development</li>
                      {['Web Development', 'Mobile App Development', 'Custom Software Development', 'SaaS Development'].map(l => (
                        <li key={l} className="sidebar__submenu-item"><Link to="/services" className="sidebar__submenu-link" onClick={() => setMobileOpen(false)}>{l}</Link></li>
                      ))}
                      <li className="sidebar__submenu-heading">AI Solutions</li>
                      {['AI & Automation', 'Machine Learning', 'Chatbot Development'].map(l => (
                        <li key={l} className="sidebar__submenu-item"><Link to="/services" className="sidebar__submenu-link" onClick={() => setMobileOpen(false)}>{l}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>

                {[
                  ['Portfolio', '/case-study'], 
                  ['Internships', '#'], 
                  ['Blog', '/blog'], 
                  ['LMS', '#']
                ].map(([l, t]) => (
                  <li key={l} className="sidebar__item">
                    <Link to={t} className="sidebar__link" onClick={() => setMobileOpen(false)}>{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
}