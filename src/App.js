import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
