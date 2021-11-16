import React from 'react';

function GameMediaVideo({ src }) {
  return (
    <div>
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
