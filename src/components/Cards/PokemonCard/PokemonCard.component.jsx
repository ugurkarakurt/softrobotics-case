import React from 'react'
import './PokemonCard.styles.scss';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../../redux/features/pokemon/pokemonSlice';


export default function Pokemons(props) {
  const bgColors = ['bg-purple', 'bg-red', 'bg-lightBlue', 'bg-blue', 'bg-green', 'bg-orange', 'bg-yellow', 'bg-white']
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  const dispatch = useDispatch();

  const setPokemon = (url) => {
    dispatch(getPokemon(url));
  };

  return (
    <Link to="/detail" onClick={() => setPokemon(props.result.url)} className={`card-wrapper rotating-border-card `}>
      <div className='card'>
        <div className="name">{props.result.name}</div>
      </div>
    </Link>
  )
}
