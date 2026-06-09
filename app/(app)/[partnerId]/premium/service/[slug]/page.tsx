'use client'

import { ArrowLeft} from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import { Button } from '@/components/ui/button'
import { ServiceIcon } from '@/components/svg-placeholders'
import { BottomNav } from '@/components/bottom-nav'

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { partner } = usePartner()
  const slug = params?.slug as string

  if (!partner) return null

  const service = partner.services.find(s => s.id === slug)

  if (!service) {
    return (
      <div
        className="h-screen flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Сервіс не знайдено</h2>
          <Button onClick={() => router.back()}>Повернутися</Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col pb-24"
      style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}
    >
      {/* Header — акцентний фон з кнопкою назад */}
      <div
        className="px-6 pt-14 pb-6"
        style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="hover:bg-black/10 -ml-2"
          style={{ color: 'var(--color-dark, #0E0C00)' }}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex-1 p-6 space-y-8">

        {/* Лого — велике, по центру, з фоном */}
        <div className="flex justify-center pt-2">
          {service.logo ? (
            <div
              className="w-28 h-28 rounded-3xl overflow-hidden flex items-center justify-center p-3 shadow-sm"
              style={{
                backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                border: '1px solid rgba(229, 229, 229, 0.2)',
              }}
            >
              <img
                src={service.logo}
                alt={service.name}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-accent-light, #F7F4EA)' }}
            >
              <ServiceIcon service={slug} size={72} />
            </div>
          )}
        </div>

        {/* Назва + короткий опис */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold leading-tight">{service.name}</h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Повний опис — список фіч */}
        {service.features && service.features.length > 0 ? (
          <div className="space-y-5">
            {service.features.map((feature: { emoji: string; title: string; description: string }, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 leading-none mt-0.5">{feature.emoji}</span>
                <div>
                  <p className="font-bold text-sm leading-snug">{feature.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.fullDescription}
          </p>
        )}

        {/* CTA кнопка */}
        <div className="space-y-2">
          <Button
            className="w-full h-14 text-base font-bold rounded-2xl cursor-not-allowed"
            style={{
              backgroundColor: 'var(--color-accent, #FACE00)',
              color: 'var(--color-dark, #0E0C00)',
            }}
            disabled
          >
            Отримати доступ до підписки безкоштовно
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Функція буде доступна незабаром
          </p>
        </div>

        {/* Як скористатися */}
        <div className="space-y-4">
          <h3 className="text-base font-bold">Як скористатися?</h3>
          <ol className="space-y-3">
            {[
              'Натисніть "Отримати доступ до підписки"',
              'Перейдіть на сайт та слідуйте інструкціям',
              'Доступ буде надано автоматично',
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                  style={{
                    backgroundColor: 'var(--color-accent-light, #F7F4EA)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}