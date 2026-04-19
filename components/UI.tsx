'use client'

import { useMode } from './ModeContext'
import Image from 'next/image'

// Section tag (the small mono label with line before it)
export function SectionTag({ children }: { children: string }) {
  const { accent } = useMode()
  return (
    <div className={`font-mono text-[0.63rem] ${accent} uppercase tracking-[0.18em] mb-4 flex items-center gap-2.5`}>
      <span className={`w-[22px] h-px ${accent === 'text-lime' ? 'bg-lime' : 'bg-teal'}`} />
      {children}
    </div>
  )
}

// Section title with em support
export function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(1.85rem,4vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.015em] mb-4 ${className}`}>
      {children}
    </h2>
  )
}

// Accent em tag
export function Em({ children }: { children: React.ReactNode }) {
  const { accent } = useMode()
  return <em className={`italic ${accent}`}>{children}</em>
}

// Card component
export function Card({ icon, title, description, className = '' }: {
  icon: string; title: string; description: string; className?: string
}) {
  return (
    <div className={`p-7 border border-border rounded-[14px] bg-bg transition-all duration-300 hover:border-lime/40 hover:-translate-y-[5px] ${className}`}>
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-display text-[1.12rem] mb-2 font-normal">{title}</h3>
      <p className="text-[0.82rem] text-subtle leading-[1.65]">{description}</p>
    </div>
  )
}

// Image placeholder slot — replace src with your actual image path
export function ImageSlot({ 
  src, 
  alt, 
  label, 
  sublabel, 
  placeholder,
  className = '' 
}: {
  src?: string
  alt: string
  label?: string
  sublabel?: string
  placeholder?: string
  className?: string
}) {
  const { accent } = useMode()
  const hasImage = src && src !== ''

  return (
    <div className={`rounded-[14px] overflow-hidden relative bg-border-2 border border-border-2 flex flex-col items-center justify-center transition-transform duration-400 hover:scale-[1.02] ${className}`}>
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <>
          <div className="text-[2rem] mb-2 opacity-30">📸</div>
          <div className="font-mono text-[0.55rem] text-muted uppercase tracking-[0.07em] text-center px-3 leading-relaxed">
            {placeholder || alt}<br /><br />↑ Replace with image
          </div>
        </>
      )}
      {(label || sublabel) && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg/90 to-transparent">
          {sublabel && (
            <small className={`block font-mono text-[0.5rem] ${accent} uppercase tracking-[0.1em] mb-0.5`}>
              {sublabel}
            </small>
          )}
          {label && <span className="text-[0.75rem] text-cream">{label}</span>}
        </div>
      )}
    </div>
  )
}

// Video slot — replace src with your actual video path or YouTube embed
export function VideoSlot({
  src,
  youtubeId,
  poster,
  label,
  sublabel,
  placeholder,
  className = '',
}: {
  src?: string
  youtubeId?: string
  poster?: string
  label?: string
  sublabel?: string
  placeholder?: string
  className?: string
}) {
  const { accent } = useMode()
  const hasVideo = (src && src !== '') || (youtubeId && youtubeId !== '')

  return (
    <div className={`rounded-[14px] overflow-hidden relative bg-border-2 border border-border-2 flex flex-col items-center justify-center transition-transform duration-400 hover:scale-[1.02] ${className}`}>
      {youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          className="absolute inset-0 w-full h-full border-none"
          allowFullScreen
          loading="lazy"
        />
      ) : src ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <>
          <div className="text-[2rem] mb-2 opacity-30">🎥</div>
          <div className="font-mono text-[0.55rem] text-muted uppercase tracking-[0.07em] text-center px-3 leading-relaxed">
            {placeholder || 'Video placeholder'}<br /><br />↑ Replace with video
          </div>
        </>
      )}
      {(label || sublabel) && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg/90 to-transparent z-10">
          {sublabel && (
            <small className={`block font-mono text-[0.5rem] ${accent} uppercase tracking-[0.1em] mb-0.5`}>
              {sublabel}
            </small>
          )}
          {label && <span className="text-[0.75rem] text-cream">{label}</span>}
        </div>
      )}
    </div>
  )
}

// Mode switcher component
export function ModeSwitcher() {
  const { mode, setMode } = useMode()
  return (
    <div className="inline-flex bg-surface border border-border-2 rounded-full p-1 gap-0.5">
      <button
        onClick={() => setMode('web2')}
        className={`px-5 py-2 rounded-full text-[0.78rem] font-semibold transition-all duration-300 tracking-[0.02em] ${
          mode === 'web2'
            ? 'bg-teal text-bg shadow-[0_2px_12px_rgba(45,212,191,0.15)]'
            : 'text-subtle hover:text-cream'
        }`}
      >
        Web2 Brands
      </button>
      <button
        onClick={() => setMode('web3')}
        className={`px-5 py-2 rounded-full text-[0.78rem] font-semibold transition-all duration-300 tracking-[0.02em] ${
          mode === 'web3'
            ? 'bg-lime text-bg shadow-[0_2px_12px_rgba(200,255,0,0.15)]'
            : 'text-subtle hover:text-cream'
        }`}
      >
        Web3 Brands
      </button>
    </div>
  )
}
