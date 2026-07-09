import { useState } from 'react'

const tabs = [
  { key: 'job', label: 'Job Seeker' },
  { key: 'intern', label: 'For Internships' },
  { key: 'beginner', label: 'For Beginners' }
]

const jobs = {
  job: [
    { title: 'Senior React Developer', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.' },
    { title: 'Full Stack Engineer (Node.js/Python)', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.' },
    { title: 'AI/ML Engineer', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.' },
    { title: 'DevOps Engineer', type: 'Full-time', location: 'Remote', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.' },
    { title: 'UI/UX Designer', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.' }
  ],
  intern: [
    { title: 'MERN Stack Intern', type: 'Internship', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' },
    { title: 'Python/React Intern', type: 'Internship', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' },
    { title: 'AI & Data Science Intern', type: 'Internship', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' },
    { title: 'Mobile App Dev Intern', type: 'Internship', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' }
  ],
  beginner: [
    { title: 'Junior Frontend Developer', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' },
    { title: 'Junior Backend Developer', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' },
    { title: 'Trainee Software Engineer', type: 'Full-time', location: 'Rawalpindi', description: 'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu.' }
  ]
}

export default function Rank() {
  const [activeTab, setActiveTab] = useState('job')

  return (
    <section id="open-positions" className="bg-background-5 py-20 md:py-30 lg:py-44">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-20">
          <p className="font-inter-tight text-tagline-4 text-white/50" data-opai-animate data-delay="0.1">Open Positions</p>
          <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 font-normal text-white/90" data-opai-animate data-delay="0.2">
            Become part of the <br />dream-team
          </h2>
        </div>
        <div className="mb-10 flex items-center justify-center border-b border-white/10" data-opai-animate data-delay="0.3">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-3 text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.key ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #2067BD, #3275DB)' }}></span>
              )}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-opai-animate data-delay="0.4">
          {jobs[activeTab].map((job, i) => (
            <div key={i} className="bg-background-6 border-stroke-1/11 group rounded-xl border p-6 transition-all duration-300 hover:border-white/20">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-inter-tight text-tagline-4 text-white/40">{job.location}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                  job.type === 'Full-time' ? 'bg-[#2067BD]/10 text-[#2067BD]' : 'bg-emerald-500/10 text-emerald-400'
                }`}>{job.type}</span>
              </div>
              <h3 className="font-instrument-serif text-lg font-normal text-white/90 mb-3">{job.title}</h3>
              <p className="font-inter-tight text-tagline-3 text-white/50 mb-5 line-clamp-2">{job.description}</p>
              <button className="font-inter-tight text-tagline-3 inline-flex items-center gap-1.5 font-medium text-white/70 transition-all duration-300 hover:text-white">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-4">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}