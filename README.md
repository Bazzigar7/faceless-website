# Faceless Website

India's first campus creator & distribution network — marketing website.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Vercel (deployment)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Images

Drop your images in `/public/images/` and reference them in components:

```tsx
// In components/Hero.tsx — find the heroSlides array:
const heroSlides = [
  { type: 'image', src: '/images/grd-session.jpg' },          // ← your photo
  { type: 'video', src: '/videos/bybit-campaign.mp4' },       // ← your video
  { type: 'video', youtubeId: 'dQw4w9WgXcQ' },               // ← YouTube embed
  { type: 'placeholder', icon: '🏆', placeholder: 'Event' },  // ← placeholder
]
```

For gallery images in `components/Sections.tsx`, find the `<ImageSlot>` or `<VideoSlot>` components and uncomment the `src` prop:

```tsx
<ImageSlot
  src="/images/classroom.jpg"    // ← uncomment and add your path
  alt="Classroom session"
  label="Face-to-face education"
  sublabel="Daily Sessions"
  className="reveal aspect-[16/10]"
/>
```

## Adding Videos

### Self-hosted (MP4)
Drop videos in `/public/videos/` and use:
```tsx
<VideoSlot src="/videos/your-video.mp4" />
```

### YouTube embed
```tsx
<VideoSlot youtubeId="VIDEO_ID_HERE" />
```

### Instagram embed
For Instagram reels, use the YouTube approach with Instagram's embed URL, or link to them externally.

## Updating WhatsApp Number

Search for `YOUR_NUMBER` across all files and replace with your actual WhatsApp number (with country code, no + or spaces, e.g., `919876543210`).

## Deployment

1. Push to GitHub: `git push origin main`
2. Connect repo to Vercel
3. Vercel auto-deploys on every push

## Project Structure

```
faceless-website/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles, Tailwind imports
├── components/
│   ├── ModeContext.tsx      # Web2/Web3 tab state provider
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section with carousel
│   ├── ImageCarousel.tsx    # Reusable carousel component
│   ├── Sections.tsx         # All other page sections
│   ├── UI.tsx               # Shared UI components (cards, image slots, etc.)
│   └── useScrollReveal.ts   # Scroll animation hook
├── public/
│   ├── images/              # Your photos go here
│   └── videos/              # Your videos go here
├── tailwind.config.ts
├── next.config.js
└── package.json
```
