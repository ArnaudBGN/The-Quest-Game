import React from 'react';

import GameMediaImage from './GameMediaImage';
import GameMediaVideo from './GameMediaVideo';

import styles from './style/GameMediaDisplay.module.css';

function GameMediaDisplay({ media }) {
  return (
    <div className={styles.GameMediaDisplay}>{media.type === 'image' ? <GameMediaImage src={media.src} /> : <GameMediaVideo src={media.src} />}</div>
  );
}

export default GameMediaDisplay;
