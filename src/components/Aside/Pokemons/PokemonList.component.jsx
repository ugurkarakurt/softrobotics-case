import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import loadingGif from './loading.gif'
import { getPokemons } from '../../../redux/features/pokemon/pokemonSlice';
import PokemonCard from '../../Cards/PokemonCard/PokemonCard.component';

export default function PokemonList() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemon);
  console.log(pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  return (
    <nav>
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
    </nav>
  )
}


