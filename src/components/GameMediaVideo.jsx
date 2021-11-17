import React from 'react';

import styles from './style/GameMediaVideo.module.css';

function GameMediaVideo({ src }) {
  return (
    <div className={styles.GameMediaVideo}>
      <iframe
        title="video"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default GameMediaVideo;
