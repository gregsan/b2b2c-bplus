import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { AppProvider } from '@/contexts/app-context'
import { PartnerProvider } from '@/contexts/partner-context'
import { MobileFrame } from '@/components/mobile-frame'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'BenefitsPlus Products Demo Showcase',
  description: 'Demo showcase of BenefitsPlus Products, a platform for skyrocketing your loyalty program with exclusive perks and rewards.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppProvider>
          <PartnerProvider>
            <MobileFrame>{children}</MobileFrame>
          </PartnerProvider>
        </AppProvider>
      </body>
    </html>
  )
}
