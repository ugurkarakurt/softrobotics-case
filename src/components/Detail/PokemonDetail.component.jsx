import React from 'react'
import './PokemonDetail.styles.scss'
import { useSelector } from 'react-redux';
import loadingGif from '../Cards/img/loading.gif'

export default function PokemonDetail() {
  const { poke } = useSelector(state => state.pokemon);

  return (

    <div className='detail-content'>
      {!poke ? (
        <>
          <img src={loadingGif} alt="" />
        </>
      ) : (
        <>
          <div className="pokemon-information">
            <div className="image-wrapper">
              <img src={poke.sprites.other.dream_world.front_default} alt="" />
            </div>
            <div className="information">
              <h1 className='tavasapi'>{poke.name}</h1>
              <h2>Information</h2>
              <div className="types info">
                <h3>Type <span>:</span> </h3>
                <div className="type">
                  {poke.types.map(({ type }, index) => (
                    <p key={type.name}>{(index ? '/ ' : '') + type.name}</p>
                  ))}
                </div>
              </div>
              <div className="abilities info">
                <h3>Abilities  <span>:</span> </h3>
                <div className="ability">
                  {poke.abilities.map(({ ability }, index) => (
                    <p key={ability.name}>{(index ? '/ ' : '') + ability.name}</p>
                  ))}
                </div>
              </div>
              <div className="species info">
                <h3>Species  <span>:</span> </h3>
                <p>{poke.species.name}</p>
              </div>
              <div className="weight info">
                <h3>weight  <span>:</span> </h3>
                <p>{poke.weight} cm</p>
              </div>
              <div className="height info">
                <h3>height <span>:</span> </h3>
                <p>{poke.height} kg</p>
              </div>

            </div>
          </div>
        </>
      )}

    </div>
  )
}
