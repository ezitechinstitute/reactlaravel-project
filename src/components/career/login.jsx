export default function Login() {
  return (
    <section className="bg-background-5 pb-20 md:pb-30 lg:pb-44">
      <div className="main-container">
        <div className="bg-background-6 border-stroke-1/11 relative overflow-hidden rounded-xl border p-8 md:p-12 lg:p-16">
          <div className="bg-[#2067BD]/5 absolute inset-0"></div>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div data-opai-animate data-delay="0.1">
              <span className="font-inter-tight text-tagline-4 text-white/50 mb-4 inline-block">Don't see the right role?</span>
            </div>
            <h2 className="font-instrument-serif text-is-heading-5 md:text-is-heading-4 font-normal text-white/90 mb-4" data-opai-animate data-delay="0.2">
              We're always looking for passionate talent.
            </h2>
            <p className="font-inter-tight text-tagline-2 text-white/60 mb-8 max-w-lg mx-auto" data-opai-animate data-delay="0.3">
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <form className="mx-auto max-w-md space-y-4" data-opai-animate data-delay="0.4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus-within:outline-none" />
                <input type="email" placeholder="Your Email" className="border-stroke-3/25 focus-within:border-stroke-3/70 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus-within:outline-none" />
              </div>
              <div className="border-stroke-3/25 focus-within:border-stroke-3/70 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed px-4 py-3 transition-colors hover:border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-5 text-white/40">
                  <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 8L12 3L7 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 3V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-white/40">Upload Resume</span>
              </div>
              <button type="submit" className="w-full rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #2067BD, #3275DB)' }}>
                Submit Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
