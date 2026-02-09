'use client'

import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BottomNav } from '@/components/bottom-nav'
import { useState, useEffect } from 'react'


// Import existing tab components
import { Card } from '@/components/ui/card'
import { ServiceIcon } from '@/components/svg-placeholders'
import { TravelTab } from '@/components/premium-tabs/travel-tab'
import { InsuranceTab } from '@/components/premium-tabs/insurance-tab'
import { PartnersTab } from '@/components/premium-tabs/partners-tab'
import { motion } from 'framer-motion'

export default function PremiumActivatedPage() {
  const router = useRouter()
  const params = useParams()
  const { partner, isPremium } = usePartner()
  const [selectedTab, setSelectedTab] = useState('benefits')
  const tabs = ['benefits', 'services', 'travel', 'insurance', 'partners']

  const partnerId = params?.partnerId as string

    useEffect(() => {
      if (!isPremium && partnerId) {
        router.push(`/${partnerId}/premium`)
      }
    }, [isPremium, partnerId, router])

    const handleSwipe = (offset: number) => {
      const currentIndex = tabs.indexOf(selectedTab)
      if (offset > 50 && currentIndex > 0) {
        setSelectedTab(tabs[currentIndex - 1])
      } else if (offset < -50 && currentIndex < tabs.length - 1) {
        setSelectedTab(tabs[currentIndex + 1])
      }
    }

    if (!partner) return null
    if (!isPremium) return null


  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--color-page-bg, #FAFAFA)' }}>
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
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-dark, #0E0C00)' }}>Premium</h1>
          <div 
            className="px-2 py-0.5 rounded text-xs font-semibold border"
            style={{ 
              backgroundColor: 'rgba(0,0,0,0.1)',
              color: 'var(--color-dark, #0E0C00)',
              borderColor: 'var(--color-dark, #0E0C00)',
              border: '1px solid rgba(229, 229, 229, 0.2)'
            }}
          >
            Активний
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="flex-1 flex flex-col overflow-hidden">
        <div 
          className="relative border-b"
          style={{ 
            backgroundColor: 'var(--color-page-bg, #FAFAFA)',
            borderColor: 'var(--color-border, #797875)',
            border: '1px solid rgba(229, 229, 229, 0.3)'
          }}
        >
          <div className="overflow-x-auto scrollbar-hide scroll-smooth">
            <TabsList className="inline-flex justify-start rounded-none h-auto p-0 bg-transparent min-w-full w-max">
              <TabsTrigger 
                value="benefits" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-current px-6 py-3 min-w-[120px]"
                style={{ color: selectedTab === 'benefits' ? 'var(--color-accent, #FACE00)' : 'inherit' }}
              >
                Переваги
              </TabsTrigger>
              <TabsTrigger 
                value="services" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-current px-6 py-3 min-w-[120px]"
                style={{ color: selectedTab === 'services' ? 'var(--color-accent, #FACE00)' : 'inherit' }}
              >
                Сервіси
              </TabsTrigger>
              <TabsTrigger 
                value="travel" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-current px-6 py-3 min-w-[120px]"
                style={{ color: selectedTab === 'travel' ? 'var(--color-accent, #FACE00)' : 'inherit' }}
              >
                Подорожі
              </TabsTrigger>
              <TabsTrigger 
                value="insurance" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-current px-6 py-3 min-w-[120px]"
                style={{ color: selectedTab === 'insurance' ? 'var(--color-accent, #FACE00)' : 'inherit' }}
              >
                Страховка
              </TabsTrigger>
              <TabsTrigger 
                value="partners" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-current px-6 py-3 min-w-[120px]"
                style={{ color: selectedTab === 'partners' ? 'var(--color-accent, #FACE00)' : 'inherit' }}
              >
                Партнери
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <motion.div 
          className="flex-1 overflow-y-auto pb-24"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, { offset }) => handleSwipe(offset.x)}
        >
          <TabsContent value="benefits" className="mt-0 p-6 space-y-3">
            {partner.benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-4 border-[1px]"
                style={{ 
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                  borderColor: 'var(--color-border, #797875)',
                  border: '1px solid rgba(229, 229, 229, 0.2)'
                }}
              >
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="services" className="mt-0 p-6 space-y-3">
            {partner.services.map((service) => (
              <Card 
                key={service.id}
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
                style={{ 
                  backgroundColor: 'var(--color-card-bg, #F7F7F9)',
                  borderColor: 'var(--color-border, #797875)',
                  border: '1px solid rgba(229, 229, 229, 0.2)'
                }}
                onClick={() => router.push(`/${partnerId}/premium/service/${service.id}`)}
              >
                <div className="flex items-center gap-4">
                  <ServiceIcon service={service.id} size={60} />
                  <div className="flex-1">
                    <p className="font-semibold text-base">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                  </div>
                  <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="travel" className="mt-0 p-6">
            <TravelTab />
          </TabsContent>

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
