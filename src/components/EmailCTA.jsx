import { useState } from 'react';

export default function EmailCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Something went wrong');

      setStatus('success');
      setMessage('Thanks! Check your inbox.');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Please try again.');
    }
  };

  return (
    <>
      <style>{`
        .cta-heading {
          font-size: var(--text-heading-5);
          line-height: var(--text-heading-5--line-height);
        }
        .cta-break {
          display: none;
        }

        @media (min-width: 48rem) {
          .cta-heading {
            font-size: var(--text-heading-3);
            line-height: var(--text-heading-3--line-height);
          }
          .cta-break {
            display: block;
          }
          .md\\:text-left {
            text-align: left;
          }
          .md\\:max-w-\\[720px\\] {
            max-width: 720px;
          }
          .md\\:mx-0 {
            margin-inline: 0;
          }
          .md\\:basis-\\[420px\\] {
            flex-basis: 420px;
          }
          .md\\:ml-\\[60px\\] {
            margin-left: 60px;
          }
          .md\\:justify-start {
            justify-content: flex-start;
          }
        }

        @media (min-width: 64rem) {
          .cta-heading {
            font-size: var(--text-heading-2);
            line-height: var(--text-heading-2--line-height);
          }
        }
      `}</style>

      <section
        className="py-[50px] md:py-20 lg:py-28 bg-background-6"
        aria-label="Use Case Overview"
      >
        <div className="main-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

            {/* ── Left: heading + paragraph ── */}
            <div className="w-full md:max-w-[720px] space-y-8 text-center md:text-left">
              <span
                data-ns-animate
                data-delay="0.3"
                className="badge badge-yellow-v2"
                style={{ textTransform: 'none' }}
              >
                Get started
              </span>

              <div className="space-y-3">
                <h2
                  data-ns-animate
                  data-delay="0.4"
                  className="text-secondary dark:text-accent cta-heading"
                >
                  Build a complete website<br className="cta-break" />
                  using the assistance
                </h2>
                <p
                  data-ns-animate
                  data-delay="0.5"
                  className="text-secondary/60 dark:text-accent/60"
                >
                  Start your free trial today and see your ideas come
                  to life easily and creatively.
                </p>
              </div>
            </div>

            {/* ── Right: form + checkmarks ── */}
            <div className="w-full max-w-lg mx-auto md:mx-0 md:basis-[420px] space-y-4 md:ml-[60px]">
              <form
                data-ns-animate
                data-delay="0.6"
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-center md:justify-start"
              >
                <input
                  type="email"
                  name="email"
                  id="userEmail-cta-v1"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 shadow-1 h-10 py-2 text-sm placeholder:text-secondary/50 rounded-full border border-gray-200 focus:border-primary-600 w-full md:w-auto md:max-w-[220px] dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-none dark:focus:border-primary-400 dark:text-accent placeholder:font-normal font-normal"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-sm btn-primary h-10 w-full md:w-auto px-6 hover:btn-secondary dark:hover:btn-accent text-sm md:shrink-0"
                  style={{ textTransform: 'none' }}
                >
                  <span>
                    {status === 'loading' ? 'Sending…' : 'Get started'}
                  </span>
                </button>
              </form>

              {/* Status message */}
              {message && (
                <p
                  className={`text-xs text-center md:text-left ${
                    status === 'success'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-500 dark:text-red-400'
                  }`}
                >
                  {message}
                </p>
              )}

              <ul className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:justify-start">
                <li
                  data-ns-animate
                  data-delay="0.7"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      aria-hidden="true"
                      className="fill-white dark:fill-secondary"
                    >
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                    </svg>
                  </span>
                  <p className="text-xs text-secondary/60 dark:text-accent/60">
                    No credit card required
                  </p>
                </li>
                <li
                  data-ns-animate
                  data-delay="0.8"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      aria-hidden="true"
                      className="fill-white dark:fill-secondary"
                    >
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                    </svg>
                  </span>
                  <p className="text-xs text-secondary/60 dark:text-accent/60">
                    14-Day free trial
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
