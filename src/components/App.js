import React from 'react';
import Catalogue from '../containers/Catalogue';
import Meals from '../components/meals';
import Details from '../components/details';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Switch>
             <Route exact path='/' component={Catalogue}/>
             <Route exact path="/:category">
               <Meals />
             </Route>
             <Route path="/meal/:details">
               <Details />
             </Route>
           </Switch>
      </header>
    </div>

  );
}

export default App;
