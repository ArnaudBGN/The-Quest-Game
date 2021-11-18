import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import CharacterSelect from './components/CharacterSelect';
import GamePage from './components/GamePage';
import GameFinishPage from './components/GameFinishPage';
import { ScoreContextProvider } from './contexts/ScoreContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <ScoreContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/characterSelect" component={CharacterSelect} />
          <Route path="/GamePage" component={GamePage} />
          <Route path="/GameFinish" component={GameFinishPage} />
        </Switch>
      </ScoreContextProvider>
    </div>
  );
}

export default App;
