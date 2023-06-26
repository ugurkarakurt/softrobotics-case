import React from 'react'
import { useSelector } from 'react-redux';

// import { getPokemon } from '../../redux/features/pokemon/pokemonSlice.js';

export default function PokemonDetail() {
  const { poke } = useSelector(state => state.pokemon);
  console.log(poke);

  return (

    <div className='detail-content'>
      {!poke ? (
        <>
          <img src="" alt="" />
        </>
      ) : (
        <>
          <div className="pokemon-information">
            <div className="image-wrapper">
              <img src={poke.sprites.other.dream_world.front_default} alt="" />
            </div>
            <div className="information">
              info
            </div>
          </div>
        </>
      )}

    </div>
  )
}
