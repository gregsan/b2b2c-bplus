export interface PartnerBenefit {
  title: string
  description: string
  icon: string
}

export interface PartnerService {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  logo: string
}

export interface PartnerConfig {
  id: string
  type: 'bank' | 'operator' | 'gas-station' | 'retail-food' | 'retail-zoo'
  name: string
  subscriptionName: string
  subscriptionPrice: string
  colorScheme: string
  benefits: PartnerBenefit[]
  services: PartnerService[]
}
