// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.css';
import Nav from 'src/containers/Nav';
import TopBar from 'src/components/TopBar';
import Home from 'src/components/Home';
import Recipe from 'src/containers/Recipe';
import NotFound from 'src/components/NotFound';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <main className="main-content">
      <TopBar />
      <Switch>
        {/* on peut passer la prop component avec le composant si on a pas de data à transmettre */}
        <Route exact path="/" component={Home} />

        {/* Route pour une page de recette */}
        <Route exact path="/recipe/:slug" component={Recipe} />

        {/* Cas "404" */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  </div>
);

// == Export
export default App;
