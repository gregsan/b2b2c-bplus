'use client'

import type { PartnerConfig } from '@/types/partner'
import { FadeUp, AnimatedCard } from './promo-animate'

// Унікальний абстрактний фон для кожної картки
function AbstractBg({ slug, accent }: { slug: string; accent: string }) {
  // Різні патерни для різних партнерів
  const patterns: Record<string, React.ReactNode> = {
    rozetka: (
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg-rozetka" cx="30%" cy="40%" r="70%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#bg-rozetka)" />
        <circle cx="320" cy="60" r="120" fill={accent} opacity="0.08" />
        <circle cx="50" cy="250" r="80" fill={accent} opacity="0.06" />
        <circle cx="200" cy="150" r="60" fill="white" opacity="0.03" />
      </svg>
    ),
    comfy: (
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bg-comfy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#bg-comfy)" />
        <rect x="260" y="-40" width="200" height="200" rx="40" fill={accent} opacity="0.08" transform="rotate(20 360 60)" />
        <rect x="-40" y="180" width="160" height="160" rx="30" fill={accent} opacity="0.06" transform="rotate(-15 40 260)" />
      </svg>
    ),
    atb: (
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg-atb" cx="70%" cy="30%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#bg-atb)" />
        {[0,1,2,3,4].map(i => (
          <line key={i} x1={i*90} y1="0" x2={i*90+200} y2="300" stroke={accent} strokeWidth="0.5" opacity="0.1" />
        ))}
      </svg>
    ),
    varus: (
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg-varus" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#bg-varus)" />
        <polygon points="200,20 380,280 20,280" fill={accent} opacity="0.06" />
        <polygon points="200,60 340,260 60,260" fill="white" opacity="0.02" />
      </svg>
    ),
    apteka: (
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bg-apteka" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#bg-apteka)" />
        <circle cx="350" cy="50" r="100" fill={accent} opacity="0.08" />
        <circle cx="350" cy="50" r="60" fill={accent} opacity="0.06" />
        <circle cx="350" cy="50" r="25" fill={accent} opacity="0.1" />
      </svg>
    ),
  }

  return (
    <div className="absolute inset-0">
      {patterns[slug] || (
        <div
          className="w-full h-full"
          style={{ background: `radial-gradient(circle at 50% 50%, ${accent}30, transparent 70%)` }}
        />
      )}
    </div>
  )
}

export function PromoPartners({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="mb-20">
          <p className="text-sm uppercase tracking-widest text-white/30 mb-4">Партнери</p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Кешбек і знижки<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, var(--promo-accent), white)` }}
            >
              скрізь
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partner.partnerOffers.map((offer, i) => (
            <AnimatedCard key={offer.slug} delay={i * 0.08} className="h-full">
              <div
                className="group relative h-full rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                {/* Заголовок зверху */}
                <div className="relative z-10 px-7 pt-7 pb-0">
                  <p className="text-lg font-bold leading-snug">
                    {offer.offer} у {offer.name}
                  </p>
                  <p className="text-white/40 text-sm mt-1 leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>
                </div>

                {/* Центральна частина — абстрактний фон + логотип */}
                <div className="relative flex-1 flex items-end justify-start px-7 pb-7 pt-8 min-h-[200px]">
                  {/* Абстрактний фон */}
                  <AbstractBg slug={offer.slug} accent="var(--promo-accent)" />

                  {/* Логотип партнера — знизу зліва */}
                  <div className="relative z-10" style={{ width: 72, height: 72 }}>
                    {/* Логотип без зайвого фону */}
                    <div
                      className="relative w-full h-full rounded-2xl flex items-center justify-center p-2 overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        boxShadow: `0 0 30px 10px var(--promo-accent-bg), 0 0 60px 20px var(--promo-accent-bg)`,
                      }}
                    >
                      <img
                        src={offer.logo}
                        alt={offer.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const t = e.currentTarget
                          t.style.display = 'none'
                          const p = t.parentElement
                          if (p) p.innerHTML = `<span style="font-size:20px;font-weight:800;color:white;opacity:0.8">${offer.name[0]}</span>`
                        }}
                      />
                    </div>
                  </div>


                  {/* Бейдж з типом — знизу справа */}
                  <div className="relative z-10 ml-auto self-end">
                    <span
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-black"
                      style={{ backgroundColor: 'var(--promo-accent)' }}
                    >
                      {offer.type === 'cashback' ? '💰 Кешбек' : '🏷 Знижка'}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}