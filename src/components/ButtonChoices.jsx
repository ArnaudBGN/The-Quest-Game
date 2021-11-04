import React from 'react';

import styles from './style/ButtonChoice.module.css';

function ButtonChoices({ text, nextId, setRouteId, setCurrentMessage }) {
  const handleClick = () => {
    setRouteId(nextId);
    setCurrentMessage(0);
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
