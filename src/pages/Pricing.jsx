import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <>
      <SEO title="Pricing" url="/pricing" />
<main className="bg-background-5">
      

<section className="price-scope pt-28 md:pt-39">
  <div className="main-container">
    <div className="space-y-14 md:space-y-[70px]">
      
      <div className="space-y-3 text-center">
        <h2
          data-opai-animate
          data-delay="0.1"
          data-instant
          className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90"
        >
          Pricing plan
        </h2>
        <p
          data-opai-animate
          data-delay="0.2"
          data-instant
          className="font-inter-tight text-tagline-2 font-normal text-white/60"
        >
          Choose the perfect plan for your business and supercharge your
          marketing with AI-powered insights.
        </p>
      </div>

      
      <div
        data-opai-animate
        data-delay="0.3"
        data-instant
        className="bg-background-4 flex flex-col-reverse items-center justify-center gap-y-4 rounded-[20px] p-2 lg:flex-row"
      >
        
        <figure
          className="size-full h-fit w-full overflow-hidden rounded-xl lg:h-[702px] lg:basis-1/2"
        >
          <img
            src="/images/opai-img-109.png"
            alt="pricing"
            className="size-full object-cover"
          />
        </figure>

        <div className="bg-background-6 w-full rounded-xl p-9 lg:basis-1/2">
          
          <div className="mb-6">
            <fieldset className="flex h-11 items-center gap-x-2">
              <label
                className="bg-background-3 relative h-7 w-[72px] cursor-pointer rounded-full p-1"
                aria-label="Toggle pricing plan"
              >
                <input
                  type="checkbox"
                  className="peer price-switcher-input sr-only"
                  aria-checked="false"
                  role="switch"
                />
                <span
                  className="bg-background-7 absolute left-1 h-5 w-8 rounded-full transition-all duration-300 ease-in-out peer-checked:left-1/2"
                ></span>
              </label>

              
              <span
                className="price-label-monthly font-inter-tight text-tagline-2 font-normal text-white/90"
                >Monthly</span
              >
              <span
                className="price-label-yearly font-inter-tight text-tagline-2 hidden font-normal text-white/90"
                >Yearly</span
              >
            </fieldset>
          </div>

          
          <div className="mb-8 h-[76px] space-y-2">
            <h3
              className="font-instrument-serif text-is-heading-4 font-normal text-white/90"
            >
              Starter
            </h3>
            <p
              className="font-inter-tight text-tagline-2 font-normal text-white/60"
            >
              Best for startup and small teams
            </p>
          </div>

          
          
          <h4
            className="price-month border-stroke-1/11 font-instrument-serif text-is-heading-3 space-x-1 border-b pb-5 font-normal text-white/90"
          >
            <span className="text-is-heading-6 -mr-1">$</span>
            269
            <span
              className="font-inter-tight text-tagline-2 font-normal text-white/60"
              >/Month</span
            >
          </h4>

          
          <h4
            className="price-year border-stroke-1/11 font-instrument-serif text-is-heading-3 hidden space-x-1 border-b pb-5 font-normal text-white/90"
          >
            <span className="text-is-heading-6 -mr-1">$</span>
            2459
            <span
              className="font-inter-tight text-tagline-2 font-normal text-white/60"
              >/Year</span
            >
          </h4>

          
          <div className="space-y-14 pt-8">
            <ul className="space-y-4 py-2">
              <li
                className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
              >
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="{=$class} size-4">
  <path
    d="M13.5 4.50037L6.5 11.5001L3 8.00037"
    stroke="white"
    stroke-opacity="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </span>
                Code Generation Support
              </li>
              <li
                className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
              >
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="{=$class} size-4">
  <path
    d="M13.5 4.50037L6.5 11.5001L3 8.00037"
    stroke="white"
    stroke-opacity="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </span>
                JSON & Mongoose Schema Outputs
              </li>
              <li
                className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
              >
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="{=$class} size-4">
  <path
    d="M13.5 4.50037L6.5 11.5001L3 8.00037"
    stroke="white"
    stroke-opacity="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </span>
                JavaScript Snippet Library
              </li>
              <li
                className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
              >
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="{=$class} size-4">
  <path
    d="M13.5 4.50037L6.5 11.5001L3 8.00037"
    stroke="white"
    stroke-opacity="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </span>
                API Integration Examples
              </li>
              <li
                className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
              >
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="{=$class} size-4">
  <path
    d="M13.5 4.50037L6.5 11.5001L3 8.00037"
    stroke="white"
    stroke-opacity="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </span>
                Advanced Error Handling Techniques
              </li>
              <li
                className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/90"
              >
                <span className="flex size-4 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="{=$class} size-4">
  <path
    d="M13.5 4.50037L6.5 11.5001L3 8.00037"
    stroke="white"
    stroke-opacity="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                </span>
                User Authentication Workflows
              </li>
            </ul>

            <a
  href="/contact"
  className="group bg-background-7 hover:border-stroke-3 {=$anchor-class} relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Buy Now
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Buy Now
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
      </div>
    </div>
  </div>
</section>

      <section className="lp:py-44 relative overflow-hidden py-20 md:py-25 lg:py-30">
  <div className="main-container relative z-10">
    <div className="space-y-[70px]">
      
      <div className="space-y-2 text-center">
        <h2
          data-opai-animate
          data-delay="0.1"
          className="font-inter-tight text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90"
        >
          What’s included in every plan
        </h2>
        <p
          data-opai-animate
          data-delay="0.2"
          className="font-inter-tight text-tagline-2 font-normal text-white/60"
        >
          Core Benefits for Every Plan
        </p>
      </div>
      
      <div
        data-opai-animate
        data-delay="0.3"
        className="outline-background-4 bg-background-5 space-y-18 rounded-[20px] p-6 outline-8 md:p-11"
      >
        
        <div
          data-opai-animate
          data-delay="0.4"
          className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-y-0 xl:justify-end"
          aria-label="Pricing plans"
        >
          
          <div
            className="bg-background-6 w-full max-w-[390px] space-y-[29px] rounded-lg px-8 pt-8 pb-6 md:rounded-none md:rounded-l-lg"
          >
            <p
              className="font-inter-tight text-tagline-2 text-background-7 font-normal"
            >
              Basic
            </p>
            <div className="space-y-3">
              <h3 className="font-instrument-serif text-is-heading-2 text-white/90">
                $29
              </h3>
              <p
                className="font-inter-tight text-tagline-2 w-full max-w-[180px] font-normal text-white/60"
              >
                One time payment plus local taxes
              </p>
            </div>
            <a
  href="/contact"
  className="group bg-background-7 hover:border-stroke-3 !py-2.5 relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Get Basic
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Get Basic
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

          
          <div
            className="bg-background-6 w-full max-w-[390px] space-y-[29px] rounded-lg px-8 pt-8 pb-6 md:rounded-none md:rounded-r-lg"
            aria-labelledby="team-plan"
          >
            <p
              className="font-inter-tight text-tagline-2 text-background-7 font-normal"
            >
              Team
            </p>
            <div className="space-y-3">
              <h3 className="font-instrument-serif text-is-heading-2 text-white/90">
                $99
              </h3>

              <p
                className="font-inter-tight text-tagline-2 w-full max-w-[180px] font-normal text-white/60"
              >
                One time payment plus local taxes
              </p>
            </div>
            <a
  href="/contact"
  className="group bg-background-7 hover:border-stroke-3 !py-2.5 relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Upgrade to Team
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Upgrade to Team
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
        
        <div data-opai-animate data-delay="0.5">
          
          <div
            className="*:border-r-stroke-1/11 border-b-stroke-1/11 grid grid-cols-12 items-start justify-center border-b py-5 *:h-[330px] *:border-r md:*:h-[280px]"
          >
            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 px-2 *:font-normal *:text-white/90 md:space-y-8 md:px-0"
            >
              <li>AI Pricing Insights</li>
              <li>Dynamic Cost Adjustments</li>
              <li>Predictive Pricing Models</li>
              <li>Automated Price Optimization</li>
              <li>Real-time Market Analysis</li>
            </ul>

            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8"
            >
              <li>10</li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
            </ul>

            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8"
            >
              <li>Unlimited</li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
            </ul>
          </div>

          
          <div
            className="*:border-r-stroke-1/11 border-b-stroke-1/11 grid grid-cols-12 items-start justify-center border-b py-5 *:h-[330px] *:border-r md:*:h-[280px]"
          >
            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 px-2 *:font-normal *:text-white/90 md:space-y-8 md:px-0"
            >
              <li>Rule-based Automation</li>
              <li>Custom Pricing Rules</li>
              <li>Bulk Price Updates</li>
              <li>Scheduled Adjustments</li>
              <li>Fail-safe Price Limits</li>
            </ul>

            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8"
            >
              <li>5 Rules</li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
            </ul>

            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8"
            >
              <li>Unlimited Rules</li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
            </ul>
          </div>

          
          <div
            className="*:border-r-stroke-1/11 border-b-stroke-1/11 grid grid-cols-12 items-start justify-center border-b py-5 *:h-[330px] *:border-r md:*:h-[280px]"
          >
            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 px-2 *:font-normal *:text-white/90 md:space-y-8 md:px-0"
            >
              <li>Performance Analytics</li>
              <li>Revenue Impact Tracking</li>
              <li>Competitor Price Monitoring</li>
              <li>Historical Price Reports</li>
              <li>Exportable Data Insights</li>
            </ul>

            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8"
            >
              <li>Basic Reports</li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
            </ul>

            <ul
              className="*:font-inter-tight *:text-tagline-3 md:*:text-tagline-2 col-span-4 space-y-4 text-center *:font-normal *:text-white/90 md:space-y-8"
            >
              <li>Advanced Reports</li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="{=$class} size-6">
  <path
    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
    fill="white"
    fill-opacity="0.9"
  />
</svg>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  <div
    className="bg-opai-purple absolute bottom-[9%] left-1/2 z-1 mx-auto h-[304px] w-[70%] -translate-x-1/2 rounded-[420px] blur-[142px]"
  ></div>

  <div
    className="bg-opai-purple absolute bottom-[6%] left-1/2 z-2 h-[345px] w-[110%] -translate-x-1/2 rounded-[420px] mix-blend-color-dodge blur-[162px]"
  ></div>

  <div
    className="bg-background-7 absolute bottom-0 left-1/2 z-3 h-[297px] w-[110%] -translate-x-1/2 rounded-[120px] blur-[107px]"
  ></div>
  <div
    className="bg-background-7 absolute -bottom-10 left-1/2 z-4 h-[175px] w-[110%] -translate-x-1/2 rounded-[80px] blur-[28px]"
  ></div>
  <div
    className="bg-background-7 absolute -bottom-5 left-1/2 z-5 h-[55px] w-[110%] -translate-x-1/2 rounded-[80px] blur-[28px]"
  ></div>

  <div className="bg-background-7 absolute -bottom-4 left-0 z-6 h-[55px] w-40 blur-[10px]"></div>
  <div className="bg-background-7 absolute right-0 -bottom-4 z-6 h-[55px] w-40 blur-[10px]"></div>
</div>

</section>

      
<section className="bg-background-7 lp:py-44 overflow-hidden py-20 md:py-25 lg:py-30">
  <div className="main-container">
    <div className="space-y-4">
      <div data-opai-animate data-delay="0.1">
        <span className="fill-opai-blue text-background-13/60 justify-center flex items-center gap-x-1">
  <span className="flex size-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z"
      />
    </svg>
  </span>
  <span className="font-inter-tight text-tagline-4 text-background-13/70 text-background-13/60 justify-center font-normal">
    Testimonial
  </span>
</span>

      </div>
      <h2
        data-opai-animate
        data-delay="0.2"
        className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 text-center font-normal"
      >
        What Our Clients Are Saying.
      </h2>
    </div>
  </div>
  <div data-opai-animate data-delay="0.3" className="mt-[70px]">
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
