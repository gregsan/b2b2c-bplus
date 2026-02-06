'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AppState {
  isLoggedIn: boolean
  isPremium: boolean
  language: string
  setIsLoggedIn: (value: boolean) => void
  setIsPremium: (value: boolean) => void
}

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isPremium, setIsPremiumState] = useState(false)
  const language = 'uk'

  // Restore premium state from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('isPremium')
    if (stored === 'true') {
      setIsPremiumState(true)
    }
  }, [])

  // Wrapper to persist to localStorage
  const setIsPremium = (value: boolean) => {
    setIsPremiumState(value)
    localStorage.setItem('isPremium', value.toString())
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        isPremium,
        language,
        setIsLoggedIn,
        setIsPremium,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
