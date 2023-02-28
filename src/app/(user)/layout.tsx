import type { Metadata } from 'next'
import '../../styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Next.js Blog',
    template: '%s | Next.js Blog',
  },
  description: 'Welcome to Next.js',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
