'use client'

import { useState } from 'react'
import { ArrowLeft, Check, CreditCard, TrendingUp, Banknote, Shield, Crown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BottomNav } from '@/components/bottom-nav'
import { BottomSheet } from '@/components/bottom-sheet'
import { useApp } from '@/contexts/app-context'
import { staggerContainer, staggerItem, scaleIn } from '@/lib/animations'
import { ServiceIcon, PartnerIcon } from '@/components/svg-placeholders'

const benefits = [
  {
    id: 1,
    title: 'Підвищена ставка по депозиту',
    icon: TrendingUp,
    shortDesc: 'До 12% річних',
    fullDesc: 'Отримуйте підвищену ставку до 12% річних на депозитні рахунки. Звичайна ставка - 8% річних. Без мінімальної суми депозиту.',
  },
  {
    id: 2,
    title: 'Збільшені ліміти на зняття готівки',
    icon: Banknote,
    shortDesc: 'До 50,000 ₴ на день',
    fullDesc: 'Знімайте готівку в будь-яких банкоматах світу без комісії до 50,000 ₴ на день. Звичайний ліміт - 15,000 ₴ з комісією 1%.',
  },
  {
    id: 3,
    title: 'Знижені комісії на перекази',
    icon: Shield,
    shortDesc: '0% на всі перекази',
    fullDesc: 'Переказуйте гроші всередині України та за кордон без комісії. Стандартна комісія - 0.5% за перекази більше 5,000 ₴.',
  },
]

const cards = [
  { id: 1, name: 'Visa Platinum', last4: '4532', color: 'from-blue-500 to-blue-700' },
  { id: 2, name: 'Mastercard Gold', last4: '8891', color: 'from-amber-500 to-amber-700' },
]

export default function PremiumPage() {
  const { isPremium, setIsPremium } = useApp()
  const [selectedTab, setSelectedTab] = useState('bank')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [selectedBenefit, setSelectedBenefit] = useState(null)
  const [cardSheetOpen, setCardSheetOpen] = useState(false)
  const router = useRouter()

  const handleActivatePremium = () => {
    setCardSheetOpen(true)
  }

  const handleCardSelect = () => {
    setIsPremium(true)
    setCardSheetOpen(false)
  }

  const handleBenefitClick = (benefit) => {
    setSelectedBenefit(benefit)
    setSheetOpen(true)
  }

  if (isPremium) {
    return (
      <div className="h-full flex flex-col bg-background overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-foreground px-6 pt-14 pb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="text-foreground hover:bg-foreground/10 -ml-2 mb-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold mb-2">NeoBank Premium</h1>
          <p className="text-foreground/80">Ексклюзивні переваги для вас</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="px-6 py-6 space-y-6">
            {/* Price card */}
            <Card className="p-8 bg-card border-[1px] border-border/20 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="text-center space-y-3">
                <Crown className="w-12 h-12 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground font-semibold">Вартість підписки</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">₴299</span>
                  <span className="text-xl text-muted-foreground">/місяць</span>
                </div>
              </div>
            </Card>

            {/* Features */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Що входить в Premium</h2>
              <motion.div
                className="space-y-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  'Підвищена ставка по депозиту до 12%',
                  'Збільшені ліміти на зняття готівки',
                  'Безкоштовні перекази по Україні та світу',
                  'Доступ до преміум-сервісів (Spotify, Netflix, та інші)',
                  'Знижки на бронювання готелів до 20%',
                  'Туристична страховка',
                  'Cashback до 15% від партнерів',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <Button 
              onClick={handleActivatePremium}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-foreground text-lg font-semibold"
            >
              <Crown className="w-5 h-5 mr-2" />
              Активувати Premium
            </Button>
          </div>
        </div>

        <BottomNav />

        {/* Card selection sheet */}
        <BottomSheet
          isOpen={cardSheetOpen}
          onClose={() => setCardSheetOpen(false)}
          title="Оберіть картку для оплати"
        >
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {cards.map((card) => (
              <motion.div key={card.id} variants={staggerItem} whileTap={{ scale: 0.97 }}>
                <Card
                  className="p-4 cursor-pointer hover:border-primary hover:shadow-md transition-all"
                  onClick={handleCardSelect}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-10 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center shadow-md`}>
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{card.name}</p>
                      <p className="text-sm text-muted-foreground">•••• {card.last4}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </BottomSheet>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-foreground px-6 pt-14 pb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="text-foreground hover:bg-foreground/10 -ml-2 mb-2"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold">Premium</h1>
          <div className="px-2 py-0.5 rounded bg-foreground/10 text-xs font-semibold border border-foreground/20">
            Активний
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="flex-1 flex flex-col overflow-hidden">
        <div className="relative border-b bg-background border-border/30">
          <div className="overflow-x-auto scrollbar-hide scroll-smooth">
            <TabsList className="inline-flex justify-start rounded-none h-auto p-0 bg-transparent min-w-full w-max">
              <TabsTrigger 
                value="bank" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3 min-w-[120px]"
              >
                Банк
              </TabsTrigger>
              <TabsTrigger 
                value="services" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3 min-w-[120px]"
              >
                Сервіси
              </TabsTrigger>
              <TabsTrigger 
                value="travel" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3 min-w-[120px]"
              >
                Подорожі
              </TabsTrigger>
              <TabsTrigger 
                value="insurance" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3 min-w-[120px]"
              >
                Страховка
              </TabsTrigger>
              <TabsTrigger 
                value="partners" 
                className="flex-shrink-0 rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3 min-w-[120px]"
              >
                Партнери
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        <div className="flex-1 overflow-y-auto pb-24">
          <TabsContent value="bank" className="mt-0 p-6 space-y-4">
            <h2 className="text-lg font-bold">Банківські переваги</h2>
            <div className="space-y-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card 
                    key={benefit.id}
                    className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleBenefitClick(benefit)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-primary font-medium">{benefit.shortDesc}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-0 p-6 space-y-4">
            <h2 className="text-lg font-bold">Цифрові сервіси</h2>
            <div className="space-y-3">
              {[
                { slug: 'spotify', name: 'Spotify', desc: 'Музика та подкасти' },
                { slug: 'netflix', name: 'Netflix', desc: 'Фільми та серіали' },
                { slug: 'youtube', name: 'YouTube Premium', desc: 'Без реклами' },
                { slug: 'chatgpt', name: 'ChatGPT Plus', desc: 'AI асистент' },
                { slug: 'notion', name: 'Notion', desc: 'Робочий простір' },
                { slug: 'apple-music', name: 'Apple Music', desc: 'Музичний сервіс' },
                { slug: 'disney', name: 'Disney+', desc: 'Розваги для сім\'ї' },
              ].map((service) => (
                <Card
                  key={service.slug}
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors bg-card border-[1px] border-border/20"
                  onClick={() => router.push(`/premium/service/${service.slug}`)}
                >
                  <div className="flex items-center gap-4">
                    <ServiceIcon service={service.slug} size={60} />
                    <div className="flex-1">
                      <p className="font-semibold text-base">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                    <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="travel" className="mt-0 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Бронювання готелів</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/premium/travel/bookings')}
                >
                  Мої бронювання
                </Button>
              </div>
              <Button
                className="w-full h-12"
                onClick={() => router.push('/premium/travel')}
              >
                Знайти готель
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="insurance" className="mt-0 p-6 space-y-4">
            <h2 className="text-lg font-bold">Страхування</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Страховка скасування подорожей',
                  desc: 'Захист від непередбачених обставин',
                  price: '₴199/місяць',
                  details: 'Отримайте компенсацію до 100% вартості подорожі при скасуванні через хворобу, нещасний випадок або інші форс-мажорні обставини. Страховка покриває квитки, готелі та інші витрати.',
                },
                {
                  title: 'Туристична страховка',
                  desc: 'Медичне страхування за кордоном',
                  price: '₴149/місяць',
                  details: 'Повне медичне страхування під час подорожей за кордон. Покриває до €50,000 на медичні витрати, включаючи госпіталізацію, екстрену допомогу та репатріацію. Працює в усіх країнах світу.',
                },
                {
                  title: 'Страховка домашніх тварин',
                  desc: 'Здоров\'я вашого улюбленця',
                  price: '₴99/місяць',
                  details: 'Комплексне страхування здоров\'я вашого домашнього улюбленця. Покриває ветеринарні візити, операції, ліки та профілактику. Компенсація до 80% вартості лікування.',
                },
              ].map((insurance, index) => (
                <Card
                  key={index}
                  className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => {
                    setSelectedBenefit({ 
                      title: insurance.title, 
                      icon: Shield, 
                      shortDesc: insurance.desc,
                      fullDesc: insurance.details 
                    })
                    setSheetOpen(true)
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{insurance.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{insurance.desc}</p>
                      <p className="text-sm font-semibold text-primary">{insurance.price}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partners" className="mt-0 p-6 space-y-4">
            <h2 className="text-lg font-bold">Пропозиції партнерів</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { slug: 'rozetka', name: 'Rozetka', offer: 'Кешбек 10%', type: 'cashback' },
                { slug: 'comfy', name: 'Comfy', offer: 'Кешбек 8%', type: 'cashback' },
                { slug: 'silpo', name: 'Silpo', offer: 'Знижка 15%', type: 'discount' },
                { slug: 'atb', name: 'АТБ', offer: 'Кешбек 12%', type: 'cashback' },
                { slug: 'varus', name: 'Varus', offer: 'Знижка 10%', type: 'discount' },
                { slug: 'apteka', name: 'Моя Аптека', offer: 'Знижка 20%', type: 'discount' },
              ].map((partner) => (
                <Card
                  key={partner.slug}
                  className="p-4 cursor-pointer hover:bg-muted/50 transition-colors bg-card border-[1px] border-border/20"
                  onClick={() => {
                    setSelectedBenefit({
                      title: partner.name,
                      icon: Shield,
                      shortDesc: partner.offer,
                      fullDesc: `Отримуйте ${partner.offer} при покупках в ${partner.name} з Premium підпискою. Бонуси автоматично нараховуються на ваш рахунок протягом 24 годин після покупки.`,
                    })
                    setSheetOpen(true)
                  }}
                >
                  <div className="space-y-3">
                    <div className="w-full h-20 flex items-center justify-center">
                      <PartnerIcon partner={partner.slug} size={60} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{partner.name}</p>
                      <div className={`inline-block px-2 py-0.5 rounded mt-1 text-xs font-semibold ${
                        partner.type === 'cashback' ? 'bg-primary text-foreground' : 'bg-primary text-foreground'
                      }`}>
                        {partner.offer}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>

      <BottomNav />

      {/* Benefit details sheet */}
      <BottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title={selectedBenefit?.title}
      >
        {selectedBenefit && (
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              {selectedBenefit.icon && <selectedBenefit.icon className="w-8 h-8 text-primary" />}
            </div>
            <p className="text-lg leading-relaxed">{selectedBenefit.fullDesc}</p>
            <div className="pt-2">
              <Button className="w-full h-12" onClick={() => setSheetOpen(false)}>
                Зрозуміло
              </Button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  )
}
