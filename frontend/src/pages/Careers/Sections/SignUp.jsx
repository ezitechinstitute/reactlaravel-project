import { useState } from 'react'
import './SignUp.css'

const faqs = [
  { q: 'How can I apply for a job at Ezitech?',          a: 'Fill out the application form with your details, resume, and a brief cover message. Our HR team reviews all submissions within 48 hours.' },
  { q: 'Are internships available for fresh graduates?',  a: 'Yes! We offer structured internship programmes across development, design, and AI tracks — open to students and fresh graduates alike.' },
  { q: 'What is the interview process like?',             a: 'Our process involves a screening call, a technical assessment, and a final culture-fit interview — usually completed within two weeks.' },
  { q: 'Do you offer remote or hybrid positions?',        a: 'Several of our roles support remote or hybrid arrangements depending on the team. The job listing will specify the work model.' },
  { q: 'Can beginners with no experience apply?',         a: 'Absolutely. Our "For Beginners" track is designed for motivated individuals starting their tech journey. We provide mentorship and onboarding support.' },
  { q: 'How long does the hiring decision take?',         a: 'After completing all interview stages, candidates typically receive an offer letter or decision within 5–7 business days.' },
  { q: 'Is there a training period after joining?',       a: 'Yes. All new hires go through a 30-day onboarding programme to get familiar with our tech stack, processes, and team culture.' },
]

export default function SignUp() {
  const [openIndex, setOpenIndex] = useState(4)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const toggle = i => setOpenIndex(openIndex === i ? null : i)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section className="signup-section">

      {/* Centered heading */}
      <div className="signup-top-header" data-opai-animate data-delay="0.1">
        <h2 className="signup-heading">
          Your questions,&nbsp;<span>answered</span>
        </h2>
        <p className="signup-subheading">
          Explore our most frequently asked<br />questions to get started.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="signup-container">

        {/* LEFT – FAQ accordion */}
        <div className="signup-left" data-opai-animate data-delay="0.2">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – Form card */}
        <div className="signup-right" data-opai-animate data-delay="0.3">
          <div className="signup-card">
            <div className="signup-card-inner">
              <h3 className="card-title">Apply according to your experience</h3>
              <p className="card-subtitle">
                Submit your details and our team will match you with the right opportunity.
              </p>

              <form className="signup-form" onSubmit={e => e.preventDefault()}>
                <input  type="text"  name="name"    placeholder="Your name"    value={form.name}    onChange={handleChange} />
                <input  type="email" name="email"   placeholder="Your email"   value={form.email}   onChange={handleChange} />
                <input  type="text"  name="subject" placeholder="Subject"      value={form.subject} onChange={handleChange} />
                <textarea            name="message" placeholder="Your Questions" value={form.message} onChange={handleChange} />

                <button type="submit" className="signup-btn">
                  Contact us &gt;
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
