import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/contexts/app-context'
import { PartnerProvider } from '@/contexts/partner-context'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'BenefitsPlus Products Demo Showcase',
  description: 'Demo showcase of BenefitsPlus Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppProvider>
          <PartnerProvider>
            {children}
          </PartnerProvider>
        </AppProvider>
      </body>
    </html>
  )
}