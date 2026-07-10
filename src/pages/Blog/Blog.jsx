import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
      <SEO title="Blog" url="/blog" />
<main className="bg-background-5">
      
<section className="relative overflow-hidden pt-33 pb-10 md:pt-39 lg:pb-20">
  <div className="main-container">
    <div className="space-y-4">
      <div data-opai-animate data-delay="0.1">
        <span className="fill-opai-blue justify-center text-white flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 justify-center text-white font-normal">
    Blog
  </span>
</span>

      </div>
      <div className="space-y-3 text-center">
        <h2
          data-opai-animate
          data-delay="0.2"
          className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 mx-auto w-full max-w-[550px] font-normal text-white/90"
        >
          Stay Ahead with the Latest in AI Automation
        </h2>
        <p
          data-opai-animate
          data-delay="0.3"
          className="font-inter-tight text-tagline-2 font-normal text-white/60"
        >
          Discover expert tips, industry trends, and actionable strategies to power your growth with
          Ezitech.
        </p>
      </div>
    </div>
  </div>
</section>

      

<section className="pt-8 pb-20 md:pb-30 lg:pb-44">
  <div className="main-container">
    <div className="space-y-[70px]" data-opai-animate data-delay="0.1">
      
      <div className="flex flex-wrap items-center justify-center gap-[15px]">
        <button
          data-flip-id="all"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          All
        </button>
        <button
          data-flip-id="ai-basics"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          AI Basics
        </button>
        <button
          data-flip-id="automation"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          Automation
        </button>
        <button
          data-flip-id="productivity"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          Productivity
        </button>
        <button
          data-flip-id="ai-trends"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          AI Trends
        </button>
        <button
          data-flip-id="case-studies"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          Case Studies
        </button>
        <button
          data-flip-id="product-updates"
          className="border-stroke-3/25 data-[state=selected]:text-background-13/90 font-inter-tight text-tagline-3 cursor-pointer rounded-full border px-5 py-[9px] text-white/60 transition-all duration-400 ease-in-out data-[state=selected]:bg-white"
        >
          Product Updates
        </button>
      </div>

      

      <div className="relative" data-cards-container>
        <div className="grid h-full grid-cols-12 gap-x-0 gap-y-[70px] lg:gap-x-8">
          
          <article
            data-flip-item
            data-flip-category="ai-basics"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-159.jpg"
                  alt="AI Marketing 101: Metrics That Actually Matter (CAC, LTV, ROAS)"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">08/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Strategy</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Metrics</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    AI marketing 101: the metrics that actually matter
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="automation"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-14.png"
                  alt="Lead Routing Automation: From Form Submit to Sales Call in 5 Minutes"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">12/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Lead Gen</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Workflows</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Lead routing automation: from form to call in minutes
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="productivity"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-15.png"
                  alt="Creative Production System: Generate 30 Ads per Week Without Losing Quality"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">18/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Creatives</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Systems</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    A practical system to produce more ad creatives (without chaos)
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="ai-trends"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-16.png"
                  alt="What’s Changing in Paid Ads: Creative Signals, Landing Page Quality, and AI"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">22/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Paid Ads</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Trends</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    What’s changing in paid ads (and what we’re doing about it)
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="case-studies"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-17.png"
                  alt="Case Study: Cutting Cost per Lead with Better Offer + AI-Based Testing"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">24/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >CRO</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Testing</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Case study: lower CPL with offer testing and faster iterations
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="product-updates"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-18.png"
                  alt="New: Weekly Performance Snapshot (ROAS, Spend, Leads) Delivered to Your Inbox"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">26/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Reporting</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Updates</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Product update: weekly performance snapshot for faster decisions
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="ai-basics"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-19.png"
                  alt="A Simple AI Brief Template for High-Converting Ad Copy"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">27/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Copywriting</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Framework</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    A simple AI brief template to improve ad copy quality
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="automation"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-21.png"
                  alt="Automated Reporting: Connect Ads + CRM and Remove Manual Spreadsheets"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">28/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Attribution</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Dashboards</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Automated reporting: connect ads + CRM and end manual updates
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="productivity"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-23.png"
                  alt="Campaign QA Checklist: Prevent Tracking + Budget Mistakes Before Launch"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">29/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Process</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >QA</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Campaign QA checklist: prevent tracking and budget mistakes
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="ai-trends"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-25.png"
                  alt="AI Creative Testing: Why Iteration Speed Wins in 2026"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">30/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Creatives</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Testing</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    AI creative testing: why iteration speed wins this year
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="case-studies"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-26.png"
                  alt="Case Study: Scaling a Local Service Brand with Better Landing Pages + Ads"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">31/01/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Landing Pages</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Scale</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Case study: scaling a service brand with ads + landing page fixes
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="product-updates"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-27.png"
                  alt="New: Creative Library + Naming Convention to Keep Campaigns Clean"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">01/02/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Workflow</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Release</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Product update: creative library to keep campaigns organized
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="ai-basics"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-28.png"
                  alt="Attribution Basics: UTM Structure for Clean Reporting"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">02/02/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Tracking</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >UTM</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Attribution basics: a UTM structure that keeps reporting clean
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="ai-trends"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-29.png"
                  alt="The New Creative Loop: Research → Angles → Variations → Learning"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">03/02/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Strategy</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Creative</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    The modern creative loop: research, variations, learning
                  </h3>
                </a>
              </div>
            </div>
          </article>

          
          <article
            data-flip-item
            data-flip-category="automation"
            className="group underline-hover-effect relative col-span-12 h-[545px] space-y-4 md:col-span-6 lg:col-span-4"
          >
            <figure className="h-[380px] w-full overflow-hidden rounded-lg">
              <a href="/blog-details">
                <img
                  src="/images/opai-img-51.png"
                  alt="Lifecycle Automation: Nurture Leads with Segments, Not Guesswork"
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                />
              </a>
            </figure>
            <div className="space-y-4 px-2">
              <p className="text-tagline-5 font-normal text-white/60">04/02/2026</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Email</span
                  >
                  <span
                    className="text-tagline-4 rounded-full bg-white/5 px-3 py-1 font-normal text-white/60"
                    >Nurture</span
                  >
                </div>
                <a href="/blog-details" className="blog-title">
                  <h3 className="text-is-heading-5 font-normal text-white">
                    Lifecycle automation: nurture leads with segments (not guesswork)
                  </h3>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
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
