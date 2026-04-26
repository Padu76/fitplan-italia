'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  type: string
}

export default function Settings() {
  const [user, setUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notifications: true,
    emailAlerts: false
  })
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }
    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)
    setFormData(prev => ({
      ...prev,
      name: parsedUser.name,
      email: parsedUser.email
    }))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  const handleSave = () => {
    if (user) {
      const updatedUser = { ...user, name: formData.name, email: formData.email }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      alert('Impostazioni salvate con successo!')
    }
  }

  if (!user) return null

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Impostazioni</h1>
        <p className="text-gray-400 mt-2">Gestisci il tuo profilo e le preferenze dell'account</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Informazioni Profilo</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Telefono</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="input-field"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo Account</label>
                  <input
                    type="text"
                    value={user.type.replace('_', ' ').toUpperCase()}
                    className="input-field bg-gray-700 text-gray-400"
                    disabled
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Indirizzo</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="input-field resize-none"
                  rows={3}
                  placeholder="Via, città, CAP"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Notifiche</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifiche Push</h3>
                  <p className="text-gray-400 text-sm">Ricevi notifiche per nuovi messaggi e aggiornamenti</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.notifications}
                    onChange={(e) => setFormData(prev => ({ ...prev, notifications: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifiche Email</h3>
                  <p className="text-gray-400 text-sm">Ricevi riepiloghi settimanali via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.emailAlerts}
                    onChange={(e) => setFormData(prev => ({ ...prev, emailAlerts: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Password Change */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Sicurezza</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password Attuale</label>
                <input type="password" className="input-field" placeholder="••••••••" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nuova Password</label>
                  <input type="password" className="input-field" placeholder="••••••••" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Conferma Password</label>
                  <input type="password" className="input-field" placeholder="••••••••" />
                </div>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-xl font-semibold transition-all">
                Cambia Password
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Azioni Account</h3>
            <div className="space-y-3">
              <button 
                onClick={handleSave}
                className="w-full btn-primary"
              >
                Salva Modifiche
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-xl font-semibold transition-all">
                Esporta Dati
              </button>
              <button 
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-500 py-3 px-6 rounded-xl font-semibold transition-all"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Piano Attuale</h3>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Personal Trainer</div>
              <div className="text-gray-400 mb-4">€29/mese</div>
              <div className="text-sm text-gray-400 mb-4">
                24/50 clienti utilizzati
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 py-3 px-6 rounded-xl font-semibold transition-all">
                Aggiorna Piano
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-red-400">Zona Pericolo</h3>
            <div className="space-y-3">
              <button className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/30 hover:border-red-600/50 py-3 px-6 rounded-xl font-semibold transition-all">
                Cancella Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}