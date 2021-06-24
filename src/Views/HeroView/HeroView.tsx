import { HealthBar, DifficultyStars, Spacer } from 'Components'
import { capitalize, withSupplementalHeroInfo } from 'Helpers'
import React, { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHero } from 'Requests'
import { FullHeroType } from 'Types'
import './HeroView.scss'

const LabelPair: React.FC<{label: string, value: ReactNode}> = ({ label, value }) => {
  return (
    <div className="LabelPair">
      <span className="LabelPair__label">{label}</span>
      <Spacer />
      <span className="LabelPair__value">{value}</span>
    </div>
  )
}

export const HeroView: React.FC<{}> = ({}) => {
  const { heroId } = useParams<{ heroId: string}>()
  const [hero, setHero] = useState<FullHeroType>()
  
  useEffect(() => {
    const heroInt = parseInt(heroId)
    getHero(heroInt).then((res) => {
      setHero(withSupplementalHeroInfo(res.data))
    })
  }, [])

  
  if (!hero) return null
  return (
    <div className="HeroView">
      <div className="HeroView__column">
        <h2 className="HeroView__name">{hero.name}</h2>
        <Spacer height="2rem" />
        <HealthBar health={hero.health} shield={hero.shield} armor={hero.armor} />
        <LabelPair
          label="Total health"
          value={hero.health + (hero?.armor || 0) + (hero?.shield || 0)}
        />
        <LabelPair label="Role" value={capitalize(hero.role)} />
        <LabelPair label="Difficulty" value={<DifficultyStars difficulty={hero.difficulty} />} />
        <LabelPair label="Real name" value={hero.real_name} />
        <LabelPair label="Age" value={hero.age.toString()} />
        <LabelPair label="Base" value={hero.base} />
        <LabelPair label="Affiliation" value={hero.affiliation} />
        <LabelPair label="Occupation" value={hero.occupation} />
      </div>
      <Spacer />
      <div className="HeroView__column">
        <img className="HeroView__portrait" src={`https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.slug}/full-portrait.png`} />
      </div>
    </div>
  )
}
