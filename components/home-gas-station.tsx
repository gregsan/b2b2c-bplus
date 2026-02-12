'use client'

import { Crown, Fuel, Car, ShoppingBag, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AvatarPlaceholder } from '@/components/svg-placeholders'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function HomeGasStationTemplate() {
  const params = useParams()
  const partnerId = params?.partnerId as string

  return (
    <>
      {/* Header */}
      <div 
        className="px-6 pt-14 pb-8"
        style={{ backgroundColor: 'var(--color-accent, #0066FF)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AvatarPlaceholder initial="О" size={48} />
            <div>
              <p className="text-sm opacity-70" style={{ color: 'var(--color-dark, #001A33)' }}>Вітаємо,</p>
              <p className="text-lg font-semibold" style={{ color: 'var(--color-dark, #001A33)' }}>Олексій</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm opacity-70" style={{ color: 'var(--color-dark, #001A33)' }}>Баланс бонусів</p>
          <p className="text-4xl font-bold" style={{ color: 'var(--color-dark, #001A33)' }}>1,250 балів</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {/* Active card */}
          <Card 
            className="p-6 border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F0F4F8)',
              borderColor: 'var(--color-border, #6B7B8C)',
              border: '1px solid rgba(229, 229, 229, 0.2)'
            }}
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Активна картка</p>
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-lg font-semibold mt-1" style={{ color: 'var(--color-accent, #0066FF)' }}>-2 ₴/л</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Знижка на паливо
                  </span>
                  <span className="font-semibold">-2 ₴/л</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Знижка на мийку</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Знижка в магазині</span>
                  <span className="font-semibold">5%</span>
                </div>
              </div>
            </div>
          </Card>

            {/* Promo card */}
            <Link href={`/${partnerId}/premium`} className="mt-6 block">
              <Card 
                className="p-6  cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
                style={{ 
                  backgroundColor: 'var(--color-card-bg, #F0F4F8)',
                  borderColor: 'var(--color-border, #6B7B8C)',
                  border: '1px solid rgba(229, 229, 229, 0.2)'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold border"
                      style={{ 
                        backgroundColor: 'var(--color-accent, #0066FF)',
                        color: 'var(--color-dark, #001A33)',
                        borderColor: 'var(--color-dark, #001A33)',
                        border: '1px solid rgba(229, 229, 229, 0.2)'
                      }}
                    >
                      <Crown className="w-3 h-3" />
                      <span>Premium</span>
                    </div>
                    <h3 className="text-lg font-bold">Активуйте Premium</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Отримайте ексклюзивні переваги та послуги
                    </p>
                  </div>
                  <Crown className="w-16 h-16" style={{ color: 'var(--color-accent, #0066FF)' }} />
                </div>
              </Card>
            </Link>


          {/* Refueling statistics */}
          <Card 
            className="p-6 border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F0F4F8)',
              borderColor: 'var(--color-border, #6B7B8C)',
              border: '1px solid rgba(229, 229, 229, 0.2)'
            }}
          >
            <h3 className="font-semibold mb-4">Статистика за місяць</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                >
                  <Fuel className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">145 літрів</p>
                  <p className="text-xs text-muted-foreground">Заправлено</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                >
                  <Car className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">8 візитів</p>
                  <p className="text-xs text-muted-foreground">Відвідувань</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                >
                  <ShoppingBag className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">₴450</p>
                  <p className="text-xs text-muted-foreground">В магазині</p>
                </div>
              </div>
            </div>
          </Card>


          {/* Quick actions */}
          <div className="space-y-3">
            <h3 className="font-semibold">Швидкі дії</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                <MapPin className="w-5 h-5" />
                Знайти АЗС
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                <Fuel className="w-5 h-5" />
                Історія заправок
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}