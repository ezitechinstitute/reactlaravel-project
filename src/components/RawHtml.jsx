import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Renders a raw HTML string into a real DOM container (keeps data-* attributes and
// inline SVG byte-identical so the vanilla GSAP/Swiper code can find its selectors).
// Internal <a> clicks are intercepted and routed through React Router.
export default function RawHtml({ html, className }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      // external / mail / tel / new-tab -> let the browser handle it
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('//') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        a.target === '_blank'
      ) {
        return;
      }
      // Placeholder links (href="#") and pure-hash links should NOT change the
      // URL or scroll. Letting the browser handle "#" appends a hash to the URL
      // (e.g. /blog#) and can trigger the smooth-scroll/GSAP code to blank the
      // page. We swallow these clicks instead.
      if (href === '#' || href === '') {
        e.preventDefault();
        return;
      }
      // Real in-page anchor (#section-id) -> let Lenis smooth-scroll handle it
      if (href.startsWith('#')) return;
      // internal route -> React Router
      e.preventDefault();
      navigate(href);
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [navigate, html]);

  return (
    <div
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
