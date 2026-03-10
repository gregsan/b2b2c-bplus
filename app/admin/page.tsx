'use client'

import { partnerData } from '@/data/partners-map'
import Link from 'next/link'
import { useState } from 'react'

const colorMap: Record<string, string> = {
  green:  '#4ADE80',
  blue:   '#60A5FA',
  red:    '#F87171',
  yellow: '#FACC15',
  purple: '#C084FC',
}

const typeLabels: Record<string, string> = {
  bank:          '🏦 Банки',
  operator:      '📡 Мобільні оператори',
  'gas-station': '⛽️ АЗС',
  'retail-food': '🛒 Продуктовий рітейл',
  'retail-zoo':  '🐾 Зоомагазини',
  'pharmacy': '💊 Аптеки',
  other:         '📦 Інше',
}

// Кнопка копирования — отдельный компонент, чтобы у каждой была своя независимая анимация
function CopyButton({ path }: { path: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const fullUrl = window.location.origin + path
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-white/10 hover:border-white/25 text-white/30 hover:text-white/60 text-xs transition-all"
    >
      {copied ? '✓ Скопійовано' : '⎘ Копіювати'}
    </button>
  )
}


export default function AdminPage() {
  const [query, setQuery] = useState('')  // 👈 додали

  const partners = Object.values(partnerData).filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.id.toLowerCase().includes(query.toLowerCase())
  )

  const grouped = partners.reduce<Record<string, typeof partners>>((acc, partner) => {
    const key = partner.type ?? 'other'
    if (!acc[key]) acc[key] = []
    acc[key].push(partner)
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-gray-950 text-white p-12">
      <h1 className="text-2xl font-bold mb-2">Адмін-панель</h1>
      <p className="text-white/40 text-sm mb-6">
        {partners.length} партнерів · {Object.keys(grouped).length} категорій
      </p>

      {/* Поиск */}
      <input
        type="text"
        placeholder="Пошук за назвою або ID..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full max-w-4xl mb-6 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors"
      />

      <div className="flex flex-col gap-3 max-w-4xl">
        {Object.entries(grouped).map(([type, list]) => (
          <details
            key={type}
            className="group border border-white/10 rounded-2xl overflow-hidden"
          >
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
              <div className="flex items-center gap-3">
                <span className="font-semibold">{typeLabels[type] ?? type}</span>
                <span className="text-white/30 text-sm">{list.length}</span>
              </div>
              <span className="text-white/40 transition-transform duration-200 group-open:rotate-180">
                ▾
              </span>
            </summary>

            <div className="border-t border-white/10">
              {list.map((partner, i) => {
                const appPath   = `/${partner.id}/home`
                const promoPath = `/partners-promo/${partner.id}`

                return (
                  <div
                    key={partner.id}
                    className={`flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors ${
                      i !== list.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    {/* Название партнера */}
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: colorMap[partner.colorScheme] ?? '#fff' }}
                      />
                      <div>
                        <p className="font-medium">{partner.name}</p>
                        <p className="text-white/40 text-xs mt-0.5">{partner.id}</p>
                      </div>
                    </div>

                    {/* Кнопки */}
                    <div className="flex items-start gap-3">
                        {/* Приложение */}
                        <div className="flex flex-col items-stretch gap-1">
                            <Link
                            href={appPath}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 hover:border-white/20 text-sm font-medium transition-all whitespace-nowrap"
                            >
                            📱 Додаток
                            </Link>
                            <CopyButton path={appPath} />
                        </div>

                        {/* Промо */}
                        <div className="flex flex-col items-stretch gap-1">
                            <Link
                            href={promoPath}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/20 hover:border-indigo-500/40 text-indigo-300 text-sm font-medium transition-all whitespace-nowrap"
                            >
                            🎯 Промо
                            </Link>
                            <CopyButton path={promoPath} />
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </details>
        ))}
      </div>
    </main>
  )
}