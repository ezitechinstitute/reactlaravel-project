import React from 'react'
import './Flow.css'

const steps = [
  { number: "1", title: "Sign up",              description: "Get started for free in just a few seconds!", color: "light" },
  { number: "2", title: "Import or start fresh", description: "Upload your resume or paste your LinkedIn profile.", color: "green" },
  { number: "3", title: "Paste the job details", description: "Let AI help you jazz up your resume!", color: "light" },
  { number: "4", title: "Apply & track",          description: "Submit applications and track your progress all in one place.", color: "green" },
]

export default function Flow() {
  return (
    <section className="hiw-section">
      <div className="hiw-header">
        <h2 className="hiw-title">How it works</h2>
        <p className="hiw-subtitle">Step-by-step Flow</p>
      </div>

      <div className="hiw-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`hiw-card card-${step.color}`}
            data-opai-animate
            data-delay={`${0.1 + index * 0.2}`}
          >
            <div className="hiw-number">{step.number}</div>
            <div>
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-desc">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="hiw-connector">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="4"  cy="12" r="1.5" fill="#a1a1aa" stroke="none" />
                  <polyline points="10 16 14 12 10 8" />
                  <circle cx="20" cy="12" r="1.5" fill="#a1a1aa" stroke="none" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
