import { notFound } from 'next/navigation'
import { PromoHero } from '@/components/promo/promo-hero'
import { PromoBenefits } from '@/components/promo/promo-benefits'
import { PromoServices } from '@/components/promo/promo-services'
import { PromoInsurance } from '@/components/promo/promo-insurance'
import { PromoTravel } from '@/components/promo/promo-travel'
import { PromoPartners } from '@/components/promo/promo-partners'
import { PromoCTA } from '@/components/promo/promo-cta'
import { partnerData } from '@/data/partners-map'
import type { PartnerConfig } from '@/types/partner'

const accentColors: Record<string, { accent: string; muted: string; bg: string }> = {
  green:  { accent: '#4ADE80', muted: 'rgba(74,222,128,0.15)',  bg: 'rgba(74,222,128,0.08)'  },
  blue:   { accent: '#60A5FA', muted: 'rgba(96,165,250,0.15)',  bg: 'rgba(96,165,250,0.08)'  },
  red:    { accent: '#F87171', muted: 'rgba(248,113,113,0.15)', bg: 'rgba(248,113,113,0.08)' },
  yellow: { accent: '#FACC15', muted: 'rgba(250,204,21,0.15)',  bg: 'rgba(250,204,21,0.08)'  },
  purple: { accent: '#C084FC', muted: 'rgba(192,132,252,0.15)', bg: 'rgba(192,132,252,0.08)' },
}

function getPartner(partnerId: string): PartnerConfig | null {
  return partnerData[partnerId] ?? null
}

export default async function PartnerPromoPage({
  params,
}: {
  params: Promise<{ partnerId: string }>
}) {
  const { partnerId } = await params
  const partner = getPartner(partnerId)

  if (!partner) notFound()

  const colors = accentColors[partner.colorScheme] ?? accentColors.blue

  return (
    <main
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        '--promo-accent': colors.accent,
        '--promo-accent-muted': colors.muted,
        '--promo-accent-bg': colors.bg,
      } as React.CSSProperties}
    >
      <PromoHero partner={partner} />
      <PromoBenefits partner={partner} />
      <PromoServices partner={partner} />
      <PromoInsurance type={partner.type} />
      <PromoTravel />
      <PromoPartners partner={partner} />
      <PromoCTA partner={partner} />
    </main>
  )
}