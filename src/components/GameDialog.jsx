import React from 'react';

import Message from './Message';

import styles from './style/GameDialog.module.css';

function GameDialog({ messages, currentMessage, setCurrentMessage, countMessage, setCountMessage }) {
  const handleClickNext = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
      setCountMessage(countMessage + 1);
    }
  };
  const handleClickPrevious = () => {
    if (currentMessage > 0) {
      setCurrentMessage(currentMessage - 1);
      setCountMessage(countMessage - 1);
    }
  };

  return (
    <div className={styles.DialogBoxContainer}>
      <div className={styles.DialogBoxTitle}>Un réveil difficile</div>
      <Message message={messages[currentMessage]} key={currentMessage} />
      <div className={styles.DialogBoxFooter}>
        <div>
          <p>
            {countMessage}/{messages.length}
          </p>
        </div>
        <div>
          {currentMessage > 0 ? (
            <button onClick={handleClickPrevious} className={styles.DialogBoxNext}>
              &lt; Previous
            </button>
          ) : null}
          {currentMessage < messages.length - 1 ? (
            <button onClick={handleClickNext} className={styles.DialogBoxNext}>
              Next &gt;
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default GameDialog;
