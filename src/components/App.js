/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalogue from '../containers/Catalogue';
import Meals from './meals';
import Details from './details';
import SearchForm from '../containers/searchForm';
import SearchResults from '../containers/searchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <span onClick={() => window.location.href = '/'} />
        </div>
        <SearchForm />
        <Switch>
          <Route exact path="/" component={Catalogue} />
          <Route exact path="/:category">
            <Meals />
          </Route>
          <Route exact path="/meal/:details">
            <Details />
          </Route>
          <Route exact path="/search/:item">
            <SearchResults />
          </Route>
        </Switch>
      </header>
    </div>

  );
}

export default App;
