'use client'

import { ReactNode } from 'react'

export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div 
      className="min-h-screen w-full mx-auto md:border-x"
      style={{ 
        maxWidth: '440px',
        backgroundColor: 'var(--color-page-bg, #FAFAFA)',
        borderColor: '#E5E5E5'
      }}
    >
      {children}
    </div>
  )
}
