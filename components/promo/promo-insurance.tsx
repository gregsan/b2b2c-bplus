'use client'

import { Shield } from 'lucide-react'
import { insuranceByType, type InsuranceProduct } from '@/data/insurance/insurance-data'
import { FadeUp, AnimatedCard } from './promo-animate'

export function PromoInsurance({ type }: { type: string }) {
  const items = insuranceByType[type] || insuranceByType.bank

  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-sm uppercase tracking-widest text-white/30 mb-4">Захист</p>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Страхування<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, var(--promo-accent), white)` }}
              >
                включено
              </span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Всі страхові продукти включені в підписку без доплат
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-4 items-stretch">
            {items.map((item: InsuranceProduct, i: number) => (
              <AnimatedCard key={i} delay={i * 0.08} className="h-full">
                <div
                  className="group h-full rounded-2xl border border-white/10 p-6 flex gap-5 items-start hover:border-white/20 transition-all flex-1"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))' }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--promo-accent-muted)' }}
                  >
                    <Shield size={20} style={{ color: 'var(--promo-accent)' }} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{item.title}</p>
                    {item.desc && <p className="text-white/40 text-sm">{item.desc}</p>}
                    <p className="text-white/30 text-xs leading-relaxed">{item.details}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}