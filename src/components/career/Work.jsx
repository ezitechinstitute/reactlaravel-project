const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Innovation First",
    description: "Work on cutting-edge projects using AI, cloud, and modern stacks that push technological boundaries."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7">
        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.89" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Growth & Mentorship",
    description: "Continuous learning, certifications, and guidance from senior devs to accelerate your career."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Flexibility & Balance",
    description: "Remote-friendly, flexible hours, and a culture that respects your time and well-being."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Collaborative Culture",
    description: "Work alongside talented individuals who inspire, challenge, and support your best work."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Modern Tech Stack",
    description: "Work with the latest tools and technologies — React, AI, Cloud, and modern DevOps practices."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Impactful Projects",
    description: "Build solutions used by thousands of businesses and make a real difference from day one."
  }
]

export default function Work() {
  return (
    <section className="bg-background-5 py-20 md:py-30 lg:py-44">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-20">
          <p className="font-inter-tight text-tagline-4 text-white/50" data-opai-animate data-delay="0.1">More Features</p>

        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-background-6 border-stroke-1/11 group relative overflow-hidden rounded-xl border p-8 transition-all duration-500 hover:border-white/20"
              data-opai-animate
              data-delay={`${0.3 + i * 0.1}`}
            >
              <div className="bg-[#2067BD]/5 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[60px] transition-all duration-500 group-hover:bg-[#2067BD]/10"></div>
              <div className="relative z-10">
                <span className="text-[#2067BD] mb-5 flex size-13 items-center justify-center rounded-lg bg-white/5">
                  {item.icon}
                </span>
                <h3 className="font-instrument-serif text-xl font-normal text-white/90 mb-3">{item.title}</h3>
                <p className="font-inter-tight text-tagline-2 text-white/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}