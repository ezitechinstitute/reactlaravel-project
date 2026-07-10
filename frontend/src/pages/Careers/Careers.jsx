import SEO from '../../components/SEO/SEO'
import Hero from './Sections/Hero'
import Flow from './Sections/Flow'
import Rank from './Sections/Rank'
import Stats from './Sections/Stats'
import SignUp from './Sections/SignUp'

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join Ezitech and help us build scalable web, mobile, and AI-driven solutions. Explore open jobs and internship opportunities."
        url="/careers"
      />
      <main className="bg-background-5">
        <Hero />
        <Flow />
        <Rank />
        <Stats />
        <SignUp />
      </main>
    </>
  )
}
