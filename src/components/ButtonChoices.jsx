import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ScoreContext from '../contexts/ScoreContext';

import styles from './style/ButtonChoice.module.css';

function ButtonChoices({ text, nextId, points, state, caption, setRouteId, setCurrentMessage }) {
  const history = useHistory();
  const { score, setScore } = useContext(ScoreContext);

  const handleChoice = () => {
    setRouteId(nextId);
    setCurrentMessage(0);
    setScore(score + points);
  };

  const goToGameFinishPage = () => {
    setScore(score + points);
    history.push('gamefinish', { status: state, caption: caption });
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
