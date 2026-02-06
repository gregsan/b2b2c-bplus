'use client'

import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BottomNav } from '@/components/bottom-nav'

export default function BookingsPage() {
  const router = useRouter()

  // Mock booking data
  const bookings = [
    {
      id: 1,
      hotel: 'Premier Palace Hotel Kyiv',
      location: 'Київ, Україна',
      checkIn: '24.02.2026',
      checkOut: '27.02.2026',
      room: 'Deluxe',
      status: 'confirmed',
    },
  ]

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
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-dark, #0E0C00)' }}>Мої бронювання</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {bookings.length > 0 ? (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id} className="p-4 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.hotel}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{booking.checkIn} - {booking.checkOut}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Номер</p>
                      <p className="font-semibold">{booking.room}</p>
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        color: '#16a34a'
                      }}
                    >
                      Підтверджено
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">У вас поки немає бронювань</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
