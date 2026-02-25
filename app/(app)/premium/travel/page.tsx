'use client'

import { useState, useMemo } from 'react'
import { ArrowLeft, List, Map, SlidersHorizontal, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { hotels } from '@/lib/hotels-data'
import { HotelCardSkeleton } from '@/components/skeleton-loader'
import { staggerContainer, staggerItem } from '@/lib/animations'
import Link from 'next/link'

export default function TravelPage() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')
  const [destination, setDestination] = useState('all')
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('price')
  const [isLoading, setIsLoading] = useState(false)

  const filteredHotels = useMemo(() => {
    let filtered = [...hotels]
    
    if (destination !== 'all') {
      filtered = filtered.filter(h => h.city === destination)
    }

    filtered.sort((a, b) => {
      if (sortBy === 'price') {
        return a.premiumPrice - b.premiumPrice
      }
      return b.rating - a.rating
    })

    return filtered
  }, [destination, sortBy])

  const handleDestinationChange = (value: string) => {
    setIsLoading(true)
    setDestination(value)
    setTimeout(() => setIsLoading(false), 800)
  }

  const handleSortChange = (value: 'price' | 'rating') => {
    setIsLoading(true)
    setSortBy(value)
    setTimeout(() => setIsLoading(false), 600)
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
        <h1 className="text-2xl font-bold">Пошук готелів</h1>
      </div>

      {/* Search Form */}
      <div className="p-6 space-y-4 border-b bg-card">
        <div className="space-y-2">
          <Label htmlFor="destination">Місто</Label>
          <Select value={destination} onValueChange={handleDestinationChange}>
            <SelectTrigger id="destination">
              <SelectValue placeholder="Оберіть місто" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Всі міста</SelectItem>
              <SelectItem value="Київ">Київ</SelectItem>
              <SelectItem value="Львів">Львів</SelectItem>
              <SelectItem value="Одеса">Одеса</SelectItem>
              <SelectItem value="Париж">Париж</SelectItem>
              <SelectItem value="Барселона">Барселона</SelectItem>
              <SelectItem value="Рим">Рим</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="checkin">Заїзд</Label>
            <Input id="checkin" type="date" defaultValue="2026-06-15" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkout">Виїзд</Label>
            <Input id="checkout" type="date" defaultValue="2026-06-20" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Гості</Label>
          <Input id="guests" type="number" defaultValue={2} min={1} />
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 flex items-center gap-3 border-b bg-background">
        <div className="flex items-center gap-2 flex-1">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="h-9 border-0 shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">За ціною</SelectItem>
              <SelectItem value="rating">За рейтингом</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-1 bg-muted rounded-lg p-1">
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'map' ? 'default' : 'ghost'}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode('map')}
          >
            <Map className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto pb-6">
        {viewMode === 'list' ? (
          <div className="p-6 space-y-4">
            {isLoading ? (
              <>
                <HotelCardSkeleton />
                <HotelCardSkeleton />
                <HotelCardSkeleton />
              </>
            ) : (
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {filteredHotels.map((hotel) => (
                  <motion.div key={hotel.id} variants={staggerItem}>
                    <Link href={`/premium/travel/hotel/${hotel.id}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                          <div className="relative">
                            <img
                              src={`https://picsum.photos/390/200?random=${hotel.id}`}
                              alt={hotel.name}
                              className="w-full h-40 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                          <div className="p-4 space-y-2">
                            <div>
                              <h3 className="font-semibold text-lg">{hotel.name}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {hotel.location}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                              <span className="font-semibold">{hotel.rating}</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-xs text-muted-foreground line-through">
                                ₴{hotel.price}
                              </span>
                              <span className="text-xl font-bold text-primary">
                                ₴{hotel.premiumPrice}
                              </span>
                              <span className="text-xs text-muted-foreground">/ніч</span>
                              <span className="ml-auto text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                                -20% Premium
                              </span>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-6">
            <div className="text-center space-y-2">
              <Map className="w-12 h-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">
                Режим карти буде доступний незабаром
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
