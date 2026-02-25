import type { PartnerConfig } from '@/types/partner'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function PromoCTA({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, var(--promo-accent) 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Готовий до більшого?
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Підключи {partner.subscriptionName} вже сьогодні — лише {partner.subscriptionPrice} на місяць
        </p>
        <Button
          size="lg"
          className="h-14 px-12 text-base font-semibold rounded-full gap-2 text-black"
          style={{ backgroundColor: 'var(--promo-accent)' }}
        >
          Підключити зараз
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  )
}