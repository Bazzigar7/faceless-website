'use client'

import { useMode } from './ModeContext'
import { ModeSwitcher } from './UI'
import ImageCarousel from './ImageCarousel'

const heroSlides = [
  { type: 'placeholder' as const, icon: '📸', placeholder: 'Classroom session\nGRD College, Coimbatore' },
  { type: 'placeholder' as const, icon: '🎥', placeholder: 'Campaign session\nBybit user acquisition' },
  { type: 'placeholder' as const, icon: '📊', placeholder: 'Campaign dashboard\nResults screenshot' },
  { type: 'placeholder' as const, icon: '🏆', placeholder: 'Token 2049 / IBW\nEvent photo' },
  // TO ADD YOUR IMAGES: replace type with 'image' and add src: '/images/your-file.jpg'
  // TO ADD VIDEOS: replace type with 'video' and add src: '/videos/your-file.mp4' or youtubeId: 'VIDEO_ID'
]

export default function Hero() {
  const { isWeb3, isWeb2, accent } = useMode()

  return (
    <section className="min-h-screen flex items-center relative pt-28 pb-12 overflow-hidden">
      {/* Glow */}
      <div className={`absolute -top-[15%] -right-[8%] w-[600px] h-[600px] rounded-full animate-glow ${
        isWeb3 ? 'bg-[radial-gradient(circle,rgba(200,255,0,0.06)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle,rgba(45,212,191,0.06)_0%,transparent_70%)]'
      }`} />

      <div className="max-w-[1240px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-[620px]">
            {/* Top row */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <div className={`font-mono text-[0.62rem] ${accent} uppercase tracking-[0.14em] px-3.5 py-1.5 border rounded-full inline-flex items-center gap-1.5 animate-fade-up ${
                isWeb3 ? 'border-lime/15' : 'border-teal/15'
              }`}>
                <span className={`w-[5px] h-[5px] rounded-full animate-pulse-dot ${isWeb3 ? 'bg-lime' : 'bg-teal'}`} />
                India&apos;s First · Campus Creator Network
              </div>
              <ModeSwitcher />
            </div>

            {/* Web3 Hero */}
            {isWeb3 && (
              <>
                <h1 className="font-display text-[clamp(2.4rem,5.2vw,3.8rem)] leading-[1.1] font-normal tracking-[-0.02em] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  Web3 has a mass adoption problem.<br />
                  <em className="italic text-lime">We solve it.</em>
                </h1>
                <p className="text-[clamp(0.9rem,1.4vw,1.02rem)] leading-[1.75] text-subtle max-w-[540px] mb-3 animate-fade-up" style={{ animationDelay: '0.15s' }}>
                  India&apos;s first campus creator and distribution network — powered by establishing blockchain clubs in colleges. We educate students, onboard them to your product, and turn them into content creators who market Web3 to everyday audiences. From testing games to trading on exchanges — we do it all.
                </p>
                <div className="font-mono text-[0.66rem] text-lime uppercase tracking-[0.1em] mb-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  Normies marketing blockchain to normies.
                </div>
              </>
            )}

            {/* Web2 Hero */}
            {isWeb2 && (
              <>
                <h1 className="font-display text-[clamp(2.4rem,5.2vw,3.8rem)] leading-[1.1] font-normal tracking-[-0.02em] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  Why rent one influencer when you can{' '}
                  <em className="italic text-teal">activate an entire community?</em>
                </h1>
                <p className="text-[clamp(0.9rem,1.4vw,1.02rem)] leading-[1.75] text-subtle max-w-[540px] mb-3 animate-fade-up" style={{ animationDelay: '0.15s' }}>
                  India&apos;s first campus student creator network. We put your product in the hands of college students who experience it, create authentic UGC content from their personal accounts, and share it with their audiences. Not agencies. Not scripts. Genuine voices at scale.
                </p>
                <div className="font-mono text-[0.66rem] text-teal uppercase tracking-[0.1em] mb-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  Authentic UGC from the people who actually use your product.
                </div>
              </>
            )}

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <a href="#contact" className={`inline-flex items-center gap-1.5 ${isWeb3 ? 'bg-lime' : 'bg-teal'} text-bg px-7 py-3.5 rounded-full font-bold text-[0.88rem] hover:-translate-y-0.5 hover:shadow-lg transition-all`}>
                Launch a Campaign →
              </a>
              <a href="#how" className="inline-flex items-center gap-1.5 bg-transparent text-cream px-7 py-3.5 rounded-full font-medium text-[0.88rem] border border-border-2 hover:border-lime/40 hover:bg-lime/5 transition-all">
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 pt-8 border-t border-border animate-fade-up flex-wrap" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className={`font-display text-[2rem] ${accent} leading-none mb-1`}>1,000+</div>
                <div className="text-[0.7rem] text-subtle uppercase tracking-[0.08em]">Students Onboarded</div>
              </div>
              <div>
                <div className={`font-display text-[2rem] ${accent} leading-none mb-1`}>6</div>
                <div className="text-[0.7rem] text-subtle uppercase tracking-[0.08em]">Brand Partners</div>
              </div>
              <div>
                <div className={`font-display text-[2rem] ${accent} leading-none mb-1`}>1</div>
                <div className="text-[0.7rem] text-subtle uppercase tracking-[0.08em]">
                  {isWeb3 ? 'Blockchain Club Est.' : 'Campus Creator Hub'}
                </div>
              </div>
              <div>
                <div className={`font-display text-[2rem] ${accent} leading-none mb-1`}>25+</div>
                <div className="text-[0.7rem] text-subtle uppercase tracking-[0.08em]">Colleges in Pipeline</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <ImageCarousel slides={heroSlides} />
        </div>
      </div>
    </section>
  )
}
