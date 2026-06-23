import { useEffect } from 'react';

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

    // Button hover
    const btn = document.getElementById('subscribe-btn');
    if (btn) {
      const onEnter = () => {
        btn.style.backgroundColor = '#1a1a1c';
        btn.style.borderColor = '#000000';
        btn.style.color = '#ffffff';
      };
      const onLeave = () => {
        btn.style.backgroundColor = '#864ffe';
        btn.style.borderColor = '#7c31f6';
        btn.style.color = '#ffffff';
      };
      btn.addEventListener('mouseenter', onEnter);
      btn.addEventListener('mouseleave', onLeave);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden z-10"
      style={{
        paddingTop: '88px',
        paddingBottom: '88px',
        backgroundColor: '#13171e',
      }}
    >
      <div className="main-container">
        <div className="text-center mb-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          
          <span style={{
            display: 'inline-block',
            padding: '6px 20px',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            backgroundColor: 'rgba(198, 245, 111, 0.15)',
            color: '#c6f56f',
            fontWeight: '400',
          }}>
            Subscribe
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.25rem)',
              lineHeight: '120%',
              fontWeight: '400',
              color: '#fcfcfc',
              margin: 0,
            }}>
              Transform your finances from stress to success.
            </h2>

            <p style={{
              maxWidth: '534px',
              margin: '0 auto',
              color: 'rgba(252,252,252,0.6)',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '1.5',
            }}>
              Take the first step toward a stronger financial future. start
              managing, saving, and growing your money with tools designed to
              make success simple.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '38px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <form
            action="#"
            method="post"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
          >
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Enter your email"
              required
              style={{
                paddingLeft: '18px',
                paddingRight: '18px',
                paddingTop: '12px',
                paddingBottom: '12px',
                height: '48px',
                maxWidth: '340px',
                width: '85%',
                backgroundColor: 'transparent',
                color: 'rgba(252,252,252,0.9)',
                borderRadius: '9999px',
                border: '1px solid #2a333e',
                outline: 'none',
                fontSize: '0.875rem',
              }}
            />
            <button
              id="subscribe-btn"
              type="submit"
              style={{
                height: '48px',
                padding: '0 20px',
                backgroundColor: '#864ffe',
                border: '1px solid #7c31f6',
                borderRadius: '9999px',
                color: '#ffffff',
                fontSize: '0.875rem',
                cursor: 'pointer',
                fontWeight: '400',
                minWidth: '90px',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}
            >
              <span>Get started</span>
            </button>
          </form>

          <ul style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '42px',
            flexWrap: 'wrap',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#fcfcfc',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                  <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" fill="#1a1a1c" />
                </svg>
              </span>
              <p style={{ color: '#fcfcfc', fontSize: '0.875rem', margin: 0 }}>Grow savings faster</p>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#fcfcfc',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                  <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" fill="#1a1a1c" />
                </svg>
              </span>
              <p style={{ color: '#fcfcfc', fontSize: '0.875rem', margin: 0 }}>Track spending easily</p>
            </li>
          </ul>
        </div>
      </div>

      <figure
        className="absolute pointer-events-none select-none"
        style={{ top: '-50%', left: '-15%', zIndex: -1, maxWidth: '600px', width: '100%' }}
      >
        <img src="/images/ns-img-500.png" alt="Decorative gradient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </figure>

      <figure
        className="absolute pointer-events-none select-none"
        style={{ bottom: '-35%', right: '-10%', zIndex: -1, maxWidth: '500px', width: '100%' }}
      >
        <img src="/images/ns-img-505.png" alt="Decorative gradient" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </figure>
    </section>
  );
}