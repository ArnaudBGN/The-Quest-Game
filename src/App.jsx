import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import CharacterSelect from './components/CharacterSelect';
import GamePage from './components/GamePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characterSelect" component={CharacterSelect} />
        <Route path="/GamePage" component={GamePage} />
      </Switch>
    </div>
  );
}

export default App;
