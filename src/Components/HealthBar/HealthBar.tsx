import React from 'react'
import './HealthBar.scss'

export const HealthBar: React.FC<{
  health: number,
  shield?: number,
  armor?: number,
}> = ({ health, shield = 0, armor = 0 }) => {
  // create blocks of 25 health each
  const createBlocks = (pool: number, type: 'health' | 'shield' | 'armor') => {
    const indBlocks = pool / 25
    let blocks: JSX.Element[] = []
    for (let i = 0; i < indBlocks; i++) {
      blocks.push(<div className={`HealthBar__block HealthBar__block--${type}`} />)
    }
    return blocks
  } 

  return (
    <div className="HealthBar">
      <div className="HealthBar__bar">
        {createBlocks(health, 'health')}
        {createBlocks(shield, 'shield')}
        {createBlocks(armor, 'armor')}
      </div>
    </div>
  )
}
