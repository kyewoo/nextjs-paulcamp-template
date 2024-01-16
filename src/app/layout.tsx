import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const navLinks = [
  { href: '/memories', label: 'Memories' },
  { href: '/settings', label: 'Settings' },
]

export const metadata: Metadata = {
  title: '1zdevcamp',
  description: '1zdevcamp template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
