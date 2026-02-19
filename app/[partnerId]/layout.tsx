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
import monobankData from '@/data/partners/monobank.json'
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
import pivdenyData from '@/data/partners/pivdeny.json'
import procreditData from '@/data/partners/procredit.json'
import ukrgasbankData from '@/data/partners/ukrgasbank.json'
import ukrnaftaData from '@/data/partners/ukrnafta.json'
import euro5Data from '@/data/partners/euro5.json'
import wogData from '@/data/partners/wog.json'
import socarData from '@/data/partners/socar.json'
import altbankData from '@/data/partners/altbank.json'
import radabankData from '@/data/partners/radabank.json'
import varusData from '@/data/partners/varus.json'
import ezooData from '@/data/partners/ezoo.json'
import type { PartnerConfig } from '@/types/partner'

const partnerData: Record<string, PartnerConfig> = {
  abanknEmpL7jHwhhYj7oGQy8H: abankData as PartnerConfig,
  bizbankjEfE8YTkhrpTyuhbg08y: bizbankData as PartnerConfig,
  ideabankOHphuCcAK7EkDQsTdOtH: ideabankData as PartnerConfig,
  kredobank1zrkyyEiVSGb3UAdEsnt: kredobankData as PartnerConfig,
  mtbbankFkS5fMEG82zner7ZixbP: mtbbankData as PartnerConfig,
  monobankZCtTVwakRd3lEZKHzZRW: monobankData as PartnerConfig,
  pravexbankTyyeogqECjmFJ99OBxBf: pravexbankData as PartnerConfig,
  raiffeisenoiLBOEif9aM3pJxeRJpu: raiffeisenData as PartnerConfig,
  ukrsibbankGKhzlcBZ3Xkfdh3QNdJq: ukrsibbankData as PartnerConfig,
  allianceF1fmwHlUM0PvYczumMRw: allianceData as PartnerConfig,
  creditagricoleqnY8acDawYZtzuTPLAwX: creditagricoleData as PartnerConfig,
  izibankRb9bp3K12isga9jZtU5E: izibankData as PartnerConfig,
  kyivstarmKbv4dd15J8fbiqvBDzF: kyivstarData as PartnerConfig,
  otpbankCk0QzE2D1pb9VZ78zAdA: otpbankData as PartnerConfig,
  privatbankdkfauRZ0At9MkalP2Vfp: privatbankData as PartnerConfig,
  tascombankLwIkR0GaEpCBcTDeqDDW: tascombankData as PartnerConfig,
  asviobankzpXGU3rWn297Jy9KZDCG: asviobankData as PartnerConfig,
  globusbankW59MN9O3ZUYH4b8UFmwZ: globusbankData as PartnerConfig,
  kreditdniprogbKjQidL0qUMJq280Sto: kreditdniproData as PartnerConfig,
  lifecellcYlcZa3vItQWE7yUBCQl: lifecellData as PartnerConfig,
  piraeusbankDyNwz0nAd0pZ3Ci4QkwZ: piraeusbankData as PartnerConfig,
  pivdenyInhgc2EBsZG52jdwfVHV: pivdenyData as PartnerConfig,
  procreditGq5yYgC3YZ4Ia9DEYASj: procreditData as PartnerConfig,
  ukrgasbankROBET09LsZb9jfGl8iKZ: ukrgasbankData as PartnerConfig,
  ukrnaftasuBU1M0ZjqHz4SDllqWd: ukrnaftaData as PartnerConfig,
  euro5lGeHvekNOwu2qiUWECuq: euro5Data as PartnerConfig,
  wogCZSN8TQwQGVp4BadkAcr: wogData as PartnerConfig,
  socaryvPHhEOSImu8r9PnAute: socarData as PartnerConfig,
  altbankVOgyKmgAmfPOflc6eS99: altbankData as PartnerConfig,
  radabankqAI2jHmvFc9jokFAoe6B: radabankData as PartnerConfig,
  varus: varusData as PartnerConfig,
  ezoo: ezooData as PartnerConfig,

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
