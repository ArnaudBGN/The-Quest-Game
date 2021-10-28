import React from 'react';
import './HomePage.css';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const handelclick = () => {
    history.push('CharacterSelect');
  };

  return (
    <div className="home-image">
      <div className="home-title">
        <h1>The Quest Game</h1>
      </div>
      <div className="home-text">
        <p>Bienvenue au jeu dont vous êtes le héro! </p>
      </div>
      <button onClick={handelclick}>PLAY</button>
    </div>
  );
}

export default HomePage;
