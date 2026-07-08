import SEO from '../components/SEO'

export default function RefundPolicy() {
  return (
    <>
      <SEO title="Refund Policy" url="/refund-policy" />
      <main className="bg-background-5 pt-34 md:pt-39 pb-20">
        <div className="main-container">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 mb-8" data-opai-animate data-delay="0.1">
              Refund Policy
            </h1>
            <div className="space-y-6 font-inter-tight text-white/60 text-tagline-2 leading-relaxed" data-opai-animate data-delay="0.2">
              <p>Last updated: January 2026</p>
              <p>At Ezitech Solutions, we strive to deliver high-quality services that meet your expectations. This Refund Policy outlines the conditions under which refunds may be issued.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Project-Based Services</h2>
              <p>For custom software development and project-based engagements, refunds are handled on a case-by-case basis as specified in your service agreement. Generally, payments made for completed milestones are non-refundable.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Subscription Services</h2>
              <p>Subscription fees are billed in advance and are non-refundable. You may cancel your subscription at any time, and access will continue until the end of the current billing period.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Cancellation</h2>
              <p>You may cancel a project within 14 days of the initial agreement for a full refund of any advance payments, provided no work has commenced.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Contact</h2>
              <p>To request a refund or discuss any concerns, please contact us at info@ezitech.org or call +92 337 7777860.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
