'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import StatCard from '@/components/StatCard'

interface User {
  id: string
  name: string
  email: string
  type: string
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  if (!user) return null

  const stats = [
    {
      title: 'Clienti Attivi',
      value: '24',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      change: '+12%'
    },
    {
      title: 'Piani Generati',
      value: '156',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      change: '+28%'
    },
    {
      title: 'Sessioni Questa Settimana',
      value: '48',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      change: '+8%'
    },
    {
      title: 'Ricavi Mensili',
      value: '€2,450',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      change: '+15%'
    }
  ]

  const recentActivities = [
    { client: 'Marco Bianchi', action: 'Nuovo piano workout generato', time: '2 ore fa' },
    { client: 'Giulia Romano', action: 'Progressi aggiornati', time: '4 ore fa' },
    { client: 'Alessandro Conti', action: 'Piano nutrizionale completato', time: '1 giorno fa' },
    { client: 'Sara Marino', action: 'Nuova misurazione inserita', time: '2 giorni fa' }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Benvenuto, {user.name}</h1>
        <p className="text-gray-400 mt-2">Ecco una panoramica della tua attività</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Azioni Rapide</h2>
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 p-4 rounded-lg text-left transition-all">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Crea Nuovo Piano Workout
              </div>
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-left transition-all">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Aggiungi Nuovo Cliente
              </div>
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-left transition-all">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Visualizza Statistiche
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Attività Recenti</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-3">
                <div>
                  <p className="font-medium">{activity.client}</p>
                  <p className="text-sm text-gray-400">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Andamento Clienti</h2>
        <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-gray-400">Grafico andamento clienti</p>
            <p className="text-sm text-gray-500 mt-2">+15% rispetto al mese scorso</p>
          </div>
        </div>
      </div>
    </div>
  )
}