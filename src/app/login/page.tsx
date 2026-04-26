'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Mock authentication
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        email: email,
        name: 'Mario Rossi',
        type: 'personal_trainer'
      }))
      router.push('/dashboard')
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FitPlan Italia
            </h1>
            <p className="text-gray-400 mt-2">Accedi al tuo account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="mario@esempio.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary"
            >
              {loading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Non hai un account?{' '}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300">
                Registrati qui
              </Link>
            </p>
            <Link href="/" className="text-gray-500 hover:text-gray-400 text-sm mt-4 block">
              ← Torna alla homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}