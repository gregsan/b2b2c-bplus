'use client'

import { Home, CreditCard, PiggyBank, Crown, User, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { usePartner } from '@/contexts/partner-context'
import { cn } from '@/lib/utils'

export function BottomNav() {
  const pathname = usePathname()
  const params = useParams()
  const { partner } = usePartner()
  const partnerId = params?.partnerId as string

  if (!partner) return null

  const bankNavItems = [
    { href: `/${partnerId}/home`, icon: Home, label: 'Головна' },
    { href: `/${partnerId}/payments`, icon: CreditCard, label: 'Платежі' },
    { href: `/${partnerId}/deposits`, icon: PiggyBank, label: 'Депозити' },
    { href: `/${partnerId}/premium`, icon: Crown, label: 'Premium' },
    { href: `/${partnerId}/account`, icon: User, label: 'Кабінет' },
  ]

  const operatorNavItems = [
    { href: `/${partnerId}/home`, icon: Home, label: 'Головна' },
    { href: `/${partnerId}/payments`, icon: CreditCard, label: 'Платежі' },
    { href: `/${partnerId}/services`, icon: Smartphone, label: 'Послуги' },
    { href: `/${partnerId}/premium`, icon: Crown, label: 'Premium' },
    { href: `/${partnerId}/account`, icon: User, label: 'Кабінет' },
  ]

  const navItems = partner.type === 'bank' ? bankNavItems : operatorNavItems

  return (
    <div 
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] backdrop-blur-md border-t shadow-lg z-50"
      style={{ 
        backgroundColor: 'var(--color-card-bg, #F7F7F9)',
        opacity: 0.95,
        borderColor: 'var(--color-border, #797875)',
        borderOpacity: 0.2
      }}
    >
      <div className="flex items-center justify-around px-1 py-2 safe-bottom">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Link key={item.href} href={item.href} className="relative">
              <motion.div
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Icon className={cn('w-6 h-6 transition-all', isActive && 'fill-current')} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-primary"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
