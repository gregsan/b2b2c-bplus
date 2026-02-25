'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, CreditCard } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { hotels } from '@/lib/hotels-data'
import { BottomNav } from '@/components/bottom-nav'

export default function BookingPage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string
  const partnerId = params?.partnerId as string
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  const hotel = hotels.find(h => h.id === id)

  if (!hotel) {
    return <div className="h-screen flex items-center justify-center">Hotel not found</div>
  }

  const handleBooking = () => {
    // Simulate booking
    router.push(`/${partnerId}/premium/travel/bookings`)
  }

  return (
    <div className="min-h-screen flex flex-col pb-24" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {/* Header */}
      <div className="px-6 pt-14 pb-4" style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="hover:bg-black/10 -ml-2 mb-2"
          style={{ color: 'var(--color-dark, #0E0C00)' }}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-dark, #0E0C00)' }}>Бронювання</h1>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-center gap-2 py-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full ${s === step ? 'w-8' : ''}`}
            style={{ 
              backgroundColor: s === step ? 'var(--color-accent, #FACE00)' : '#ddd'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        <Card className="p-4 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
          <h3 className="font-semibold mb-1">{hotel.name}</h3>
          <p className="text-sm text-muted-foreground">{hotel.location}</p>
        </Card>

        {/* Step 1: Select Room */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Оберіть номер</h2>
            {hotel.rooms.map((room, i) => (
              <Card 
                key={i}
                className={`p-4 cursor-pointer border-[1px] ${selectedRoom === room ? 'ring-2' : ''}`}
                style={{ 
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                  borderColor: selectedRoom === room ? 'var(--color-accent, #FACE00)' : 'var(--color-border, #797875)'
                }}
                onClick={() => setSelectedRoom(room)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{room.type}</p>
                    <p className="text-sm text-muted-foreground line-through">₴{room.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: 'var(--color-accent, #FACE00)' }}>₴{room.premiumPrice}</p>
                    <p className="text-xs text-muted-foreground">/ніч</p>
                  </div>
                </div>
              </Card>
            ))}
            <Button 
              className="w-full h-12"
              disabled={!selectedRoom}
              onClick={() => setStep(2)}
              style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}
            >
              Продовжити
            </Button>
          </div>
        )}

        {/* Step 2: Dates */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Дати проживання</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Заїзд</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input type="date" className="pl-10" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Виїзд</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input type="date" className="pl-10" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep(1)}>Назад</Button>
              <Button 
                className="flex-1"
                onClick={() => setStep(3)}
                style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}
              >
                Продовжити
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Оплата</h2>
            <Card className="p-4 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Основна картка</p>
                  <p className="text-sm text-muted-foreground">•••• 4567</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Номер:</span>
                  <span className="font-semibold">{selectedRoom?.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ціна за ніч:</span>
                  <span className="font-semibold">₴{selectedRoom?.premiumPrice}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>До сплати:</span>
                  <span style={{ color: 'var(--color-accent, #FACE00)' }}>₴{selectedRoom?.premiumPrice}</span>
                </div>
              </div>
            </Card>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep(2)}>Назад</Button>
              <Button 
                className="flex-1"
                onClick={handleBooking}
                style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}
              >
                Підтвердити бронювання
              </Button>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
