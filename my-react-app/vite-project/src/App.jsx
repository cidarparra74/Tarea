import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Acerca from './AcercaDe';
import IniciarSesion from './IniciarSesion';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Inicio/>} />
          <Route path='/acerca' element={<Acerca/>} />
          <Route path='/iniciar-sesion' element={<IniciarSesion/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
