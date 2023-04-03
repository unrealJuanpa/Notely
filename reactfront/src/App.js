import './App.css';

import CompShowNotas from './notas/ShowNotas.js';
import CompCreateNotas from './notas/CreateNotas.js';
import CompEditNotas from './notas/EditNotas.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowNotas/>}/>
          <Route path='/notas/create' element={ <CompCreateNotas/>}/>
          <Route path='/notas/edit/:id' element={ <CompEditNotas/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

