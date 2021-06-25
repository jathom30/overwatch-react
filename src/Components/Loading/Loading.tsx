import React from 'react'
import './Loading.scss'

const Hexagon: React.FC<{ number: number }> = ({ number }) => {
  const totalHexes = 7
  const duration = .3
  const animationDelay = `${.3 * number}s`
  const animationDuration = `${duration * (totalHexes * 2 - 1)}s`

  return (
    <div
      className={`Hexagon Hexagon--${number}`}
      style={{ animationDelay, animationDuration }}
    />
  )
}

const HexagonContainer = () => {
  return (
    <div className="HexagonContainer">
      {Array.from({ length: 7 }, (v, i) => i).map((i) => (
        <Hexagon key={i} number={i} />
      ))}
    </div>
  )
}

export const Loading = () => {
  const baseWidth = 30
  const baseHeight = baseWidth * 1.7328
  const radius = baseHeight * 2.25

  const svgDim = baseHeight * 5
  const svgCenter = svgDim / 2
  const circumference = radius * 2 * Math.PI
  return (
    <div className="Loading">
      <svg height={svgDim} width={svgDim} className="Loading__svg">
        <circle
          r={radius}
          cx={svgCenter}
          cy={svgCenter}
          className="Loading__circle"
          style={{
            strokeDasharray: `${baseHeight} ${circumference}`,
          }}
        />
        <circle
          r={radius}
          cx={svgCenter}
          cy={svgCenter}
          className="Loading__circle--medium"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference * 2,
          }}
        />
        <circle r={radius} cx={svgCenter} cy={svgCenter} className="Loading__circle--light" />
      </svg>
      <HexagonContainer />
    </div>
  )
}
