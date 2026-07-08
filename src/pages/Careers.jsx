import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/career/Hero'
import Work from '../components/career/Work'
import Flow from '../components/career/Flow'
import Rank from '../components/career/Rank'
import SignUp from '../components/career/SignUp'
import Login from '../components/career/login'

export default function Careers() {
  return (
    <>
      <SEO 
        title="Careers" 
        description="Join Ezitech and help us build scalable web, mobile, and AI-driven solutions. Explore open jobs and internship opportunities." 
        url="/careers" 
      />
      <Hero />
      <Work />
      <Flow />
      <Rank />
      <SignUp />
      <Login />
    </>
  )
}
