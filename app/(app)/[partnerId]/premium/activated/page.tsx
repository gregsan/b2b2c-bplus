'use client'

import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent} from '@/components/ui/tabs'
import { BottomNav } from '@/components/bottom-nav'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

import { PremiumBenefitsTab } from '@/components/premium-tabs/premium-benefits-tab'
import { PremiumServicesTab } from '@/components/premium-tabs/premium-services-tab'
import { TravelTab } from '@/components/premium-tabs/travel-tab'
import { InsuranceTab } from '@/components/premium-tabs/insurance-tab'
import { PartnersTab } from '@/components/premium-tabs/partners-tab'
import { PremiumTabsBar } from '@/components/premium-tabs/premium-tabs-bar'

export default function PremiumActivatedPage() {
  const router = useRouter()
  const params = useParams()
  const { partner, isPremium } = usePartner()
  const [selectedTab, setSelectedTab] = useState('benefits')

  const partnerId = params?.partnerId as string

  useEffect(() => {
    if (!isPremium && partnerId) {
      router.push(`/${partnerId}/premium`)
    }
  }, [isPremium, partnerId, router])

  if (!partner) return null
  if (!isPremium) return null

  const tabs = [
    'benefits',
    'services',
    ...(partner.type !== 'retail-zoo' && partner.type !== 'operator' ? ['travel'] : []),
    'insurance',
    'partners',
  ]

  const handleSwipe = (offset: number) => {
    const currentIndex = tabs.indexOf(selectedTab)
    if (offset > 50 && currentIndex > 0) {
      setSelectedTab(tabs[currentIndex - 1])
    } else if (offset < -50 && currentIndex < tabs.length - 1) {
      setSelectedTab(tabs[currentIndex + 1])
    }
  }

  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}
    >
      {/* Header */}
      <div
        className="px-6 pt-14 pb-4"
        style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="hover:bg-black/10 -ml-2 mb-2"
          style={{ color: 'var(--color-dark, #0E0C00)' }}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-2 mb-2">
          <h1
            className="text-2xl font-bold"
            style={{ color: 'var(--color-dark, #0E0C00)' }}
          >
            Premium
          </h1>
          <div
            className="px-2 py-0.5 rounded text-xs font-semibold"
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              color: 'var(--color-dark, #0E0C00)',
              border: '1px solid rgba(229, 229, 229, 0.2)',
            }}
          >
            Активний
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="flex-1 flex flex-col overflow-hidden"
      >
        {/* Tab bar */}
        <PremiumTabsBar selectedTab={selectedTab} />

        {/* Tab content */}
        <motion.div
          className="flex-1 overflow-y-auto pb-24"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, { offset }) => handleSwipe(offset.x)}
        >
          <TabsContent value="benefits" className="mt-0 p-6">
            <PremiumBenefitsTab />
          </TabsContent>

          <TabsContent value="services" className="mt-0 p-6">
            <PremiumServicesTab />
          </TabsContent>

          {partner.type !== 'retail-zoo' && partner.type !== 'pharmacy' && partner.type !== 'operator' && (
            <TabsContent value="travel" className="mt-0 p-6">
              <TravelTab />
            </TabsContent>
          )}

          <TabsContent value="insurance" className="mt-0 p-6">
            <InsuranceTab />
          </TabsContent>

          <TabsContent value="partners" className="mt-0 p-6">
            <PartnersTab />
          </TabsContent>
        </motion.div>
      </Tabs>

      <BottomNav />
    </div>
  )
}