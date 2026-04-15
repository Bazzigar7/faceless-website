import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Faceless — India's First Campus Creator & Distribution Network",
  description: 'Real students. Real content. On-chain proof. Faceless puts your product in front of college students who test it, use it, and create authentic UGC content. Powered by Solana.',
  openGraph: {
    title: "Faceless — India's First Campus Creator & Distribution Network",
    description: 'Real students. Real content. On-chain proof.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
