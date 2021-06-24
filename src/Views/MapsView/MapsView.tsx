import React, { useEffect, useState } from 'react'
import { getMaps } from 'Requests'
import { SeperatorLabel } from 'Components'
import { MapType } from 'Types'
import { Link } from 'react-router-dom'
import './MapsView.scss'
import { MapLink } from './components'

export const MapsView = () => {
  const [maps, setMaps] = useState<MapType[]>([])

  useEffect(() => {
    getMaps().then((res) => {
      setMaps(res.data)
    })
  }, [])

  // filter by mode
  const filteredMapsByMode = (mode: string) => {
    return maps.filter((map) => map.game_mode.toLowerCase() === mode)
  }

  // sort alphabetically
  const sortMaps = (yourMaps: MapType[]) => {
    return yourMaps.sort((map1, map2) => {
      if (map1.name < map2.name) return -1
      if (map1.name > map2.name) return 1
      return 0
    })
  }
  return (
    <div className="MapsView">
      <div className="MapsView__header">
        <h1>Maps</h1>
      </div>
      <SeperatorLabel label="Assault" />
      <div className="MapsView__list">
        {sortMaps(filteredMapsByMode('assault')).map((map) => (
          <MapLink map={map} />
        ))}
      </div>
      <SeperatorLabel label="Control" />
      <div className="MapsView__list">
        {sortMaps(filteredMapsByMode('control')).map((map) => (
          <MapLink map={map} />
        ))}
      </div>
      <SeperatorLabel label="Escort" />
      <div className="MapsView__list">
        {sortMaps(filteredMapsByMode('escort')).map((map) => (
          <MapLink map={map} />
        ))}
      </div>
      <SeperatorLabel label="Hybrid" />
      <div className="MapsView__list">
        {sortMaps(filteredMapsByMode('hybrid')).map((map) => (
          <MapLink map={map} />
        ))}
      </div>
    </div>
  )
}
