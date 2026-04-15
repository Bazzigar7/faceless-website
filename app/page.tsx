'use client'

import { ModeProvider } from '@/components/ModeContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Marquee, Difference, HowItWorks, Services, Blockchain, Traction, About, Students, CTA, Footer } from '@/components/Sections'

export default function Home() {
  return (
    <ModeProvider>
      <Navbar />
      <Hero />
      <Marquee />
      <Difference />
      <HowItWorks />
      <Services />
      <Blockchain />
      <Traction />
      <About />
      <Students />
      <CTA />
      <Footer />
    </ModeProvider>
  )
}
