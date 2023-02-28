import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Blog</h1>
    </div>
  )
}
