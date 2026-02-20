'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BottomSheet } from '@/components/bottom-sheet'
import { PartnerIcon } from '@/components/svg-placeholders'
import { usePartner } from '@/contexts/partner-context'
import type { PartnerOffer } from '@/types/partner'

export function PartnersTab() {
  const { partner } = usePartner()
  const [selectedPartner, setSelectedPartner] = useState<PartnerOffer | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const partners = partner?.partnerOffers || []

  const handlePartnerClick = (offer: PartnerOffer) => {
    setSelectedPartner(offer)
    setSheetOpen(true)
  }

  if (partners.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Пропозиції партнерів</h2>
        <p className="text-sm text-muted-foreground">Пропозиції партнерів незабаром з'являться</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Пропозиції партнерів</h2>
      <div className="grid grid-cols-2 gap-3">
        {partners.map((offer) => (
          <Card
            key={offer.slug}
            className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
            }}
            onClick={() => handlePartnerClick(offer)}
          >
            <div className="space-y-3">
              {offer.logo ? (
                <div className="w-[80px] h-[80px] rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                  <img src={offer.logo} alt={offer.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <PartnerIcon partner={offer.slug} size={60} />
              )}
              <div>
                <p className="font-semibold text-sm">{offer.name}</p>
                <div 
                  className="inline-block px-2 py-0.5 rounded mt-1 text-xs font-semibold"
                  style={{ 
                    backgroundColor: 'var(--color-accent, #FACE00)',
                    color: 'var(--color-dark, #0E0C00)'
                  }}
                >
                  {offer.offer}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)}>
        {selectedPartner && (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto">
                {selectedPartner.logo ? (
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-3">
                    <img src={selectedPartner.logo} alt={selectedPartner.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <PartnerIcon partner={selectedPartner.slug} size={96} />
                )}
              </div>
              <h2 className="text-2xl font-bold">{selectedPartner.name}</h2>
              <div 
                className="inline-block px-4 py-1.5 rounded text-base font-semibold"
                style={{ 
                  backgroundColor: 'var(--color-accent, #FACE00)',
                  color: 'var(--color-dark, #0E0C00)'
                }}
              >
                {selectedPartner.offer}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {selectedPartner.description}
            </p>
            <Button 
              className="w-full h-12"
              style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}
            >
              Активувати пропозицію
            </Button>
          </div>
        )}
      </BottomSheet>
    </div>
  )
}