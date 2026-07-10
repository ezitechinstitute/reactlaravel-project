import SEO from '../../components/SEO'
import Hero from '../../components/career/Hero'
import Flow from '../../components/career/Flow'
import Rank from '../../components/career/Rank'
import Stats from '../../components/career/Stats'
import SignUp from '../../components/career/SignUp'

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
