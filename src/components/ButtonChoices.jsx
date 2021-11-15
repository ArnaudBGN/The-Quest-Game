import React from 'react';

import styles from './style/ButtonChoice.module.css';

function ButtonChoices({ text, nextId, points, score, setRouteId, setCurrentMessage, setScore }) {
  const handleClick = () => {
    setRouteId(nextId);
    setCurrentMessage(0);
    setScore(() => (score += points));
  };

  return (
    <div>
      <button className={styles.ChoiceButton} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}

export default ButtonChoices;
