'use client'

import { useState } from 'react'
import { ArrowLeft, CreditCard, Check } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { hotels } from '@/lib/hotels-data'

const cards = [
  { id: 1, name: 'Visa Platinum', last4: '4532', color: 'from-blue-500 to-blue-700' },
  { id: 2, name: 'Mastercard Gold', last4: '8891', color: 'from-amber-500 to-amber-700' },
]

export default function BookingPage() {
  const router = useRouter()
  const params = useParams()
  const hotel = hotels.find(h => h.id === params.id)
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  if (!hotel) {
    return <div>Hotel not found</div>
  }

  const handleConfirm = () => {
    router.push('/premium/travel/bookings')
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-6 pt-14 pb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="text-white hover:bg-white/20 -ml-2 mb-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold">Бронювання</h1>
        <p className="text-white/90">{hotel.name}</p>
      </div>

      {/* Steps */}
      <div className="px-6 py-4 flex items-center gap-2 border-b">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= s
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 3 && (
              <div className={`flex-1 h-0.5 ${step > s ? 'bg-primary' : 'bg-muted'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {step === 1 && (
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-bold">Оберіть тип номера</h2>
            <div className="space-y-3">
              {hotel.rooms.map((room, index) => (
                <Card
                  key={index}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedRoom === index
                      ? 'border-primary bg-primary/5'
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedRoom(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{room.type}</p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-lg font-bold text-primary">
                          ₴{room.premiumPrice}
                        </span>
                        <span className="text-xs text-muted-foreground">/ніч</span>
                      </div>
                    </div>
                    {selectedRoom === index && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-bold">Оберіть спосіб оплати</h2>
            <div className="space-y-3">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedCard === card.id
                      ? 'border-primary bg-primary/5'
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCard(card.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-10 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center`}>
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{card.name}</p>
                        <p className="text-sm text-muted-foreground">•••• {card.last4}</p>
                      </div>
                    </div>
                    {selectedCard === card.id && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Деталі бронювання</h2>
            </div>

            <Card className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Готель</span>
                <span className="font-semibold text-right">{hotel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Номер</span>
                <span className="font-semibold">{hotel.rooms[selectedRoom].type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Дати</span>
                <span className="font-semibold">15.06 - 20.06.2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ночей</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between items-baseline">
                <span className="font-semibold">Всього</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ₴{hotel.rooms[selectedRoom].premiumPrice * 5}
                  </div>
                  <div className="text-xs text-muted-foreground line-through">
                    ₴{hotel.rooms[selectedRoom].price * 5}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
        {step < 3 ? (
          <Button
            className="w-full h-12 text-lg font-semibold"
            onClick={() => setStep(step + 1)}
            disabled={step === 1 && selectedRoom === null || step === 2 && selectedCard === null}
          >
            Далі
          </Button>
        ) : (
          <Button
            className="w-full h-12 text-lg font-semibold"
            onClick={handleConfirm}
          >
            Підтвердити бронювання
          </Button>
        )}
      </div>
    </div>
  )
}
