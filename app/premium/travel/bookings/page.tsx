'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const bookings = {
  upcoming: [
    {
      id: 1,
      hotel: 'Premier Palace Hotel Kyiv',
      location: 'Київ, Україна',
      room: 'Deluxe',
      dates: '15.06 - 20.06.2026',
      nights: 5,
      total: 24000,
      status: 'confirmed',
    },
  ],
  completed: [
    {
      id: 2,
      hotel: 'Nobilis Hotel Lviv',
      location: 'Львів, Україна',
      room: 'Standard',
      dates: '10.01 - 13.01.2026',
      nights: 3,
      total: 7680,
      status: 'completed',
    },
  ],
  cancelled: [
    {
      id: 3,
      hotel: 'Hotel Paris Rivoli',
      location: 'Париж, Франція',
      room: 'Suite',
      dates: '20.03 - 25.03.2026',
      nights: 5,
      total: 60000,
      status: 'cancelled',
    },
  ],
}

export default function BookingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('upcoming')

  const stats = {
    totalSpent: bookings.upcoming[0].total + bookings.completed[0].total,
    totalNights: bookings.upcoming[0].nights + bookings.completed[0].nights,
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
        <h1 className="text-2xl font-bold">Мої бронювання</h1>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 grid grid-cols-2 gap-3 bg-card border-b">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-primary">₴{stats.totalSpent.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-1">Всього витрачено</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-primary">{stats.totalNights}</p>
          <p className="text-xs text-muted-foreground mt-1">Ночей заброньовано</p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b bg-background">
          <TabsList className="w-full justify-start rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="upcoming"
              className="rounded-none border-b-2 data-[state=active]:border-primary px-6 py-3 flex-1"
            >
              Майбутні
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="rounded-none border-b-2 data-[state=active]:border-primary px-6 py-3 flex-1"
            >
              Завершені
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="rounded-none border-b-2 data-[state=active]:border-primary px-6 py-3 flex-1"
            >
              Скасовані
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto">
          <TabsContent value="upcoming" className="mt-0 p-6 space-y-4">
            {bookings.upcoming.map((booking) => (
              <Card key={booking.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.hotel}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    Підтверджено
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Номер</span>
                    <span className="font-medium">{booking.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дати</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{booking.dates}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ночей</span>
                    <span className="font-medium">{booking.nights}</span>
                  </div>
                </div>
                <div className="pt-2 border-t flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Всього</span>
                  <span className="text-xl font-bold text-primary">
                    ₴{booking.total.toLocaleString()}
                  </span>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="mt-0 p-6 space-y-4">
            {bookings.completed.map((booking) => (
              <Card key={booking.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.hotel}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    Завершено
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Номер</span>
                    <span className="font-medium">{booking.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дати</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{booking.dates}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Всього</span>
                  <span className="text-xl font-bold">
                    ₴{booking.total.toLocaleString()}
                  </span>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="cancelled" className="mt-0 p-6 space-y-4">
            {bookings.cancelled.map((booking) => (
              <Card key={booking.id} className="p-4 space-y-3 opacity-60">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.hotel}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                    Скасовано
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Номер</span>
                    <span className="font-medium">{booking.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дати</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{booking.dates}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
