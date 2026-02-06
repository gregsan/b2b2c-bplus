'use client'

import { Card } from '@/components/ui/card'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="h-full flex flex-col bg-background">
      <div 
        className="px-6 pt-14 pb-6"
        style={{ backgroundColor: 'var(--color-accent, #FACE00)' }}
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-dark, #0E0C00)' }}>
          {title}
        </h1>
      </div>
      
      <div className="flex-1 p-6 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Card 
            key={i} 
            className="h-24 bg-card border-[1px] border-border/20 animate-pulse"
          />
        ))}
        <p className="text-center text-muted-foreground text-sm pt-4">
          Скоро тут з'явиться детальна інформація
        </p>
      </div>
    </div>
  )
}
