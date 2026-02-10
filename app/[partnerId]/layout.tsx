'use client'

import React from "react"

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { usePartner } from '@/contexts/partner-context'
import abankData from '@/data/partners/abank.json'
import bizbankData from '@/data/partners/bizbank.json'
import ideabankData from '@/data/partners/ideabank.json'
import kredobankData from '@/data/partners/kredobank.json'
import mtbbankData from '@/data/partners/mtbbank.json'
import pravexbankData from '@/data/partners/pravexbank.json'
import raiffeisenData from '@/data/partners/raiffeisen.json'
import ukrsibbankData from '@/data/partners/ukrsibbank.json'
import allianceData from '@/data/partners/alliance.json'
import creditagricoleData from '@/data/partners/creditagricole.json'
import izibankData from '@/data/partners/izibank.json'
import kyivstarData from '@/data/partners/kyivstar.json'
import otpbankData from '@/data/partners/otpbank.json'
import privatbankData from '@/data/partners/privatbank.json'
import tascombankData from '@/data/partners/tascombank.json'
import asviobankData from '@/data/partners/asviobank.json'
import globusbankData from '@/data/partners/globusbank.json'
import kreditdniproData from '@/data/partners/kreditdnipro.json'
import lifecellData from '@/data/partners/lifecell.json'
import piraeusbankData from '@/data/partners/piraeusbank.json'
import procreditData from '@/data/partners/procredit.json'
import ukrgasbankData from '@/data/partners/ukrgasbank.json'
import type { PartnerConfig } from '@/types/partner'

const partnerData: Record<string, PartnerConfig> = {
  abank: abankData as PartnerConfig,
  bizbank: bizbankData as PartnerConfig,
  ideabank: ideabankData as PartnerConfig,
  kredobank: kredobankData as PartnerConfig,
  mtbbank: mtbbankData as PartnerConfig,
  pravexbank: pravexbankData as PartnerConfig,
  raiffeisen: raiffeisenData as PartnerConfig,
  ukrsibbank: ukrsibbankData as PartnerConfig,
  alliance: allianceData as PartnerConfig,
  creditagricole: creditagricoleData as PartnerConfig,
  izibank: izibankData as PartnerConfig,
  kyivstar: kyivstarData as PartnerConfig,
  otpbank: otpbankData as PartnerConfig,
  privatbank: privatbankData as PartnerConfig,
  tascombank: tascombankData as PartnerConfig,
  asviobank: asviobankData as PartnerConfig,
  globusbank: globusbankData as PartnerConfig,
  kreditdnipro: kreditdniproData as PartnerConfig,
  lifecell: lifecellData as PartnerConfig,
  piraeusbank: piraeusbankData as PartnerConfig,
  procredit: procreditData as PartnerConfig,
  ukrgasbank: ukrgasbankData as PartnerConfig,
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
