import React from 'react'
import { HeroType } from 'Types'
import './Hero.scss'

export const Hero: React.FC<{ hero: HeroType }> = ({ hero }) => {
  return (
    <div className="Hero">
      <div className="Hero__img-container">
        <img alt={`Hero icon for ${hero.name}`} src={hero.portrait_url} />
      </div>
      <h1 className="Hero__name">{hero.name}</h1>
    </div>
  )
}
