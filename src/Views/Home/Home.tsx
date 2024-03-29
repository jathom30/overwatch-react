import React from 'react'
// import { Link } from 'react-router-dom'
// import { HeroesIcon, MapsIcon } from 'Assets'
import { AppleBreath, Loading } from 'Components'
import './Home.scss'
import { Cube } from 'Components/Cube'

export const Home = () => {
  return (
    <div className="Home">
      {/* <h1 className="Home__finding-game">Finding game</h1> */}
      <Loading />
      <div className="Home__apple-background">
        <AppleBreath />
      </div>
      <div className="Home__cubes">
        <Cube />
      </div>
      {/* <span className="Home__searching">Searching for a game</span>
      <div className="Home__quick-links">
        <Link to="/heroes"><HeroesIcon /></Link>
        <Link to="/maps"><MapsIcon /></Link>
      </div>
      <div className="Home__disclaimer">
        <p>Disclaimer: Current API used may not be 100% accurate</p>
        <a href="https://developers.pandascore.co/doc/index_ow.htm#" target="_blank" rel="noopener noreferrer">Current API docs</a>
      </div> */}
    </div>
  )
}
