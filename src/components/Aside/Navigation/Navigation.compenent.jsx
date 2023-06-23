import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.styles.scss';
import homeLogo from './img/psyduck.png';
import pokemonList from './img/pokemon-list.png';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" activeclassname="active">
        <img className='colorless' src={homeLogo} alt="medal" />
      </NavLink>

      <NavLink to="/list" activeclassname="active">
        <img className='colorless' src={pokemonList} alt="medal" />
      </NavLink>
    </nav>
  )
}
