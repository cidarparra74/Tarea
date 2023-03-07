import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Acerca from './AcercaDe';
import IniciarSesion from './IniciarSesion';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/acerca" component={Acerca} />
          <Route path="/iniciar-sesion" component={IniciarSesion} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
