'use client'

import { useState, useEffect, useCallback } from 'react'
import { useMode } from './ModeContext'

interface Slide {
  type: 'image' | 'video' | 'placeholder'
  src?: string
  youtubeId?: string
  placeholder?: string
  icon?: string
}

export default function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)
  const { accent } = useMode()
  const total = slides.length

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <div className="relative rounded-[18px] overflow-hidden border border-border-2 bg-surface aspect-[4/3] animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full flex flex-col items-center justify-center p-8 text-center bg-surface relative">
            {slide.type === 'image' && slide.src ? (
              <img src={slide.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            ) : slide.type === 'video' && slide.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${slide.youtubeId}`}
                className="absolute inset-0 w-full h-full border-none"
                allowFullScreen
              />
            ) : slide.type === 'video' && slide.src ? (
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <>
                <div className="text-[2.8rem] mb-3 opacity-35">{slide.icon || '📸'}</div>
                <div className="font-mono text-[0.6rem] text-muted uppercase tracking-[0.08em] leading-[1.7]">
                  {slide.placeholder}<br /><br />↑ Replace with your image/video
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-bg/70 border border-border-2 text-cream flex items-center justify-center text-sm hover:bg-border transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-bg/70 border border-border-2 text-cream flex items-center justify-center text-sm hover:bg-border transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${
              i === current
                ? `${accent === 'text-lime' ? 'bg-lime' : 'bg-teal'} scale-[1.3]`
                : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
