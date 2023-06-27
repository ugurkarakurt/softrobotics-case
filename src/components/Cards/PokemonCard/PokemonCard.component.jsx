import React from 'react'
import './PokemonCard.styles.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../../redux/features/pokemon/pokemonSlice';
import { title } from '../../../redux/features/pokemon/pokemonSlice';
import { useEffect } from 'react';

export default function Pokemons(props) {
  const bgColors = ['bg-purple', 'bg-red', 'bg-lightBlue', 'bg-blue', 'bg-green', 'bg-orange', 'bg-yellow', 'bg-white']
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  const dispatch = useDispatch();
  const { poke } = useSelector(state => state.pokemon);

  const setPokemon = (url) => {
    dispatch(getPokemon(url));
  };

  useEffect(() => {
    dispatch(title(poke.name));
  }, [poke.name]);

  return (
    <Link to="/detail" onClick={() => setPokemon(props.result.url)} className={`card-wrapper rotating-border-card `}>
      <div className='card'>
        <div className="name">{props.result.name}</div>
      </div>
    </Link>
  )
}
