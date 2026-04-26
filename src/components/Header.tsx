'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FitPlan Italia
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#funzionalita" 
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Funzionalità
              </a>
              <a 
                href="#prezzi" 
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Prezzi
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Accedi
            </Link>
            <Link 
              href="/signup" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Inizia Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <a href="#funzionalita" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Funzionalità
              </a>
              <a href="#prezzi" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Prezzi
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              <Link href="/login" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Accedi
              </Link>
              <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-lg text-base font-medium">
                Inizia Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}