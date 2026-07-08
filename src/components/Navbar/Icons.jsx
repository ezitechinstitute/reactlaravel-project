import './Icons.css';

/* ─── Arrow icon ───────────────────────────────────────────────────── */
export const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path
      d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
      className="nav__arrow-path"
      strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

/* ─── Nav hover glow decorators ────────────────────────────────────── */
export const NavGlow = () => (
  <div className="nav__glow">
    <div className="nav__glow-line" />
    <div className="nav__glow-gradient" />
  </div>
);