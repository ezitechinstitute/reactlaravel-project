import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <SEO title="Home" url="/" />
<main className="bg-background-5">
      
<section
  className="bg-background-5 relative overflow-hidden"
style={{ paddingTop: "180px", paddingBottom: "240px" }}>
  <div className="main-container relative z-20" style={{ display: "flex", alignItems: "center" }}>
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 w-full" style={{ gap: "3rem" }}>

      
      <div className="flex flex-col items-center text-center">

        
        <div id="hero-slider-wrap" className="overflow-hidden w-full" style={{ minHeight: "1.2em", marginBottom: "1.25rem" }}>
          <h1
            id="hero-slide-text"
            className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal break-words text-white/90 leading-[1.1] transition-all duration-500"
            data-opai-animate
            data-delay="0.1"
          >
            Custom Web &amp; <span style={{ color: "#8d59ff" }}>Software</span> Development
          </h1>
        </div>

        
        <p className="text-tagline-2 font-normal text-white/60" style={{ maxWidth: "500px", marginBottom: "2rem" }} data-opai-animate data-delay="0.2">
          We build powerful, scalable and user-centric digital solutions that drive growth and create lasting impact.
        </p>

        
        <div style={{ marginBottom: "1.5rem" }} data-opai-animate data-delay="0.3">
          <a href="/contact" className="group bg-background-7 hover:border-stroke-3 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out">
            <div className="h-full max-h-5 overflow-hidden">
              <span className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Get Started</span>
              <span className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]">Get Started</span>
            </div>
            <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
              <span className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out">
                <span className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </span>
              <span className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </a>
        </div>

        
        <div className="flex items-center gap-4" style={{ marginBottom: "1.75rem" }} data-opai-animate data-delay="0.4">
          <div className="flex -space-x-2.5">
            <img data-opai-avatar data-avatar-delay="0.1" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-01.png" alt="Avatar 1" />
            <img data-opai-avatar data-avatar-delay="0.2" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-02.png" alt="Avatar 2" />
            <img data-opai-avatar data-avatar-delay="0.3" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-03.png" alt="Avatar 3" />
            <img data-opai-avatar data-avatar-delay="0.4" className="inline-block size-9 rounded-full ring-2 ring-white" src="/images/opai-avatar-img-04.png" alt="Avatar 4" />
            <div data-opai-avatar data-avatar-delay="0.5" className="text-tagline-4 inline-flex size-9 items-center justify-center rounded-full bg-[#0d0d1280] font-medium text-white/80 ring-2 ring-white backdrop-blur-[6px]">99+</div>
          </div>
          <div className="text-left">
            <p className="text-tagline-3 block font-medium text-white/90">Trusted by 20k+</p>
            <p className="text-tagline-4 text-white/60">Customers across the globe</p>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.5">
          <div className="hero-slide hero-slide-active flex flex-wrap gap-2 justify-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Web Development</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Custom Software</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Mobile Apps</span>
          </div>
          <div className="hero-slide hidden flex-wrap gap-2 justify-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">SaaS Platform</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Cloud Products</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Scalable SaaS</span>
          </div>
          <div className="hero-slide hidden flex-wrap gap-2 justify-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">AI Solutions</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Automation</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Digital Growth</span>
          </div>
          <div className="hero-slide hidden flex-wrap gap-2 justify-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Dev Team</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Dedicated Team</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-tagline-3 font-medium text-white/80 backdrop-blur-sm">Expert Devs</span>
          </div>
        </div>

      </div>

      
      <div className="relative flex w-full items-center justify-end" data-opai-animate data-delay="0.3" style={{ minHeight: "440px" }}>
        <div id="hero-box-wrapper" style={{ position: "relative", width: "360px", maxWidth: "90vw", flexShrink: "0" }}>

        
        <div className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2" style={{ width: "118%", height: "106%" }}>
          <svg className="h-full w-full" viewBox="0 0 600 600" fill="none" preserveAspectRatio="xMidYMid meet">
            <ellipse cx="300" cy="300" rx="295" ry="188" stroke="rgba(141,89,255,0.55)" strokeWidth="1.5" />
            <circle cx="300" cy="112" r="5" fill="#a78bfa" />
            <circle cx="595" cy="300" r="4" fill="#227eff" />
            <circle cx="300" cy="488" r="5" fill="#8d59ff" />
            <circle cx="5" cy="300" r="3.5" fill="#a78bfa" />
            <circle cx="88" cy="148" r="3" fill="#227eff" />
            <circle cx="512" cy="452" r="3.5" fill="#8d59ff" />
          </svg>
        </div>

        
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-0 -translate-x-1/2 rounded-full blur-2xl" style={{ height: "80px", width: "240px", background: "radial-gradient(circle,rgba(141,89,255,0.7) 0%,rgba(141,89,255,0) 70%)" }}></div>

        
        <div className="hero-tilt relative" style={{ width: "88%" }}>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] border border-white/10 bg-white/5" style={{ transform: "translate(32px,20px) scale(0.97)" }}></div>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[26px] border border-white/10 bg-white/5" style={{ transform: "translate(16px,10px) scale(0.985)" }}></div>
          <div id="hero-image-stack" className="relative overflow-hidden rounded-[26px]"
            style={{ aspectRatio: "3/4", boxShadow: "0 0 0 2.5px rgba(141,89,255,0.85),0 0 60px 12px rgba(141,89,255,0.55),0 0 120px 20px rgba(141,89,255,0.25),0 40px 80px -12px rgba(0,0,0,0.85)" }}>
            <img className="hero-img hero-img-active absolute inset-0 object-cover" style={{ width: "100%", height: "100%" }} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="Web Development" />
            <img className="hero-img absolute inset-0 object-cover" style={{ width: "100%", height: "100%", opacity: "0" }} src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="SaaS Products" />
            <img className="hero-img absolute inset-0 object-cover" style={{ width: "100%", height: "100%", opacity: "0" }} src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80" alt="AI" />
            <img className="hero-img absolute inset-0 object-cover" style={{ width: "100%", height: "100%", opacity: "0" }} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Dedicated Team" />
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(160deg,rgba(141,89,255,0.15) 0%,rgba(34,126,255,0.05) 50%,rgba(141,89,255,0.2) 100%)" }}></div>
          </div>
        </div>
        </div>
      </div>

    </div>
  </div>


  
  <figure
    className="absolute bottom-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2 md:-bottom-10 lg:bottom-0"
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="relative top-0 mx-auto h-auto w-full max-w-full sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1482px]"
  viewBox="0 0 1482 1378"
  fill="none"
  preserveAspectRatio="xMidYMid meet"
>
  <path
    id="curve-path-1"
    d="M420.5 0V688.857C420.5 739.32 398.08 787.176 359.307 819.475L221.193 934.525C182.42 966.824 160 1014.68 160 1065.14V1436"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-2"
    d="M1040.5 0V688.857C1040.5 739.32 1057.92 787.176 1096.69 819.475L1234.81 934.525C1273.58 966.824 1296 1014.68 1296 1065.14V1436"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-3"
    d="M296.5 0V647.386C296.5 696.681 275.102 743.549 237.854 775.839L54.6455 934.661C17.3976 966.951 -4 1013.82 -4 1063.11V1469.5"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-4"
    d="M1164.5 0V647.386C1164.5 696.681 1185.9 743.549 1223.15 775.839L1406.35 934.661C1443.6 966.951 1465 1013.82 1465 1063.11V1469.5"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-5"
    d="M544.5 0V704.584C544.5 749.67 526.589 792.911 494.708 824.792L383.792 935.708C351.911 967.589 334 1010.83 334 1055.92V1469.5"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-6"
    d="M916.5 0V704.584C916.5 749.67 934.411 792.911 966.292 824.792L1077.21 935.708C1109.09 967.589 1127 1010.83 1127 1055.92V1469.5"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-7"
    d="M668.5 0V679.422C668.5 709.28 660.636 738.611 645.7 764.465L540.8 946.035C525.864 971.889 518 1001.22 518 1031.08V1469.5"
    className="stroke-[#fafcff0d]"
  />
  <path
    id="curve-path-8"
    d="M792.5 0V679.422C792.5 709.28 800.364 738.611 815.3 764.465L920.2 946.035C935.136 971.889 943 1001.22 943 1031.08V1469.5"
    className="stroke-[#fafcff0d]"
  />

  
  <rect id="rect-1-1" width="1" height="1" />
  <rect id="rect-1-2" width="1" height="1" />
  <rect id="rect-1-3" width="1" height="1" />
  <rect id="rect-1-4" width="1" height="1" />
  <rect id="rect-1-5" width="1" height="1" />
  <rect id="rect-1-6" width="1" height="1" />
  <rect id="rect-1-7" width="1" height="1" />
  <rect id="rect-1-8" width="1" height="1" />
  <rect id="rect-1-9" width="1" height="1" />
  <rect id="rect-1-10" width="1" height="1" />
  <rect id="rect-1-11" width="1" height="1" />
  <rect id="rect-1-12" width="1" height="1" />
  <rect id="rect-1-13" width="1" height="1" />
  <rect id="rect-1-14" width="1" height="1" />
  <rect id="rect-1-15" width="1" height="1" />
  <rect id="rect-1-16" width="1" height="1" />
  <rect id="rect-1-17" width="1" height="1" />
  <rect id="rect-1-18" width="1" height="1" />
  <rect id="rect-1-19" width="1" height="1" />
  <rect id="rect-1-20" width="1" height="1" />
  <rect id="rect-1-21" width="1" height="1" />
  <rect id="rect-1-22" width="1" height="1" />
  <rect id="rect-1-23" width="1" height="1" />
  <rect id="rect-1-24" width="1" height="1" />
  <rect id="rect-1-25" width="1" height="1" />
  <rect id="rect-1-26" width="1" height="1" />
  <rect id="rect-1-27" width="1" height="1" />
  <rect id="rect-1-28" width="1" height="1" />
  <rect id="rect-1-29" width="1" height="1" />
  <rect id="rect-1-30" width="1" height="1" />
  <rect id="rect-1-31" width="1" height="1" />
  <rect id="rect-1-32" width="1" height="1" />
  <rect id="rect-1-33" width="1" height="1" />
  <rect id="rect-1-34" width="1" height="1" />
  <rect id="rect-1-35" width="1" height="1" />
  <rect id="rect-1-36" width="1" height="1" />
  <rect id="rect-1-37" width="1" height="1" />
  <rect id="rect-1-38" width="1" height="1" />
  <rect id="rect-1-39" width="1" height="1" />
  <rect id="rect-1-40" width="1" height="1" />
  <rect id="rect-1-41" width="1" height="1" />
  <rect id="rect-1-42" width="1" height="1" />
  <rect id="rect-1-43" width="1" height="1" />
  <rect id="rect-1-44" width="1" height="1" />
  <rect id="rect-1-45" width="1" height="1" />
  <rect id="rect-1-46" width="1" height="1" />
  <rect id="rect-1-47" width="1" height="1" />
  <rect id="rect-1-48" width="1" height="1" />
  <rect id="rect-1-49" width="1" height="1" />
  <rect id="rect-1-50" width="1" height="1" />
  <rect id="rect-1-51" width="1" height="1" />
  <rect id="rect-1-52" width="1" height="1" />
  <rect id="rect-1-53" width="1" height="1" />
  <rect id="rect-1-54" width="1" height="1" />
  <rect id="rect-1-55" width="1" height="1" />
  <rect id="rect-1-56" width="1" height="1" />
  <rect id="rect-1-57" width="1" height="1" />
  <rect id="rect-1-58" width="1" height="1" />
  <rect id="rect-1-59" width="1" height="1" />
  <rect id="rect-1-60" width="1" height="1" />
  <rect id="rect-2-1" width="1" height="1" />
  <rect id="rect-2-2" width="1" height="1" />
  <rect id="rect-2-3" width="1" height="1" />
  <rect id="rect-2-4" width="1" height="1" />
  <rect id="rect-2-5" width="1" height="1" />
  <rect id="rect-2-6" width="1" height="1" />
  <rect id="rect-2-7" width="1" height="1" />
  <rect id="rect-2-8" width="1" height="1" />
  <rect id="rect-2-9" width="1" height="1" />
  <rect id="rect-2-10" width="1" height="1" />
  <rect id="rect-2-11" width="1" height="1" />
  <rect id="rect-2-12" width="1" height="1" />
  <rect id="rect-2-13" width="1" height="1" />
  <rect id="rect-2-14" width="1" height="1" />
  <rect id="rect-2-15" width="1" height="1" />
  <rect id="rect-2-16" width="1" height="1" />
  <rect id="rect-2-17" width="1" height="1" />
  <rect id="rect-2-18" width="1" height="1" />
  <rect id="rect-2-19" width="1" height="1" />
  <rect id="rect-2-20" width="1" height="1" />
  <rect id="rect-2-21" width="1" height="1" />
  <rect id="rect-2-22" width="1" height="1" />
  <rect id="rect-2-23" width="1" height="1" />
  <rect id="rect-2-24" width="1" height="1" />
  <rect id="rect-2-25" width="1" height="1" />
  <rect id="rect-2-26" width="1" height="1" />
  <rect id="rect-2-27" width="1" height="1" />
  <rect id="rect-2-28" width="1" height="1" />
  <rect id="rect-2-29" width="1" height="1" />
  <rect id="rect-2-30" width="1" height="1" />
  <rect id="rect-2-31" width="1" height="1" />
  <rect id="rect-2-32" width="1" height="1" />
  <rect id="rect-2-33" width="1" height="1" />
  <rect id="rect-2-34" width="1" height="1" />
  <rect id="rect-2-35" width="1" height="1" />
  <rect id="rect-2-36" width="1" height="1" />
  <rect id="rect-2-37" width="1" height="1" />
  <rect id="rect-2-38" width="1" height="1" />
  <rect id="rect-2-39" width="1" height="1" />
  <rect id="rect-2-40" width="1" height="1" />
  <rect id="rect-2-41" width="1" height="1" />
  <rect id="rect-2-42" width="1" height="1" />
  <rect id="rect-2-43" width="1" height="1" />
  <rect id="rect-2-44" width="1" height="1" />
  <rect id="rect-2-45" width="1" height="1" />
  <rect id="rect-2-46" width="1" height="1" />
  <rect id="rect-2-47" width="1" height="1" />
  <rect id="rect-2-48" width="1" height="1" />
  <rect id="rect-2-49" width="1" height="1" />
  <rect id="rect-2-50" width="1" height="1" />
  <rect id="rect-2-51" width="1" height="1" />
  <rect id="rect-2-52" width="1" height="1" />
  <rect id="rect-2-53" width="1" height="1" />
  <rect id="rect-2-54" width="1" height="1" />
  <rect id="rect-2-55" width="1" height="1" />
  <rect id="rect-2-56" width="1" height="1" />
  <rect id="rect-2-57" width="1" height="1" />
  <rect id="rect-2-58" width="1" height="1" />
  <rect id="rect-2-59" width="1" height="1" />
  <rect id="rect-2-60" width="1" height="1" />
  <rect id="rect-3-1" width="1" height="1" />
  <rect id="rect-3-2" width="1" height="1" />
  <rect id="rect-3-3" width="1" height="1" />
  <rect id="rect-3-4" width="1" height="1" />
  <rect id="rect-3-5" width="1" height="1" />
  <rect id="rect-3-6" width="1" height="1" />
  <rect id="rect-3-7" width="1" height="1" />
  <rect id="rect-3-8" width="1" height="1" />
  <rect id="rect-3-9" width="1" height="1" />
  <rect id="rect-3-10" width="1" height="1" />
  <rect id="rect-3-11" width="1" height="1" />
  <rect id="rect-3-12" width="1" height="1" />
  <rect id="rect-3-13" width="1" height="1" />
  <rect id="rect-3-14" width="1" height="1" />
  <rect id="rect-3-15" width="1" height="1" />
  <rect id="rect-3-16" width="1" height="1" />
  <rect id="rect-3-17" width="1" height="1" />
  <rect id="rect-3-18" width="1" height="1" />
  <rect id="rect-3-19" width="1" height="1" />
  <rect id="rect-3-20" width="1" height="1" />
  <rect id="rect-3-21" width="1" height="1" />
  <rect id="rect-3-22" width="1" height="1" />
  <rect id="rect-3-23" width="1" height="1" />
  <rect id="rect-3-24" width="1" height="1" />
  <rect id="rect-3-25" width="1" height="1" />
  <rect id="rect-3-26" width="1" height="1" />
  <rect id="rect-3-27" width="1" height="1" />
  <rect id="rect-3-28" width="1" height="1" />
  <rect id="rect-3-29" width="1" height="1" />
  <rect id="rect-3-30" width="1" height="1" />
  <rect id="rect-3-31" width="1" height="1" />
  <rect id="rect-3-32" width="1" height="1" />
  <rect id="rect-3-33" width="1" height="1" />
  <rect id="rect-3-34" width="1" height="1" />
  <rect id="rect-3-35" width="1" height="1" />
  <rect id="rect-3-36" width="1" height="1" />
  <rect id="rect-3-37" width="1" height="1" />
  <rect id="rect-3-38" width="1" height="1" />
  <rect id="rect-3-39" width="1" height="1" />
  <rect id="rect-3-40" width="1" height="1" />
  <rect id="rect-3-41" width="1" height="1" />
  <rect id="rect-3-42" width="1" height="1" />
  <rect id="rect-3-43" width="1" height="1" />
  <rect id="rect-3-44" width="1" height="1" />
  <rect id="rect-3-45" width="1" height="1" />
  <rect id="rect-3-46" width="1" height="1" />
  <rect id="rect-3-47" width="1" height="1" />
  <rect id="rect-3-48" width="1" height="1" />
  <rect id="rect-3-49" width="1" height="1" />
  <rect id="rect-3-50" width="1" height="1" />
  <rect id="rect-3-51" width="1" height="1" />
  <rect id="rect-3-52" width="1" height="1" />
  <rect id="rect-3-53" width="1" height="1" />
  <rect id="rect-3-54" width="1" height="1" />
  <rect id="rect-3-55" width="1" height="1" />
  <rect id="rect-3-56" width="1" height="1" />
  <rect id="rect-3-57" width="1" height="1" />
  <rect id="rect-3-58" width="1" height="1" />
  <rect id="rect-3-59" width="1" height="1" />
  <rect id="rect-3-60" width="1" height="1" />
  <rect id="rect-4-1" width="1" height="1" />
  <rect id="rect-4-2" width="1" height="1" />
  <rect id="rect-4-3" width="1" height="1" />
  <rect id="rect-4-4" width="1" height="1" />
  <rect id="rect-4-5" width="1" height="1" />
  <rect id="rect-4-6" width="1" height="1" />
  <rect id="rect-4-7" width="1" height="1" />
  <rect id="rect-4-8" width="1" height="1" />
  <rect id="rect-4-9" width="1" height="1" />
  <rect id="rect-4-10" width="1" height="1" />
  <rect id="rect-4-11" width="1" height="1" />
  <rect id="rect-4-12" width="1" height="1" />
  <rect id="rect-4-13" width="1" height="1" />
  <rect id="rect-4-14" width="1" height="1" />
  <rect id="rect-4-15" width="1" height="1" />
  <rect id="rect-4-16" width="1" height="1" />
  <rect id="rect-4-17" width="1" height="1" />
  <rect id="rect-4-18" width="1" height="1" />
  <rect id="rect-4-19" width="1" height="1" />
  <rect id="rect-4-20" width="1" height="1" />
  <rect id="rect-4-21" width="1" height="1" />
  <rect id="rect-4-22" width="1" height="1" />
  <rect id="rect-4-23" width="1" height="1" />
  <rect id="rect-4-24" width="1" height="1" />
  <rect id="rect-4-25" width="1" height="1" />
  <rect id="rect-4-26" width="1" height="1" />
  <rect id="rect-4-27" width="1" height="1" />
  <rect id="rect-4-28" width="1" height="1" />
  <rect id="rect-4-29" width="1" height="1" />
  <rect id="rect-4-30" width="1" height="1" />
  <rect id="rect-4-31" width="1" height="1" />
  <rect id="rect-4-32" width="1" height="1" />
  <rect id="rect-4-33" width="1" height="1" />
  <rect id="rect-4-34" width="1" height="1" />
  <rect id="rect-4-35" width="1" height="1" />
  <rect id="rect-4-36" width="1" height="1" />
  <rect id="rect-4-37" width="1" height="1" />
  <rect id="rect-4-38" width="1" height="1" />
  <rect id="rect-4-39" width="1" height="1" />
  <rect id="rect-4-40" width="1" height="1" />
  <rect id="rect-4-41" width="1" height="1" />
  <rect id="rect-4-42" width="1" height="1" />
  <rect id="rect-4-43" width="1" height="1" />
  <rect id="rect-4-44" width="1" height="1" />
  <rect id="rect-4-45" width="1" height="1" />
  <rect id="rect-4-46" width="1" height="1" />
  <rect id="rect-4-47" width="1" height="1" />
  <rect id="rect-4-48" width="1" height="1" />
  <rect id="rect-4-49" width="1" height="1" />
  <rect id="rect-4-50" width="1" height="1" />
  <rect id="rect-4-51" width="1" height="1" />
  <rect id="rect-4-52" width="1" height="1" />
  <rect id="rect-4-53" width="1" height="1" />
  <rect id="rect-4-54" width="1" height="1" />
  <rect id="rect-4-55" width="1" height="1" />
  <rect id="rect-4-56" width="1" height="1" />
  <rect id="rect-4-57" width="1" height="1" />
  <rect id="rect-4-58" width="1" height="1" />
  <rect id="rect-4-59" width="1" height="1" />
  <rect id="rect-4-60" width="1" height="1" />
  <rect id="rect-5-1" width="1" height="1" />
  <rect id="rect-5-2" width="1" height="1" />
  <rect id="rect-5-3" width="1" height="1" />
  <rect id="rect-5-4" width="1" height="1" />
  <rect id="rect-5-5" width="1" height="1" />
  <rect id="rect-5-6" width="1" height="1" />
  <rect id="rect-5-7" width="1" height="1" />
  <rect id="rect-5-8" width="1" height="1" />
  <rect id="rect-5-9" width="1" height="1" />
  <rect id="rect-5-10" width="1" height="1" />
  <rect id="rect-5-11" width="1" height="1" />
  <rect id="rect-5-12" width="1" height="1" />
  <rect id="rect-5-13" width="1" height="1" />
  <rect id="rect-5-14" width="1" height="1" />
  <rect id="rect-5-15" width="1" height="1" />
  <rect id="rect-5-16" width="1" height="1" />
  <rect id="rect-5-17" width="1" height="1" />
  <rect id="rect-5-18" width="1" height="1" />
  <rect id="rect-5-19" width="1" height="1" />
  <rect id="rect-5-20" width="1" height="1" />
  <rect id="rect-5-21" width="1" height="1" />
  <rect id="rect-5-22" width="1" height="1" />
  <rect id="rect-5-23" width="1" height="1" />
  <rect id="rect-5-24" width="1" height="1" />
  <rect id="rect-5-25" width="1" height="1" />
  <rect id="rect-5-26" width="1" height="1" />
  <rect id="rect-5-27" width="1" height="1" />
  <rect id="rect-5-28" width="1" height="1" />
  <rect id="rect-5-29" width="1" height="1" />
  <rect id="rect-5-30" width="1" height="1" />
  <rect id="rect-5-31" width="1" height="1" />
  <rect id="rect-5-32" width="1" height="1" />
  <rect id="rect-5-33" width="1" height="1" />
  <rect id="rect-5-34" width="1" height="1" />
  <rect id="rect-5-35" width="1" height="1" />
  <rect id="rect-5-36" width="1" height="1" />
  <rect id="rect-5-37" width="1" height="1" />
  <rect id="rect-5-38" width="1" height="1" />
  <rect id="rect-5-39" width="1" height="1" />
  <rect id="rect-5-40" width="1" height="1" />
  <rect id="rect-5-41" width="1" height="1" />
  <rect id="rect-5-42" width="1" height="1" />
  <rect id="rect-5-43" width="1" height="1" />
  <rect id="rect-5-44" width="1" height="1" />
  <rect id="rect-5-45" width="1" height="1" />
  <rect id="rect-5-46" width="1" height="1" />
  <rect id="rect-5-47" width="1" height="1" />
  <rect id="rect-5-48" width="1" height="1" />
  <rect id="rect-5-49" width="1" height="1" />
  <rect id="rect-5-50" width="1" height="1" />
  <rect id="rect-5-51" width="1" height="1" />
  <rect id="rect-5-52" width="1" height="1" />
  <rect id="rect-5-53" width="1" height="1" />
  <rect id="rect-5-54" width="1" height="1" />
  <rect id="rect-5-55" width="1" height="1" />
  <rect id="rect-5-56" width="1" height="1" />
  <rect id="rect-5-57" width="1" height="1" />
  <rect id="rect-5-58" width="1" height="1" />
  <rect id="rect-5-59" width="1" height="1" />
  <rect id="rect-5-60" width="1" height="1" />
  <rect id="rect-6-1" width="1" height="1" />
  <rect id="rect-6-2" width="1" height="1" />
  <rect id="rect-6-3" width="1" height="1" />
  <rect id="rect-6-4" width="1" height="1" />
  <rect id="rect-6-5" width="1" height="1" />
  <rect id="rect-6-6" width="1" height="1" />
  <rect id="rect-6-7" width="1" height="1" />
  <rect id="rect-6-8" width="1" height="1" />
  <rect id="rect-6-9" width="1" height="1" />
  <rect id="rect-6-10" width="1" height="1" />
  <rect id="rect-6-11" width="1" height="1" />
  <rect id="rect-6-12" width="1" height="1" />
  <rect id="rect-6-13" width="1" height="1" />
  <rect id="rect-6-14" width="1" height="1" />
  <rect id="rect-6-15" width="1" height="1" />
  <rect id="rect-6-16" width="1" height="1" />
  <rect id="rect-6-17" width="1" height="1" />
  <rect id="rect-6-18" width="1" height="1" />
  <rect id="rect-6-19" width="1" height="1" />
  <rect id="rect-6-20" width="1" height="1" />
  <rect id="rect-6-21" width="1" height="1" />
  <rect id="rect-6-22" width="1" height="1" />
  <rect id="rect-6-23" width="1" height="1" />
  <rect id="rect-6-24" width="1" height="1" />
  <rect id="rect-6-25" width="1" height="1" />
  <rect id="rect-6-26" width="1" height="1" />
  <rect id="rect-6-27" width="1" height="1" />
  <rect id="rect-6-28" width="1" height="1" />
  <rect id="rect-6-29" width="1" height="1" />
  <rect id="rect-6-30" width="1" height="1" />
  <rect id="rect-6-31" width="1" height="1" />
  <rect id="rect-6-32" width="1" height="1" />
  <rect id="rect-6-33" width="1" height="1" />
  <rect id="rect-6-34" width="1" height="1" />
  <rect id="rect-6-35" width="1" height="1" />
  <rect id="rect-6-36" width="1" height="1" />
  <rect id="rect-6-37" width="1" height="1" />
  <rect id="rect-6-38" width="1" height="1" />
  <rect id="rect-6-39" width="1" height="1" />
  <rect id="rect-6-40" width="1" height="1" />
  <rect id="rect-6-41" width="1" height="1" />
  <rect id="rect-6-42" width="1" height="1" />
  <rect id="rect-6-43" width="1" height="1" />
  <rect id="rect-6-44" width="1" height="1" />
  <rect id="rect-6-45" width="1" height="1" />
  <rect id="rect-6-46" width="1" height="1" />
  <rect id="rect-6-47" width="1" height="1" />
  <rect id="rect-6-48" width="1" height="1" />
  <rect id="rect-6-49" width="1" height="1" />
  <rect id="rect-6-50" width="1" height="1" />
  <rect id="rect-6-51" width="1" height="1" />
  <rect id="rect-6-52" width="1" height="1" />
  <rect id="rect-6-53" width="1" height="1" />
  <rect id="rect-6-54" width="1" height="1" />
  <rect id="rect-6-55" width="1" height="1" />
  <rect id="rect-6-56" width="1" height="1" />
  <rect id="rect-6-57" width="1" height="1" />
  <rect id="rect-6-58" width="1" height="1" />
  <rect id="rect-6-59" width="1" height="1" />
  <rect id="rect-6-60" width="1" height="1" />
  <rect id="rect-7-1" width="1" height="1" />
  <rect id="rect-7-2" width="1" height="1" />
  <rect id="rect-7-3" width="1" height="1" />
  <rect id="rect-7-4" width="1" height="1" />
  <rect id="rect-7-5" width="1" height="1" />
  <rect id="rect-7-6" width="1" height="1" />
  <rect id="rect-7-7" width="1" height="1" />
  <rect id="rect-7-8" width="1" height="1" />
  <rect id="rect-7-9" width="1" height="1" />
  <rect id="rect-7-10" width="1" height="1" />
  <rect id="rect-7-11" width="1" height="1" />
  <rect id="rect-7-12" width="1" height="1" />
  <rect id="rect-7-13" width="1" height="1" />
  <rect id="rect-7-14" width="1" height="1" />
  <rect id="rect-7-15" width="1" height="1" />
  <rect id="rect-7-16" width="1" height="1" />
  <rect id="rect-7-17" width="1" height="1" />
  <rect id="rect-7-18" width="1" height="1" />
  <rect id="rect-7-19" width="1" height="1" />
  <rect id="rect-7-20" width="1" height="1" />
  <rect id="rect-7-21" width="1" height="1" />
  <rect id="rect-7-22" width="1" height="1" />
  <rect id="rect-7-23" width="1" height="1" />
  <rect id="rect-7-24" width="1" height="1" />
  <rect id="rect-7-25" width="1" height="1" />
  <rect id="rect-7-26" width="1" height="1" />
  <rect id="rect-7-27" width="1" height="1" />
  <rect id="rect-7-28" width="1" height="1" />
  <rect id="rect-7-29" width="1" height="1" />
  <rect id="rect-7-30" width="1" height="1" />
  <rect id="rect-7-31" width="1" height="1" />
  <rect id="rect-7-32" width="1" height="1" />
  <rect id="rect-7-33" width="1" height="1" />
  <rect id="rect-7-34" width="1" height="1" />
  <rect id="rect-7-35" width="1" height="1" />
  <rect id="rect-7-36" width="1" height="1" />
  <rect id="rect-7-37" width="1" height="1" />
  <rect id="rect-7-38" width="1" height="1" />
  <rect id="rect-7-39" width="1" height="1" />
  <rect id="rect-7-40" width="1" height="1" />
  <rect id="rect-7-41" width="1" height="1" />
  <rect id="rect-7-42" width="1" height="1" />
  <rect id="rect-7-43" width="1" height="1" />
  <rect id="rect-7-44" width="1" height="1" />
  <rect id="rect-7-45" width="1" height="1" />
  <rect id="rect-7-46" width="1" height="1" />
  <rect id="rect-7-47" width="1" height="1" />
  <rect id="rect-7-48" width="1" height="1" />
  <rect id="rect-7-49" width="1" height="1" />
  <rect id="rect-7-50" width="1" height="1" />
  <rect id="rect-7-51" width="1" height="1" />
  <rect id="rect-7-52" width="1" height="1" />
  <rect id="rect-7-53" width="1" height="1" />
  <rect id="rect-7-54" width="1" height="1" />
  <rect id="rect-7-55" width="1" height="1" />
  <rect id="rect-7-56" width="1" height="1" />
  <rect id="rect-7-57" width="1" height="1" />
  <rect id="rect-7-58" width="1" height="1" />
  <rect id="rect-7-59" width="1" height="1" />
  <rect id="rect-7-60" width="1" height="1" />
  <rect id="rect-8-1" width="1" height="1" />
  <rect id="rect-8-2" width="1" height="1" />
  <rect id="rect-8-3" width="1" height="1" />
  <rect id="rect-8-4" width="1" height="1" />
  <rect id="rect-8-5" width="1" height="1" />
  <rect id="rect-8-6" width="1" height="1" />
  <rect id="rect-8-7" width="1" height="1" />
  <rect id="rect-8-8" width="1" height="1" />
  <rect id="rect-8-9" width="1" height="1" />
  <rect id="rect-8-10" width="1" height="1" />
  <rect id="rect-8-11" width="1" height="1" />
  <rect id="rect-8-12" width="1" height="1" />
  <rect id="rect-8-13" width="1" height="1" />
  <rect id="rect-8-14" width="1" height="1" />
  <rect id="rect-8-15" width="1" height="1" />
  <rect id="rect-8-16" width="1" height="1" />
  <rect id="rect-8-17" width="1" height="1" />
  <rect id="rect-8-18" width="1" height="1" />
  <rect id="rect-8-19" width="1" height="1" />
  <rect id="rect-8-20" width="1" height="1" />
  <rect id="rect-8-21" width="1" height="1" />
  <rect id="rect-8-22" width="1" height="1" />
  <rect id="rect-8-23" width="1" height="1" />
  <rect id="rect-8-24" width="1" height="1" />
  <rect id="rect-8-25" width="1" height="1" />
  <rect id="rect-8-26" width="1" height="1" />
  <rect id="rect-8-27" width="1" height="1" />
  <rect id="rect-8-28" width="1" height="1" />
  <rect id="rect-8-29" width="1" height="1" />
  <rect id="rect-8-30" width="1" height="1" />
  <rect id="rect-8-31" width="1" height="1" />
  <rect id="rect-8-32" width="1" height="1" />
  <rect id="rect-8-33" width="1" height="1" />
  <rect id="rect-8-34" width="1" height="1" />
  <rect id="rect-8-35" width="1" height="1" />
  <rect id="rect-8-36" width="1" height="1" />
  <rect id="rect-8-37" width="1" height="1" />
  <rect id="rect-8-38" width="1" height="1" />
  <rect id="rect-8-39" width="1" height="1" />
  <rect id="rect-8-40" width="1" height="1" />
  <rect id="rect-8-41" width="1" height="1" />
  <rect id="rect-8-42" width="1" height="1" />
  <rect id="rect-8-43" width="1" height="1" />
  <rect id="rect-8-44" width="1" height="1" />
  <rect id="rect-8-45" width="1" height="1" />
  <rect id="rect-8-46" width="1" height="1" />
  <rect id="rect-8-47" width="1" height="1" />
  <rect id="rect-8-48" width="1" height="1" />
  <rect id="rect-8-49" width="1" height="1" />
  <rect id="rect-8-50" width="1" height="1" />
  <rect id="rect-8-51" width="1" height="1" />
  <rect id="rect-8-52" width="1" height="1" />
  <rect id="rect-8-53" width="1" height="1" />
  <rect id="rect-8-54" width="1" height="1" />
  <rect id="rect-8-55" width="1" height="1" />
  <rect id="rect-8-56" width="1" height="1" />
  <rect id="rect-8-57" width="1" height="1" />
  <rect id="rect-8-58" width="1" height="1" />
  <rect id="rect-8-59" width="1" height="1" />
  <rect id="rect-8-60" width="1" height="1" />
</svg>

  </figure>
  
  <div className="absolute bottom-0 left-0 z-4 h-[696px] w-full min-[2000px]:bottom-0 md:-bottom-4 md:h-[540px] lg:h-[796px] 2xl:h-[796px]">
  <img
    src="/images/gradient/opai-2.png"
    alt="Top blend mode"
    loading="lazy"
    decoding="async"
    fetchPriority="high"
    className="size-full bg-no-repeat"
  />
</div>

</section>

      
<section className="pt-16 pb-16 md:pb-24 lg:pb-28 xl:pb-36 2xl:pt-18 2xl:pb-44">
  <div className="main-container space-y-10 sm:space-y-8 lg:space-y-18">
    <div className="space-y-1.5 text-center md:space-y-3">
      <div className="flex items-center justify-center pb-4" data-opai-animate data-delay="0.1">
        <span className="fill-opai-blue {=$class} flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 {=$class} font-normal">
    Our clients
  </span>
</span>

      </div>

      <h2
        className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal max-md:leading-[1.1]"
        data-opai-animate
        data-delay="0.2"
      >
        Helping local businesses and national brands

        <br className="hidden lg:block" />
        succeed with data-backed marketing.
      </h2>
      <p
        className="text-tagline-2 text-background-13/60 font-normal"
        data-opai-animate
        data-delay="0.3"
      >
        Trusted by 100+ businesses in retail, healthcare, tech, and more.
      </p>
    </div>
    <div className="md:space-y-8">
      <div
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:gap-x-10 md:gap-y-8"
        data-opai-animate
        data-delay="0.2"
      >
        <figure className="max-md:scale-85 max-sm:scale-70">
          <img src="/images/icons/scapic-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/notion-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/lattice-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/hotjar-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/discord-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/stripe-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/spotify-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
      </div>
      <div
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-10 md:gap-y-8"
        data-opai-animate
        data-delay="0.3"
      >
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/outreach-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/asana-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
        <figure className="max-md:scale-90 max-sm:scale-70">
          <img src="/images/icons/squarespace-with-black-text.svg" alt="clients" className="w-fit" />
        </figure>
      </div>
    </div>
  </div>
</section>

      
<section
  className="bg-background-5 py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44"
  data-image-reveal
>
  
  <div
    className="medias pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
    aria-hidden="true"
  >
    <img src="/images/opai-img-52.png" alt="" />
    <img src="/images/opai-img-53.png" alt="" />
    <img src="/images/opai-img-54.png" alt="" />
    <img src="/images/opai-img-55.png" alt="" />
    <img src="/images/opai-img-56.png" alt="" />
  </div>
  <div className="main-container">
    <div
      className="grid grid-cols-1 justify-between gap-y-14 lg:grid-cols-2 lg:gap-x-20"
    >
      <div className="space-y-1.5 md:space-y-3 lg:max-w-[514px]">
        <div className="pb-4" data-opai-animate data-delay="0.1">
          <span className="fill-opai-blue justify-center text-white/50 lg:justify-start flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 lg:justify-start font-normal">
    Our Services
  </span>
</span>

        </div>

        <h2
          className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90 max-md:leading-[1.1] lg:text-left"
          data-opai-animate
          data-delay="0.2"
        >
          Marketing solutions that drive results
        </h2>
        <p
          className="text-tagline-2 text-center font-normal text-white/60 lg:text-left"
          data-opai-animate
          data-delay="0.3"
        >
          Trusted by 100+ businesses in retail, healthcare, tech, and more.
        </p>
        <div className="pt-8 md:pt-18" data-opai-animate data-delay="0.3">
          <a
  href="/services"
  className="group bg-background-7 hover:border-stroke-3 w-[85%] sm:w-fit mx-auto lg:mx-0 relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Explore all services
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Explore all services
    </span>
  </div>

  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
    
    <span
      className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out"
    >
      
      <span
        className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>

    
    <span
      className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
</a>

        </div>
      </div>

      
      <div data-opai-animate data-delay="0.4">
        <div className="divide-stroke-1/11 divide-y" data-image-reveal-list>
          
<div
  data-image-reveal-cursor
  className="service-reveal-cursor pointer-events-none fixed top-0 left-0 z-50 h-[180px] w-[200px] overflow-hidden rounded-xl opacity-0 md:h-[300px] md:w-[292px] lg:h-[386px]"
>
  <div className="media-container relative size-full overflow-hidden rounded-xl" data-image-reveal-container></div>
</div>


          
          <a href="/service-details" className="block">
            <div
              data-image-reveal-item
              data-index="0"
              className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:gap-8 lg:py-8"
            >
              
              <div
                className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full"
              ></div>

              <div className="relative z-20 flex gap-x-4 gap-y-2">
                <span
                  className="ns-shape-1 transition-color group-hover:!text-background-13/90 text-[52px] text-white/60 duration-400 ease-in-out max-lg:scale-90"
                ></span>
                <div className="lg:max-w-[465px]">
                  <h3
                    className="md:text-is-heading-5 font-instrument-serif transition-color group-hover:text-background-13/90 text-[26px] font-normal text-white/80 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    Email &amp; SMS marketing
                  </h3>
                  <p
                    className="text-tagline-2 group-hover:text-background-13/60 transition-color font-normal text-white/60 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    Engage your audience with targeted email and SMS campaigns.
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a href="/service-details" className="block">
            <div
              data-image-reveal-item
              data-index="1"
              className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:gap-8 lg:py-8"
            >
              
              <div
                className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full"
              ></div>

              <div className="relative z-20 flex gap-x-4 gap-y-2">
                <span
                  className="ns-shape-2 transition-color group-hover:!text-background-13/90 text-[52px] text-white/60 duration-400 ease-in-out max-lg:scale-90"
                ></span>
                <div className="lg:max-w-[465px]">
                  <h3
                    className="md:text-is-heading-5 font-instrument-serif transition-color group-hover:text-background-13/90 text-[26px] font-normal text-white/80 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    SEO (Local &amp; Global)
                  </h3>
                  <p
                    className="text-tagline-2 group-hover:text-background-13/60 transition-color font-normal text-white/60 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    We help your business reach the right audience, near or far.
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a href="/service-details" className="block">
            <div
              data-image-reveal-item
              data-index="2"
              className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:gap-8 lg:py-8"
            >
              
              <div
                className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full"
              ></div>

              <div className="relative z-20 flex gap-x-4 gap-y-2">
                <span
                  className="ns-shape-3 transition-color group-hover:!text-background-13/90 text-[52px] text-white/60 duration-400 ease-in-out max-lg:scale-90"
                ></span>
                <div className="lg:max-w-[465px]">
                  <h3
                    className="md:text-is-heading-5 font-instrument-serif transition-color group-hover:text-background-13/90 text-[26px] font-normal text-white/80 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    PPC &amp; paid media
                  </h3>
                  <p
                    className="text-tagline-2 group-hover:text-background-13/60 transition-color font-normal text-white/60 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    Boost your brand's visibility and attract high-converting
                    traffic with our PPC campaigns.
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a href="/service-details" className="block">
            <div
              data-image-reveal-item
              data-index="3"
              className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:gap-8 lg:py-8"
            >
              
              <div
                className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full"
              ></div>

              <div className="relative z-20 flex gap-x-4 gap-y-2">
                <span
                  className="ns-shape-4 transition-color group-hover:!text-background-13/90 text-[52px] text-white/60 duration-400 ease-in-out max-lg:scale-90"
                ></span>
                <div className="lg:max-w-[465px]">
                  <h3
                    className="md:text-is-heading-5 font-instrument-serif transition-color group-hover:text-background-13/90 text-[26px] font-normal text-white/80 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    Social media ads
                  </h3>
                  <p
                    className="text-tagline-2 group-hover:text-background-13/60 transition-color font-normal text-white/60 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    Reach your target audience with tailored social media
                    campaigns.
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a href="/service-details" className="block">
            <div
              data-image-reveal-item
              data-index="4"
              className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:gap-8 lg:py-8"
            >
              
              <div
                className="bg-background-8 absolute inset-0 h-0 transition-[height] duration-400 ease-in-out group-hover:h-full"
              ></div>

              <div className="relative z-20 flex gap-x-4 gap-y-2">
                <span
                  className="ns-shape-5 transition-color group-hover:!text-background-13/90 text-[52px] text-white/60 duration-400 ease-in-out max-lg:scale-90"
                ></span>
                <div className="lg:max-w-[465px]">
                  <h3
                    className="md:text-is-heading-5 font-instrument-serif transition-color group-hover:text-background-13/90 text-[26px] font-normal text-white/80 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    Social media management
                  </h3>
                  <p
                    className="text-tagline-2 group-hover:text-background-13/60 transition-color font-normal text-white/60 mix-blend-color-burn duration-400 ease-in-out"
                  >
                    We build and maintain a strong online presence.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      
<section
  className="bg-background-5 relative -my-0.5 overflow-hidden py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44"
>
  <div className="main-container relative z-20 space-y-12 md:space-y-17.5">
    
    <div className="flex flex-col gap-y-1.5 md:gap-y-14 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-1.5 md:space-y-6">
        <div className="max-md:pb-3" data-opai-animate data-delay="0.1">
          <span className="fill-opai-blue justify-center text-white/50 lg:justify-start flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white/50 lg:justify-start font-normal">
    Why Choose Us
  </span>
</span>

        </div>
        <h2
          className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white max-md:leading-[1.1] lg:text-left"
          data-opai-animate
          data-delay="0.2"
        >
          Why growth teams <br className="hidden lg:block" />
          choose Ezitech
        </h2>
      </div>
      <p
        className="font-inter-tight text-tagline-2 text-center font-normal text-white/60 lg:max-w-[402px] lg:text-right"
        data-opai-animate
        data-delay="0.3"
      >
        We don’t run “random campaigns.” We build repeatable systems—powered by AI, guided by
        strategy, and measured with clean reporting—so you can scale with confidence.
      </p>
    </div>

    
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      data-stairs-wrapper=".why-choose-us-card"
      data-scrub="true"
      data-base-offset="200"
    >
      
      <div
        className="bg-background-6 group border-stroke-1/11 why-choose-us-card relative flex min-h-[430px] flex-col justify-between gap-2.5 overflow-hidden p-8 max-lg:border-b md:min-h-[471px] md:border-r lg:rounded-l-lg"
      >
        
        <div
          className="pointer-events-none absolute -top-[16%] -right-[26%] z-0 h-[256px] w-[306px] -translate-y-[20%] rounded-[306px] bg-linear-[190deg,#744FB3_52.06%,#FF9C7B_92.8%] opacity-0 blur-[50px] transition-all duration-500 ease-in-out select-none group-hover:translate-y-0 group-hover:opacity-100"
        ></div>

        <div className="ns-shape-7 text-[52px] md:text-[68px]"></div>

        <h3
          className="font-instrument-serif text-is-heading-5 font-normal text-white/60 transition-colors duration-500 ease-in-out group-hover:text-white lg:max-w-[240px]"
        >
          Strategy first, AI-enhanced execution
        </h3>
      </div>

      
      <div
        className="bg-background-6 group border-stroke-1/11 why-choose-us-card relative flex min-h-[430px] flex-col justify-between gap-2.5 overflow-hidden p-8 max-lg:border-b md:min-h-[471px] md:border-r"
      >
        
        <div
          className="pointer-events-none absolute -top-[16%] -right-[26%] z-0 h-[256px] w-[306px] -translate-y-[20%] rounded-[306px] bg-linear-[190deg,#744FB3_52.06%,#FF9C7B_92.8%] opacity-0 blur-[50px] transition-all duration-500 ease-in-out select-none group-hover:translate-y-0 group-hover:opacity-100"
        ></div>

        <div className="ns-shape-8 text-[52px] md:text-[68px]"></div>
        <h3
          className="font-instrument-serif text-is-heading-5 font-normal text-white/60 transition-colors duration-500 ease-in-out group-hover:text-white lg:max-w-[240px]"
        >
          Performance marketing across every channel
        </h3>
      </div>

      
      <div
        className="bg-background-6 group border-stroke-1/11 why-choose-us-card relative flex min-h-[430px] flex-col justify-between gap-2.5 overflow-hidden p-8 max-lg:border-b md:min-h-[471px] md:border-r"
      >
        
        <div
          className="pointer-events-none absolute -top-[16%] -right-[26%] z-0 h-[256px] w-[306px] -translate-y-[20%] rounded-[306px] bg-linear-[190deg,#744FB3_52.06%,#FF9C7B_92.8%] opacity-0 blur-[50px] transition-all duration-500 ease-in-out select-none group-hover:translate-y-0 group-hover:opacity-100"
        ></div>

        <div className="ns-shape-9 text-[52px] md:text-[68px]"></div>
        <h3
          className="font-instrument-serif text-is-heading-5 font-normal text-white/60 transition-colors duration-500 ease-in-out group-hover:text-white lg:max-w-[240px]"
        >
          Clear reporting, real insights, weekly wins
        </h3>
      </div>

      
      <div
        className="bg-background-6 group border-stroke-1/11 why-choose-us-card relative flex min-h-[430px] flex-col justify-between gap-2.5 overflow-hidden p-8 md:min-h-[471px] md:border-r lg:rounded-r-lg"
      >
        
        <div
          className="pointer-events-none absolute -top-[16%] -right-[26%] z-0 h-[256px] w-[306px] -translate-y-[20%] rounded-[306px] bg-linear-[190deg,#744FB3_52.06%,#FF9C7B_92.8%] opacity-0 blur-[50px] transition-all duration-500 ease-in-out select-none group-hover:translate-y-0 group-hover:opacity-100"
        ></div>

        <div className="ns-shape-10 text-[52px] md:text-[68px]"></div>
        <h3
          className="font-instrument-serif text-is-heading-5 font-normal text-white/60 transition-colors duration-500 ease-in-out group-hover:text-white lg:max-w-[240px]"
        >
          End-to-end execution that compounds results
        </h3>
      </div>
    </div>
  </div>
  
  <div className="absolute -bottom-[11%] left-0 z-4 h-[596px] w-full min-[2000px]:bottom-0 md:-bottom-[15%] md:h-[540px] lg:-bottom-[29%] lg:h-[696px] 2xl:h-[796px]">
  <img
    src="/images/gradient/opai-3.png"
    alt="Top blend mode"
    loading="lazy"
    decoding="async"
    fetchPriority="high"
    className="size-full bg-no-repeat"
  />
</div>

</section>

      

<section
  className="bg-white pt-16 pb-16 md:pt-24 md:pb-28 lg:pt-28 lg:pb-36 xl:pt-36 xl:pb-44 2xl:pt-44"
>
  <div className="md:main-container">
    <div className="flex items-center justify-center pb-4" data-opai-animate data-delay="0.1">
      <span className="fill-opai-blue text-black flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-black font-normal">
    Our Tech Stack
  </span>
</span>

    </div>
    <div
      data-opai-animate
      data-delay="0.2"
      className="relative z-40 mx-auto h-[240px] w-full max-w-[960px] overflow-hidden md:h-[322px]"
    >
      <div
        className="absolute -top-7 left-[5%] z-2 h-10 w-full bg-linear-[0deg,white_0%,white_100%] blur-[5px]"
      ></div>

      <div className="relative z-5 space-y-1.5 text-center md:space-y-3">
        <h2
          className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-5 font-normal max-md:leading-[1.1]"
          data-opai-animate
          data-delay="0.2"
        >
          Built on Top AI + <span className="text-background-13/30">Marketing Tools</span>
        </h2>
        <p
          className="text-tagline-2 text-background-13/60 font-normal"
          data-opai-animate
          data-delay="0.3"
        >
          We blend automation with human creativity.
        </p>
      </div>

      

            <div
        className="absolute bottom-[6%] left-1/2 w-[800px] -translate-x-1/2 md:w-[899px]"
      >
        <div className="integration-circle-animation">
        <svg viewBox="-30 -30 1520 1520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="740" cy="744" r="699.5" stroke="#7c8ea500" />
          
          <g transform="translate(703.03 -15.98)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/gemini.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(888.53 12.45)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/lovable.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1063.35 84.09)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/claude-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1213.66 197.94)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/qwen.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1331.15 346.90)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/deepseek.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1397.50 521.65)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/runway.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1422.97 706.92)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/open-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1398.06 892.35)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/mistral-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1332.07 1069.69)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/grok-ai.svg" x="20" y="20" width="32" height="32" />
          </g>
          
          <g transform="translate(1210.65 1217.23)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/perplexity-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(1062.19 1329.57)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image
              href="/images/icons/google-ads-certified.png"
              x="18.6"
              y="18.6"
              width="34.83"
              height="34.83"
            />
          </g>
          
          <g transform="translate(890.99 1406.55)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/github.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(702.92 1422.97)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/gemini.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(514.96 1399.24)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/lovable.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(343.34 1330.62)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/claude-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(193.41 1216.12)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/qwen.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(78.57 1066.82)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/deepseek.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(12.96 894.04)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/runway.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(-15.97 700.86)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/open-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(13.42 522.21)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/mistral-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(79.40 347.77)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/grok-ai.svg" x="20" y="20" width="32" height="32" />
          </g>
          
          <g transform="translate(194.39 199.26)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/perplexity-ai.svg" x="17" y="17" width="38" height="38" />
          </g>
          
          <g transform="translate(344.26 84.24)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image
              href="/images/icons/google-ads-certified.png"
              x="18.6"
              y="18.6"
              width="34.83"
              height="34.83"
            />
          </g>
          
          <g transform="translate(517.60 16.87)">
            <circle cx="36" cy="36" r="32" fill="#e4eaee" stroke="#f1f4f6" strokeWidth="4" />
            <image href="/images/icons/github.svg" x="17" y="17" width="38" height="38" />
          </g>
        </svg>
        </div>
      </div>
    </div>
  </div>
</section>

      
<section className="bg-white py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
  <div className="main-container">
    <div className="space-y-12 md:space-y-20">
      <div className="space-y-1.5 text-center md:space-y-6">
        <div
          className="flex items-center justify-center"
          data-opai-animate
          data-delay="0.1"
        >
          <span className="fill-opai-blue text-black flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-black font-normal">
    Case Studies
  </span>
</span>

        </div>
        <h2
          className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 font-normal max-md:leading-[1.1]"
          data-opai-animate
          data-delay="0.2"
        >
          Success Stories That

          <span className="font-instrument-serif text-background-13/30"
            >Speak <br className="hidden lg:block" />for Themselves.</span
          >
        </h2>
      </div>
      
      <div className="grid grid-cols-12 gap-y-8 md:gap-y-14 lg:gap-y-20">
        
        <div className="col-span-12">
          <div className="group relative h-[640px]">
            <a
              href="/case-study-details"
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 translate-y-[40%] opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100"
            >
              <div
                className="bg-background-13/50 group/link flex size-18.5 items-center justify-center rounded-full backdrop-blur-[6px] transition-all duration-400 ease-in-out hover:scale-110"
              >
                <span className="relative size-6 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:translate-x-[40%] group-hover/link:-translate-y-full"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 translate-x-[-180%] translate-y-[90%] stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:-translate-x-1/2 group-hover/link:-translate-y-1/2"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>

            
            <div
              className="pointer-events-none absolute inset-0 z-2 rounded-lg bg-linear-[0deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.45)_100%] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
            ></div>
            <figure
              className="image-loading-reveal pointer-events-auto size-full overflow-hidden rounded-lg"
            >
              <a href="/case-study-details">
                <img
                  src="/images/opai-img-158.jpg"
                  alt="portfolio"
                  className="size-full object-cover transition-all duration-500 ease-in-out group-hover:!scale-105"
                />
              </a>
            </figure>
            <div
              data-opai-animate
              data-delay="0.1"
              className="bg-background-13/50 absolute bottom-3 left-1/2 z-2 flex w-[calc(100%-28px)] -translate-x-1/2 flex-col items-center rounded p-3 backdrop-blur-[17px] md:bottom-6 md:min-h-[80px] md:w-[calc(100%-48px)] md:flex-row md:p-5"
            >
              <a href="/case-study-details">
                <div className="w-full md:w-[80%] lg:w-full">
                  <h3 className="text-is-heading-5 font-normal text-white/90">
                    Foodly
                  </h3>
                  <p
                    className="text-tagline-3 md:text-tagline-2 font-inter-tight text-white/50"
                  >
                    AI delivery optimization cut times, reduced failures, and
                    boosted conversions.
                  </p>
                </div>
              </a>
              <div
                className="hidden w-full items-center justify-end gap-x-6 md:flex md:w-[60%]"
              >
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="85"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >85</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">More conversions</p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="34"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >34</span
                    >%
                  </h4>
                  <p className="text-tagline-3 text-white/60">Failed deliveries</p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="74"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >74</span
                    >%
                  </h4>
                  <p className="text-tagline-3 text-white/60">
                    More successful deliveries
                  </p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="4"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="1"
                      data-height-space="3"
                      >4</span
                    >x
                  </h4>
                  <p className="text-tagline-3 text-white/60">Faster scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12">
          <div className="group relative h-[640px]">
            <a
              href="/case-study-details"
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 translate-y-[40%] opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100"
            >
              <div
                className="bg-background-13/50 group/link flex size-18.5 items-center justify-center rounded-full backdrop-blur-[6px] transition-all duration-400 ease-in-out hover:scale-110"
              >
                <span className="relative size-6 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:translate-x-[40%] group-hover/link:-translate-y-full"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 translate-x-[-180%] translate-y-[90%] stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:-translate-x-1/2 group-hover/link:-translate-y-1/2"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>

            
            <div
              className="pointer-events-none absolute inset-0 z-2 rounded-lg bg-linear-[0deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.45)_100%] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
            ></div>
            <figure
              className="image-loading-reveal pointer-events-auto size-full overflow-hidden rounded-lg"
            >
              <a href="/case-study-details">
                <img
                  src="/images/opai-img-159.jpg"
                  alt="portfolio"
                  className="size-full object-cover transition-all duration-500 ease-in-out group-hover:!scale-105"
                />
              </a>
            </figure>
            <div
              data-opai-animate
              data-delay="0.1"
              className="bg-background-13/50 absolute bottom-3 left-1/2 z-2 flex w-[calc(100%-28px)] -translate-x-1/2 flex-col items-center rounded p-3 backdrop-blur-[17px] md:bottom-6 md:min-h-[80px] md:w-[calc(100%-48px)] md:flex-row md:p-5"
            >
              <a href="/case-study-details">
                <div className="w-full md:w-[80%] lg:w-full">
                  <h3 className="text-is-heading-5 font-normal text-white/90">
                    NimbusBank
                  </h3>
                  <p
                    className="text-tagline-3 md:text-tagline-2 font-inter-tight text-white/50"
                  >
                    AI campaigns increased leads, cut fraud, and grew LTV.
                  </p>
                </div>
              </a>
              <div
                className="hidden w-full items-center justify-end gap-x-6 md:flex md:w-[60%]"
              >
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="72"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >72</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">
                    More qualified leads
                  </p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="22"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >22</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">Drop in fraud</p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="8"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="1"
                      data-height-space="3"
                      >8</span
                    >
                    .2x
                  </h4>
                  <p className="text-tagline-3 text-white/60">LTV growth YoY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12">
          <div className="group relative h-[640px]">
            <a
              href="/case-study-details"
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 translate-y-[40%] opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100"
            >
              <div
                className="bg-background-13/50 group/link flex size-18.5 items-center justify-center rounded-full backdrop-blur-[6px] transition-all duration-400 ease-in-out hover:scale-110"
              >
                <span className="relative size-6 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:translate-x-[40%] group-hover/link:-translate-y-full"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 translate-x-[-180%] translate-y-[90%] stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:-translate-x-1/2 group-hover/link:-translate-y-1/2"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>

            
            <div
              className="pointer-events-none absolute inset-0 z-2 rounded-lg bg-linear-[0deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.45)_100%] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
            ></div>
            <figure
              className="image-loading-reveal pointer-events-auto size-full overflow-hidden rounded-lg"
            >
              <a href="/case-study-details">
                <img
                  src="/images/opai-img-160.jpg"
                  alt="portfolio"
                  className="size-full object-cover transition-all duration-500 ease-in-out group-hover:!scale-105"
                />
              </a>
            </figure>
            <div
              data-opai-animate
              data-delay="0.1"
              className="bg-background-13/50 absolute bottom-3 left-1/2 z-2 flex w-[calc(100%-28px)] -translate-x-1/2 flex-col items-center rounded p-3 backdrop-blur-[17px] md:bottom-6 md:min-h-[80px] md:w-[calc(100%-48px)] md:flex-row md:p-5"
            >
              <a href="/case-study-details">
                <div className="w-full md:w-[80%] lg:w-full">
                  <h3 className="text-is-heading-5 font-normal text-white/90">
                    BrightNest
                  </h3>
                  <p
                    className="text-tagline-3 md:text-tagline-2 font-inter-tight text-white/50"
                  >
                    AI recommendations boosted revenue and repeat buyers.
                  </p>
                </div>
              </a>
              <div
                className="hidden w-full items-center justify-end gap-x-6 md:flex md:w-[60%]"
              >
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="120"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="3"
                      data-height-space="3"
                      >120</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">Revenue growth</p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="64"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >64</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">More repeat buyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12">
          <div className="group relative h-[640px]">
            <a
              href="/case-study-details"
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 translate-y-[40%] opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100"
            >
              <div
                className="bg-background-13/50 group/link flex size-18.5 items-center justify-center rounded-full backdrop-blur-[6px] transition-all duration-400 ease-in-out hover:scale-110"
              >
                <span className="relative size-6 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:translate-x-[40%] group-hover/link:-translate-y-full"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute top-1/2 left-1/2 translate-x-[-180%] translate-y-[90%] stroke-[#F8F9FA] transition-all duration-400 ease-in-out group-hover/link:-translate-x-1/2 group-hover/link:-translate-y-1/2"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>

            
            <div
              className="pointer-events-none absolute inset-0 z-2 rounded-lg bg-linear-[0deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.45)_100%] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
            ></div>
            <figure
              className="image-loading-reveal pointer-events-auto size-full overflow-hidden rounded-lg"
            >
              <a href="/case-study-details">
                <img
                  src="/images/opai-img-161.jpg"
                  alt="portfolio"
                  className="size-full object-cover transition-all duration-500 ease-in-out group-hover:!scale-105"
                />
              </a>
            </figure>
            <div
              data-opai-animate
              data-delay="0.1"
              className="bg-background-13/50 absolute bottom-3 left-1/2 z-2 flex w-[calc(100%-28px)] -translate-x-1/2 flex-col items-center rounded p-3 backdrop-blur-[17px] md:bottom-6 md:min-h-[80px] md:w-[calc(100%-48px)] md:flex-row md:p-5"
            >
              <a href="/case-study-details">
                <div className="w-full md:w-[80%] lg:w-full">
                  <h3 className="text-is-heading-5 font-normal text-white/90">
                    Hedonist
                  </h3>
                  <p
                    className="text-tagline-3 md:text-tagline-2 font-inter-tight text-white/50"
                  >
                    Predictive curation raised satisfaction and repeat
                    travelers.
                  </p>
                </div>
              </a>
              <div
                className="hidden w-full items-center justify-end gap-x-6 md:flex md:w-[60%]"
              >
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="92"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >92</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">CSAT</p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="22"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="2"
                      data-height-space="3"
                      >22</span
                    >
                    %
                  </h4>
                  <p className="text-tagline-3 text-white/60">
                    More repeat bookings
                  </p>
                </div>
                <div className="bg-stroke-1/10 hidden h-[60px] w-px md:block"></div>
                <div>
                  <h4
                    className="text-is-heading-6 flex items-center font-normal text-white/90"
                  >
                    <span
                      data-counter
                      data-number="3"
                      data-speed="2000"
                      data-interval="200"
                      data-rooms="1"
                      data-height-space="3"
                      >3</span
                    >
                    x
                  </h4>
                  <p className="text-tagline-3 text-white/60">
                    Faster recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center" data-opai-animate data-delay="0.1">
        <a
  href="/case-study"
  className="group bg-background-14 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-tagline-2 text-background-7 {=$class} block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      More success stories
    </span>
    <span
      className="font-ibm-plex-mono text-background-7 text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      More success stories
    </span>
  </div>

  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
    
    <span
      className="bg-background-7 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out"
    >
      
      <span
        className="stroke-background-14 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>

    
    <span
      className="stroke-background-14 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
</a>

      </div>
    </div>
  </div>
</section>

      

<section
  className="bg-background-5 overflow-hidden py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44"
>
  <div className="main-container space-y-10 md:space-y-28">
    <div className="flex items-center justify-between gap-x-3 md:gap-x-19">
      <div className="flex items-center gap-x-6">
        <div
          className="bg-stroke-1/11 h-[1px] w-[50px] md:w-[220px] lg:w-[300px] xl:w-[450px]"
          data-opai-border-expand
          data-length="100%"
          data-delay="0.1"
        ></div>
        <figure
          className="size-10 overflow-hidden rounded-[40px]"
          data-opai-animate
          data-delay="0.2"
          data-direction="left"
        >
          <img
            src="/images/opai-avatar-img-04.png"
            alt="about"
            className="size-full object-contain"
          />
        </figure>
      </div>
      <figure className="size-9" data-opai-animate data-delay="0.2">
        <img
          src="/images/icons/react.svg"
          alt="react"
          className="size-full object-contain"
        />
      </figure>
      <div
        className="flex items-center gap-x-6"
        data-opai-animate
        data-delay="0.2"
        data-direction="right"
      >
        <figure className="size-10 overflow-hidden rounded-[40px]">
          <img
            src="/images/opai-avatar-img-02.png"
            alt="about"
            className="size-full object-contain"
          />
        </figure>
        <div
          className="bg-stroke-1/11 h-[1px] w-[50px] md:w-[450px] lg:w-[300px] xl:w-[450px]"
          data-opai-border-expand
          data-length="100%"
          data-delay="0.1"
        ></div>
      </div>
    </div>
    
    <div className="space-y-1.5 text-center md:space-y-3">
      <div
        className="flex items-center justify-center"
        data-opai-animate
        data-delay="0.2"
      >
        <span className="fill-opai-blue text-white/50 flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-white/50 font-normal">
    About Us
  </span>
</span>

      </div>
      <h2
        className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 pt-2.5 font-normal text-white/90 max-md:leading-[1.1]"
        data-opai-animate
        data-delay="0.3"
      >
        Your growth partner
        <span className="font-instrument-serif text-white/30">
          with <br className="hidden lg:block" />
          AI expertise
        </span>
      </h2>
      <p
        className="font-inter-tight text-tagline-2 mx-auto text-center font-normal text-white/60 lg:max-w-[482px]"
        data-opai-animate
        data-delay="0.4"
      >
        Businesses trust Ezitech because of its proven ability to deliver
        data-driven insights that drive real results. With advanced AI
        technology, robust security protocols,
      </p>
    </div>

    

    <div className="sliding-swiper overflow-hidden">
      <div className="swiper-wrapper w-full items-center">
        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:70px_0_60px_0_#12161F_inset] md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-162.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>
        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:70px_0_60px_0_#12161F_inset] md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-163.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>

        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:90px_0_110px_0_#000_inset] md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-164.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>
        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-165.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>
        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-90px_0_110px_0_#11141D_inset] md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-166.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>
        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-70px_0_60px_0_#12161F_inset] md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-167.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>
        <div className="swiper-slide">
          <figure
            className="h-[400px] max-w-[480px] overflow-hidden rounded-lg [box-shadow:-70px_0_60px_0_#12161F_inset] md:h-[500px] lg:h-[650px]"
          >
            <img
              src="/images/opai-img-168.jpg"
              alt="about"
              className="size-full object-cover"
            />
          </figure>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <a
  href="/about"
  className="group bg-background-7 hover:border-stroke-3 w-[85%] !py-[11px] sm:w-auto relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Learn More
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Learn More
    </span>
  </div>

  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
    
    <span
      className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out"
    >
      
      <span
        className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>

    
    <span
      className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
</a>

    </div>
  </div>
</section>

      
<section className="bg-background-5 -my-0.5 py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
  <div className="main-container space-y-10 md:space-y-20">
    <div className="space-y-4">
      <div data-opai-animate data-delay="0.1">
        <span className="fill-opai-blue justify-start text-white/50 flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-start text-white/50 font-normal">
    Our Process
  </span>
</span>

      </div>
      <h2
        className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white max-md:leading-[1.1]"
        data-opai-animate
        data-delay="0.2"
      >
        How we <span className="font-instrument-serif text-white/30"> work</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div data-opai-animate data-delay="0.3">
        <h2
          className="text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1 webkit-bg-clip-text bg-linear-[180deg,#FFF_0%,rgba(18,32,31,0.00)_100%] bg-clip-text font-normal text-transparent"
        >
          1
        </h2>
        <h3 className="text-is-heading-5 -mt-1 font-normal text-white lg:mb-2">
          Free Consultation & Audit
        </h3>
        <p className="text-tagline-2 font-inter-tight text-white/60 lg:max-w-[260px]">
          Create your account and explore with a 7-day free trial.
        </p>
      </div>
      <div data-opai-animate data-delay="0.4">
        <h2
          className="text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1 webkit-bg-clip-text bg-linear-[180deg,#FFF_0%,rgba(18,32,31,0.00)_100%] bg-clip-text font-normal text-transparent"
        >
          2
        </h2>
        <h3 className="text-is-heading-5 -mt-1 font-normal text-white lg:mb-2">AI-Driven Strategy</h3>
        <p className="text-tagline-2 font-inter-tight text-white/60 lg:max-w-[260px]">
          Co-build a roadmap that blends predictive insights with human creativity.
        </p>
      </div>
      <div data-opai-animate data-delay="0.5">
        <h2
          className="text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1 webkit-bg-clip-text bg-linear-[180deg,#FFF_0%,rgba(18,32,31,0.00)_100%] bg-clip-text font-normal text-transparent"
        >
          3
        </h2>
        <h3 className="text-is-heading-5 -mt-1 font-normal text-white lg:mb-2">
          Launch, Test, and Optimize
        </h3>
        <p className="text-tagline-2 font-inter-tight text-white/60 lg:max-w-[260px]">
          Deploy experiences, run iterative experiments, and scale what works.
        </p>
      </div>
      <div data-opai-animate data-delay="0.6">
        <h2
          className="text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1 webkit-bg-clip-text bg-linear-[180deg,#FFF_0%,rgba(18,32,31,0.00)_100%] bg-clip-text font-normal text-transparent"
        >
          4
        </h2>
        <h3 className="text-is-heading-5 -mt-1 font-normal text-white lg:mb-2">
          Monthly Reports & Growth
        </h3>
        <p className="text-tagline-2 font-inter-tight text-white/60 lg:max-w-[260px]">
          Stay in the loop with transparent reporting and optimization insights.
        </p>
      </div>
    </div>
  </div>
</section>

      
<section
  className="bg-background-5 relative overflow-hidden pt-14 pb-14 md:pt-22 md:pb-28 lg:pt-28 lg:pb-36 xl:pb-40 2xl:pb-44"
>
  <div className="main-container relative z-10 mb-10 md:mb-17.5">
    <div className="space-y-4 text-center">
      <div className="flex items-center justify-center" data-opai-animate data-delay="0.1">
        <span className="fill-opai-blue text-white/50 flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-white/50 font-normal">
    Testimonial
  </span>
</span>

      </div>
      <h2
        className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white max-md:leading-[1.1]"
        data-opai-animate
        data-delay="0.2"
      >
        What Our Clients Are Saying.
      </h2>
    </div>
  </div>
  <div className="gradient-hidden">
  <div className="cards-marquee-container relative z-20" data-opai-animate data-delay="0.3">
    <div className="flex items-center justify-center gap-8">
      
      <div
        className="relative ml-8 flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span
              ><span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>
</span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            Committed, innovative, and results-oriented—exactly what we needed. Their creative
            strategies consistently introduce new concepts. With a deep dedication to quality.
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-01.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Lena Torres</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">CMO</p>
          </blockquote>
        </div>
      </div>

      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span
              ><span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>
</span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "The team's expertise and hands-on approach made the entire integration seamless and
            surprisingly fast. Highly recommend!"
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-02.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Maya Chen</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">CTO, Fintech Innovators</p>
          </blockquote>
        </div>
      </div>

      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span
              ><span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>
</span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "From day one, Ezitech felt like an extension of our internal team. Their tools and
            support are truly next-level."
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-03.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Derek Singh</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              Head of Product, E-commerce Platform
            </p>
          </blockquote>
        </div>
      </div>

      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span
              ><span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>
</span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "We went from idea to execution in weeks—not months. The automation is saving us
            countless hours every month."
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-04.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Laura Fernandez</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              Operations Lead, SaaS Company
            </p>
          </blockquote>
        </div>
      </div>

      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span
              ><span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>
</span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "What impressed me most was the flexibility. Ezitech adapted to our workflow instead of
            forcing us to change."
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-05.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Jonas Müller</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              Growth Manager, Logistics Startup
            </p>
          </blockquote>
        </div>
      </div>
      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span>
              <span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>

            </span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "The onboarding was seamless and the team was incredibly responsive. Now, our marketing
            runs smoother and results are up by 33%!"
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-06.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Priya Singh</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              Marketing Director, E-Commerce Brand
            </p>
          </blockquote>
        </div>
      </div>

      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span>
              <span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>

            </span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "Ezitech gave us an edge in campaign optimization—A/B testing used to take weeks; now
            it’s just days."
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-07.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Andre Dupont</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              Digital Marketing Manager, Retail Chain
            </p>
          </blockquote>
        </div>
      </div>
      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span>
              <span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>

            </span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "The insights dashboard is exactly what we needed. It makes ROI tracking effortless and
            helps us double-down on what works."
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-08.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Mei Chen</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              VP Analytics, Fintech Platform
            </p>
          </blockquote>
        </div>
      </div>

      
      <div
        className="relative flex min-h-[329px] w-full min-w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:min-w-[332px] md:px-8 md:pt-14"
      >
        <div className="max-h-full space-y-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <span>
              <span className="flex items-center justify-start gap-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    className="size-4 !fill-black fill-[#FFF049]"
  >
    <g clipPath="url(#clip0_6163_15851)">
      <path
        d="M5.44254 0.622517C5.64879 0.136244 6.35124 0.136245 6.55749 0.622518L7.77475 3.49259C7.86175 3.69759 8.05835 3.83766 8.28402 3.8554L11.4436 4.10381C11.979 4.14589 12.196 4.80103 11.7882 5.14366L9.38089 7.16583C9.20896 7.3103 9.13382 7.53695 9.18636 7.75288L9.92182 10.7765C10.0464 11.2888 9.47816 11.6937 9.01982 11.4192L6.31474 9.79886C6.12152 9.68312 5.87851 9.68312 5.6853 9.79886L2.9802 11.4192C2.52187 11.6937 1.95358 11.2888 2.07819 10.7765L2.81366 7.75288C2.86619 7.53695 2.7911 7.3103 2.61916 7.16583L0.211838 5.14366C-0.196031 4.80103 0.0210408 4.14589 0.556376 4.10381L3.71602 3.8554C3.94171 3.83766 4.1383 3.69759 4.22525 3.49259L5.44254 0.622517Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_6163_15851">
        <rect width="12" height="12" fill="white" transform="translate(0 0.257812)" />
      </clipPath>
    </defs>
  </svg>
</span>

            </span>
          </div>
          <p className="text-tagline-2 text-background-13/60 font-normal text-wrap">
            "I was skeptical at first, but the productivity boost is obvious. Our team can spend
            more time on strategy, less on grunt work."
          </p>
        </div>

        <div
          className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
        >
          <figure className="mx-auto size-12 overflow-hidden rounded-full">
            <img
              src="/images/opai-avatar-img-09.png"
              alt="testimonial"
              className="size-full object-cover grayscale-25"
            />
          </figure>
          <blockquote className="space-y-0.5">
            <h3 className="text-is-heading-6 text-background-6 font-normal">Sofia Rossi</h3>
            <p className="text-tagline-3 text-background-13/60 font-normal">
              Head of Content, Media Group
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>


  
  <div className="absolute bottom-0 left-0 z-4 h-[496px] w-full min-[2000px]:bottom-0 md:-bottom-[2%] md:h-[540px] lg:h-[696px] 2xl:h-[796px]">
  <img
    src="/images/gradient/opai-2.png"
    alt="Top blend mode"
    loading="lazy"
    decoding="async"
    fetchPriority="high"
    className="size-full bg-no-repeat"
  />
</div>

</section>

      
<section className="bg-background-7 {=$class} pt-20 md:pt-30 lg:pt-44">
  <div className="main-container space-y-10 md:space-y-17.5">
    <div className="space-y-1.5 text-center md:space-y-3">
      <div
        className="flex items-center justify-center max-md:pb-3"
        data-opai-animate
        data-delay="0.1"
      >
        <span className="fill-opai-blue text-black flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-black font-normal">
    Partnership
  </span>
</span>

      </div>
      <h2
        className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13 pt-1 font-normal max-md:leading-[1.1]"
        data-opai-animate
        data-delay="0.2"
      >
        Certified by the Best
      </h2>
      <p
        className="text-tagline-2 text-background-13/60 font-normal"
        data-opai-animate
        data-delay="0.3"
      >
        Discover expert tips, industry trends, and actionable strategies to
        power your growth with Ezitech.
      </p>
    </div>
    
    <div
      className="flex flex-col items-start justify-center gap-y-5 lg:flex-row"
      data-opai-animate
      data-delay="0.4"
    >
      <div
        className="partner-ship-card active-partner-ship-card h-[420px] md:h-[333px]"
      >
        <a
          href="/team-details"
          className="bg-background-5 border-stroke-1/11 relative block h-full overflow-hidden rounded-lg border px-8 py-11 lg:rounded-none lg:rounded-l-lg"
        >
          
          <div
            className="partner-ship-gradient pointer-events-none absolute top-1/2 -left-[46%] z-0 h-[256px] w-[500px] -translate-y-1/2 rounded-[500px] bg-[#B962E7] blur-[90px] select-none"
          ></div>
          <div className="relative z-10 space-y-8">
            <figure className="size-13 rounded bg-white p-2.5">
              <img
                src="/images/icons/meta.png"
                alt="meta"
                className="size-full object-contain"
              />
            </figure>
            <div className="flex justify-between gap-21">
              <div>
                <h3 className="text-is-heading-5 font-normal text-white">
                  Meta Marketing Partner
                </h3>
                <p
                  className="partner-ship-description text-tagline-2 font-inter-tight line-clamp-5 text-white/60 lg:line-clamp-3 xl:line-clamp-5"
                >
                  As a Meta Marketing Partner, we specialize in digital
                  marketing strategies that leverage Meta's platforms to drive
                  your business growth. Our tailored approaches and expert
                  insights enhance your advertising efforts and broaden your
                  audience reach, ensuring you remain a strong contender in the
                  online marketing landscape.
                </p>
              </div>
              <div>
                <svg
                  className="partner-ship-arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M15.168 36.8307L36.8346 15.1641"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.168 15.1641H36.8346V36.8307"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="partner-ship-card h-[420px] md:h-[333px]">
        <a
          href="/team-details"
          className="bg-background-5 border-stroke-1/11 relative block h-full overflow-hidden rounded-lg border-r px-8 py-11 lg:rounded-none"
        >
          
          <div
            className="partner-ship-gradient pointer-events-none absolute top-1/2 -left-[46%] z-0 h-[256px] w-[500px] -translate-y-1/2 rounded-[500px] bg-[#B962E7] blur-[90px] select-none"
          ></div>

          <div className="relative z-10 space-y-8">
            <figure className="size-13 rounded bg-white p-2.5">
              <img
                src="/images/icons/google-ads-certified.png"
                alt="google ads certified"
                className="size-full object-contain"
              />
            </figure>
            <div className="flex justify-between gap-21">
              <div>
                <h3 className="text-is-heading-5 font-normal text-white">
                  Google Ads Certified Partner
                </h3>
                <p
                  className="partner-ship-description text-tagline-2 font-inter-tight line-clamp-5 text-white/60 lg:line-clamp-3 xl:line-clamp-5"
                >
                  As a Google Ads Certified Partner, we specialize in digital
                  marketing strategies that leverage Google's platforms to drive
                  your business growth. Our tailored approaches and expert
                  insights enhance your advertising efforts and broaden your
                  audience reach, ensuring you remain a strong contender in the
                  online marketing landscape.
                </p>
              </div>
              <div>
                <svg
                  className="partner-ship-arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M15.168 36.8307L36.8346 15.1641"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.168 15.1641H36.8346V36.8307"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="partner-ship-card h-[420px] md:h-[333px]">
        <a
          href="/team-details"
          className="bg-background-5 relative block h-full overflow-hidden rounded-lg px-8 py-11 lg:rounded-none lg:rounded-r-lg"
        >
          
          <div
            className="partner-ship-gradient pointer-events-none absolute top-1/2 -left-[46%] z-0 h-[256px] w-[500px] -translate-y-1/2 rounded-[500px] bg-[#B962E7] blur-[90px] select-none"
          ></div>

          <div className="relative z-10 space-y-8">
            <figure className="size-13 rounded bg-white p-2.5">
              <img
                src="/images/icons/klaviyo.png"
                alt="klaviyo"
                className="size-full object-contain"
              />
            </figure>
            <div className="flex justify-between gap-21">
              <div>
                <h3 className="text-is-heading-5 font-normal text-white">
                  Klaviyo Partner
                </h3>
                <p
                  className="partner-ship-description text-tagline-2 font-inter-tight line-clamp-5 text-white/60 lg:line-clamp-3 xl:line-clamp-5"
                >
                  As a Klaviyo Partner, we specialize in digital marketing
                  strategies that leverage Klaviyo's platforms to drive your
                  business growth. Our tailored approaches and expert insights
                  enhance your email marketing efforts and broaden your audience
                  reach, ensuring you remain a strong contender in the online
                  marketing landscape.
                </p>
              </div>
              <div>
                <svg
                  className="partner-ship-arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M15.168 36.8307L36.8346 15.1641"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.168 15.1641H36.8346V36.8307"
                    stroke="#F8F9FA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className="flex justify-center" data-opai-animate data-delay="0.1">
      <a
  href="/pricing"
  className="group bg-background-14 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-tagline-2 text-background-7 w-[85%] md:w-auto block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Let’s get started
    </span>
    <span
      className="font-ibm-plex-mono text-background-7 text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Let’s get started
    </span>
  </div>

  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
    
    <span
      className="bg-background-7 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out"
    >
      
      <span
        className="stroke-background-14 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>

    
    <span
      className="stroke-background-14 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
</a>

    </div>
  </div>
</section>

      

<section className="bg-background-7 py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
  <div className="main-container space-y-10 md:space-y-14">
    <div className="space-y-3 pb-3.5 text-center">
      <div
        className="flex items-center justify-center"
        data-opai-animate
        data-delay="0.1"
      >
        <span className="fill-opai-blue text-black flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-black font-normal">
    Blog
  </span>
</span>

      </div>
      <div className="space-y-1.5 md:space-y-3">
        <h2
          className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-5 font-normal max-md:leading-[1.1]"
          data-opai-animate
          data-delay="0.2"
        >
          Learn What’s Working Now in <br className="hidden md:block" />
          <span className="font-instrument-serif text-background-13/30"
            >AI Marketing</span
          >
        </h2>
        <p
          className="text-tagline-2 text-background-13/60 font-normal"
          data-opai-animate
          data-delay="0.3"
        >
          Playbooks, trends, and real tactics for ads, SEO, funnels, and
          automation—built for growth-focused teams.
        </p>
      </div>
    </div>

    
    <div className="hidden lg:block">
      
<div
  className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-9 md:space-x-[30px]"
>
  
  <article
    className="group underline-hover-effect-black blog-card active-card relative min-h-[545px] space-y-4"
    data-opai-animate
    data-delay="0.4"
  >
    <a href="/blog-details" className="block">
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <img
          src="/images/opai-img-159.jpg"
          alt="Performance Marketing Playbook: How to Scale Paid Ads with AI"
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
        />
      </figure>
    </a>
    <div className="space-y-4 px-2">
      <p className="text-tagline-5 text-background-13/80 font-normal">28/6/2025</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Ads</span
          >
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Performance</span
          >
        </div>
        <a href="/blog-details" className="blog-title-black">
          <h3 className="text-is-heading-5 text-background-13 font-normal">
            Performance marketing playbook: scale paid ads with AI
          </h3>
        </a>
      </div>
    </div>
  </article>

  
  <article
    className="group underline-hover-effect-black blog-card relative min-h-[545px] space-y-4"
    data-opai-animate
    data-delay="0.5"
  >
    <a href="/blog-details" className="block">
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <img
          src="/images/opai-avatar-img-170.jpg"
          alt="Email Automation That Converts: AI Segmentation + Personalization"
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
        />
      </figure>
    </a>
    <div className="space-y-4 px-2">
      <p className="text-tagline-5 text-background-13/80 font-normal">28/6/2025</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Email</span
          >
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Automation</span
          >
        </div>
        <a href="/blog-details" className="blog-title-black">
          <h3 className="text-is-heading-5 text-background-13 font-normal">
            Email automation that converts segmentation
          </h3>
        </a>
      </div>
    </div>
  </article>

  
  <article
    className="group underline-hover-effect-black blog-card relative min-h-[545px] space-y-4"
    data-opai-animate
    data-delay="0.6"
  >
    <a href="/blog-details" className="block">
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <img
          src="/images/opai-avatar-img-171.jpg"
          alt="Landing Page CRO Checklist: Fix Leaks and Increase Conversions"
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
        />
      </figure>
    </a>
    <div className="space-y-4 px-2">
      <p className="text-tagline-5 text-background-13/80 font-normal">28/6/2025</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >CRO</span
          >
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Landing Page</span
          >
        </div>
        <a href="/blog-details" className="blog-title-black">
          <h3 className="text-is-heading-5 text-background-13 font-normal">
            Landing page CRO checklist: fix leaks and lift conversions
          </h3>
        </a>
      </div>
    </div>
  </article>
</div>

    </div>

    <div className="block lg:hidden">
      
<div
  className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-9 md:space-x-[30px]"
>
  
  <article
    className="group underline-hover-effect-black relative min-h-[545px] space-y-4"
    data-opai-animate
    data-delay="0.4"
  >
    <a href="/blog-details" className="block">
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <img
          src="/images/opai-img-159.jpg"
          alt="Performance Marketing Playbook: How to Scale Paid Ads with AI"
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
        />
      </figure>
    </a>
    <div className="space-y-4 px-2">
      <p className="text-tagline-5 text-background-13/80 font-normal">28/6/2025</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Ads</span
          >
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Performance</span
          >
        </div>
        <a href="/blog-details" className="blog-title-black">
          <h3 className="text-is-heading-5 text-background-13 font-normal">
            Performance marketing playbook: scale paid ads with AI
          </h3>
        </a>
      </div>
    </div>
  </article>

  
  <article
    className="group underline-hover-effect-black relative min-h-[545px] w-full space-y-4"
    data-opai-animate
    data-delay="0.5"
  >
    <a href="/blog-details" className="block">
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <img
          src="/images/opai-avatar-img-170.jpg"
          alt="Email Automation That Converts: AI Segmentation + Personalization"
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
        />
      </figure>
    </a>
    <div className="space-y-4 px-2">
      <p className="text-tagline-5 text-background-13/80 font-normal">28/6/2025</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Email</span
          >
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Automation</span
          >
        </div>
        <a href="/blog-details" className="blog-title-black">
          <h3 className="text-is-heading-5 text-background-13 font-normal">
            Email automation that converts segmentation
          </h3>
        </a>
      </div>
    </div>
  </article>

  
  <article
    className="group underline-hover-effect-black relative min-h-[545px] w-full space-y-4"
    data-opai-animate
    data-delay="0.6"
  >
    <a href="/blog-details" className="block">
      <figure className="h-[380px] w-full overflow-hidden rounded-lg">
        <img
          src="/images/opai-avatar-img-171.jpg"
          alt="Landing Page CRO Checklist: Fix Leaks and Increase Conversions"
          className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
        />
      </figure>
    </a>
    <div className="space-y-4 px-2">
      <p className="text-tagline-5 text-background-13/80 font-normal">28/6/2025</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >CRO</span
          >
          <span
            className="bg-background-13/5 text-tagline-4 text-background-13/50 rounded-full px-3 py-1 font-normal"
            >Landing Page</span
          >
        </div>
        <a href="/blog-details" className="blog-title-black">
          <h3 className="text-is-heading-5 text-background-13 font-normal">
            Landing page CRO checklist: fix leaks and lift conversions
          </h3>
        </a>
      </div>
    </div>
  </article>
</div>

    </div>

    <div className="flex justify-center" data-opai-animate data-delay="0.1">
      <a
  href="/blog"
  className="group bg-background-14 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-tagline-2 text-background-7 w-[85%] md:w-auto block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Read Marketing Insights
    </span>
    <span
      className="font-ibm-plex-mono text-background-7 text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Read Marketing Insights
    </span>
  </div>

  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
    
    <span
      className="bg-background-7 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out"
    >
      
      <span
        className="stroke-background-14 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>

    
    <span
      className="stroke-background-14 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
</a>

    </div>
  </div>
</section>

      

<section
  className="bg-background-6 !pt-20 md:!pt-30 lg:!pt-44 overflow-hidden py-14 md:py-20 lg:py-24 xl:py-28"
>
  <div className="main-container">
    <div className="space-y-14 pb-9">
      

      <div className="flex items-center justify-center gap-x-2">
        <img
          data-opai-avatar
          data-avatar-delay="0.1"
          className="inline-block size-14 rounded-full"
          src="/images/opai-avatar-img-05.png"
          alt="Marketing Expert 1"
        />
        <img
          data-opai-avatar
          data-avatar-delay="0.2"
          className="inline-block size-14 rounded-full"
          src="/images/opai-avatar-img-06.png"
          alt="Marketing Expert 2"
        />
        <img
          data-opai-avatar
          data-avatar-delay="0.3"
          className="inline-block size-14 rounded-full"
          src="/images/opai-avatar-img-07.png"
          alt="Marketing Expert 3"
        />
        <img
          data-opai-avatar
          data-avatar-delay="0.4"
          className="inline-block size-14 rounded-full"
          src="/images/opai-avatar-img-08.png"
          alt="Marketing Expert 4"
        />
      </div>
      <div className="space-y-3">
        <h2
          className="text-is-heading-3 lg:text-is-heading-2 font-instrument-serif text-center font-normal tracking-[-2.4px] text-white/90"
          data-opai-animate
          data-delay="0.1"
        >
          
          <span
            className="inline-flex flex-wrap items-start justify-center gap-x-1 sm:flex-nowrap md:items-center"
          >
            <span className="w-full sm:w-auto">Turn clicks</span>
            <span
              className="cta-content-image inline-block h-[52px] w-[88px] overflow-hidden rounded-[300px] align-middle"
            >
              <img
                src="/images/opai-img-24.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="w-full sm:w-auto">Into customers</span>
          </span>

          <br />

          
          <span className="inline-flex items-center justify-center gap-x-4">
            <span
              className="cta-content-image-2 inline-block size-12 -rotate-[20deg] overflow-hidden rounded-lg align-middle"
            >
              <img
                src="/images/opai-avatar-img-25.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </span>
            <span>the smarter way</span>
          </span>
        </h2>

        <p
          className="text-tagline-2 mx-auto w-full max-w-[320px] text-center text-white/60"
          data-opai-animate
          data-delay="0.2"
        >
          No guesswork. We use AI + proven marketing systems to scale ads, SEO,
          and conversion.
        </p>
      </div>

      <div className="flex justify-center" data-opai-animate data-delay="0.3">
        <a
  href="/contact"
  className="group bg-background-7 hover:border-stroke-3 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Book a strategy call
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Book a strategy call
    </span>
  </div>

  <div className="relative mt-[1.5px] flex size-6 items-center justify-center overflow-hidden">
    
    <span
      className="bg-background-6 absolute size-[22px] translate-x-0 rounded-full transition-all duration-400 ease-in-out"
    >
      
      <span
        className="stroke-background-10 absolute size-[16px] translate-x-[2.5px] translate-y-0.5 scale-95 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>

    
    <span
      className="stroke-background-10 absolute size-[18px] -translate-x-6 stroke-2 transition-all duration-400 ease-in-out group-hover:translate-x-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
</a>

      </div>
    </div>

    <div
      data-opai-animate
      data-delay="0.4"
      data-duration="3"
      data-direction="right"
      data-spring
    >
      <figure className="flex justify-end">
        <img src="/images/vector-01.svg" alt="CTA Image" />
      </figure>
    </div>
  </div>
</section>

    </main>
    </>
  )
}