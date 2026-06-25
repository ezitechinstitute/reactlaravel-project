import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RawHtml from '../components/RawHtml';
import processHtml from '../content/Process.html?raw';

export default function Process() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.key]);

  // Fallback accordion initialization — __opaiInit (called by Layout) handles
  // this, but we re-init here with retries in case the DOM isn't ready yet.
  useEffect(() => {
    const initAccordion = () => {
      const items = document.querySelectorAll('.accordion .accordion-item');
      if (!items.length) return false;

      items.forEach((item) => {
        const action = item.querySelector('.accordion-action');
        const content = item.querySelector('.accordion-content');
        if (!action || !content) return;
        if (item.getAttribute('data-accordion-bound') === 'true') return;
        item.setAttribute('data-accordion-bound', 'true');

        content.style.overflow = 'hidden';
        content.style.transition = 'height 300ms ease-in-out, opacity 300ms ease-in-out';

        const isOpen = () => item.getAttribute('data-state') === 'open';

        const close = (animate) => {
          if (animate) {
            const h = content.scrollHeight;
            content.style.height = h + 'px';
            content.style.opacity = '1';
            content.offsetHeight;
            content.style.height = '0px';
            content.style.opacity = '0';
          } else {
            content.style.height = '0px';
            content.style.opacity = '0';
          }
          item.setAttribute('data-state', 'closed');
          action.setAttribute('aria-expanded', 'false');
        };

        const open = (animate) => {
          if (animate) {
            content.style.height = '0px';
            content.style.opacity = '0';
            content.offsetHeight;
            content.style.height = content.scrollHeight + 'px';
            content.style.opacity = '1';
            content.addEventListener('transitionend', function handler(e) {
              if (e.propertyName === 'height') {
                content.style.height = 'auto';
                content.removeEventListener('transitionend', handler);
              }
            });
          } else {
            content.style.height = 'auto';
            content.style.opacity = '1';
          }
          item.setAttribute('data-state', 'open');
          action.setAttribute('aria-expanded', 'true');
        };

        // Start closed
        if (!isOpen()) close(false);

        action.addEventListener('click', (e) => {
          e.preventDefault();
          if (isOpen()) {
            close(true);
          } else {
            // Close all other items
            items.forEach((other) => {
              if (other !== item && other.getAttribute('data-state') === 'open') {
                const otherAction = other.querySelector('.accordion-action');
                const otherContent = other.querySelector('.accordion-content');
                if (otherAction && otherContent) {
                  const h = otherContent.scrollHeight;
                  otherContent.style.height = h + 'px';
                  otherContent.style.opacity = '1';
                  otherContent.offsetHeight;
                  otherContent.style.height = '0px';
                  otherContent.style.opacity = '0';
                  other.setAttribute('data-state', 'closed');
                  otherAction.setAttribute('aria-expanded', 'false');
                }
              }
            });
            open(true);
          }
        });
      });
      return true;
    };

    const timers = [];
    const delays = [50, 200, 500, 1000, 2000];
    delays.forEach((d, i) => {
      timers.push(setTimeout(() => {
        if (!initAccordion() && i < delays.length - 1) {
          // will retry on next timer
        }
      }, d));
    });

    return () => timers.forEach(clearTimeout);
  }, [location.pathname]);

  return <RawHtml html={processHtml} />;
}
