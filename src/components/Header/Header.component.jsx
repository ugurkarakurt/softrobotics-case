import React from 'react';
import './scss/header.scss';
import BackButton from './BackButton.component';
import SearchBar from './SearchBar.component'

export default function Header() {
  return (
    <header>
      <div className="back-button">
        <BackButton />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </header>
  )
}
