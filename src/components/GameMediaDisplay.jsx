import React from 'react';

import GameMediaImage from './GameMediaImage';
import GameMediaVideo from './GameMediaVideo';

function GameMediaDisplay({ media }) {
  return <div>{media.type === 'image' ? <GameMediaImage src={media.src} /> : <GameMediaVideo src={media.src} />}</div>;
}

export default GameMediaDisplay;
