export interface Product {
  id: string
  title: string
  description: string
  image: string
  images?: string[]
  link: string
  tag?: '新品' | '热销' | ''
  section?: string
  sort_order?: number
  is_active?: boolean
}

export interface HeroContent {
  badge_text: string
  headline: string
  subheadline: string
  cta_text: string
  cta_link: string
  images: string[]
  interval?: number
}

export interface StatItem {
  number: string
  label: string
}
