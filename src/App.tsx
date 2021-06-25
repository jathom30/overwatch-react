import React, { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, HeroesView, HeroView } from 'Views'
import { Navigation } from 'Components'
import { MapsView } from 'Views/MapsView'
import { HeroType, MapType } from 'Types'
import { getHeroes, getMaps } from 'Requests'

function App() {
  const [isLoadingHeroes, setIsLoadingHeroes] = useState(true)
  const [heroes, setHeroes] = useState<HeroType[]>([])
  const [isLoadingMaps, setIsLoadingMaps] = useState(true)
  const [maps, setMaps] = useState<MapType[]>([])
  const backgroundImage = 'url(https://d3hmvhl7ru3t12.cloudfront.net/img/ow-heroes-bg-eaa5e09760cf1e126669f9e3a1e1b7e12a4c0c73bb86728015299d99c1907ac1218f0a4304c6233547ae1e93d104adc88636aead01deb7bfebeeb666f07574e3.jpg)'

   // get heroes on load
  useEffect(() => {
    // getHeroes().then((res) => {
    //   setHeroes(res.data)
    //   setIsLoadingHeroes(false)
    // })
    // getMaps().then((res) => {
    //   setMaps(res.data)
    //   setIsLoadingMaps(false)
    // })
  }, [])

  return (
    <Router>
      <div className="App" style={{ backgroundImage }}>
        <Navigation />
        <div className="App__pages">
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path="/heroes"
              render={() => (
                <HeroesView heroes={heroes} isLoading={isLoadingHeroes} />
              )}
            />
            <Route
              path="/heroes/:heroId"
              component={HeroView}
            />
            <Route
              exact
              path="/maps"
              render={() => (
                <MapsView maps={maps} isLoading={isLoadingMaps} />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>  
  );
}

export default App
