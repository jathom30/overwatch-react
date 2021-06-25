import React from 'react'
import { Hero, SeperatorLabel } from 'Components'
import { withSupplementalHeroInfo } from 'Helpers'
import { Link } from 'react-router-dom'
import { HeroType } from 'Types/heroes'
import { LoadingView } from 'Views/LoadingView'
import './HeroesView.scss'

export const HeroesView: React.FC<{
  heroes: HeroType[]
  isLoading: boolean
}> = ({ heroes, isLoading }) => {
  // filter by role
  const filterHeroesByRole = (role: 'damage' | 'tank' | 'support') => {
    if (role === 'damage') {
      return heroes.filter(
        (hero) => hero.role === 'offense' || hero.role === 'defense' || hero.role === 'damage',
      )
    }
    return heroes.filter((hero) => hero.role === role)
  }

  // sort alphabetically
  const sortHeroes = (yourHeroes: HeroType[]) => {
    return yourHeroes.sort((hero1, hero2) => {
      if (hero1.name < hero2.name) return -1
      if (hero1.name > hero2.name) return 1
      return 0
    })
  }
  return (
    <LoadingView isLoaded={!isLoading}>
      <div className="HeroesView">
        <div className="HeroesView__header">
          <h1>Heroes</h1>
        </div>
        <SeperatorLabel label="Tank" />
        <div className="HeroesView__list">
          {sortHeroes(filterHeroesByRole('tank')).map((hero) => (
            <Link
              key={hero.id}
              to={`/heroes/${hero.id}`}
            >
              <Hero hero={withSupplementalHeroInfo(hero)} />
            </Link>
          ))}
        </div>
        <SeperatorLabel label="Damage" />
        <div className="HeroesView__list">
          {sortHeroes(filterHeroesByRole('damage')).map((hero) => (
            <Link
              key={hero.id}
              to={`/heroes/${hero.id}`}
            >
              <Hero hero={withSupplementalHeroInfo(hero)} />
            </Link>
          ))}
        </div>
        <SeperatorLabel label="Support" />
        <div className="HeroesView__list">
          {sortHeroes(filterHeroesByRole('support')).map((hero) => (
            <Link
              key={hero.id}
              to={`/heroes/${hero.id}`}
            >
              <Hero hero={withSupplementalHeroInfo(hero)} />
            </Link>
          ))}
        </div>
      </div>
    </LoadingView>
  )
}
