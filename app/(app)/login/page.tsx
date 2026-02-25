'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useApp } from '@/contexts/app-context'
import { slideUp, slideUpSpring } from '@/lib/animations'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { setIsLoggedIn } = useApp()

  const handleLogin = () => {
    setIsLoggedIn(true)
    router.push('/home')
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      {/* Content */}
      <div className="h-full flex flex-col justify-center p-6">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-balance">Вітаємо в NeoBank</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Ваш сучасний цифровий банк</p>
          </div>

          <motion.div
            className="space-y-4 bg-card border-[1px] border-border/20 rounded-lg p-6"
            variants={slideUp}
            initial="initial"
            animate="animate"
            transition={slideUpSpring}
          >
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-semibold">
                Логін або телефон
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="+380"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 pl-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold">
                Пароль
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-11"
                />
              </div>
            </div>

            <Button 
              onClick={handleLogin}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-foreground text-lg font-semibold"
            >
              Увійти
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
