import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAnimation } from '../../hooks/useAnimation' // Section 4.4 ke mutabik hook import kiya

export default function ServicesStackSection() {
  const containerRef = useRef(null)

  // Array format actual project ke data aur standard styling ke sath
  const servicesList = [
    {
      index: 0,
      shapeClass: 'ns-shape-1',
      title: 'Email & SMS marketing',
      desc: 'Engage your audience with targeted email and SMS campaigns.',
    },
    {
      index: 1,
      shapeClass: 'ns-shape-2',
      title: 'SEO (Local & Global)',
      desc: 'We help your business reach the right audience, near or far.',
    },
    {
      index: 2,
      shapeClass: 'ns-shape-3',
      title: 'PPC & paid media',
      desc: "Boost your brand's visibility and attract high-converting traffic with our PPC campaigns.",
    },
    {
      index: 3,
      shapeClass: 'ns-shape-4',
      title: 'Social media ads',
      desc: 'Reach your target audience with tailored social media campaigns.',
    },
    {
      index: 4,
      shapeClass: 'ns-shape-5',
      title: 'Social media management',
      desc: 'We build and maintain a strong online presence.',
    },
  ]

  // Template ki Custom Stack Animation Guide ke rules ke mutabik inject ki
  useAnimation(() => {
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (!gsap || !ScrollTrigger) return

    const items = containerRef.current?.querySelectorAll('.js-stack-cards__item')
    if (!items || items.length === 0) return

    // Har card ke liye stack trigger generate ho rha hai jo scroll pe move karega
    items.forEach((item, index) => {
      if (index === items.length - 1) return // Last card stack ke end pe hi rahega

      ScrollTrigger.create({
        trigger: item,
        start: 'top 120px', // sticky top coordinate alignment
        endTrigger: containerRef.current,
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
      })
    })

    // Component unmount par clean-up taake performance crash na ho[cite: 1]
    return () => {
      ScrollTrigger?.getAll().forEach(t => t.kill())
    }
  })

  return (
    <section ref={containerRef} className="bg-background-5 py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44 relative">
      <div className="main-container">
        <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10">
          
          {/* LEFT SIDE: Actual Project Colors aur Layout Content */}
          <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
            <div className="pb-4" data-opai-animate data-delay="0.1">
              <span className="fill-opai-blue justify-center text-white/50 lg:justify-start flex items-center gap-x-1">
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                  </svg>
                </span>
                <span className="font-inter-tight text-tagline-4 justify-center text-white/50 lg:justify-start font-normal">
                  Our Services
                </span>
              </span>
            </div>

            <h2
              className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90 max-md:leading-[1.1] lg:text-left mb-3"
              data-opai-animate
              data-delay="0.2"
            >
              Marketing solutions that drive results
            </h2>
            
            <p
              className="text-tagline-2 text-center font-normal text-white/60 lg:text-left mb-8"
              data-opai-animate
              data-delay="0.3"
            >
              Trusted by 100+ businesses in retail, healthcare, tech, and more.
            </p>

            <div className="pt-4" data-opai-animate data-delay="0.3" >
              <Link
                to="/services"
                className="group bg-background-7 hover:border-stroke-3 w-[85%] sm:w-fit mx-auto lg:mx-0 relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
              >
                <div className="h-full max-h-5 overflow-hidden">
                  <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
                    Explore all services
                  </span>
                  <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
                    Explore all services
                  </span>
                </div>

                <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
                  <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
                    <span className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                  <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Stacked Cards Column with Pure Actual Colors */}
          <div className="w-full lg:flex-1 stack-cards lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto space-y-6">
            {servicesList.map((service, i) => (
              <div
                key={service.index}
                className="js-stack-cards__item p-8 bg-background-6 rounded-xl space-y-6 border border-stroke-1/11 max-sm:min-h-[255px] will-change-transform sticky"
                style={{ top: `${120 + i * 20}px` }} // Dynamic top inline calculation for standard fallback stack layer
                data-opai-animate
                data-delay={`0.${i + 1}`}
              >
                {/* Custom Template Icons with Actual Project color classes */}
                <span className={`block ${service.shapeClass} text-[52px] text-white/60 max-lg:scale-90`}></span>
                <div className="space-y-1">
                  <h3 className="md:text-is-heading-5 font-instrument-serif text-[26px] font-normal text-white/80">
                    {service.title}
                  </h3>
                  <p className="text-tagline-2 font-normal text-white/60">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}