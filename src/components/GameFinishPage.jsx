import React, { useState, useEffect } from 'react';

import styles from './style/GameFinishPage.module.css';

function GameFinishPage() {
  const [isWinned, setIsWinned] = useState(true);

  useEffect(() => {
    setIsWinned(true);
  }, []);

  return (
    <div className={styles.GameFinishPageContainer}>
      <div className={styles.GameFinishStatus}>
        <p>{isWinned ? 'You Win !!!!' : 'You Lose :('}</p>
      </div>
    </div>
  );
}

export default GameFinishPage;
