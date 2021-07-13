import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';

function App(){

  return(
    <BrowserRouter>
      <header>
        <h1>Classy Scrub</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/categoria?tipo=fps&subtipo=doom">FPS</Link></li>
            <li><Link to="/categoria?tipo=hackslash">Hack 'n Slash</Link></li>
            <li><Link to="/categoria?tipo=rpg">RPG</Link></li>
          </ul>
        </nav>
      </header>
      <hr />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria">
          <Categoria />
        </Route>

        <Route path="*">
          <h4>Página não encontrada</h4>
        </Route>

      </Switch>
      <hr />
      <footer>
        Todos os direitos reservados...
      </footer>
    </BrowserRouter>
  );
}

export default App;