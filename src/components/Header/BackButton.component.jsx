import React from 'react'
import backArrow from './img/back-arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function BackButton() {
  const { title } = useSelector(state => state.pokemon);
  
  console.log(title);
  
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return (
    <button onClick={goBack}>
      <img height={25} width={25} src={backArrow} alt={backArrow} />
      <h2 className='back-button-text'>{title}</h2>
    </button>
  )
}
