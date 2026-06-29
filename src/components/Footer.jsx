import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-background-6 relative overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '20px' }}>
      <div className="main-container relative z-10 py-6">
        <div className="grid grid-cols-12 gap-y-10 md:gap-10 lg:gap-6">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <div className="space-y-8" data-opai-animate data-delay="0.1">
              <Link to="/" className="inline-flex items-center">
                <img src="/images/logo/ezitech-footer-white.png" alt="Ezitech" style={{ height: '26px', width: 'auto', display: 'block' }} />
              </Link>
              <div className="space-y-6">
                <p className="text-tagline-3 max-w-[420px] font-normal text-white/50">
                  Empowering Businesses Through Software, AI, and Digital Innovation — scalable web, mobile &amp; AI solutions, plus real-world internship programs for students.
                </p>
                <div>
                  <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Contact Us:</p>
                  <a href="tel:+923377777860" className="text-tagline-3 block font-normal text-white/50 hover:underline">Phone: +92 337 7777860</a>
                  <a href="mailto:info@ezitech.org" className="text-tagline-3 block font-normal text-white/50 hover:underline">Email: info@ezitech.org</a>
                  <p className="text-tagline-3 mt-1 font-normal text-white/50">Address: Office #304-B, Amna Plaza, Peshawar Rd, Rawalpindi, 46000</p>
                </div>
              </div>
              <div>
                <p className="text-tagline-2 mb-3 font-semibold text-white/90">Social Links</p>
                <ul className="flex items-center gap-3">
                  {[
                    { label: 'Facebook', path: 'M10 19C14.97 19 19 14.97 19 10C19 5.03 14.97 1 10 1C5.03 1 1 5.03 1 10C1 14.97 5.03 19 10 19ZM13.75 6.25H12.25C11.65 6.25 11.08 6.49 10.66 6.91C10.24 7.33 10 7.9 10 8.5V19M7 11.5H13' },
                    { label: 'LinkedIn', path: 'M16.5 0.75H1.5C1.09 0.75 0.75 1.09 0.75 1.5V16.5C0.75 16.91 1.09 17.25 1.5 17.25H16.5C16.91 17.25 17.25 16.91 17.25 16.5V1.5C17.25 1.09 16.91 0.75 16.5 0.75ZM8.25 7.5V13.5M5.25 7.5V13.5M8.25 10.125C8.25 9.43 8.53 8.76 9.02 8.27C9.51 7.78 10.18 7.5 10.875 7.5C11.57 7.5 12.24 7.78 12.73 8.27C13.22 8.76 13.5 9.43 13.5 10.125V13.5' },
                    { label: 'Instagram', path: 'M10 13.75C12.07 13.75 13.75 12.07 13.75 10C13.75 7.93 12.07 6.25 10 6.25C7.93 6.25 6.25 7.93 6.25 10C6.25 12.07 7.93 13.75 10 13.75ZM14.125 1.375H5.875C3.39 1.375 1.375 3.39 1.375 5.875V14.125C1.375 16.61 3.39 18.625 5.875 18.625H14.125C16.61 18.625 18.625 16.61 18.625 14.125V5.875C18.625 3.39 16.61 1.375 14.125 1.375Z' },
                  ].map(({ label, path }) => (
                    <li key={label}>
                      <a href="#" className="inline-block transition-transform duration-500 hover:-translate-y-1" aria-label={label}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d={path} stroke="#CED7DE" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#" className="inline-block transition-transform duration-500 hover:-translate-y-1" aria-label="X (Twitter)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M15.3 1L9.19 7.29M7.11 9.44L0.75 16M0.75 1L12.11 16H15.75L4.39 1H0.75Z" stroke="#CED7DE" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
            <div className="col-span-12 sm:col-span-4">
              <div className="space-y-2 text-left lg:text-right" data-opai-animate data-delay="0.2">
                <p className="text-tagline-2 font-semibold text-white/90">Company</p>
                <ul>
                  {[['About Us','/about'],['Services','/services'],['Careers','/careers'],['Contact Us','/contact']].map(([l,t]) => (
                    <li key={l} className="py-2"><Link to={t} className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white">{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <div className="space-y-2 text-left lg:text-right" data-opai-animate data-delay="0.3">
                <p className="text-tagline-2 font-semibold text-white/90">Quick Links</p>
                <ul>
                  {[['Internships','#'],['LMS Portal','#'],['Blog','/blog'],['Case Studies','/case-study'],['FAQs','#'],['Support','#']].map(([l,t]) => (
                    <li key={l} className="py-2"><Link to={t} className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white">{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <div className="space-y-2 text-left lg:text-right" data-opai-animate data-delay="0.4">
                <p className="text-tagline-2 font-semibold text-white/90">Legal Policies</p>
                <ul>
                  {['Privacy Policy','Terms & Conditions','Refund Policy','Cookie Policy'].map(l => (
                    <li key={l} className="py-2"><a href="#" className="text-tagline-3 footer-link inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white">{l}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Big EZITECH text */}
        <div className="py-12 lg:py-16" data-opai-animate data-delay="0.1">
          <h2 className="text-it-heading-4 font-inter-tight footer-title pl-7 text-center font-bold tracking-[30.48px] uppercase sm:text-[60px] sm:leading-[120px] md:tracking-[50.48px] lg:text-[80px] lg:tracking-[70.48px] xl:text-[112px] xl:leading-[168px] 2xl:tracking-[100.48px]">
            EZITECH
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="border-stroke-1/10 flex flex-col items-center justify-between gap-2.5 border-y px-5 py-3.5 sm:flex-row sm:gap-0 lg:py-5" data-opai-animate data-delay="0.2">
          <p className="text-tagline-4 font-normal text-white/50">&copy; {year} Ezitech. All Rights Reserved.</p>
          <ul className="flex items-center gap-6">
            {['Privacy Policy','Terms & Conditions','Refund Policy','Cookie Policy'].map(l => (
              <li key={l}><a href="#" className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      {/* Blue glow */}
      <div className="pointer-events-none absolute right-0 bottom-0 -z-0 h-full w-full select-none"
        style={{ background: 'radial-gradient(60% 80% at 78% 88%, rgba(34,126,255,0.45) 0%, rgba(34,126,255,0.18) 32%, rgba(13,16,23,0) 62%)' }} />
    </footer>
  )
}
