import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'] })

export const metadata: Metadata = {
  title: 'Ved Prakash Maurya - ML & Systems Engineer',
  description: 'Portfolio of Ved Prakash Maurya, ML & Systems Engineer at IIIT Hyderabad. Building scalable AI systems, knowledge graphs, and high-performance applications.',
  keywords: ['ML Engineer', 'Systems Engineer', 'IIIT Hyderabad', 'AI', 'Python', 'Next.js'],
  authors: [{ name: 'Ved Prakash Maurya' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vedmaurya.com',
    title: 'Ved Prakash Maurya - ML & Systems Engineer',
    description: 'Building scalable AI systems and high-performance applications',
    siteName: 'Ved Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-dark-bg text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
