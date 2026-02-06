'use client'

import { History } from 'lucide-react'
import { motion } from 'framer-motion'
import { BottomNav } from '@/components/bottom-nav'
import { scaleIn } from '@/lib/animations'

export default function HistoryPage() {
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-6 pt-14 pb-6">
        <h1 className="text-2xl font-bold">Історія операцій</h1>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center space-y-4 max-w-xs"
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
        >
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
            <History className="w-10 h-10 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Тут поки порожньо</h2>
            <p className="text-muted-foreground leading-relaxed">
              Всі ваші майбутні транзакції будуть відображатися тут
            </p>
          </div>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  )
}
