import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Acerca from './Acerca';
import IniciarSesion from './IniciarSesion';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route path="/acerca" element={<Acerca/>} />
          <Route path="/iniciar-sesion" element={<IniciarSesion/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
