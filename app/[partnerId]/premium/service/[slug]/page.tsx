'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ServiceIcon } from '@/components/svg-placeholders'
import { BottomNav } from '@/components/bottom-nav'

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { partner } = usePartner()
  const slug = params?.slug as string
  const partnerId = params?.partnerId as string

  if (!partner) return null

  const service = partner.services.find(s => s.id === slug)

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Сервіс не знайдено</h2>
          <Button onClick={() => router.back()}>Повернутися</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col pb-24" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {/* Header */}
      <div 
        className="px-6 pt-14 pb-6"
        style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="hover:bg-black/10 -ml-2 mb-4"
          style={{ color: 'var(--color-dark, #0E0C00)' }}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          {service.logo ? (
            <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
              <img 
                src={service.logo} 
                alt={service.name} 
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <ServiceIcon service={slug} size={120} />
          )}
        </div>

        {/* Service Info */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{service.name}</h1>
          <p className="text-lg text-muted-foreground">{service.fullDescription}</p>
        </div>

        {/* CTA Button */}
        <Card 
          className="p-6 border-[1px]"
          style={{ 
            backgroundColor: 'var(--color-card-bg, #F7F7F9)',
            borderColor: 'var(--color-border, #797875)',
            border: '1px solid rgba(229, 229, 229, 0.2)'
          }}
        >
          <Button 
            className="w-full h-12 text-foreground cursor-not-allowed"
            style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}
            disabled
          >
            Отримати підписку
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Функція буде доступна незабаром
          </p>
        </Card>

        {/* Instructions */}
        <div className="space-y-2 mt-8">
          <h3 className="text-sm font-semibold text-muted-foreground">Як активувати</h3>
          <div className="space-y-2">
            {['Натисніть кнопку "Отримати підписку"', 'Оберіть тариф та період', 'Підтвердіть оплату', 'Отримайте доступ до сервісу'].map((step, index) => (
              <div key={index} className="flex gap-2 items-start">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold mt-0.5"
                  style={{ 
                    backgroundColor: 'var(--color-accent, #FACE00)',
                    color: 'var(--color-dark, #0E0C00)'
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
