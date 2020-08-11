import React from 'react';
import Catalogue from '../containers/Catalogue';
import Meals from '../components/meals';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Switch>
             <Route exact path='/' component={Catalogue}/>
             <Route path="/:category">
               <Meals />
             </Route>
           </Switch>
      </header>
    </div>

  );
}

export default App;
