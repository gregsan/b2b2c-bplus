'use client'

import { ArrowLeft, Star, MapPin } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { hotels } from '@/lib/hotels-data'
import { BottomNav } from '@/components/bottom-nav'

export default function HotelDetailPage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string
  const partnerId = params?.partnerId as string

  const hotel = hotels.find(h => h.id === id)

  if (!hotel) {
    return <div className="h-screen flex items-center justify-center">Hotel not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col pb-24" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {/* Header */}
      <div className="relative">
        <img
          src={`https://picsum.photos/440/300?random=${hotel.id}`}
          alt={hotel.name}
          className="w-full h-64 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Hotel Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{hotel.name}</h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span>{hotel.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{hotel.rating}</span>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="font-bold mb-3">Зручності</h2>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full text-sm border"
                style={{ 
                  borderColor: 'var(--color-border, #797875)',
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)'
                }}
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Price Card */}
        <Card className="p-4 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through">₴{hotel.price}</span>
                <span className="text-3xl font-bold" style={{ color: 'var(--color-accent, #FACE00)' }}>₴{hotel.premiumPrice}</span>
                <span className="text-sm text-muted-foreground">/ніч</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 inline-block mt-2">
                -20% Premium знижка
              </span>
            </div>
            <Button 
              onClick={() => router.push(`/${partnerId}/premium/travel/booking/${hotel.id}`)}
              style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}
            >
              Забронювати
            </Button>
          </div>
        </Card>

        {/* Reviews */}
        <div>
          <h2 className="font-bold mb-3">Відгуки</h2>
          <div className="space-y-3">
            {hotel.reviews.map((review, i) => (
              <Card key={i} className="p-4 border-[1px]" style={{ backgroundColor: 'var(--color-card-bg, #F7F7F9)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{review.author}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{review.text}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
