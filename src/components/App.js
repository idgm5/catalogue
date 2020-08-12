import React from 'react';
import Catalogue from '../containers/Catalogue';
import Meals from '../components/meals';
import Details from '../components/details';
import {Route, Switch} from 'react-router-dom';
import SearchForm from '../containers/searchForm';
import SearchResults from '../containers/searchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="title">
            <span onClick={() => window.location.href = '/'} ></span>
          </div>
          <SearchForm />
           <Switch>
             <Route exact path='/' component={Catalogue}/>
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
