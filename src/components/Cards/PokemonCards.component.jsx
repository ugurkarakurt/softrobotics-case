import React from 'react'
import PokemonCard from './PokemonCard/PokemonCard.component'
import './PokemonCards.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/features/pokemon/pokemonSlice';
import loadingGif from './img/loading.gif'

export default function PokemonCards() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  return (
    <div className='card-list'>
      {!pokemon ? (
        <>
          <img src={loadingGif} alt="" />
        </>
      ) : (
        <>
          {pokemon.results.map((result) => (
            <PokemonCard key={result.name} result={result} />
          ))}
        </>
      )}
    </div>
  )
}