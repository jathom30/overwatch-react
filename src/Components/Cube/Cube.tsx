import React, { useEffect, useState } from 'react'
import './Cube.scss'

const sides = ['front', 'back', 'right', 'left', 'top', 'bottom']

export const Cube = () => {
  const [percentage, setPercentage] = useState(0)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const incrementPercent = setInterval(() => setPercentage((prevPerc) => {
      if (prevPerc >= 99) {
        setIsActive(false)
        clearInterval(incrementPercent)
        return 100
      }
      return prevPerc + 1
    }), 150)
    return () => clearInterval(incrementPercent)
  }, [])

  return (
    <div className={`Cube ${isActive ? 'Cube--is-active' : ''}`}>
      {sides
      .filter((side) => {
        if (isActive) return side
        return side === 'front' || side === 'back'
      })
      .map((side) => (
        <div className={`Cube__face Cube__face--${side} ${isActive ? 'Cube__face--is-active' : ''}`}>
          <div className="Cube__contents">
            {percentage}%
          </div>
        </div>
      ))}
    </div>
  )
}
