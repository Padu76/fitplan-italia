'use client'
import { useState } from 'react'

interface Client {
  id: string
  name: string
  startWeight: number
  currentWeight: number
  targetWeight: number
  startDate: string
  lastUpdate: string
}

export default function ProgressTracking() {
  const [selectedClient, setSelectedClient] = useState('')

  const clients: Client[] = [
    {
      id: '1',
      name: 'Marco Bianchi',
      startWeight: 85,
      currentWeight: 78,
      targetWeight: 75,
      startDate: '2024-01-01',
      lastUpdate: '2024-01-20'
    },
    {
      id: '2',
      name: 'Giulia Romano',
      startWeight: 62,
      currentWeight: 59,
      targetWeight: 55,
      startDate: '2024-01-05',
      lastUpdate: '2024-01-18'
    },
    {
      id: '3',
      name: 'Alessandro Conti',
      startWeight: 78,
      currentWeight: 82,
      targetWeight: 85,
      startDate: '2023-12-15',
      lastUpdate: '2024-01-19'
    }
  ]

  const progressData = [
    { date: '2024-01-01', weight: 85, bodyFat: 18 },
    { date: '2024-01-07', weight: 83, bodyFat: 17 },
    { date: '2024-01-14', weight: 80, bodyFat: 16 },
    { date: '2024-01-21', weight: 78, bodyFat: 15 }
  ]

  const getProgressPercentage = (client: Client) => {
    const totalProgress = client.startWeight - client.targetWeight
    const currentProgress = client.startWeight - client.currentWeight
    return Math.round((currentProgress / totalProgress) * 100)
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'from-green-500 to-emerald-500'
    if (percentage >= 50) return 'from-yellow-500 to-orange-500'
    return 'from-red-500 to-pink-500'
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tracking Progressi</h1>
        <p className="text-gray-400 mt-2">Monitora i progressi dei tuoi clienti con statistiche dettagliate</p>
      </div>

      {/* Client Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {clients.map((client) => {
          const progress = getProgressPercentage(client)
          const progressColor = getProgressColor(progress)
          
          return (
            <div key={client.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{client.name}</h3>
                <button 
                  onClick={() => setSelectedClient(client.id)}
                  className="text-blue-400 hover:text-blue-300 p-2 hover:bg-blue-400/20 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Peso attuale:</span>
                  <span className="font-semibold">{client.currentWeight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Obiettivo:</span>
                  <span className="font-semibold">{client.targetWeight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Variazione:</span>
                  <span className={`font-semibold ${client.currentWeight < client.startWeight ? 'text-green-400' : 'text-red-400'}`}>
                    {client.currentWeight - client.startWeight > 0 ? '+' : ''}{client.currentWeight - client.startWeight} kg
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Progresso</span>
                  <span className="text-sm font-medium">{progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${progressColor} transition-all`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detailed View */}
      {selectedClient && (
        <div className="card mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Dettaglio Progressi - {clients.find(c => c.id === selectedClient)?.name}</h2>
            <button 
              onClick={() => setSelectedClient('')}
              className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-80 bg-gray-700 rounded-lg mb-6 p-6 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <p className="text-gray-400">Grafico andamento peso</p>
              </div>
            </div>
            {/* Simulated chart data points */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <polyline
                fill="none"
                stroke="rgb(59 130 246)"
                strokeWidth="3"
                points="50,250 120,220 190,180 260,150"
              />
              {progressData.map((point, index) => (
                <circle
                  key={index}
                  cx={50 + index * 70}
                  cy={250 - (85 - point.weight) * 10}
                  r="5"
                  fill="rgb(59 130 246)"
                />
              ))}
            </svg>
          </div>
          
          {/* Progress Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Data</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Peso (kg)</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Grasso Corporeo (%)</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-300">Variazione</th>
                </tr>
              </thead>
              <tbody>
                {progressData.map((entry, index) => (
                  <tr key={index} className="border-b border-gray-700/50">
                    <td className="py-3 px-4">{entry.date}</td>
                    <td className="py-3 px-4 font-semibold">{entry.weight}</td>
                    <td className="py-3 px-4">{entry.bodyFat}%</td>
                    <td className="py-3 px-4">
                      {index > 0 ? (
                        <span className={`${entry.weight < progressData[index - 1].weight ? 'text-green-400' : 'text-red-400'}`}>
                          {entry.weight - progressData[index - 1].weight > 0 ? '+' : ''}{entry.weight - progressData[index - 1].weight}
                        </span>
                      ) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Measurement Button */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Aggiungi Nuova Misurazione</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <select className="input-field">
            <option>Seleziona Cliente</option>
            {clients.map(client => (
              <option key={client.id} value={client.id}>{client.name}</option>
            ))}
          </select>
          <input type="number" placeholder="Peso (kg)" className="input-field" />
          <input type="number" placeholder="Grasso %" className="input-field" />
          <button className="btn-primary">Salva Misurazione</button>
        </div>
      </div>
    </div>
  )
}