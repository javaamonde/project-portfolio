import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects — changelogs, demos, and component states.',
  openGraph: { title: 'Projects', description: 'A collection of projects — changelogs, demos, and component states.', type: 'website' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
