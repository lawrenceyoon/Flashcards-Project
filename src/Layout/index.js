import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../components/Home';
import Create from '../components/Create';
import View from '../components/View';
import EditDeck from '../components/Edit/EditDeck';
import Study from '../components/Study';
import NotFound from './NotFound';

// get create to work first
// work on delete

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <Create />
          </Route>
          <Route exact path="/decks/:deckId">
            <View />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
