import React from 'react'
import { SeperatorLabel } from 'Components'
import { MapType } from 'Types'
import './MapsView.scss'
import { MapLink } from './components'
import { LoadingView } from 'Views/LoadingView'

export const MapsView: React.FC<{
  maps: MapType[]
  isLoading: boolean
}> = ({ maps, isLoading }) => {
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
    <LoadingView isLoaded={!isLoading}>
      <div className="MapsView">
        <div className="MapsView__header">
          <h1>Maps</h1>
        </div>
        <SeperatorLabel label="Assault" />
        <div className="MapsView__list">
          {sortMaps(filteredMapsByMode('assault')).map((map) => (
            <MapLink key={map.id} map={map} />
          ))}
        </div>
        <SeperatorLabel label="Control" />
        <div className="MapsView__list">
          {sortMaps(filteredMapsByMode('control')).map((map) => (
            <MapLink key={map.id} map={map} />
          ))}
        </div>
        <SeperatorLabel label="Escort" />
        <div className="MapsView__list">
          {sortMaps(filteredMapsByMode('escort')).map((map) => (
            <MapLink key={map.id} map={map} />
          ))}
        </div>
        <SeperatorLabel label="Hybrid" />
        <div className="MapsView__list">
          {sortMaps(filteredMapsByMode('hybrid')).map((map) => (
            <MapLink key={map.id} map={map} />
          ))}
        </div>
      </div>
    </LoadingView>
  )
}
