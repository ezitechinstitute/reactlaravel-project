import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

/* ─── Accordion Item ─────────────────────────────────────────────── */
function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-button" onClick={onToggle}>
        <span className="faq-question">{question}</span>
        <span
          className="faq-icon"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <div
        className="faq-content"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Step Card ──────────────────────────────────────────────────── */
function StepCard({
  step,
  iconClass,
  title,
  description,
  items = [],
  delay = '0.3',
  colClass = '',
}) {
  return (
    <div className={`col-span-12 md:col-span-6 lg:col-span-4 ${colClass}`}>
      <div data-ns-animate data-delay={delay} className="process-card">
        <div className="process-card-header">
          <span className="process-step-label">{step}</span>
          <span className={`process-icon ${iconClass}`}></span>
        </div>
        <div className="process-card-body">
          <h3 className="process-card-title">{title}</h3>
          <p className="process-card-desc">{description}</p>
          <ul className="process-card-list">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ─── Process Steps Data ─────────────────────────────────────────── */
const steps = [
  {
    step: 'Step 1',
    iconClass: 'ns-shape-36',
    title: 'Create your account',
    description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
    items: ['Quick signup process', 'No setup fees', 'Instant access to your dashboard'],
    delay: '0.3',
  },
  {
    step: 'Step 2',
    iconClass: 'ns-shape-8',
    title: 'Customize your workspace',
    description: 'Use templates to set up your team, workflows, integrations, and brand.',
    items: ['Choose what to track', 'Add users and set permissions', 'Connect your favorite tools'],
    delay: '0.4',
  },
  {
    step: 'Step 3',
    iconClass: 'ns-shape-2',
    title: 'Automate & collaborate',
    description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
    items: ['Drag-and-drop automation', 'Task routing & approvals', 'Notifications & real-time sync'],
    delay: '0.5',
  },
  {
    step: 'Step 4',
    iconClass: 'ns-shape-36',
    title: 'Create your account',
    description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
    items: ['Quick signup process', 'No setup fees', 'Instant access to your dashboard'],
    delay: '0.6',
  },
  {
    step: 'Step 5',
    iconClass: 'ns-shape-8',
    title: 'Customize your workspace',
    description: 'Use templates or build your own dashboards, workflows, and integrations that reflect.',
    items: ['Choose what to track', 'Add users and set permissions', 'Connect your favorite tools'],
    delay: '0.7',
  },
]

/* ─── FAQ Data ───────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'What is the primary role of a business agency?',
    answer:
      'When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.',
  },
  {
    question: 'What kinds of services should I anticipate from a business agency?',
    answer:
      'When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.',
  },
  {
    question: 'How often should I consider updating my website?',
    answer:
      'When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.',
  },
  {
    question: 'How often is it recommended to refresh my website?',
    answer:
      'When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.',
  },
]

/* ═══════════════════════════════════════════════════════════════════ */
export default function Process() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <SEO title="Process & Workflow" url="/process" />

      {/* ── Process Steps ─────────────────────────────────────────── */}
      <section className="process-section">
        <div className="main-container">
          <div className="process-section-header">
            <h2 data-ns-animate data-delay="0.3" className="process-section-title">
              From sign-up to success in just a few steps
            </h2>
            <p data-ns-animate data-delay="0.4" className="process-section-subtitle">
              We make it easy to Get started, simple to scale, and seamless to succeed. Whether
              you&apos;re using one feature or the full suite, Nexsas is built to support you every
              step of the way.
            </p>
          </div>

          <div className="process-grid">
            {/* Top Row — Steps 1-3 */}
            {steps.slice(0, 3).map((s) => (
              <StepCard key={s.step} {...s} />
            ))}
            {/* Bottom Row — Steps 4-5, centered */}
            <StepCard {...steps[3]} colClass="process-step-center" />
            <StepCard {...steps[4]} />
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="faq-section">
        <div className="main-container">
          <div className="faq-header">
            <span data-ns-animate data-delay="0.1" className="faq-badge">
              Faq
            </span>
            <div className="faq-title-wrap">
              <h2 data-ns-animate data-delay="0.2" className="faq-title">
                Commonly asked questions
              </h2>
              <p data-ns-animate data-delay="0.3" className="faq-subtitle">
                By offering concise and informative responses, this section helps users find
                solutions without the need to contact customer support, saving time
              </p>
            </div>
          </div>

          <div data-ns-animate data-delay="0.4" className="faq-list">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="cta-section" aria-label="Use Case Overview">
        <div className="main-container">
          <div className="cta-row">
            <div className="cta-content">
              <span data-ns-animate data-delay="0.3" className="cta-badge">
                Get started
              </span>
              <div className="cta-text">
                <h2 data-ns-animate data-delay="0.4" className="cta-title">
                  Build a complete website using the assistance
                </h2>
                <p data-ns-animate data-delay="0.5" className="cta-subtitle">
                  Start your free trial today and see your ideas come to life easily and creatively.
                </p>
              </div>
            </div>

            <div className="cta-form-wrap">
              <form data-ns-animate data-delay="0.6" onSubmit={(e) => e.preventDefault()} className="cta-form">
                <input
                  type="email"
                  name="email"
                  id="userEmail-cta-v1"
                  placeholder="Enter your email"
                  required
                  className="cta-input"
                />
                <button type="submit" className="cta-button">
                  Get started
                </button>
              </form>
              <ul className="cta-checklist">
                <li data-ns-animate data-delay="0.7" className="cta-check-item">
                  <span className="cta-check-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                    </svg>
                  </span>
                  <p>No credit card required</p>
                </li>
                <li data-ns-animate data-delay="0.8" className="cta-check-item">
                  <span className="cta-check-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z" />
                    </svg>
                  </span>
                  <p>14-Day free trial</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
