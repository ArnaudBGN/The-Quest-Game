import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './style/GameFinishPage.module.css';

function GameFinishPage() {
  const histoiry = useHistory();
  const location = useLocation();
  const [isWinned, setIsWinned] = useState(true);

  useEffect(() => {
    setIsWinned(location.state.status);
  }, []);

  const playAgain = () => {
    histoiry.push('GamePage');
  };

  const goToCharacterSelect = () => {
    histoiry.push('CharacterSelect');
  };

  return (
    <div className={styles.GameFinishPageContainer}>
      <div className={styles.GameFinishText}>
        <p className={styles.GameFinishStatus}>{isWinned ? 'Encore une victoire de canard' : 'Vous êtes nul !'}</p>
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
