import React from 'react';
import './scss/header.scss';
import BackButton from './BackButton.component';

export default function Header() {
  return (
    <header>
      <div className="back-button">
        <BackButton />
      </div>
    </header>
  )
}
