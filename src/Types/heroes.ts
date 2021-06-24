export type HeroType = {
  difficulty: number
  id: number
  image_url: string
  name: string
  portrait_url: string
  real_name: string
  role: string
  slug: string
}

export type HeroSupplementType = {
  heroId: number
  health: number
  armor?: number
  shield?: number
  age: number | string
  occupation: string
  base: string
  affiliation: string
}

export type FullHeroType = HeroType & HeroSupplementType