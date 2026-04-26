'use client'
import { useState } from 'react'

interface WorkoutPlan {
  id: string
  name: string
  client: string
  duration: string
  exercises: number
  created: string
  status: 'active' | 'completed' | 'draft'
}

export default function WorkoutPlans() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    clientName: '',
    objective: '',
    level: '',
    duration: '',
    equipment: []
  })

  const workoutPlans: WorkoutPlan[] = [
    {
      id: '1',
      name: 'Piano Forza Base',
      client: 'Marco Bianchi',
      duration: '8 settimane',
      exercises: 12,
      created: '2024-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Definizione Muscolare',
      client: 'Giulia Romano',
      duration: '6 settimane',
      exercises: 15,
      created: '2024-01-12',
      status: 'active'
    },
    {
      id: '3',
      name: 'Cardio Intensivo',
      client: 'Alessandro Conti',
      duration: '4 settimane',
      exercises: 8,
      created: '2024-01-10',
      status: 'completed'
    }
  ]

  const handleGeneratePlan = () => {
    // Mock AI generation
    alert('Piano workout generato con successo! (Mock)')
    setShowForm(false)
    setFormData({
      clientName: '',
      objective: '',
      level: '',
      duration: '',
      equipment: []
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20'
      case 'completed': return 'text-blue-400 bg-blue-400/20'
      case 'draft': return 'text-yellow-400 bg-yellow-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Attivo'
      case 'completed': return 'Completato'
      case 'draft': return 'Bozza'
      default: return status
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Piani Workout</h1>
          <p className="text-gray-400 mt-2">Genera e gestisci i piani di allenamento per i tuoi clienti</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Genera Nuovo Piano
        </button>
      </div>

      {/* Generation Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Genera Nuovo Piano Workout</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Cliente</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                  className="input-field"
                  placeholder="Es. Marco Bianchi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Obiettivo</label>
                <select
                  value={formData.objective}
                  onChange={(e) => setFormData(prev => ({ ...prev, objective: e.target.value }))}
                  className="input-field"
                >
                  <option value="">Seleziona obiettivo</option>
                  <option value="strength">Aumento Forza</option>
                  <option value="muscle">Crescita Muscolare</option>
                  <option value="endurance">Resistenza</option>
                  <option value="weight_loss">Perdita Peso</option>
                  <option value="toning">Tonificazione</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Livello Esperienza</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
                  className="input-field"
                >
                  <option value="">Seleziona livello</option>
                  <option value="beginner">Principiante</option>
                  <option value="intermediate">Intermedio</option>
                  <option value="advanced">Avanzato</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Durata Programma</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  className="input-field"
                >
                  <option value="">Seleziona durata</option>
                  <option value="4">4 settimane</option>
                  <option value="6">6 settimane</option>
                  <option value="8">8 settimane</option>
                  <option value="12">12 settimane</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border border-gray-600 rounded-xl hover:border-gray-500 transition-all"
              >
                Annulla
              </button>
              <button
                onClick={handleGeneratePlan}
                className="btn-primary"
                disabled={!formData.clientName || !formData.objective || !formData.level}
              >
                Genera Piano AI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Plans List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6 font-medium text-gray-300">Nome Piano</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Cliente</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Durata</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Esercizi</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Stato</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {workoutPlans.map((plan) => (
                <tr key={plan.id} className="border-b border-gray-700/50 hover:bg-gray-800/50">
                  <td className="py-4 px-6 font-medium">{plan.name}</td>
                  <td className="py-4 px-6 text-gray-300">{plan.client}</td>
                  <td className="py-4 px-6 text-gray-300">{plan.duration}</td>
                  <td className="py-4 px-6 text-gray-300">{plan.exercises} esercizi</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                      {getStatusText(plan.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 p-2 hover:bg-blue-400/20 rounded-lg transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-green-400 hover:text-green-300 p-2 hover:bg-green-400/20 rounded-lg transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}