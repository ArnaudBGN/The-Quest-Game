import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './style/ButtonChoice.module.css';

function ButtonChoices({ text, nextId, points, score, state, setRouteId, setCurrentMessage, setScore }) {
  const histoiry = useHistory();

  const handleChoice = () => {
    setRouteId(nextId);
    setCurrentMessage(0);
    setScore(() => (score += points));
  };

  const goToGameFinishPage = () => {
    histoiry.push('GameFinish', { status: state });
  };

  return (
    <div>
      {nextId !== 'End' ? (
        <button className={styles.ChoiceButton} onClick={handleChoice}>
          {text}
        </button>
      ) : (
        <button className={styles.ChoiceButton} onClick={goToGameFinishPage}>
          {text}
        </button>
      )}
    </div>
  );
}

export default ButtonChoices;
