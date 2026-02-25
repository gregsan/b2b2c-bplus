'use client'

import { ArrowLeft, Star, MapPin, Wifi, Coffee, Dumbbell } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { hotels } from '@/lib/hotels-data'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function HotelDetailPage() {
  const router = useRouter()
  const params = useParams()
  const hotel = hotels.find(h => h.id === params.id)

  if (!hotel) {
    return <div>Hotel not found</div>
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="relative">
        <img
          src={`https://picsum.photos/390/300?random=${hotel.id}`}
          alt={hotel.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold mb-1">{hotel.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{hotel.location}</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{hotel.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({hotel.reviews.length} відгуків)
              </span>
            </div>
          </div>

          {/* Gallery */}
          <motion.div
            className="grid grid-cols-3 gap-2"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.img
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={`https://picsum.photos/120/120?random=${hotel.id}-${i}`}
                alt={`Gallery ${i}`}
                className="w-full h-24 object-cover rounded-lg cursor-pointer shadow-sm"
              />
            ))}
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      ₴{hotel.price}
                    </span>
                    <span className="text-3xl font-bold text-primary">
                      ₴{hotel.premiumPrice}
                    </span>
                    <span className="text-sm text-muted-foreground">/ніч</span>
                  </div>
                  <p className="text-sm font-semibold text-green-600 mt-1">
                    Економія ₴{hotel.price - hotel.premiumPrice} з Premium
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Amenities */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold">Зручності</h2>
            <div className="grid grid-cols-2 gap-2">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    {index % 3 === 0 && <Wifi className="w-4 h-4 text-primary" />}
                    {index % 3 === 1 && <Coffee className="w-4 h-4 text-primary" />}
                    {index % 3 === 2 && <Dumbbell className="w-4 h-4 text-primary" />}
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold">Відгуки</h2>
            <div className="space-y-3">
              {hotel.reviews.map((review, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold">{review.author}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-2">
                    {review.text}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Rooms */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold">Типи номерів</h2>
            <div className="space-y-3">
              {hotel.rooms.map((room, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{room.type}</p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs text-muted-foreground line-through">
                          ₴{room.price}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          ₴{room.premiumPrice}
                        </span>
                        <span className="text-xs text-muted-foreground">/ніч</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
        <Button
          className="w-full h-12 text-lg font-semibold"
          onClick={() => router.push(`/premium/travel/booking/${hotel.id}`)}
        >
          Забронювати
        </Button>
      </div>
    </div>
  )
}
