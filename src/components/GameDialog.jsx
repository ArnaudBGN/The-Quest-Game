import React from 'react';
import Message from './Message';

import styles from './style/GameDialog.module.css';

function GameDialog({ messages, currentMessage, setCurrentMessage }) {
  const handleClickNext = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };

  return (
    <div className={styles.DialogBoxContainer}>
      <div className={styles.DialogBoxTitle}>Dialog title</div>
      <Message message={messages[currentMessage]} key={currentMessage} />
      <div className={styles.DialogBoxFooter}>
        <button onClick={handleClickNext} className={styles.DialogBoxNext}>
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default GameDialog;
