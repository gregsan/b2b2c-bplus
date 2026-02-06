'use client'

import React from "react"

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import privatbankData from '@/data/partners/privatbank.json'
import kyivstarData from '@/data/partners/kyivstar.json'
import type { PartnerConfig } from '@/types/partner'

const partnerData: Record<string, PartnerConfig> = {
  privatbank: privatbankData as PartnerConfig,
  kyivstar: kyivstarData as PartnerConfig,
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const params = useParams()
  const { partner, setPartner } = usePartner()
  const partnerId = params?.partnerId as string

  useEffect(() => {
    if (partnerId) {
      const partnerConfig = partnerData[partnerId]
      if (!partnerConfig) {
        router.push('/partners')
        return
      }
      if (!partner || partner.id !== partnerId) {
        setPartner(partnerConfig)
      }
    }
  }, [partnerId, partner, setPartner, router])

  if (!partner) {
    return null
  }

  return <>{children}</>
}
