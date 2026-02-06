'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BottomSheet } from '@/components/bottom-sheet'
import { PartnerIcon } from '@/components/svg-placeholders'

const partners = [
  { slug: 'rozetka', name: 'Rozetka', offer: 'Кешбек 10%', type: 'cashback' },
  { slug: 'comfy', name: 'Comfy', offer: 'Кешбек 8%', type: 'cashback' },
  { slug: 'silpo', name: 'Silpo', offer: 'Знижка 15%', type: 'discount' },
  { slug: 'atb', name: 'АТБ', offer: 'Кешбек 12%', type: 'cashback' },
  { slug: 'varus', name: 'Varus', offer: 'Знижка 10%', type: 'discount' },
  { slug: 'apteka', name: 'Моя Аптека', offer: 'Знижка 20%', type: 'discount' },
]

export function PartnersTab() {
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const handlePartnerClick = (partner: typeof partners[0]) => {
    setSelectedPartner(partner)
    setSheetOpen(true)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Пропозиції партнерів</h2>
      <div className="grid grid-cols-2 gap-3">
        {partners.map((partner) => (
          <Card
            key={partner.slug}
            className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
            }}
            onClick={() => handlePartnerClick(partner)}
          >
            <div className="space-y-3">
              <div className="w-full h-20 flex items-center justify-center">
                <PartnerIcon partner={partner.slug} size={60} />
              </div>
              <div>
                <p className="font-semibold text-sm">{partner.name}</p>
                <div 
                  className="inline-block px-2 py-0.5 rounded mt-1 text-xs font-semibold"
                  style={{ 
                    backgroundColor: 'var(--color-accent, #FACE00)',
                    color: 'var(--color-dark, #0E0C00)'
                  }}
                >
                  {partner.offer}
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
                <PartnerIcon partner={selectedPartner.slug} size={96} />
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
              Отримуйте {selectedPartner.offer} при покупках в {selectedPartner.name} з Premium підпискою. 
              Бонуси автоматично нараховуються на ваш рахунок протягом 24 годин після покупки.
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
