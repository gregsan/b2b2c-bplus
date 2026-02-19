'use client'

import { Crown, ShoppingCart, Store, Receipt, Tag, MapPin, DiamondPercent } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AvatarPlaceholder } from '@/components/svg-placeholders'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function HomeRetailFoodTemplate() {
  const params = useParams()
  const partnerId = params?.partnerId as string

  return (
    <>
      {/* Header */}
      <div 
        className="px-6 pt-14 pb-8"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AvatarPlaceholder initial="О" size={48} />
            <div>
              <p className="text-sm opacity-70" style={{ color: 'var(--color-dark)' }}>Вітаємо,</p>
              <p className="text-lg font-semibold" style={{ color: 'var(--color-dark)' }}>Олексій</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm opacity-70" style={{ color: 'var(--color-dark)' }}>Бонусний рахунок</p>
          <p className="text-4xl font-bold" style={{ color: 'var(--color-dark)' }}>3,480 балів</p>
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
              border: '1px solid rgba(229, 229, 229, 0.2)'
            }}
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Картка лояльності</p>
                <h3 className="text-2xl font-bold">Silver</h3>
                <p className="text-lg font-semibold mt-1" style={{ color: 'var(--color-accent)' }}>
                  Кешбек 5%
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Кешбек на всі товари</span>
                  <span className="font-semibold">5%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Знижка на власну марку</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Безкоштовна доставка</span>
                  <span className="font-semibold">від ₴500</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Promo card */}
          <Link href={`/${partnerId}/premium`} className="block">
            <Card 
              className="p-6 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
              style={{ 
                backgroundColor: 'var(--color-card-bg, #F0F4F8)',
                border: '1px solid rgba(229, 229, 229, 0.2)'
              }}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold"
                    style={{ 
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--color-dark)',
                      border: '1px solid rgba(229, 229, 229, 0.2)'
                    }}
                  >
                    <Crown className="w-3 h-3" />
                    <span>Premium</span>
                  </div>
                  <h3 className="text-lg font-bold">Активуйте Premium</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Отримайте ексклюзивні знижки та переваги
                  </p>
                </div>
                <Crown className="w-16 h-16" style={{ color: 'var(--color-accent)' }} />
              </div>
            </Card>
          </Link>

          {/* Shopping statistics */}
          <Card 
            className="p-6 border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F0F4F8)',
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
                  <ShoppingCart className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">₴4,230</p>
                  <p className="text-xs text-muted-foreground">Витрачено</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                >
                  <Store className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">12 візитів</p>
                  <p className="text-xs text-muted-foreground">Відвідувань</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                >
                  <DiamondPercent className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">₴211 балів</p>
                  <p className="text-xs text-muted-foreground">Нараховано кешбеку</p>
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
                Знайти магазин
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                <Tag className="w-5 h-5" />
                Акції тижня
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}