import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" url="/privacy-policy" />
      <main className="bg-background-5 pt-34 md:pt-39 pb-20">
        <div className="main-container">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 mb-8" data-opai-animate data-delay="0.1">
              Privacy Policy
            </h1>
            <div className="space-y-6 font-inter-tight text-white/60 text-tagline-2 leading-relaxed" data-opai-animate data-delay="0.2">
              <p>Last updated: January 2026</p>
              <p>Ezitech Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Information We Collect</h2>
              <p>We may collect personal information such as your name, email address, phone number, and company details when you fill out forms on our website, subscribe to newsletters, or contact us.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">How We Use Your Information</h2>
              <p>Your information helps us provide, maintain, and improve our services; communicate with you; send promotional materials; and comply with legal obligations.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Data Protection</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing activities. To exercise these rights, please contact us.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at info@ezitech.org or call +92 337 7777860.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
