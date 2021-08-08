import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ClubDetails from './components/ClubDetails/ClubDetails';
import Home from './components/Home/Home';
function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
         

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/club-details/:cId">
            <ClubDetails/>  
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
