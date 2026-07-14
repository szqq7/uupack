import type { Product, HeroContent, StatItem } from './types'

const API_BASE = '/_emdash/api'

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

/** 获取所有启用的产品列表 */
export async function fetchProducts(): Promise<Product[]> {
  const data = await fetchJSON<Product[]>('/products')
  return data.filter(p => p.is_active !== false)
}

/** 获取 Hero 横幅内容（含切图图片列表） */
export async function fetchHeroContent(): Promise<HeroContent> {
  return fetchJSON<HeroContent>('/hero')
}

/** 获取统计数据（全局用户/覆盖国家等） */
export async function fetchStats(): Promise<StatItem[]> {
  return fetchJSON<StatItem[]>('/stats')
}

/** 按分组获取产品列表 */
export function getProductsBySection(products: Product[], section: string): Product[] {
  return products
    .filter(p => p.section === section)
    .sort((a, b) => (a.sort_order ?? 999) - (b.sort_order ?? 999))
}
