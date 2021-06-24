import React from 'react'
import './SeperatorLabel.scss'

export const SeperatorLabel: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="SeperatorLabel">
      <div className="SeperatorLabel__wing" />
      <span className="SeperatorLabel__label">{label}</span>
      <div className="SeperatorLabel__wing" />
    </div>
  )
}