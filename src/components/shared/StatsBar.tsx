type Stat = {
  id?: string | null
  value?: string | null
  suffix?: string | null
  label?: string | null
}

type StatsBarProps = {
  stats: Stat[]
  columns?: 3 | 4
}

export function StatsBar({ stats, columns = 3 }: StatsBarProps) {
  if (stats.length === 0) return null

  return (
    <div
      className={`border-divider mb-8 grid grid-cols-1 border-t ${
        columns === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
      }`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id ?? index}
          className={`px-10 py-8 text-center ${
            index < stats.length - 1 ? 'border-divider border-b sm:border-r sm:border-b-0' : ''
          }`}
        >
          <span className="font-display mb-2 block text-4xl text-white">
            {stat.value}
            <span className="text-gold">{stat.suffix}</span>
          </span>
          <span className="text-[13px] tracking-wide text-caption">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
