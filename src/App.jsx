import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import GameFinishPage from './components/GameFinishPage';
import { ScoreContextProvider } from './contexts/ScoreContext';

import './App.css';

const CharacterSelect = lazy(() => import('./components/CharacterSelect'));
const GamePage = lazy(() => import('./components/GamePage'));

function App() {
  return (
    <div className="App">
      <ScoreContextProvider>
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/characterselect" component={CharacterSelect} />
            <Route path="/gamepage" component={GamePage} />
            <Route path="/gamefinish" component={GameFinishPage} />
          </Switch>
        </Suspense>
      </ScoreContextProvider>
    </div>
  );
}

export default App;
