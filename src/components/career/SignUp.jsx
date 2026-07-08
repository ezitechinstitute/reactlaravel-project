export default function SignUp() {
  return (
    <section className="bg-background-5 py-20 md:py-30 lg:py-44">
      <div className="main-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 space-y-3" data-opai-animate data-delay="0.1">
              <p className="font-inter-tight text-tagline-4 text-white/50">Apply Now</p>
              <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 font-normal text-white/90">
                Build your career with the <br />assistance of industry experts
              </h2>
              <p className="font-inter-tight text-tagline-2 text-white/60 max-w-md">
                Submit your application today and our team will reach out within 48 hours.
              </p>
            </div>
            <form className="space-y-5" data-opai-animate data-delay="0.2">
              <div className="grid gap-5 sm:grid-cols-2">
                <fieldset className="space-y-1.5">
                  <label className="font-inter-tight text-tagline-4 text-white/80">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus-within:outline-none" />
                </fieldset>
                <fieldset className="space-y-1.5">
                  <label className="font-inter-tight text-tagline-4 text-white/80">Email</label>
                  <input type="email" placeholder="Enter your email" className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus-within:outline-none" />
                </fieldset>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <fieldset className="space-y-1.5">
                  <label className="font-inter-tight text-tagline-4 text-white/80">Phone</label>
                  <input type="tel" placeholder="Enter your phone" className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus-within:outline-none" />
                </fieldset>
                <fieldset className="space-y-1.5">
                  <label className="font-inter-tight text-tagline-4 text-white/80">Position Interested In</label>
                  <select className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/60 focus-within:outline-none">
                    <option value="" className="bg-background-5">Select position</option>
                    <option value="senior-react" className="bg-background-5">Senior React Developer</option>
                    <option value="fullstack" className="bg-background-5">Full Stack Engineer</option>
                    <option value="ai-ml" className="bg-background-5">AI/ML Engineer</option>
                    <option value="intern" className="bg-background-5">Internship</option>
                  </select>
                </fieldset>
              </div>
              <fieldset className="space-y-1.5">
                <label className="font-inter-tight text-tagline-4 text-white/80">Upload Resume</label>
                <div className="border-stroke-3/25 focus-within:border-stroke-3/70 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed px-4 py-4 transition-colors hover:border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-5 text-white/40">
                    <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-white/40">Click to upload or drag & drop</span>
                </div>
              </fieldset>
              <fieldset className="space-y-1.5">
                <label className="font-inter-tight text-tagline-4 text-white/80">Message</label>
                <textarea rows={3} placeholder="Tell us about yourself..." className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus-within:outline-none"></textarea>
              </fieldset>
              <button type="submit" className="w-full rounded-lg px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #2067BD, #3275DB)' }}>
                Get started
              </button>
              <div className="flex items-center gap-4 text-tagline-4 text-white/40">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Free application process
                </span>
              </div>
            </form>
          </div>
          <div className="hidden lg:block" data-opai-animate data-delay="0.3">
            <div className="bg-background-6 border-stroke-1/11 relative flex h-[500px] items-center justify-center overflow-hidden rounded-xl border">
              <div className="bg-[#2067BD]/5 absolute inset-0"></div>
              <div className="bg-[#2067BD]/10 absolute -top-20 -right-20 h-60 w-60 rounded-full blur-[80px]"></div>
              <div className="bg-[#3275DB]/10 absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-[80px]"></div>
              <div className="relative text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" className="mx-auto size-20 text-white/20">
                  <rect x="8" y="16" width="64" height="52" rx="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M28 40H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M28 50H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M40 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 8H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="font-inter-tight text-tagline-3 mt-4 text-white/30">Your future starts here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}