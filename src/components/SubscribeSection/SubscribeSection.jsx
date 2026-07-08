import './SubscribeSection.css';
import { useEffect } from 'react';

import {
  SUBSCRIBE_CONTENT,
  SUBSCRIBE_BENEFITS,
  CHECK_ICON_PATH,
  DECORATIVE_IMAGES,
} from './SubscribeSectionData.js';

export default function SubscribeSection() {
  useEffect(() => {
    const forceVisible = () => {
      document.querySelectorAll('[data-ns-animate]').forEach((el) => {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        el.style.filter = 'none';
      });
    };
    forceVisible();
    const t1 = setTimeout(forceVisible, 100);
    const t2 = setTimeout(forceVisible, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="subscribe">
      <div className="main-container">
        <div className="subscribe__header">
          <span className="subscribe__badge">{SUBSCRIBE_CONTENT.badge}</span>

          <div className="subscribe__copy">
            <h2 className="subscribe__title">{SUBSCRIBE_CONTENT.heading}</h2>
            <p className="subscribe__description">{SUBSCRIBE_CONTENT.description}</p>
          </div>
        </div>

        <div className="subscribe__body">
          <form action="#" method="post" className="subscribe__form">
            <div className="subscribe__form-row">
              <input
                type="text"
                name="name"
                id="userName"
                placeholder={SUBSCRIBE_CONTENT.formNamePlaceholder}
                required
                className="subscribe__input"
              />
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder={SUBSCRIBE_CONTENT.formEmailPlaceholder}
                required
                className="subscribe__input"
              />
            </div>

            <textarea
              name="message"
              id="userMessage"
              placeholder={SUBSCRIBE_CONTENT.formMessagePlaceholder}
              rows={3}
              className="subscribe__textarea"
            />

            <button type="submit" className="subscribe__button">
              <span>{SUBSCRIBE_CONTENT.buttonLabel}</span>
            </button>
          </form>

          <ul className="subscribe__benefits">
            {SUBSCRIBE_BENEFITS.map((label) => (
              <li key={label} className="subscribe__benefit">
                <span className="subscribe__benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path d={CHECK_ICON_PATH} />
                  </svg>
                </span>
                <p className="subscribe__benefit-text">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {DECORATIVE_IMAGES.map(({ src, position }) => (
        <figure key={src} className={`subscribe__glow subscribe__glow--${position}`}>
          <img src={src} alt="Decorative gradient" className="subscribe__glow-img" />
        </figure>
      ))}
    </section>
  );
}
