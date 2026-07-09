import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <SEO title="About Us" url="/about" />
<main className="bg-background-5">

  
  
  
  <section className="bg-background-5 pt-39 pb-20 md:pb-30" aria-label="About Ezitech">
    <div className="main-container">

      
      <div className="text-center mb-10" data-opai-animate data-delay="0.1" data-instant>
        <span className="inline-flex items-center gap-x-2 rounded-full border border-opai-blue/30 bg-opai-blue/10 px-4 py-1.5">
          <span className="size-1.5 rounded-full bg-opai-blue"></span>
          <span className="font-ibm-plex-mono text-tagline-4 font-medium text-opai-blue tracking-wide uppercase">About Ezitech</span>
        </span>
      </div>

      
      <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">
        <h1 data-opai-animate data-delay="0.2" data-instant
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 leading-tight">
          Building technology that<br className="hidden sm:block" />
          empowers businesses worldwide
        </h1>
        <p data-opai-animate data-delay="0.3" data-instant
           className="text-tagline-2 font-normal text-white/60 max-w-2xl mx-auto">
          For over 15 years, Ezitech has been delivering innovative software solutions, SaaS products, and digital experiences that help businesses grow, scale, and succeed.
        </p>
      </div>

      
      <div data-opai-animate data-delay="0.4" data-instant
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", marginBottom: "80px" }}>
        <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            <span className="text-3xl font-instrument-serif font-normal text-white/90">15+</span>
          </div>
          <p className="text-tagline-3 text-white/50 text-center">Years Experience</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z"/></svg>
            <span className="text-3xl font-instrument-serif font-normal text-white/90">500+</span>
          </div>
          <p className="text-tagline-3 text-white/50 text-center">Projects Delivered</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            <span className="text-3xl font-instrument-serif font-normal text-white/90">100+</span>
          </div>
          <p className="text-tagline-3 text-white/50 text-center">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>
            <span className="text-3xl font-instrument-serif font-normal text-white/90">50+</span>
          </div>
          <p className="text-tagline-3 text-white/50 text-center">Experts on Team</p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        
        <div data-opai-animate data-delay="0.5" data-instant
             className="bg-background-7 rounded-2xl p-8 space-y-4 border border-stroke-1/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="size-1.5 rounded-full bg-opai-blue"></span>
            <span className="font-ibm-plex-mono text-tagline-4 text-opai-blue uppercase tracking-wide">Our Story</span>
          </div>
          <h2 className="font-instrument-serif text-is-heading-5 md:text-is-heading-4 font-normal text-white/90 leading-snug">
            Driven by innovation.<br />Focused on impact.
          </h2>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            Ezitech was founded with a single mission — to transform ideas into beautiful digital products. From startups to enterprises, we partner with businesses across the globe to solve complex problems with technology.
          </p>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            We combine strategy, design, and engineering to build solutions that are scalable, secure, and performance-driven.
          </p>
          <a href="/contact"
             className="inline-flex items-center gap-2 text-opai-blue text-tagline-3 font-medium mt-2 hover:gap-3 transition-all duration-300">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        
        <div data-opai-animate data-delay="0.6" data-instant
             className="bg-background-7 rounded-2xl p-8 border border-stroke-1/10 space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="size-1.5 rounded-full bg-opai-blue"></span>
            <span className="font-ibm-plex-mono text-tagline-4 text-opai-blue uppercase tracking-wide">Our Values</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-opai-blue/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <div>
                <p className="text-tagline-2 font-medium text-white/90">Innovation</p>
                <p className="text-tagline-3 text-white/55">We embrace new ideas and technologies to build future-ready solutions.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-opai-blue/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/></svg>
              </span>
              <div>
                <p className="text-tagline-2 font-medium text-white/90">Quality</p>
                <p className="text-tagline-3 text-white/55">We are committed to delivering excellence in every project.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-opai-blue/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              <div>
                <p className="text-tagline-2 font-medium text-white/90">Transparency</p>
                <p className="text-tagline-3 text-white/55">We believe in clear communication and long-term partnerships.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-opai-blue/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </span>
              <div>
                <p className="text-tagline-2 font-medium text-white/90">Client Success</p>
                <p className="text-tagline-3 text-white/55">Your growth is our success. We go the extra mile, every time.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
      <div data-opai-animate data-delay="0.7" data-instant
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-background-7 rounded-xl p-6 border border-stroke-1/10 space-y-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-opai-blue/15">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </span>
          <h4 className="text-tagline-2 font-medium text-white/90">Our Mission</h4>
          <p className="text-tagline-3 text-white/55">To empower businesses with innovative technology solutions that drive efficiency, growth, and long-term success.</p>
        </div>
        <div className="bg-background-7 rounded-xl p-6 border border-stroke-1/10 space-y-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-opai-blue/15">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </span>
          <h4 className="text-tagline-2 font-medium text-white/90">Our Vision</h4>
          <p className="text-tagline-3 text-white/55">To become a globally trusted technology partner recognized for innovation, quality, and digital transformation.</p>
        </div>
        <div className="bg-background-7 rounded-xl p-6 border border-stroke-1/10 space-y-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-opai-blue/15">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          </span>
          <h4 className="text-tagline-2 font-medium text-white/90">Our Approach</h4>
          <p className="text-tagline-3 text-white/55">Agile, collaborative, and customer-first approach to deliver measurable results with speed and precision.</p>
        </div>
        <div className="bg-background-7 rounded-xl p-6 border border-stroke-1/10 space-y-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-opai-blue/15">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </span>
          <h4 className="text-tagline-2 font-medium text-white/90">Global Reach</h4>
          <p className="text-tagline-3 text-white/55">Proudly serving clients in multiple industries and countries with a global mindset and local understanding.</p>
        </div>
      </div>

    </div>
  </section>

  
  
  
  <section className="bg-background-5 py-20 md:py-25">
    <div className="main-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div data-opai-animate data-delay="0.1"
             className="bg-background-7 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 group">
          <div className="flex-shrink-0 size-14 rounded-full bg-opai-blue/15 flex items-center justify-center group-hover:bg-opai-blue/25 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">Our Mission</h3>
            <p className="text-tagline-2 text-white/60 leading-relaxed">To empower businesses with innovative technology solutions that drive efficiency, growth, and long-term success.</p>
            <div className="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0 w-20 h-20 items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-40" style={{ color: "#8d59ff" }}>
              <polygon points="50,15 85,80 15,80" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              <polygon points="35,60 50,38 65,60" fill="none" stroke="currentColor" strokeWidth="2"/>
              <line x1="50" y1="15" x2="50" y2="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="5" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.2"
             className="bg-background-7 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 group">
          <div className="flex-shrink-0 size-14 rounded-full bg-opai-blue/15 flex items-center justify-center group-hover:bg-opai-blue/25 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">Our Vision</h3>
            <p className="text-tagline-2 text-white/60 leading-relaxed">To become a globally trusted technology partner recognized for innovation, quality, and digital transformation.</p>
            <div className="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0 w-20 h-20 items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-40" style={{ color: "#8d59ff" }}>
              <line x1="25" y1="75" x2="75" y2="25" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="75" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="75" cy="25" r="3" fill="currentColor"/>
              <line x1="40" y1="88" x2="25" y2="75" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="55" y1="88" x2="40" y2="88" stroke="currentColor" strokeWidth="2"/>
              <path d="M60,25 Q75,10 90,25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  
  
  <section className="bg-background-7 py-20 md:py-25">
    <div className="main-container space-y-16">

      
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <div data-opai-animate data-delay="0.1">
          <span className="inline-flex items-center justify-center gap-x-1.5">
            <span className="fill-opai-blue flex size-4 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" fill="#8d59ff"/></svg>
            </span>
            <span className="font-inter-tight text-tagline-4 text-white/50 font-normal">Our Story</span>
          </span>
        </div>
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
          The Journey of Ezitech Solutions
        </h2>
        <p data-opai-animate data-delay="0.3"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-3xl mx-auto leading-relaxed">
          Ezitech Solutions is a technology-driven software company committed to helping businesses accelerate growth through innovative digital solutions. Backed by years of industry experience, we specialize in custom software development, web applications, mobile apps, SaaS platforms, and AI-powered solutions.
        </p>
        <p data-opai-animate data-delay="0.35"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-3xl mx-auto leading-relaxed">
          Our mission is to bridge the gap between business challenges and technology by delivering reliable, scalable, and future-ready products that create measurable impact.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div data-opai-animate data-delay="0.1"
             className="bg-background-5 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-2">
          <div className="font-instrument-serif text-5xl font-normal text-opai-blue">15+</div>
          <p className="text-tagline-2 text-white/70 font-medium">Years Experience</p>
          <p className="text-tagline-3 text-white/40">Industry expertise since</p>
          <span className="inline-block font-ibm-plex-mono text-tagline-4 text-opai-blue/70 border border-opai-blue/20 rounded-full px-3 py-0.5 mt-1">2022</span>
        </div>
        <div data-opai-animate data-delay="0.2"
             className="bg-background-5 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-2">
          <div className="font-instrument-serif text-5xl font-normal text-opai-blue">500+</div>
          <p className="text-tagline-2 text-white/70 font-medium">Successful Projects</p>
          <p className="text-tagline-3 text-white/40">Delivered with precision</p>
          <span className="inline-block font-ibm-plex-mono text-tagline-4 text-opai-blue/70 border border-opai-blue/20 rounded-full px-3 py-0.5 mt-1">2023</span>
        </div>
        <div data-opai-animate data-delay="0.3"
             className="bg-background-5 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-2">
          <div className="font-instrument-serif text-5xl font-normal text-opai-blue">100+</div>
          <p className="text-tagline-2 text-white/70 font-medium">Happy Clients</p>
          <p className="text-tagline-3 text-white/40">Across multiple industries</p>
          <span className="inline-block font-ibm-plex-mono text-tagline-4 text-opai-blue/70 border border-opai-blue/20 rounded-full px-3 py-0.5 mt-1">2024</span>
        </div>
        <div data-opai-animate data-delay="0.4"
             className="bg-background-5 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-2">
          <div className="font-instrument-serif text-5xl font-normal text-opai-blue">40+</div>
          <p className="text-tagline-2 text-white/70 font-medium">Expert Developers</p>
          <p className="text-tagline-3 text-white/40">Growing team of specialists</p>
          <span className="inline-block font-ibm-plex-mono text-tagline-4 text-opai-blue/70 border border-opai-blue/20 rounded-full px-3 py-0.5 mt-1">2025–26</span>
        </div>
      </div>

    </div>
  </section>

  
  
  
  <section className="bg-background-5 py-20 md:py-25">
    <div className="main-container space-y-16">

      <div className="text-center space-y-4">
        <div data-opai-animate data-delay="0.1">
          <span className="inline-flex items-center justify-center gap-x-1.5">
            <span className="fill-opai-blue flex size-4 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" fill="#8d59ff"/></svg>
            </span>
            <span className="font-inter-tight text-tagline-4 text-white/50 font-normal">Process</span>
          </span>
        </div>
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
          Our Development Process
        </h2>
        <p data-opai-animate data-delay="0.3"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-xl mx-auto">
          From discovery to delivery — we build with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div data-opai-animate data-delay="0.1"
             className="bg-background-7 p-8 rounded-xl border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <span className="font-instrument-serif text-6xl font-normal text-opai-blue/30 group-hover:text-opai-blue/50 transition-colors duration-300">01</span>
            <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </span>
          </div>
          <div>
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mb-1">Discover</h3>
            <p className="text-tagline-3 font-medium" style={{ color: "#8d59ff" }}>Requirements Analysis &amp; Strategic Planning</p>
          </div>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            We understand your business objectives, challenges, and project requirements to build the right solution.
          </p>
        </div>

        
        <div data-opai-animate data-delay="0.2"
             className="bg-background-7 p-8 rounded-xl border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <span className="font-instrument-serif text-6xl font-normal text-opai-blue/30 group-hover:text-opai-blue/50 transition-colors duration-300">02</span>
            <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </span>
          </div>
          <div>
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mb-1">Develop</h3>
            <p className="text-tagline-3 font-medium" style={{ color: "#8d59ff" }}>Agile Design &amp; Development</p>
          </div>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            Our experts design, develop, and continuously improve products through agile development cycles.
          </p>
        </div>

        
        <div data-opai-animate data-delay="0.3"
             className="bg-background-7 p-8 rounded-xl border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 space-y-4 group">
          <div className="flex items-center justify-between">
            <span className="font-instrument-serif text-6xl font-normal text-opai-blue/30 group-hover:text-opai-blue/50 transition-colors duration-300">03</span>
            <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </span>
          </div>
          <div>
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mb-1">Deliver</h3>
            <p className="text-tagline-3 font-medium" style={{ color: "#8d59ff" }}>Testing, Deployment &amp; Optimization</p>
          </div>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            We ensure quality, security, and performance before deployment while providing ongoing support.
          </p>
        </div>
      </div>

    </div>
  </section>

  
  
  
  <section className="bg-background-7 py-20 md:py-25">
    <div className="main-container space-y-16">

      <div className="text-center space-y-4">
        <div data-opai-animate data-delay="0.1">
          <span className="inline-flex items-center justify-center gap-x-1.5">
            <span className="fill-opai-blue flex size-4 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" fill="#8d59ff"/></svg>
            </span>
            <span className="font-inter-tight text-tagline-4 text-white/50 font-normal">Our Team</span>
          </span>
        </div>
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
          Our innovative, dynamic,<br className="hidden sm:block" /> and talented team
        </h2>
        <p data-opai-animate data-delay="0.3"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-xl mx-auto">
          Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a unique blend of expertise.
        </p>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

        
        <div data-opai-animate data-delay="0.1"
             className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
          <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
            <div className="size-full bg-gradient-to-br from-opai-blue/60 to-purple-700 flex items-center justify-center">
              <span className="font-instrument-serif text-xl font-bold text-white">CE</span>
            </div>
          </div>
          <div>
            <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">CEO &amp; Founder</h4>
            <p className="text-tagline-4 text-white/50 mt-0.5">Strategic Vision</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.2"
             className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
          <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
            <div className="size-full bg-gradient-to-br from-purple-600 to-opai-blue/60 flex items-center justify-center">
              <span className="font-instrument-serif text-xl font-bold text-white">PM</span>
            </div>
          </div>
          <div>
            <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">Project Manager</h4>
            <p className="text-tagline-4 text-white/50 mt-0.5">Execution Excellence</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.3"
             className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
          <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
            <div className="size-full bg-gradient-to-br from-opai-blue/80 to-blue-700 flex items-center justify-center">
              <span className="font-instrument-serif text-xl font-bold text-white">LE</span>
            </div>
          </div>
          <div>
            <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">Lead Software Engineer</h4>
            <p className="text-tagline-4 text-white/50 mt-0.5">Technical Leadership</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.4"
             className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
          <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
            <div className="size-full bg-gradient-to-br from-pink-600/80 to-opai-blue/60 flex items-center justify-center">
              <span className="font-instrument-serif text-xl font-bold text-white">UI</span>
            </div>
          </div>
          <div>
            <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">UI/UX Designer</h4>
            <p className="text-tagline-4 text-white/50 mt-0.5">User-Centered Design</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.5"
             className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
          <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
            <div className="size-full bg-gradient-to-br from-emerald-600/80 to-opai-blue/60 flex items-center justify-center">
              <span className="font-instrument-serif text-xl font-bold text-white">AI</span>
            </div>
          </div>
          <div>
            <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">AI Engineer</h4>
            <p className="text-tagline-4 text-white/50 mt-0.5">Intelligent Systems</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        
        <div data-opai-animate data-delay="0.6"
             className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
          <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
            <div className="size-full bg-gradient-to-br from-orange-600/80 to-opai-blue/60 flex items-center justify-center">
              <span className="font-instrument-serif text-xl font-bold text-white">QA</span>
            </div>
          </div>
          <div>
            <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">QA Engineer</h4>
            <p className="text-tagline-4 text-white/50 mt-0.5">Quality Assurance</p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-1">
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  
  
  
  <section className="bg-background-5 py-20 md:py-25 border-t border-stroke-1/10">
    <div className="main-container space-y-16">

      <div className="text-center space-y-4">
        <div data-opai-animate data-delay="0.1">
          <span className="inline-block bg-opai-blue/10 text-opai-blue px-4 py-1.5 rounded-full font-ibm-plex-mono text-tagline-4 font-medium">Reviews</span>
        </div>
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 max-w-3xl mx-auto">
          Hear from our customers about their experiences with us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div data-opai-animate data-delay="0.1"
             className="bg-background-7 p-6 rounded-xl border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 flex flex-col justify-between space-y-6">
          <p className="text-tagline-2 text-white/70 italic leading-relaxed">
            "Outstanding service and innovative solutions. The team's responsiveness and expertise have been invaluable to our business growth."
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-stroke-1/10">
            <div className="size-10 rounded-full bg-gradient-to-br from-opai-blue/60 to-purple-600/60 flex items-center justify-center shrink-0">
              <span className="text-tagline-4 font-bold text-white">MC</span>
            </div>
            <div>
              <div className="text-tagline-3 font-medium text-white/90">Michael Chen</div>
              <div className="text-tagline-4 text-white/50">CEO, TechCorp</div>
            </div>
          </div>
        </div>

        <div data-opai-animate data-delay="0.2"
             className="bg-background-7 p-6 rounded-xl border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 flex flex-col justify-between space-y-6">
          <p className="text-tagline-2 text-white/70 italic leading-relaxed">
            "The automation features have saved us countless hours. A game-changer for our business operations and team productivity."
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-stroke-1/10">
            <div className="size-10 rounded-full bg-gradient-to-br from-emerald-600/60 to-opai-blue/60 flex items-center justify-center shrink-0">
              <span className="text-tagline-4 font-bold text-white">AR</span>
            </div>
            <div>
              <div className="text-tagline-3 font-medium text-white/90">Alex Rodriguez</div>
              <div className="text-tagline-4 text-white/50">Operations Manager</div>
            </div>
          </div>
        </div>

        <div data-opai-animate data-delay="0.3"
             className="bg-background-7 p-6 rounded-xl border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 flex flex-col justify-between space-y-6">
          <p className="text-tagline-2 text-white/70 italic leading-relaxed">
            "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support is top-notch."
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-stroke-1/10">
            <div className="size-10 rounded-full bg-gradient-to-br from-pink-600/60 to-opai-blue/60 flex items-center justify-center shrink-0">
              <span className="text-tagline-4 font-bold text-white">DJ</span>
            </div>
            <div>
              <div className="text-tagline-3 font-medium text-white/90">David Johnson</div>
              <div className="text-tagline-4 text-white/50">Marketing Director</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</main>
    </>
  )
}
