import { useAnimation } from '../../hooks/useAnimation'

// ─── Client logos — row 1 aur row 2 ───────────────────────────────────────
const ROW_ONE = [
    { src: '/images/icons/scapic-with-black-text.svg', alt: 'Scapic' },
    { src: '/images/icons/notion-with-black-text.svg', alt: 'Notion' },
    { src: '/images/icons/lattice-with-black-text.svg', alt: 'Lattice' },
    { src: '/images/icons/hotjar-with-black-text.svg', alt: 'Hotjar' },
    { src: '/images/icons/discord-with-black-text.svg', alt: 'Discord' },
    { src: '/images/icons/stripe-with-black-text.svg', alt: 'Stripe' },
    { src: '/images/icons/spotify-with-black-text.svg', alt: 'Spotify' },
]

const ROW_TWO = [
    { src: '/images/icons/outreach-with-black-text.svg', alt: 'Outreach' },
    { src: '/images/icons/asana-with-black-text.svg', alt: 'Asana' },
    { src: '/images/icons/squarespace-with-black-text.svg', alt: 'Squarespace' },
    // Row 2 chhoti hai — marquee smooth dikhne ke liye same logos repeat kar diye
    { src: '/images/icons/scapic-with-black-text.svg', alt: 'Scapic' },
    { src: '/images/icons/notion-with-black-text.svg', alt: 'Notion' },
    { src: '/images/icons/lattice-with-black-text.svg', alt: 'Lattice' },
]

export default function ClientsSection() {

    // ─── Template ki InfiniteMarquee JS yahan chalti hai ─────────────────────
    useAnimation(() => {
        if (typeof window.InfiniteMarquee === 'undefined') return

        // Row 1 — left direction
        if (document.querySelector('.logos-marquee-container')) {
            new window.InfiniteMarquee({
                element: '.logos-marquee-container',
                speed: 500000,
                smoothEdges: true,
                direction: 'left',
                gap: '32px',
                duplicateCount: 1,
                mobileSettings: {
                    direction: 'left',
                    speed: 90000,
                },
            })
        }

        // Row 2 — right direction
        if (document.querySelector('.logos-right-marquee-container')) {
            new window.InfiniteMarquee({
                element: '.logos-right-marquee-container',
                speed: 500000,
                smoothEdges: true,
                direction: 'right',
                gap: '32px',
                duplicateCount: 1,
                mobileSettings: {
                    direction: 'right',
                    speed: 50000,
                },
            })
        }
    })

    return (
        <>
            <style>{`
  .logos-marquee-container .marquee-inner,
  .logos-right-marquee-container .marquee-inner {
    animation-duration: 80s !important;
  }
`}</style>
            <section className="py-16 md:py-20 lg:py-24 bg-background-2 dark:bg-background-5">
                <div className="main-container">
                    <div className="space-y-14">

                        {/* ── Heading block ─────────────────────────────────────── */}
                        <div className="space-y-3 text-center">

                            {/* Badge */}
                            <div
                                className="flex items-center justify-center pb-4"
                                data-opai-animate
                                data-delay="0.1"
                            >
                                <span className="fill-opai-blue flex items-center gap-x-1">
                                    <span className="flex items-center justify-center" style={{ width: '16px', height: '16px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M7.60938 0L7.9357 6.99568L12.3117 1.52786L8.4637 7.3793L15.2178 5.52786L8.66537 8L15.2178 10.4721L8.4637 8.6207L12.3117 14.4721L7.9357 9.00432L7.60938 16L7.28305 9.00432L2.90709 14.4721L6.75505 8.6207L0.00092268 10.4721L6.55338 8L0.00092268 5.52786L6.75505 7.3793L2.90709 1.52786L7.28305 6.99568L7.60938 0Z" />
                                        </svg>
                                    </span>

                                    <span className="font-inter-tight text-tagline-4 font-normal text-gray-700 dark:text-gray-300">
                                        Our clients
                                    </span>
                                </span>
                            </div>

                            {/* Main heading */}
                            <h2
                                className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-gray-900 dark:text-white"
                                data-opai-animate
                                data-delay="0.2"
                            >
                                Helping local businesses and national brands
                                <br className="hidden lg:block" />
                                succeed with data-backed marketing.
                            </h2>

                            {/* Subtext */}
                            <p
                                className="text-tagline-2 font-normal text-gray-600 dark:text-gray-400"
                                data-opai-animate
                                data-delay="0.3"
                            >
                                Trusted by 100+ businesses in retail, healthcare, tech, and more.
                            </p>
                        </div>

                        {/* ── Marquee rows ──────────────────────────────────────── */}
                        <div className="space-y-7">

                            {/* Row 1 — left scroll */}
                            <article
                                data-opai-animate
                                data-delay="0.3"
                                className="relative mx-auto"
                                style={{ maxWidth: '1200px' }}
                            >
                                {/* Left fade overlay */}
                                <div
                                    className="absolute left-0 top-0 h-full z-40 bg-gradient-to-r from-background-2 dark:from-background-5"
                                    style={{ width: '8%' }}
                                />
                                {/* Right fade overlay */}
                                <div
                                    className="absolute right-0 top-0 h-full z-40 bg-gradient-to-l from-background-2 dark:from-background-5"
                                    style={{ width: '8%' }}
                                />

                                {/* Marquee container — InfiniteMarquee yahan kaam karta hai */}
                                <div className="logos-marquee-container overflow-hidden">
                                    <div className="flex items-center justify-center gap-8">
                                        {ROW_ONE.map((logo, i) => (
                                            <figure
                                                key={i}
                                                className="flex-shrink-0"
                                                style={{ minWidth: '140px' }}
                                            >
                                                <img src={logo.src} alt={logo.alt} className="w-fit" />
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </article>

                            {/* Row 2 — right scroll */}
                            <article
                                data-opai-animate
                                data-delay="0.4"
                                className="relative mx-auto"
                                style={{ maxWidth: '900px' }}
                            >
                                {/* Left fade overlay */}
                                <div
                                    className="absolute left-0 top-0 h-full z-40 bg-gradient-to-r from-background-2 dark:from-background-5"
                                    style={{ width: '3%' }}
                                />
                                {/* Right fade overlay */}
                                <div
                                    className="absolute right-0 top-0 h-full z-40 bg-gradient-to-l from-background-2 dark:from-background-5"
                                    style={{ width: '3%' }}
                                />

                                {/* Marquee container */}
                                <div className="logos-right-marquee-container overflow-hidden">
                                    <div className="flex items-center justify-center gap-8">
                                        {ROW_TWO.map((logo, i) => (
                                            <figure
                                                key={i}
                                                className="flex-shrink-0"
                                                style={{ minWidth: '140px' }}
                                            >
                                                <img src={logo.src} alt={logo.alt} className="w-fit" />
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}