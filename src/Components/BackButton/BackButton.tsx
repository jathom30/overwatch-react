import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import './BackButton.scss'

export const BackButton: React.FC<{ label: string, to: string}> = ({ label, to }) => {
  const history = useHistory()
  return (
    <button
      className="BackButton"
      onClick={() => history.push(to)}
    >
      <div className="BackButton__icon">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <span className="BackButton__label">{label}</span>
    </button>
  )
}
