'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { List, Map, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { hotels } from '@/lib/hotels-data'

export function TravelTab() {
  const router = useRouter()
  const params = useParams()
  const partnerId = params?.partnerId as string
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [destination, setDestination] = useState('all')

  const filteredHotels = destination === 'all' 
    ? hotels 
    : hotels.filter(h => h.city === destination)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Бронювання готелів</h2>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'map' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('map')}
          >
            <Map className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Search Form */}
      <Card className="p-4 space-y-3 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
        <div className="space-y-2">
          <label className="text-sm font-medium">Напрямок</label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Всі міста</SelectItem>
              <SelectItem value="Київ">Київ</SelectItem>
              <SelectItem value="Львів">Львів</SelectItem>
              <SelectItem value="Одеса">Одеса</SelectItem>
              <SelectItem value="Берлін">Берлін</SelectItem>
              <SelectItem value="Варшава">Варшава</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Заїзд</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="date" className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Виїзд</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="date" className="pl-10" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Гості</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="number" placeholder="2" className="pl-10" min="1" />
          </div>
        </div>

        <Button className="w-full" style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}>
          Знайти готелі
        </Button>
      </Card>

      {/* My Bookings Link */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => router.push(`/${partnerId}/premium/travel/bookings`)}
      >
        Мої бронювання
      </Button>

      {/* Hotel List */}
      {viewMode === 'list' && (
        <div className="space-y-3">
          {filteredHotels.slice(0, 6).map((hotel) => (
            <Card
              key={hotel.id}
              className="overflow-hidden cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
              style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}
              onClick={() => router.push(`/${partnerId}/premium/travel/hotel/${hotel.id}`)}
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/390/160?random=${hotel.id}`}
                  alt={hotel.name}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground">{hotel.location}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{hotel.rating}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-muted-foreground line-through">₴{hotel.price}</span>
                  <span className="text-xl font-bold" style={{ color: 'var(--color-accent, #FACE00)' }}>₴{hotel.premiumPrice}</span>
                  <span className="text-xs text-muted-foreground">/ніч</span>
                  <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                    -20% Premium
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Map View */}
      {viewMode === 'map' && (
        <Card className="p-8 text-center border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
          <Map className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Перегляд карти буде доступний незабаром</p>
        </Card>
      )}
    </div>
  )
}
