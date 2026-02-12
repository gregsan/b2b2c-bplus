'use client'

import { useState } from 'react'
import { Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BottomSheet } from '@/components/bottom-sheet'
import { usePartner } from '@/contexts/partner-context'
import { insuranceByType, type InsuranceProduct } from '@/data/insurance/insurance-data'

export function InsuranceTab() {
  const { partner } = usePartner()
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceProduct | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  // ✅ Використовуємо дані з файлу
  const insuranceProducts = partner 
    ? insuranceByType[partner.type] || []
    : []

  const handleInsuranceClick = (insurance: InsuranceProduct) => {
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
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
              >
                <Shield className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{insurance.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{insurance.desc}</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>{insurance.price}</p>
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
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
              >
                <Shield className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
              </div>
              <h2 className="text-2xl font-bold">{selectedInsurance.title}</h2>
              <p className="text-lg font-semibold" style={{ color: 'var(--color-accent)' }}>{selectedInsurance.price}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">{selectedInsurance.details}</p>
            <Button 
              className="w-full h-12 cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark)' }}
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