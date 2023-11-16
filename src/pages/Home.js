import React from 'react'
import Hero from '../components/home/hero/HeroComponent'
import Collab from '../components/home/collab/CollabComponent'
import Support from '../components/home/support/SupportComponent'
import Features from '../components/home/feature/FeatureComponent'
import Benefit from '../components/home/benefit/BenefitComponent'
import Plan from '../components/home/plan/PlanComponent'
import Started from '../components/home/getStarted/StartedComponent'
import Footer from '../components/footer/FooterComponent'

export default function Home() {
  return (
    <>
    <Hero />
    <Collab />
    <Support />
    <Features />
    <Benefit />
    <Plan />
    <Started />
    <Footer />
    </>
  )
}
