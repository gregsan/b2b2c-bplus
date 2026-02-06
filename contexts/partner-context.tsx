'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { PartnerConfig } from '@/types/partner'
import type { ColorScheme } from '@/lib/color-schemes'
import { colorSchemes, applyColorScheme } from '@/lib/color-schemes'

interface PartnerContextType {
  partner: PartnerConfig | null
  colorScheme: ColorScheme
  isPremium: boolean
  setPartner: (partner: PartnerConfig) => void
  setIsPremium: (value: boolean) => void
}

const PartnerContext = createContext<PartnerContextType | undefined>(undefined)

export function PartnerProvider({ children }: { children: ReactNode }) {
  const [partner, setPartnerState] = useState<PartnerConfig | null>(null)
  const [isPremium, setIsPremiumState] = useState(false)

  const colorScheme = partner 
    ? colorSchemes[partner.colorScheme] || colorSchemes.yellow 
    : colorSchemes.yellow

  // Apply color scheme when partner changes
  useEffect(() => {
    if (partner) {
      applyColorScheme(colorScheme)
    }
  }, [partner, colorScheme])

  // Load premium state from localStorage when partner changes
  useEffect(() => {
    if (partner) {
      const key = `isPremium_${partner.id}`
      const stored = localStorage.getItem(key)
      if (stored === 'true') {
        setIsPremiumState(true)
      } else {
        setIsPremiumState(false)
      }
    }
  }, [partner])

  const setPartner = (newPartner: PartnerConfig) => {
    setPartnerState(newPartner)
  }

  const setIsPremium = (value: boolean) => {
    setIsPremiumState(value)
    if (partner) {
      const key = `isPremium_${partner.id}`
      localStorage.setItem(key, value.toString())
    }
  }

  return (
    <PartnerContext.Provider
      value={{
        partner,
        colorScheme,
        isPremium,
        setPartner,
        setIsPremium,
      }}
    >
      {children}
    </PartnerContext.Provider>
  )
}

export function usePartner() {
  const context = useContext(PartnerContext)
  if (context === undefined) {
    throw new Error('usePartner must be used within a PartnerProvider')
  }
  return context
}
