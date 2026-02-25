'use client'

import { Plane, Hotel, HeadphonesIcon } from 'lucide-react'
import { FadeUp, AnimatedCard } from './promo-animate'

const travelFeatures = [
  {
    icon: Hotel,
    title: 'Готелі зі знижками',
    description: 'До 15% знижки на бронювання готелів по всьому світу через особистий кабінет',
  },
  {
    icon: Plane,
    title: 'Ексклюзивні пропозиції',
    description: 'Спеціальні умови від партнерів — авіакомпаній, готельних мереж та туроператорів',
  },
  {
    icon: HeadphonesIcon,
    title: 'Підтримка 24/7',
    description: 'Безкоштовна консьєрж-підтримка для вирішення будь-яких питань під час подорожі',
  },
]

export function PromoTravel() {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="mb-20">
          <p className="text-sm uppercase tracking-widest text-white/30 mb-4">Подорожі</p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Бронювання<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, var(--promo-accent), white)` }}
            >
              подорожей
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {travelFeatures.map((feature, i) => (
            <AnimatedCard key={i} delay={i * 0.08} className="h-full">
              <div
                className="group h-full rounded-3xl border border-white/10 p-10 flex flex-col hover:border-white/20 transition-all"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: 'var(--promo-accent-muted)' }}
                >
                  <feature.icon size={24} style={{ color: 'var(--promo-accent)' }} />
                </div>

                <div className="flex-1 flex flex-col justify-end space-y-3">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}