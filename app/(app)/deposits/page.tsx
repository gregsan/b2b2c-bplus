'use client'

import { PiggyBank } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BottomNav } from '@/components/bottom-nav'
import { scaleIn } from '@/lib/animations'

export default function DepositsPage() {
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-6 pt-14 pb-6">
        <h1 className="text-2xl font-bold">Депозити</h1>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center space-y-6 max-w-xs"
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <PiggyBank className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Відкрийте ваш перший депозит</h2>
            <p className="text-muted-foreground leading-relaxed">
              Отримуйте до 12% річних з Premium підпискою
            </p>
          </div>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Button className="w-full shadow-md">Відкрити депозит</Button>
          </motion.div>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  )
}
