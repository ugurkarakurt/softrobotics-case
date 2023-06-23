import React from 'react';
import './Home.styles.scss';
import Navigation from '../../components/Aside/Navigation/Navigation.compenent';
import Header from '../../components/Header/Header.component'
import coverImage from './img/home.gif';

export default function Home() {

  return (
    <main className='home container vh-100 d-flex justify-content-center align-items-center'>
      <div className='wrapper d-flex'>
        <aside className="aside">
          <Navigation />
        </aside>
        <div className="home-content flex-grow-1">
          <Header />

          <div className="cover-image">
            <img src={coverImage} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}