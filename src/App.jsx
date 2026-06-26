import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// FIX: Home eager import karo (lazy nahi)
// Kyunki first visit pe Home ka DOM chahiye animations ke liye
// Baki pages lazy reh sakte hain — unhe first visit pe koi issue nahi
import Home from './pages/Home'

// Baki pages lazy (performance optimization)
const About            = lazy(() => import('./pages/About'))
const Services         = lazy(() => import('./pages/Services'))
const ServiceDetails   = lazy(() => import('./pages/ServiceDetails'))
const Pricing          = lazy(() => import('./pages/Pricing'))
const Team             = lazy(() => import('./pages/Team'))
const TeamDetails      = lazy(() => import('./pages/TeamDetails'))
const Blog             = lazy(() => import('./pages/Blog'))
const BlogDetails      = lazy(() => import('./pages/BlogDetails'))
const CaseStudy        = lazy(() => import('./pages/CaseStudy'))
const CaseStudyDetails = lazy(() => import('./pages/CaseStudyDetails'))
const Contact          = lazy(() => import('./pages/Contact'))
const Login            = lazy(() => import('./pages/Login'))
const Signup           = lazy(() => import('./pages/Signup'))
const NotFound         = lazy(() => import('./pages/NotFound'))

function Loader() {
  return (
    <div style={{ minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:'36px', height:'36px', border:'2px solid rgba(141,89,255,0.2)', borderTopColor:'#8d59ff', borderRadius:'50%', animation:'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Home eager hai — Suspense fallback nahi dikhega */}
            <Route path="/"                   element={<Home />} />
            <Route path="/about"              element={<About />} />
            <Route path="/services"           element={<Services />} />
            <Route path="/service-details"    element={<ServiceDetails />} />
            <Route path="/pricing"            element={<Pricing />} />
            <Route path="/team"               element={<Team />} />
            <Route path="/team-details"       element={<TeamDetails />} />
            <Route path="/blog"               element={<Blog />} />
            <Route path="/blog-details"       element={<BlogDetails />} />
            <Route path="/case-study"         element={<CaseStudy />} />
            <Route path="/case-study-details" element={<CaseStudyDetails />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="/login"              element={<Login />} />
            <Route path="/signup"             element={<Signup />} />
            <Route path="*"                   element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}