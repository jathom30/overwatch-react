import { HealthBar, DifficultyStars, Spacer, Loading, BackButton } from 'Components'
import { capitalize, withSupplementalHeroInfo } from 'Helpers'
import React, { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHero } from 'Requests'
import { FullHeroType } from 'Types'
import { LoadingView } from 'Views/LoadingView'
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
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingImg, setIsLoadingImg] = useState(true)
  const { heroId } = useParams<{ heroId: string}>()
  const [hero, setHero] = useState<FullHeroType>()
  
  useEffect(() => {
    const heroInt = parseInt(heroId)
    getHero(heroInt).then((res) => {
      setHero(withSupplementalHeroInfo(res.data))
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!hero) return
    const img = new Image()
    img.onload = () => {
      if (img.height && img.height) setIsLoadingImg(false)
    }
    img.src = `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.slug}/full-portrait.png`
  }, [hero])

  if (!hero) return <LoadingView isLoaded={false} />
  return (
    <LoadingView isLoaded={!isLoading}>
      <BackButton label="to heroes" to="/heroes" />
      <Spacer />
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
          <Spacer height="2rem" />
          <a
            className="HeroView__more-info-link"
            href={`https://overwatch.fandom.com/wiki/${hero.slug.replace('-', '_')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>

        </div>
        <Spacer />
        <div className="HeroView__column">
          {isLoadingImg ? (
            <Loading />
          ) : (
            <img
              className="HeroView__portrait"
              src={`https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.slug}/full-portrait.png`}
            />
          )}
        </div>
      </div>
    </LoadingView>
  )
}
