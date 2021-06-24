import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './DifficultyStars.scss'

export const DifficultyStars: React.FC<{ difficulty: number }> = ({ difficulty }) => {
  const difficultyStars = Array.from({ length: difficulty }, (v, k) => (k))
  const rest = Array.from({ length: 3 - difficulty }, (v, k) => (k))
  return (
    <div className="DifficultyStars">
      {difficultyStars.map((star) => (
        <FontAwesomeIcon icon={faStar} key={star} />
        ))}
      {rest.map((star) => (
        <FontAwesomeIcon icon={faStar} key={star} opacity="0.25" />
      ))}
    </div>
  )
}
