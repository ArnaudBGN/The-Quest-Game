import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserNameDialog from './UserNameDialog';
import './HomePage.css';

function HomePage() {
  const history = useHistory();
  const [revele, changeRevele] = useState(false);
  const [userName, setUserName] = useState('');

  const toggle = () => {
    changeRevele(!revele);
  };

  const goToCharacterSelect = () => {
    localStorage.setItem('username', userName);
    history.push('CharacterSelect');
  };

  return (
    <div className="home">
      <div className="home-title">
        <h1>The Quest Game</h1>
      </div>
      <div className="home-text">
        <p>Bienvenue au jeu dont vous êtes le héros! </p>
      </div>
      <button className="homeButton" onClick={toggle}>
        PLAY
      </button>
      <UserNameDialog revele={revele} toggle={toggle} goToCharacterSelect={goToCharacterSelect} setUserName={setUserName} />
    </div>
  );
}

export default HomePage;
