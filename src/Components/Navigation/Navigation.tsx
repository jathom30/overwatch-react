import React from 'react'
import { NavLink } from 'react-router-dom'
import { Spacer } from 'Components'
import './Navigation.scss'

export const Navigation = () => {
  return (
    <nav className="Navigation">
      <NavLink
        className="Navigation__link"
        to="/"
        exact
        activeClassName="Navigation__link--is-active"
      >
        Home
      </NavLink>
      <Spacer />
      <NavLink
        className="Navigation__link"
        to="/heroes"
        activeClassName="Navigation__link--is-active"
      >
        Heroes
      </NavLink>
      <Spacer />
      <NavLink
        className="Navigation__link"
        to="/maps"
        activeClassName="Navigation__link--is-active"
      >
        Maps
      </NavLink>
    </nav>
  )
}
