'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ServiceIcon } from '@/components/svg-placeholders'

const serviceData: Record<string, {
  name: string
  description: string[]
  instructions: string[]
}> = {
  spotify: {
    name: 'Spotify Premium',
    description: [
      'Отримайте доступ до мільйонів пісень та подкастів без реклами. Слухайте музику офлайн, переходьте між треками без обмежень та насолоджуйтесь високою якістю звуку.',
      'З Premium підпискою ви можете створювати власні плейлисти, відкривати нову музику та ділитися улюбленими треками з друзями.',
    ],
    instructions: [
      'Натисніть "Отримати підписку" для активації',
      'Підтвердіть вашу електронну адресу',
      'Завантажте додаток Spotify та увійдіть з вашим акаунтом',
    ],
  },
  netflix: {
    name: 'Netflix',
    description: [
      'Дивіться найкращі фільми, серіали та документальні стрічки в HD якості. Netflix пропонує тисячі годин контенту для всієї родини.',
      'Отримайте доступ до ексклюзивних оригінальних серіалів та фільмів, які не знайдете ніде більше. Дивіться на будь-якому пристрої, будь-де і будь-коли.',
    ],
    instructions: [
      'Активуйте підписку через Premium кабінет',
      'Отримайте код активації на email',
      'Введіть код на сайті Netflix або в додатку',
    ],
  },
  youtube: {
    name: 'YouTube Premium',
    description: [
      'Насолоджуйтесь YouTube без реклами. Завантажуйте відео для перегляду офлайн та слухайте музику з вимкненим екраном.',
      'YouTube Premium також включає доступ до YouTube Music Premium та ексклюзивного контенту від ваших улюблених авторів.',
    ],
    instructions: [
      'Натисніть кнопку активації нижче',
      'Підключіть ваш Google акаунт',
      'Підписка буде активована автоматично',
    ],
  },
  chatgpt: {
    name: 'ChatGPT Plus',
    description: [
      'Отримайте доступ до найпотужнішої версії ChatGPT з покращеною швидкістю відповідей та новими можливостями. Використовуйте AI для роботи, навчання та творчості.',
      'ChatGPT Plus надає доступ до GPT-4, розширеного контексту та пріоритетного доступу навіть у час пікового навантаження.',
    ],
    instructions: [
      'Активуйте підписку в Premium розділі',
      'Створіть або підключіть OpenAI акаунт',
      'Почніть користуватися розширеними можливостями',
    ],
  },
  notion: {
    name: 'Notion',
    description: [
      'Організуйте все своє життя в одному місці. Notion - це універсальний робочий простір для нотаток, завдань, баз даних та співпраці.',
      'Створюйте красиві документи, керуйте проєктами та співпрацюйте з командою. З Premium підпискою ви отримуєте необмежений простір та розширені функції.',
    ],
    instructions: [
      'Активуйте Notion через Premium сервіси',
      'Зареєструйтесь або увійдіть в Notion',
      'Синхронізуйте всі ваші пристрої',
    ],
  },
  'apple-music': {
    name: 'Apple Music',
    description: [
      'Слухайте понад 100 мільйонів пісень в високій якості. Apple Music пропонує курировані плейлисти, радіостанції та ексклюзивні релізи.',
      'Насолоджуйтесь просторовим звуком з Dolby Atmos та музикою без втрат якості. Все без реклами.',
    ],
    instructions: [
      'Натисніть "Отримати підписку"',
      'Підключіть ваш Apple ID',
      'Підписка буде активована на всіх пристроях',
    ],
  },
  disney: {
    name: 'Disney+',
    description: [
      'Дивіться улюблені фільми та серіали від Disney, Pixar, Marvel, Star Wars та National Geographic. Тисячі годин розваг для всієї сім\'ї.',
      'Отримайте доступ до ексклюзивних серіалів та фільмів, які виходять тільки на Disney+. Дивіться в HD та 4K якості на будь-якому пристрої.',
    ],
    instructions: [
      'Активуйте підписку в Premium кабінеті',
      'Створіть Disney+ акаунт або увійдіть',
      'Почніть дивитися одразу на всіх пристроях',
    ],
  },
}

export default function ServicePage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string
  const service = serviceData[slug] || {
    name: 'Сервіс',
    description: ['Інформація про цей сервіс незабаром з\'явиться.'],
    instructions: ['Зачекайте на оновлення'],
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-foreground px-6 pt-14 pb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="text-foreground hover:bg-foreground/10 -ml-2 mb-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-6">
        <div className="px-6 py-6 space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <ServiceIcon service={slug} size={120} />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
          </div>

          {/* Description */}
          <div className="space-y-4">
            {service.description.map((paragraph, index) => (
              <p key={index} className="text-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <Card className="p-6 bg-card border-[1px] border-border/20">
            <Button 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-foreground cursor-not-allowed"
              disabled
            >
              Отримати підписку
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Функція буде доступна незабаром
            </p>
          </Card>

          {/* Instructions */}
          <div className="space-y-2 mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground">Як активувати</h3>
            <div className="space-y-2">
              {service.instructions.map((step, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary text-foreground flex items-center justify-center flex-shrink-0 text-xs font-semibold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
