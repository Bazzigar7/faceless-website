'use client'

import { ModeProvider } from '@/components/ModeContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Marquee, CategoryFrame, Difference, HowItWorks, PracticeComparison, Services, ProofStrip, Blockchain, Traction, About, CTA, Footer } from '@/components/Sections'

export default function Home() {
  return (
    <ModeProvider>
      <Navbar />
      <Hero />
      <CategoryFrame />
      <Marquee />
      <Difference />
      <HowItWorks />
      <PracticeComparison />
      <Services />
      <ProofStrip />
      <Blockchain />
      <Traction />
      <About />
      <CTA />
      <Footer />
    </ModeProvider>
  )
}
