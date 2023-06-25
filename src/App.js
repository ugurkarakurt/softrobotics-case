import { Routes, Route } from 'react-router-dom';

import Home from "./routes/Home/Home.component"
import List from "./routes/List/List.component"
import Detail from './routes/Detail/Detail.component'

function App() {
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
