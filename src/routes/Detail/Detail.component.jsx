import React from 'react';
import './Detail.styles.scss'
import PokemonList from '../../components/Aside/Pokemons/PokemonList.component';
import Header from '../../components/Header/Header.component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { title } from '../../redux/features/pokemon/pokemonSlice';
import PokemonDetail from '../../components/Detail/PokemonDetail.component';
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function Detail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(title('Pokemon asddsasad'));
  }, []);

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
