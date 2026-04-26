interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  change: string
}

export default function StatCard({ title, value, icon, change }: StatCardProps) {
  const isPositive = change.startsWith('+')
  
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <div className="flex items-center mt-4">
            <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {change}
            </span>
            <span className="text-gray-400 text-sm ml-2">vs mese scorso</span>
          </div>
        </div>
        <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl">
          <div className="text-blue-400">
            {icon}
          </div>
        </div>
      </div>
    </div>
  )
}