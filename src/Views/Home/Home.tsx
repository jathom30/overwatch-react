import React from 'react'
import { Link } from 'react-router-dom'
import { HeroesIcon, MapsIcon } from 'Assets'
import './Home.scss'

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__quick-links">
        <Link to="/heroes"><HeroesIcon /></Link>
        <Link to="/maps"><MapsIcon /></Link>
      </div>
      <div className="Home__disclaimer">
        <p>Disclaimer: Current API used may not be 100% accurate</p>
        <a href="https://developers.pandascore.co/doc/index_ow.htm#" target="_blank" rel="noopener noreferrer">Current API docs</a>
      </div>
    </div>
  )
}
