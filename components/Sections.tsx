'use client'

import { useMode } from './ModeContext'
import { SectionTag, SectionTitle, Em, Card, ImageSlot, VideoSlot } from './UI'
import { useScrollReveal } from './useScrollReveal'

/* ============================================
   MARQUEE
   ============================================ */
export function Marquee() {
  const items = ['UGC Campaigns','Micro-Influencer','User Acquisition','Campus Activations','Product Testing','Clipping Campaigns','D2C Products','Local Businesses','Web3 Protocols']
  return (
    <section className="py-5 border-y border-border overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-[0.95rem] text-muted whitespace-nowrap flex items-center gap-3">
            {item}<span className="text-[0.3rem] text-lime">◆</span>
          </span>
        ))}
      </div>
    </section>
  )
}

/* ============================================
   CATEGORY FRAME (Web2 only)
   ============================================ */
export function CategoryFrame() {
  const { isWeb2 } = useMode()
  const ref = useScrollReveal()
  if (!isWeb2) return null

  return (
    <section className="py-24" id="category">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>Our approach</SectionTag>
        <SectionTitle>
          We&apos;re not a UGC marketplace.<br />
          <Em>We&apos;re a community that also makes UGC.</Em>
        </SectionTitle>
        <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem] mb-10">
          UGC marketplaces solved sourcing — they connect brands with thousands of creators online, and they do it well. We do a different job. We build creator communities on college campuses across India, and the content comes out of that naturally.
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="reveal p-7 border border-border rounded-[14px] bg-bg hover:border-teal/40 hover:-translate-y-[5px] transition-all duration-300">
            <div className="font-mono text-[0.55rem] text-muted uppercase tracking-[0.07em] mb-3">The category today</div>
            <h3 className="font-display text-[1.12rem] mb-2 font-normal">UGC Marketplaces</h3>
            <p className="text-[0.82rem] text-subtle leading-[1.65] mb-3">Source a creator. Get a file. Scale content volume across a global pool.</p>
            <p className="text-[0.82rem] text-subtle leading-[1.65]"><span className="text-cream">Great for:</span> high-volume testimonial videos from strangers, product shots at scale, fast remote UGC.</p>
          </div>
          <div className="reveal p-7 border border-teal/15 rounded-[14px] bg-bg hover:border-teal/40 hover:-translate-y-[5px] transition-all duration-300">
            <div className="font-mono text-[0.55rem] text-teal uppercase tracking-[0.07em] mb-3">What we add</div>
            <h3 className="font-display text-[1.12rem] mb-2 font-normal">Faceless</h3>
            <p className="text-[0.82rem] text-subtle leading-[1.65] mb-3">Build a community. Put your product in their hands — together, in person. Get content, live activations, and community amplification as one campaign.</p>
            <p className="text-[0.82rem] text-subtle leading-[1.65]"><span className="text-cream">Great for:</span> product launches, local market entry, live experiences, and campaigns where the story matters as much as the clip.</p>
          </div>
        </div>
        <p className="text-subtle text-[0.88rem] leading-[1.7] mt-8 max-w-[720px]">
          Both matter. If what you need is fifty testimonial videos, use a marketplace. If what you need is a launch — real people, real rooms, real reach — that&apos;s us.
        </p>
      </div>
    </section>
  )
}

/* ============================================
   WHAT MAKES US DIFFERENT
   ============================================ */
export function Difference() {
  const { isWeb3 } = useMode()
  const ref = useScrollReveal()

  const web3Cards = [
    { icon: '🎓', title: 'Education First, Not Airdrop Farms', desc: "Students attend face-to-face sessions, learn what wallets and P2P mean, then use your product with deep understanding. These aren't airdrop farmers — they're your next genuine users." },
    { icon: '📱', title: 'Content Where The Masses Are', desc: 'Your product gets featured on Instagram and YouTube — reels and shorts from personal accounts, reaching friends, families, and audiences far outside the crypto bubble.' },
    { icon: '👥', title: 'Normies Marketing to Normies', desc: "A college student explaining your product to their friends is more powerful than any KOL thread. Authentic experiences shared by everyday people to everyday audiences." },
    { icon: '🤝', title: 'Community-Powered Amplification', desc: 'Every piece of content gets organic support from our student community — genuine likes, comments, shares from verified users. Mutual support that drives visibility naturally.' },
    { icon: '🔗', title: 'Everything Verified On-Chain', desc: "Every task, every content piece, every payout gets a permanent receipt on Solana. AI verifies completion. No more trusting screenshots — blockchain-stamped proof." },
    { icon: '🏫', title: 'Campus Clubs as Distribution Moat', desc: "We don't just run campaigns — we establish permanent blockchain clubs in colleges. A growing network of educated creators that no one else can replicate." },
  ]

  const web2Cards = [
    { icon: '', title: 'A community, not a roster', desc: 'Every creator in our network is someone we know. Students in the same campus clubs, showing up every week, supporting each other. Your campaign lands in a room — not in an inbox.' },
    { icon: '', title: 'Content comes from real experience', desc: "Our creators use your product together before any camera turns on. They taste the coffee, play the game, try the app — and then they shoot. The content feels different because the experience was real." },
    { icon: '', title: 'Volume no single influencer can match', desc: "Twenty creators, twenty takes, twenty audiences. One campaign. That's the same spend as one mid-tier influencer, with a hundred times the surface area." },
    { icon: '', title: 'Live activations, not just content', desc: "We can bring your product into a room — a college event, a local launch, a product demo — shoot it, and amplify it online, all from one campaign. That's not content delivery. That's field marketing with a camera." },
    { icon: '', title: 'Hyper-local reach', desc: "Our students ARE your local audience. Their friends, their classmates, their followers — all in your city. A Coimbatore cafe gets reels from Coimbatore students. Their followers are your next customers." },
    { icon: '', title: 'Every result verified on-chain', desc: 'Campaign data, creator activity, engagement — all recorded on Solana. Not a dashboard screenshot. Permanent, auditable proof that the work happened.' },
  ]

  const cards = isWeb3 ? web3Cards : web2Cards

  return (
    <section className="py-24" id="diff">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>What Makes Us Different</SectionTag>
        {isWeb3 ? (
          <SectionTitle>Billions spent on crypto marketing. The masses still don&apos;t get it.<br /><Em>We fix that — one college at a time.</Em></SectionTitle>
        ) : (
          <>
            <SectionTitle>One influencer gives you one post.<br /><Em>We give you a hundred genuine voices.</Em></SectionTitle>
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem] mt-4">Content is the output. Community is how we make it. Most UGC happens remotely — a product gets shipped, a creator films alone, the file gets uploaded. It works. But it&apos;s missing the part that makes content feel real: the moment people actually experience your product together. That&apos;s the part we build around.</p>
          </>
        )}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {cards.map((c, i) => (
            <Card key={i} icon={c.icon} title={c.title} description={c.desc} className="reveal" />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   HOW IT WORKS + GALLERY
   ============================================ */
export function HowItWorks() {
  const { isWeb3, accent } = useMode()
  const ref = useScrollReveal()
  const galleryRef = useScrollReveal()

  const web3Steps = [
    { title: 'Educate in Campus Clubs', desc: 'We establish blockchain clubs in colleges. Face-to-face sessions teaching students what your product does. Deep understanding, not just a click.' },
    { title: 'Students Use Your Product', desc: 'Students create wallets, do their first trades, test your app. Actual educated users generating on-chain activity and genuine feedback.' },
    { title: 'They Create Content', desc: 'Students post reels and shorts from personal Instagram, YouTube, and X accounts. Authentic stories from people who actually experienced your product.' },
    { title: 'Community Supports', desc: 'Our student community organically engages on every piece of content. Genuine interactions from verified users that drive organic reach.' },
    { title: 'The Masses Discover Web3', desc: 'Hundreds of reels about your product, made by everyday people, reaching everyday audiences on the platforms they already use.' },
  ]

  const web2Steps = [
    { title: 'Brief Us On Your Product', desc: 'Tell us what you want marketed — your cafe, your D2C product, your app. We design a campaign with the right creators and budget.' },
    { title: 'Students Experience It', desc: 'Students visit your cafe, try your product, test your app. They experience it firsthand — forming genuine opinions and authentic stories.' },
    { title: 'They Create UGC Reels', desc: 'Student creators shoot and post reels from their personal Instagram and YouTube. Honest, relatable content that resonates with their audiences.' },
    { title: 'Community Amplifies', desc: 'Our student community supports every piece of content with genuine engagement — organic comments, organic shares from verified people.' },
    { title: 'Your Brand Reaches New Audiences', desc: 'Multiple authentic reels about your brand, reaching thousands on the platforms they use every day. Genuine word-of-mouth at scale.' },
  ]

  const steps = isWeb3 ? web3Steps : web2Steps

  const gallery = [
    { sublabel: 'Daily Sessions', label: 'Face-to-face education at India\'s first campus blockchain club', placeholder: 'Classroom session\nGRD College' },
    { sublabel: 'Campaign: Kult Games', label: 'First client — landed with a video, not a pitch deck', placeholder: 'Kult Games campaign\nVideo / Thumbnail', isVideo: true },
    { sublabel: 'Campaign: Bybit', label: '100 students onboarded, verified trading volume generated', placeholder: 'Bybit dashboard\nScreenshot' },
    { sublabel: 'Hands-On', label: 'Students doing their first P2P trades during sessions', placeholder: 'Workshop photo\nStudents learning' },
    { sublabel: 'Events', label: 'Token 2049 Dubai, Singapore & India Blockchain Week', placeholder: 'Token 2049 / IBW\nEvent photos' },
    { sublabel: 'Campaign: Pudgy', label: 'Students onboarded through hands-on experience', placeholder: 'Pudgy Penguins\nCampaign' },
  ]

  return (
    <section className="py-24 bg-surface" id="how">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>How It Works</SectionTag>
        {isWeb3 ? (
          <>
            <SectionTitle>Crypto talks to crypto. That&apos;s the problem.<br /><Em>We talk to everyone else. That&apos;s the solution.</Em></SectionTitle>
          </>
        ) : (
          <>
            <SectionTitle>The best marketing comes from the people who<br /><Em>actually experience your product.</Em></SectionTitle>
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem]">We put it in their hands — they put it on their feeds.</p>
          </>
        )}

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {steps.map((s, i) => (
            <div key={i} className="reveal p-5 bg-bg border border-border rounded-[14px] hover:-translate-y-[5px] hover:border-lime/40 transition-all duration-300">
              <div className={`font-mono text-[0.58rem] ${accent} tracking-[0.15em] uppercase mb-4 pb-3 border-b border-border`}>
                Step {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="font-display text-[0.98rem] mb-1.5 font-normal">{s.title}</h4>
              <p className="text-[0.78rem] text-subtle leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-14">
          <SectionTag>See It In Action</SectionTag>
          {isWeb3 ? (
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem]">You can&apos;t onboard the masses from Twitter. We do it face-to-face, in classrooms, across India.</p>
          ) : (
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem]">A Coimbatore cafe getting reels from Coimbatore students — that&apos;s hyper-local reach no ad platform can match.</p>
          )}
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {gallery.map((g, i) => (
              g.isVideo ? (
                <VideoSlot
                  key={i}
                  // src="/videos/your-video.mp4"  ← ADD YOUR VIDEO HERE
                  // youtubeId="VIDEO_ID"           ← OR YOUTUBE ID
                  placeholder={g.placeholder}
                  label={g.label}
                  sublabel={g.sublabel}
                  className="reveal aspect-[16/10]"
                />
              ) : (
                <ImageSlot
                  key={i}
                  // src="/images/your-image.jpg"   ← ADD YOUR IMAGE HERE
                  alt={g.placeholder || ''}
                  placeholder={g.placeholder}
                  label={g.label}
                  sublabel={g.sublabel}
                  className="reveal aspect-[16/10]"
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   PRACTICE COMPARISON (Web2 only)
   ============================================ */
export function PracticeComparison() {
  const { isWeb2 } = useMode()
  const ref = useScrollReveal()
  if (!isWeb2) return null

  const rows = [
    { label: 'The creators', marketplace: 'Strangers on a roster', faceless: 'A community we meet weekly' },
    { label: 'How content gets made', marketplace: 'Solo, at home', faceless: 'Together, in rooms' },
    { label: 'Product experience', marketplace: 'Shipped remote', faceless: 'Shared in person' },
    { label: 'Live activations', marketplace: '—', faceless: 'Events, launches, field campaigns' },
    { label: 'Amplification', marketplace: 'Individual posts', faceless: 'Coordinated community support' },
    { label: 'Results verification', marketplace: 'Platform dashboard', faceless: 'On-chain, permanent' },
    { label: 'Best for', marketplace: 'High-volume remote UGC', faceless: 'Launches, market entry, live campaigns' },
  ]

  return (
    <section className="py-24 bg-surface" id="compare">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>Side by side</SectionTag>
        <SectionTitle>What that looks like in practice</SectionTitle>
        <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem] mb-10">
          Nothing against the platforms brands already use — we work alongside them. Here&apos;s how our model compares on the things that matter for campaigns.
        </p>
        <div ref={ref} className="reveal overflow-x-auto">
          <table className="w-full border-collapse text-[0.85rem]">
            <thead>
              <tr>
                <th className="text-left p-4 border border-border text-subtle font-mono text-[0.6rem] uppercase tracking-[0.1em] w-[28%]"></th>
                <th className="text-left p-4 border border-border text-subtle font-mono text-[0.6rem] uppercase tracking-[0.1em]">UGC Marketplaces</th>
                <th className="text-left p-4 border border-teal/15 bg-teal/5 text-teal font-mono text-[0.6rem] uppercase tracking-[0.1em]">Faceless</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-bg/50 transition-colors">
                  <td className="p-4 border border-border text-cream font-medium text-[0.82rem]">{row.label}</td>
                  <td className="p-4 border border-border text-subtle text-[0.82rem]">{row.marketplace}</td>
                  <td className="p-4 border border-teal/15 bg-teal/5 text-subtle text-[0.82rem]">{row.faceless}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-subtle text-[0.88rem] leading-[1.7] mt-8 max-w-[720px]">
          Different tools for different jobs. If remote UGC is all you need, use a marketplace. If you want content, presence, and reach from one campaign — that&apos;s why we exist.
        </p>
      </div>
    </section>
  )
}

/* ============================================
   SERVICES
   ============================================ */
export function Services() {
  const { isWeb3, isWeb2 } = useMode()
  const ref = useScrollReveal()

  return (
    <section className="py-24" id="svc">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>What We Offer</SectionTag>
        {isWeb3 ? (
          <SectionTitle>Mass adoption starts with education.<br /><Em>We educate them, onboard them, and turn them into your marketers.</Em></SectionTitle>
        ) : (
          <>
            <SectionTitle>Marketing, market research, and live activation in one campaign.<br /><Em>Your product gets experienced, documented, and distributed — by the people who actually use it.</Em></SectionTitle>
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem]">You don&apos;t just get content. You get honest feedback, user insights, a content library you can repurpose across your own channels, and a community that keeps talking about your brand after the campaign ends.</p>
          </>
        )}

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="reveal p-8 border border-border rounded-2xl bg-bg hover:border-lime/40 hover:-translate-y-1 transition-all">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-lime/10 text-lime border border-lime/15">Live</span>
            <h3 className="font-display text-[1.25rem] mb-2 font-normal">User Acquisition Campaigns</h3>
            {isWeb3 ? (
              <p className="text-subtle leading-[1.7] text-[0.86rem] mb-4">Get verified, educated users who actually understand your product. Students create wallets, complete KYC, make their first trades. Genuine users generating on-chain activity.</p>
            ) : (
              <p className="text-subtle leading-[1.7] text-[0.86rem] mb-4">Get genuine users who actually try your product. Students sign up, explore your app, test features. Honest feedback and authentic reviews from people who used it.</p>
            )}
            <div className="flex flex-wrap gap-1.5">
              {['Verified signups', 'Product testing', 'User feedback', 'Genuine users'].map(t => (
                <span key={t} className="font-mono text-[0.55rem] px-2 py-1 border border-border-2 rounded-full text-subtle uppercase tracking-[0.04em]">{t}</span>
              ))}
            </div>
          </div>

          {isWeb2 && (
            <div className="reveal p-8 border border-border rounded-2xl bg-bg hover:border-teal/40 hover:-translate-y-1 transition-all">
              <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-lime/10 text-lime border border-lime/15">Live</span>
              <h3 className="font-display text-[1.25rem] mb-2 font-normal">Live Activations &amp; Events</h3>
              <p className="text-subtle leading-[1.7] text-[0.86rem] mb-4">Bring your product into a college, an event, or a local launch. We run the activation on the ground — students try it, react to it, create content with it — and amplify it online the same week. One campaign, three outputs: live experience, UGC content, and community reach.</p>
              <div className="flex flex-wrap gap-1.5">
                {['Live events', 'Product demos', 'UGC content', 'Community reach'].map(t => (
                  <span key={t} className="font-mono text-[0.55rem] px-2 py-1 border border-border-2 rounded-full text-subtle uppercase tracking-[0.04em]">{t}</span>
                ))}
              </div>
            </div>
          )}

          <div className="reveal p-8 border border-border rounded-2xl bg-bg hover:border-lime/40 hover:-translate-y-1 transition-all">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-orange/10 text-orange border border-orange/15">Launching</span>
            <h3 className="font-display text-[1.25rem] mb-2 font-normal">UGC & Micro-Influencer Campaigns</h3>
            <p className="text-subtle leading-[1.7] text-[0.86rem] mb-4">Multiple student creators shoot and post reels about your brand from their personal Instagram and YouTube. Authentic content created by people who actually experienced your product, amplified by our community.</p>
            <div className="flex flex-wrap gap-1.5">
              {['Instagram Reels', 'YouTube Shorts', 'Authentic UGC', 'Community amplification'].map(t => (
                <span key={t} className="font-mono text-[0.55rem] px-2 py-1 border border-border-2 rounded-full text-subtle uppercase tracking-[0.04em]">{t}</span>
              ))}
            </div>
          </div>

          <div className="reveal p-8 border border-border rounded-2xl bg-bg hover:border-lime/40 hover:-translate-y-1 transition-all">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-orange/10 text-orange border border-orange/15">Launching</span>
            <h3 className="font-display text-[1.25rem] mb-2 font-normal">Clipping Campaigns</h3>
            <p className="text-subtle leading-[1.7] text-[0.86rem] mb-4">One brand livestream or podcast — our student network clips, edits, and distributes it across hundreds of social accounts. Your long-form content turned into viral short-form at massive scale.</p>
            <div className="flex flex-wrap gap-1.5">
              {['Livestream clips', 'Podcast highlights', 'Mass distribution'].map(t => (
                <span key={t} className="font-mono text-[0.55rem] px-2 py-1 border border-border-2 rounded-full text-subtle uppercase tracking-[0.04em]">{t}</span>
              ))}
            </div>
          </div>

          <div className="reveal p-8 border border-border rounded-2xl bg-bg hover:border-lime/40 hover:-translate-y-1 transition-all">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-[rgba(74,144,217,0.1)] text-[#6ab0f3] border border-[rgba(74,144,217,0.15)]">Coming Soon</span>
            <h3 className="font-display text-[1.25rem] mb-2 font-normal">Product Testing & Feedback</h3>
            <p className="text-subtle leading-[1.7] text-[0.86rem] mb-4">Beta test your app, game, or product with college students. Genuine feedback, bug reports, and user experience insights from actual users — not paid testers reading scripts.</p>
            <div className="flex flex-wrap gap-1.5">
              {['Beta testing', 'Game testing', 'UX feedback', 'Bug reports'].map(t => (
                <span key={t} className="font-mono text-[0.55rem] px-2 py-1 border border-border-2 rounded-full text-subtle uppercase tracking-[0.04em]">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Web2 local example */}
        {isWeb2 && (
          <div className="mt-10">
            <SectionTag>Local Business Example</SectionTag>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="p-7 border border-border rounded-2xl bg-surface">
                <h4 className="font-display text-[1.15rem] mb-4 font-normal">How a local cafe campaign works</h4>
                <p className="text-teal text-[0.82rem] italic mb-4">Their followers are your next customers.</p>
                {['Cafe deposits campaign reward pool', 'Student creators visit, experience the cafe, shoot reels', 'Post reels on personal Instagram accounts', 'Community supports with organic engagement', 'AI verifies everything, payouts auto-release in INR', 'Every interaction recorded permanently — verifiable proof'].map((step, i) => (
                  <div key={i} className="flex gap-2.5 items-start mb-2.5">
                    <span className="font-mono text-[0.55rem] text-bg bg-teal min-w-[22px] h-[22px] flex items-center justify-center rounded-full shrink-0">{i + 1}</span>
                    <span className="text-[0.82rem] text-subtle">{step}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-subtle leading-[1.75] text-[0.92rem] mb-4">Our students ARE your local audience. Their friends, their classmates, their followers — all in your city. Word of mouth in exactly the geography you need.</p>
                <p className="text-subtle leading-[1.75] text-[0.92rem] mb-4">Payouts happen in INR via Razorpay. You don&apos;t need to understand blockchain. But every campaign interaction gets a permanent digital receipt — transparent, auditable, forever.</p>
                <p className="text-teal font-display text-[1.05rem] italic">You experience blockchain through your own campaign data — not through a lecture.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ============================================
   PROOF STRIP (Web2 only)
   ============================================ */
export function ProofStrip() {
  const { isWeb2 } = useMode()
  const ref = useScrollReveal()
  if (!isWeb2) return null

  return (
    <section className="py-24" id="proof">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>Campaigns in motion</SectionTag>
        <SectionTitle>What marketplaces can&apos;t do</SectionTitle>
        <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem] mb-10">
          Three examples of what happens when your campaign lives in a real community — not a content platform.
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="reveal p-7 border border-border rounded-[14px] bg-bg hover:border-teal/40 hover:-translate-y-[5px] transition-all duration-300">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-lime/10 text-lime border border-lime/15">Live</span>
            <h3 className="font-display text-[1.12rem] mb-3 font-normal">Bybit &times; GRD College</h3>
            <p className="text-[0.82rem] text-subtle leading-[1.65] mb-3">A crypto exchange wanted to onboard first-time traders. We ran a P2P trading school inside GRD College — students learned what P2P is, what trading is, and completed their first trades on screen, together, in one classroom. Next phase: the same students creating reels about their experience, amplified by their peers.</p>
            <p className="text-[0.78rem] text-subtle leading-[1.6]">
              <span className="text-cream">What a marketplace delivers:</span> a creator reviewing the app from home.<br />
              <span className="text-cream">What we&apos;re delivering:</span> a cohort of real first-time users, filmed becoming customers.
            </p>
          </div>
          <div className="reveal p-7 border border-border rounded-[14px] bg-bg hover:border-teal/40 hover:-translate-y-[5px] transition-all duration-300">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-orange/10 text-orange border border-orange/15">Coming up</span>
            <h3 className="font-display text-[1.12rem] mb-3 font-normal">Local cafe launches</h3>
            <p className="text-[0.82rem] text-subtle leading-[1.65]">A Coimbatore cafe opens. We bring twenty students on launch day — they taste the menu, shoot reels inside the cafe, and their classmates amplify every post. The cafe gets a launch activation, a content library, and local reach from people whose followers are already nearby.</p>
          </div>
          <div className="reveal p-7 border border-border rounded-[14px] bg-bg hover:border-teal/40 hover:-translate-y-[5px] transition-all duration-300">
            <span className="inline-flex px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.07em] rounded-full mb-4 bg-[rgba(74,144,217,0.1)] text-[#6ab0f3] border border-[rgba(74,144,217,0.15)]">Available now</span>
            <h3 className="font-display text-[1.12rem] mb-3 font-normal">Game playtesting with content</h3>
            <p className="text-[0.82rem] text-subtle leading-[1.65]">A game studio runs a live playtest with thirty students in one room. They get feedback, bug reports, and launch content in the same session — UGC from real players who genuinely played the build, not creators reviewing a remote download.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   BLOCKCHAIN
   ============================================ */
export function Blockchain() {
  const { isWeb3 } = useMode()
  const ref = useScrollReveal()

  const cards = [
    { icon: '🧾', title: 'Permanent Receipts', desc: 'Every task, every reel, every payment gets a unique digital receipt on Solana. A digital notary stamp — permanent and unchangeable.' },
    { icon: '🔒', title: 'Money is Pre-Locked', desc: 'Your budget goes into escrow on blockchain. Students know the money is set aside. When tasks are verified, payment releases automatically.' },
    { icon: '🤖', title: 'AI Verifies Everything', desc: "Our AI agent checks every task — did they post? Is the engagement genuine? Verification results stamped on blockchain as proof." },
    { icon: '📊', title: 'Campaign Results = Proof', desc: "Your results aren't a PDF — they're on blockchain. Participation, reach, completions. Anyone can verify. Your report is a proof document." },
    { icon: '⏱️', title: 'Engagement is Audited', desc: 'We check engagement at multiple checkpoints over time. Each check is timestamped on blockchain — permanent proof that engagement is genuine.' },
    { icon: '🪪', title: 'Creator Reputation', desc: 'Every student builds a verified digital resume on blockchain. Campaigns completed, content created — all recorded. Pick creators based on proven track records.' },
  ]

  return (
    <section className="py-24 bg-surface" id="chain">
      <div className="max-w-[1240px] mx-auto px-8">
        {isWeb3 ? (
          <>
            <SectionTag>Built on Solana</SectionTag>
            <SectionTitle>We bring people to blockchain —<br /><Em>here&apos;s how we do it.</Em></SectionTitle>
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem]">Our campaigns don&apos;t just market your product — they run on blockchain. Every interaction is verified, recorded, and permanent on Solana. When students use your product, their data lives on-chain. When Web2 brands run campaigns with us, their data enters the blockchain too. That&apos;s how mass adoption actually works — usage first, not education first.</p>
          </>
        ) : (
          <>
            <SectionTag>Powered by Blockchain</SectionTag>
            <SectionTitle>You don&apos;t need to understand blockchain.<br /><Em>You just get the benefits.</Em></SectionTitle>
            <p className="text-subtle leading-[1.75] max-w-[620px] text-[0.93rem]">Every campaign runs on blockchain in the background. Your campaign data gets stored on Solana — permanent proof, locked payments, verified results. You experience what blockchain actually is through your own data. No lectures needed.</p>
          </>
        )}

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {cards.map((c, i) => (
            <Card key={i} icon={c.icon} title={c.title} description={c.desc} className="reveal" />
          ))}
        </div>

        <div className={`mt-10 p-8 border rounded-2xl text-center ${isWeb3 ? 'border-lime/15 bg-lime/5' : 'border-teal/15 bg-teal/5'}`}>
          <h3 className="font-display text-[1.35rem] mb-3 font-normal">&ldquo;Do I need to know blockchain to use Faceless?&rdquo;</h3>
          <p className="text-subtle leading-[1.7] max-w-[600px] mx-auto text-[0.9rem]">No. You deposit funds, set up a campaign, and get verified results. The blockchain runs silently in the background — like GPS runs when you use Google Maps. You don&apos;t need to understand the technology. You just get the benefits.</p>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   TRACTION
   ============================================ */
export function Traction() {
  const { accent } = useMode()
  const ref = useScrollReveal()

  const stats = [
    { num: '1', label: 'College Club\nEstablished' },
    { num: '1,000+', label: 'Students\nOnboarded' },
    { num: '$5,000+', label: 'Rewards\nDistributed' },
    { num: '6', label: 'Brand\nPartners' },
    { num: '25+', label: 'Colleges in\nPipeline' },
  ]

  const partners = ['Bybit', 'Mudrex', 'Backpack', 'CoinDCX', 'Pudgy Penguins', 'Kult Games']

  return (
    <section className="py-24" id="trac">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>Traction</SectionTag>
        <SectionTitle>We&apos;re just getting started.<br /><Em>Here&apos;s where we are.</Em></SectionTitle>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {stats.map((s, i) => (
            <div key={i} className="reveal text-center py-7 px-4 border border-border rounded-[14px] hover:border-lime/40 transition-colors">
              <div className={`font-display text-[clamp(1.5rem,2.5vw,2.2rem)] ${accent} leading-none mb-1`}>{s.num}</div>
              <div className="text-[0.7rem] text-subtle leading-[1.4] whitespace-pre-line">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-subtle mt-6 text-[0.85rem]">
          Currently operating in <strong className="text-cream">Coimbatore, India</strong>. Working closely with one college and scaling from here.
        </p>
        <p className="text-center text-subtle mt-3 text-[0.85rem]">
          Next 18 months: <strong className="text-cream">50 campuses, 75,000 students</strong>, India&apos;s largest campus creator network — built on verified identities, real experiences, and permanent on-chain proof.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {partners.map(p => (
            <div key={p} className="font-mono text-[0.7rem] text-muted px-4 py-2 border border-border rounded-lg hover:border-lime/40 hover:text-cream transition-all tracking-[0.04em]">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   OUR MISSION
   ============================================ */
export function About() {
  const { accent } = useMode()

  return (
    <section className="py-24 bg-surface" id="about">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionTag>Our Mission</SectionTag>
        <SectionTitle>A strong community can<br /><Em>achieve anything.</Em></SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
          <div>
            <div className={`font-display text-[1.4rem] italic ${accent} my-6 pl-6 border-l-[3px] ${accent === 'text-lime' ? 'border-lime' : 'border-teal'} leading-[1.35]`}>
              &ldquo;If I make my community win, I will definitely win too.&rdquo;
            </div>
            <p className="text-[0.95rem] leading-[1.8] text-subtle mb-4">That&apos;s the core of Faceless. We&apos;re a community that grows together — students learning together, earning together, supporting each other&apos;s content, and building something bigger than any individual. Every campaign makes our creators better. Every new member makes the community stronger.</p>
            <p className="text-[0.95rem] leading-[1.8] text-subtle mb-4">We started by going into colleges and meeting students face-to-face. We established India&apos;s first permanent blockchain club in Coimbatore. We attended conferences for two years with zero clients — until one video of students doing actual tasks landed our first brand partner. Not a pitch deck. A video.</p>
            <p className="text-[0.95rem] leading-[1.8] text-subtle mb-4">Today we&apos;re expanding from Web3 into Web2. The same model that onboards students to crypto exchanges works for a local cafe. The same network that creates blockchain content can create UGC for any brand. And everything — every task, every reel, every payment — gets a permanent stamp on Solana.</p>
            <p className={`${accent} font-display text-[1.05rem] italic`}>We&apos;re not building just another marketing platform. We&apos;re building the next generation of creators from campuses across India — and everything we do is verified, transparent, and on-chain.</p>
          </div>
          <div>
            <div className="p-8 border border-border rounded-2xl bg-bg">
              <h3 className="font-display text-[1.2rem] mb-4 font-normal">Why &ldquo;Faceless&rdquo;?</h3>
              <p className="text-[0.95rem] leading-[1.8] text-subtle">The irony is the point. We&apos;re called Faceless — but we&apos;re the most face-to-face community in the space. Verified students, physical classrooms, genuine interactions. While the rest of the industry operates from behind screens, we chose to show up in person. Every day. That&apos;s our edge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CTA
   ============================================ */
export function CTA() {
  const { isWeb3, isWeb2 } = useMode()

  return (
    <section className="py-24 text-center relative" id="contact">
      <div className={`absolute bottom-0 left-1/2 w-[700px] h-[350px] -translate-x-1/2 pointer-events-none ${
        isWeb3 ? 'bg-[radial-gradient(ellipse,rgba(200,255,0,0.06),transparent_70%)]' : 'bg-[radial-gradient(ellipse,rgba(45,212,191,0.06),transparent_70%)]'
      }`} />
      <div className="max-w-[1240px] mx-auto px-8 relative z-10">
        <SectionTag>Let&apos;s Work Together</SectionTag>

        {isWeb3 ? (
          <>
            <SectionTitle className="!max-w-[600px] !mx-auto">Mass adoption starts in classrooms.<br /><Em>We&apos;re already there.</Em></SectionTitle>
            <p className="text-[0.93rem] text-subtle max-w-[480px] mx-auto mb-8 leading-[1.7]">One campaign. Multiple creators. Authentic content. Verified on Solana. Currently operating in Coimbatore, expanding soon.</p>
          </>
        ) : (
          <>
            <SectionTitle className="!max-w-[600px] !mx-auto">Your next best marketing campaign doesn&apos;t need a celebrity.<br /><Em>It needs actual people.</Em></SectionTitle>
            <p className="text-[0.93rem] text-subtle max-w-[480px] mx-auto mb-8 leading-[1.7]">One campaign. Multiple creators. Authentic content. Genuine reach. Every result verified with permanent proof. Currently operating in Coimbatore, expanding soon.</p>
          </>
        )}

        <div className="flex gap-3 justify-center flex-wrap">
          <a href="https://wa.me/YOUR_NUMBER?text=Hi%20Baz%2C%20interested%20in%20a%20Faceless%20campaign" target="_blank" className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-[0.88rem] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.2)] transition-all">
            💬 Chat on WhatsApp
          </a>
          <a href="mailto:facelessnft07@gmail.com?subject=Faceless%20Campaign%20Inquiry" className={`inline-flex items-center gap-1.5 ${isWeb3 ? 'bg-lime' : 'bg-teal'} text-bg px-7 py-3.5 rounded-full font-bold text-[0.88rem] hover:-translate-y-0.5 hover:shadow-lg transition-all`}>
            ✉ Email Us
          </a>
          <a href="https://x.com/metabaz7" target="_blank" className="inline-flex items-center gap-1.5 bg-transparent text-cream px-7 py-3.5 rounded-full font-medium text-[0.88rem] border border-border-2 hover:border-lime/40 hover:bg-lime/5 transition-all">
            𝕏 Follow on X
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   FOOTER
   ============================================ */
export function Footer() {
  const { accent } = useMode()

  return (
    <footer className="pt-10 pb-5 border-t border-border">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
          <div>
            <div className="font-display text-[1.4rem]">Faceless<span className={accent}>.</span></div>
            <p className="text-[0.75rem] text-muted mt-1 max-w-[250px]">India&apos;s first campus creator & distribution network. Verified students. Authentic content. On-chain proof.</p>
          </div>
          <div className="flex gap-12 flex-wrap">
            <div>
              <h5 className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted mb-3">Navigate</h5>
              <a href="#how" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">How It Works</a>
              <a href="#svc" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">Services</a>
              <a href="#chain" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">Blockchain</a>
              <a href="#trac" className="block text-[0.75rem] text-subtle hover:text-lime transition-colors">Traction</a>
            </div>
            <div>
              <h5 className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted mb-3">Company</h5>
              <a href="#about" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">About</a>
              <a href="#diff" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">Why Us</a>
              <a href="#contact" className="block text-[0.75rem] text-subtle hover:text-lime transition-colors">Contact</a>
            </div>
            <div>
              <h5 className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted mb-3">Connect</h5>
              <a href="https://x.com/metabaz7" target="_blank" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">X (Twitter)</a>
              <a href="#" target="_blank" className="block text-[0.75rem] text-subtle mb-1.5 hover:text-lime transition-colors">LinkedIn</a>
              <a href="https://wa.me/YOUR_NUMBER" target="_blank" className="block text-[0.75rem] text-subtle hover:text-lime transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-4 border-t border-border text-[0.65rem] text-muted gap-2">
          <span>© 2026 Faceless. Built in Coimbatore, India.</span>
          <span>Powered by Solana</span>
        </div>
      </div>
    </footer>
  )
}
