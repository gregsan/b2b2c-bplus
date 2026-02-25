import { partnerData } from '@/data/partners-map'
import Link from 'next/link'

const colorMap: Record<string, string> = {
  green:  '#4ADE80',
  blue:   '#60A5FA',
  red:    '#F87171',
  yellow: '#FACC15',
  purple: '#C084FC',
}

// Людські назви для типів
const typeLabels: Record<string, string> = {
  bank:         '🏦 Банки',
  operator:     '📡 Мобільні оператори',
  'gas-station': '⛽️ АЗС',
  'retail-food': '🛒 Продуктовий рітейл',
  'retail-zoo':  '🐾 Зоомагазини',
  other:         '📦 Інше',
}

export default function PartnersListPage() {
  const partners = Object.values(partnerData)

  // Групуємо по типу
  const grouped = partners.reduce<Record<string, typeof partners>>((acc, partner) => {
    const key = partner.type ?? 'other'
    if (!acc[key]) acc[key] = []
    acc[key].push(partner)
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-gray-950 text-white p-12">
      <h1 className="text-2xl font-bold mb-2">Промо-сторінки партнерів</h1>
      <p className="text-white/40 text-sm mb-8">{partners.length} партнерів · {Object.keys(grouped).length} категорій</p>

      <div className="flex flex-col gap-3 max-w-4xl">
        {Object.entries(grouped).map(([type, list]) => (
          <details
            key={type}
            className="group border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Заголовок категорії — клікабельний */}
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors list-none">
              <div className="flex items-center gap-3">
                <span className="font-semibold">
                  {typeLabels[type] ?? type}
                </span>
                <span className="text-white/30 text-sm">
                  {list.length} партнерів
                </span>
              </div>
              {/* Стрілка — повертається при відкритті */}
              <span className="text-white/40 transition-transform duration-200 group-open:rotate-180">
                ▾
              </span>
            </summary>

            {/* Список партнерів */}
            <div className="border-t border-white/10">
              {list.map((partner, i) => (
                <div
                  key={partner.id}
                  className={`flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors ${
                    i !== list.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colorMap[partner.colorScheme] ?? '#fff' }}
                    />
                    <div>
                      <p className="font-medium">{partner.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">
                        {partner.subscriptionName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <code className="text-white/30 text-xs bg-white/5 px-3 py-1 rounded-lg">
                      /partners-promo/{partner.id}
                    </code>
                    <Link
                      href={`/partners-promo/${partner.id}`}
                      target="_blank"
                      className="text-sm px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors whitespace-nowrap"
                    >
                      Відкрити →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </main>
  )
}