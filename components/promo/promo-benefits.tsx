'use client'

import type { PartnerConfig } from '@/types/partner'
import * as LucideIcons from 'lucide-react'
import { type LucideProps } from 'lucide-react'
import { FadeUp, FadeLeft, AnimatedCard } from './promo-animate'

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  return Icon ? <Icon {...props} /> : null
}

function BankCard({ name, accent }: { name: string; accent: string }) {
  return (
    <svg
      viewBox="0 0 250 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[280px] drop-shadow-2xl"
    >
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#2d2d2d" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a07d1c" />
        </linearGradient>
        <filter id="cardShadow">
          <feDropShadow dx="0" dy="20" stdDeviation="25" floodColor={accent} floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Основа */}
      <rect width="250" height="400" rx="24" fill="url(#cardGrad)" filter="url(#cardShadow)" />

      {/* Акцентний градієнт */}
      <rect width="250" height="400" rx="24" fill="url(#accentGrad)" opacity="0.4" />

      {/* Чіп */}
      <rect x="30" y="48" width="48" height="36" rx="6" fill="url(#chipGrad)" />
      <line x1="30" y1="60" x2="78" y2="60" stroke="#8B6914" strokeWidth="1" />
      <line x1="30" y1="72" x2="78" y2="72" stroke="#8B6914" strokeWidth="1" />
      <line x1="54" y1="48" x2="54" y2="84" stroke="#8B6914" strokeWidth="1" />

      {/* Безконтактна оплата */}
      <path d="M94 58 Q104 66 94 74" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M100 54 Q114 66 100 78" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M106 50 Q124 66 106 82" stroke="white" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />

      {/* Назва банку — тільки велика напівпрозора */}
      <text
        x="30"
        y="240"
        fontFamily="sans-serif"
        fontSize="46"
        fontWeight="800"
        fill="white"
        opacity="0.1"
        letterSpacing="-1"
      >
        {name}
      </text>

      {/* VISA — дуже прозорий */}
      <text
        x="158"
        y="375"
        fontFamily="serif"
        fontSize="36"
        fontWeight="900"
        fontStyle="italic"
        fill="white"
        opacity="0.2"
        letterSpacing="-2"
      >
        VISA
      </text>
    </svg>
  )
}

export function PromoBenefits({ partner }: { partner: PartnerConfig }) {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="mb-20">
          <p className="text-sm uppercase tracking-widest text-white/30 mb-4">Що входить</p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Переваги<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, var(--promo-accent), white)` }}
            >
              підписки
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Ліва — картка */}
          <FadeLeft className="flex items-center justify-center lg:sticky lg:top-24">
            <BankCard name={partner.name} accent="var(--promo-accent)" />
          </FadeLeft>

          {/* Права — стовпець з нумерацією */}
          <div className="flex flex-col gap-5">
            {partner.benefits.map((benefit, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="w-full">
                <div
                  className="group relative rounded-2xl border border-white/10 p-7 flex gap-6 items-start hover:border-white/20 transition-all duration-300 overflow-hidden"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))' }}
                >
                  {/* Велика цифра на фоні */}
                  <span
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl font-black text-white/5 select-none leading-none pointer-events-none"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Іконка */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--promo-accent-muted)' }}
                  >
                    <DynamicIcon
                      name={benefit.icon}
                      size={20}
                      style={{ color: 'var(--promo-accent)' }}
                    />
                  </div>

                  {/* Текст */}
                  <div className="space-y-1.5 relative z-10">
                    <h3 className="font-semibold text-base leading-snug">{benefit.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
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