import React from 'react';

import styles from './style/GameMediaImage.module.css';

function GameMediaImage({ src }) {
  return (
    <div className={styles.GameMediaImage}>
      <img src={src} alt="" />
    </div>
  );
}

export default GameMediaImage;
