'use client'

import { ArrowUpRight, ArrowDownLeft, Crown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { BottomNav } from '@/components/bottom-nav'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { AvatarPlaceholder } from '@/components/svg-placeholders'
import Link from 'next/link'

const transactions = [
  { id: 1, name: 'Сильпо', amount: -456.50, category: 'Продукти', time: '14:32' },
  { id: 2, name: 'Поповнення', amount: 5000.00, category: 'Переказ', time: '10:15' },
  { id: 3, name: 'Netflix', amount: -299.00, category: 'Підписки', time: 'Вчора' },
  { id: 4, name: 'АТБ', amount: -234.80, category: 'Продукти', time: 'Вчора' },
  { id: 5, name: 'Bolt', amount: -185.00, category: 'Транспорт', time: '2 дні тому' },
]

export default function HomePage() {
  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-foreground px-6 pt-14 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AvatarPlaceholder initial="О" size={48} />
            <div>
              <p className="text-sm text-foreground/70">Вітаємо,</p>
              <p className="text-lg font-semibold">Олексій</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-foreground/70">Загальний баланс</p>
          <p className="text-4xl font-bold">₴45,230.50</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-6 space-y-6">
          {/* Promo card */}
          <Link href="/premium">
            <Card className="relative overflow-hidden bg-card border-[1px] border-border/20 p-6 cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-foreground text-xs font-semibold border border-foreground/20">
                    <Crown className="w-3 h-3" />
                    <span>Premium</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    Активуйте Premium
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Отримайте доступ до ексклюзивних переваг
                  </p>
                </div>
                <Crown className="w-16 h-16 text-primary" />
              </div>
            </Card>
          </Link>

          {/* Recent transactions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Останні операції</h2>
              <Link href="/history" className="text-sm text-primary font-medium">
                Всі
              </Link>
            </div>

            <motion.div
              className="space-y-2"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {transactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  variants={staggerItem}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 ? 'bg-green-100' : 'bg-slate-100'
                        }`}>
                          {transaction.amount > 0 ? (
                            <ArrowDownLeft className="w-5 h-5 text-green-600" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-slate-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold">{transaction.name}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {transaction.category} • {transaction.time}
                          </p>
                        </div>
                      </div>
                      <p className={`font-semibold ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-foreground'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}
                        {transaction.amount.toFixed(2)} ₴
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
