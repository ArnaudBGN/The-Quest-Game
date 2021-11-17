import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './style/GameFinishPage.module.css';
import Video from '../Assets/Vintage - 55607.mp4';

function GameFinishPage() {
  const histoiry = useHistory();
  const location = useLocation();
  const [isWinned, setIsWinned] = useState(true);

  useEffect(() => {
    location.state.status !== undefined ? setIsWinned(location.state.status) : null;
  }, []);

  const playAgain = () => {
    histoiry.push('GamePage');
  };

  const goToCharacterSelect = () => {
    histoiry.push('CharacterSelect');
  };

  return (
    <div className={styles.GameFinishPageContainer}>
      <video className={styles.BackgroundVideo} autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
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
