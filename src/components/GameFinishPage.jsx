import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import ScoreContext from '../contexts/ScoreContext';

import styles from './style/GameFinishPage.module.css';
import Video from '../Assets/Vintage - 55607.mp4';

function GameFinishPage() {
  const history = useHistory();
  const location = useLocation();
  const [isWinned, setIsWinned] = useState(true);
  const { score } = useContext(ScoreContext);

  useEffect(() => {
    setIsWinned(location.state.status);
  }, []);

  const playAgain = () => {
    history.push('gamepage');
  };

  const goToCharacterSelect = () => {
    history.push('characterselect');
  };

  return (
    <div className={styles.GameFinishPageContainer}>
      <video className={styles.BackgroundVideo} autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={styles.GameFinishText}>
        <p className={styles.GameFinishStatus}>{isWinned ? 'Encore une victoire de canard' : 'Vous êtes nul !'}</p>
        <p className={styles.GameFinishScore}>Score : {score}</p>
        <p className={styles.GameFinishNext}>Que souhaitez-vous faire ?</p>
      </div>
      <div className={styles.GameFinishChoices}>
        <button onClick={playAgain}>{`Rejouer l'aventure`}</button>
        <button onClick={goToCharacterSelect}>{`Retourner à l'écran de sélection`}</button>
      </div>
    </div>
  );
}

export default GameFinishPage;
