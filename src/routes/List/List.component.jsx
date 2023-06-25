import React from 'react';
import './List.styles.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { title } from '../../redux/features/pokemon/pokemonSlice';
import Header from '../../components/Header/Header.component'
import Navigation from '../../components/Aside/Navigation/Navigation.compenent';
import PokemonCards from '../../components/Cards/PokemonCards.component';

export default function List() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(title('Pokemon List'));
  }, []);
  return (
    <main className='list container d-flex justify-content-center align-items-center'>
      <div className='wrapper d-flex'>
        <aside className="aside">
          <Navigation />
        </aside>
        <div className="home-content flex-grow-1">
          <Header />
          <PokemonCards />
        </div>
      </div>
    </main>
  )
}