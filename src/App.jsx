import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Character from './components/Character';
import Gamepage from './components/Gamepage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/character" component={Character} />
        <Route path="/gamepage" component={Gamepage} />
      </Switch>
    </div>
  );
}

export default App;
