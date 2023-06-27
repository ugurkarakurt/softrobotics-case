import React from 'react';
import './Detail.styles.scss'
import PokemonList from '../../components/Aside/Pokemons/PokemonList.component';
import Header from '../../components/Header/Header.component';
import PokemonDetail from '../../components/Detail/PokemonDetail.component';

export default function Detail() {
  return (
    <main className='detail container d-flex justify-content-center align-items-center'>
      <div className='wrapper d-flex'>
        <aside className="aside">
          <PokemonList />
        </aside>
        <div className="detail-content flex-grow-1">
          <Header />
          <div className="detail-wrapper">
            <PokemonDetail />
          </div>
        </div>
      </div>
    </main>
  )
}
