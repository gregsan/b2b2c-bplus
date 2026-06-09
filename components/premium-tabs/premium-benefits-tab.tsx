'use client'

import { Card } from '@/components/ui/card'
import { usePartner } from '@/contexts/partner-context'
import type { LucideIcon } from 'lucide-react'
import {
  Shield,
  TrendingUp,
  Banknote,
  ArrowLeftRight,
  Wifi,
  Phone,
  Globe,
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
  Gift,
} from 'lucide-react'

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

export function PremiumBenefitsTab() {
  const { partner } = usePartner()
  if (!partner) return null

  return (
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
                border: '1px solid rgba(229, 229, 229, 0.2)',
              }}
            >
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-light, #F7F4EA)' }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
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
  )
}
