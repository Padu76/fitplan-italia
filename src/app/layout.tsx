import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FitPlan Italia - Software per Personal Trainer',
  description: 'Il software completo per personal trainer e centri fitness. Genera piani di allenamento e nutrizione personalizzati con l\'AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="min-h-screen bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}