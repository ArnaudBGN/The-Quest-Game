import React from 'react';

import styles from './style/GameMediaImage.module.css';

function GameMediaImage({ src }) {
  return (
    <div className={styles.GameMediaImage}>
      <img src={src} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default GameMediaImage;
