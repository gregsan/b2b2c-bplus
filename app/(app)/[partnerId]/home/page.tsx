'use client'

import { usePartner } from '@/contexts/partner-context'
import { HomeBankTemplate } from '@/components/home-bank'
import { HomeOperatorTemplate } from '@/components/home-operator'
import { HomeGasStationTemplate } from '@/components/home-gas-station'
import { HomeRetailFoodTemplate } from '@/components/home-retail-food'
import { HomeRetailZooTemplate } from '@/components/home-retail-zoo' 
import { BottomNav } from '@/components/bottom-nav'

export default function HomePage() {
  const { partner } = usePartner()

  if (!partner) {
    return null
  }

  const renderTemplate = () => {
    switch (partner.type) {
      case 'bank':
        return <HomeBankTemplate />
      case 'operator':
        return <HomeOperatorTemplate />
      case 'gas-station':
        return <HomeGasStationTemplate />
      case 'retail-food':
        return <HomeRetailFoodTemplate />
      case 'retail-zoo':
        return <HomeRetailZooTemplate />
      default:
        return <HomeBankTemplate />
    }
  }

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {renderTemplate()}
      <BottomNav />
    </div>
  )
}
