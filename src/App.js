import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from './redux/features/pokemon/pokemonSlice';
import { Button } from 'react-bootstrap/';
import Home from "./routes/Home/Home.component"
import List from "./routes/List/List.component"
import Detail from './routes/Detail/Detail.component'

function App() {
  const dispatch = useDispatch();
  const { asdsad } = useSelector(state => state.pokemons)


  useEffect(() => {
    dispatch(getPokemons());
    console.log('dsasadds');
  }, [])

  console.log(asdsad);


  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
