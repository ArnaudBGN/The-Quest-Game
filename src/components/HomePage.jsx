import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../components/styles/HomePage.module.css';

function HomePage() {
  const history = useHistory();

  const handelclick = () => {
    history.push('CharacterSelect');
  };

  return (
    <div className={styles.home}>
      <div className={styles.homeTitle}>
        <h1>The Quest Game</h1>
      </div>
      <div className={styles.homeText}>
        <p>Bienvenue au jeu dont vous êtes le héros!</p>
      </div>
      <button className={styles.homeButton} onClick={handelclick}>
        PLAY
      </button>
    </div>
  );
}

export default HomePage;
