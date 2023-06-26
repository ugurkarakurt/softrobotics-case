import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import loadingGif from './loading.gif'
import { getPokemons } from '../../../redux/features/pokemon/pokemonSlice';
import PokemonCard from '../../Cards/PokemonCard/PokemonCard.component';
import { Scrollbars } from 'react-custom-scrollbars-2';

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
        <Scrollbars style={{ width: 180, height: 400 }}>
          {pokemon.results.map((result) => (
            <PokemonCard key={result.name} result={result} />
          ))}
        </Scrollbars>
      )}
    </nav>
  )
}


