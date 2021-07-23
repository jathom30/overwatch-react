import React from 'react'
import './AppleBreath.scss'

export const AppleBreath = () => {
  return (
    <div className="AppleBreath">
      <div className="AppleBreath__container">
        {Array.from({ length: 6}, (v,i) => (
          <div key={i} className={`AppleBreath__circle-container AppleBreath__circle-container--${i}`}>
            <div className="AppleBreath__circle" />
          </div>
        ))}
      </div>
      <div className="AppleBreath__background" />
    </div>
  )
}
