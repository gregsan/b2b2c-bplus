import type { PartnerConfig } from '@/types/partner'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

function GlowOrb({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="orb1" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="40%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </radialGradient>
        <radialGradient id="orb2" cx="70%" cy="70%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <filter id="blur1">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      {/* Тінь */}
      <ellipse cx="210" cy="340" rx="120" ry="24" fill={color} opacity="0.2" filter="url(#blur1)" />
      {/* Основна куля */}
      <circle cx="200" cy="190" r="160" fill="url(#orb1)" />
      {/* Відблиск зліва-зверху */}
      <ellipse cx="140" cy="130" rx="60" ry="40" fill="white" opacity="0.25" transform="rotate(-30 140 130)" />
      {/* Відблиск знизу */}
      <circle cx="260" cy="280" r="30" fill="url(#orb2)" />
    </svg>
  )
}

export function PromoHero({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Фоновий градієнт */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 60% 50%, var(--promo-accent-bg) 0%, transparent 65%)`,
        }}
      />

      {/* Сітка */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--promo-accent) 1px, transparent 1px), linear-gradient(90deg, var(--promo-accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Ліва колонка — текст */}
        <div className="space-y-8">
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm text-white/60">
            <Sparkles size={13} />
            Преміум підписка
          </div>

          {/* Заголовок */}
          <div className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              {partner.name}
            </h1>
            <h1
              className="text-6xl lg:text-7xl font-bold tracking-tight leading-none bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, var(--promo-accent), white)` }}
            >
              Premium
            </h1>
          </div>

          {/* Опис */}
          <p className="text-xl text-white/50 leading-relaxed max-w-md">
            Більше можливостей. Більше вигоди. Все — в одній підписці за {partner.subscriptionPrice}/міс
          </p>

          {/* CTA */}
          <div className="flex flex-col items-start gap-2">
            <Button
              size="lg"
              className="h-14 px-10 text-base font-semibold rounded-full gap-2 text-black"
              style={{ backgroundColor: 'var(--promo-accent)' }}
            >
              Спробувати зараз
              <ArrowRight size={18} />
            </Button>
            <p className="text-white/30 text-sm">Скасувати можна в будь-який момент</p>
          </div>

        </div>

        {/* Права колонка — 3D куля */}
        <div className="relative flex items-center justify-center">
          <div className="w-[420px] h-[420px] relative">
            {/* Зовнішнє свічення */}
            <div
              className="absolute inset-[-20%] rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: 'var(--promo-accent)' }}
            />
            <GlowOrb color="var(--promo-accent)" />
          </div>

          {/* Плаваючі картки навколо кулі */}
          <div className="absolute top-8 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-sm font-medium">
            ✦ {partner.benefits[0]?.title}
          </div>
          <div className="absolute bottom-16 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-sm font-medium">
            ✦ {partner.benefits[1]?.title}
          </div>
        </div>
      </div>

      {/* Лінія знизу */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}