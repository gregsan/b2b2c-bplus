'use client'

import { usePartner } from '@/contexts/partner-context'
import { HomeBankTemplate } from '@/components/home-bank'
import { HomeOperatorTemplate } from '@/components/home-operator'
import { BottomNav } from '@/components/bottom-nav'

export default function HomePage() {
  const { partner } = usePartner()

  if (!partner) {
    return null
  }

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
      {partner.type === 'bank' ? <HomeBankTemplate /> : <HomeOperatorTemplate />}
      <BottomNav />
    </div>
  )
}
