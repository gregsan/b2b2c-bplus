'use client'

import { usePartner } from '@/contexts/partner-context'
import { Crown, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { BottomNav } from '@/components/bottom-nav'

export default function AccountPage() {
  const { partner, isPremium, setIsPremium } = usePartner()

  if (!partner) return null

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {/* Header */}
      <div 
        className="px-6 pt-14 pb-8"
        style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-dark, #0E0C00)' }}>
          Особистий кабінет
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {/* Premium management */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Керування Premium</h2>
            <Card 
              className="p-6 border-[1px]"
              style={{ 
                backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                borderColor: 'var(--color-border, #797875)',
                borderOpacity: 0.2
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5" style={{ color: 'var(--color-accent, #FACE00)' }} />
                      <Label htmlFor="premium-toggle" className="text-base font-semibold cursor-pointer">
                        Premium підписка
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        className={`px-2 py-0.5 rounded text-xs font-semibold ${
                          isPremium ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {isPremium ? 'Активна' : 'Неактивна'}
                      </div>
                    </div>
                  </div>
                  <Switch
                    id="premium-toggle"
                    checked={isPremium}
                    onCheckedChange={setIsPremium}
                  />
                </div>

                {isPremium && (
                  <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border, #797875)', borderOpacity: 0.2 }}>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Підписка</span>
                        <span className="font-semibold">{partner.subscriptionName}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Вартість</span>
                        <span className="font-semibold">{partner.subscriptionPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Наступне списання
                        </span>
                        <span className="font-semibold">+30 днів</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Placeholder for bookings */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Мої бронювання</h2>
            <Card 
              className="p-8 border-[1px]"
              style={{ 
                backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                borderColor: 'var(--color-border, #797875)',
                borderOpacity: 0.2
              }}
            >
              <p className="text-center text-sm text-muted-foreground">
                Тут з'являться ваші бронювання
              </p>
            </Card>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
