import SEO from '../components/SEO'

export default function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" url="/terms-conditions" />
      <main className="bg-background-5 pt-34 md:pt-39 pb-20">
        <div className="main-container">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 mb-8" data-opai-animate data-delay="0.1">
              Terms & Conditions
            </h1>
            <div className="space-y-6 font-inter-tight text-white/60 text-tagline-2 leading-relaxed" data-opai-animate data-delay="0.2">
              <p>Last updated: January 2026</p>
              <p>These Terms & Conditions ("Terms") govern your use of the Ezitech Solutions website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Services</h2>
              <p>Ezitech Solutions provides software development, digital solutions, and related consulting services. The scope, pricing, and delivery timelines for each project shall be outlined in a separate service agreement.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Intellectual Property</h2>
              <p>All intellectual property rights related to our services, including but not limited to software code, designs, and documentation, remain the property of Ezitech Solutions unless otherwise agreed in writing.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Limitation of Liability</h2>
              <p>Ezitech Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved in the courts of Rawalpindi, Pakistan.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Contact</h2>
              <p>For questions about these Terms, please contact us at info@ezitech.org.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
