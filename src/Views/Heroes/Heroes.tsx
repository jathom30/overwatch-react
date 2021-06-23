import { HeroesIcon } from 'Assets'
import { Hero } from 'Components'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeroType } from 'Types/heroes'
import './Heroes.scss'

export const Heroes: React.FC<{ heroes: HeroType[] }> = ({ heroes }) => {
  return (
    <div className="Heroes">
      <div className="Heroes__header">
        <HeroesIcon />
      </div>
      <div className="Heroes__list">
        {heroes.map((hero) => (
          <Link
            key={hero.id}
            to={`/heroes/${hero.id}`}
          >
            <Hero hero={hero} />
          </Link>
        ))}
      </div>
    </div>
  )
}
