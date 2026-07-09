const steps = [
  {
    number: "01",
    title: "Submit Application",
    description: "Send us your resume and portfolio through our application form."
  },
  {
    number: "02",
    title: "Technical Interview",
    description: "Show us your skills in a live coding session or technical discussion."
  },
  {
    number: "03",
    title: "Offer & Onboarding",
    description: "Join the team and start making an impact from day one."
  }
]

export default function Flow() {
  return (
    <section className="bg-background-5 py-20 md:py-30 lg:py-44">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-20">
          <p className="font-inter-tight text-tagline-4 text-white/50" data-opai-animate data-delay="0.1">
            Our Process
          </p>
          <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 font-normal text-white/90" data-opai-animate data-delay="0.2">
            How to Apply
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative" data-opai-animate data-delay={`${0.3 + i * 0.1}`}>
              <div className="bg-background-6 border-stroke-1/11 rounded-xl border p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-inter-tight text-tagline-3 text-white/40">{step.number}</span>
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#2067BD]/10 text-[#2067BD]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6">
                      <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <h3 className="font-instrument-serif text-xl font-normal text-white/90 mb-3">{step.title}</h3>
                <p className="font-inter-tight text-tagline-2 text-white/60">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
