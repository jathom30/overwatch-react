import React, { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getHero, getHeroes } from 'Requests'
import { Home, Heroes } from 'Views'
import { HeroType } from 'Types'
import { OverwatchText } from 'Assets'

function App() {
  const [heroes, setHeros] = useState<HeroType[]>([])

  useEffect(() => {
    getHeroes().then((res) => {
      setHeros(res.data)
    })
  }, [])
  // const handleClickOne = (id: number) => {
  //   getHero(id).then((res) => {
  //     console.log(res.data)
  //   })
  // }
  const backgroundImage = 'url(https://d3hmvhl7ru3t12.cloudfront.net/img/ow-heroes-bg-eaa5e09760cf1e126669f9e3a1e1b7e12a4c0c73bb86728015299d99c1907ac1218f0a4304c6233547ae1e93d104adc88636aead01deb7bfebeeb666f07574e3.jpg)'
  return (
    <Router>
      <div className="App" style={{ backgroundImage }}>
        <div className="App__hero-logo">
          <OverwatchText />
        </div>
        {/* <button type="button" onClick={handleClick}>heroes</button>
        <button type="button" onClick={() => handleClickOne(634)}>hero</button> */}
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path="/heroes"
            render={() => <Heroes heroes={heroes} />}
          />
        </Switch>
      </div>
    </Router>  
  );
}

export default App
