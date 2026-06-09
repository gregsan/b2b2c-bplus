'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { 
  ArrowLeft, 
  Crown, 
  Check, 
  TrendingUp, 
  Banknote, 
  Shield, 
  Plane, 
  Sparkles,
  Phone,
  Globe,
  Wifi,
  ArrowLeftRight,
  Gem,
  ShoppingCart,
  Store,
  Receipt,
  Tag,
  Tags,
  MapPin,
  DiamondPercent,
  Package,
  BadgePercent,
  Pill,
  HeartPulse,
  LayoutGrid,
  Gift,
  RefreshCw,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BottomSheet } from '@/components/bottom-sheet'
import { BottomNav } from '@/components/bottom-nav'
import { ServiceIcon } from '@/components/svg-placeholders'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { getInsuranceShortList, getInsuranceSummary } from '@/data/insurance/insurance-data'

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Banknote,
  ArrowRightLeft: ArrowLeftRight,
  Wifi,
  Phone,
  Globe,
  Shield,
  Gem,
  ShoppingCart,
  Store,
  Receipt,
  Tag,
  Tags,
  MapPin,
  DiamondPercent,
  Package,
  BadgePercent,
  Pill,
  HeartPulse,
}

export default function PremiumPromoPage() {
  const router = useRouter()
  const params = useParams()
  const { partner, isPremium, setIsPremium } = usePartner()
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showCardSheet, setShowCardSheet] = useState(false)
  const [showServiceSheet, setShowServiceSheet] = useState(false)

  const partnerId = params?.partnerId as string

  useEffect(() => {
    if (isPremium && partnerId) {
      router.push(`/${partnerId}/premium/activated`)
    }
  }, [isPremium, partnerId, router])

  if (!partner) return null
  if (isPremium) return null

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
        className="px-6 pt-4 pb-2"
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

      {/* Main content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          
          {/* Hero section */}
          <Card className="overflow-hidden border-[1px] border-border/20 shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-card">
            <div className="relative p-6 min-h-[170px] flex flex-col justify-between">
              {/* Декоративні круги справа */}
              <div
                className="absolute -right-10 -top-10 w-44 h-44 rounded-full opacity-15"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <div
                className="absolute right-5 top-9 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />

              {/* Контент */}
              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <p
                    className="text-sm font-semibold tracking-wide uppercase"
                    style={{ color: 'var(--color-text-secondary, #6B6B6B)' }}
                  >
                    Преміум підписка
                  </p>

                  <p
                    className="text-3xl font-bold leading-tight"
                    style={{ color: 'var(--color-text-primary, #1A1A1A)' }}
                  >
                    {partner.subscriptionName}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {partner.subscriptionPrice}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text-secondary, #6B6B6B)' }}
                  >
                    / {partner.subscriptionPeriod ?? 'місяць'}
                  </span>
                </div>

                <p
                  className="text-xs"
                  style={{ color: 'var(--color-text-secondary, #6B6B6B)' }}
                >
                  потім стандартна місячна вартість тарифу
                </p>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold">До {partner.subscriptionName} включено</h2>
            <motion.div
              className="space-y-3"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Benefits з JSON */}
              {partner.benefits.map((benefit, index) => (
                <motion.div
                  key={`benefit-${index}`}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {benefit.title}
                  </p>
                </motion.div>
              ))}

              {/* Статичні пункти */}
              {[
                 partner.type !== 'retail-zoo' && partner.type !== 'pharmacy' && partner.type !== 'operator'
                    ? 'Знижки на бронювання готелів до 15%'
                    : null,
                  getInsuranceSummary(partner.type),
                  partner.partnerOffers && partner.partnerOffers.length > 0
                    ? partner.partnerOffers.length > 1
                      ? `${partner.partnerOffers[0].offer} та ще ${partner.partnerOffers.length - 1} пропозиці${
                          partner.partnerOffers.length - 1 === 1 ? 'я' :
                          partner.partnerOffers.length - 1 < 5 ? 'ї' : 'й'
                        }`
                      : partner.partnerOffers[0].offer
                    : 'Додаткові пропозиції',
                ]
                .filter(Boolean)
                .map((feature, index) => (
                  <motion.div
                    key={`static-${index}`}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{feature}</p>
                  </motion.div>
                ))}

                {/* Сервіси (один пункт з переліком) */}
                    <motion.div
                      variants={staggerItem}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-foreground font-medium leading-relaxed">
                          Premium-підписки на {partner.services.length} digital-сервісів
                        </p>
                        {/* Стек логотипів з "наповзанням" */}
                        <div className="flex items-center">
                          {partner.services.map((service, index) => (
                            <div
                              key={service.id}
                              className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center border-2 border-card shadow-sm -ml-2 first:ml-0"
                              style={{ zIndex: partner.services.length - index }}
                            >
                              {service.logo ? (
                                <img
                                  src={service.logo}
                                  alt={service.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <ServiceIcon service={service.id} size={20} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pb-24">
            <Button 
              onClick={handleActivate}
              className="w-full h-12 text-lg font-semibold"
              style={{ 
                backgroundColor: 'var(--color-accent, #FACE00)',
                color: 'var(--color-dark, #0E0C00)'
              }}
            >
              <Crown className="w-5 h-5 mr-2" />
              Активувати {partner.subscriptionName}
            </Button>
            <Button 
              onClick={scrollToDetails}
              variant="outline"
              className="w-full h-12 text-lg font-semibold bg-transparent"
            >
              Детальніше про {partner.subscriptionName}
            </Button>
          </div>

          {/* Details section */}
          <div id="details-section" className="space-y-8 pt-8">
            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                <h2 className="text-xl font-bold">Переваги від {partner.name}</h2>
              </div>
              <div className="space-y-3">
                {partner.benefits.map((benefit, index) => {
                  const IconComponent = iconMap[benefit.icon] || Shield
                  return (
                    <Card 
                      key={index}
                      className="p-4 border-[1px]"
                      style={{ 
                        backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                        border: '1px solid rgba(229, 229, 229, 0.2)'
                      }}
                    >
                      <div className="flex gap-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ 
                            backgroundColor: 'var(--color-accent-light, #F7F4EA)',
                          }}
                        >
                          <IconComponent 
                            className="w-6 h-6"
                            color="var(--color-accent)"
                          />
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
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                <h2 className="text-xl font-bold">Підписки на цифрові сервиси</h2>
              </div>
              <div className="space-y-3">
                {partner.services.map((service) => (
                  <Card 
                    key={service.id}
                    className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
                    style={{ 
                      backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                      border: '1px solid rgba(229, 229, 229, 0.2)'
                    }}
                    onClick={() => {
                      setSelectedService(service)
                      setShowServiceSheet(true)
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex justify-center">
                        {service.logo ? (
                          <div className="w-[60px] h-[60px] rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                            <img 
                              src={service.logo} 
                              alt={service.name} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <ServiceIcon service={service.id} size={60} />
                        )}
                      </div>
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
            {!['retail-zoo', 'pharmacy', 'operator'].includes(partner.type) && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Plane className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                  <h2 className="text-xl font-bold">Бронювання подорожей</h2>
                </div>
                <Card 
                  className="p-4 border-[1px]"
                  style={{ 
                    backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                    border: '1px solid rgba(229, 229, 229, 0.2)'
                  }}
                >
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span>Бронюйте готелі зі знижками до 15%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span>Ексклюзивні пропозиції від партнерів</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span>Безкоштовна підтримка 24/7</span>
                    </li>
                  </ul>
                </Card>
              </div>
            )}


            {/* Insurance */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                <h2 className="text-xl font-bold">Страхування</h2>
              </div>
              <Card 
                className="p-4 border-[1px]"
                style={{ 
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                  border: '1px solid rgba(229, 229, 229, 0.2)'
                }}
              >
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {getInsuranceShortList(partner.type).map((title, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Partner offers */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                <h2 className="text-xl font-bold">Додаткові пропозиції</h2>
              </div>
              <Card
                className="p-4 border-[1px]"
                style={{
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                  border: '1px solid rgba(229, 229, 229, 0.2)',
                }}
              >
                <ul className="space-y-3 text-sm">
                  {partner.partnerOffers && partner.partnerOffers.length > 0 ? (
                    partner.partnerOffers.map((offer) => (
                      <li key={offer.slug} className="flex items-start gap-2">
                        <ChevronRight
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--color-accent)' }}
                        />
                        <div>
                          <span className="font-medium text-foreground">{offer.name}</span>
                          <span className="text-muted-foreground"> — {offer.offer}</span>
                        </div>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <Crown
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--color-accent)' }}
                        />
                        <span className="text-muted-foreground">Ексклюзивні знижки від партнерів</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RefreshCw
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--color-accent)' }}
                        />
                        <span className="text-muted-foreground">Щомісячні оновлення пропозицій</span>
                      </li>
                    </>
                  )}
                </ul>
              </Card>
            </div>
          </div>
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
                border: '1px solid rgba(229, 229, 229, 0.2)'
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
              {selectedService.logo ? (
                <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-3">
                  <img 
                    src={selectedService.logo} 
                    alt={selectedService.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <ServiceIcon service={selectedService.id} size={100} />
              )}
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