'use client'

import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePartner } from '@/contexts/partner-context'

interface PremiumTabsBarProps {
  selectedTab: string
}

const triggerClass =
  'flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-current px-6 py-3 min-w-[120px]'

export function PremiumTabsBar({ selectedTab }: PremiumTabsBarProps) {
  const { partner } = usePartner()
  if (!partner) return null

  return (
    <div
      className="relative border-b"
      style={{
        backgroundColor: 'var(--color-page-bg, #FAFAFA)',
        border: '1px solid rgba(229, 229, 229, 0.3)',
      }}
    >
      <div className="overflow-x-auto scrollbar-hide scroll-smooth">
        <TabsList className="inline-flex justify-start rounded-none h-auto p-0 bg-transparent min-w-full w-max">
          <TabsTrigger
            value="benefits"
            className={triggerClass}
            style={{ color: selectedTab === 'benefits' ? 'var(--color-accent)' : 'inherit' }}
          >
            Переваги
          </TabsTrigger>
          <TabsTrigger
            value="services"
            className={triggerClass}
            style={{ color: selectedTab === 'services' ? 'var(--color-accent)' : 'inherit' }}
          >
            Підписки
          </TabsTrigger>
          {partner.type !== 'retail-zoo' &&
            partner.type !== 'pharmacy' &&
            partner.type !== 'operator' && (
              <TabsTrigger
                value="travel"
                className={triggerClass}
                style={{ color: selectedTab === 'travel' ? 'var(--color-accent)' : 'inherit' }}
              >
                Подорожі
              </TabsTrigger>
            )}
          <TabsTrigger
            value="insurance"
            className={triggerClass}
            style={{ color: selectedTab === 'insurance' ? 'var(--color-accent)' : 'inherit' }}
          >
            Страхування
          </TabsTrigger>
          <TabsTrigger
            value="partners"
            className={triggerClass}
            style={{ color: selectedTab === 'partners' ? 'var(--color-accent)' : 'inherit' }}
          >
            Пропозиції
          </TabsTrigger>
        </TabsList>
      </div>
    </div>
  )
}
