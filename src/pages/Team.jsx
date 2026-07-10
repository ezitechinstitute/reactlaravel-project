import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { useSwiper } from '../hooks/useAnimation'

export default function Team() {
  useSwiper('.sliding-swiper', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 2.5, spaceBetween: 24 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
  })

  return (
    <>
      <SEO title="Our Team" url="/team" />
      <main className="bg-background-5">

        <section className="pt-34 md:pt-39">
          <div className="main-container">
            <div className="space-y-20 md:space-y-28">

              <div className="space-y-2 text-center md:space-y-4">
                <div data-opai-animate data-delay="0.1" data-instant>
                  <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
                    <span className="flex size-4 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                      </svg>
                    </span>
                    <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
                      Our Team
                    </span>
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 data-opai-animate data-delay="0.2" data-instant className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 mx-auto w-full max-w-[580px] font-normal text-white/90">
                    Meet the Minds Behind Ezitech
                  </h2>
                  <p data-opai-animate data-delay="0.3" data-instant className="font-inter-tight text-tagline-2 mx-auto w-full text-center font-normal text-white/60 lg:max-w-[560px]">
                    A passionate team of engineers, designers, and strategists building the future of digital innovation.
                  </p>
                </div>
              </div>

              <div data-opai-animate data-delay="0.4" data-instant className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                    <span className="text-3xl font-instrument-serif font-normal text-white/90">50+</span>
                  </div>
                  <p className="text-tagline-3 text-white/50 text-center">Team Members</p>
                </div>
                <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    <span className="text-3xl font-instrument-serif font-normal text-white/90">15+</span>
                  </div>
                  <p className="text-tagline-3 text-white/50 text-center">Years Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z"/></svg>
                    <span className="text-3xl font-instrument-serif font-normal text-white/90">500+</span>
                  </div>
                  <p className="text-tagline-3 text-white/50 text-center">Projects Delivered</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>
                    <span className="text-3xl font-instrument-serif font-normal text-white/90">99%</span>
                  </div>
                  <p className="text-tagline-3 text-white/50 text-center">Client Satisfaction</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-[70px]">
              <div className="space-y-4 text-center">
                <div data-opai-animate data-delay="0.1">
                  <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
                    <span className="flex size-4 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                      </svg>
                    </span>
                    <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
                      Culture
                    </span>
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 data-opai-animate data-delay="0.2" className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                    Our Culture
                  </h2>
                  <p data-opai-animate data-delay="0.3" className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[550px] font-normal text-white/60">
                    We believe in collaboration, innovation, and continuous learning.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-opai-animate data-delay="0.1" className="border-stroke-1/10 group bg-background-7 relative overflow-hidden rounded-lg border p-8">
                  <div className="space-y-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z"/><path d="M12 6v6l4 2"/></svg>
                    </span>
                    <h3 className="text-manrope-heading-6 font-medium text-white/80">Innovation & Creativity</h3>
                    <p className="text-tagline-3 font-normal text-white/50">We encourage experimentation and out-of-the-box thinking.</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.2" className="border-stroke-1/10 group bg-background-7 relative overflow-hidden rounded-lg border p-8">
                  <div className="space-y-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                    </span>
                    <h3 className="text-manrope-heading-6 font-medium text-white/80">Collaboration</h3>
                    <p className="text-tagline-3 font-normal text-white/50">Cross-functional teams working together to solve complex problems.</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.3" className="border-stroke-1/10 group bg-background-7 relative overflow-hidden rounded-lg border p-8">
                  <div className="space-y-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                    </span>
                    <h3 className="text-manrope-heading-6 font-medium text-white/80">Growth Mindset</h3>
                    <p className="text-tagline-3 font-normal text-white/50">Continuous learning through workshops, courses, and conferences.</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.4" className="border-stroke-1/10 group bg-background-7 relative overflow-hidden rounded-lg border p-8">
                  <div className="space-y-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </span>
                    <h3 className="text-manrope-heading-6 font-medium text-white/80">Work-Life Balance</h3>
                    <p className="text-tagline-3 font-normal text-white/50">Flexible hours, remote options, and a supportive environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-4">
              <div data-opai-animate data-delay="0.1">
                <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
                  <span className="flex size-4 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                    </svg>
                  </span>
                  <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
                    About
                  </span>
                </span>
              </div>
              <h2 data-opai-animate data-delay="0.2" className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90">
                Our Journey in Pictures
              </h2>
            </div>
          </div>
          <div data-opai-animate data-delay="0.3" className="mt-14 xl:mt-[70px]">
            <div className="sliding-swiper overflow-hidden">
              <div className="swiper-wrapper w-full items-center">
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-162.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-163.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:90px_0_110px_0_#000_inset] md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-164.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-165.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-90px_0_110px_0_#11141D_inset] md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-166.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-167.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-70px_0_60px_0_#12161F_inset] md:h-[500px] xl:h-[650px]">
                    <img src="/images/opai-img-168.jpg" alt="about" className="size-full object-cover" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-[70px]">
              <div className="space-y-4 text-center">
                <div data-opai-animate data-delay="0.1">
                  <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
                    <span className="flex size-4 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                      </svg>
                    </span>
                    <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
                      Leadership
                    </span>
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 data-opai-animate data-delay="0.2" className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                    Leadership Team
                  </h2>
                  <p data-opai-animate data-delay="0.3" className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[550px] font-normal text-white/60">
                    Experienced leaders driving innovation and excellence across every department.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center justify-center gap-y-8 lg:gap-x-8">
                <div data-opai-animate data-delay="0.1" className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-stroke-1/10 group bg-background-5 relative h-[420px] w-full overflow-hidden rounded-lg border" aria-label="Team member profile">
                    <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                      <img src="/images/opai-avatar-img-88.png" alt="Alex Morgan, Chief Executive Officer" className="size-full object-cover" />
                    </figure>
                    <a href="/team-details" className="text-center">
                      <div className="bg-background-13/80 ease-team-ease-1 absolute bottom-[15px] left-1/2 w-[calc(100%-30px)] -translate-x-1/2 space-y-0.5 rounded-md p-5 backdrop-blur-[12px] transition-all duration-400 md:bottom-5 md:w-[calc(100%-40px)] lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                        <h3 className="text-manrope-heading-6 font-medium text-white/80">Alex Morgan</h3>
                        <p className="text-tagline-4 text-center font-normal text-white/50">CEO</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.2" className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-stroke-1/10 group bg-background-5 relative h-[420px] w-full overflow-hidden rounded-lg border" aria-label="Team member profile">
                    <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                      <img src="/images/opai-avatar-img-110.png" alt="Sophia Lee, Chief Technology Officer" className="size-full object-cover" />
                    </figure>
                    <a href="/team-details" className="text-center">
                      <div className="bg-background-13/80 ease-team-ease-1 absolute bottom-[15px] left-1/2 w-[calc(100%-30px)] -translate-x-1/2 space-y-0.5 rounded-md p-5 backdrop-blur-[12px] transition-all duration-400 md:bottom-5 md:w-[calc(100%-40px)] lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                        <h3 className="text-manrope-heading-6 font-medium text-white/80">Sophia Lee</h3>
                        <p className="text-tagline-4 text-center font-normal text-white/50">CTO</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.3" className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-stroke-1/10 group bg-background-5 relative h-[420px] w-full overflow-hidden rounded-lg border" aria-label="Team member profile">
                    <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                      <img src="/images/opai-avatar-img-111.png" alt="Daniel Wright, Head of Product" className="size-full object-cover" />
                    </figure>
                    <a href="/team-details" className="text-center">
                      <div className="bg-background-13/80 ease-team-ease-1 absolute bottom-[15px] left-1/2 w-[calc(100%-30px)] -translate-x-1/2 space-y-0.5 rounded-md p-5 backdrop-blur-[12px] transition-all duration-400 md:bottom-5 md:w-[calc(100%-40px)] lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                        <h3 className="text-manrope-heading-6 font-medium text-white/80">Daniel Wright</h3>
                        <p className="text-tagline-4 text-center font-normal text-white/50">Head of Product</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.4" className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="border-stroke-1/10 group bg-background-5 relative h-[420px] w-full overflow-hidden rounded-lg border" aria-label="Team member profile">
                    <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                      <img src="/images/opai-avatar-img-112.png" alt="Emily Carter, Lead AI Engineer" className="size-full object-cover" />
                    </figure>
                    <a href="/team-details" className="text-center">
                      <div className="bg-background-13/80 ease-team-ease-1 absolute bottom-[15px] left-1/2 w-[calc(100%-30px)] -translate-x-1/2 space-y-0.5 rounded-md p-5 backdrop-blur-[12px] transition-all duration-400 md:bottom-5 md:w-[calc(100%-40px)] lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                        <h3 className="text-manrope-heading-6 font-medium text-white/80">Emily Carter</h3>
                        <p className="text-tagline-4 text-center font-normal text-white/50">Lead AI Engineer</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-[70px]">
              <div className="space-y-4 text-center">
                <div data-opai-animate data-delay="0.1">
                  <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
                    <span className="flex size-4 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                      </svg>
                    </span>
                    <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
                      Experts
                    </span>
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 data-opai-animate data-delay="0.2" className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                    Meet Our Experts
                  </h2>
                  <p data-opai-animate data-delay="0.3" className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[550px] font-normal text-white/60">
                    Talented professionals dedicated to delivering exceptional results.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div data-opai-animate data-delay="0.1" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-01.png" alt="Darrell Steward, CEO" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Darrell Steward</h3>
                    <p className="text-tagline-4 font-normal text-white/50">CEO</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.15" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-02.png" alt="Wade Warren, CTO" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Wade Warren</h3>
                    <p className="text-tagline-4 font-normal text-white/50">CTO</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.2" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-03.png" alt="Kathryn Murphy, Lead Designer" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Kathryn Murphy</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Lead Designer</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.25" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-04.png" alt="Brooklyn Simmons, Lead Designer" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Brooklyn Simmons</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Lead Designer</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.3" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-05.png" alt="Cody Fisher, Product Manager" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Cody Fisher</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Product Manager</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.35" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-06.png" alt="Dianne Russell, Marketing Director" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Dianne Russell</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Marketing Director</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.4" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-07.png" alt="Esther Howard, UX Researcher" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Esther Howard</h3>
                    <p className="text-tagline-4 font-normal text-white/50">UX Researcher</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.45" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-08.png" alt="Jacob Jones, Frontend Developer" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Jacob Jones</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Frontend Developer</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.5" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-09.png" alt="Kristin Watson, Backend Developer" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Kristin Watson</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Backend Developer</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.55" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-10.png" alt="Ralph Edwards, Data Scientist" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Ralph Edwards</h3>
                    <p className="text-tagline-4 font-normal text-white/50">Data Scientist</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.6" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-11.png" alt="Savannah Nguyen, QA Engineer" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Savannah Nguyen</h3>
                    <p className="text-tagline-4 font-normal text-white/50">QA Engineer</p>
                  </div>
                </div>
                <div data-opai-animate data-delay="0.65" className="border-stroke-1/10 group bg-background-5 relative overflow-hidden rounded-lg border" aria-label="Team member profile">
                  <figure className="size-full overflow-hidden rounded-lg grayscale-100 transition-all duration-400 group-hover:grayscale-0">
                    <img src="/images/opai-avatar-img-12.png" alt="Jerome Bell, DevOps Engineer" className="size-full object-cover" />
                  </figure>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-5 via-background-5/90 to-transparent p-4 pt-8">
                    <h3 className="text-tagline-2 font-medium text-white/90">Jerome Bell</h3>
                    <p className="text-tagline-4 font-normal text-white/50">DevOps Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden pt-20 md:pt-30 lg:pt-44">
          <div className="main-container">
            <div className="space-y-4 mb-14">
              <div data-opai-animate data-delay="0.1">
                <span className="fill-opai-blue justify-center text-white/50 flex items-center gap-x-1">
                  <span className="flex size-4 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                    </svg>
                  </span>
                  <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 font-normal">
                    Impact
                  </span>
                </span>
              </div>
              <h2 data-opai-animate data-delay="0.2" className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90">
                Our Impact in Numbers
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div data-opai-animate data-delay="0.1" className="bg-background-7 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-3">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-opai-blue/15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z"/></svg>
                </span>
                <div className="font-instrument-serif text-5xl font-normal text-white/90">500+</div>
                <p className="text-tagline-2 text-white/60 font-normal">Successful Projects</p>
              </div>
              <div data-opai-animate data-delay="0.2" className="bg-background-7 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-3">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-opai-blue/15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M3 21v-2a6 6 0 016-6h6a6 6 0 016 6v2"/><circle cx="12" cy="8" r="2" fill="#8d59ff"/></svg>
                </span>
                <div className="font-instrument-serif text-5xl font-normal text-white/90">99%</div>
                <p className="text-tagline-2 text-white/60 font-normal">Client Satisfaction</p>
              </div>
              <div data-opai-animate data-delay="0.3" className="bg-background-7 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-3">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-opai-blue/15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </span>
                <div className="font-instrument-serif text-5xl font-normal text-white/90">50+</div>
                <p className="text-tagline-2 text-white/60 font-normal">Team Members</p>
              </div>
              <div data-opai-animate data-delay="0.4" className="bg-background-7 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-3">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-opai-blue/15">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <div className="font-instrument-serif text-5xl font-normal text-white/90">3M+</div>
                <p className="text-tagline-2 text-white/60 font-normal">Hours Saved</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 md:pt-30 lg:pt-44 pb-20 md:pb-30">
          <div className="main-container">
            <div data-opai-animate data-delay="0.1" className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-opai-blue/20 via-purple-800/20 to-background-7 border border-stroke-1/10 p-10 md:p-16 text-center">
              <div className="absolute top-0 right-0 size-64 rounded-full bg-opai-blue/10 blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 size-48 rounded-full bg-purple-600/10 blur-[60px]"></div>
              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                  Join Our Team
                </h2>
                <p className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-lg mx-auto">
                  Ready to make an impact? Explore career opportunities at Ezitech.
                </p>
                <div>
                  <Link to="/careers" className="group bg-background-7 hover:border-stroke-3 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-8 py-4 transition-all duration-300 ease-in-out">
                    <div className="h-full max-h-5 overflow-hidden">
                      <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
                        View Open Positions
                      </span>
                      <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">
                        View Open Positions
                      </span>
                    </div>
                    <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
                      <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
                        <span className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </span>
                      </span>
                      <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
