import React from 'react'
import { MapType } from 'Types'
import './MapLink.scss'

export const MapLink: React.FC<{ map: MapType }> = ({ map }) => {
  return (
    <div className="MapLink">
      <img className="MapLink__thumbnail" src={map.thumbnail_url} alt={map.name} />
      <span className="MapLink__label">{map.name}</span>
    </div>
  )
}
