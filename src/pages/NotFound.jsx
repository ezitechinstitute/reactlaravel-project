import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <SEO title="404" url="/" />
<main className="bg-background-5">
      <section className="pt-28 pb-20 md:pt-39 md:pb-30 lg:pb-44">
  <div className="main-container">
    <div className="space-y-[70px]">
      <div className="text-center">
        <h1
          data-opai-animate
          data-delay="0.1"
          className="font-instrument-serif text-is-heading-1 text-[200px] text-white"
        >
          404
        </h1>

        <div className="space-y-3">
          <h2
            data-opai-animate
            data-delay="0.2"
            className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white"
          >
            Oops! Page Not Found
          </h2>
          <p
            data-opai-animate
            data-delay="0.3"
            className="font-inter-tight text-tagline-2 mx-auto max-w-[300px] font-normal text-white/60"
          >
            The page doesn’t exist or was moved. Don’t worry, we’ll guide you back.
          </p>
        </div>
      </div>

      <div data-opai-animate data-delay="0.4">
        <a
  href="/"
  className="group bg-background-7 hover:border-stroke-3 w-[80%] sm:w-fit mx-auto relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
>
  <div className="h-full max-h-5 overflow-hidden">
    <span
      className="font-ibm-plex-mono text-background-13/90 text-tagline-2 block -translate-y-0.5 leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Go to Home
    </span>
    <span
      className="font-ibm-plex-mono text-tagline-2 block leading-[1.4] font-medium text-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-[105%]"
    >
      Go to Home
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
</section>

    </main>
    </>
  )
}
