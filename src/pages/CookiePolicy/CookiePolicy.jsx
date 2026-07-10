import SEO from '../../components/SEO'

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy" url="/cookie-policy" />
      <main className="bg-background-5 pt-34 md:pt-39 pb-20">
        <div className="main-container">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 mb-8" data-opai-animate data-delay="0.1">
              Cookie Policy
            </h1>
            <div className="space-y-6 font-inter-tight text-white/60 text-tagline-2 leading-relaxed" data-opai-animate data-delay="0.2">
              <p>Last updated: January 2026</p>
              <p>This Cookie Policy explains how Ezitech Solutions uses cookies and similar tracking technologies on our website.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">What Are Cookies</h2>
              <p>Cookies are small text files placed on your device when you visit a website. They help us improve your browsing experience by remembering preferences, analyzing site traffic, and enabling functionality.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Types of Cookies We Use</h2>
              <p><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.<br /><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site, allowing us to improve performance.<br /><strong>Functionality Cookies:</strong> Remember your preferences and settings for a personalized experience.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>
              <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mt-10 mb-4">Contact</h2>
              <p>If you have questions about our use of cookies, please contact us at info@ezitech.org.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
