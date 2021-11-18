import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserNameDialog from './UserNameDialog';

import styles from './style/HomePage.module.css';

function HomePage() {
  const history = useHistory();
  const [revele, changeRevele] = useState(false);
  const [userName, setUserName] = useState('');

  const toggle = () => {
    changeRevele(!revele);
  };

  const goToCharacterSelect = () => {
    localStorage.removeItem('username');
    localStorage.setItem('username', userName);
    history.push('characterselect');
  };

  return (
    <div className={styles.home}>
      <div className={styles.homeTitle}>
        <h1>The Quest Game</h1>
      </div>
      <div className={styles.homeText}>
        <p>Bienvenue au jeu dont vous êtes le héros! </p>
      </div>
      <button className={styles.homeButton} onClick={toggle}>
        PLAY
      </button>
      <UserNameDialog revele={revele} toggle={toggle} goToCharacterSelect={goToCharacterSelect} setUserName={setUserName} />
    </div>
  );
}

export default HomePage;
