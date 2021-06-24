import { heroSups } from 'Data/characterSupplements'
import { HeroType } from 'Types'

export const withSupplementalHeroInfo = (hero: HeroType) => {
  const [heroSuppliments] = heroSups.filter((heroSup) => heroSup.heroId === hero.id)
  return {
    ...heroSuppliments,
    ...hero,
  }
}
