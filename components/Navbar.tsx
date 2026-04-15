'use client'

import { useState, useEffect } from 'react'
import { useMode } from './ModeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { accent } = useMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#diff', label: 'Why Us' },
    { href: '#how', label: 'How It Works' },
    { href: '#svc', label: 'Services' },
    { href: '#chain', label: 'Blockchain' },
    { href: '#trac', label: 'Proof' },
    { href: '#about', label: 'About' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] py-4 transition-all duration-400 ${
      scrolled ? 'bg-bg/[0.88] backdrop-blur-[24px] border-b border-white/5' : ''
    }`}>
      <div className="max-w-[1240px] mx-auto px-8 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-medium tracking-[-0.02em]">
          Faceless<span className={accent}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[0.76rem] font-medium tracking-[0.06em] uppercase text-subtle hover:text-lime transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="bg-lime text-bg px-5 py-2 rounded-full font-bold text-[0.73rem] hover:scale-105 hover:shadow-[0_0_25px_rgba(200,255,0,0.15)] transition-all">
              Partner With Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-[2px] bg-cream mb-[5px]" />
          <span className="block w-[22px] h-[2px] bg-cream mb-[5px]" />
          <span className="block w-[22px] h-[2px] bg-cream" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg/[0.97] backdrop-blur-[20px] border-b border-border p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-[0.85rem] text-subtle hover:text-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-lime text-bg px-5 py-2.5 rounded-full font-bold text-[0.8rem] text-center"
          >
            Partner With Us
          </a>
        </div>
      )}
    </nav>
  )
}
