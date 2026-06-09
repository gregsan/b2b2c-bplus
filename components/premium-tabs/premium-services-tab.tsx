'use client'

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { usePartner } from '@/contexts/partner-context'
import { ServiceIcon } from '@/components/svg-placeholders'
import { LayoutGrid } from 'lucide-react'

export function PremiumServicesTab() {
  const router = useRouter()
  const { partner } = usePartner()
  if (!partner) return null

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <LayoutGrid className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
        <h2 className="text-xl font-bold">Доступні підписки</h2>
      </div>

      <div className="space-y-3">
        {partner.services.map((service) => (
          <Card
            key={service.id}
            className="p-4 cursor-pointer hover:bg-muted/50 transition-colors border-[1px]"
            style={{
              backgroundColor: 'var(--color-card-bg, #F7F7F9)',
              borderColor: 'var(--color-border, #797875)',
              border: '1px solid rgba(229, 229, 229, 0.2)',
            }}
            onClick={() => router.push(`/${partner.id}/premium/service/${service.id}`)}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center">
                {service.logo ? (
                  <div className="w-[65px] h-[65px] rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                    <img src={service.logo} alt={service.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <ServiceIcon service={service.id} size={60} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-base">{service.name}</p>
                <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
