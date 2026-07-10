import './Footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FOOTER_BRAND,
  CONTACT_INFO,
  SOCIAL_LINKS,
  LEGAL_LINKS,
  FOOTER_LINK_COLUMNS,
} from './FooterData.js';

const LEGAL_COLUMN = {
  key: 'legal',
  title: 'Legal Policies',
  links: LEGAL_LINKS.map((label) => [label, '#']),
  plain: true, // renders <a href="#"> instead of react-router <Link>
};

const ALL_COLUMNS = [...FOOTER_LINK_COLUMNS, LEGAL_COLUMN];

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  // Link columns collapse into accordions on mobile; several can be
  // open at once. Ignored above the sm breakpoint, where CSS forces
  // every column open regardless of this state.
  const [openCols, setOpenCols] = useState({});
  const toggleCol = (key) => setOpenCols((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <footer className="footer">
      <div className="main-container footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-inner" data-opai-animate data-delay="0.1">
              <Link to="/" className="footer__logo-link">
                <img src={FOOTER_BRAND.logo} alt="Ezitech" className="footer__logo-img" />
              </Link>
              <div className="footer__about">
                <p className="footer__tagline">
                  {FOOTER_BRAND.tagline}
                </p>
                <div>
                  <p className="footer__contact-heading">Contact Us:</p>
                  <a href={CONTACT_INFO.phone.href} className="footer__contact-link">{CONTACT_INFO.phone.label}</a>
                  <a href={CONTACT_INFO.email.href} className="footer__contact-link">{CONTACT_INFO.email.label}</a>
                  <p className="footer__contact-address">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div>
                <p className="footer__social-heading">Social Links</p>
                <ul className="footer__social-list">
                  {SOCIAL_LINKS.map(({ label, width, height, viewBox, path }) => (
                    <li key={label}>
                      <a href="#" className="footer__social-link" aria-label={label}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill="none">
                          <path d={path} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Links — accordions on mobile, static columns from sm up */}
          <div className="footer__links">
            {ALL_COLUMNS.map(({ key, title, links, plain }, i) => {
              const isOpen = !!openCols[key];
              const ItemLink = plain ? 'a' : Link;
              return (
                <div key={key} className="footer__links-col">
                  <div className="footer__links-col-inner" data-opai-animate data-delay={`0.${i + 2}`}>
                    <button
                      type="button"
                      className="footer__links-toggle"
                      onClick={() => toggleCol(key)}
                      aria-expanded={isOpen}
                    >
                      <span className="footer__links-heading">{title}</span>
                      <span className={`footer__links-chevron ${isOpen ? "footer__links-chevron--open" : ""}`}>
                        <ChevronIcon />
                      </span>
                    </button>
                    <div className={`footer__links-panel ${isOpen ? "footer__links-panel--open" : ""}`}>
                      <ul className="footer__links-list">
                        {links.map(([l, t]) => (
                          <li key={l} className="footer__links-item">
                            <ItemLink {...(plain ? { href: t } : { to: t })} className="footer-link footer__links-link">{l}</ItemLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Big EZITECH text */}
        <div className="footer__wordmark-wrap" data-opai-animate data-delay="0.1">
          <h2 className="footer-title footer__wordmark">
            EZITECH
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom" data-opai-animate data-delay="0.2">
          <p className="footer__copyright">&copy; {year} Ezitech. All Rights Reserved.</p>
          <ul className="footer__bottom-list">
            {LEGAL_LINKS.map(l => (
              <li key={l}><a href="#" className="footer-link footer__bottom-link">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      {/* Blue glow */}
      <div className="footer__glow" />
    </footer>
  );
}
