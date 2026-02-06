'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Building2 } from 'lucide-react'

type Partner = {
  id: string
  name: string
}

export default function PartnersPage() {
  const router = useRouter()
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/partners')
      .then(res => res.json())
      .then(data => {
        setPartners(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="min-h-screen bg-background p-6 flex items-center justify-center">
      <p>Завантаження...</p>
    </div>
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Виберіть партнера</h1>
          <p className="text-muted-foreground">
            Оберіть свого оператора або банк для продовження
          </p>
        </div>

        <div className="space-y-3">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="p-6 cursor-pointer hover:bg-muted/50 transition-colors bg-card border-[1px] border-border/20"
              onClick={() => router.push(`/${partner.id}/home`)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{partner.name}</h3>
                </div>
                <svg className="w-5 h-5 text-muted-foreground ml-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}