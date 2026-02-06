'use client'

import React from "react"

import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import { ArrowLeft, Crown, Check, TrendingUp, Banknote, Shield, Plane, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BottomSheet } from '@/components/bottom-sheet'
import { BottomNav } from '@/components/bottom-nav'
import { ServiceIcon } from '@/components/svg-placeholders'
import { useState } from 'react'
import { LucideCoins as LucideIcons } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp: LucideIcons.TrendingUp,
  Banknote: LucideIcons.Banknote,
  ArrowRightLeft: LucideIcons.ArrowLeftRight,
  Wifi: LucideIcons.Wifi,
  Phone: LucideIcons.Phone,
  Globe: LucideIcons.Globe,
}

export default function PremiumPromoPage() {
  const router = useRouter()
  const params = useParams()
  const { partner, isPremium, setIsPremium } = usePartner()
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showCardSheet, setShowCardSheet] = useState(false)
  const [showServiceSheet, setShowServiceSheet] = useState(false)

  const partnerId = params?.partnerId as string

  if (!partner) return null

  if (isPremium) {
    router.push(`/${partnerId}/premium/activated`)
    return null
  }

  const scrollToDetails = () => {
    document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleActivate = () => {
    setShowCardSheet(true)
  }

  const handleCardSelect = () => {
    setIsPremium(true)
    setShowCardSheet(false)
    router.push(`/${partnerId}/premium/activated`)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {/* Header */}
      <div 
        className="px-6 pt-14 pb-8"
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
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-dark, #0E0C00)' }}>
            {partner.subscriptionName}
          </h1>
        </div>
        <p className="text-sm opacity-70" style={{ color: 'var(--color-dark, #0E0C00)' }}>
          {partner.subscriptionPrice}
        </p>
      </div>

      {/* Hero section */}
      <div className="px-6 py-8 space-y-6">
        <div className="text-center space-y-2">
          <Crown className="w-16 h-16 mx-auto" style={{ color: 'var(--color-accent, #FACE00)' }} />
          <p className="text-muted-foreground">
            Преміум-підписка з ексклюзивними перевагами
          </p>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={handleActivate}
            className="w-full h-12 text-lg font-semibold"
            style={{ 
              backgroundColor: 'var(--color-accent, #FACE00)',
              color: 'var(--color-dark, #0E0C00)'
            }}
          >
            <Crown className="w-5 h-5 mr-2" />
            Активувати Premium
          </Button>
          <Button 
            onClick={scrollToDetails}
            variant="outline"
            className="w-full h-12 text-lg font-semibold bg-transparent"
          >
            Подробніше про Premium
          </Button>
        </div>
      </div>

      {/* Details section */}
      <div id="details-section" className="flex-1 px-6 pb-24 space-y-8">
        {/* Benefits */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Переваги від {partner.name}</h2>
          <div className="space-y-3">
            {partner.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Shield
              return (
                <Card 
                  key={index}
                  className="p-4 border-[1px]"
                  style={{ 
                    backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                    borderColor: 'var(--color-border, #797875)',
                    borderOpacity: 0.2
                  }}
                >
                  <div className="flex gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: 'var(--color-accent, #FACE00)',
                        opacity: 0.1
                      }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: 'var(--color-accent, #FACE00)' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Цифрові сервіси</h2>
          <div className="space-y-3">
            {partner.services.map((service) => (
              <Card 
                key={service.id}
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
                style={{ 
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                  borderColor: 'var(--color-border, #797875)',
                  borderOpacity: 0.2
                }}
                onClick={() => {
                  setSelectedService(service)
                  setShowServiceSheet(true)
                }}
              >
                <div className="flex items-center gap-4">
                  <ServiceIcon service={service.id} size={60} />
                  <div className="flex-1">
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Plane className="w-6 h-6" style={{ color: 'var(--color-accent, #FACE00)' }} />
            <h2 className="text-xl font-bold">Бронювання подорожей</h2>
          </div>
          <Card 
            className="p-4 border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
              borderOpacity: 0.2
            }}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Бронюйте готелі зі знижками до 15%</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Ексклюзивні пропозиції від партнерів</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Безкоштовна підтримка 24/7</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Insurance */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" style={{ color: 'var(--color-accent, #FACE00)' }} />
            <h2 className="text-xl font-bold">Страхування</h2>
          </div>
          <Card 
            className="p-4 border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
              borderOpacity: 0.2
            }}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Туристична страховка зі знижкою</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Страхування скасування подорожі</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Захист домашніх тварин</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Partner offers */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6" style={{ color: 'var(--color-accent, #FACE00)' }} />
            <h2 className="text-xl font-bold">Пропозиції від брендів</h2>
          </div>
          <Card 
            className="p-4 border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
              borderOpacity: 0.2
            }}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Кешбек до 15% у популярних магазинах</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Ексклюзивні знижки від партнерів</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent, #FACE00)' }} />
                <span>Щомісячні оновлення пропозицій</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Card selection sheet */}
      <BottomSheet isOpen={showCardSheet} onClose={() => setShowCardSheet(false)} title="Виберіть картку">
        <div className="space-y-4">
          {[
            { id: 1, name: 'Основна картка', last4: '4532', color: 'from-blue-500 to-blue-600' },
            { id: 2, name: 'Зарплатна', last4: '8234', color: 'from-green-500 to-green-600' },
          ].map((card) => (
            <Card
              key={card.id}
              className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
              onClick={handleCardSelect}
              style={{ 
                backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                borderColor: 'var(--color-border, #797875)',
                borderOpacity: 0.2
              }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-16 h-10 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white font-bold">••••</span>
                </div>
                <div>
                  <p className="font-semibold">{card.name}</p>
                  <p className="text-sm text-muted-foreground">•••• {card.last4}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </BottomSheet>

      {/* Service detail sheet */}
      <BottomSheet 
        isOpen={showServiceSheet} 
        onClose={() => setShowServiceSheet(false)}
      >
        {selectedService && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <ServiceIcon service={selectedService.id} size={100} />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold">{selectedService.name}</h2>
              <p className="text-muted-foreground">{selectedService.fullDescription}</p>
            </div>
          </div>
        )}
      </BottomSheet>

      <BottomNav />
    </div>
  )
}
