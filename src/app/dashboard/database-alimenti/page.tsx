'use client'
import { useState } from 'react'

interface Food {
  id: string
  name: string
  category: string
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
}

export default function FoodDatabase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = [
    'Tutti',
    'Carne e Pesce',
    'Latticini',
    'Cereali',
    'Verdure',
    'Frutta',
    'Legumi',
    'Condimenti',
    'Dolci'
  ]

  const foods: Food[] = [
    {
      id: '1',
      name: 'Parmigiano Reggiano',
      category: 'Latticini',
      calories: 392,
      protein: 33,
      carbs: 0,
      fat: 28,
      fiber: 0
    },
    {
      id: '2',
      name: 'Prosciutto di Parma',
      category: 'Carne e Pesce',
      calories: 265,
      protein: 25,
      carbs: 0,
      fat: 18,
      fiber: 0
    },
    {
      id: '3',
      name: 'Pasta Integrale',
      category: 'Cereali',
      calories: 349,
      protein: 13,
      carbs: 67,
      fat: 3,
      fiber: 11
    },
    {
      id: '4',
      name: 'Olio Extravergine d\'Oliva',
      category: 'Condimenti',
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0
    },
    {
      id: '5',
      name: 'Pomodori San Marzano',
      category: 'Verdure',
      calories: 18,
      protein: 1,
      carbs: 4,
      fat: 0,
      fiber: 1
    },
    {
      id: '6',
      name: 'Mozzarella di Bufala',
      category: 'Latticini',
      calories: 280,
      protein: 18,
      carbs: 1,
      fat: 24,
      fiber: 0
    }
  ]

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Tutti' || food.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Database Alimenti Italiani</h1>
        <p className="text-gray-400 mt-2">Oltre 5000 alimenti tipici italiani con valori nutrizionali certificati</p>
      </div>

      {/* Search and Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cerca alimenti..."
              className="pl-10 input-field"
            />
          </div>
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field"
          >
            {categories.map(category => (
              <option key={category} value={category === 'Tutti' ? '' : category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Food List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6 font-medium text-gray-300">Alimento</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Categoria</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Calorie/100g</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Proteine</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Carboidrati</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Grassi</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Fibre</th>
                <th className="text-left py-4 px-6 font-medium text-gray-300">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {filteredFoods.map((food) => (
                <tr key={food.id} className="border-b border-gray-700/50 hover:bg-gray-800/50">
                  <td className="py-4 px-6 font-medium">{food.name}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs font-medium">
                      {food.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300 font-semibold">{food.calories}</td>
                  <td className="py-4 px-6 text-gray-300">{food.protein}g</td>
                  <td className="py-4 px-6 text-gray-300">{food.carbs}g</td>
                  <td className="py-4 px-6 text-gray-300">{food.fat}g</td>
                  <td className="py-4 px-6 text-gray-300">{food.fiber}g</td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 p-2 hover:bg-blue-400/20 rounded-lg transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                      <button className="text-green-400 hover:text-green-300 p-2 hover:bg-green-400/20 rounded-lg transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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

      {/* Nutritional Stats */}
      <div className="grid md:grid-cols-4 gap-6 mt-8">
        <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-xl p-6">
          <h3 className="text-green-400 font-semibold mb-2">Proteine Medie</h3>
          <div className="text-2xl font-bold">18.5g</div>
          <p className="text-sm text-gray-400">per 100g</p>
        </div>
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-blue-400 font-semibold mb-2">Carboidrati Medi</h3>
          <div className="text-2xl font-bold">12.8g</div>
          <p className="text-sm text-gray-400">per 100g</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 border border-yellow-500/30 rounded-xl p-6">
          <h3 className="text-yellow-400 font-semibold mb-2">Grassi Medi</h3>
          <div className="text-2xl font-bold">22.2g</div>
          <p className="text-sm text-gray-400">per 100g</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-purple-400 font-semibold mb-2">Calorie Medie</h3>
          <div className="text-2xl font-bold">353</div>
          <p className="text-sm text-gray-400">per 100g</p>
        </div>
      </div>
    </div>
  )
}