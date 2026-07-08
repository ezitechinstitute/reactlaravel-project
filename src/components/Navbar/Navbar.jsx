import './Navbar.css';

import { useState, useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

import NavItem from "./NavItem.jsx";

import { NAVIGATION } from "./Dropdown/NavigationData.js";

import { NavGlow } from './DecorativeElements.jsx';





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

            {NAVIGATION.map((item) => (

  <NavItem

    key={item.key}

    item={item}

    activeMenu={activeMenu}

    onEnter={onEnter}

    onLeave={onLeave}

  />

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