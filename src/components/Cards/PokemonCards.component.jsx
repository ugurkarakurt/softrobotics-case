import React from 'react'
import PokemonCard from './PokemonCard/PokemonCard.component'
import './PokemonCards.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/features/pokemon/pokemonSlice';
import loadingGif from './img/loading.gif'
import { Button } from 'react-bootstrap';

export default function PokemonCards() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemon);
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    dispatch(getPokemons(baseUrl));
  }, []);

  const setPage = (url) => {
    dispatch(getPokemons(url));
    return () => {
      dispatch(getPokemons(null));
    };
  };

  return (
    <div className='card-list'>
      {!pokemon ? (
        <>
          <img src={loadingGif} alt="" />
        </>
      ) : (
        <div className='list'>
          {pokemon.results.map((result) => (
            <PokemonCard key={result.name} result={result} />
          ))}
        </div>
      )}
      <div className="pagination">
        <Button onClick={() => setPage(pokemon.previous)} className={"previous " + (pokemon.previous ? '' : 'disabled')}>&#8249;</Button>
        <Button onClick={() => setPage(pokemon.next)} className={"next " + (pokemon.next ? '' : 'disabled')}>&#8250;</Button>
      </div>
    </div>
  )
}