'use client'

import { useState } from 'react'
import { Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BottomSheet } from '@/components/bottom-sheet'

const insuranceProducts = [
  {
    title: 'Страховка скасування подорожей',
    desc: 'Захист від непередбачених обставин',
    price: '₴199/місяць',
    details: 'Отримайте компенсацію до 100% вартості подорожі при скасуванні через хворобу, нещасний випадок або інші форс-мажорні обставини. Страховка покриває квитки, готелі та інші витрати.',
  },
  {
    title: 'Туристична страховка',
    desc: 'Медичне страхування за кордоном',
    price: '₴149/місяць',
    details: 'Повне медичне страхування під час подорожей за кордон. Покриття до €50,000 на медичні витрати, включаючи госпіталізацію, екстрену допомогу та репатріацію. Працює в усіх країнах світу.',
  },
  {
    title: 'Страховка домашніх тварин',
    desc: 'Здоров\'я вашого улюбленця',
    price: '₴99/місяць',
    details: 'Комплексне страхування здоров\'я вашого домашнього улюбленця. Покриває ветеринарні візити, операції, ліки та профілактику. Компенсація до 80% вартості лікування.',
  },
]

export function InsuranceTab() {
  const [selectedInsurance, setSelectedInsurance] = useState<typeof insuranceProducts[0] | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const handleInsuranceClick = (insurance: typeof insuranceProducts[0]) => {
    setSelectedInsurance(insurance)
    setSheetOpen(true)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Страхування</h2>
      <div className="space-y-3">
        {insuranceProducts.map((insurance, index) => (
          <Card
            key={index}
            className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
            style={{ 
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
            }}
            onClick={() => handleInsuranceClick(insurance)}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(250, 206, 0, 0.1)' }}
              >
                <Shield className="w-6 h-6" style={{ color: 'var(--color-accent, #FACE00)' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{insurance.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{insurance.desc}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-accent, #FACE00)' }}>{insurance.price}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)}>
        {selectedInsurance && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: 'rgba(250, 206, 0, 0.1)' }}
              >
                <Shield className="w-8 h-8" style={{ color: 'var(--color-accent, #FACE00)' }} />
              </div>
              <h2 className="text-2xl font-bold">{selectedInsurance.title}</h2>
              <p className="text-lg font-semibold" style={{ color: 'var(--color-accent, #FACE00)' }}>{selectedInsurance.price}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">{selectedInsurance.details}</p>
            <Button 
              className="w-full h-12 cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-accent, #FACE00)', color: 'var(--color-dark, #0E0C00)' }}
              disabled
            >
              Оформити
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Функція буде доступна незабаром
            </p>
          </div>
        )}
      </BottomSheet>
    </div>
  )
}
