import React from 'react';
import './List.styles.scss';
import Navigation from '../../components/Aside/Navigation/Navigation.compenent';

export default function List() {

  return (
    <main className='home container vh-100 d-flex justify-content-center align-items-center'>
      <div className='wrapper d-flex'>
        <aside className="aside">
          <Navigation />
        </aside>
        <div className="content flex-grow-1">
          list
        </div>
      </div>
    </main>
  )
}