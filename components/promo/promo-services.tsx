'use client'

import type { PartnerConfig } from '@/types/partner'
import { FadeUp, AnimatedCard } from './promo-animate'

export function PromoServices({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <FadeUp>
            <p className="text-sm uppercase tracking-widest text-white/30 mb-4">Бонусом</p>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Сервіси<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, var(--promo-accent), white)` }}
              >
                у подарунок
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-white/40 max-w-xs lg:text-right">
              Доступ до всіх сервісів включено в підписку {partner.subscriptionName}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {partner.services.map((service, i) => (
            <AnimatedCard key={service.id} delay={i * 0.08} className="h-full">
              <div
                className="group h-full rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col p-7"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))' }}
              >
                {/* Логотип по центру зверху */}
                <div className="flex justify-center py-6">
                  <img
                    src={service.logo}
                    alt={service.name}
                    className="w-20 h-20 object-contain rounded-2xl"
                    style={{
                      filter: `drop-shadow(0 0 20px var(--promo-accent)) drop-shadow(0 0 40px var(--promo-accent-muted))`,
                    }}
                    onError={(e) => {
                      const t = e.currentTarget
                      t.style.display = 'none'
                      // fallback — літера з тінню
                      const p = t.parentElement
                      if (p) p.innerHTML = `<span style="font-size:32px;font-weight:800;color:white;opacity:0.5;filter:drop-shadow(0 0 20px var(--promo-accent))">${service.name[0]}</span>`
                    }}
                  />
                </div>

                {/* Акцентна лінія */}
                <div
                  className="w-8 h-0.5 rounded-full mb-5"
                  style={{ backgroundColor: 'var(--promo-accent)' }}
                />

                {/* Текст знизу */}
                <div className="flex-1 flex flex-col justify-end space-y-2">
                  <p className="font-bold text-lg text-white">{service.name}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{service.shortDescription}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}