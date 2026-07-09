export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-34 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-[#2067BD]/10 absolute -top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full blur-[120px]"></div>
        <div className="bg-[#3275DB]/10 absolute -bottom-[20%] -right-[10%] h-[400px] w-[400px] rounded-full blur-[100px]"></div>
      </div>
      <div className="main-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div data-opai-animate data-delay="0.1">
            <span className="fill-opai-blue text-white/50 flex items-center gap-x-1">
              <span className="flex size-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                </svg>
              </span>
              <span className="font-inter-tight text-tagline-4 text-white/50 font-normal">Careers</span>
            </span>
          </div>
          <div className="mt-6 space-y-5 max-w-[900px]">
            <h1 className="font-instrument-serif text-is-heading-2 md:text-is-heading-1 font-normal text-white/90 leading-[1.1]" data-opai-animate data-delay="0.2">
              We're building the future of Ezitech — <br />come build it with us
            </h1>
            <p className="font-inter-tight text-tagline-2 text-white/60 max-w-[650px] mx-auto" data-opai-animate data-delay="0.3">
              Become part of a passionate community fueled by common interests. Join a team of innovators building scalable web, mobile, and AI-driven solutions that empower businesses worldwide.
            </p>
          </div>
          <div className="mt-8 max-w-[700px] space-y-4 text-left" data-opai-animate data-delay="0.35">
            <p className="font-inter-tight text-tagline-3 text-white/50">
              Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
            </p>
            <p className="font-inter-tight text-tagline-3 text-white/50">
              Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4" data-opai-animate data-delay="0.4">
            <a href="#open-positions" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #2067BD, #3275DB)' }}>
              View Open Positions
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#internships" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:text-white">
              Explore Internships
            </a>
          </div>
        </div>
        <div className="mt-20" data-opai-animate data-delay="0.5">
          <p className="font-inter-tight text-tagline-4 text-center text-white/40 mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-50">
            <img src="/images/logo/ezitech-logo-white.png" alt="Company" className="h-8 w-auto object-contain" />
            <img src="/images/logo/ezitech-logo-white.png" alt="Company" className="h-8 w-auto object-contain" />
            <img src="/images/logo/ezitech-logo-white.png" alt="Company" className="h-8 w-auto object-contain" />
            <img src="/images/logo/ezitech-logo-white.png" alt="Company" className="h-8 w-auto object-contain" />
            <img src="/images/logo/ezitech-logo-white.png" alt="Company" className="h-8 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
