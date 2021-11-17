import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import CharacterSelect from './components/CharacterSelect';
import GamePage from './components/GamePage';
import GameFinishPage from './components/GameFinishPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characterselect" component={CharacterSelect} />
        <Route path="/gamepage" component={GamePage} />
        <Route path="/gamefinish" component={GameFinishPage} />
      </Switch>
    </div>
  );
}

export default App;
