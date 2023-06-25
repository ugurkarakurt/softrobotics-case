import React from 'react';
import './Detail.styles.scss'
import Navigation from '../../components/Aside/Navigation/Navigation.compenent';
import Header from '../../components/Header/Header.component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { title } from '../../redux/features/pokemon/pokemonSlice';

export default function Detail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(title('Pokemon asddsasad'));
  }, []);

  return (
    <main className='detail container d-flex justify-content-center align-items-center'>
      <div className='wrapper d-flex'>
        <aside className="aside">
          <Navigation />
        </aside>
        <div className="home-content flex-grow-1">
          <Header />
          <div className="cover-image">
          </div>
        </div>
      </div>
    </main>
  )
}
