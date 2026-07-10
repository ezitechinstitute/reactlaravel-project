import { useGSAP } from '../../hooks/useAnimation'
export default function UseCaseSection() {
  const sectionRef = useGSAP((gsap, ScrollTrigger) => {
    const cards = document.querySelectorAll('.stack-cards__item')
    if (!cards.length || !ScrollTrigger) return

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top ${index * 20 + 80}px`,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
        scale: 1 - index * 0.02,
        ease: 'power1.out',
      })
    })
  })

  return (
    <section ref={sectionRef} className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px]">

          {/* Left sticky */}
          <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
            <span data-ns-animate data-delay="0.2" className="badge badge-green mb-5">Services</span>
            <h2 data-ns-animate data-delay="0.3" className="mb-3">
              Designed for makers,{' '}
              <span className="text-primary-500">teams & entrepreneurs</span>
            </h2>
            <p data-ns-animate data-delay="0.4" className="mb-14 lg:max-w-[620px]">
              Built to support ambitious founders, agile teams, and visionary entrepreneurs. We turn
              ideas into strategic, user-first digital products.
            </p>
            <div data-ns-animate data-delay="0.5">
              <a
                href="/services"
                className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto"
              >
                <span>See use cases</span>
              </a>
            </div>
          </div>

          {/* Right stack cards */}
          <div className="stack-cards w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">

            <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
              <span className="block ns-shape-19 text-heading-2 text-secondary dark:text-accent" />
              <div className="space-y-1">
                <h5>Custom Software Development</h5>
                <ul className="space-y-1 mt-2">
                  {['Web Development', 'Mobile App Development', 'AI Solutions', 'UI/UX Design', 'Cloud & DevOps'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm opacity-70">
                      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/services" className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent inline-flex">
                <span>Our Services</span>
              </a>
            </div>

            <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
              <span className="block ns-shape-35 text-heading-2 text-secondary dark:text-accent" />
              <div className="space-y-1">
                <h5>Business teams</h5>
                <p>Automate workflows and streamline operations</p>
              </div>
              <a href="/services" className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent inline-flex">
                <span>Our Services</span>
              </a>
            </div>

            <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
              <span className="block ns-shape-4 text-heading-2 text-secondary dark:text-accent" />
              <div className="space-y-1">
                <h5>Freelancers & agencies</h5>
                <p>Deliver custom apps to your clients with ease</p>
              </div>
              <a href="/services" className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent inline-flex">
                <span>Our Services</span>
              </a>
            </div>

            <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 stack-cards__item border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
              <span className="block ns-shape-21 text-heading-2 text-secondary dark:text-accent" />
              <div className="space-y-1">
                <h5>Educators & creators</h5>
                <p>Build tools, portals, and learning apps fast</p>
              </div>
              <a href="/services" className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent inline-flex">
                <span>Our Services</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}